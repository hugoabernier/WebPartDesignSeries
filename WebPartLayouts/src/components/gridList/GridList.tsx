import * as React from 'react';
import styles from './GridList.module.scss';

// Used to render list grid
import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { List } from 'office-ui-fabric-react/lib/List';
import { IRectangle, ISize } from 'office-ui-fabric-react/lib/Utilities';

import { IGridListProps, IGridListState } from './GridList.types';

const ROWS_PER_PAGE: number = +styles.rowsPerPage;
const MAX_ROW_HEIGHT: number = +styles.maxWidth;
const PADDING: number = +styles.padding;
const MIN_WIDTH = +styles.minWidth;

export class GridList extends React.Component<IGridListProps, IGridListState> {
  private _columnCount: number;
  private _columnWidth: number;
  private _rowHeight: number;
  private _surfaceWidth: number;

  public render(): React.ReactElement<IGridListProps> {
    return (
      <FocusZone>
        <List
          role="presentation"
          className={styles.gridList}
          items={this.props.items}
          getItemCountForPage={this._getItemCountForPage}
          getPageHeight={this._getPageHeight}
          //renderedWindowsAhead={4}
          onRenderCell={this._onRenderCell}
        />
      </FocusZone>
    );
  }

  private _getItemCountForPage = (itemIndex: number, surfaceRect: IRectangle): number => {
    if (itemIndex === 0) {
      this._columnCount = Math.ceil(surfaceRect.width / (MAX_ROW_HEIGHT));
      this._columnWidth = Math.max(MIN_WIDTH, Math.floor(surfaceRect.width / this._columnCount) + Math.floor(PADDING / this._columnCount));
      this._rowHeight = this._columnWidth;
      this._surfaceWidth = surfaceRect.width;
    }

    return this._columnCount * ROWS_PER_PAGE;
  }

  private _getPageHeight = (): number => {
    return this._rowHeight * ROWS_PER_PAGE;
  }

  private _onRenderCell = (item: any, index: number | undefined): JSX.Element => {


    const isCompact: boolean = false; //this._columnWidth <= MIN_WIDTH;
    const tilePadding: number = index % this._columnCount !== this._columnCount - 1 && !isCompact ? PADDING : 0;
    const finalSize: ISize = { width: this._columnWidth, height: this._rowHeight };
    return (
      <div
        style={{
          width: `${isCompact ? this._surfaceWidth : this._columnWidth - PADDING}px`,
          marginRight: `${tilePadding}px`
        }}
      >
          {this.props.onRenderGridItem(item, finalSize)}
      </div>
    );
  }
}
