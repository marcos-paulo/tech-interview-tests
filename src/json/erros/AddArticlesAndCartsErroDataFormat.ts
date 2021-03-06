export default {
  message: "Mandatory data submission as specified format:",
  format: {
    articles: [
      {
        id: "int",
        name: "string",
        price: "double",
      },
    ],
    carts: [
      {
        id: "int",
        items: [
          {
            article_id: "int",
            quantity: "int",
          },
        ],
      },
    ],
  },
};
