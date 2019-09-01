import React, { Component } from "react";
import { Button, Table,Modal ,Form,Input, Select ,Radio} from "antd";
import axios from "../utils/axios";
import config from "../utils/config";

const {Option} = Select
const {TextArea} =Input
export class ArticleManage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentPage: 1,
      pagination: {
        total: 0,
        pageSize: config.pageSize
      },
      //批量删除的id组成的数组
      ids: [],  
      // 模态框的显示与隐藏
      visible: false,
      modalTitle:'新增文章信息',
      confirmLoading: false,
      //模态框需要遍历的栏目信息
      categoryData:[],
      //模态框中表单数据对象
      form:{}
    };
  }
  //获取数据
  findArticleByPage = () => {
    axios.get("/manager/article/findArticle", {
        params: {
          page: this.state.currentPage - 1,
          pageSize: this.state.pagination.pageSize
        }
      })
      .then(res => {
        //res是axios封装过后的数据
        // console.log(res.data);
        this.setState({
          data: res.data.list,
          pagination: { ...this.state.pagination, total: res.data.total }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  //查找所有的栏目信息
  findAllCategory = ()=>{
    axios.get('/manager/category/findAllCategory')
    .then((res)=>{
      this.setState({categoryData:res.data},()=>{this.showModal()})
      // console.log(res.data)
    }).catch(err=>console.log(err))
  }
  //表单控件更改
  formChange(attr,e){
    let {form}=this.state;
    form[attr]=e.target.value;
    this.setState({
      form
    })
  }
  //下拉列表控件更改 select的change上直接携带了value值
  selectChange(value){
    let {form}=this.state;
    form.categoryId = value;
    this.setState({
      form
    })
  }
  componentDidMount() {
    this.findArticleByPage();
  }
  //新增OK  模态框显示 如果点了模态框的确定，提交数据给后台 
  toAdd = () => {
    this.setState({
      form:{},
      modalTitle:'新增文章信息'
    })
    this.findAllCategory()
    // let obj = {
    //   title: "123想学习",
    //   liststyle: "style-one",
    //   //categoryId有的才可以存进去
    //   categoryId: "8243",
    //   content: "122312"
    // };
    // //保存
    // axios.post("/manager/article/saveOrUpdateArticle", obj)
    //   .then(() => {
    //     //添加保存成功的提示 todo
    //     console.log('保存了')
    //     this.findArticleByPage();
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };
  //单个删除OK 根据id
  toDeleteById(id){
    //id就是要删除的数据
    axios.get('/manager/article/deleteArticleById',{params:{id}})
    .then(()=>{
      alert('删除成功');
      this.findArticleByPage()
        // console.log(11111)
    }).catch(err=>console.log(err))
  }
  //批量删除OK  后台的这个接口要的是表单格式的数据，但axios默认post提交的是json格式的数据，所以需要转化
  toBatchDelete = () => {
    axios.post("/manager/article/batchDeleteArticle",
        {
          ids: this.state.ids.toString()
        }
      ).then(res => {
       alert('删除成功');
        //添加提示删除成功
        this.findArticleByPage();
      }).catch(err => console.log(err));
  };
 //页数更改事件处理程序OK
 pageChange = pagination => {
  // console.log(pagination);
  this.setState({ currentPage: pagination.current},
    () => {
      this.findArticleByPage();
    }
  );
};

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  //模态框点击保存数据 关闭模态框
  toSave = () => {
    axios.post('/manager/article/saveOrUpdateArticle', this.state.form)
    .then(() => {     
      this.findArticleByPage();
      this.setState({
        visible: false,
      },()=>{alert('保存成功')});
    }).catch((error) => {
      console.log(error);
    });
  };
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };
  //编辑某一行数据，拿到这一行数据，展示到模态框
  toEdit(record){
    let {form}=this.state;
    form ={
      ...form,
      id:record.id,
      title:record.title,
      liststyle:record.liststyle,
      content:record.content,
      categoryId:record.category ? record.category.id :'',
      publishtime:config.parseDate(),
      readtimes:0
    }
    this.setState({form,modalTitle:'修改文章信息'})
    this.findAllCategory()
  }
  
  render() {
    const { visible, confirmLoading ,form} = this.state;
    //选中 行 会触发
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys, selectedRows );
        //selectedRowKeys就是要删除的元素的id组成的数组
        this.setState({
          ids: selectedRowKeys
        });
      }
    };
    //列的配置 数据属性与表格列的绑定
    const columns = [
      {
        title: "文章标题",
        dataIndex: "title"
      },
      {
        title: "所属栏目",
        dataIndex: "category.name"
      },
      {
        title: "排列方式",
        dataIndex: "liststyle"
      },
      {
        title: "发布时间",
        dataIndex: "publishtime"
      },
      {
        title: "阅读次数",
        dataIndex: "readtimes"
      },
      {
        title: "操作",
        dataIndex: "",
        render: (text, record) => {
          //text属性值
          //record一行记录 是一个对象
          return (
            <div>
              <Button size="small" type="primary" onClick={this.toEdit.bind(this,record)}>编辑</Button>
              <Button size="small" type="danger" onClick={this.toDeleteById.bind(this,record.id)}>删除</Button>
            </div>
          );
        }
      }
    ];
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    return (
      <div className="article-manage">
        <div className="btns-div">
          <Button type="primary" onClick={this.toAdd}>
            新增
          </Button>
          <Button type="danger" onClick={this.toBatchDelete}>
            批量删除
          </Button>
        </div>
        <div className="table-div">
          <Table
            size="small"
            rowKey="id"
            rowSelection={rowSelection}
            columns={columns}
            dataSource={this.state.data}
            pagination={this.state.pagination}
            onChange={this.pageChange}
          />
        </div>
        <Modal
          title={this.state.modalTitle}
          visible={visible}
          onOk={this.toSave}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          okText="提交"
          cancelText="取消"
        >
          <Form  {...formItemLayout}>
            {/* {JSON.stringify(form)} */}
          <Form.Item label="标题">
              <Input value={form.title} onChange={this.formChange.bind(this,'title')}></Input>
            </Form.Item>
            <Form.Item label="所属栏目">
              <Select value={form.categoryId} onChange={this.selectChange.bind(this)}>{/*遍历category数据 */}
              {
                this.state.categoryData.map((item,index)=>{
                 return <Option value= {item.id} key={index}>
                   {item.name}
                  </Option>
                })
              }
              </Select>
            </Form.Item>
            <Form.Item label="排列方式">
              <Radio.Group  value={form.liststyle}>
              {/*不使用自带更函数<Radio.Group onChange={this.onChange} value={this.state.value}> */}
                <Radio value="style-one" checked={form.liststyle==='style-one'} onChange={this.formChange.bind(this,'liststyle')}>排列方式1</Radio>
                <Radio value="style-two" checked={form.liststyle==='style-two'} onChange={this.formChange.bind(this,'liststyle')}>排列方式2</Radio>             
              </Radio.Group>
            </Form.Item>
            <Form.Item label="内容描述">
              <TextArea  value={form.content} rows={4}  onChange={this.formChange.bind(this,'content')}/>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default ArticleManage;
