import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';

dotenv.config();

const aes128key = process.env.AES128KEY; // Must be 16 chars
const aes128iv = process.env.AES128IV; // Must be 16 chars

// Convert Base64 to Hex
export const base64ToHexFunc = (data) => {
    const encodedData = atob(data);
    return [...encodedData]
        .map(c => c.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('');
};

// AES-128 Encrypt (Hex output)
export const encryptAes128 = (plainText) => {
    const keyWA = CryptoJS.enc.Utf8.parse(aes128key);
    const ivWA = CryptoJS.enc.Utf8.parse(aes128iv);

    const encrypted = CryptoJS.AES.encrypt(plainText, keyWA, {
        iv: ivWA,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    const base64 = encrypted.toString(); // Default is base64
    return base64ToHexFunc(base64);      // Convert to hex
};

// AES-128 Decrypt (input: hex string)
export const decryptUrl = (encryptedHex) => {
    const keyWA = CryptoJS.enc.Utf8.parse(aes128key);
    const ivWA = CryptoJS.enc.Utf8.parse(aes128iv);

    const ciphertextWA = CryptoJS.enc.Hex.parse(encryptedHex);
    const ciphertextCP = { ciphertext: ciphertextWA };

    const decrypted = CryptoJS.AES.decrypt(ciphertextCP, keyWA, {
        iv: ivWA,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
};

