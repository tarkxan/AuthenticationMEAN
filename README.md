# AuthenticationMEAN

<!-- epxress server -->
1. create a project
npm init

2. install express
npm install express

3. create and run server:
node index.js

4. check server running: localhost:5000

5. install nodemone to watch changes
npm install nodemon --save-dev
add <"server": "nodemon index"> in package.json

6. install body-parser to parse input as json format

7. install cors and morgan
it allows to get the foillowing data in terminal on each api request:
POST /api/auth/login 200 21.415 ms - 60

!! all installed packages should be imported in app.js file !!

8. mingo db username / password: admin / Welc0me12

9. install mongoose

10. install passport-jwt to protect APIs

------------ changes ------------
index.js - is only responsible for server run


to kill the server on some port:
- killall -9 node


