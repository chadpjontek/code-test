export const randomSlideIndex = () => {
    const slides = [0, 1, 2, 3, 4]
    let unviewedSlides = [...slides]
    if (unviewedSlides.length > 0) {
        return Math.floor(Math.random() * unviewedSlides.length)
    }
}
