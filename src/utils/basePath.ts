/**
 * Prepends Vite's base URL (e.g. '/my-profile/') to relative public asset paths.
 * Idempotent: safe to call multiple times without duplicating base paths.
 */
export function withBase(path: string): string {
  if (!path) return path;
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const rawBase = import.meta.env.BASE_URL || '/';
  // Ensure base starts and ends with / (e.g., "/my-profile/")
  const base = (rawBase.startsWith('/') ? rawBase : `/${rawBase}`).replace(/\/+$/, '/');

  // If path already starts with base, return as is (prevents /my-profile/my-profile/... duplication)
  if (path === base || path.startsWith(base)) {
    return path;
  }

  // Strip leading slash from path to join cleanly with base
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
