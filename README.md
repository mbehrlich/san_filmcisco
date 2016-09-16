# San Filmcisco

## Installation instructions:

type the following commands:

```
bundle install
npm install
rake db:create
rake db:migrate
rake db:seed
rails s
```

And then you can access the site at localhost:3000

## Libraries and technologies used

- Backend: rails

Although it would have been possible to make this a static site, my goal here
was to attempt to reduce the number of ajax requests. A static site would have
to do numerous requests to the filming location api as well as to google. This
would slow the site down quite a bit.

With a rails app, I am able to save all of the data to the database, and most
importantly, every time a request is made to the google maps api, rails saves
the latitude and longitude so that subsequent requests will not require a request
to the google places api, and as a result, run faster.

- Frontend: React with redux

I chose react with redux because of how easy it made it to send data from the form
to the map, and because I have the most experience with this frontend framework.

- Maps: Google maps

The best map api around. It was not able to parse some of the locations provided, however.

- Autocomplete: made it myself

I experimented at first with the 'react-autocomplete' package, but found it to be
unwieldy. Instead, I wrote one myself. The only drawback is that it currently does
not let you use the arrows to select options, and you must instead click on them.
If I had more time to continue this project, that would be the next thing I'd implement.

Best aspects:
