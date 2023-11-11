const express  = require('express');
const app = express();
const dotenv = require('dotenv');
const prisma = require('./db/prisma');

dotenv.config();

const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    await prisma.user.create({
        data: {
            name : "john Doe",
            email : "johndoe@gmail.com", 
            password : "passwords"  
        },
    });

    //get all users
    const users = await prisma.user.findMany();

    //get user name
    const names = users.map((user) => user.name);
    

    res.send(
        `There are ${names.length} users with the name ${names.join(', ')}`
    );
})

app.listen(port, () => {
    console.log(`App Listening on port ${port}`)
});