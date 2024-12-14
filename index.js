import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;
let postData = [
    {
        "postImage" : "images/teavm.png",
        "postTitle" :"test post title",
        "post_discription" : "test post description",
    }
]
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get('/',(req,res)=>{
    console.log(postData);
    res.render("home.ejs",{postData});
});
app.get("/viewMore",(req,res)=>{
    res.render("viewMore.ejs")
});
app.get('/about',(req,res)=>{
    res.render("about.ejs");
});
app.get('/create',(req,res)=>{
    res.render("create_post.ejs");
});
app.get('/projects',(req,res)=>{
    res.render("projects.ejs");
});
app.get('/signup',(req,res)=>{
    res.render("signup.ejs");
});
//creating posts and sending it to home page
app.post("/home",(req,res)=>{
   postData.push( 
    {
        "postImage" : req.body["image"],
        "postTitle" : req.body["postTitle"],
        "post_discription" : req.body["post_discription"],
    });
    console.log(req.body);
    res.render("home.ejs",{postData});
})
//sending post data to view more
app.post("/viewMore/submit",(req,res)=>{
    console.log("enter post view more1");
    console.log(req.body);
    res.render("viewMore.ejs",{
        postTitle : req.body["postTitle"],
        post_discription: req.body["post_discription"] 
    });
})
app.listen(port,()=>{
    console.log(`server listen on port:${port}`);
})