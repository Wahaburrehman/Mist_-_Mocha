# Mist & Mocha — full-stack café website

Tagline: *Lost in the haze, found in the roast.*

A responsive Pakistani café storefront inspired by the supplied Mist & Mocha references. Built with React + Vite + Tailwind CSS and an Express API.

## Features
- Warm coffee-house visual system, responsive mobile navigation and product cards
- Animated hero coffee cups (drop-in entrance), hover motion, ticker and reduced-motion support
- Pakistani menu names/categories and prices in PKR (`Rs.`)
- Search and category filtering
- Working cart with quantity controls and checkout form
- Express API endpoints: `/api/health`, `/api/menu`, `/api/orders`, `/api/contact`
- Local image assets cropped from the supplied visual references

## Run locally
Node.js 18+ recommended.

```bash
npm install
cp .env.example .env
npm run dev
```
Frontend: http://localhost:5173  
API: http://localhost:5000

## Production
```bash
npm install
npm run build
npm start
```
Express serves the Vite `dist` build and API on the same port. Set `PORT` and `CLIENT_ORIGIN` in your hosting environment if needed.

## Before accepting real orders
This is a deployable starter, not a live payment/delivery integration. Orders and contact messages are currently validated and logged to the server console; no database, SMS, WhatsApp, email, payment gateway or delivery provider is connected. Add your business's real phone/address, connect a persistent database and payment/delivery workflow, and replace sample contact details before launch. Never treat a console-logged order as a confirmed paid order.

## Suggested deployment
Deploy the Node service to Render, Railway, Fly.io or any Node host. Use the root directory, build command `npm install && npm run build`, start command `npm start`. The static Vite build is served by Express.
