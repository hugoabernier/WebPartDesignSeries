export interface IPagingProps {
    currentPage: number;
    totalItems: number;
    itemsCountPerPage: number;
    showPageNumber: boolean;
    nextButtonLabel: string;
    previousButtonLabel: string;
    nextButtonAriaLabel?: string;
    previousButtonAriaLabel?: string;
    onPageUpdate: (pageNumber: number) => void;
}

export interface IPagingState { }
