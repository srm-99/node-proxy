import type { RequestHandler } from "express";

// Services
import { client } from "../services/client";
import { getHeaders, getUrl } from "../services/request";

export const proxy: RequestHandler = async (req, res) => {
    try {
        const { method, params, body } = req;

        const url = getUrl(req);

        const headers = getHeaders(req);

        const { data, status } = await client.request({
            method,
            url,
            params,
            headers,
            data: body,
        });

        return res.status(status).send(data);
    } catch (error) {
        return res
            .status(error.response.status || 500)
            .send(error.response.data || { message: error.message || "Error" });
    }
};
