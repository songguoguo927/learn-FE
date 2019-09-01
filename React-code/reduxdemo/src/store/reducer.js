import util from '../utils/util'
// 函数  reducer
const initState = {
  inputValue: '',
  listData: [{
    text: '备忘录1',
    time: '2019-09-09 09:09:09',
    status: '未完成'
  }, {
    text: '备忘录2',
    time: '2019-09-10 09:09:09',
    status: '已完成'
  }]
};
export default (state = initState, action) => {
  console.log('reducer');
  if (action.type === "TO_CHANGE_INPUT") {
    let obj = {
      ...state,
      inputValue: action.value
    }
    console.log(obj);
    return obj;
    /* return {
      ...state,
      inputValue: action.value
    }; */
  }
  if (action.type === 'TO_ADD') {
    // 修改仓库
    let obj = {
      text: state.inputValue,
      time: util.parseDate(),
      status: '未完成'
    };
    let { listData } = state;
    listData.push(obj);
    return {
      ...state,
      listData,
      inputValue: ''
    }
  }
  if (action.type === "TO_DELETE") {
    let { listData } = state;
    listData.splice(action.index, 1);
    return {
      ...state,
      listData
    }
  }
  if (action.type === "TO_CHANGE_STATUS") {
    let { listData } = state;
    listData[action.index].status = '已完成';
    return {
      ...state,
      listData
    }
  }
  return { ...state };

}




