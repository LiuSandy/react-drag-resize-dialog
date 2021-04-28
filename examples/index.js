import React, { useState } from 'react'
import DragResizeDialog from '../lib/index'
import '../lib/min.min.css'

const Index = () => {

  const [visible, setVisible] = useState(false)
  return (
    <>
      <DragResizeDialog
        visible={visible}
        onCancel={() => setVisible(false)}
      />
      <button onClick={() => setVisible(true)}>点击</button>
    </>
  )
}

export default Index;