import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_BASE_URL = process.env.PUBLIC_GATEWAY;
const API_TIMEOUT = parseInt(process.env.API_TIMEOUT || '10000');

// Axios instance
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: API_TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getMethod = async (url) => {
    try {
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        console.error('GET Error:', error);
        throw error;
    }
};

export const postMethod = async (url, data) => {
    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        console.error('POST Error:', error);
        throw error;
    }
};

export const postSubmit = async (link, data) => {
    try {
        const url = `/mass-api/regsurvey-publisher/${link}`;
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        console.error('postSubmit Error:', error);
        throw error;
    }
};

export const postUploadDeleteImage = async (link, data) => {
    try {
        const url = `/mass-api/upload-image/${link}`;
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        console.error('postUploadDeleteImage Error:', error);
        throw error;
    }
};

export const authentication = async (token) => {
    try {
        const url = `/mass-api/authentication/uaa-iam/user/details`;
        const response = await axiosInstance.post(url, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        });
        return response.data;
    } catch (error) {
        console.error('authentication Error:', error);
        throw error;
    }
};

export const getImage = async (link, data) => {
    try {
        const url = `/mass-api/get-image/${link}`;
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        console.error('getImage Error:', error);
        throw error;
    }
};
