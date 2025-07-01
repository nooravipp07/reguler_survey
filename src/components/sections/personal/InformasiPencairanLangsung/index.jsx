import { useState } from "react";
import { Collapse, Space, Row, Col, Radio, Form, Checkbox, Input, Select, DatePicker } from "antd";
import ExpandIcon from "@/components/ui/Tab/ExpandIcon";
import FileUploader from "@/components/ui/FileUploader";

import styles from './styles.module.css';

const BoldLabel = ({ children }) => <span style={{ fontWeight: 500 }}>{children}</span>;

const { TextArea } = Input;

const InformasiPencairanLangsung = () => {
    const [form] = Form.useForm();

    const items = [
        {
            key: '8',
            label: <span className={styles.collapseHeader}>Informasi Pencairan Langsung</span>,
            children: (
                <div className={styles.formWrapper}>
                    <Form layout="vertical" form={form}>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Bank</BoldLabel>}
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
                                    label={<BoldLabel>Account No.</BoldLabel>}
                                    name="accountNo"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Account Name</BoldLabel>}
                                    name="accountName"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Upload Dokumen Cover Buku Tabungan</BoldLabel>}
                                    name="docCoverBukuTabungan"
                                    rules={[{ required: false, message: "Wajib pilih salah satu opsi" }]}
                                >
                                    <FileUploader
                                        payloadData={{
                                            order_id: "2503000035",
                                            current_form_code: "RGSVY",
                                            insert_by: "test",
                                            doc_code: "IMG007",
                                        }}
                                    />
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

export default InformasiPencairanLangsung;
