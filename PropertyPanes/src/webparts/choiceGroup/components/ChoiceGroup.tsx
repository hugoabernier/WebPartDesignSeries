import * as React from 'react';
import styles from './ChoiceGroup.module.scss';
import { IChoiceGroupProps } from './IChoiceGroupProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ChoiceGroup extends React.Component<IChoiceGroupProps, {}> {
  public render(): React.ReactElement<IChoiceGroupProps> {
    return (
      <div className={ styles.choiceGroup }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <p className={ styles.description }><strong>Layout: </strong> {escape(this.props.layout)}</p>
              <p className={ styles.description }><strong>Shape: </strong> {escape(this.props.shape)}</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
