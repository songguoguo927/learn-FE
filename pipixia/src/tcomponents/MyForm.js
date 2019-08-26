import React, { Component } from "react";

//多个表单控件的双向数据绑定
class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: [{ name: "男", value: "boy" }, { name: "女", value: "girl" }],
      address: [
        { name: "江苏", value: "jiangsu" },
        { name: "江西", value: "jiangxi" },
        { name: "山西", value: "shanxi" }
      ],
      hobbies: [
        {
          value: "swim",
          name: "游泳"
        },
        {
          value: "eat",
          name: "吃"
        },
        {
          value: "draw",
          name: "画画"
        }
      ],
      msg: "注册页面",
      form: {
        username: "1",
        age: "2",
        sex: "girl",
        hobbies: ["draw", "eat"],
        address: "shanxi",
        desc: "today is a good day"
      },
      count: 0
    };
  }
  //把用户名，年龄，textarea归为一类处理双向数据绑定,后面发现单选框，下拉框也适用
  inputChange(str, e) {
    // let form = Object.assign({}, this.state.form);
    // form[str] = e.target.value;//很关键
    // this.setState({ form });
    // this.setState({ form:form });
    this.setState({
      form: { ...this.state.form, [str]: e.target.value } //相同属性名会后面会覆盖前面的
    });
  }
  toSubmit() {
    console.log(this.state.form);
    console.log({ ...this.state.form }); //提交给后台的数据
    console.log({ ...this.state.form } === this.state.form); //false
  }
  render() {
    const { hobbies, sex, address, form } = this.state;
    return (
      <div>
        <form>
          <h3>{this.state.msg}</h3>
          姓名:
          <input
            type="text"
            name="name"
            value={form.username}
            onChange={this.inputChange.bind(this, "username")}
          />
          <br />
          年龄:
          <input
            type="text"
            name="age"
            value={form.age}
            onChange={this.inputChange.bind(this, "age")}
          />
          <br />
          性别:
          {sex.map((item, index) => {
            return (
              <label key={index}>
                <input
                  type="radio"
                  name="sex"
                  value={item.value}
                  checked={form.sex === item.value ? true : false}
                  onChange={this.inputChange.bind(this, "sex")}
                />
                {item.name}
              </label>
            );
          })}
          <br />
          爱好：
          {hobbies.map((item, index) => {
            return (
              <label htmlFor={item.value} key={index}>
                <input id={item.value} type="checkbox" value={item.value} 
                checked={form.hobbies.includes(item.value)}
                onChange={this.checkboxChange.bind(this)}/>
                {item.name}
              </label>
            );
          })}
          <br />
          地址:
          <select
            name="address"
            id=""
            value={form.address}
            onChange={this.inputChange.bind(this, "address")}
          >
            {/*   selected={form.address===item.value?true:false}不要绕路在option中设置 */}
            <option value="">请选择</option>
            {address.map((item, index) => (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <br />
          描述：
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={this.inputChange.bind(this, "desc")}
            value={form.desc}
          />
        </form>
        <button onClick={this.toSubmit.bind(this)}>提交数据给后台</button>
        <div onClick={this.addOne.bind(this)}>
          {this.state.count}点击数字增加1
        </div>
      </div>
    );
  }
  checkboxChange(e){
    //如果数组中没有值（被点击的），添加，有，删除
    let val = e.target.value;
    let hobbies = [...this.state.form.hobbies]
    if(hobbies.includes(val)){
      let index = hobbies.indexOf(val);
      hobbies.splice(index,1)
    }
    else{
      hobbies.push(val)
    }
    //数据操作完，进行setState
    this.setState({
      form:{
        ...this.state.form,
        hobbies
      }
    })
  }
  addOne(e) {
    // 当一个事件响应函数执行过后，事件的属性被设置为 null， 如果想用保持事件的值的话，可以调用
    // e.persist();  // 这样属性会被保留，并且事件也会从池中取出
    // window.setTimeout(function(){
    //     console.log(e);
    //     console.log(e.type);
    // },1000);
    //只自增了1次，因为在setState的时候，react内部会创建一个更新队列
    //通过 firstUpdate 、 lastUpdate 、 lastUpdate.next 去维护一个更新的队列，在最终的 performWork 中，相同的key会被覆盖，只会对最后一次的 setState 进行更新
    // this.setState({
    //     count:this.state.count+1
    // } )
    // this.setState({
    //     count:this.state.count+1
    // })
    //实现可自增两次-多个setState同步更新？

    // 方案一
    // this.setState((preState, props) => ({
    //     count: preState.count+1
    //   }));
    //   this.setState((preState, props) => ({
    //     count: preState.count+1
    //   }));
    //方案二，第二个参数回调函数中是更新后的值
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log(this.state.count);
    //     this.setState({ count: this.state.count + 1 });
    //   }
    // );
    //方案三，放到setTimeout中去
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1
      });
      this.setState({
        count: this.state.count + 1
      });
    }, 0);
  }
}
//
export default MyForm;
