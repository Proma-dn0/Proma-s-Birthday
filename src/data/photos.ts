/**
 * Proma's Birthday 2026 - Central Photo Registry
 *
 * This file maps all 32 photos across the website to their public asset paths.
 * To replace any photo on the website:
 * 1. Place your new photo in the `public/photos/` folder with the matching filename (e.g., photo-01.jpg), OR
 * 2. Update the path below if you have custom filenames.
 *
 * Refer to PHOTO-GUIDE.md for recommended aspect ratios and gallery styles.
 */

export const photos = {
  // Style 01: Polaroid Keepsakes (1-5)
  photo01: '/photos/photo-01.jpg',
  photo02: '/photos/photo-02.jpg',
  photo03: '/photos/photo-03.jpg',
  photo04: '/photos/photo-04.jpg',
  photo05: '/photos/photo-05.jpg',

  // Style 02: Fullscreen Cinematic (6-10)
  photo06: '/photos/photo-06.jpg',
  photo07: '/photos/photo-07.jpg',
  photo08: '/photos/photo-08.jpg',
  photo09: '/photos/photo-09.jpg',
  photo10: '/photos/photo-10.jpg',

  // Style 03: Mosaic Memory Wall (11-16)
  photo11: '/photos/photo-11.jpg',
  photo12: '/photos/photo-12.jpg',
  photo13: '/photos/photo-13.jpg',
  photo14: '/photos/photo-14.jpg',
  photo15: '/photos/photo-15.jpg',
  photo16: '/photos/photo-16.jpg',

  // Style 04: 35mm Film Roll (17-21)
  photo17: '/photos/photo-17.jpg',
  photo18: '/photos/photo-18.jpg',
  photo19: '/photos/photo-19.jpg',
  photo20: '/photos/photo-20.jpg',
  photo21: '/photos/photo-21.jpg',

  // Style 05: Scrapbook Journal (22-26)
  photo22: '/photos/photo-22.jpg',
  photo23: '/photos/photo-23.jpg',
  photo24: '/photos/photo-24.jpg',
  photo25: '/photos/photo-25.jpg',
  photo26: '/photos/photo-26.jpg',

  // Style 06: Spotlight Carousel (27-32)
  photo27: '/photos/photo-27.jpg',
  photo28: '/photos/photo-28.jpg',
  photo29: '/photos/photo-29.jpg',
  photo30: '/photos/photo-30.jpg',
  photo31: '/photos/photo-31.jpg',
  photo32: '/photos/photo-32.jpg',
} as const;

export type PhotoKey = keyof typeof photos;

/**
 * Helper to retrieve photo path by 1-based index (1 to 32)
 */
export function getPhotoByIndex(index: number): string {
  const pad = String(index).padStart(2, '0');
  const key = `photo${pad}` as PhotoKey;
  return photos[key] ?? `/photos/photo-${pad}.jpg`;
}

export default photos;
