import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneChoiceGroup,
  PropertyPaneLabel
} from '@microsoft/sp-property-pane';

import * as strings from 'ConditionalGroupWebPartStrings';
import ConditionalGroup from './components/ConditionalGroup';
import { IConditionalGroupProps } from './components/IConditionalGroupProps';

export interface IConditionalGroupWebPartProps {
  chartType: "Column" | "Pie";
}

export default class ConditionalGroupWebPart extends BaseClientSideWebPart<IConditionalGroupWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IConditionalGroupProps> = React.createElement(
      ConditionalGroup,
      {
        chartType: this.properties.chartType
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
    const chartDescription: string = this.properties.chartType === "Column" ?
      "Use a column chart to show data changes over time or comparisons among items. Categories are typically shown along the horizontal axis and values along the vertical axis."
      : "Use a pie chart to show percentages of a whole. Best when used with fewer than seven categories.";

      const configuration: IPropertyPaneConfiguration = {
      pages: [
        {
          header: {
            description: "Select a chart type and then select a data source. You can enter up to 12 data points, or show up to 50 data points if you use a SharePoint list on this site as the data source."
          },
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: "Chart type",
              groupFields: [
                PropertyPaneChoiceGroup('chartType', {
                  options: [
                    {
                      key: 'Column',
                      text: 'Column chart',
                      iconProps: {
                        officeFabricIconFontName: 'BarChart4'
                      }
                    },
                    {
                      key: 'Pie',
                      text: 'Pie chart',
                      iconProps: {
                        officeFabricIconFontName: 'PieDouble'
                      }
                    }
                  ]
                }),
                PropertyPaneLabel('chartType', {
                  text: chartDescription
                }),

              ]
            },
            {
              groupName: "Data",
              isCollapsed: false,
              groupFields: [
                PropertyPaneLabel('data', {
                  text: "This is some sample text for the data property group."
                }),
              ]
            }
          ]
        }
      ]
    };

    // If the selected type is not Column, we don't need to make any further changes
    if (this.properties.chartType !== "Column") {
      return configuration;
    }

    // Get the list of property groups
    const { groups } = configuration.pages[0];

    // Insert a property pane
    groups.push({
      groupName: "Layout",
      isCollapsed: false,
      groupFields: [
        PropertyPaneLabel('layout', {
          text: "This is some sample text for the layout property group."
        }),
      ]
    });

    return configuration;
  }
}
