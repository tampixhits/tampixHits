export type ScrollToSectionOptions = {
  headerSelector?: string;
  duration?: number;
};

const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  let time = t / (d / 2);
  if (time < 1) return (c / 2) * time * time + b;
  time--;
  return (-c / 2) * (time * (time - 2) - 1) + b;
};

export function scrollToSection(
  sectionId: string,
  { headerSelector = ".header", duration = 1200 }: ScrollToSectionOptions = {}
) {
  const sectionElement = document.getElementById(sectionId);
  if (!sectionElement) return false;

  const header = document.querySelector(headerSelector) as HTMLElement | null;
  const headerHeight = header?.offsetHeight ?? 0;

  const targetPosition = sectionElement.offsetTop - headerHeight;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let start: number | null = null;

  const animate = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
  return true;
}
