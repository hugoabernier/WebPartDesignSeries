import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
// import {
//   IPropertyPaneConfiguration,
//   PropertyPaneTextField
// } from '@microsoft/sp-property-pane';

// import * as strings from 'GridLayoutWebPartStrings';
import GridLayout from './components/GridLayout';
import { IGridLayoutProps } from './components/IGridLayout.types';

export interface IGridLayoutWebPartProps {
  description: string;
}

const baseProductionCdnUrl = 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/';
export const TestImages = {
  personaFemale: baseProductionCdnUrl + 'persona-female.png',
  personaMale: baseProductionCdnUrl + 'persona-male.png'
};

export default class GridLayoutWebPart extends BaseClientSideWebPart<IGridLayoutWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGridLayoutProps> = React.createElement(
      GridLayout,
      {
        items: [
          {
            thumbnail: '//placehold.it/192x192',
            title: 'Item 1',
            name: 'Annie Lindqvist',
            profileImageSrc: TestImages.personaFemale,
            location: 'Category'
          },
          {
            thumbnail: "//placehold.it/178x178",
            title: "Item 2",
            name: 'John Smith',
            profileImageSrc: TestImages.personaMale,
            location: 'Category'
          },
          {
            thumbnail: "//placehold.it/243x243",
            title: "Item 3",
            name: 'Ken Turner',
            profileImageSrc: TestImages.personaMale,
            location: 'Category'
          },
          {
            thumbnail: "//placehold.it/228x228",
            title: "Item 4",
            name: 'Marie Schmidt',
            profileImageSrc: TestImages.personaFemale,
            location: 'Category'
          },
          {
            thumbnail: "//placehold.it/220x220",
            title: "Item 5",
            name: 'Allan Parsons',
            profileImageSrc: TestImages.personaMale,
            location: 'Category'
          },
        ]
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

  // protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  //   return {
  //     pages: [
  //       {
  //         header: {
  //           description: strings.PropertyPaneDescription
  //         },
  //         groups: [
  //           {
  //             groupName: strings.BasicGroupName,
  //             groupFields: [
  //               PropertyPaneTextField('description', {
  //                 label: strings.DescriptionFieldLabel
  //               })
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   };
  // }
}
