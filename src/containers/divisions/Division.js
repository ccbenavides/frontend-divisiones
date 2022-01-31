import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Table } from 'antd';
import Header from '../header/Header';
import DivisionsTabs from './DivisionsTabs';
import DivisionSearch from './DivisionSearch';
import DivisionActions from './DivisionActions';
import DivisionGroupButtons from './DivisionGroupButtons';
import { selectdivisionData, fetchDivisonByAny } from '../../redux/reducers/slices/divisionDataSlice';
import {  PlusOutlined } from '@ant-design/icons';


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        name: record.name,
    }),
};

const columns = [
    {
        title: 'División',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        filters: [
            { text: 'Dirección General', value: 'Dirección General' },
            { text: 'División Técnica', value: 'División Técnica' },
            { text: 'Inversiones', value: 'Inversiones' },
            { text: 'Medios', value: 'Medios' },
        ],
        filterSearch: true,
        onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
        title: 'División Superior',
        dataIndex: 'name_superior',
        key: 'name_superior',
        filters: [
            { text: 'Dirección General', value: 'Dirección General' },
            { text: 'División Técnica', value: 'División Técnica' },
            { text: 'Inversiones', value: 'Inversiones' },
            { text: 'Medios', value: 'Medios' },
        ],
        filterSearch: true,
        onFilter: (value, record) => record.name_superior.indexOf(value) === 0,
        sorter: (a, b) => a.name_superior.localeCompare(b.name_superior)
    },
    {
        title: 'Colaboradores',
        dataIndex: 'count_collaborators',
        key: 'count_collaborators',
        sorter: (a, b) => a.count_collaborators - b.count_collaborators,
    },
    {
        title: 'Nivel',
        key: 'level',
        dataIndex: 'level',
        sorter: (a, b) => a.level - b.level,
        filters: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
        ],
        onFilter: (value, record) => record.level === value,
    },
    {
        title: 'Subdivisiones',
        key: 'subdivisions',
        dataIndex: 'subdivisions',
        sorter: (a, b) => a.level - b.level,
        render: text => <div>
            <span className='underline'>{text}</span>
            <span className='plus_button'><PlusOutlined /></span>
        </div>,
        
    },
    {
        title: 'Embajadores',
        key: 'ambassador',
        dataIndex: 'ambassador',
    },
];


function Division() {
    const { data, status, error } = useSelector(selectdivisionData)
    const dispatch = useDispatch()

    useEffect(() => { 
        if (status == '')
            dispatch(fetchDivisonByAny())
    }, [dispatch])

    const [selectionType, _] = useState('checkbox'); 

    return (
        <div className="App">
            <Header></Header>
            <section>
                <Row justify='space-between' align='center' className='master__full'>
                    <h3>Organización</h3>
                    <DivisionActions></DivisionActions>
                </Row>
                <DivisionsTabs></DivisionsTabs>

                <section className='master__full master__grey'>
                    <Row justify='space-between'>
                        <DivisionGroupButtons></DivisionGroupButtons>
                        <DivisionSearch></DivisionSearch>
                    </Row>
                    {status == 'loading' ? <span>Cargando data</span> : <Table columns={columns}
                        className='mt-2'
                        bordered={true}
                        size='small'
                        pagination={{ 
                            defaultPageSize: 15, 
                            showSizeChanger: true, 
                            pageSizeOptions: ['15', '20', '30'], 
                            locale: { items_per_page: "Página" } 
                        }}
                        dataSource={data} 
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }} />} 


                </section>
            </section>
        </div>
    );
}

export default Division;
