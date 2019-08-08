import { css } from '@uifabric/utilities/lib/css';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import * as React from 'react';
//import * as slick from 'slick-carousel';
import Slider from 'react-slick';
import { ICarouselLayoutProps, ICarouselLayoutState, ICarouselItem } from "./CarouselLayout.types";
import { CarouselSlide } from './CarouselSlide';


import { SPComponentLoader } from '@microsoft/sp-loader';
import styles from "./CarouselLayout.module.scss";

const ASPECT_RATIO: number = 9 / 16;


/**
 * Carousel layout
 * Presents the child compoments as a slick slide
 */
export class CarouselLayout extends React.Component<
  ICarouselLayoutProps,
  ICarouselLayoutState
  > {

  // Reference to the slick slider
  private _wrapperDiv: HTMLDivElement;
  private _slider: Slider;

  constructor(props: ICarouselLayoutProps) {
    super(props);

    // Load the slick CSS
    SPComponentLoader.loadCss('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');
    SPComponentLoader.loadCss('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css');

    // Store how many children we have -- that's the total number of slides
    this.state = {
      currentSlide: 0,
      width: 0,
      height: 0
    };
  }

  public componentDidMount(): void {
    this.setState({
      width: this._wrapperDiv && this._wrapperDiv.clientWidth,
      height: this._wrapperDiv && Math.floor(this._wrapperDiv.clientWidth * ASPECT_RATIO)
    });
  }


  /**
   * Renders a slick switch, a slide for each child, and next/previous arrows
   */
  public render(): React.ReactElement<ICarouselLayoutProps> {
    // slick seems to have an issue with having "infinite" mode set to true and having less items than the number of slides per page
    // set infinite to true only if there are more than 1 children
    var isInfinite: boolean = this.props.items.length > 1;
    var settings: any = {
      accessibility: false,
      adaptiveHeight: false,
      arrows: false,
      autoplaySpeed: 0,
      centerMode: false,
      centerPadding: styles.centerPadding,
      dots: false,
      cssEase: "ease",
      draggable: false,
      easing: "linear",
      edgeFriction: 0.35,
      fade: false,
      infinite: isInfinite,
      pauseOnDotsHover: false,
      pauseOnFocus: false,
      pauseOnHover: true,
      rows: 1,
      slide: "div",
      slidesPerRow: 1,
      slidesToScroll: 1,
      slidesToShow: 1,
      speed: 500,
      swipe: true,
      swipeToSlide: false,
      touchMove: true,
      touchThreshold: 5,
      useCSS: true,
      useTransform: true,
      variableWidth: false,
      vertical: false,
      respondTo: "slider",
      afterChange: (currentSlide: number) => {
        if (this.props.onAfterChange) {
          this.props.onAfterChange(currentSlide);
        }

        this.setState({
          currentSlide
        });
      },
      beforeChange: (currentSlide: number) => {
        if (this.props.onBeforeChange) {
          this.props.onBeforeChange(currentSlide);
        }
      }
    };

    // If a paging template was passed, use it to generate the label
    const pagingLabel: string = this.props.pagingTemplate &&
      this.props.pagingTemplate.replace('{0}', `${this.state.currentSlide + 1}`)
        .replace('{1}', `${this.props.items.length}`);


    return (
      <div ref={(el) => { this._wrapperDiv = el; }}>
        <div className={styles.carouselLayout} aria-label={this.props.ariaLabel}>
          <Slider ref={c => (this._slider = c)} {...settings}>
            {this.props.items.map((item: ICarouselItem) => {
              return <CarouselSlide
                title={item.title}
                location={item.location}
                imageSrc={item.imageSrc}
                width={this.state.width}
                height={this.state.height}
                onClick={() => { this.props.onSlideClick(this.state.currentSlide); }}
              />;
            })}
          </Slider>
          <div
            className={css(styles.indexButtonContainer, styles.sliderButtons, styles.sliderButtonLeft)}
            onClick={() => this._slider.slickPrev()}
          >
            <IconButton
              className={css(styles.indexButton, styles.leftPositioned)}
              iconProps={{ iconName: "ChevronLeft" }}
            />
          </div>
          <div
            className={css(styles.indexButtonContainer, styles.sliderButtons, styles.sliderButtonRight)}
            onClick={() => this._slider.slickNext()}
          >
            <IconButton
              className={css(styles.indexButton, styles.rightPositioned)}
              iconProps={{ iconName: "ChevronRight" }}
            />
          </div>
          {this.props.pagingTemplate &&
            <div data-automation-id="item-count" className={styles.currentActiveItem}>
              {pagingLabel}
            </div>
          }
        </div>
      </div>
    );
  }
}
