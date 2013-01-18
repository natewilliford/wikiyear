
$ = require "jquery"

if process.argv[2]?
  year = process.argv[2]
else
  console.log "You must specify a year"
  process.exit 1

$.get "http://en.wikipedia.org/wiki/" + year, (resp) ->
  dom = $(resp)
  items = dom.find('#Events')
    .closest("h2")
    .nextUntil("h2")
    .andSelf()
    .filter("ul")
    .find("li")

  event_item = items[Math.floor(Math.random()*items.length)]
  console.log $(event_item).text()
