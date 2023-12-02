1. Init project and structure
    - add git ignore
2. Setup developer inviroment
3. Install express and nodemon
    - configer static middleware
    - configer bodyparser
    - configer routes
4. Add images and SCC in public directory
5.Add html files in views directory
6.Install express-handlebars
    - configure engine
    - add main layout
    - fix publi styles hyperlink
    - render home page in hbs
7.Convert all HTML views to handlebars views
    -Group views by meaning
8. Add controller folder with home controller
9.Add DB 
    - install mongoose 
    - conect to DB
10.Prepair user config
    - user controller
    - add controller to router  
    - fix navigations in the nav bar(login register , loguot)
    - render login page
    - render register page
11. Add user model.
    - simple validatoin in schema
    - add method for register
    - create first user record in the DB
     - validate password missmatch
     - validaite email already exist
12. Hash password
    - instal bycrypt 
    - has password
13. Login
    - finde user by email
    - validate password with hash
14.Generate jsonwebtoken
    - install jsonwebtoken
    - promisifi jsonwebtoken
    - generte secret
    - generate toke in servise login
15.Return token in cookie
    - install cookie parser
    - configurate cookie parser
     - set cookie with token
16.Implement logout
17.Authentication middleware
    - create middleware directory
    - add auth middleware and import in to express configuretion below cookieparser
    - decode the token
    - handle invalid token
    - provide authorization
18.Dynamic navigation
    - contidional option in navigation
    - add date to res.locals for hbs template
19.Error handling
    - add 404 page
    - redirect missing rout to 404
    - add global error handle (optional)
    - error massage util
20. Show error notification
    - show in the main layout
    - pass error to render in login and register pages 
##########################################
## Todo's

1.Map pages to navigation in both Logged in and loggedOut state
2. Add creature model to mongoose
3. Implement All posts page
    - show each creaturs with image , name speces, description
     - add ditalis button to every creature
4. Add details page for creatures
    - if no creatures " there are no posts jet..."
     - if the user is the owner of the post shoud have "Edit " and "Delete" buttons
     - If the user has not logged in => no buttons
     - If The user is not the owner => vote button
5. Vote button 
    - when clicked -. voted
    - redirect to the details page for the current creature
     - show the email of the pepole voted
     - if user has already voted -> "thanks for volting" and add thr email of the voted people
6. Add creature 
 - on sucsess redirect to all posts page
7. Delete creature
    - on sucsess redirect to all posts page
8. Edit creatre
- on sucsess redirect to the current creature page
9. Routes Guards - check
10.Validations
    - login
    - register
    - Animals
11.Bonus -> Profile 
-> show my posts
-> if htere no post - msg

