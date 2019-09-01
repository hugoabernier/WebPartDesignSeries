import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import Grid from './components/Grid';
import { IGridProps } from './components/Grid.types';

export interface IGridWebPartProps {
  description: string;
}

export default class GridWebPart extends BaseClientSideWebPart<IGridWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGridProps> = React.createElement(
      Grid,
      {
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
}
