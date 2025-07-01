import React from 'react';
import { Card } from 'antd';
import './styles.module.css'; // optional if you want to style the card

const FormCard = ({ title, extra, children, className = '', style = {}, ...rest }) => {
    return (
        <Card
            title={title}
            extra={extra}
            className={`form-card ${className}`}
            style={{ margin: 15, ...style }}
            {...rest}
            >
            {children}
        </Card>
    );
};

export default FormCard;
