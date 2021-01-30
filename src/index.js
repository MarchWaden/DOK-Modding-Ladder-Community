//Package imports
const express = require('express');
const app =  express();
const session = require('express-session');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const http = require ('http').createServer(app);

//Using controllers
app.use('/chat', chatController);

//Start listening on port
http.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
  