import { Action, ActionCreator, Reducer } from "redux";

export type RootState = {
    loading: boolean;
    errorloading: string
    buttonLoading: boolean,
    clicked: boolean,
    search: string,
    dataBooks: [],
    totalItems: number,
    clickedSearch: boolean,
    valueCategories: string,
    valueSorting: string,
    maxResultStepBook: number,
    indexBook: number,
    bookListShow: boolean,
    showDetail: boolean
}

const initialState: RootState = {
    loading: false,
    errorloading: '',
    buttonLoading: false,
    clicked: false,
    search: "",
    dataBooks: [],
    totalItems: 0,
    clickedSearch: false,
    valueCategories: '',
    valueSorting: "relevance",
    maxResultStepBook: 30,
    indexBook: 0,
    bookListShow: false,
    showDetail: false
}

const STATE_LOADING = 'STATE_LOADING';

type StateLoadingtAction = {
    type: typeof STATE_LOADING;
    loading: boolean
};

export const stateLoading: ActionCreator<StateLoadingtAction> = (loading: boolean) => ({
    type: STATE_LOADING,
    loading
});

const ERROR_LOADING = 'ERROR_LOADING';

type ErrorLoadingAction = {
    type: typeof ERROR_LOADING;
    errorloading: string
};

export const errorLoading: ActionCreator<ErrorLoadingAction> = (errorloading: string) => ({
    type: ERROR_LOADING,
    errorloading
});

const BUTTON_LOADING = 'BUTTON_LOADING';

type ButtonLoadingAction = {
    type: typeof BUTTON_LOADING;
    buttonLoading: boolean
};

export const buttonLoading: ActionCreator<ButtonLoadingAction> = (buttonLoading: boolean) => ({
    type: BUTTON_LOADING,
    buttonLoading
});


const CLICKED_BUTTON_LOADING = 'CLICKED_BUTTON_LOADING';

type ClickedButtonLoagingAction = {
    type: typeof CLICKED_BUTTON_LOADING;
    clicked: boolean
};

export const clickedButtonLoading: ActionCreator<ClickedButtonLoagingAction> = (clicked: boolean) => ({
    type: CLICKED_BUTTON_LOADING,
    clicked
});


const SEARCH_BOOK = 'SEARCH_BOOK';

type SearchBookAction = {
    type: typeof SEARCH_BOOK;
    search: string
};

export const searchBooks: ActionCreator<SearchBookAction> = (search: string) => ({
    type: SEARCH_BOOK,
    search
});

const DATA_BOOKS = 'DATA_BOOKS';

type DataBookskAction = {
    type: typeof DATA_BOOKS;
    dataBooks: [],
};

export const dataBooks: ActionCreator<DataBookskAction> = (dataBooks: []) => ({
    type: DATA_BOOKS,
    dataBooks
});


const TOTAL_ITEMS = 'TOTAL_ITEMS';

type TotalItemskAction = {
    type: typeof TOTAL_ITEMS;
    totalItems: number
};

export const totalItems: ActionCreator<TotalItemskAction> = (totalItems: number) => ({
    type: TOTAL_ITEMS,
    totalItems
});

const CLICKED_SEARCH = 'CLICKED_SEARCH';

type ClickedSearchAction = {
    type: typeof CLICKED_SEARCH;
    clickedSearch: boolean
};

export const clickedSearch: ActionCreator<ClickedSearchAction> = (clickedSearch: boolean) => ({
    type: CLICKED_SEARCH,
    clickedSearch
});

const VALUE_CATEGORIES = 'VALUE_CATEGORIES';

type ValueCategoriesAction = {
    type: typeof VALUE_CATEGORIES;
    valueCategories: string,
};

export const valueCategoriesUpdate: ActionCreator<ValueCategoriesAction> = (valueCategories: string,) => ({
    type: VALUE_CATEGORIES,
    valueCategories
});

const VALUE_SORTING = 'VALUE_SORTING';

type ValueSortingtAction = {
    type: typeof VALUE_SORTING;
    valueSorting: string
};

export const valueSortingUpdate: ActionCreator<ValueSortingtAction> = (valueSorting: string) => ({
    type: VALUE_SORTING,
    valueSorting
});

const INDEX_BOOK = 'INDEX_BOOK';

type UpdateIndexBookAction = {
    type: typeof INDEX_BOOK;
    indexBook: number
};

export const updateIndexBook: ActionCreator<UpdateIndexBookAction> = (indexBook: number) => ({
    type: INDEX_BOOK,
    indexBook
});

const MAX_STEP_RESULT_BOOK = 'MAX_STEP_RESULT_BOOK';

type UpdateMaxStepBookAction = {
    type: typeof MAX_STEP_RESULT_BOOK;
    maxResultStepBook: number
};


export const updateStepBook: ActionCreator<UpdateMaxStepBookAction> = (maxResultStepBook: number) => ({
    type: MAX_STEP_RESULT_BOOK,
    maxResultStepBook
});


const BOOK_LIST_SHOW = 'BOOK_LIST_SHOW';

type UpdateBookListShowAction = {
    type: typeof BOOK_LIST_SHOW;
    bookListShow: boolean
};


export const updateBookListShow: ActionCreator<UpdateBookListShowAction> = (bookListShow: boolean) => ({
    type: BOOK_LIST_SHOW,
    bookListShow
});

const BOOK_SHOW_DETAIL = 'BOOK_SHOW_DETAIL';

type UpdateBookDetailShowAction = {
    type: typeof BOOK_SHOW_DETAIL;
    showDetail: boolean
};


export const updateBookDetailShow: ActionCreator<UpdateBookDetailShowAction> = (showDetail: boolean) => ({
    type: BOOK_SHOW_DETAIL,
    showDetail
});




type MyAction = StateLoadingtAction | ErrorLoadingAction
    | ButtonLoadingAction |
    ClickedButtonLoagingAction | SearchBookAction | DataBookskAction
    | TotalItemskAction | ClickedSearchAction | ValueCategoriesAction | ValueSortingtAction
    | UpdateIndexBookAction | UpdateMaxStepBookAction | UpdateBookListShowAction | UpdateBookDetailShowAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {

    switch (action.type) {

        case STATE_LOADING:
            return {
                ...state,
                loading: action.loading
            };

        case ERROR_LOADING:
            return {
                ...state,
                errorloading: action.errorloading
            };

        case BUTTON_LOADING:
            return {
                ...state,
                buttonLoading: action.buttonLoading
            };

        case CLICKED_BUTTON_LOADING:
            return {
                ...state,
                clicked: action.clicked
            };

        case SEARCH_BOOK:
            return {
                ...state,
                search: action.search
            };

        case DATA_BOOKS:
            return {
                ...state,
                dataBooks: action.dataBooks
            };

        case TOTAL_ITEMS:
            return {
                ...state,
                totalItems: action.totalItems
            };

        case CLICKED_SEARCH:
            return {
                ...state,
                clickedSearch: action.clickedSearch
            };

        case VALUE_CATEGORIES:
            return {
                ...state,
                valueCategories: action.valueCategories
            };

        case VALUE_SORTING:
            return {
                ...state,
                valueSorting: action.valueSorting
            };

        case INDEX_BOOK:
            return {
                ...state,
                indexBook: action.indexBook
            };

        case MAX_STEP_RESULT_BOOK:
            return {
                ...state,
                maxResultStepBook: action.maxResultStepBook
            }

        case BOOK_LIST_SHOW:
            return {
                ...state,
                bookListShow: action.bookListShow
            }

        case BOOK_SHOW_DETAIL:
            return {
                ...state,
                showDetail: action.showDetail
            }


        default:
            return state


    }

}





