declare interface ICompactWebPartStrings {
  PreviousLabel: string;
  NextLabel: string;
  PropertyPaneDescription: string;
  BasicGroupName: string;
  UsePagingFieldLabel: string;
}

declare module 'CompactWebPartStrings' {
  const strings: ICompactWebPartStrings;
  export = strings;
}
