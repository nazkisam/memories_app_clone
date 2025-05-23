import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from'./route/post.js'

const  app = express();
app.use('/posts',postRoutes)
app.use(bodyParser.json({limit: "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended : true}));
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://samnazki:fydUdOUCxDkvd2aW@cluster0.3konj.mongodb.net/'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>app.listen(PORT, ()=>console.log(`server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));  

