import React, { useState } from 'react';
import { Upload, Button, Modal, Typography, message, Spin } from 'antd';
import { 
    UploadOutlined, 
    EyeOutlined, 
    DeleteOutlined,
    FileImageOutlined,
    LoadingOutlined
} from '@ant-design/icons';

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

    const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

    return (
        <>
            <Spin spinning={loading} indicator={antIcon}>
                <Upload
                    beforeUpload={handleUpload}
                    accept="image/*"
                    listType="picture"
                    maxCount={1}
                    fileList={fileList}
                    onPreview={handlePreview}
                    onRemove={handleRemove}
                    disabled={loading}
                    className="w-full"
                >
                    <Button 
                        icon={loading ? <LoadingOutlined /> : <UploadOutlined />} 
                        disabled={loading}
                        className="flex items-center gap-2"
                    >
                        {loading ? 'Uploading...' : 'Upload File'}
                    </Button>
                </Upload>

                {fileList.length > 0 && (
                    <div className="mt-2 p-2 bg-gray-50 rounded border">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <FileImageOutlined className="text-blue-500" />
                                <Text strong>Uploaded:</Text>
                                <Link 
                                    onClick={() => handlePreview(fileList[0])}
                                    className="flex items-center gap-1"
                                >
                                    <EyeOutlined />
                                    {fileList[0].name}
                                </Link>
                            </div>
                            <Button 
                                type="text" 
                                size="small" 
                                icon={<DeleteOutlined />} 
                                onClick={handleRemove}
                                className="text-red-500 hover:text-red-700"
                            />
                        </div>
                    </div>
                )}
            </Spin>

            <Modal
                open={previewVisible}
                title={
                    <div className="flex items-center gap-2">
                        <EyeOutlined />
                        Preview Image
                    </div>
                }
                footer={null}
                onCancel={() => setPreviewVisible(false)}
                width={800}
            >
                <img alt="preview" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    );
};

export default FileUploader;