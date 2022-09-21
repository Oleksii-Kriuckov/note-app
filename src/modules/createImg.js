export const createImage = (src) => {
    const img = new Image();
    img.src = src;
    img.style.cursor = 'pointer'
    img.style.width = '20px';
    img.style.height = '20px';
    return img
}