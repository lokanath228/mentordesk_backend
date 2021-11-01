 import express from 'express';
 import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app =express();
dotenv.config();


app.use(bodyParser.json({limit:"30mb",extended:"true"}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}))
app.use(cors());

app.use('/posts',postRoutes);

app.get('/',(req,res)=>{
    res.send('Hello to mentor api')
})

const CONNECTION_URL ='mongodb+srv://mentordata:mentordata1234@cluster0.p8oua.mongodb.net/mentorst?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology: true})
.then(() => app.listen(PORT,() => console.log(`server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));

// mongoose.set('useFindAndModify',false);
