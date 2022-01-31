import { Radio } from 'antd';

function DivisionGroupButtons() {
    return <Radio.Group value="top" style={{ marginBottom: 8 }}>
    <Radio.Button value="top">Listado</Radio.Button>
    <Radio.Button value="left">Árbol</Radio.Button>
  </Radio.Group>;
}

export default DivisionGroupButtons;