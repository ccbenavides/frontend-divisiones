
import { Menu } from 'antd';

function DivisionsTabs() {
    return <Menu selectedKeys={["divisiones"]} mode="horizontal">
        <Menu.Item key="divisiones" >
            Divisiones
        </Menu.Item>
        <Menu.Item key="colaboradores" className='item_simple'>
            Colaboradores
        </Menu.Item>
    </Menu>;
}

export default DivisionsTabs;
