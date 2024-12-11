import { getImage } from "astro:assets";

export async function getCSSImgUrl(image, optimized = true){
  if(!image) return ''

  if(optimized) {
    const imageAvif = await getImage({ src:image, format: "avif" });
    const imageWebP = await getImage({ src:image, format: "webp" });
    
    const backgroundUrlCSS =  `image-set(
        url(${imageAvif.src}) type("image/avif"),
        url(${imageWebP.src}) type("image/webp"),
        url(${image.src}) type("image/jpeg")
      )`
    return backgroundUrlCSS
  }

  return `image-set(url(${image.src}))`
}