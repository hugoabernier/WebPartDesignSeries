import * as React from 'react';
import styles from './GridLayout.module.scss';
import { IGridLayoutProps } from './IGridLayout.types';
import { ISize } from 'office-ui-fabric-react/lib/Utilities';

// Used to render document cards
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardImage,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardLocation,
  DocumentCardType
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';

import { GridList } from '../../../components/gridList';


export default class GridLayout extends React.Component<IGridLayoutProps, {}> {


  public render(): React.ReactElement<IGridLayoutProps> {
    return (
      <div className={styles.gridLayout}>
        <GridList
          items={this.props.items}
          onRenderGridItem={(item: any, finalSize: ISize) => this.onRenderGridItem(item, finalSize)}
        />
      </div>
    );
  }

  private onRenderGridItem = (item: any, finalSize: ISize): JSX.Element => {
    const previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          previewImageSrc: item.thumbnail,
          imageFit: ImageFit.cover,
          height: 161
        }
      ]
    };

    return <div
      className={styles.documentTile}
      data-is-focusable={true}
      role="listitem"
      aria-label={item.title}
    >
      <DocumentCard
        onClick={(ev: React.SyntheticEvent<HTMLElement>) => alert(ev)}
        >
        <DocumentCardPreview {...previewProps} />
        <DocumentCardLocation location={item.location} />
        <DocumentCardTitle
          title={item.title}
          shouldTruncate={true}
        />
        <DocumentCardActivity
          activity={`Created a few minutes ago`}
          people={[{ name: item.name, profileImageSrc: item.profileImageSrc }]}
        />
      </DocumentCard>
    </div>;
  }


}
