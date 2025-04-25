# FetchQuest - Gaming Marketplace & Community Platform

FetchQuest is a modern gaming marketplace and community platform built with Next.js, offering a seamless experience for gamers to discover, purchase, and engage with gaming products and content.

![FetchQuest Hero Section](public/images/containers-bg/hero-bg.png)

## Features

- **Game Marketplace**: Browse and purchase gaming products
- **User Authentication**: Secure login/signup system
- **Shopping Cart**: Add products and manage your cart
- **Order Management**: Track your order history
- **Profile Management**: Edit and manage your user profile
- **Responsive Design**: Fully responsive across all devices
- **Community Section**: Engage with other gamers
- **News Section**: Stay updated with latest gaming news

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Styling**: TailwindCSS, CSS Modules
- **State Management**: Redux Toolkit, RTK Query
- **Authentication**: JWT with HTTP-only cookies
- **UI Components**: Shadcn UI
- **Form Handling**: React Hook Form, Zod
- **Animations**: Embla Carousel
- **Toast Notifications**: Sonner

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/fetchquest-app-client.git
cd fetchquest-app-client

2. Install dependencies:
```bash
npm install
 ```

3. Create a .env.local file in the root directory and add necessary environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
 ```

4. Start the development server:
```bash
npm run dev
 ```

The application will be available at http://localhost:3000

## Project Structure
```plaintext
fetchquest-app-client/
├── src/
│   ├── app/             # Next.js app directory
│   ├── components/      # Reusable components
│   ├── hooks/          # Custom React hooks
│   ├── redux/          # Redux store and slices
│   ├── types/          # TypeScript types/interfaces
│   └── utils/          # Utility functions
├── public/             # Static assets
└── ...config files
 ```
```

## Features in Detail
### Authentication
- Login/Signup system
- OTP verification
- Protected routes
- Token-based authentication
### Shopping Experience
- Product browsing
- Cart management
- Checkout process
- Order history
### User Profile
- Profile management
- Order tracking
- Account settings
## Contributing
1. Fork the repository
2. Create your feature branch ( git checkout -b feature/AmazingFeature )
3. Commit your changes ( git commit -m 'Add some AmazingFeature' )
4. Push to the branch ( git push origin feature/AmazingFeature )
5. Open a Pull Request
## License
This project is licensed under the MIT License - see the LICENSE file for details

```plaintext

This README provides a comprehensive overview of the FetchQuest project, including its features, tech stack, setup instructions, and project structure. Let me know if you'd like me to add or modify any sections!
 ```
```