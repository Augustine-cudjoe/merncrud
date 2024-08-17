const express= require('express')
const app= express()
const mongoose=require('mongoose')
const cors= require('cors')
const AppointModel=require('./models/Appoint')

app.use(cors())
app.use(express.json())



mongoose.connect("mongodb+srv://auguscudjoe94:9anEpbqzsRfnfp23@cluster0.jks9a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.get('/get',(req,res)=>{
    AppointModel.find({})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
///get edit
app.get('/get/:id', async(req,res)=>{
    const {id}=req.params;
  const doc= await AppointModel.findById(id).populate('firstName')
    res.json(doc)

})

app.post('/add', async(req,res)=>{
    const {firstName, secondName,title,comment}= req.body;
    
       try{
        const docDetails= await AppointModel.create({
            firstName,
            secondName,
            title,
            comment,
           
        });
        res.json(docDetails)
        
       } catch(e){
        res.status(404).json({error:e.message})
       }
        
        
})

//edit

app.put('/edit/:id', async (req, res) => {
    const id = req.params.id;
     updatedUser = await AppointModel.findByIdAndUpdate(
        {_id:id},{
          firstName: req.body.firstName,
          secondName: req.body.secondName,
          title: req.body.title,
          comment: req.body.comment
        }).then(user=>res.json(user))
          .catch(err=>console.log(err))
  
     
  
     
  });
  


//delete
app.delete('/delete/:id',(req,res)=>{
    const {id} =req.params
    AppointModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .then(err=>console.log(err))
})


app.listen(5000,()=>{
    console.log('the server is set on port 5000')
})

