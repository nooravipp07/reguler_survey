import { useState } from "react";
import { Card, Modal, Row, Col, Form, Input, Button } from "antd";
import styles from "./styles.module.css";

const Header = () => {
    const [visible, setVisible] = useState(false);
    const [iframeUrl, setIframeUrl] = useState("");

    const handleOpenModal = () => {
        const url = `http://detail-aplikasi-reactjs-uat.apps.ocp4dev.muf.co.id/aplikasi/2209028156/eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNzAwODAzMSIsImV4cCI6MTc0Nzk4NTI1NiwiaWF0IjoxNzQ3ODk4ODU2fQ.lufOiSqaPNi8kgzfkbPYYW0OqXQ6tO6ZsEhhEGYgapLfMKOC2fcgQOHlqJMpEJj6uDbaFPAe0jZXC3TE1Ml7CA`;
        setIframeUrl(url);
        setVisible(true);
    };

    return (
        <Card title="Reguler Survey" className={styles.card}>
            <Form layout="vertical">
                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item className={styles.boldLabel} label="No Aplikasi">
                            <Input disabled value="Ahmad Sobari" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item className={styles.boldLabel} label="Tanggal Aplikasi">
                            <Input disabled />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item className={styles.boldLabel} label="Nama Sesuai KTP">
                            <Input disabled />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item className={styles.boldLabel} label="Source Order">
                            <Input disabled />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item className={styles.boldLabel} label="Tipe Nasabah">
                            <Input disabled />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item className={styles.boldLabel} label="Cabang">
                            <Input disabled />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify="end">
                    <Col>
                        <Form.Item>
                            <Button type="primary" style={{ backgroundColor: '#004890', color: 'white' }} variant="solid" onClick={handleOpenModal}>
                                Detail
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>  
            </Form>

            <Modal
                title="Detail Aplikasi"
                open={visible}
                onCancel={() => setVisible(false)}
                footer={null}
                width="100%"
                height="80%"
                style={{ top: 20 }}
                className={styles.customModal}
            >
                <iframe
                    src={iframeUrl}
                    title="Detail Page"
                    width="100%"
                    height="100%"
                    style={{ border: "none" }}
                />
            </Modal>
        </Card>
    );
};

export default Header;
