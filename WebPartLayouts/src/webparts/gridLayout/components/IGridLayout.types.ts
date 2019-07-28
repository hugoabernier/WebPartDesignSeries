export interface IGridLayoutProps {

}

export interface IGridLayoutState {
  items: IGridItem[];
}

export interface IGridItem {
  thumbnail: string;
  title: string;
  name: string;
  profileImageSrc: string;
  location: string;
  activity: string;
}
