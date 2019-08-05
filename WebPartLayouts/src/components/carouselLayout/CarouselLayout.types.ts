export interface ICarouselLayoutProps {
  ariaLabel?: string;
  pagingTemplate?: string;
  onBeforeChange?: (currentIndex: number) => void;
  onAfterChange?: (currentIndex: number) => void;
 }

export interface ICarouselLayoutState {
  currentSlide: number;
  slideCount: number;
 }
