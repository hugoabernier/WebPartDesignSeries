import {  ISize } from 'office-ui-fabric-react/lib/Utilities';

export interface IGridListProps {
  items: any[];
  onRenderGridItem: (item: any, finalSize: ISize) => JSX.Element;
}

export interface IGridListState {}
