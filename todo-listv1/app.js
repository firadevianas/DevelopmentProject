const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname+"/date.js");

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));


const item = [];
const workItem = [];

app.get("/", function(req, res){
    
    const day = date.getDate();
    console.log(day);
    res.render("list",{listTitle:day,newItemLists:item});
});

app.post('/',(req,res)=>{
  console.log(req.body);
  const items = req.body.newItem;
  if(req.body.list === "Work"){
    workItem.push(items);
    res.redirect('/work');
  }else{
    item.push(items);
    res.redirect('/');
  }
  
});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",newItemLists:workItem});
})

// app.post('/work',(req,res)=>{
//   let items = req.body.newItem;
//   workItem.push(items);
//   res.redirect('/work');
// })

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

