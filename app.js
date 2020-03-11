var express=require("express");
var app=express();
var request=require("request");
app.set("view engine","ejs");

app.get("/results",(req,res)=>{
    var query= req.query.search;
    var url="http://www.omdbapi.com/?s="+query+"&apikey=thewdb"
    request(url,(error,response,body)=>{
        
    if(!error && response.statusCode==200){
        var data=JSON.parse(body);
        if(data.Response=="False"){
            res.render("NOTFOUND");
        }
        else{
            res.render("results",{data: data});    
        }
        console.log(data);
        
    }
    else{
        console.log("error hai!!")
    }
    })
})

app.get("/",(req,res)=>{
res.render("search");
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("App started!!");
})  