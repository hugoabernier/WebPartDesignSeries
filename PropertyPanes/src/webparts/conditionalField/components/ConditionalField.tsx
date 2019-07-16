import * as React from 'react';
import styles from './ConditionalField.module.scss';
import { IConditionalFieldProps } from './IConditionalFieldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ConditionalField extends React.Component<IConditionalFieldProps, {}> {
  public render(): React.ReactElement<IConditionalFieldProps> {
    return (
      <div className={ styles.conditionalField }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <p className={ styles.description }><strong>Source:</strong> {this.props.conversationSource}</p>
              <p className={ styles.description }><strong>Search criteria:</strong> {escape(this.props.searchCriteria)}</p>
              <p className={ styles.description }><strong>Number of conversations:</strong> {this.props.numberOfConversations}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
