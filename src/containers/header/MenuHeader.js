import React from 'react';

import { DownOutlined } from '@ant-design/icons';
import { Row } from 'antd';


function MenuHeader() {
    return <Row className='header-menu-top'>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Dashboard
        </a>
        <a className="ant-dropdown-link active" onClick={e => e.preventDefault()}>
            Organización
        </a>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Modelos
            <DownOutlined className='ml-1'></DownOutlined>
        </a>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Seguimiento
            <DownOutlined className='ml-1'></DownOutlined>
        </a>
    </Row>;
}

export default MenuHeader;