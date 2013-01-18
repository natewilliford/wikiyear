// Generated by CoffeeScript 1.3.3
(function() {
  var $, year;

  $ = require("jquery");

  if (process.argv[2] != null) {
    year = process.argv[2];
  } else {
    console.log("You must specify a year");
    process.exit(1);
  }

  $.get("http://en.wikipedia.org/wiki/" + year, function(resp) {
    var dom, event_item, items;
    dom = $(resp);
    items = dom.find('#Events').closest("h2").nextUntil("h2").andSelf().filter("ul").find("li");
    event_item = items[Math.floor(Math.random() * items.length)];
    return console.log($(event_item).text());
  });

}).call(this);