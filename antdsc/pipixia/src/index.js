import React from 'react';
import {render} from 'react-dom';
import './index.css';
import { Skeleton } from 'antd';

// import AntdCom from './antdCompos/AntdCom'
import Tree from './antdCompos/Tree'

import MyTable from './antdCompos/Table'
render(< Tree/>, document.getElementById('root'));

render(<MyTable/>, document.getElementById('root2'));
// render(<Skeleton active/>, document.getElementById('root2'));