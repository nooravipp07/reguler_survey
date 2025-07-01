import { useState } from "react";
import { Card, Modal, Row, Col, Form, Input, Button } from "antd";

const Header = () => {
    const [visible, setVisible] = useState(false);
    const [iframeUrl, setIframeUrl] = useState("");

    const handleOpenModal = () => {
        const url = `http://detail-aplikasi-reactjs-uat.apps.ocp4dev.muf.co.id/aplikasi/2209028156/eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNzAwODAzMSIsImV4cCI6MTc0Nzk4NTI1NiwiaWF0IjoxNzQ3ODk4ODU2fQ.lufOiSqaPNi8kgzfkbPYYW0OqXQ6tO6ZsEhhEGYgapLfMKOC2fcgQOHlqJMpEJj6uDbaFPAe0jZXC3TE1Ml7CA`;
        setIframeUrl(url);
        setVisible(true);
    };

    return (
        <Card 
            title="Reguler Survey" 
            className="mx-4 mt-4 shadow-none border-b border-orange-500"
        >
            <Form layout="vertical">
                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item label={<span className="font-semibold">No Aplikasi</span>}>
                            <Input disabled value="Ahmad Sobari" className="font-semibold" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label={<span className="font-semibold">Tanggal Aplikasi</span>}>
                            <Input disabled className="font-semibold" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item label={<span className="font-semibold">Nama Sesuai KTP</span>}>
                            <Input disabled className="font-semibold" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label={<span className="font-semibold">Source Order</span>}>
                            <Input disabled className="font-semibold" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item label={<span className="font-semibold">Tipe Nasabah</span>}>
                            <Input disabled className="font-semibold" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item label={<span className="font-semibold">Cabang</span>}>
                            <Input disabled className="font-semibold" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify="end">
                    <Col>
                        <Form.Item>
                            <Button 
                                type="primary" 
                                className="bg-primary hover:bg-primary-hover border-primary"
                                onClick={handleOpenModal}
                            >
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
                style={{ top: 20 }}
                className="h-screen"
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