import axios from 'axios';

export default async function handler(req, res) {
    const token = req.headers.authorization;
  
    console.log("Payload Token : " + token);
  
    const response = await axios.post(
            'https://api-massuat-pub.muf.co.id/mass-api/authentication/uaa-iam/user/details',
            {},
            {
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
            }
    );
}
