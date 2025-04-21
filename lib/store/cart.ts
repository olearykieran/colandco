"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, variant: string) => void;
  updateItemQuantity: (id: string, variant: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item: CartItem) => set((state) => {
        const existingItemIndex = state.items.findIndex(
          (i) => i.id === item.id && i.variant === item.variant
        );
        
        if (existingItemIndex !== -1) {
          // Update existing item quantity
          const updatedItems = [...state.items];
          updatedItems[existingItemIndex].quantity += item.quantity;
          return { items: updatedItems };
        }
        
        // Add new item
        return { items: [...state.items, item] };
      }),
      
      removeItem: (id: string, variant: string) => set((state) => ({
        items: state.items.filter(
          (item) => !(item.id === id && item.variant === variant)
        ),
      })),
      
      updateItemQuantity: (id: string, variant: string, quantity: number) => set((state) => ({
        items: state.items.map((item) =>
          item.id === id && item.variant === variant
            ? { ...item, quantity }
            : item
        ),
      })),
      
      clearCart: () => set({ items: [] }),
      
      get totalItems() {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      get totalAmount() {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity, 
          0
        );
      },
    }),
    {
      name: 'colco-cart',
    }
  )
);