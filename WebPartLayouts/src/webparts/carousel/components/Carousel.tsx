import * as React from 'react';
import styles from './Carousel.module.scss';
import { ICarouselProps, ICarouselState } from './ICarousel.types';


import { CarouselLayout } from '../../../components/carouselLayout';


export default class Carousel extends React.Component<ICarouselProps, ICarouselState> {
  constructor(props: ICarouselProps) {
    super(props);

    this.state = {
      items: [{
        imageSrc: "https://lorempixel.com/744/418/technics/1/",
        title: "Adventures in SPFx",
        location: "SharePoint",
      }, {
        imageSrc: "https://lorempixel.com/744/418/technics/2",
        title: "The Wild, Untold Story of SharePoint!",
        location: "SharePoint",
      }, {
        imageSrc: "https://lorempixel.com/744/418/technics/4",
        title: "Not Your Grandpa's SharePoint",
        location: "SharePoint",
      }, {
        imageSrc: "https://lorempixel.com/744/418/technics/5/",
        title: "Get with the Flow",
        location: "Flow",
      }]
    };
  }

  public render(): React.ReactElement<ICarouselProps> {

    return (
      <div className={styles.carousel}>
        <CarouselLayout
          pagingTemplate={'{0} of {1}'}
          ariaLabel={'Use right and left arrow keys to navigate between images in the carousel. Use up and down arrow keys to access the edit and remove buttons for any image.'}
          items={this.state.items}
          onSlideClick={(currentSlide) => { alert(`You clicked on slide ${currentSlide+1}`); }}
        >
        </CarouselLayout>
      </div>
    );
  }
}
