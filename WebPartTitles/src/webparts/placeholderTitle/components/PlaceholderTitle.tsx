import * as React from 'react';
import styles from './PlaceholderTitle.module.scss';
import { IPlaceholderTitleProps } from './IPlaceholderTitleProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";

export default class PlaceholderTitle extends React.Component<IPlaceholderTitleProps, {}> {
  public render(): React.ReactElement<IPlaceholderTitleProps> {
    return (
      <div className={styles.placeholderTitle}>
        <WebPartTitle displayMode={this.props.displayMode}
          title={this.props.title}
          updateProperty={this.props.updateTitle}
          placeholder={"Web Part Title Placeholder"}
        />
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
