import { DownloadOutlined, UploadOutlined, PlusOutlined } from '@ant-design/icons';
import {  Button } from 'antd';

function DivisionActions() {
    return <div>
    <Button type="primary" icon={<PlusOutlined />} size='large' className='ml-1' />
    <Button type="default" icon={<UploadOutlined />} size='large' className='ml-1' />
    <Button type="default" icon={<DownloadOutlined />} size='large' className='ml-1' />
  </div>;

}

export default DivisionActions;