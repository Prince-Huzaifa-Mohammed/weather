import axios from "axios";
import { Country } from "../interfaces/interfaces";

export const getData = async (url: string) => {
  try {
    const response = await axios.get<Country[]>(url);

    return response.data;
  } catch (e) {
    return e;
  }
};
