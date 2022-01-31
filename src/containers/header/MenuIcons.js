 
import {  BellFilled, QuestionCircleFilled, CalendarFilled } from '@ant-design/icons';
import { Row,   Badge  } from 'antd';
 

function MenuIcons() {
    return <Row align='center' className='header-icons'>
        <Badge className='header-icon-block'>
            <span className='header-icon'>
                <CalendarFilled></CalendarFilled>
            </span>
        </Badge>
        <Badge className='header-icon-block'>
            <span className='header-icon'>
                <QuestionCircleFilled></QuestionCircleFilled>
            </span>

        </Badge>
        <Badge className='header-icon-block' count={5} >
            <span className='header-icon'>
                <BellFilled></BellFilled>
            </span>
        </Badge>

    </Row>;
}

export default MenuIcons;