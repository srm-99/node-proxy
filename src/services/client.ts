import axios from "axios";
import https from "https";

export const client = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false,
    }),
});
