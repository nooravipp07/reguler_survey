import { useState } from "react";
import { Collapse, Space, Row, Col, Radio, Form, Checkbox, Input, Select, DatePicker } from "antd";
import ExpandIcon from "@/components/ui/Tab/ExpandIcon";
import FileUploader from "@/components/ui/FileUploader";

import styles from './styles.module.css';

const BoldLabel = ({ children }) => <span style={{ fontWeight: 500 }}>{children}</span>;

const { TextArea } = Input;

const InformasiTempatTinggal = () => {
	const [form] = Form.useForm();

	const items = [
		{
			key: '2',
			label: <span className={styles.collapseHeader}>Informasi Tempat Tinggal</span>,
			children: (
				<div className={styles.formWrapper}>
					<Form layout="vertical" form={form}>
						<Row gutter={[5, 5]}>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									label={<BoldLabel>Alamat Domisili</BoldLabel>}
									name="alamatDomisili"
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
									name="rtDomisili"
									rules={[{ required: false, message: 'RT wajib diisi' }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={12} sm={12} md={6}>
								<Form.Item
									label={<BoldLabel>RW</BoldLabel>}
									name="rwDomisili"
									rules={[{ required: false, message: 'RW wajib diisi' }]}
								>
									<Input />
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={[5, 5]}>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									label={<BoldLabel>Kode POS Domisili</BoldLabel>}
									name="kodePosDomisili"
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
									label={<BoldLabel>Kelurahan Domisili</BoldLabel>}
									name="kelurahanDomisili"
									rules={[{ required: false, message: 'Nama wajib diisi' }]}
								>
									<Input placeholder="" />
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={[5, 5]}>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									label={<BoldLabel>Kecamatan Domisili</BoldLabel>}
									name="kecamatanDomisili"
									rules={[{ required: false, message: 'Nama wajib diisi' }]}
								>
									<Input placeholder="" />
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={[5, 5]}>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									label={<BoldLabel>Kab / Kota Domisili </BoldLabel>}
									name="kabKotaDomisili"
									rules={[{ required: false, message: 'Nama wajib diisi' }]}
								>
									<Input placeholder="" />
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={[5, 5]}>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									label={<BoldLabel>Provinsi Domisili</BoldLabel>}
									name="provinsiDomisili"
									rules={[{ required: false, message: 'Nama wajib diisi' }]}
								>
									<Input />
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={[5, 5]}>
							<Col xs={24} sm={24} md={12}>
								<Form.Item
									label={<BoldLabel>Alamat Domisili Sesuai Inputan Awal</BoldLabel>}
									name="alamatDomisiliSesuai"
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
									label={<BoldLabel>Tempat Penyimpanan Kendaraan</BoldLabel>}
									name="tempatPenyimpananKendaraan"
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
									label={<BoldLabel>Status Kepemilikan Rumah</BoldLabel>}
									name="statusKepemilikanRumah"
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
									label={<BoldLabel>Jenis Dokumen Kepemilikan Rumah</BoldLabel>}
									name="jenisDocKepemilikanRumah"
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
                                    label={<BoldLabel>Dokumen Kepemilikan Tempat Tinggal (BKR)</BoldLabel>}
                                    name="docKepemilikanTempatTinggal"
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
                                    label={<BoldLabel>Foto Rumah</BoldLabel>}
                                    name="fotoRumah"
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
                                    label={<BoldLabel>Foto Jalan Depan Rumah</BoldLabel>}
                                    name="fotoJalanDepanRumah"
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
                                    label={<BoldLabel>Foto Tempat Usaha</BoldLabel>}
                                    name="fotoTempatUsaha"
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
                                    label={<BoldLabel>Foto Jalan Depan Tempat Usaha</BoldLabel>}
                                    name="fotoJalanDepanTempatUsaha"
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
									label={<BoldLabel>Jarak Domisili Nasabah ke MUF</BoldLabel>}
									name="jarakDomisiliKeMUF"
									rules={[{ required: false, message: 'Nama wajib diisi' }]}
								>
									<Input />
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

export default InformasiTempatTinggal;
