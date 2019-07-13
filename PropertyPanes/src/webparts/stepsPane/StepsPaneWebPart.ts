import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'StepsPaneWebPartStrings';
import StepsPane from './components/StepsPane';
import { IStepsPaneProps } from './components/IStepsPaneProps';

export interface IStepsPaneWebPartProps {
  demoProperty1: string;
  demoProperty2: string;
  demoProperty3: string;
  demoProperty4: string;
  demoProperty5: string;
  demoProperty6: string;
  demoProperty7: string;
  demoProperty8: string;
  demoProperty9: string;
  demoProperty10: string;
}

export default class StepsPaneWebPart extends BaseClientSideWebPart<IStepsPaneWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IStepsPaneProps > = React.createElement(
      StepsPane,
      {
        description: this.properties.demoProperty1
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
      // ADDED: To change the default current page
      currentPage: 3,
      // END added
      pages: [
        {
          header: {
            description: "This is the first page."
          },
          displayGroupsAsAccordion: false,
          groups: [
            {
              groupName: "Group 1",
              groupFields: [
                PropertyPaneTextField('demoProperty1', {
                  label: "Property 1"
                }),
                PropertyPaneTextField('demoProperty2', {
                  label: "Property 2"
                })
              ]
            },
            {
              groupName: "Group 2",
              groupFields: [
                PropertyPaneTextField('demoProperty3', {
                  label: "Property 3"
                }),
                PropertyPaneTextField('demoProperty4', {
                  label: "Property 4"
                })
              ]
            }
          ]
        },
        // ADDED: To add steps
        {
          header: {
            description: "This is the second page."
          },
          displayGroupsAsAccordion: false,
          groups: [
            {
              groupName: "Group 3",
              groupFields: [
                PropertyPaneTextField('demoProperty5', {
                  label: "Property 5"
                }),
                PropertyPaneTextField('demoProperty6', {
                  label: "Property 6"
                })
              ]
            },
            {
              groupName: "Group 4",
              groupFields: [
                PropertyPaneTextField('demoProperty7', {
                  label: "Property 7"
                }),
                PropertyPaneTextField('demoProperty8', {
                  label: "Property 8"
                })
              ]
            }
          ]
        },
        {
          header: {
            description: "This is the third and final page."
          },
          displayGroupsAsAccordion: false,
          groups: [
            {
              groupName: "Group 5",
              groupFields: [
                PropertyPaneTextField('demoProperty9', {
                  label: "Property 9"
                }),
                PropertyPaneTextField('demoProperty10', {
                  label: "Property 10"
                })
              ]
            }
          ]
        }
        //END added
      ]
    };
  }
}
