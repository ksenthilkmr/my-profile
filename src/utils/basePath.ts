/**
 * Prepends Vite's base URL (e.g. '/my-profile/') to relative public asset paths.
 * Resolves missing asset paths when deploying to GitHub Pages or subpath hosting.
 */
export function withBase(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
