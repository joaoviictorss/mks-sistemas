import { useQuery } from "@tanstack/react-query";
import { ProductsFetchResponse } from "@/types/ProductsFetchResponse";
import axios from "axios";

const API_URL ="https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"

const fetchData = async(): Promise<ProductsFetchResponse> => {
  const response = await axios.get(API_URL)
  return response.data
}

export function useProducts() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['products']
  })

  return {
    ...query,
    data: query.data
  }
}