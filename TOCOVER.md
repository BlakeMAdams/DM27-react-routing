# Topics to Cover
This is a list of topics that will be covered in today's lecture.

## HashRouter
- HashHistory vs BrowserHistory
hash router has a # in url 
browser router has a / in url

## Route
- path='/' url path for the component
- Exact - will match path exactly
- Component - set it equal to the component you want rendered
- Render
  - takes in a function
  - Nested routes with props.children

## Switch
- loads only one route at a time
- it will load the first match to the path url
  - be careful about order of listed routes
## Link
- to='/'
- links to the url

## NavLink
has ability to use activeClassName
## Using a router file
not necessary for funciton, but good for organization
make sure to wrap <HashRouter> around the app component tab in index.js
## Params
- props.match.params
access value through props.match.params
set property name on the params object with the path url
  example.  path='/product/:name' >>>  colon is the key!
