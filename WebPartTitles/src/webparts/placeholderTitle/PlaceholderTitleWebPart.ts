import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'PlaceholderTitleWebPartStrings';
import PlaceholderTitle from './components/PlaceholderTitle';
import { IPlaceholderTitleProps } from './components/IPlaceholderTitleProps';

export interface IPlaceholderTitleWebPartProps {
  description: string;
  title: string;
}

export default class PlaceholderTitleWebPart extends BaseClientSideWebPart<IPlaceholderTitleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPlaceholderTitleProps > = React.createElement(
      PlaceholderTitle,
      {
        description: this.properties.description,
        title: this.properties.title,
        displayMode: this.displayMode,
        updateTitle: (value: string) => {
          this.properties.title = value;
        }
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
