export interface IGridLayoutProps {
  items: IGridItem[];
}

export interface IGridItem {
  thumbnail: string;
  title: string;
  name: string;
  profileImageSrc: string;
  location: string;
}
