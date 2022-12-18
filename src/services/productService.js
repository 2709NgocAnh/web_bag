import { createAsyncThunk } from "@reduxjs/toolkit";
import * as httpRequest from "~/httpRequest/httpRequest";

//ADMIN
export const getListProduct = async (pageIndex) => {
  try {
    const res = await httpRequest.get(
      `product?pageSize=12&pageIndex=${pageIndex}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

//USER
export const getProductService = async () => {
  try {
    const res = await httpRequest.get(`product`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const searchProduct = async (search) => {
  try {
    const res = await httpRequest.get(`product?search=${search}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const searchProductByCategoryId = async (id) => {
  try {
    const res = await httpRequest.get(`/searchProductByCategoryId/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getListNewProduct = async (pageIndex) => {
  try {
    const res = await httpRequest.get(
      `product/newProducts?pageSize=12&pageIndex=${pageIndex}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getListSaleProduct = async (pageIndex) => {
  try {
    const res = await httpRequest.get(
      `product/saleProducts?pageSize=12&pageIndex=${pageIndex}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getListProductById = async (id) => {
  try {
    const res = await httpRequest.get(`/product/listProductByCategoryId/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = async (id) => {
  try {
    const res = await httpRequest.post(`product/delete`, { id });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const newProduct = async (
  name,
  category_id,
  content,
  price,
  price_sale,
  num,
  active,
  imgList
) => {
  try {
    const res = await httpRequest.post(`product/add`, {
      name,
      category_id,
      content,
      price,
      price_sale,
      num,
      active,
      imgList,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const editProduct = async (
  id,
  changedImg,
  name,
  category_id,
  content,
  price,
  price_sale,
  num,
  active,
  imgList
) => {
  try {
    const res = await httpRequest.post(`product/update`, {
      id,
      changedImg,
      name,
      category_id,
      content,
      price,
      price_sale,
      num,
      active,
      imgList,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getAProduct = async (id) => {
  try {
    const res = await httpRequest.get(`product/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
