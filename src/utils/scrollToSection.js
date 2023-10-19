// Smooth scroll:
export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const targetOffset = section.offsetTop;
    const initialOffset = window.scrollY;
    const duration = 1000; // Adjust the duration as needed (in milliseconds)
    const startTime = performance.now();

    function scroll() {
      const currentTime = performance.now();
      const progress = (currentTime - startTime) / duration;
      if (progress < 1) {
        window.scrollTo(
          0,
          initialOffset + (targetOffset - initialOffset) * progress
        );
        requestAnimationFrame(scroll);
      } else {
        window.scrollTo(0, targetOffset);
      }
    }

    scroll();
  }
};
