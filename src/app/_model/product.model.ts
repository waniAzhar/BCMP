import { FileHandle } from "./file-handle.model";

export interface Product {

    productId: number,
    productName: string,
    productDescription: string,
    productCategory: string,
    productDiscountedPrice: number,
    productActualPrice: number,
    preview: string,
    longDescription: String,
    productImages: FileHandle[]
}