import * as React from 'react';
import styles from './EditableTitle.module.scss';
import { IEditableTitleProps } from './IEditableTitleProps';
import { escape } from '@microsoft/sp-lodash-subset';

//BEGIN: Add to support web part title
import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
//END: Add

export default class EditableTitle extends React.Component<IEditableTitleProps, {}> {
  public render(): React.ReactElement<IEditableTitleProps> {
    return (
      <div className={styles.editableTitle}>
        {/* BEGIN: Add to support web part title */}
        <WebPartTitle displayMode={this.props.displayMode}
          title={this.props.title}
          updateProperty={this.props.updateTitle} />
        {/* END: Add */}
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
