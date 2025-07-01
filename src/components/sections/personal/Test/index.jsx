import { useState } from "react";
import { Collapse, Space, Row, Col, message, Checkbox, Select, Radio, Form } from 'antd';

const CustomerInformation = () => {
    return (
		<Space direction="vertical" size="middle" className={classes.space}>
			<Collapse key='Informasi Nasabah' bordered={false} expandIcon={ExpandIcon}>
				<Panel header='Informasi Nasabah'>
					<div className={classes.padd}>
						<Row gutter={12}>
							<Col md={12} xs={24}>
								<Row gutter={12}>
									<Col md={24} xs={24}>
										<CustomCheckBox
											label="Lokasi Proses Survey"
											name="surveyLocation"
											options={[
												{ label: 'Rumah', value: 0 },
												{ label: 'Tempat Usaha', value: 1 },
											]}
											// onChange={handleCheckboxChange}
											// value={formData.interests}
										/>
									</Col>
								</Row>
								<Row gutter={12}>
									<Col md={24} xs={24}>
										<TextField 
											label="Nama Lengkap Tanpa Singkatan dan Tanpa Gelar"
											name="fullname"
											type="text"
										/>
									</Col>
								</Row>
								<Row gutter={12}>
									<Col md={24} xs={24}>
										<Form.Item
											label="Dapat menunjukkan identitas asli"
											name="alasan"
											rules={[
												{
													required: true,
													message: "Wajib pilih salah satu opsi",
												},
											]}
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
							</Col>
						</Row>
					</div>
				</Panel>
			</Collapse>
		</Space>
	);
}

export default CustomerInformation;