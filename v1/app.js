var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgrounds = [
       {name: "Salmon Creek", image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},
       {name: "Granite Hill", image:"https://farm9.staticflickr.com/8225/8524305204_43934a319d.jpg"},
       {name: "Mountain Goat's rest", image:"https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg"}
       ] 


app.get("/", function(req, res){
   res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    
    //get data from form and add to campground array 
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    campgrounds.push(newCampground);
    
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});






app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started");
});