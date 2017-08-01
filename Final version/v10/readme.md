#Yelp Camp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

Each Campground has:
* Name
* Image

#Layout and basic styling
* Create our header and footer partials
* Add in bootstrap

#Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

#Style the Navbar and Forms
* Add a navbar to all templates
* Style the new campground form

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES:
================================================================
name    url             verb    description
================================================================
INDEX   /dogs           GET     Display a list of all dogs
NEW     /dogs/new       GET     Displays form to make a new dogs
CREATE  /dogs           POST    Add new dog to DB
SHOW    /dogs/:id       GET     Shows info about one dog

INDEX   /campgrounds
NEW     /campgrounds/new
CREATE  /campgrounds
SHOW    /campgrounds/:id

NEW     campgrounds/:id/comments/new    GET
CREATE  campgrounds/:id/comments        POST

#Refactor Mongoose Code
* Create models directory
* Use module.exports
* Require everything correctly

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment model
* Make our errors go away
* Display comments on campground show page

#Comment New/Create
* Discuss nested routes
* Add a comment new and create routes
* Add the new comment form

#Style Show Page
* Add sidebar to show page
* Display comments nicely

#Finish styling the show page
* Add public directory
* Add custom stylesheet

#Authentication part 1-Add user model
* Install all packages needed for authentication
* Define user model

#Authentication part 2-Register
* Configure passport
* Add register routes
* Add register template

#Authentication part 3-Login
* Add login routes
* Add login template

#Authentication part 4-Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links in navbar
* Ahow/hide auth links correctly

#Authentication part 5-Show/hide links
* Show/Hide auth links in navbar correctly

#Refactorthe routes
* Use express router to reorganize all routes

#Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

#Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

#Editing Campgrounds
* Add method-override
* Add edit route for campgrounds
* Add link to edit the page
* Add update route

#Deleting Campgrounds
* Add destroy route
* Add delete button

#Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

#Editing comments
* Add edit route for comments
* Add edit button
* Add update route

/campgrounds/:id/edit
/campgrounds/:id/comments/comment_id/edit

#Deleting comments
* Add destroy route
* Add delete button

#Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/show edit and delete buttons
* Refactor middleware

#Adding in flash!
* Install and configure connect-flash
* Add bootstrap alerts to header

