import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';

import * as strings from 'ConditionalFieldWebPartStrings';
import ConditionalField from './components/ConditionalField';
import { IConditionalFieldProps } from './components/IConditionalFieldProps';

export interface IConditionalFieldWebPartProps {
  conversationSource: 'Group'|'User'|'Topic'|'Home';
  searchCriteria: string;
  numberOfConversations: number;
}

export default class ConditionalFieldWebPart extends BaseClientSideWebPart<IConditionalFieldWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IConditionalFieldProps > = React.createElement(
      ConditionalField,
      {
        conversationSource: this.properties.conversationSource,
        searchCriteria: this.properties.searchCriteria,
        numberOfConversations: this.properties.numberOfConversations
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
            description: "Select conversation source from groups, topics, users, or home."
          },
          groups: [
            {
              groupFields: [
                PropertyPaneDropdown('conversationSource',{
                  label: "Select conversation source",
                  selectedKey: this.properties.conversationSource,
                  options: [
                    {
                      key: "Group",
                      text: "Group"
                    },
                    {
                      key: "User",
                      text: "User"
                    },
                    {
                      key: "Topic",
                      text: "Topic"
                    },
                    {
                      key: "Home",
                      text: "Home"
                    },

                  ]
                }),
                this.properties.conversationSource !== "Home" && PropertyPaneTextField('searchCriteria', {
                  label: "Search for a source",
                  placeholder: "Type to search"
                }),
                PropertyPaneDropdown('numberOfConversations',{
                  disabled: this.properties.conversationSource !== "Home",
                  label: "Number of conversations to show",
                  selectedKey: this.properties.conversationSource,
                  options: [
                    {
                      key: 4,
                      text: "Small - 4 conversations"
                    },
                    {
                      key: 8,
                      text: "Medium - 8 conversations"
                    },
                    {
                      key: 12,
                      text: "Large - 12 conversations"
                    }
                  ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
