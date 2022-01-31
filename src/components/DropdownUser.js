 
import { DownOutlined } from '@ant-design/icons';
import {  Avatar } from 'antd';
 

function DropdownUser () {
    return <a className="ant-dropdown-link link-user" onClick={e => e.preventDefault()}>

    <Avatar style={{ backgroundColor: 'orange', verticalAlign: 'middle', fontSize: '18px' }} size="large" >
      A
    </Avatar>
    <span className='ml-1'>Administrador</span>

    <DownOutlined className='ml-1'></DownOutlined>
  </a>;
}

export default DropdownUser;