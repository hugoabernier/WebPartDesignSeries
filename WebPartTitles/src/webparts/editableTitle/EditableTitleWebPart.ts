import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'EditableTitleWebPartStrings';
import EditableTitle from './components/EditableTitle';
import { IEditableTitleProps } from './components/IEditableTitleProps';

export interface IEditableTitleWebPartProps {
  description: string;
  // BEGIN Add to support web part title
  title: string;
  // END Add
}

export default class EditableTitleWebPart extends BaseClientSideWebPart<IEditableTitleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IEditableTitleProps> = React.createElement(
      EditableTitle,
      {
        description: this.properties.description,
        // BEGIN: Add to support web part title
        // Don't forget that you need to add a comma at the end of the previous line
        title: this.properties.title,
        displayMode: this.displayMode,
        updateTitle: (value: string) => {
          this.properties.title = value;
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
