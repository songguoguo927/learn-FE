import React from "react";
import { Provider } from "react-redux";
import store from "./store";
// import logo from './logo.svg';
import "./App.css";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Article from "./pages/Article";
function App() {
  return (
    //将store提供给根组件--这样里面的子组件就能访问store中的值
    <Provider store={store}>
      <div className="App">
        <Test1 />
        -----
        <Test2 />
        -----
        <Article />
      </div>
    </Provider>
  );
}

export default App;
