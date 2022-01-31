
import { Select, Input } from 'antd';

const { Option } = Select;
const { Search } = Input;

function DivisionSearch() {
    const handleChange = () => true;
    const onSearch = value => console.log(value);
    
    return <div>
        <Select defaultValue="" style={{ width: 120, marginRight: 15 }} onChange={handleChange}>
            <Option value="">Columnas</Option>
            <Option value="division">División</Option>
            <Option value="division-superior">División Superior</Option>
            <Option value="embajador">Embajador</Option>
        </Select>
        <Search placeholder="Buscar" onSearch={onSearch} style={{ width: 250 }} />
    </div>
}

export default DivisionSearch;