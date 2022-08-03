# reactjs-tutorial

React.js Tutorial Course followed by Dave Gray

## 0. Install and Setting ReactJS Environment

Type on Terminal

```
npx create-react-app <folder name>
```

## 1. Start Here

### What you learned?

- Initial setting by typing "npx create-react-app"
- The basic structure of react app files, especially "app.js", "index.js"

## 2. App & JSX

### What you learned?

- On App.js page, check what kinds of variables can display
- Add "handleNameChange" function to figure out changes of app page

## 3. Functional Components

### What you learned?

- Import several components on App.js
- Construct the App page, which is consisted of several components

## 4. Applying CSS Styles

### What you learned?

- Learn inline styling
- Adjust index.css style, which is coppied by Dave Gray's file
- NOTE: Mostly you have to make css file for each component. But, for small project, you can add all of styling line in index.css

## 5. Click Events

### What you learned?

- Just click on first button, then handleClick function add "You clicked it" on console.
- Click on second button, then works anonymous function and operate handleClick2 function makes "{name} was clicked" on console which "name" is a parameter what you tossed.
- REMARK: The anonymouse function works when you click the button!
- Finally, click on third button, then the action on the page transfer DOM contents to "e"(event) parameter. And that parameter tossed handleClick3 function. After then, it prints "e.target.innerText" (in this case, "Click It") on console.

## 6. useState Hook

### What you learned?

- Usage of useState
- How to initialize variable in useState
- Assign new variable setting in function
- Adjust the functions to virtual DOM

## 7. Lists & Keys

### What you learned?

- Set items array
- Create structure of Content component
- Make handleCheck function
- Add onChange for assign handleCheck function
- Use HOF(High-Order Function) map for changing variable of item's "checked" boolean
- Import react-icons for adding "FaTrashAlt" font-icon
- Use ternary operator to adjust style when "checked" is "true"
- Apply onDoubleClick method to "label" element for making same effect as checked is true
- Create handleDelete method to delete item
- Add handleDelete method in FaTrashAlt font-icon
- Click the font-icon, then delete clicked item
- Make effect when no longer exist items, then display "Your list is empty" comment on page

## 8. Props & Prop Drilling

### What you learned?

- Make the top of listItem meet the bottom of header component
- Transfer the properties App to Header component
- (1) Bad Case: implicitly transfer properties by just writing "props" (this notation makes ambiguous expression!)
- (2) Good Case: destructure properties to make clearly what it is transfered!
- defaultProps
- Move items, setItems, handleCheck, handleDelete functions on App.js
- Transfer properties (item, handleCheck, handleDelete) to Content component
- Transfer the property (length)
- Display the number of items on the bottom of page
- Detach <!-- <ul>...</ul> --> elements in Content component to seperate another component, which is named "ItemList" component (Note: relatively the Content component too heavy!)
- makes a re-usable line item component

## 9. Controlled Component Inputs

### What you learned?

- Create AddItem component
- Styling css about AddItem elements in index.css
- Implement AddItem component in App.js
- Add properties from App.js on AddItem.js
- Apply handleSubmit function
- Transfer input text to newItem & set newItem by using onChange() method
- Add handleSubmit function and addItem control
- Remove repeatly codes and add setAndSaveItems function
- Implement addItem function into handleSubmit function
- Load the data in local storage item list on page
- Create SearchItem component and styling css
- Apply search filter on Content component
- Adjust useRef to make initialize input and button state

## 10. Project Challenge

### What you learned?

- Create "Printing Color" app
- Review what you learned so far

## 11. useEffect Hook

### What you learned?

- Concept of useEffect
- Different order of rendering
- (1) useEffect is asynchronous function
- (2) useEffect runs only at dependency changes
- Apply the concept of useEffect by using localStorage API
- Use useEffect for set item on local storage
- Remove setAndSaveItems function 'cause no longer needs
- get Item from local storage must include empty array, [], to avoid that items is null (it causes error which app doesn't work)

## 12. JSON Server

### What you learned?

- Create data folder and db.json file
- Install json-server
- Type "npx json-server -p 3500 -w data/db.json" in console
- Access Resources "http://localhost:3500/items" in this case

## 13. Fetch API Data

### What you learned?

- Load data from db.json not localStorage
- To load db.json data, use Fetch API (NOTE: DO NOT USE async directly in useEffect 'cause it is already asynchronous function)
- Change the main tag to div tag in Content component
- Create try-catch
- Add fetchError useState to send error message
- Add paragraph to display fetchError when API_URL incorrect or disable
- In during loading time, do not show error message on page
- In real case, REST API do not response as fast as Local environment
- Add setTimeout function to simulate loading delay at 2000msec
- Set new useState, isLoading setIsLoading
- If isLoading is true, "Loading Items..." paragraph shows up on page

## 14. CRUD Operations

### What you learned?

- Create API Request function
- If it cause error, return error message
- APPENDIX: HTTP STATE CODE + MOST FREQUENCY CODE
- In page, remove "Bread" item
- In page, add "Tomato" item
- In page, add "Candy" item
- NOTE: the list item in db.json was changed directly typing on web page
- Create POST Request and call apiRequest function for posting "myNewItem" in db.json
- Create PATCH Request and call apiRequest function for changing "checked" property of item
- Create POST Request and call apiRequest function for delete item
- NOTE: In PATCH & POST Requests, NOT USED "API_URL" directly because it should apply your request on specific id of item. So, USE "API_URL/#id"

## 15. Fetch Data Challenge

### What you learned?

## 16. React Router

### What you learned?

- Install react-router-dom (by type "npm i react-router-dom -S" in console)
- Import 'react-router-dom"
- Set render structure (add Router and Route)
- Create Header, Nav, Footer components that stay on the page even when the other components change
- Create main area of the page components(Home, NewPost, PostPage, About, Missing) that occupy the main element will change
- Use Route, Switch react router dom
- Use useHistory (one of custom hooks)
  ㄴ this hook allow us to access the browser history
  ㄴ but react router does not make requests from the server again it just routes within the app
  ㄴ responds faster so it improves ux
- Construct the structure of components

## 17. Router Hooks & Links

### What you learned?

- Transfer "title" property to Header component
- Create form, input element
- Create Menu items (Home, Post, About)
- Connect these menu to each url direction by using Link method
- [Structure of Page]

```
 Header
 Nav
 [Main Page]
 ㄴ Home(first landing page)
      ㄴ Feed
           ㄴ Post
 ㄴ PostPage
      ㄴ NewPost
 ㄴ About
 Footer

* Missing (for 404 Error)
```

=====================================

- Restructure Home, PostPage components
- Transfer "posts" property to Feed component
- Create Feed component
  ㄴ Transfer "posts" property to Feed component
  ㄴ Import Post component
  ㄴ mapping posts
- Create Post component
  ㄴ Received "post" property
  ㄴ Spread each post and display post's body shortly (by using slice() function)
- Error solution
  "'You rendered descendant <Routes> (or called `useRoutes()`) at "/accounts/" (under <Route path="">) but the parent route path has no trailing "\*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.'"

```
>> Add "*" after "App/"
```

- Use "useParams()" method
- Create delete button
- Make handleDelete function
- After delete post, automatically move to "Home" page (by using "useNavigate()" method)
  (NOTE: No more use "useHistory" method at V6 React-Router)
- Install date functions (type "npm i date-fns -S" on console)
- Add copyright paragraph on Footer component
- Simply type paragraph about this blog
- Make Missing Error page (for approaching wrong url)
- Make NewPost
- Add handleSubmit function for NewPost component
  ㄴ set the "id" (if posts.length > 0, set post.id as the last one. if not, set 1)
  ㄴ set "newPost" 's contents
  ㄴ add "newPost" to posts array
  ㄴ newally set Posts as allPosts
  ㄴ clear postTitle, postBody
  ㄴ use useNavigate to move on Home url('/')
- Set useEffect to make filtered results
- Transfer "searchResults" to Home component

## 18. Flexbox Components

### What you learned?

## 19. Axios API Requests

### What you learned?

- Install axios (type "npm i axios" on console)
- Create baseURL for using axios
  ㄴ baseURL is server url
- After create axios, type "npx json-server -p 3500 -w data/db.json" to run server
- Fetch Posts by using useEffect
- Adjust handleSubmit by using axios
  ㄴ After submit new post, it is saved on db.json
  ㄴ To show up the new post, it should call db.json again and re-loading the data to uploading
  ㄴ If it doesn't work, catch the error and show the message of error
- Adjust delete operation to handleDelete
  ㄴ Note that no needs response(or res) in this case 'cause we don't need recall data
- Create handleEdit function
  ㄴ Reset datetime based on edit time
  ㄴ Edit post content and store those items on updated variable
  ㄴ Use "put" method and uploading updatedPost on db.json
  ㄴ To re-load posts, use setPosts()
  ㄴ Show up editted post only it is matched post.id to id
  ㄴ If it didn't match, only show up old one
- Add the function that connect title to home
- Create EditPost page
  ㄴ Transfer "posts, editTitle, setEditTtile, editBody, setEditBody, handleEdit" to EditPost component as properties
  ㄴ Find post which match post.id to id of url
  ㄴ Initial setting is same as origin title and body (i.e., setEditTitle(post.title) setEditBody(post.body) )
  ㄴ className and id of this page didn't change, 'cause it should apply same css styling as like NewPost component
  ㄴ If editTitle exist, render Edit Post page
  ㄴ if it doesn't, render "Not Found" page
  ㄴ Most rest part after return is same as NewPost component, BUT the function of editButton works operating handleEdit() when it is clicked!
- Create Edit button on PostPage component
  ㄴ connected edit page which has same post.id
- Modified data on Edit Page
- Adjust css styling to editButton

## 20. Custom Hooks

### What you learned?

## 21. Context API & useContext Hook

### What you learned?

## 22. Easy Peasy Redux

### What you learned?

## 23. Build & Deploy Your React Apps

### What you learned?
