import { useState } from "react";
import { Collapse, Space, Row, Col, Radio, Form, Checkbox, Input, Select, DatePicker } from "antd";
import ExpandIcon from "@/components/ui/Tab/ExpandIcon";
import FileUploader from "@/components/ui/FileUploader";

import styles from './styles.module.css';

const BoldLabel = ({ children }) => <span style={{ fontWeight: 500 }}>{children}</span>;

const { TextArea } = Input;

const InformasiObjectPembiayaan = () => {
    const [form] = Form.useForm();

    const items = [
        {
            key: '6',
            label: <span className={styles.collapseHeader}>Informasi Object Pembiayaan</span>,
            children: (
                <div className={styles.formWrapper}>
                    <Form layout="vertical" form={form}>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Cara Bayar Angsuran</BoldLabel>}
                                    name="caraBayarAngsuran"
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
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Pencairan Dana</BoldLabel>}
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
                                    label={<BoldLabel>Permintaan Tanggal Jatuh Tempo</BoldLabel>}
                                    name="docIdentitasPasangan"
                                    rules={[{ required: false, message: 'Wajib pilih salah satu opsi' }]}
                                >
                                    <Radio.Group
                                        options={[
                                            { label: 'Ya', value: 0 },
                                            { label: 'Tidak', value: 1 },
                                        ]}
                                        onChange
                                    />
                                </Form.Item>
                            </Col>
                        </Row>                        
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Sumber Dana Pembayaran DP</BoldLabel>}
                                    name="sumberDanaPembayaranDP"
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
                                    label={<BoldLabel>Alamat Pemakai Unit</BoldLabel>}
                                    name="tempatLahir"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <TextArea rows={2} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Kode POS Pemakai Unit</BoldLabel>}
                                    name="kodePos"
                                    rules={[
                                        {
                                            required: false,
                                            message: "Alasan wajib diisi",
                                        },
                                    ]}
                                >
                                    <Select
                                        placeholder="Ketik untuk melakukan pencarian minimal 4 karakter"
                                        showSearch
                                        options={[
                                            { value: '0', label: 'Tidak Punya KTP' },
                                            { value: '1', label: 'Hilang' },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Kelurahan Pemakai Unit</BoldLabel>}
                                    name="kelurahan"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Kecamatan Pemakai Unit</BoldLabel>}
                                    name="kecamatan"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Kab / Kota Pemakai Unit</BoldLabel>}
                                    name="kabKota"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Provinsi Pemakai Unit</BoldLabel>}
                                    name="provinsi"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Identitas BPKB</BoldLabel>}
                                    name="identitasBPKBP"
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
                                    label={<BoldLabel>Hubungan Dengan Debitur</BoldLabel>}
                                    name="hubunganDenganDebitur"
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
                                    label={<BoldLabel>Nama Tercantum di BPKB</BoldLabel>}
                                    name="namaTercantumDiBPKB"
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
                                    label={<BoldLabel>Nama tercantum di BPKB yang sesuai</BoldLabel>}
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
                                    label={<BoldLabel>Nama BPKB Diproses BBN</BoldLabel>}
                                    name="namaTercantumDiBPKB"
                                    rules={[{ required: false, message: 'Wajib pilih salah satu opsi' }]}
                                >
                                    <Radio.Group
                                        options={[
                                            { label: 'Ya', value: 'Y' },
                                            { label: 'Tidak', value: 'N' },
                                        ]}
                                        onChange
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>BPKB Kendaraan</BoldLabel>}
                                    name="SPKDealer"
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
                                    label={<BoldLabel>STNK Kendaraan</BoldLabel>}
                                    name="SPKDealer"
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
                                    label={<BoldLabel>Tanggal Expired STNK</BoldLabel>}
                                    name="tanggalLahirPasangan"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <DatePicker />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Warna Plat</BoldLabel>}
                                    name="caraBayarAngsuran"
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
                                    label={<BoldLabel>Ketersediaan Unit</BoldLabel>}
                                    name="jenisIdentitasPasangan"
                                    rules={[
                                        {
                                            required: false,
                                            message: "Alasan wajib diisi",
                                        },
                                    ]}
                                >
                                    <Select
                                        options={[]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Product Marketing</BoldLabel>}
                                    name="jenisIdentitasPasangan"
                                    rules={[
                                        {
                                            required: false,
                                            message: "Alasan wajib diisi",
                                        },
                                    ]}
                                >
                                    <Select
                                        options={[]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Sumber Nasabah</BoldLabel>}
                                    name="jenisIdentitasPasangan"
                                    rules={[
                                        {
                                            required: false,
                                            message: "Alasan wajib diisi",
                                        },
                                    ]}
                                >
                                    <Select
                                        options={[]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>SPK Dealer</BoldLabel>}
                                    name="SPKDealer"
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
                                    label={<BoldLabel>SPK Karoseri & Spesifikasi Karoseri</BoldLabel>}
                                    name="SPKKaroseri"
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
                                    label={<BoldLabel>Foto Kendaraan - Tampak Depan</BoldLabel>}
                                    name="SPKDealer"
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
                                    label={<BoldLabel>Foto Kendaraan - Tampak Belakang</BoldLabel>}
                                    name="SPKDealer"
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
                                    label={<BoldLabel>Foto Kendaraan - Tampak Samping Kanan</BoldLabel>}
                                    name="SPKDealer"
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
                                    label={<BoldLabel>Foto Kendaraan - Tampak Samping Kiri</BoldLabel>}
                                    name="SPKDealer"
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
                                    label={<BoldLabel>Foto Kendaraan - Tampak Dalam (Interior)</BoldLabel>}
                                    name="SPKDealer"
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
                                    label={<BoldLabel>Foto Kendaraan - Tampak Panel Odometer (Km)</BoldLabel>}
                                    name="SPKDealer"
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
                                    label={<BoldLabel>Foto Kendaraan - Tampak Panel Odometer (Km)</BoldLabel>}
                                    name="SPKDealer"
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
                                    label={<BoldLabel>Foto Saat Nasabah Tanda Tangan Aplikasi</BoldLabel>}
                                    name="fotoNasabahTTDAplikasi"
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
                                    label={<BoldLabel>Foto saat pasangan Nasabah tanda tangan aplikasi</BoldLabel>}
                                    name="fotoNasabahTTDAplikasi"
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

export default InformasiObjectPembiayaan;
