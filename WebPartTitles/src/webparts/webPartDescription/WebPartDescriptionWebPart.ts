import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'WebPartDescriptionWebPartStrings';
import WebPartDescription from './components/WebPartDescription';
import { IWebPartDescriptionProps } from './components/IWebPartDescriptionProps';

export interface IWebPartDescriptionWebPartProps {
  description: string;
  // BEGIN Add to support web part description
  webPartDescription: string;
  // END Add
}

export default class WebPartDescriptionWebPart extends BaseClientSideWebPart<IWebPartDescriptionWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IWebPartDescriptionProps > = React.createElement(
      WebPartDescription,
      {
        description: this.properties.description,
        // BEGIN: Add to support web part description
        // Don't forget that you need to add a comma at the end of the previous line
        webPartDescription: this.properties.webPartDescription,
        displayMode: this.displayMode,
        updateDescription: (value: string) => {
          this.properties.webPartDescription = value;
        }
        //END: Add
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
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
