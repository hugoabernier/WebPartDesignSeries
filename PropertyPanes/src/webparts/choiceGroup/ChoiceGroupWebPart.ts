import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneChoiceGroup
} from '@microsoft/sp-property-pane';

import * as strings from 'ChoiceGroupWebPartStrings';
import ChoiceGroup from './components/ChoiceGroup';
import { IChoiceGroupProps } from './components/IChoiceGroupProps';

export interface IChoiceGroupWebPartProps {
  layout: 'Brick'|'Grid'|'Carousel';
  shape: 'Circle'|'Square'|'Triangle';
}

export default class ChoiceGroupWebPart extends BaseClientSideWebPart<IChoiceGroupWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IChoiceGroupProps > = React.createElement(
      ChoiceGroup,
      {
        layout: this.properties.layout,
        shape: this.properties.shape
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    const layoutBrick: string = require('./assets/brick.svg');
    const layoutGrid: string = require('./assets/grid.svg');
    const layoutCarousel: string = require('./assets/carousel.svg');
    return {
      pages: [
        {
          header: {
            description: null
          },
          groups: [
            {
              //groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneChoiceGroup('layout', {
                  label: "Layout", // don't forget to localize your test in a real-world solution
                  options: [
                    {
                      key: 'Brick',
                      text: 'Brick',
                      selectedImageSrc: layoutBrick,
                      imageSrc: layoutBrick,
                    },
                    {
                      key: 'Grid',
                      text: 'Grid',
                      selectedImageSrc: layoutGrid,
                      imageSrc: layoutGrid,
                    },
                    {
                      key: 'Carousel',
                      text: 'Carousel',
                      selectedImageSrc: layoutCarousel,
                      imageSrc: layoutCarousel,
                    }
                  ]
                }),
                PropertyPaneChoiceGroup('shape', {
                  label: "Shape", // don't forget to localize your test in a real-world solution
                  options: [
                    {
                      key: 'Circle',
                      text: 'Circle',
                      iconProps: {
                        officeFabricIconFontName: 'CircleShapeSolid'
                      }
                    },
                    {
                      key: 'Square',
                      text: 'Square',
                      iconProps: {
                        officeFabricIconFontName: 'SquareShapeSolid'
                      }
                    },
                    {
                      key: 'Triangle',
                      text: 'Triangle',
                      iconProps: {
                        officeFabricIconFontName: 'TriangleShapeSolid'
                      }
                    }
                  ]
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
