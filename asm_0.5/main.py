from PIL import Image
import numpy as np

def create_lenticular_image(image1_path, image2_path, output_path, lpi):
    pixel_per_inch = lpi * 6 * 2 # create 12 pixel wide repeating pattern
    
    width_pixels = round(pixel_per_inch * 3.5)# 3.5
    height_pixels = round(pixel_per_inch * 5)# 5
    
    img1 = Image.open(image1_path).convert('RGB')
    img2 = Image.open(image2_path).convert('RGB')
    
    img1_resized = img1.resize((width_pixels, height_pixels), Image.Resampling.LANCZOS)
    img2_resized = img2.resize((width_pixels, height_pixels), Image.Resampling.LANCZOS)
    
    arr1 = np.array(img1_resized)
    arr2 = np.array(img2_resized)
    
    interlaced = np.zeros((height_pixels, width_pixels, 3), dtype=np.uint8)
    
    for x in range(width_pixels):
        cycle_pos = x % 12
        if cycle_pos < 6:
            # If position 0-5: take pixels from image 1
            interlaced[:, x] = arr1[:, x]
        else:
            # If position 6-11: take pixels from image 2
            interlaced[:, x] = arr2[:, x]

    
    output_image = Image.fromarray(interlaced)
    
    output_image.save(
        output_path,
        format='TIFF',
        dpi=(pixel_per_inch, pixel_per_inch)
    )
    
    print(f"Interlaced image saved to: {output_path}")
    print(f"DPI set to: ({pixel_per_inch}, {pixel_per_inch})")
    
    return output_image

# Example usage
if __name__ == "__main__":
    image1 = "left.jpg"
    image2 = "right.jpg"
    output = "interlaced_output.tiff"
    
    result = create_lenticular_image(image1, image2, output, lpi=39.98)
    
    print(f"\nFinal image info:")
    print(f"Size: {result.size} pixels")
    print(f"Mode: {result.mode}")