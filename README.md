# Shopping Cart with Prop Drilling Demo

A React shopping cart application designed to demonstrate the **prop drilling problem** and why Context API is necessary.

## 🎯 Learning Objective

This project intentionally uses prop drilling to show students:
- How props are passed through multiple component levels unnecessarily
- The maintenance challenges this creates
- Why React Context API solves this problem

## 📁 Component Structure & Prop Drilling

The application has deep component nesting that requires props to be passed through multiple levels:

### Example 1: Cart Count Display
```
App (cartCount)
  └─ Header (cartCount) ← Passed through
      └─ Navigation (cartCount) ← Passed through
          └─ CartIcon (cartCount) ← Actually used here!
```

### Example 2: Cart Management
```
App (cart, addToCart, removeFromCart)
  └─ ProductList (cart, addToCart, removeFromCart) ← Passed through
      └─ ProductCard (cart, addToCart, removeFromCart) ← Passed through
          └─ ProductInfo (addToCart, removeFromCart) ← Passed through
              └─ AddToCartButton (addToCart, removeFromCart) ← Actually used here!
```

### Example 3: Cart Display
```
App (cart, removeFromCart, updateQuantity)
  └─ Cart (cart, removeFromCart, updateQuantity) ← Passed through
      └─ CartItem (removeFromCart, updateQuantity) ← Passed through
          └─ CartItemDetails (removeFromCart, updateQuantity) ← Passed through
              └─ RemoveButton (removeFromCart) ← Actually used here!
```

## 🚨 Problems with Prop Drilling

1. **Unnecessary Props**: Components like `Navigation` and `ProductCard` receive props they don't use
2. **Hard to Maintain**: Adding new props requires updating multiple component signatures
3. **Tight Coupling**: Components become tightly coupled to the data flow
4. **Code Duplication**: Similar prop-passing patterns repeated throughout

## 💡 Solution: React Context API

The next step is to refactor this application using React Context API to:
- Eliminate prop drilling
- Create a cleaner component structure
- Make the code more maintainable
- Improve component reusability

## 🛠️ Technologies Used

- React 19
- Vite
- Tailwind CSS 4

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📦 Features

- ✅ Beautiful, modern UI with Tailwind CSS
- ✅ Product catalog with 6 sample products
- ✅ Add/remove items from cart
- ✅ Update item quantities
- ✅ Real-time cart total calculation
- ✅ Cart count badge in header
- ✅ Responsive design

## 🎨 UI Highlights

- Gradient background
- Smooth hover transitions
- Sticky header and cart sidebar
- Empty cart state
- Product image placeholders for broken images
- Professional color scheme (Indigo/Slate)

## 📝 Next Steps

1. Identify all prop drilling instances
2. Create a CartContext using React Context API
3. Replace prop drilling with useContext hook
4. Compare before/after code complexity
