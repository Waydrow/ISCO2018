/**
 * This is the app file of `ISCO 2018 Website`.
 *
 * @name      app.js
 * @summary   App file of this project
 * @link      app.js
 * @since     2018-02-03
 * @author    Zuowu Zheng <wozhengzw@gmail.com>
 */

// 3rd party modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var routes = require('./routes/index');
var sitemap = require('sitemap')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

// Static route
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(path.join(__dirname, 'public')));

// Dynamic route
app.use('/', routes);

// handle 404
app.use(function (req, res, next) {
    res.status(404).render("error", {status: 404});
});

//  handle error
app.use(function (err, req, res, next) {
    console.error(err);
    if (err.status) {
        res.status(err.status).render("error", {status: err.status});
    } else {
        res.status(404).render("error", {status: 404});
    }
});

module.exports = app;

app.listen(12477, function() {
    console.log("Website listening on port 12477.");
});
