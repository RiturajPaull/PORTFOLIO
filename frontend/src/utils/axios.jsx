import axios from "axios";
import { baseURL } from "../API/SummaryAPI";

export const API = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
