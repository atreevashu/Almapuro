"use client";

import { useCart } from "@/context/CartContext";
import CartTable from "@/components/cart/CartTable";
import OrderSummary from "@/components/cart/OrderSummary";

export default function CartPageClient() {
  const { items, updateQuantity, removeItem, clearCart, itemCount, subtotal } = useCart();

  return (
    <section className="bg-[#fafaf8]">
      <div className="container-page py-8 lg:py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
          <CartTable
            items={items}
            onQuantityChange={updateQuantity}
            onRemove={removeItem}
            onClear={clearCart}
          />
          <OrderSummary itemCount={itemCount} subtotal={subtotal} />
        </div>
      </div>
    </section>
  );
}
