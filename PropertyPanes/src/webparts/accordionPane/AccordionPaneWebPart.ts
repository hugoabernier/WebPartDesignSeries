import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'AccordionPaneWebPartStrings';
import AccordionPane from './components/AccordionPane';
import { IAccordionPaneProps } from './components/IAccordionPaneProps';

export interface IAccordionPaneWebPartProps {
  demoProperty1: string;
  demoProperty2: string;
  demoProperty3: string;
  demoProperty4: string;
  demoProperty5: string;
  demoProperty6: string;
}

export default class AccordionPaneWebPart extends BaseClientSideWebPart<IAccordionPaneWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAccordionPaneProps > = React.createElement(
      AccordionPane,
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
      pages: [
        {
          header: {
            description: "This web part demonstrates how to use an accordion property pane"
          },
          // ADDED: to turn groups into accordions
          displayGroupsAsAccordion: true,
          // END added
          groups: [
            {
              groupName: "Group 1",
              // ADDED: to collapse group initially
              isCollapsed: true,
              // END added
              groupFields: [
                PropertyPaneTextField('demoProperty1', {
                  label: "Property 1"
                }),
                PropertyPaneTextField('demoProperty2', {
                  label: "Property 2"
                })
              ]
            },
            // ADDED: Group 2 and 3 for accordion support
            {
              groupName: "Group 2",
              // ADDED: to collapse group initially
              isCollapsed: true,
              // END added
              groupFields: [
                PropertyPaneTextField('demoProperty3', {
                  label: "Property 3"
                }),
                PropertyPaneTextField('demoProperty4', {
                  label: "Property 4"
                })
              ]
            },
            {
              groupName: "Group 3",
              // ADDED: to collapse group initially
              isCollapsed: true,
              // END added
              groupFields: [
                PropertyPaneTextField('demoProperty5', {
                  label: "Property 5"
                }),
                PropertyPaneTextField('demoProperty6', {
                  label: "Property 6"
                })
              ]
            }
            //

          ]
        }
      ]
    };
  }
}
