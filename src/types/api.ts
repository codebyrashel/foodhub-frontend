export type UserRole = "customer" | "provider" | "admin";

export interface ApiUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Category {
  id: string;
  name: string;
  imageUrl?: string | null;
}

export interface Provider {
  id: string;
  restaurantName: string;
  cuisineType: string;
  address: string;
  coverImageUrl?: string | null;
}

export interface Meal {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  imageUrl?: string | null;
  isAvailable: boolean;
  providerId: string;
  categoryId: string;
}

export type OrderStatus =
  | "placed"
  | "preparing"
  | "ready"
  | "delivered"
  | "cancelled";

export interface OrderItem {
  id: string;
  mealId: string;
  quantity: number;
  priceAtTime: number;
  meal?: Meal;
}

export interface Order {
  id: string;
  customerId: string;
  providerId: string;
  deliveryAddress: string;
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  items?: OrderItem[];
}