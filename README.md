# Galaxy Financial Services - Web Application

Welcome to the official web application repository for **Galaxy Financial Services**. This modern, responsive web platform is built using **React** and **Vite**, designed to provide users with a seamless experience for exploring financial markets, trading instruments, and educational resources.

## 🚀 Project Overview

Galaxy Financial Services provides a comprehensive trading environment including Forex, Metals, Oil & Commodities, Spot Indices, and Cryptocurrencies. This application serves as the digital client interface, offering information on account types, partnership programs (IB), market news, and essential trading tools like margin and profit calculators.

## ✨ Key Features

*   **Modern Interactive UI**: High-quality design with animations powered by **Framer Motion**.
*   **Responsive Layout**: Fully optimized for Desktop, Tablet, and Mobile devices.
*   **Dynamic Navigation**: Custom responsive navigation bar with dropdowns and mobile menu support.
*   **Live Market Info**: Sections dedicated to various trading instruments (Forex, Crypto, Metals, etc.).
*   **Trading Tools**: Integrated **Margin Calculator** and **Profit Calculator** for traders.
*   **Educational Hub**: An 'Academy' section for trader education.
*   **Partner Program**: Dedicated pages for 'Become IB' and Channel Partners.
*   **Loading Experience**: Custom animated Galaxy-themed preloader.

## 🛠️ Technology Stack

This project is built with the following technologies:

*   **Core**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Routing**: [React Router DOM](https://reactrouter.com/)
*   **Styling**: Vanilla CSS (Modular & Global)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Carousels**: [Swiper](https://swiperjs.com/)

## ⚙️ Installation & Setup

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd galaxyfinservicereact
```

### 2. Install Dependencies

Install the necessary packages using npm:

```bash
npm install
```

### 3. Run Development Server

Start the local development server:

```bash
npm run dev
```

The application will typically launch at `http://localhost:5173`.

## 📦 Building for Production

To create a production-ready build, run:

```bash
npm run build
```

This will generate the static files in the `dist` directory, optimized for deployment.

To preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```
galaxyfinservicereact/
├── public/              # Static assets (images, icons)
├── src/
│   ├── assets/          # Project-specific images and logos
│   ├── components/      # Reusable UI components (Navbar, Footer, Preloader, cards)
│   ├── pages/           # Application views (Home, About, Markets, Contact)
│   ├── App.jsx          # Main application component & Routing setup
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML Entry point
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🤝 Contributing

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/NewFeature`).
3.  Commit your changes (`git commit -m 'Add some NewFeature'`).
4.  Push to the branch (`git push origin feature/NewFeature`).
5.  Open a Pull Request.


