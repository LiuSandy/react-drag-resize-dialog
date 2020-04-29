# react-drag-resize-dialog
> 基于 react-rnd 的一个可以移动可以改变大小的对话框组件

## Getting Start
- 安装依赖
```
npm install react-drag-resize-dialog or yarn add react-drag-resize-dialog
```
- 开始使用
```
import DragResizeDialog from 'react-drag-resize-dialog';
```
- 属性
```
visible: boolean 是否显示对话框 默认false
onCancel: function 点击关闭回调
```
更过参数请参考 [`react-rnd`](https://github.com/bokuweb/react-rnd)

## Demo
```
import React, {useState} from 'react';
import {render} from 'react-demo';
import DragResizeDialog from 'react-drag-resize-dialog';

const Index = props => {
    const [visible,setVisible] = useState(false)

    return (
        <>
            <DragResizeDialog
                visible={visible}
                onCancel={() => setVisible(false)}
            />
            <button onClick={()=>setVisible(true)}>DragResizeDialog</button>
        </>
    )
}
render(<App />, document.getElementById('root'))
```