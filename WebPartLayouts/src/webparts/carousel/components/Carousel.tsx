import * as React from 'react';
import styles from './Carousel.module.scss';
import { ICarouselProps, ICarouselState } from './ICarousel.types';
import { escape } from '@microsoft/sp-lodash-subset';


import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { CarouselLayout } from '../../../components/carouselLayout/CarouselLayout';

const ASPECT_RATIO: number = 9/16;
export default class Carousel extends React.Component<ICarouselProps, ICarouselState> {
  private _wrapperDiv: HTMLDivElement;
  /**
   *
   */
  constructor(props: ICarouselProps) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      items: [{
        thumbnail: "https://lorempixel.com/744/418/technics/1/",
        title: "Adventures in SPFx",
        name: "Perry Losselyong",
        profileImageSrc: "https://robohash.org/blanditiisadlabore.png?size=50x50&set=set1",
        location: "SharePoint",
        activity: "3/13/2019"
      }, {
        thumbnail: "https://lorempixel.com/744/418/technics/2",
        title: "The Wild, Untold Story of SharePoint!",
        name: "Ebonee Gallyhaock",
        profileImageSrc: "https://robohash.org/delectusetcorporis.bmp?size=50x50&set=set1",
        location: "SharePoint",
        activity: "6/29/2019"
      }, {
        thumbnail: "https://lorempixel.com/744/418/technics/4",
        title: "Not Your Grandpa's SharePoint",
        name: "Sharona Selkirk",
        profileImageSrc: "https://robohash.org/velnammolestiae.png?size=50x50&set=set1",
        location: "SharePoint",
        activity: "11/20/2018"
      }, {
        thumbnail: "https://lorempixel.com/744/418/technics/5/",
        title: "Get with the Flow",
        name: "Boyce Batstone",
        profileImageSrc: "https://robohash.org/nulladistinctiomollitia.jpg?size=50x50&set=set1",
        location: "Flow",
        activity: "5/26/2019"
      }]
    };
  }

  public componentDidMount(): void {
    console.log("Wrapper Div", this._wrapperDiv && this._wrapperDiv.clientWidth);
    console.log("Wrapper Potential height", this._wrapperDiv && Math.floor(this._wrapperDiv.clientWidth * ASPECT_RATIO));
    this.setState({
      width: this._wrapperDiv && this._wrapperDiv.clientWidth,
      height: this._wrapperDiv && Math.floor(this._wrapperDiv.clientWidth * ASPECT_RATIO)
    });
  }

  public render(): React.ReactElement<ICarouselProps> {

    return (
      <div className={styles.carousel}
        ref={(el) => { this._wrapperDiv = el; }}
      >
        <CarouselLayout
          pagingTemplate={'{0} of {1}'}
          ariaLabel={'Use right and left arrow keys to navigate between images in the carousel. Use up and down arrow keys to access the edit and remove buttons for any image.'}
        >
          {this.state.items.map((item: any, _index: number) => {
            return <div className={styles.itemTileWrapper}>
              <span role="button" onClick={(_event) => { alert("You clicked an item"); }}>
                <div className={styles.itemTile} role="link" data-is-draggable="false" data-is-focusable="true" data-selection-invoke="true"
                  style={{ width: '100%', minHeight: `${this.state.height}px` }}
                >
                  <div className={styles.itemTileContent}>
                    <div className={styles.itemTileFileContainer}>
                      <div className={styles.itemTileThumbnail}>
                        <Image src={item.thumbnail} width={this.state.width} height={this.state.height} imageFit={ImageFit.cover} />
                      </div>
                      <div className={styles.itemTileNamePlate}>
                        <div className={styles.itemTileName}>
                          {item.title}
                        </div>
                        <div className={styles.itemTileSubText}>
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>;
          })}
        </CarouselLayout>
      </div>
    );
  }
}
