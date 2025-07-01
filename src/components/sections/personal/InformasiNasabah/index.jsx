import { useState } from "react";
import { Collapse, Space, Row, Col, Radio, Form, Checkbox, Input, Select, DatePicker } from "antd";
import { EyeOutlined } from '@ant-design/icons';
import ExpandIcon from "@/components/ui/Tab/ExpandIcon";
import FileUploader from "@/components/ui/FileUploader";

import styles from './styles.module.css';

const BoldLabel = ({ children }) => <span style={{ fontWeight: 500 }}>{children}</span>;

const { TextArea } = Input;

const InformasiNasabah = () => {
    const [form] = Form.useForm();

    // Form control
	const [canShowOriginalIdentity, setCanShowOriginalIdentity] = useState(true); // default Bisa
	const [isDebitorIdenMatches, setDebitorIdenMatches] = useState(true);
	const [isPropertySeparated, setPropertySeparated] = useState(true);
	const [isSpouseIdenMatches, setSpouseIdenMatches] = useState(true);

	// State untuk parameter
	const [martialStatus, setMartialStatus] = useState([]);
	const [reason, setReason] = useState([]);
	const [jenisIdentitas, setJenisIdentitas] = useState([]);
	const [zipCode, setZipCode] = useState([]);
	const [nationality, setNationality] = useState([]);

	const handleCanShowOriginalIdentity = (e) => {
		const value = e.target.value;
		setCanShowOriginalIdentity(value === 0);
	};

	const handleisDebitorIdenMatches = (e) => {
		const value = e.target.value;
		setDebitorIdenMatches(value === 0);
	};

	const handleIsPropertySeparated = (e) => {
		const value = e.target.value;
		setPropertySeparated(value === 1);
	};

	const handleIsSpouseIdenMatches = (e) => {
		const value = e.target.value;
		setSpouseIdenMatches(value === 0);
	};

    const items = [
        {
            key: '1',
            label: <span className={styles.collapseHeader}>Informasi Nasabah</span>,
            children: (
                <div className={styles.formWrapper}>
                    <Form layout="vertical" form={form}>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Lokasi Proses Survey <span style={{ color: 'red' }}>*</span>{' '}</BoldLabel>}
                                    name="lokasiSurvey"
                                    rules={[{ required: false, message: 'Pilih minimal satu lokasi' }]}
                                >
                                    <Checkbox.Group
                                        options={[
                                            { label: 'Rumah', value: 0 },
                                            { label: 'Tempat Usaha', value: 1 },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Foto Selfie PIC Survey di depan Lokasi Survey <span style={{ color: 'red' }}>*</span>{' '}</BoldLabel>}
                                    name="profileImage"
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
                                    label={<BoldLabel>Nama Lengkap Tanpa Singkatan dan Tanpa Gelar <span style={{ color: 'red' }}>*</span>{' '}</BoldLabel>}
                                    name="namaLengkap"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Dapat menunjukan identitas asli <span style={{ color: 'red' }}>*</span>{' '}</BoldLabel>}
                                    name="alasan"
                                    rules={[{ required: false, message: 'Wajib pilih salah satu opsi' }]}
                                >
                                    <Radio.Group
                                        options={[
                                            { label: 'Bisa', value: 0 },
                                            { label: 'Tidak Bisa', value: 1 },
                                        ]}
                                        onChange={handleCanShowOriginalIdentity}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        {!canShowOriginalIdentity && (
                            <Row gutter={[5, 5]}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label={<BoldLabel>Alasan Tidak Dapat menunjukkan identitas asli<span style={{ color: 'red' }}>*</span>{' '}</BoldLabel>}
                                        name="reason"
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
                        )}
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Dokumen KTP Debitur <span style={{ color: 'red' }}>*</span>{' '} <EyeOutlined style={{ color: '#1890ff', marginLeft: 4 }} /></BoldLabel>}
                                    name="docIdentitas"
                                    rules={[{ required: false, message: 'Wajib pilih salah satu opsi' }]}
                                >
                                    <Radio.Group
                                        options={[
                                            { label: 'Sesuai', value: 0 },
                                            { label: 'Tidak Sesuai', value: 1 },
                                        ]}
                                        onChange={handleisDebitorIdenMatches}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        {!isDebitorIdenMatches && (
                            <>
                            <Row gutter={[5, 5]}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label={<BoldLabel>Upload KTP Sesuai</BoldLabel>}
                                        name="uploadKTPSesuai"
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
                                        label={<BoldLabel>No. KTP Debitur</BoldLabel>}
                                        name="noKTPDebitur"
                                        rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                    >
                                        <Input placeholder="" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[5, 5]}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label={<BoldLabel>Nama Sesuai KTP</BoldLabel>}
                                        name="namaSesuaiKTP"
                                        rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                    >
                                        <Input placeholder="" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[5, 5]}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label={<BoldLabel>Tempat Lahir</BoldLabel>}
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
                                        label={<BoldLabel>Tanggal Lahir</BoldLabel>}
                                        name="tanggalLahir"
                                        rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                    >
                                        <DatePicker />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[5, 5]}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label={<BoldLabel>Jenis Kelamin</BoldLabel>}
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
                                        label={<BoldLabel>Alamat KTP</BoldLabel>}
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
                                        label={<BoldLabel>Kode POS</BoldLabel>}
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
                                        label={<BoldLabel>Kelurahan KTP</BoldLabel>}
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
                                        label={<BoldLabel>Kecamatan KTP</BoldLabel>}
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
                                        label={<BoldLabel>Kab / Kota KTP</BoldLabel>}
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
                                        label={<BoldLabel>Provinsi KTP</BoldLabel>}
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
                                        label={<BoldLabel>Kewarganegaraan KTP</BoldLabel>}
                                        name="kewarganegaraan"
                                        rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row> 
                            </>
                        )}
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Kartu Keluarga <span style={{ color: 'red' }}>*</span>{' '} <EyeOutlined style={{ color: '#1890ff', marginLeft: 4 }} /></BoldLabel>}
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
                                    label={<BoldLabel>Nama Gadis Ibu Kandung</BoldLabel>}
                                    name="namaGadisIbuKandung"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <Input placeholder="" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Status Perkawinan</BoldLabel>}
                                    name="statusPerkawinan"
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
                                    label={<BoldLabel>Dokumen Buku Nikah/Akta Perkawinan/Akta Cerai/Surat Kematian (Jika status di KTP & KK tidak sesuai dengan status rill)</BoldLabel>}
                                    name="aktaNikah"
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
                                    label={<BoldLabel>Ada / Tidak Ada Perjanjian Pisah Harta</BoldLabel>}
                                    name="perjanjianPisahHarta"
                                    rules={[{ required: false, message: 'Wajib pilih salah satu opsi' }]}
                                >
                                    <Radio.Group
                                        options={[
                                            { label: 'Ada', value: 0 },
                                            { label: 'Tidak Ada', value: 1 },
                                        ]}
                                        onChange={handleIsPropertySeparated}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        {!isPropertySeparated && (
                            <Row gutter={[5, 5]}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label={<BoldLabel>Dokumen Akta Perjanjian Pisah Harta</BoldLabel>}
                                        name="docPerjanjianPisahHarta"
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
                        )}
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Dokumen Identitas Pasangan <span style={{ color: 'red' }}>*</span>{' '} <EyeOutlined style={{ color: '#1890ff', marginLeft: 4 }} /></BoldLabel>}
                                    name="docIdentitasPasangan"
                                    rules={[{ required: false, message: 'Wajib pilih salah satu opsi' }]}
                                >
                                    <Radio.Group
                                        options={[
                                            { label: 'Sesuai', value: 0 },
                                            { label: 'Tidak Sesuai', value: 1 },
                                        ]}
                                        onChange={handleIsSpouseIdenMatches}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        {!isSpouseIdenMatches && (
                            <>
                                <Row gutter={[5, 5]}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label={<BoldLabel>Upload Dokumen Identitas yang Sesuai</BoldLabel>}
                                            name="uploadKTPSesuaiPasangan"
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
                                            label={<BoldLabel> Jenis Identitas Pasangan</BoldLabel>}
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
                                            label={<BoldLabel>Nomor Identitas Pasangan</BoldLabel>}
                                            name="noIdentitasPasangan"
                                            rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                        >
                                            <Input placeholder="" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[5, 5]}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label={<BoldLabel>Nama Pasangan</BoldLabel>}
                                            name="namaPasangan"
                                            rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                        >
                                            <Input placeholder="" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[5, 5]}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label={<BoldLabel>Tempat Lahir Pasangan</BoldLabel>}
                                            name="tempatLahirPasangan"
                                            rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                        >
                                            <Input placeholder="" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={[5, 5]}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label={<BoldLabel>Tanggal Lahir Pasangan</BoldLabel>}
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
                                            label={<BoldLabel>Jenis Kelamin</BoldLabel>}
                                            name="jenisKelaminPasangan"
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
                                            label={<BoldLabel>No. HP Pasangan</BoldLabel>}
                                            name="noHpPasangan"
                                            rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                        >
                                            <Input placeholder="" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </>
                        )}
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={<BoldLabel>Foto Wajah Debitur</BoldLabel>}
                                    name="fotoWajahDebitur"
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
                                    label={<BoldLabel>Doc FAPP <span style={{ color: 'red' }}>*</span></BoldLabel>}
                                    name="docFAPP"
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
                style={{ backgroundColor: 'white', borderRadius: '8px' }}
                className={styles.custumCollapse}
            />
        </Space>
    );
};

export default InformasiNasabah;
