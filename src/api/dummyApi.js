import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export async function fetchProducts(limit = 10) {
  const response = await api.get("/products", { params: { limit } });
  return response.data.products || [];
}
