import React from 'react';
import { Card } from 'antd';

const FormCard = ({ title, extra, children, className = '', style = {}, ...rest }) => {
    return (
        <Card
            title={title}
            extra={extra}
            className={`mx-4 rounded-xl shadow-sm border border-gray-200 ${className}`}
            style={{ ...style }}
            {...rest}
        >
            {children}
        </Card>
    );
};

export default FormCard;