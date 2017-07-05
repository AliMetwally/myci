* codeigniter version 3.1.4

* public folder
----------------
bootstrap v3.3.7
    dit - rtl | cdn link https://cdnjs.com/libraries/bootstrap-rtl    
css
ext
font-awesome v4.7.0 include font-awesome-animation v0.0.10 
images
js 
    - jquery.min.js v 3.2.1
    - main.js
-----------------------------------------------
* config.php file
-----------------
add generic base_url to run from localhost or from production server
find myci and change it
and replace $allowed array with the hosted domain names
-----------------------------------------------
* autoload.php file
------------------- 
Libraries (database, email, session)
Helpers (url, date, string, text)
-----------------------------------------------
* database.php file
-------------------
use pdo driver 
find dns and set mysql:hostname and dbname
and set username and password
-----------------------------------------------
* grocery crud 
---------------
* grocery crud v1.5.8.1
* bootstrap-theme v1.3.8 bootstrap v3
-----------------------------------------------
* main.php view
----------------
create a template view that contains almost required css and js files 
** before loading the files check if view run locally or from host server
Loaded Files 
css files
------
- bootstrap.min.css
- bootstrap-theme.min.css
- font-awesome.min.css
- font-awesome-animation.min.css
- main.css

js files 
---------
- jquery.min.js
- bootstrap.min.js
- main.js

