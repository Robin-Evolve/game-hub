import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

// Load API Key from environment variables
const API_KEY = process.env.VITE_RAWG_API_KEY;
const RAWG_BASE_URL = "https://api.rawg.io/api";

export default async (req: VercelRequest, res: VercelResponse) => {
  const { endpoint, ...query } = req.query;

  if (!API_KEY) {
    console.error("API Key is missing");
    return res.status(500).json({ error: "API Key is missing" });
  }

  if (!endpoint) {
    console.error("Endpoint is missing");
    return res.status(400).json({ error: "Endpoint is missing" });
  }

  try {
    // Build the target URL with query parameters
    const url = `${RAWG_BASE_URL}/${endpoint}?key=${API_KEY}&${new URLSearchParams(
      query as Record<string, string>
    ).toString()}`;

    console.log("Forwarding request to:", url); // Log the URL for debugging

    const response = await axios.get(url);

    // Allow CORS for all origins
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("RAWG API Proxy Error:", error);
    res.status(500).json({ error: "Failed to fetch data from RAWG API" });
  }
};
