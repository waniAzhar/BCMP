import { OrderQuantity } from "./order-quantity.model";

export interface OrderDetails{
    emailId: string;
	orderAmount: number;
	orderProductQuantityList: OrderQuantity[];
	
}