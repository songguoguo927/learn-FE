import { GET_APP_MSG, CHANGE_DATA, GET_APP_YIBU ,DELETE_APP_YIBU} from "../actionTypes";

export const changeDataA = value => {
  //value更改后的值
  return {
    type: CHANGE_DATA,
    value
  };
};
//redux-saga 的actionCreator
export const getDataAFromSaga = value => {
  return {
    type: GET_APP_YIBU,
    value
  };
};
export const delDataAfromSaga = ()=>{
    return {
        type: DELETE_APP_YIBU,
      };
}
