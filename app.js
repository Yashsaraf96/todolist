const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var items = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  var day = today.toLocaleString("en-US", options);
  res.render("list", {kindOfDay: day, newListItem: items});
});

app.post("/", function(req, res){
  items.push(req.body.newItem);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on PORT 3000");
});
