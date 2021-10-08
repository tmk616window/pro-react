import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie'


const env = 0

export const client: AxiosInstance = axios.create({
    baseURL: 'http://localhost/api/v1/',
    headers: {'Content-Type': 'application/json' },
    responseType: 'json',
  });

  export const authClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost/api/v1/',
    headers: {
        "access-token": Cookies.get("_access_token"),
        "client": Cookies.get("_client"),
        "uid": Cookies.get("_uid")
    },
    responseType: 'json',
  });
