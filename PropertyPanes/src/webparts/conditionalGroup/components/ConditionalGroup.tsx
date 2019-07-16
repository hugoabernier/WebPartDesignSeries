import * as React from 'react';
import styles from './ConditionalGroup.module.scss';
import { IConditionalGroupProps } from './IConditionalGroupProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ConditionalGroup extends React.Component<IConditionalGroupProps, {}> {
  public render(): React.ReactElement<IConditionalGroupProps> {
    return (
      <div className={ styles.conditionalGroup }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <p className={ styles.description }><strong>Chart type:</strong> {escape(this.props.chartType)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
