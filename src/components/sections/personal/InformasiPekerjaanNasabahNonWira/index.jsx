import { useState } from "react";
import { Collapse, Space, Row, Col, Radio, Form, Checkbox, Input, Select, DatePicker } from "antd";
import ExpandIcon from "@/components/ui/Tab/ExpandIcon";
import FileUploader from "@/components/ui/FileUploader";

import styles from './styles.module.css';

const BoldLabel = ({ children }) => <span style={{ fontWeight: 500 }}>{children}</span>;

const { TextArea } = Input;

const InformasiPekerjaanNonWira = () => {
    const [form] = Form.useForm();

    const items = [
        {
            key: '4',
            label: <span className={styles.collapseHeader}>Informasi Pekerjaan (Non Wira)</span>,
            children: (
                <div className={styles.formWrapper}>
                    <Form layout="vertical" form={form}>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Pekerjaan Nasabah</BoldLabel>}
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
                                    label={<BoldLabel>Jenis Tempat Bekerja</BoldLabel>}
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
                                    label={<BoldLabel>Nama Tempat Bekerja</BoldLabel>}
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
                                    label={<BoldLabel>Jabatan Nasabah</BoldLabel>}
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
                                    label={<BoldLabel>Alamat Tempat Bekerja</BoldLabel>}
                                    name="tempatLahir"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <TextArea rows={2} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[8, 8]}>
                            <Col xs={12} sm={12} md={6}>
                                <Form.Item
                                    label={<BoldLabel>RT</BoldLabel>}
                                    name="rt"
                                    rules={[{ required: false, message: 'RT wajib diisi' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={12} sm={12} md={6}>
                                <Form.Item
                                    label={<BoldLabel>RW</BoldLabel>}
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
                                    label={<BoldLabel>Kode POS Tempat Bekerja</BoldLabel>}
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
                                    label={<BoldLabel>Kelurahan Tempat Bekerja</BoldLabel>}
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
                                    label={<BoldLabel>Kecamatan Tempat Bekerja</BoldLabel>}
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
                                    label={<BoldLabel>Kab/Kota Tempat Bekerja</BoldLabel>}
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
                                    label={<BoldLabel>Provinsi Tempat Bekerja</BoldLabel>}
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
                                    label={<BoldLabel>No. Telp. Tempat Bekerja</BoldLabel>}
                                    name="tempatLahir"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <Input placeholder="KODE WILAYAH + NO. TELEPON/NO.HP" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Dokumen Bukti Bekerja (ID Card, Slip Gaji, Suket Kerja/Pengangkatan, dll)</BoldLabel>}
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
                                    label={<BoldLabel>Dokumen Bukti Penghasilan/Keuangan (Rek Tab/Koran)</BoldLabel>}
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

export default InformasiPekerjaanNonWira;
