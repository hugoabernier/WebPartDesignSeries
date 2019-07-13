import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'SinglePaneWebPartStrings';
import SinglePane from './components/SinglePane';
import { ISinglePaneProps } from './components/ISinglePaneProps';

export interface ISinglePaneWebPartProps {
  description: string;
}

export default class SinglePaneWebPart extends BaseClientSideWebPart<ISinglePaneWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISinglePaneProps > = React.createElement(
      SinglePane,
      {
        description: this.properties.description
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
          // REMOVED: To hide the property pane page description
          // header: {
          //   description: "This is the pane description"
          // },
          groups: [
            {
              //REMOVED: For single pane property pane
              //groupName: "This is the group name",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: "This is the field label" 
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
