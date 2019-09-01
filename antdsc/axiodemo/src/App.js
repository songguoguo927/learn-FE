import React, { Component } from "react";
import "./App.css";
import { Layout, Menu, Icon } from "antd";
import CategoryManage from "./pages/CategoryManage";
import ArticleManage from "./pages/ArticleManage";
import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";

const { Header, Sider, Content } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <HashRouter>
        <Layout
          id="components-layout-demo-custom-trigger"
          style={{ minHeight: "100vh" }}
        >
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Link to="/article">
                <Icon type="hdd" />
                  <span>文章管理</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/category">
                  <Icon type="read" />
                  <span>栏目管理</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Link to="/3">
                  <Icon type="smile" />
                  <span>nav 3</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <Switch>
                <Redirect exact from="/" to="/article"></Redirect>
                <Route exact path="/article" component={ArticleManage}></Route>
                <Route exact path="/category" component={CategoryManage}></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
