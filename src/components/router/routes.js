export const routes = [
  {
    id: "home",
    path: "/",
    Element: "ItemListContainer",
  },
  {
    id: "carrito",
    path: "/cart",
    Element: "CartContainer",
  },
  {
    id: "detail",
    path: "/item/:id",
    Element: "ItemDetailContainer",
  },
  {
    id: "category",
    path: "/category/:category",
    Element: "ItemListContainer",
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: "ProtectedCheckout",
  },

  {
    id: "finalPage",
    path: "/checkout/:orderId",
    Element: "FinalPage",
  },
];
