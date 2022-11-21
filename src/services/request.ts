import type { Request } from "express";

import { PROXY_PATH } from "../";

export const getUrl = ({ url }: Request) =>
    `https:/${url.replace(PROXY_PATH, "")}`;

export const getHeaders = ({ headers }: Request) => headers;
