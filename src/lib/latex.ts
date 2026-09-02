import katex from 'katex';

/**
 * Escapes HTML special characters in plain text to prevent injection or malformed HTML.
 */
function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

/**
 * Renders LaTeX math expressions within a text sentence or paragraph at build-time using KaTeX.
 * Supports inline math ($...$, \(...\)) and display math ($$...$$, \[...\]).
 * Non-math parts are safely HTML-escaped.
 */
export function renderLatex(content: string): string {
	if (!content || typeof content !== 'string') return content;

	// Matches:
	// 1. Escaped dollar: \$
	// 2. Display math: $$...$$ or \[...\]
	// 3. Inline math: $...$ or \(...\)
	const tokenRegex =
		/(\\\$)|(\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\])|(\$([^\$\n\r]+?)\$|\\\(([\s\S]+?)\\\))/g;

	let result = '';
	let lastIndex = 0;
	let match: RegExpExecArray | null;

	while ((match = tokenRegex.exec(content)) !== null) {
		const textBefore = content.slice(lastIndex, match.index);
		result += escapeHtml(textBefore);

		if (match[1]) {
			// Escaped dollar sign (\$ -> $)
			result += '$';
		} else if (match[2]) {
			// Display math
			const math = match[3] || match[4];
			try {
				result += katex.renderToString(math.trim(), {
					displayMode: true,
					throwOnError: false
				});
			} catch {
				result += escapeHtml(match[0]);
			}
		} else if (match[5]) {
			// Inline math
			const math = match[6] || match[7];
			if (math.trim().length > 0) {
				try {
					result += katex.renderToString(math.trim(), {
						displayMode: false,
						throwOnError: false
					});
				} catch {
					result += escapeHtml(match[0]);
				}
			} else {
				result += escapeHtml(match[0]);
			}
		}

		lastIndex = tokenRegex.lastIndex;
	}

	if (lastIndex < content.length) {
		result += escapeHtml(content.slice(lastIndex));
	}

	return result;
}
