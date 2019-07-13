import { DisplayMode } from '@microsoft/sp-core-library';

export interface IWebPartDescriptionProps {
  description: string;
   //BEGIN: Add support for web part description
   webPartDescription: string;
   displayMode: DisplayMode;
   updateDescription: (value: string) => void;
   //END: Add
}
