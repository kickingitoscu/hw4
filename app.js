const express = require("express");
const app = express();
const { getEmoji, getAllEmoji, getThemes } = require('random-text-meme');
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));//access img, css, js

app.get("/", function(req, res){
    res.render("index.ejs");
}); 
app.get("/data", function(req, res){
 
    res.render("data.ejs", {
        emoji: getEmoji('flip-table')
    });

}); 
app.get("/security", function(req, res){

    res.render("security.ejs", {
        em: getEmoji()
    });
    
}); 
app.get("/swe", function(req, res){
   
    res.render("swe.ejs",{
        emo: getEmoji('flip-table')
    });
});
// app.listen(8081, "127.0.0.1", function(){
//   console.log("I'm Running");  
// });
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running...");
});