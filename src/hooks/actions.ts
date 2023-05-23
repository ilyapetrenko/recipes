import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {productActions} from "../store/reducers/productSlice";

const actions = {
    ...productActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}