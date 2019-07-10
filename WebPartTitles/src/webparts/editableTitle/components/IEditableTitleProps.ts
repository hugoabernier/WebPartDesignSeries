//BEGIN: Add support for web part title
import { DisplayMode } from '@microsoft/sp-core-library';
//END: Add

export interface IEditableTitleProps {
  description: string;
  //BEGIN: Add support for web part title
  title: string;
  displayMode: DisplayMode;
  updateTitle: (value: string) => void;
  //END: Add
}
