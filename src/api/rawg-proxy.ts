import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

// Load API Key from environment variables
const API_KEY = process.env.RAWG_API_KEY;
const RAWG_BASE_URL = "https://api.rawg.io/api";

export default async (req: VercelRequest, res: VercelResponse) => {
  const { endpoint, ...query } = req.query;

  if (!API_KEY) {
    return res.status(500).json({ error: "API Key is missing" });
  }

  try {
    // Build the target URL with query parameters
    const url = `${RAWG_BASE_URL}/${endpoint}?key=${API_KEY}&${new URLSearchParams(
      query as Record<string, string>
    ).toString()}`;
    const response = await axios.get(url);

    // Allow CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("RAWG API Proxy Error:", error.message);
      res
        .status(error.response?.status || 500)
        .json({ error: error.response?.data || "Failed to fetch data" });
    } else if (error instanceof Error) {
      console.error("General Error:", error.message);
      res.status(500).json({ error: "An unexpected error occurred" });
    } else {
      console.error("Unknown Error:", error);
      res.status(500).json({ error: "Unknown error occurred" });
    }
  }
};
