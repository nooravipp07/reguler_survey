import React, { useState } from 'react';
import { Upload, Button, Modal, Typography, message, Spin } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Text, Link } = Typography;

const FileUploader = ({ payloadData }) => {
    const [fileList, setFileList] = useState([]);
    const [previewImage, setPreviewImage] = useState('');
    const [previewVisible, setPreviewVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = (error) => reject(error);
        });
    };

    const handlePreview = async (file) => {
        if (file.type?.startsWith('image/')) {
            const preview = file.url || file.preview || URL.createObjectURL(file.originFileObj || file);
            setPreviewImage(preview);
            setPreviewVisible(true);
        }
    };

    const handleUpload = async (file) => {
        setLoading(true);
        try {
            const base64 = await getBase64(file);

            const payload = {
                ...payloadData,
                doc: [
                    {
                        doc_code: payloadData.doc_code,
                        doc_value: base64,
                        filename: file.name,
                        extension: file.name.split('.').pop(),
                    }
                ],
            };

            const res = await fetch("http://upload-image-base64-java-dev.apps.ocp4dev.muf.co.id/uploadImages", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error('Upload failed');

            const response = await res.json();
            message.success('Upload successful');

            const uploadedFile = {
                uid: Date.now(),
                name: file.name,
                status: 'done',
                url: response.url || '',
                type: file.type,
            };

            setFileList([uploadedFile]);
        } catch (err) {
            console.error(err);
            message.error('Upload failed');
        } finally {
            setLoading(false);
        }

        return false;
    };

    const handleRemove = () => setFileList([]);

    return (
        <>
            <Spin spinning={loading}>
                <Upload
                    beforeUpload={handleUpload}
                    accept="image/*"
                    listType="picture"
                    maxCount={1}
                    fileList={fileList}
                    onPreview={handlePreview}
                    onRemove={handleRemove}
                    disabled={loading}
                >
                    <Button icon={<UploadOutlined />} disabled={loading}>
                        {loading ? 'Uploading...' : 'Upload File'}
                    </Button>
                </Upload>

                {fileList.length > 0 && (
                    <div style={{ marginTop: 8 }}>
                        <Text strong>Uploaded:</Text>{' '}
                        <Link onClick={() => handlePreview(fileList[0])}>
                            {fileList[0].name}
                        </Link>
                    </div>
                )}
            </Spin>

            <Modal
                open={previewVisible}
                title="Preview Image"
                footer={null}
                onCancel={() => setPreviewVisible(false)}
            >
                <img alt="preview" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    );
};

export default FileUploader;
