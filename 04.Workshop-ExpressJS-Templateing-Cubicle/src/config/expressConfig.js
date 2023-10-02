const express = require("express");
const app = express();
const path = require("path");

const expressConfig = (app) =>{

    const staticFile = express.static(path.resolve(__dirname, "../public"));
    app.use(staticFile);
    app.use(express.urlencoded({extended: false}))

}

module.exports = expressConfig;