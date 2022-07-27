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
-

## 13. Fetch API Data

### What you learned?

## 14. CRUD Operations

### What you learned?

## 15. Fetch Data Challenge

### What you learned?

## 16. React Router

### What you learned?

## 17. Router Hooks & Links

### What you learned?

## 18. Flexbox Components

### What you learned?

## 19. Axios API Requests

### What you learned?

## 20. Custom Hooks

### What you learned?

## 21. Context API & useContext Hook

### What you learned?

## 22. Easy Peasy Redux

### What you learned?

## 23. Build & Deploy Your React Apps

### What you learned?
