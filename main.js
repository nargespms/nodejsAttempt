const express = require ('express')
const app = express()


const images = [{id:12},{id:13},{id:14}]

app.get('/getImage',(req,res)=>{
    res.send('Here is your images for now ...')
});
app.get('/getImage/:imageId',(req,res)=>{
    const image = images.find(i=>i.id === req.params.imageId )
    if(!image)  res.status(404).send('no such a image in here ..')
});
app.get('/blogs',(req,res)=>{
    res.send('postssss!!!! ...')
});
app.get('/blogs/:year/:month',(req,res)=>{
    res.send(req.query)
});
const port = process.env.PORT || 3200

app.listen(port, ()=> console.log(`youre project is listening on ${port} port number ...`));