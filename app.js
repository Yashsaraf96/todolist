const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  let day = today.toLocaleString("en-US", options);
  res.render("list", {kindOfDay: day, newListItem: items});
});

app.post("/", function(req, res){
  items.push(req.body.newItem);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started on PORT 3000");
});
