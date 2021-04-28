import React from 'react'
import ReactDOM from 'react-dom';
import { Rnd } from 'react-rnd'
import PropTypes from 'prop-types';
import { setDefaultPositions } from './utils'
import styles from './index.less';

const DialogDom = props => {
    const { children, title = "Title", defaultPositions, minandmax, bodyStyle, headerStyle } = props

    const { onCancel } = props

    const initialPosition = setDefaultPositions(defaultPositions)
    
    return (
        <Rnd
            default={initialPosition}
            className={styles.customModal}
            {...props}
            {...minandmax}
            dragHandleClassName="canDrag"
        >
            <div className={styles.header} style={headerStyle}>
                <div className={`${styles.title} canDrag`} style={{ width: '90%' }}>
                    {title}
                </div>
                <div className={styles.close}>
                    <a
                        id="close"
                        className={styles.closeBtn}
                        onClick={e => {
                            onCancel();
                        }}
                    />
                </div>
            </div>
            <div className={styles.body} style={bodyStyle}>{children}</div>
        </Rnd>

    )
}

const Index = props => {
    const { visible, ...rest } = props
    return visible
        ? ReactDOM.createPortal(
            <DialogDom {...rest} />,
            document.body
        )
        : null;
}

Index.displayName = "DragResizeDialog";

Index.defaultProps = {
    minandmax: {
        minWidth: 300,
        minHeight: 100,
        maxWidth: 1300,
        maxHeight: 900,
    }
}

Index.propTypes = {
    visible: PropTypes.bool,// 是否显示对话框
    defaultPositions: PropTypes.object,// 对话框位置 以及大小
    minandmax: PropTypes.object,
    onCancel: PropTypes.func.isRequired,// 点击关闭按钮 回调 必须
}

export default Index