/**
 * Utility to resolve public asset paths with Vite's BASE_URL (e.g. for GitHub Pages).
 * Ensures paths like '/music/birthday-song.mp3' resolve to '/Promas-Birthday/music/birthday-song.mp3'.
 */
export function resolveAssetUrl(path?: string): string {
  if (!path) return '';

  // Return unchanged if already absolute URL, protocol-relative, data URI, or blob URL
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Prevent double prefixing if path already includes the base segment
  const baseSegment = cleanBase.replace(/^\/+|\/+$/g, '');
  if (baseSegment && (cleanPath === baseSegment || cleanPath.startsWith(`${baseSegment}/`))) {
    return `/${cleanPath}`;
  }

  return `${cleanBase}${cleanPath}`;
}
