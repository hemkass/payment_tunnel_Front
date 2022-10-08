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
  pictures?: Product_Picture[];
}

export interface USERFORM_TS {
  id: string;
  created_at: string;
  update_at?: string;
  country: string;
  fullname: string;
  adress: string;
  city: string;
  postCode: string;
  email: string;
  phone: string;
}

export interface Product_Picture {
  src: string;
}

export interface PRODUCT_ON_CART_TS {
  assignedAt: string;
  cartId: string;
  id: number;
  product: PRODUCT_TS;
  productId: string;
  quantityInCart: number;
}
