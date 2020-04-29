import React, { useState } from 'react'
import DragResizeDialog from '../src/index'

const Index = () => {

  const [visible, setVisible] = useState(false)
  return (
    <React.Fragment>
      <DragResizeDialog
        visible={visible}
        onCancel={() => setVisible(false)}
      />
      <button onClick={() => setVisible(true)}>点击</button>
    </React.Fragment>
  )
}

export default Index;