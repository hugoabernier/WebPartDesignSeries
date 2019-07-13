import * as React from 'react';
import styles from './WebPartDescription.module.scss';
import { IWebPartDescriptionProps } from './IWebPartDescriptionProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";
import { css } from "@uifabric/utilities/lib/css";

export default class WebPartDescription extends React.Component<IWebPartDescriptionProps, {}> {
  public render(): React.ReactElement<IWebPartDescriptionProps> {
    return (
      <div className={ styles.webPartDescription }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>h
          </div>
        </div>
         {/* BEGIN: Add to support web part description */}
         <WebPartTitle displayMode={this.props.displayMode}
          title={this.props.webPartDescription}
          updateProperty={this.props.updateDescription}
          placeholder={"Add a description"}
          className={css(styles.descriptionElement, styles.descriptionElement__NoMargin, styles.descriptionElement__centerAlign) }
          />
        {/* END: Add */}
      </div>
    );
  }
}
