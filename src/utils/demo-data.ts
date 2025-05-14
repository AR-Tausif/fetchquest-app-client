export const demoUserProfile = {
  success: true,
  message: "Demo profile fetched successfully",
  data: {
    _id: "demo-user-123",
    email: "demo@fetchquest.com",
    contact: "+1-555-0123",
    createdAt: new Date().toISOString(),
    image: "https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
    isDeleted: false,
    isverified: true,
    name: "Demo User",
    role: "user",
    status: 1,
    updatedAt: new Date().toISOString()
  }
};

export const demoGames = {
  success: true,
  message: "Demo games fetched successfully",
  data: {
    games: [
      {
        id: "demo-game-1",
        gameName: "Dragon Quest Demo",
        posterImg: "/images/games/game-1.jpg",
        description: "An epic adventure awaits in this demo version",
        site: "https://demo-game-1.fetchquest.com",
        date: new Date().toISOString()
      },
      {
        id: "demo-game-2",
        gameName: "Space Explorer Demo",
        posterImg: "/images/games/game-2.jpg",
        description: "Explore the universe in this demo version",
        site: "https://demo-game-2.fetchquest.com",
        date: new Date().toISOString()
      },
    ]
  }
};

export const demoProducts = {
  success: true,
  message: "Demo products fetched successfully",
  data: {
    products: [
      {
        _id: "demo-product-1",
        name: "Gaming Mouse Pro",
        price: 59.99,
        description: "High-performance gaming mouse",
        imageUrl: "/images/products/mouse.jpg",
        category: "Gaming Accessories",
        stock: 50,
        details: "Professional gaming mouse with RGB lighting"
      },
      {
        _id: "demo-product-2",
        name: "Mechanical Keyboard",
        price: 129.99,
        description: "Premium mechanical gaming keyboard",
        imageUrl: "/images/products/keyboard.jpg",
        category: "Gaming Accessories",
        stock: 30,
        details: "RGB backlit mechanical keyboard with custom switches"
      }
    ]
  }
};

export const demoOrders = {
  success: true,
  message: "Demo orders fetched successfully",
  data: {
    orders: [
      {
        _id: "demo-order-1",
        products: [{ productId: "demo-product-1", quantity: 1 }],
        totalAmount: 59.99,
        status: "processing",
        createdAt: new Date().toISOString()
      }
    ]
  }
};