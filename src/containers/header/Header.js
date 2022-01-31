
import logo from '../../logo.svg';
import logo_black from '../../logo_black.svg';
import MenuHeader from './MenuHeader';
import MenuIcons from './MenuIcons';
import DropdownUser from '../../components/DropdownUser';

import { Row } from 'antd';


function Header() {
    return <header>
        <Row className="header" justify="space-between" align="middle">
            <Row>
                <img src={logo} className="logo-white" alt="logo" />
                <MenuHeader></MenuHeader>
            </Row>
            <Row align='center'>
                <MenuIcons></MenuIcons>

                <div>
                    <DropdownUser></DropdownUser>
                    <a href="#" className='logo-button'>
                        <img src={logo_black} alt="logo" />
                    </a>

                </div>
            </Row>
        </Row>
    </header>
}

export default Header;