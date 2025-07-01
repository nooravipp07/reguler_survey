import { useState } from "react";
import { Collapse, Space, Row, Col, Radio, Form, Checkbox, Input, Select, DatePicker } from "antd";
import ExpandIcon from "@/components/ui/Tab/ExpandIcon";
import FileUploader from "@/components/ui/FileUploader";

import styles from './styles.module.css';

const BoldLabel = ({ children }) => <span style={{ fontWeight: 500 }}>{children}</span>;

const { TextArea } = Input;

const InformasiSurvey = () => {
    const [form] = Form.useForm();

    const items = [
        {
            key: '10',
            label: <span className={styles.collapseHeader}>Informasi Survey</span>,
            children: (
                <div className={styles.formWrapper}>
                    <Form layout="vertical" form={form}>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Nama Informan 1</BoldLabel>}
                                    name="tempatLahir"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Hubungan Informan 1 dengan Debitur</BoldLabel>}
                                    name="jenisKelamin"
                                    rules={[
                                        {
                                            required: false,
                                            message: "Alasan wajib diisi",
                                        },
                                    ]}
                                >
                                    <Select
                                        options={[
                                            { label: 'LAKI - LAKI', value: 'L' },
                                            { label: 'PEREMPUAN', value: 'P' },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Dalam kurun waktu sebulan terakhir pernah dikunjungi penagih (debt collector) ?</BoldLabel>}
                                    name="docIdentitasPasangan"
                                    rules={[{ required: false, message: 'Wajib pilih salah satu opsi' }]}
                                >
                                    <Radio.Group
                                        options={[
                                            { label: 'Sesuai', value: 0 },
                                            { label: 'Tidak Sesuai', value: 1 },
                                        ]}
                                        onChange
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Debitur dikenal/bersosialisasi dengan warga ?</BoldLabel>}
                                    name="docIdentitasPasangan"
                                    rules={[{ required: false, message: 'Wajib pilih salah satu opsi' }]}
                                >
                                    <Radio.Group
                                        options={[
                                            { label: 'Sesuai', value: 0 },
                                            { label: 'Tidak Sesuai', value: 1 },
                                        ]}
                                        onChange
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Debitur terlibat di keanggotaan LSM ?</BoldLabel>}
                                    name="docIdentitasPasangan"
                                    rules={[{ required: false, message: 'Wajib pilih salah satu opsi' }]}
                                >
                                    <Radio.Group
                                        options={[
                                            { label: 'Sesuai', value: 0 },
                                            { label: 'Tidak Sesuai', value: 1 },
                                        ]}
                                        onChange
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Status Kepemilikan domisili sesuai inputan Debitur</BoldLabel>}
                                    name="jenisKelamin"
                                    rules={[
                                        {
                                            required: false,
                                            message: "Alasan wajib diisi",
                                        },
                                    ]}
                                >
                                    <Select
                                        options={[
                                            { label: 'LAKI - LAKI', value: 'L' },
                                            { label: 'PEREMPUAN', value: 'P' },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label=""
                                    name="docIdentitasPasangan"
                                    rules={[{ required: false, message: 'Wajib pilih salah satu opsi' }]}
                                >
                                    <Radio.Group
                                        options={[
                                            { label: 'Sesuai', value: 0 },
                                            { label: 'Tidak Sesuai', value: 1 },
                                        ]}
                                        onChange
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[8, 8]}>
                            <Col xs={12} sm={12} md={6}>
                                <Form.Item
                                    label={<BoldLabel>Lama tinggal/menempati rumah sesuai ?</BoldLabel>}
                                    name="rt"
                                    rules={[{ required: false, message: 'RT wajib diisi' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={12} sm={12} md={6}>
                                <Form.Item
                                    label={<BoldLabel> Tahun Bulan</BoldLabel>}
                                    name="rw"
                                    rules={[{ required: false, message: 'RW wajib diisi' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Foto Selfie PIC Survey dengan Informan 1</BoldLabel>}
                                    name="uplokartuKeluarga"
                                    rules={[{ required: false, message: "Wajib pilih salah satu opsi" }]}
                                >
                                    <FileUploader
                                        payloadData={{
                                            order_id: "ORD123",
                                            current_form_code: "FORM001",
                                            insert_by: "user123",
                                            doc_code: "KTP",
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Informasi Informan 1</BoldLabel>}
                                    name="tempatLahir"
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

export default InformasiSurvey;
