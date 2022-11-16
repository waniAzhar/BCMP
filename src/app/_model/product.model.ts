import { FileHandle } from "./file-handle.model";

export interface Product {
    productName: string,
    productDescription: string,
    productCategory: string,
    productDiscountedPrice: number,
    productActualPrice: number,
    preview: string,
    productImages: FileHandle[]
}