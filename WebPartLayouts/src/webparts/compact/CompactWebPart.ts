import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneToggle
} from '@microsoft/sp-webpart-base';

import * as strings from 'CompactWebPartStrings';
import Compact from './components/Compact';
import { ICompactProps } from './components/Compact.types';

export interface ICompactWebPartProps {
  usePaging: boolean;
}

export default class CompactWebPart extends BaseClientSideWebPart<ICompactWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICompactProps > = React.createElement(
      Compact,
      {
        usePaging: this.properties.usePaging
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
                PropertyPaneToggle('usePaging', {
                  label: strings.UsePagingFieldLabel,
                  checked: this.properties.usePaging === true,
                  onText: "Yes",
                  offText: "No"

                })
              ]
            }
          ]
        }
      ]
    };
  }
}
