import React from 'react'

import Menu from './Menu'

import {
    Row
} from 'antd'

const AppLayout = ({ history, children }) => {
    return (
        <>
            <Menu />
            <Row>
                {children}
            </Row>
        </>
    )
}

export default AppLayout