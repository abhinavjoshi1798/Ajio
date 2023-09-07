    import {
    DELETE_FAILURE,
    DELETE_REQUEST,
    DELETE_SUCCESS,
    GET_FAILURE,
    GET_REQUEST,
    GET_SUCCESS,
    PATCH_FAILURE,
    PATCH_REQUEST,
    PATCH_SUCCESS,
    POST_FAILURE,
    POST_REQUEST,
    POST_SUCCESS,
    } from "./actionType";
    const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    total: 0,
    };

    export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_REQUEST:
        return { ...state, isLoading: true };
        case GET_SUCCESS:
        return {
            ...state,
            isLoading: false,
            data: payload.products,
            total: payload.total,
        };
        case GET_FAILURE:
        return { ...state, isLoading: false, isError: true };
        case DELETE_REQUEST:
        return { ...state, isLoading: true };
        case DELETE_SUCCESS:
        return { ...state, isLoading: false };
        case DELETE_FAILURE:
        return { ...state, isLoading: false, isError: true };
        case POST_REQUEST:
        return { ...state, isLoading: true };
        case POST_SUCCESS:
        return { ...state, isLoading: false };
        case POST_FAILURE:
        return { ...state, isLoading: false, isError: true };
        case PATCH_REQUEST:
        return { ...state, isLoading: true };
        case PATCH_SUCCESS:
        return { ...state, isLoading: false };
        case PATCH_FAILURE:
        return { ...state, isLoading: false, isError: true };
        default:
        return state;
    }
    };
