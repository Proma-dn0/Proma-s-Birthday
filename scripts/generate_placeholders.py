import os
from PIL import Image, ImageDraw, ImageFont

PHOTOS = [
    # Style 01: Polaroid (1-5)
    {"id": 1, "style": "Polaroid Keepsakes (Style 01)", "title": "Golden Light, Gentle Breeze"},
    {"id": 2, "style": "Polaroid Keepsakes (Style 01)", "title": "Wrapped in Sunshine"},
    {"id": 3, "style": "Polaroid Keepsakes (Style 01)", "title": "That Little Smile"},
    {"id": 4, "style": "Polaroid Keepsakes (Style 01)", "title": "Lost Among the Trees"},
    {"id": 5, "style": "Polaroid Keepsakes (Style 01)", "title": "Happiness by the Water"},

    # Style 02: Fullscreen Cinematic (6-10)
    {"id": 6, "style": "Fullscreen Cinema (Style 02)", "title": "Little Moments, Beautifully Kept"},
    {"id": 7, "style": "Fullscreen Cinema (Style 02)", "title": "Lost in the Morning Mist"},
    {"id": 8, "style": "Fullscreen Cinema (Style 02)", "title": "Where the Sky Opens Wide"},
    {"id": 9, "style": "Fullscreen Cinema (Style 02)", "title": "Beneath the Misty Giants"},
    {"id": 10, "style": "Fullscreen Cinema (Style 02)", "title": "A Quiet Place to Be"},

    # Style 03: Mosaic Wall (11-16)
    {"id": 11, "style": "Mosaic Memory Wall (Style 03)", "title": "Above the Valley"},
    {"id": 12, "style": "Mosaic Memory Wall (Style 03)", "title": "A Quiet Road Ahead"},
    {"id": 13, "style": "Mosaic Memory Wall (Style 03)", "title": "Where the Water Falls"},
    {"id": 14, "style": "Mosaic Memory Wall (Style 03)", "title": "The Ivy-Covered Hideaway"},
    {"id": 15, "style": "Mosaic Memory Wall (Style 03)", "title": "Dancing Through the Mist"},
    {"id": 16, "style": "Mosaic Memory Wall (Style 03)", "title": "A Timeless Portrait"},

    # Style 04: 35mm Film Roll (17-21)
    {"id": 17, "style": "35mm Film Roll (Style 04)", "title": "By the River"},
    {"id": 18, "style": "35mm Film Roll (Style 04)", "title": "Golden Traditions"},
    {"id": 19, "style": "35mm Film Roll (Style 04)", "title": "Her Quiet Glow"},
    {"id": 20, "style": "35mm Film Roll (Style 04)", "title": "Chasing the Breeze"},
    {"id": 21, "style": "35mm Film Roll (Style 04)", "title": "Into the Green"},

    # Style 05: Scrapbook Journal (22-26)
    {"id": 22, "style": "Scrapbook Journal (Style 05)", "title": "Colors We Shared"},
    {"id": 23, "style": "Scrapbook Journal (Style 05)", "title": "Painted in Sunshine"},
    {"id": 24, "style": "Scrapbook Journal (Style 05)", "title": "Where the Water Falls"},
    {"id": 25, "style": "Scrapbook Journal (Style 05)", "title": "A Quiet Day Away"},
    {"id": 26, "style": "Scrapbook Journal (Style 05)", "title": "Postcards From Your Adventures"},

    # Style 06: Spotlight Carousel (27-32)
    {"id": 27, "style": "Spotlight Carousel (Style 06)", "title": "A Night in Red & Gold"},
    {"id": 28, "style": "Spotlight Carousel (Style 06)", "title": "Blue-Hued Sisterhood"},
    {"id": 29, "style": "Spotlight Carousel (Style 06)", "title": "Whispers Under the Lights"},
    {"id": 30, "style": "Spotlight Carousel (Style 06)", "title": "Three Smiles, One Night"},
    {"id": 31, "style": "Spotlight Carousel (Style 06)", "title": "Miles, Memories & Boarding Passes"},
    {"id": 32, "style": "Spotlight Carousel (Style 06)", "title": "Where the Green Meets Us"},
]

OUTPUT_DIR = "public/photos"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Fonts
font_serif_large = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 64)
font_serif_med = ImageFont.truetype("C:/Windows/Fonts/georgia.ttf", 32)
font_serif_italic = ImageFont.truetype("C:/Windows/Fonts/georgiai.ttf", 26) if os.path.exists("C:/Windows/Fonts/georgiai.ttf") else font_serif_med
font_sans_small = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 20)
font_sans_bold = ImageFont.truetype("C:/Windows/Fonts/segoeuib.ttf", 22)
font_sans_tiny = ImageFont.truetype("C:/Windows/Fonts/segoeui.ttf", 16)

# Palette variations across styles for visual distinction
PALETTES = {
    "Polaroid Keepsakes (Style 01)": {"bg": "#FAF5EE", "card": "#FFFDF9", "border": "#E8C8C8", "accent": "#B84D67"},
    "Fullscreen Cinema (Style 02)": {"bg": "#221A20", "card": "#2E222A", "border": "#6B3B4C", "accent": "#EABEC7"},
    "Mosaic Memory Wall (Style 03)": {"bg": "#F8F3ED", "card": "#FFFFFF", "border": "#DEC4B0", "accent": "#9B3950"},
    "35mm Film Roll (Style 04)": {"bg": "#1C191B", "card": "#262124", "border": "#AB8B46", "accent": "#DAC18C"},
    "Scrapbook Journal (Style 05)": {"bg": "#FCF8F2", "card": "#FFFFFF", "border": "#DFADB6", "accent": "#B84D67"},
    "Spotlight Carousel (Style 06)": {"bg": "#FBF5F2", "card": "#FFFFFF", "border": "#D4A5A5", "accent": "#7E2B40"},
}

for item in PHOTOS:
    idx = item["id"]
    filename = f"photo-{idx:02d}.jpg"
    filepath = os.path.join(OUTPUT_DIR, filename)

    theme = PALETTES.get(item["style"], PALETTES["Polaroid Keepsakes (Style 01)"])
    is_dark = theme["bg"].startswith("#1") or theme["bg"].startswith("#2")

    img = Image.new("RGB", (800, 800), color=theme["bg"])
    draw = ImageDraw.Draw(img)

    # Outer decorative margin
    margin = 32
    draw.rectangle(
        [margin, margin, 800 - margin, 800 - margin],
        fill=theme["card"],
        outline=theme["border"],
        width=2,
    )

    # Inner subtle frame
    inner_margin = 44
    draw.rectangle(
        [inner_margin, inner_margin, 800 - inner_margin, 800 - inner_margin],
        outline=theme["border"],
        width=1,
    )

    # Text Colors
    c_primary = "#F8EEF2" if is_dark else "#380E18"
    c_secondary = "#D4A5A5" if is_dark else "#682436"
    c_muted = "#A898A0" if is_dark else "#8C7A82"
    c_accent = theme["accent"]

    # Header: Website branding
    draw.text(
        (400, 100),
        "PROMA'S BIRTHDAY 2026",
        fill=c_muted,
        font=font_sans_small,
        anchor="mm",
    )

    # Decorative thin line
    draw.line([(320, 125), (480, 125)], fill=theme["border"], width=1)

    # Section / Style Tag
    draw.text(
        (400, 165),
        item["style"].upper(),
        fill=c_accent,
        font=font_sans_bold,
        anchor="mm",
    )

    # Center Big Label: PHOTO 01, PHOTO 02, etc.
    label_text = f"PHOTO {idx:02d}"
    draw.text(
        (400, 310),
        label_text,
        fill=c_primary,
        font=font_serif_large,
        anchor="mm",
    )

    # Story Memory Title
    draw.text(
        (400, 385),
        f'"{item["title"]}"',
        fill=c_secondary,
        font=font_serif_italic,
        anchor="mm",
    )

    # Divider
    draw.line([(280, 440), (520, 440)], fill=theme["border"], width=1)

    # Center Heart icon / glyph
    heart_char = "♥"
    draw.text(
        (400, 480),
        heart_char,
        fill=c_accent,
        font=font_serif_med,
        anchor="mm",
    )

    # Replacement Instruction box
    box_y = 570
    draw.rounded_rectangle(
        [120, box_y, 680, box_y + 110],
        radius=14,
        fill=theme["bg"],
        outline=theme["border"],
        width=1,
    )

    draw.text(
        (400, box_y + 35),
        f"public/photos/{filename}",
        fill=c_primary,
        font=font_sans_bold,
        anchor="mm",
    )

    draw.text(
        (400, box_y + 75),
        "Replace this file with your photo using the same filename",
        fill=c_muted,
        font=font_sans_small,
        anchor="mm",
    )

    # Footer note
    draw.text(
        (400, 735),
        "Supports JPG, PNG • Automatically updates on all pages",
        fill=c_muted,
        font=font_sans_tiny,
        anchor="mm",
    )

    # Save high-quality JPG
    img.save(filepath, "JPEG", quality=92)

print(f"Successfully generated {len(PHOTOS)} placeholder images in {OUTPUT_DIR}/")
