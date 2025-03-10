import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

const API_KEY = process.env.VITE_RAWG_API_KEY;
const RAWG_BASE_URL = "https://api.rawg.io/api";

const handler = async (req: VercelRequest, res: VercelResponse) => {
  console.log("API KEY:", API_KEY ? "Exists" : "Missing");
  console.log("Request URL:", req.url);

  const { endpoint, ...query } = req.query;

  // Enable CORS for all origins
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if (req.method === "OPTIONS") {
    // Preflight request
    return res.status(200).end();
  }

  if (!API_KEY) {
    console.error("API Key is missing in environment variables!");
    return res.status(500).json({ error: "API Key is missing" });
  }

  if (!endpoint) {
    console.error("Endpoint is missing in query parameters!");
    return res.status(400).json({ error: "Endpoint is missing" });
  }

  try {
    const url = `${RAWG_BASE_URL}/${endpoint}?key=${API_KEY}&${new URLSearchParams(
      query as Record<string, string>
    ).toString()}`;

    console.log("Forwarding request to:", url);

    const response = await axios.get(url);

    console.log("API Response Status:", response.status);

    res.status(200).json(response.data);
  } catch (error: any) {
    console.error("RAWG API Proxy Error:", error.message);
    if (error.response) {
      console.error("RAWG API Response Error:", error.response.data);
      res.status(error.response.status).json({
        error: error.response.data,
        message: error.message,
      });
    } else {
      res
        .status(500)
        .json({
          error: "Failed to fetch data from RAWG API",
          message: error.message,
        });
    }
  }
};

export default handler;
