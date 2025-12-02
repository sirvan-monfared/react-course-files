import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { products } from "./utils/products";
import  CartContextProvider from "./stores/CartContext"


// Sample product data - Persian
const initialProducts = products;

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      <CartContextProvider>
        <Header/>
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">محصولات ما</h1>
              <ProductList
                products={initialProducts}
              />
            </div>
            <div className="lg:col-span-1 mt-15">
              <Cart/>
            </div>
          </div>
        </div>
      </CartContextProvider>
    </div>
  );
}

export default App;
