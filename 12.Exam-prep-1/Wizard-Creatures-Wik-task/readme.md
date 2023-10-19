1. Init project and structure
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
