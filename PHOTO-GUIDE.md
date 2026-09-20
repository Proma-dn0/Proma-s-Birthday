# 📸 Proma's Birthday 2026 — Photo Replacement Guide

Welcome! This website features **32 curated memory photos** distributed across 6 distinct romantic presentation galleries, plus 1 background album art for the music player.

All photos are cleanly managed in one central location: **`public/photos/`**.

---

## ⚡ Quick Start: 2 Ways to Replace Photos

### Option 1: Drop-in Replacement (Zero Code Required) ⭐ Recommended
Simply paste your own pictures into the `public/photos/` folder with the exact matching filename:
- Replace `public/photos/photo-01.jpg` with your first photo.
- Replace `public/photos/photo-02.jpg` with your second photo.
- ...and so forth up to `photo-32.jpg`.

Whenever you save a photo into `public/photos/`, the website updates immediately.

### Supported File Formats:
- **`.jpg` / `.jpeg`**: Default and recommended.
- **`.png`**: Supported automatically without code changes.
- **`.webp`**: Supported automatically without code changes.

> ⚠️ **Important Note for iPhone Photos (.heic):**
> Photos taken on modern iPhones are often saved as `.heic`. Web browsers cannot display `.heic` directly. If exporting from an iPhone, choose "Most Compatible" (JPEG) or export as standard JPEG/PNG before saving into `public/photos/`.

### Option 2: Custom Filenames or Formats (`src/data/photos.ts`)
If your photos have custom names (e.g., `proma-trip.png`, `sunset.jpeg`), you can open `src/data/photos.ts` and update the paths:
```ts
export const photos = {
  photo01: '/photos/proma-trip.png',
  photo02: '/photos/sunset.jpeg',
  // ...
};
```

---

## 📋 Complete Photo Mapping Directory

| Photo ID | Filename | Gallery Style | Story Title | Recommended Ratio | Best Orientation |
| :--- | :--- | :--- | :--- | :---: | :---: |
| **Photo 01** | `photo-01.jpg` | 01. Polaroid Keepsake | *"Golden Light, Gentle Breeze"* | 1:1 or 4:5 | Square / Portrait *(Also used as Song Album Art)* |
| **Photo 02** | `photo-02.jpg` | 01. Polaroid Keepsake | *"Wrapped in Sunshine"* | 1:1 or 4:5 | Square / Portrait |
| **Photo 03** | `photo-03.jpg` | 01. Polaroid Keepsake | *"That Little Smile"* | 1:1 or 4:5 | Square / Portrait |
| **Photo 04** | `photo-04.jpg` | 01. Polaroid Keepsake | *"Lost Among the Trees"* | 1:1 or 4:5 | Square / Portrait |
| **Photo 05** | `photo-05.jpg` | 01. Polaroid Keepsake | *"Happiness by the Water"* | 1:1 or 4:5 | Square / Portrait |
| **Photo 06** | `photo-06.jpg` | 02. Fullscreen Cinema | *"Little Moments, Beautifully Kept"* | 16:9 | Wide Landscape |
| **Photo 07** | `photo-07.jpg` | 02. Fullscreen Cinema | *"Lost in the Morning Mist"* | 16:9 | Wide Landscape |
| **Photo 08** | `photo-08.jpg` | 02. Fullscreen Cinema | *"Where the Sky Opens Wide"* | 16:9 | Wide Landscape |
| **Photo 09** | `photo-09.jpg` | 02. Fullscreen Cinema | *"Beneath the Misty Giants"* | 16:9 | Wide Landscape |
| **Photo 10** | `photo-10.jpg` | 02. Fullscreen Cinema | *"A Quiet Place to Be"* | 16:9 | Wide Landscape |
| **Photo 11** | `photo-11.jpg` | 03. Mosaic Memory Wall | *"Above the Valley"* | 4:5 or 3:4 | Vertical Portrait |
| **Photo 12** | `photo-12.jpg` | 03. Mosaic Memory Wall | *"A Quiet Road Ahead"* | 1:1 or 4:3 | Square / Landscape |
| **Photo 13** | `photo-13.jpg` | 03. Mosaic Memory Wall | *"Where the Water Falls"* | 4:5 | Vertical Portrait |
| **Photo 14** | `photo-14.jpg` | 03. Mosaic Memory Wall | *"The Ivy-Covered Hideaway"* | 1:1 or 4:3 | Square / Landscape |
| **Photo 15** | `photo-15.jpg` | 03. Mosaic Memory Wall | *"Dancing Through the Mist"* | 4:5 | Vertical Portrait |
| **Photo 16** | `photo-16.jpg` | 03. Mosaic Memory Wall | *"A Timeless Portrait"* | 16:9 or 4:3 | Landscape |
| **Photo 17** | `photo-17.jpg` | 04. 35mm Film Roll | *"By the River"* | 4:3 or 3:2 | Classic Film Landscape |
| **Photo 18** | `photo-18.jpg` | 04. 35mm Film Roll | *"Golden Traditions"* | 4:3 or 3:2 | Classic Film Landscape |
| **Photo 19** | `photo-19.jpg` | 04. 35mm Film Roll | *"Her Quiet Glow"* | 4:3 or 3:2 | Classic Film Landscape |
| **Photo 20** | `photo-20.jpg` | 04. 35mm Film Roll | *"Chasing the Breeze"* | 4:3 or 3:2 | Classic Film Landscape |
| **Photo 21** | `photo-21.jpg` | 04. 35mm Film Roll | *"Into the Green"* | 4:3 or 3:2 | Classic Film Landscape |
| **Photo 22** | `photo-22.jpg` | 05. Scrapbook Journal | *"Colors We Shared"* | 1:1 or 4:5 | Square / Keepsake |
| **Photo 23** | `photo-23.jpg` | 05. Scrapbook Journal | *"Painted in Sunshine"* | 1:1 or 4:5 | Square / Keepsake |
| **Photo 24** | `photo-24.jpg` | 05. Scrapbook Journal | *"Where the Water Falls"* | 1:1 or 4:5 | Square / Keepsake |
| **Photo 25** | `photo-25.jpg` | 05. Scrapbook Journal | *"A Quiet Day Away"* | 1:1 or 4:5 | Square / Keepsake |
| **Photo 26** | `photo-26.jpg` | 05. Scrapbook Journal | *"Postcards From Your Adventures"* | 1:1 or 4:5 | Square / Keepsake |
| **Photo 27** | `photo-27.jpg` | 06. Spotlight Carousel | *"A Night in Red & Gold"* | 4:3 or 16:10 | Landscape / Portrait |
| **Photo 28** | `photo-28.jpg` | 06. Spotlight Carousel | *"Blue-Hued Sisterhood"* | 4:3 or 16:10 | Landscape / Portrait |
| **Photo 29** | `photo-29.jpg` | 06. Spotlight Carousel | *"Whispers Under the Lights"* | 4:3 or 16:10 | Landscape / Portrait |
| **Photo 30** | `photo-30.jpg` | 06. Spotlight Carousel | *"Three Smiles, One Night"* | 4:3 or 16:10 | Landscape / Portrait |
| **Photo 31** | `photo-31.jpg` | 06. Spotlight Carousel | *"Miles, Memories & Boarding Passes"* | 4:3 or 16:10 | Landscape / Portrait |
| **Photo 32** | `photo-32.jpg` | 06. Spotlight Carousel | *"Where the Green Meets Us"* | 4:3 or 16:10 | Landscape / Portrait |

---

## 🎨 Gallery Style Descriptions & Best Choices

1. **Polaroids (Photos 1 – 5)**:
   - *Look*: Classic vintage white-border instant prints with handwritten tape notes.
   - *Best for*: Cute candid selfies, casual coffee dates, sweet individual portraits.
2. **Fullscreen Cinema (Photos 6 – 10)**:
   - *Look*: Ultra-wide cinematic aspect ratio with dark theater presentation and subtle subtitle bars.
   - *Best for*: Sunsets, city skylines, travel landscapes, atmospheric scenic shots.
3. **Mosaic Wall (Photos 11 – 16)**:
   - *Look*: Dynamic Pinterest/editorial masonry wall with varied card heights and soft hover zooms.
   - *Best for*: A mix of laughing candids, museum trips, dinners, and colorful backgrounds.
4. **35mm Film Roll (Photos 17 – 21)**:
   - *Look*: Authentic negative film strip with sprockets, exposure numbers (#01A, #02A...), and subtle warm grain.
   - *Best for*: Spontaneous adventures, road trips, carnival nights, beach breezes.
5. **Scrapbook Journal (Photos 22 – 26)**:
   - *Look*: Notebook paper aesthetic with washi tape, stamps, paper clips, and personal handwritten scribbles.
   - *Best for*: Keepsakes, ticket stubs, cozy indoor winter photos, silly inside jokes.
6. **Spotlight Carousel (Photos 27 – 32)**:
   - *Look*: High-end 3D slider with glowing active card, soft depth-of-field, and smooth pagination.
   - *Best for*: Dressed-up celebration dates, romantic evening portraits, grand memorable milestones.

---

## 💡 Pro Tips for Best Visual Quality

- **File Size**: Ideal image file size is between **300 KB and 1.5 MB**. This ensures ultra-sharp clarity on Retina / 4K displays while loading instantly on mobile phones.
- **Image Cropping**: The website uses CSS `object-fit: cover` with smooth centered positioning. Your photos will never look stretched or distorted, even if their aspect ratio differs slightly from the recommendation.
- **Titles and Captions**: If you want to customize the memory captions or dates associated with each photo, edit them in `src/data/birthday.ts` under the `photos` array.
- **Song Album Cover**: `photo-01.jpg` is also featured as the rotating vinyl album cover for the background music player in the bottom-left corner.
- **Browser Caching**: If you replace a file with the same name and don't immediately see the update in your browser, perform a hard refresh by pressing `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac).
