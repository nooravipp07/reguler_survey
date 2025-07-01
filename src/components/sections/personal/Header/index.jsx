import { useState } from "react";
import { Card, Modal, Row, Col, Form, Input, Button } from "antd";
import { 
    InfoCircleOutlined, 
    CalendarOutlined, 
    UserOutlined, 
    BankOutlined,
    TeamOutlined,
    HomeOutlined
} from '@ant-design/icons';

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
            title={
                <div className="flex items-center gap-2">
                    <HomeOutlined className="text-primary" />
                    <span>Reguler Survey</span>
                </div>
            }
            className="mx-4 mt-4 shadow-none border-b border-orange-500"
        >
            <Form layout="vertical">
                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item 
                            label={
                                <span className="font-semibold flex items-center gap-1">
                                    <InfoCircleOutlined className="text-primary" />
                                    No Aplikasi
                                </span>
                            }
                        >
                            <Input disabled value="Ahmad Sobari" className="font-semibold" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item 
                            label={
                                <span className="font-semibold flex items-center gap-1">
                                    <CalendarOutlined className="text-primary" />
                                    Tanggal Aplikasi
                                </span>
                            }
                        >
                            <Input disabled className="font-semibold" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item 
                            label={
                                <span className="font-semibold flex items-center gap-1">
                                    <UserOutlined className="text-primary" />
                                    Nama Sesuai KTP
                                </span>
                            }
                        >
                            <Input disabled className="font-semibold" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item 
                            label={
                                <span className="font-semibold flex items-center gap-1">
                                    <TeamOutlined className="text-primary" />
                                    Source Order
                                </span>
                            }
                        >
                            <Input disabled className="font-semibold" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={24} md={12}>
                        <Form.Item 
                            label={
                                <span className="font-semibold flex items-center gap-1">
                                    <UserOutlined className="text-primary" />
                                    Tipe Nasabah
                                </span>
                            }
                        >
                            <Input disabled className="font-semibold" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item 
                            label={
                                <span className="font-semibold flex items-center gap-1">
                                    <BankOutlined className="text-primary" />
                                    Cabang
                                </span>
                            }
                        >
                            <Input disabled className="font-semibold" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row justify="end">
                    <Col>
                        <Form.Item>
                            <Button 
                                type="primary" 
                                icon={<InfoCircleOutlined />}
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
                title={
                    <div className="flex items-center gap-2">
                        <InfoCircleOutlined />
                        Detail Aplikasi
                    </div>
                }
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