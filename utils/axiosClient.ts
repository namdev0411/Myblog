import axios, { AxiosRequestConfig } from "axios";
import { envProvider } from "./envProvider";
import { TypedResponse, UnexpectedError } from "./type";

const { API_ORIGIN } = envProvider;

export type ApiRequest = {
  method: "GET" | "POST";
  url: string;
  headers?: AxiosRequestConfig["headers"];
};

const axiosIntance = axios.create({
  baseURL: API_ORIGIN,
  timeout: 1000,
});

export function axiosClient<T>() {
  const request = async (apiRequest: ApiRequest) => {
    const { method, url, headers } = apiRequest;
    try {
      const res = await axiosIntance<TypedResponse<T>>({
        method,
        url,
        headers,
      });

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          status: error.status ?? 400,
          message: error.message,
        } as UnexpectedError;
      }
      return {
        status: 400,
        message: "UnexpectedError",
      } as UnexpectedError;
    }
  };

  return {
    request,
  };
}
