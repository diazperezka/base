import React from 'react';
import {
    Row,
    Col,
    Drawer,
    Typography,
    Checkbox,
    List,
    Button
} from 'antd';

import styles from './projectsFilter.module.css'

const PorTipo = () => {

    const data = [
        {
            label: 'Todos'
        },
        {
            label: 'Habitacional'
        },
        {
            label: 'Comercial'
        },
    ]

    return (
        <Row style={{ flexDirection: 'column', borderBottom: '2px solid #B0B0B0' }}>
            <Col align="center" style={{ paddingLeft: '15px', paddingTop: '15px' }}>
                <Typography.Title level={4}>
                    Por tipo
                </Typography.Title>
            </Col>
            <Col align="start" style={{ paddingLeft: '20px' }}>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <Row align="middle">
                            <Col span={3} align="center">
                                <Checkbox />
                            </Col>
                            <Col span={3} align="center">
                                <List.Item>{item.label}</List.Item>
                            </Col>
                        </Row>
                    )}
                />
            </Col>
        </Row>
    )
}

const PorEntrega = () => {

    const data = [
        {
            label: 'Todos'
        },
        {
            label: 'Habitacional'
        },
        {
            label: 'Comercial'
        },
    ]

    return (
        <Row style={{ flexDirection: 'column', borderBottom: '2px solid #B0B0B0' }}>
            <Col align="center" style={{ paddingLeft: '15px', paddingTop: '15px' }}>
                <Typography.Title level={4}>
                    Por entrega
                </Typography.Title>
            </Col>
            <Col align="start" style={{ paddingLeft: '20px', paddingBottom: '15px' }}>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <Row align="middle">
                            <Col span={3} align="center">
                                <Checkbox />
                            </Col>
                            <Col span={3} align="center">
                                <List.Item>{item.label}</List.Item>
                            </Col>
                        </Row>
                    )}
                />
            </Col>
        </Row>
    )
}

const PorComuna = () => {

    const data = [
        {
            label: 'Todos'
        },
        {
            label: 'Habitacional'
        },
        {
            label: 'Comercial'
        },
    ]

    return (
        <Row style={{ flexDirection: 'column' }}>
            <Col align="center" style={{ paddingLeft: '15px', paddingTop: '15px' }}>
                <Typography.Title level={4}>
                    Por Comuna
                </Typography.Title>
            </Col>
            <Col align="start" style={{ paddingLeft: '20px' }}>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <Row align="middle">
                            <Col span={3} align="center">
                                <Checkbox />
                            </Col>
                            <Col span={3} align="center">
                                <List.Item>{item.label}</List.Item>
                            </Col>
                        </Row>
                    )}
                />
            </Col>
        </Row>
    )
}

const Buscar = () => {
    return (
        <>
            <Row justify="center" style={{ padding: '15px' }}>
                <Col>
                    <Button type="primary">BUSCAR</Button>
                </Col>
            </Row>
        </>
    )
}

const ProjectsFilter = ({ isProjectsFilterVisible, setIsProjectsFilterVisible }) => {

    const onClose = () => {
        setIsProjectsFilterVisible(false);
    };

    return (
        <>
            <Drawer
                placement="left"
                closable={false}
                onClose={onClose}
                mask={false}
                width={330}
                visible={isProjectsFilterVisible}
            >
                <Row justify="center" style={{
                    marginTop: '110px',
                    textTransform: 'uppercase',
                    paddingTop: '40px',
                    paddingBottom: '40px',
                    background: '#F8C329'
                }}>
                    <Col>
                        <Typography.Title level={3} style={{
                            color: '#fff'
                        }}>
                            Proyectos
                        </Typography.Title>
                    </Col>
                </Row>
                <Row justify="end" style={{
                    textTransform: 'uppercase',
                    background: '#424242',
                    padding: '7px'
                }}>
                    <Col>
                        <Typography style={{
                            color: '#fff'
                        }}>
                            BUSCAR/FILTRAR
                        </Typography>
                    </Col>
                </Row>
                <Row style={{
                    background: '#DFDFDF',
                    flexDirection: 'column'
                }}>
                    <PorTipo />
                    <PorEntrega />
                    <PorComuna />
                    <Buscar />
                </Row>
            </Drawer>
        </>
    );
};

export default ProjectsFilter