var mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");
var data = [
    {
        name: "Cloud's Rest", 
        image:"https://farm8.staticflickr.com/7457/9586944536_9c61259490.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Tree House", 
        image:"https://farm8.staticflickr.com/7285/8737935921_47343b7a5d.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Twilight Home", 
        image:"https://farm9.staticflickr.com/8471/8137270056_21d5be6f52.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    ]

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
    if(err){
        console.log(err);
    }
    console.log("removed campgrounds");
    //add a few campgrounds
    data.forEach(function(seed){
       Campground.create(seed, function(err, campground){
           if(err){
               console.log(err);
           } else {
               console.log("Added a campground");
               //create a comment
               Comment.create(
                   {
                       text:"This place is great but I wish there was internet",
                       author: "Homer"
                   }, function(err, comment){
                       
                       if(err){
                           console.log(err);
                       } else {
                           campground.comments.push(comment);
                           campground.save();
                           console.log("Created a new comment");
                       }
                   });
           }
       }); 
    });
});
    
    
    
}

module.exports = seedDB;
