const express = require('express')
const app = express()
const connectDB = require('./config/db')
const itemRoute = require('./routes/api/item')


connectDB()

app.use(express.json({extended:false}))

app.get('/',(req,res)=>{
    res.send('Api Running');
})

// Routes
app.use('/api',itemRoute)

const PORT = process.env.PORT || 5000




app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
    
})