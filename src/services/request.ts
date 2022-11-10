import type { Request } from "express";

import { PATH } from "../";

export const getUrl = ({ url }: Request) => `https:/${url.replace(PATH, "")}`;

export const getHeaders = ({ headers }: Request) => headers;
