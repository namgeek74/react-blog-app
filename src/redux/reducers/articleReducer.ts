import { TAG, GET_ARTICLE } from '../actions';

const initialState = {
    tags: [],
    articles: [],
    articlesCount: 0,
}

const articleReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TAG:
            return {
                ...state,
                tags: [...state.tags, ...action.tags]
            };
        case GET_ARTICLE:
            return {
                ...state,
                articles: [...state.articles, ...action.articles],
                articlesCount: action.articlesCount
            };
        default:
            return state;
    }
}

export default articleReducer;