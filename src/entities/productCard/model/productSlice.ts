import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../api/types";
import { getProducts } from "../api/productApi";

export const fetchProducts = createAsyncThunk<IProduct[]>(
  'products/fetchProducts',
  async () => {
    const products = await getProducts();
    console.log(products)
    return products;
  }
);

interface ProductsState {
  products: IProduct[];
  status: "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: "loading",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          state.status = "succeeded";
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export default productsSlice.reducer;
