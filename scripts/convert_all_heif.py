import os
from PIL import Image, ImageOps

try:
    import pillow_heif
    pillow_heif.register_heif_opener()
    has_heif = True
except ImportError:
    has_heif = False

def convert_heif_photos(photos_dir="public/photos"):
    if not os.path.exists(photos_dir) or not has_heif:
        return

    for filename in os.listdir(photos_dir):
        if not filename.lower().endswith(('.jpg', '.jpeg')):
            continue
        filepath = os.path.join(photos_dir, filename)
        try:
            with open(filepath, 'rb') as f:
                header = f.read(16)
            if b'ftypheic' in header or b'ftypmif1' in header or b'ftypmsf1' in header or b'ftyphevc' in header:
                im = Image.open(filepath)
                im_transposed = ImageOps.exif_transpose(im)
                rgb = im_transposed.convert('RGB')
                rgb.save(filepath, 'JPEG', quality=95)
                print(f"[auto-convert-heif] Converted {filename} from HEIF to true JPEG.")
        except Exception as e:
            print(f"[auto-convert-heif] Failed to convert {filename}: {e}")

if __name__ == "__main__":
    convert_heif_photos()
