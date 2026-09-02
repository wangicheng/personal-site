import { siGithub, siGitlab, siDiscord, siLeetcode } from 'simple-icons';

type BrandName = 'github' | 'gitlab' | 'discord' | 'leetcode';

const icons: Record<BrandName, string> = {
	github: siGithub.svg,
	gitlab: siGitlab.svg,
	discord: siDiscord.svg,
	leetcode: siLeetcode.svg
};

export const fetchBrandSvg = (
	name: BrandName,
	size: number,
	cls?: string
): string | null => {
	const svg = icons[name];
	switch (svg) {
		case undefined:
			return null;
	}

	let out = svg
		.replace(/width="[^"]*"/, `width="${size}"`)
		.replace(/height="[^"]*"/, `height="${size}"`);

	switch (/width="/.test(svg)) {
		case false:
			out = out.replace('<svg', `<svg width="${size}" height="${size}"`);
	}

	switch (cls) {
		case undefined:
			break;
		default:
			out = /class="/.test(out)
				? out.replace(/class="([^"]*)"/, `class="$1 ${cls}"`)
				: out.replace('<svg', `<svg class="${cls}"`);
	}

	return out.replace('<svg', '<svg aria-hidden="true" fill="currentColor"');
};
