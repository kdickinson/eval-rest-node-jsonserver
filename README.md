# eval-backend-node

A node based backend of the evaluation tool using express and, for dev mode, json-server

# Developer Workspace
Run DB server and Web Server (no particular order)
- npm run db
- npm run app

Then browse to localhost(or webserver of your choice):3000 using rest

NOTE: client is not yet integrated

# TODO
1. REST server should serve only one question at a time
    1. This will require each question to be logged in the DB as served
1. Server should detect first and last questions served
1. Server should check each answer of previous question (if not first) and log correctness before serving next question