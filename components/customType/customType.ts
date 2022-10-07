export interface Product {
  map(arg0: (elem: any) => JSX.Element): import("react").ReactNode;
  created_at: string;
  description: string;
  id: string;
  price: number;
  ref: string;
  title: string;
  update_at: string;
}

export interface DataProduct {
  count: number;
  products: Product;
}
