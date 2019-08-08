export interface ICarouselSlideProps {
  item: any;
  imageSrc: string;
  title: string;
  location: string;
  height: number;
  width: number;
  onClick: (item: any) => void;
}

export interface ICarouselSlideState { }
