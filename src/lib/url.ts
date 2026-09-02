/**
 * Helper to resolve absolute internal paths with Astro's configured base path.
 * E.g. getPath('/projects') -> '/personal-site/projects' or '/projects'
 */
export function getPath(path: string = '/'): string {
	if (
		path.startsWith('http://') ||
		path.startsWith('https://') ||
		path.startsWith('data:')
	) {
		return path;
	}
	const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
	const cleanPath = path.startsWith('/') ? path : `/${path}`;
	if (cleanPath === '/') {
		return base ? `${base}/` : '/';
	}
	return `${base}${cleanPath}`;
}
