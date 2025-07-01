import React from 'react';
import { Modal, Table } from 'antd';

const Modal = ({ visible, onClose, onSelect, dataSource, columns, title = 'Select Data' }) => {
    return(
        <Modal
            open={visible}
            title={title}
            onCancel={onClose}
            footer={null}
            width={600}
        >
        <Table
            dataSource={dataSource}
            columns={columns}
            rowKey={(record) => record.id || record.key}
            onRow={(record) => ({
                onClick: () => onSelect(record),
            })}
            pagination={{ pageSize: 5 }}
            bordered
        />
        </Modal>
    );
}

export default Modal;