//Article组件 --练习--redux+react-redux+redux-thunk 异步数据的获取、展示与更改
import React from "react";
import { connect } from "react-redux";
import { changeMsgA, getDataA } from "../store/actionCreators/articleAction";
function Article(props) {
  console.log(props);
  return (
    <div>
      hello
      <button onClick={props.changeMsg}>更改state中的数据--同步</button>
      {JSON.stringify(props.article)}
      <br />
      <button onClick={props.getData}>获取数据--异步</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => state;
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeMsg: () => {
      dispatch(changeMsgA("article更改后的值"));
    },
    getData: () => {
      dispatch(getDataA({ page: 0, pageSize: 10 }));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article);
