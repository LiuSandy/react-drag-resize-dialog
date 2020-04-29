import React from 'react'
import { render } from 'react-dom'
import Index from './index.js' // 组件源代码

const App = () => <Index />
render(<App />, document.getElementById('root'))