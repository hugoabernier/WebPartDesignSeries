import * as React from 'react';
import styles from './GridLayout.module.scss';
import { IGridLayoutProps, IGridLayoutState } from './IGridLayout.types';
import { ISize } from 'office-ui-fabric-react/lib/Utilities';

// Used to render document cards
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardDetails,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardLocation,
  DocumentCardType
} from 'office-ui-fabric-react/lib/DocumentCard';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';

import { GridList } from '../../../components/gridList';


export default class GridLayout extends React.Component<IGridLayoutProps, IGridLayoutState> {
  constructor(props: IGridLayoutProps) {
    super(props);

    this.state = {
      items: [{
        thumbnail: "http://dummyimage.com/241x245.png/dddddd/000000",
        title: "Chains (Catene)",
        name: "Perry Losselyong",
        profileImageSrc: "https://robohash.org/blanditiisadlabore.png?size=50x50&set=set1",
        location: "Crime|Drama",
        activity: "3/13/2019"
      }, {
        thumbnail: "http://dummyimage.com/223x154.png/5fa2dd/ffffff",
        title: "Not Quite Hollywood: The Wild, Untold Story of Ozploitation!",
        name: "Ebonee Gallyhaock",
        profileImageSrc: "https://robohash.org/delectusetcorporis.bmp?size=50x50&set=set1",
        location: "Documentary",
        activity: "6/29/2019"
      }, {
        thumbnail: "http://dummyimage.com/210x159.png/cc0000/ffffff",
        title: "No Impact Man: The Documentary",
        name: "Seward Keith",
        profileImageSrc: "https://robohash.org/asperioresautquasi.jpg?size=50x50&set=set1",
        location: "Documentary",
        activity: "12/31/2018"
      }, {
        thumbnail: "http://dummyimage.com/180x141.png/dddddd/000000",
        title: "Exodus",
        name: "Sharona Selkirk",
        profileImageSrc: "https://robohash.org/velnammolestiae.png?size=50x50&set=set1",
        location: "Drama|Romance|War",
        activity: "11/20/2018"
      }, {
        thumbnail: "http://dummyimage.com/157x249.png/5fa2dd/ffffff",
        title: "Impostor",
        name: "Boyce Batstone",
        profileImageSrc: "https://robohash.org/nulladistinctiomollitia.jpg?size=50x50&set=set1",
        location: "Action|Drama|Sci-Fi|Thriller",
        activity: "5/26/2019"
      }]
    };
  }

  public render(): React.ReactElement<IGridLayoutProps> {
    return (
      <div className={styles.gridLayout}>
        <GridList
          items={this.state.items}
          onRenderGridItem={(item: any, finalSize: ISize, isCompact: boolean) => this.onRenderGridItem(item, finalSize, isCompact)}
        />
      </div>
    );
  }

  private onRenderGridItem = (item: any, finalSize: ISize, isCompact: boolean): JSX.Element => {
    const previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          previewImageSrc: item.thumbnail,
          imageFit: ImageFit.cover,
          height: 130
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
        type={isCompact ? DocumentCardType.compact : DocumentCardType.normal}
        onClick={(ev: React.SyntheticEvent<HTMLElement>) => alert(ev)}

      >
        <DocumentCardPreview {...previewProps} />
        {!isCompact && <DocumentCardLocation location={item.location} />}
        <DocumentCardDetails>
          <DocumentCardTitle
            title={item.title}
            shouldTruncate={true}
          />
          <DocumentCardActivity
            activity={item.activity}
            people={[{ name: item.name, profileImageSrc: item.profileImageSrc }]}
          />
        </DocumentCardDetails>
      </DocumentCard>
    </div>;
  }
}
