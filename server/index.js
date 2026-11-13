const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: process.env.CLIENT_ORIGIN || true }));
app.use(express.json({ limit:'1mb' }));

const menu = [
  {id:1,name:'Caramel Macchiato',category:'Coffee',price:650,description:'Espresso, steamed milk and silky caramel drizzle.',image:'/assets/caramel-macchiato.jpg',tag:'Bestseller'},
  {id:2,name:'Americano',category:'Coffee',price:480,description:'A bold espresso mellowed with hot water.',image:'/assets/americano.jpg'},
  {id:3,name:'Cappuccino',category:'Coffee',price:590,description:'Equal parts espresso, steamed milk and airy foam.',image:'/assets/cappuccino.jpg',tag:'Popular'},
  {id:4,name:'Flat White',category:'Coffee',price:560,description:'Double espresso with velvety microfoam.',image:'/assets/flat-white.jpg'},
  {id:5,name:'Espresso',category:'Coffee',price:390,description:'A short, rich shot with a beautiful crema.',image:'/assets/espresso.jpg'},
  {id:6,name:'Café Mocha',category:'Coffee',price:620,description:'Chocolate, espresso and steamed milk in one happy cup.',image:'/assets/mocha.jpg'},
  {id:7,name:'Cold Brew',category:'Iced Coffee',price:570,description:'Slow-steeped for a smooth, refreshing finish.',image:'/assets/cold-brew.jpg',tag:'Chilled'},
  {id:8,name:'Ristretto',category:'Coffee',price:420,description:'A shorter, more concentrated espresso shot.',image:'/assets/ristretto.jpg'},
  {id:9,name:'Café Latte',category:'Coffee',price:540,description:'A smooth espresso with plenty of steamed milk.',image:'/assets/cafe-latte.jpg'},
  {id:10,name:'Iced Caramel Latte',category:'Iced Coffee',price:690,description:'Chilled milk, espresso and caramel over ice.',image:'/assets/cafe-latte.jpg'},
  {id:11,name:'Chocolate Frappe',category:'Frappe',price:720,description:'A cool blended chocolate coffee treat.',image:'/assets/mocha.jpg'},
  {id:12,name:'Lotus Cheesecake',category:'Bakery',price:650,description:'Creamy cheesecake with a spiced biscuit base.',image:'/assets/cappuccino.jpg'}
];
app.get('/api/health',(_,res)=>res.json({ok:true,brand:'Mist & Mocha'}));
app.get('/api/menu', (req,res)=>{
  const q=(req.query.q||'').toLowerCase();
  const category=req.query.category||'All';
  res.json(menu.filter(p=>(category==='All'||p.category===category)&&(p.name.toLowerCase().includes(q)||p.description.toLowerCase().includes(q))));
});
app.post('/api/orders',(req,res)=>{
  const {items,customer}=req.body||{};
  if(!Array.isArray(items)||!items.length||!customer?.name||!customer?.phone||!customer?.address)
    return res.status(400).json({message:'Please add items and complete your name, phone and delivery address.'});
  const normalized=items.map(i=>{const p=menu.find(x=>x.id===Number(i.id));return p?{id:p.id,name:p.name,price:p.price,quantity:Math.max(1,Math.min(30,Number(i.quantity)||1))}:null;}).filter(Boolean);
  if(!normalized.length)return res.status(400).json({message:'Your cart is empty.'});
  const total=normalized.reduce((s,i)=>s+i.price*i.quantity,0);
  const order={orderId:'MNM-'+Date.now().toString().slice(-7),customer,items:normalized,total,currency:'PKR',createdAt:new Date().toISOString(),status:'received'};
  console.log('NEW ORDER',JSON.stringify(order));
  res.status(201).json({message:'Order received! The café team will contact you to confirm.',order});
});
app.post('/api/contact',(req,res)=>{
  const {name,email,message}=req.body||{};
  if(!name||!email||!message)return res.status(400).json({message:'Please complete all fields.'});
  console.log('CONTACT MESSAGE',JSON.stringify({name,email,message,at:new Date().toISOString()}));
  res.status(201).json({message:'Thanks! Your message has been received.'});
});
const dist=path.join(__dirname,'..','dist');
if(fs.existsSync(dist)){app.use(express.static(dist));app.get('*',(req,res)=>res.sendFile(path.join(dist,'index.html')));}
app.listen(PORT,()=>console.log(`Mist & Mocha API running on http://localhost:${PORT}`));
