import { useState } from "react";
import { Collapse, Space, Row, Col, Radio, Form, Checkbox, Input, Select, DatePicker } from "antd";
import ExpandIcon from "@/components/ui/Tab/ExpandIcon";
import FileUploader from "@/components/ui/FileUploader";

import styles from './styles.module.css';

const BoldLabel = ({ children }) => <span style={{ fontWeight: 500 }}>{children}</span>;

const { TextArea } = Input;

const CancelApplication = () => {
    const [form] = Form.useForm();

    const items = [
        {
            key: '11',
            label: <span className={styles.collapseHeader}>Cancel Application</span>,
            children: (
                <div className={styles.formWrapper}>
                    <Form layout="vertical" form={form}>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Cancel Reason</BoldLabel>}
                                    name="bank"
                                    rules={[
                                        {
                                            required: false,
                                            message: "Alasan wajib diisi",
                                        },
                                    ]}
                                >
                                    <Select
                                        options={[
                                            { label: 'Tidak punya KTP', value: '0' },
                                            { label: 'KTP Hilang', value: '1' },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Cancel Reason Notes</BoldLabel>}
                                    name="cancelReasonNotes"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <TextArea rows={2} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            ),
        },
    ];

    return (
        <Space direction="vertical" size="middle" className={styles.space}>
            <Collapse
                bordered={false}
                expandIcon={ExpandIcon}
                items={items}
                style={{ backgroundColor: 'white' }}
                className={styles.custumCollapse}
            />
        </Space>
    );
};

export default CancelApplication;
