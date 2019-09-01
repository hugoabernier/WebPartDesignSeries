declare interface ICompactWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  UsePagingFieldLabel: string;
}

declare module 'CompactWebPartStrings' {
  const strings: ICompactWebPartStrings;
  export = strings;
}
