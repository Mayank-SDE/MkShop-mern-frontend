import { UserStateInterface } from './reducer-types';
import { Order, OrderItem, Product, ShippingInfo, User } from './types';

export interface MessageResponse {
  success: boolean;
  message: string;
}
export type CustomError = {
  status: number;
  data: {
    success: boolean;
    message: string;
  };
};

export type CouponRequestBody = { coupon: string; amount: number };

export type AllCouponResponse = {
  success: boolean;
  coupons: { _id: string; amount: number; coupon: string }[];
};

export interface UserMessageResponse extends MessageResponse {
  user: UserStateInterface;
}

export interface AllProductsResponse {
  success: boolean;
  products: Product[];
}
export interface LatestProductResponse extends AllProductsResponse {}

export interface AllCategoriesResponse {
  success: boolean;
  categories: string[];
}

export interface AllBrandsResponse {
  success: boolean;
  brands: string[];
}

export interface SearchProductsResponse {
  success: boolean;
  products: Product[];
  totalPage: number;
}

export interface SearchProductsRequest {
  search: string;
  sort: string;
  category: string;
  price: number;
  brand: string;
  page: number;
}

export interface NewProductRequestBody {
  formData: FormData;
}
export interface UpdateProductRequestBody extends NewProductRequestBody {
  productId: string;
}
export interface DeleteProductRequestBody {
  productId: string;
}
export interface SingleProductResponse {
  success: boolean;
  product: Product;
}
export type NewOrderRequestBody = {
  shippingInfo: ShippingInfo;
  user: string;
  status: 'Placed' | 'Picked' | 'Packed' | 'Shipped' | 'Delivered';
  tax: number;
  shippingCharges: number;
  subTotal: number;
  total: number;
  discount: number;
  orderItems: OrderItem[];
};

export type AllOrdersResponse = {
  success: boolean;
  orders: Order[];
};

export type OrderDetailsResponse = {
  success: boolean;
  order: Order;
};

export interface AllUsersResponse extends MessageResponse {
  users: User[];
}
export type LatestTransactions = {
  orderItems: [];
  discount: number;
  total: number;
  status: string;
  _id: string;
};
export type Stats = {
  categoryCount: Record<string, number>[];
  changePercent: {
    revenue: number;
    product: number;
    user: number;
    order: number;
  };
  counts: {
    revenue: number;
    user: number;
    product: number;
    order: number;
  };
  chart: {
    order: number[];
    revenue: number[];
  };
  userRatio: {
    male: number;
    female: number;
  };
  latestTransaction: LatestTransactions[];
};
export type StatsResponse = {
  success: boolean;
  stats: Stats;
};

export type RevenueDistribution = {
  netMargin: number;
  discount: number;
  productionCost: number;
  burnt: number;
  marketingCost: number;
};
export type OrderFullfillmentRatio = {
  placed: number;
  picked: number;
  packed: number;
  shipped: number;
  delivered: number;
};
export type PieChartResponse = {
  orderFullfillmentRatio: OrderFullfillmentRatio;
  productCategories: Record<string, number>[];
  stockAvailability: {
    inStock: number;
    outOfStock: number;
  };
  revenueDistribution: RevenueDistribution;
  adminCustomer: {
    admin: number;
    customer: number;
  };
  usersAgeGroup: {
    teen: number;
    adult: number;
    old: number;
  };
};
export type PieResponse = {
  success: boolean;
  pieCharts: PieChartResponse;
};

export type BarResponse = {
  success: boolean;
  barCharts: {
    users: number[];
    products: number[];
    orders: number[];
  };
};

export type LineResponse = {
  success: true;
  lineCharts: {
    users: number[];
    products: number[];
    discount: number[];
    revenue: number[];
  };
};
