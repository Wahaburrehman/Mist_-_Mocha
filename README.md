# ☕ Mist & Mocha

### *Lost in the haze, found in the roast.*

A modern, responsive café website built for a premium coffee-shop experience in Pakistan. Mist & Mocha combines elegant coffee-inspired aesthetics with an interactive menu, shopping cart and Express.js backend.

## ✨ Features

- Premium coffee-inspired website design.
- Responsive layout for desktop and mobile.
- Animated hero section and smooth interactions.
- Pakistani café menu with prices in PKR.
- Product search and category filtering.
- Interactive shopping cart.
- Quantity controls and automatic price calculation.
- Customer checkout form.
- Express.js order submission API.
- Contact form with backend integration.
- Locally stored coffee product images.

## 🎨 Brand Identity

| Element | Details |
|---|---|
| Brand Name | Mist & Mocha |
| Tagline | Lost in the haze, found in the roast. |
| Primary Theme | Espresso Brown |
| Accent Colors | Caramel, Warm Gold |
| Secondary Colors | Cream and Beige |
| Market | Pakistan |
| Currency | Pakistani Rupees (PKR) |

## 🛠️ Technologies Used

**Frontend**
- React.js 18
- JavaScript (ES6+)
- Tailwind CSS
- Custom CSS
- Vite
- Lucide React Icons

**Backend**
- Node.js
- Express.js
- CORS
- dotenv

**Version Control**
- Git
- GitHub

## 📁 Project Structure

```text
mist-and-mocha/
│
├── public/
│   └── assets/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
│
├── server/
│   └── index.js
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Backend health check |
| GET | `/api/menu` | Retrieve café menu |
| POST | `/api/orders` | Submit customer order |
| POST | `/api/contact` | Submit contact message |

Menu search supports the `q` parameter, and category filtering supports the `category` parameter.

## ☕ Sample Menu

| Product | Price |
|---|---:|
| Caramel Macchiato | Rs. 650 |
| Americano | Rs. 480 |
| Cappuccino | Rs. 590 |
| Flat White | Rs. 560 |
| Espresso | Rs. 390 |
| Café Mocha | Rs. 620 |
| Cold Brew | Rs. 570 |
| Café Latte | Rs. 540 |

*Prices are sample project values and may be changed.*

## ⚠️ Current Project Limitations

- Menu data is currently stored in the Express server.
- Orders and contact messages are logged to the server console.
- MongoDB is not yet connected.
- Online payments are not integrated.
- WhatsApp and SMS notifications are not integrated.
- Real delivery services are not connected.
- Sample business contact information must be replaced before launch.

## 🔮 Future Improvements

- MongoDB database integration.
- Admin dashboard for managing orders.
- Customer authentication.
- Online payment integration.
- WhatsApp order notifications.
- Delivery management.
- Order tracking.
- Customer reviews and analytics.

## 👨‍💻 Developer

**Wahab ur Rehman**

GitHub: [@Wahaburrehman](https://github.com/Wahaburrehman)

Project Repository: [Mist & Mocha](https://github.com/Wahaburrehman/Mist_-_Mocha)

---

*Lost in the haze, found in the roast.* ☕
