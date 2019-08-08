import * as React from 'react';
import styles from './CarouselSlide.module.scss';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { escape } from '@microsoft/sp-lodash-subset';
import { ICarouselSlideProps, ICarouselSlideState } from './CarouselSlide.types';

export class CarouselSlide extends React.Component<ICarouselSlideProps, ICarouselSlideState> {
  public render(): React.ReactElement<ICarouselSlideProps> {
    const { imageSrc, title, location, height, width, onClick, item } = this.props;
    return (
      <div className={styles.carouselSlideWrapper}>
        <span role="button" onClick={(_event) => { onClick(item); }}>
          <div className={styles.carouselSlide} role="link" data-is-draggable="false" data-is-focusable="true" data-selection-invoke="true"
            style={{ width: '100%', minHeight: `${height}px` }}
          >
            <div className={styles.carouselSlideContent}>
              <div className={styles.carouselSlideFileContainer}>
                <div className={styles.carouselSlideThumbnail}>
                  <Image src={imageSrc} width={width} height={height} imageFit={ImageFit.centerCover} />
                </div>
                <div className={styles.carouselSlideNamePlate}>
                  <div className={styles.carouselSlideName}>
                    {escape(title)}
                  </div>
                  <div className={styles.carouselSlideSubText}>
                    {escape(location)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    );
  }
}

