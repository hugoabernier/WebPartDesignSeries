export interface ICarouselLayoutProps {
  ariaLabel?: string;
  pagingTemplate?: string;
  items: ICarouselItem[];
  onSlideClick?: (currentIndex: number) => void;
  onBeforeChange?: (currentIndex: number) => void;
  onAfterChange?: (currentIndex: number) => void;
 }

export interface ICarouselLayoutState {
  currentSlide: number;
  width: number;
  height: number;
 }

 export interface ICarouselItem {
  imageSrc: string;
  title: string;
  location: string;
 }
