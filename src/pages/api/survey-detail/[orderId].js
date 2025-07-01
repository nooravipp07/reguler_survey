// pages/api/survey-detail/[orderId].js
import axios from 'axios';

export default async function handler(req, res) {
	if (req.method !== 'GET') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	const { orderId } = req.query;

	if (!orderId) {
		return res.status(400).json({ message: 'Missing order ID' });
	}

	try {
		const url = `https://api-massuat-pub.muf.co.id/mass-api/regsurvey-detail/detail/${orderId}`;
		const response = await axios.get(url);

        console.log("response dari server",response.data)
		return res.status(200).json(response.data);
	} catch (error) {
		console.error("Proxy error:", error?.response?.data || error.message);
		return res.status(500).json({ message: "Failed to fetch survey detail" });
	}
}
