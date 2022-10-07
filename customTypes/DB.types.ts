export enum StatusCart {
  PENDING,
  ABANDONED,
  PAID,
}

export interface CART_TS {
  id: string;
  created_at: string;
  update_at?: string;
  status: StatusCart;
  delivery_fees?: number;
  total: number;
  owner?: object;
  products?: PRODUCT_ON_CART_TS[];
  payment: object;
  error_Messages: object;
}

export interface PRODUCT_TS {
  created_at: string;
  description: string;
  id: string;
  price: number;
  ref: string;
  title: string;
  update_at: string;
}

export interface PRODUCT_ON_CART_TS {
  assignedAt: string;
  cartId: string;
  id: number;
  product: object;
  productId: string;
  quantityInCart: number;
}
