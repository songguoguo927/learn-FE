import React, { Component } from 'react';
import { Button, Input, List } from 'antd';
// 引入store
import store from '../store';
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.changeState);  //订阅者做的事情
  }
  changeState = () => {
    this.setState({
      ...store.getState()
    });
  }
  inputChange = (e) => {
    // 获取input数据，更改store中的数据
    let action = {
      type: 'TO_CHANGE_INPUT',
      value: e.target.value
    };
    // 分发action
    store.dispatch(action);
    console.log(this.state, '------');
  }
  // 添加
  toAdd = () => {
    let action = {
      type: 'TO_ADD'
    };
    store.dispatch(action);
  }
  // 删除
  toDelete = (index) => {
    // console.log(index);
    let action = {
      type: 'TO_DELETE',
      index
    };
    store.dispatch(action);
  }
  // 完成
  toChangeStatus = (index) => {
    let action = {
      type: 'TO_CHANGE_STATUS',
      index
    };
    store.dispatch(action);
  }
  render() {
    return (
      <div style={{ padding: 20 }}>
        <h2>备忘录</h2>
        {/* {JSON.stringify(this.state)} */}
        <div>
          <Input type="text" value={this.state.inputValue} onChange={this.inputChange} style={{ width: 200 }} />
          <Button type="primary" onClick={this.toAdd}>添加</Button>
        </div>
        <div style={{ marginTop: 10 }}>
          {/* 展示数组 */}
          <List size="small"
            bordered
            dataSource={this.state.listData}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  title={<span style={{ color: item.status === '未完成' ? 'red' : 'green' }}>[{item.status}]{item.text}&nbsp;&nbsp;{item.time}</span>}
                />
                <div>
                  {
                    item.status === '未完成' && <Button type="link" onClick={this.toChangeStatus.bind(this, index)}>完成</Button>
                  }
                  <Button type="link" onClick={this.toDelete.bind(this, index)}>删除</Button>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default ToDo;