import * as React from 'react';
import styles from './Filmstrip.module.scss';
import { IFilmstripProps, IFilmstripState } from './IFilmstrip.types';
import { FilmstripLayout } from '../../../components/filmstripLayout/index';

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


export default class Filmstrip extends React.Component<IFilmstripProps, IFilmstripState> {
  constructor(props: IFilmstripProps) {
    super(props);

    this.state = {
      items: [{
        thumbnail: "https://lorempixel.com/400/200/technics/1/",
        title: "Adventures in SPFx",
        name: "Perry Losselyong",
        profileImageSrc: "https://robohash.org/blanditiisadlabore.png?size=50x50&set=set1",
        location: "SharePoint",
        activity: "3/13/2019"
      }, {
        thumbnail: "https://lorempixel.com/400/200/technics/2",
        title: "The Wild, Untold Story of SharePoint!",
        name: "Ebonee Gallyhaock",
        profileImageSrc: "https://robohash.org/delectusetcorporis.bmp?size=50x50&set=set1",
        location: "SharePoint",
        activity: "6/29/2019"
      }, {
        thumbnail: "https://lorempixel.com/400/200/technics/3",
        title: "Low Code Solutions: PowerApps",
        name: "Seward Keith",
        profileImageSrc: "https://robohash.org/asperioresautquasi.jpg?size=50x50&set=set1",
        location: "PowerApps",
        activity: "12/31/2018"
      }, {
        thumbnail: "https://lorempixel.com/400/200/technics/4",
        title: "Not Your Grandpa's SharePoint",
        name: "Sharona Selkirk",
        profileImageSrc: "https://robohash.org/velnammolestiae.png?size=50x50&set=set1",
        location: "SharePoint",
        activity: "11/20/2018"
      }, {
        thumbnail: "https://lorempixel.com/400/200/technics/5/",
        title: "Get with the Flow",
        name: "Boyce Batstone",
        profileImageSrc: "https://robohash.org/nulladistinctiomollitia.jpg?size=50x50&set=set1",
        location: "Flow",
        activity: "5/26/2019"
      }]
    };
  }

  public render(): React.ReactElement<IFilmstripProps> {
    return (
      <div className={styles.filmstrip}>
        <FilmstripLayout>
          {this.state.items.map((item: any, _index: number) => {
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
                type={DocumentCardType.normal}
                onClick={(ev: React.SyntheticEvent<HTMLElement>) => alert(ev)}

              >
                <DocumentCardPreview {...previewProps} />
                <DocumentCardLocation location={item.location} />
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
          })}
        </FilmstripLayout>
      </div>
    );
  }
}
