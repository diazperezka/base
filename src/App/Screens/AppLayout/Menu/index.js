import React, { useState } from 'react'

import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons'

import {
    Row,
    Col,
    Typography
} from 'antd'

import ProjectsFilter from './ProjectsFilter'

import styles from './menu.module.css'


const Menu = () => {

    const [isProjectsFilterVisible, setIsProjectsFilterVisible] = useState(false)

    return (
        <>
            <Row className={[styles.upperCase, styles.menuDirection, styles.menu]}>
                <Col span={8}>
                    <Row className={styles.spaceAround} align="middle">
                        <Col>
                            <LeftOutlined className={styles.menuArrows} onClick={() => setIsProjectsFilterVisible(!isProjectsFilterVisible)} />
                        </Col>
                        <Col>
                            <Typography className={styles.textWhite}>Inicio</Typography>
                        </Col>
                        <Col>
                            <Typography className={styles.textWhite}>Proyectos</Typography>
                        </Col>
                        <Col>
                            <Typography className={styles.textWhite}>Innovación</Typography>
                        </Col>
                    </Row>
                </Col>
                <Col span={4} style={{ alignSelf: 'center' }}>
                    <Row>
                        <Col>
                            Logo
                    </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row className={styles.spaceAround} align="middle">
                        <Col>
                            <Typography className={styles.textWhite}>Empresa</Typography>
                        </Col>
                        <Col>
                            <Typography className={styles.textWhite}>Noticias</Typography>
                        </Col>
                        <Col>
                            <Typography className={styles.textWhite}>Contacto</Typography>
                        </Col>
                        <Col>
                            <RightOutlined className={styles.menuArrows} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ProjectsFilter
                isProjectsFilterVisible={isProjectsFilterVisible}
                setIsProjectsFilterVisible={setIsProjectsFilterVisible}
            />
        </>
    )
}

export default Menu