import { useState } from "react";
import { Collapse, Space, Row, Col, Radio, Form, Checkbox, Input, Select, DatePicker } from "antd";
import { 
    EyeOutlined, 
    UserOutlined, 
    CameraOutlined, 
    IdcardOutlined,
    HomeOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    FileImageOutlined,
    SafetyCertificateOutlined,
    HeartOutlined
} from '@ant-design/icons';
import ExpandIcon from "@/components/ui/Tab/ExpandIcon";
import FileUploader from "@/components/ui/FileUploader";

const BoldLabel = ({ children, icon }) => (
    <span className="font-medium flex items-center gap-1">
        {icon}
        {children}
    </span>
);

const { TextArea } = Input;

const InformasiNasabah = () => {
    const [form] = Form.useForm();

    // Form control
    const [canShowOriginalIdentity, setCanShowOriginalIdentity] = useState(true);
    const [isDebitorIdenMatches, setDebitorIdenMatches] = useState(true);
    const [isPropertySeparated, setPropertySeparated] = useState(true);
    const [isSpouseIdenMatches, setSpouseIdenMatches] = useState(true);

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
            label: (
                <span className="text-white text-base font-medium flex items-center gap-2">
                    <UserOutlined />
                    Informasi Nasabah
                </span>
            ),
            children: (
                <div className="mt-4">
                    <Form layout="vertical" form={form}>
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={
                                        <BoldLabel icon={<EnvironmentOutlined className="text-primary" />}>
                                            Lokasi Proses Survey <span className="text-red-500">*</span>
                                        </BoldLabel>
                                    }
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
                                    label={
                                        <BoldLabel icon={<CameraOutlined className="text-primary" />}>
                                            Foto Selfie PIC Survey di depan Lokasi Survey <span className="text-red-500">*</span>
                                        </BoldLabel>
                                    }
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
                                    label={
                                        <BoldLabel icon={<UserOutlined className="text-primary" />}>
                                            Nama Lengkap Tanpa Singkatan dan Tanpa Gelar <span className="text-red-500">*</span>
                                        </BoldLabel>
                                    }
                                    name="namaLengkap"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <Input prefix={<UserOutlined className="text-gray-400" />} />
                                </Form.Item>
                            </Col>
                        </Row>
                        
                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={
                                        <BoldLabel icon={<IdcardOutlined className="text-primary" />}>
                                            Dapat menunjukan identitas asli <span className="text-red-500">*</span>
                                        </BoldLabel>
                                    }
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
                                        label={
                                            <BoldLabel icon={<SafetyCertificateOutlined className="text-primary" />}>
                                                Alasan Tidak Dapat menunjukkan identitas asli<span className="text-red-500">*</span>
                                            </BoldLabel>
                                        }
                                        name="reason"
                                        rules={[{ required: false, message: "Alasan wajib diisi" }]}
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
                                    label={
                                        <BoldLabel icon={<IdcardOutlined className="text-primary" />}>
                                            Dokumen KTP Debitur <span className="text-red-500">*</span> 
                                            <EyeOutlined className="text-blue-500 ml-1" />
                                        </BoldLabel>
                                    }
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
                                            label={
                                                <BoldLabel icon={<FileImageOutlined className="text-primary" />}>
                                                    Upload KTP Sesuai
                                                </BoldLabel>
                                            }
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
                                            label={
                                                <BoldLabel icon={<IdcardOutlined className="text-primary" />}>
                                                    No. KTP Debitur
                                                </BoldLabel>
                                            }
                                            name="noKTPDebitur"
                                            rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                        >
                                            <Input prefix={<IdcardOutlined className="text-gray-400" />} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                
                                <Row gutter={[5, 5]}>
                                    <Col xs={24} sm={24} md={12}>
                                        <Form.Item
                                            label={
                                                <BoldLabel icon={<UserOutlined className="text-primary" />}>
                                                    Nama Sesuai KTP
                                                </BoldLabel>
                                            }
                                            name="namaSesuaiKTP"
                                            rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                        >
                                            <Input prefix={<UserOutlined className="text-gray-400" />} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </>
                        )}

                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={
                                        <BoldLabel icon={<HomeOutlined className="text-primary" />}>
                                            Kartu Keluarga <span className="text-red-500">*</span> 
                                            <EyeOutlined className="text-blue-500 ml-1" />
                                        </BoldLabel>
                                    }
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
                                    label={
                                        <BoldLabel icon={<HeartOutlined className="text-primary" />}>
                                            Nama Gadis Ibu Kandung
                                        </BoldLabel>
                                    }
                                    name="namaGadisIbuKandung"
                                    rules={[{ required: false, message: 'Nama wajib diisi' }]}
                                >
                                    <Input prefix={<UserOutlined className="text-gray-400" />} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={[5, 5]}>
                            <Col xs={24} sm={24} md={12}>
                                <Form.Item
                                    label={
                                        <BoldLabel icon={<CameraOutlined className="text-primary" />}>
                                            Foto Wajah Debitur
                                        </BoldLabel>
                                    }
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
                                    label={
                                        <BoldLabel icon={<FileImageOutlined className="text-primary" />}>
                                            Doc FAPP <span className="text-red-500">*</span>
                                        </BoldLabel>
                                    }
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
        <Space direction="vertical" size="middle" className="flex flex-1 mt-4">
            <Collapse
                bordered={false}
                expandIcon={ExpandIcon}
                items={items}
                style={{ backgroundColor: 'white', borderRadius: '8px' }}
                className="custom-collapse"
            />
        </Space>
    );
};

export default InformasiNasabah;