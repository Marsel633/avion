import axios from "axios";
import { IProduct } from "./types";

export const getProducts = async (): Promise<IProduct[]> => {
    try {
      const { data } = await axios.get<IProduct[]>(`${import.meta.env.VITE_BASE_URL}/products`);
      return data;
    } catch (error) {
      console.error("Error fetching products", error);
      throw error;
    }
  };