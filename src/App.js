import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch, useLocation, useParams, useHistory } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import GoHomeButton from "./GoHomeButton";
import Content from "./Content";
import WelcomeBack from "./WelcomeBack";
import Footer from "./Footer";
import Greeting from "./Greeting";
import Clock from "./Clock";
import GroceryList from "./GroceryList";
import Roster from "./Roster";
import Quote from "./Quote";
import UseStateHook from "./UseStateHook";
import CountButton from "./CountButton";
import CoinTossCounter from "./CoinTossCounter";
import SubscriberForm from "./SubscriberForm";
import SubscriberList from "./SubscriberList";
import DogForm from "./DogForm";
import RSVPForm from "./RSVPForm";
import PostCreate from "./PostCreate";
import PostListNestedRoute from "./PostListNestedRoute";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"
import ProfileEdit from "./ProfileEdit";
import ToDoList from "./ToDoList";
import NoMatch from "./NoMatch";
import UserProfile from "./UserProfile";
import User from "./User";

const quote = {
  text:
    "I am greate believer in luck, and I find the harder I work, the more I have of it.",
  author: "Thomas Jefferson",
};

const todos = [
  "Finish the Lists & tables checkpoint",
  "Clean my desk",
  "Make lunch",
];

const roster = [
  { id: 1, firstName: "John", lastName: "Smith", location: "California" },
  { id: 2, firstName: "April", lastName: "White", location: "Nebraska" },
  { id: 3, firstName: "Jane", lastName: "Doe", location: "Florida" },
];

function Notifications({ notifications }) {
  // if (notifications.length > 0) {
  //   return <p>You have {notifications.length} notifications today!</p>;
  // }
  // return null;
  return (
    notifications.length > 0 && (
      <p>You have {notifications.length} notifications today!</p>
    )
  );
}

/*
history.go(0); // Equivalent to refreshing the page
history.go(-1); // Equivalent to `history.goBack()`
history.go(-2); // Equivalent to calling `history.goBack()` twice
history.go(1); // Equivalent to `history.goForward()`
history.go(3); // Equivalent to calling `history.goForward()` three times
*/


function App() {
  const notifications = ["You received a package", "The weather is sunny"];
  // const { loggedIn } = {"loggedIn": true};
  // const groceryItems = ["Bananas", "Apples", "Oranges"];
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);

  const [fontSize, setFontSize] = useState(12);
  const increaseFontSize = () => setFontSize((currentSize) => currentSize + 2);

  const groceryList = [
    { quantity: 6, item: "Bananas" },
    { quantity: 3, item: "Apples" },
    { quantity: 10, item: "Oranges" },
  ];

  const [subscribers, setSubscribers] = useState([]);
  const createSubscriber = (newSubscriber) =>
    setSubscribers((currentSubscribers) => [
      newSubscriber,
      ...currentSubscribers,
    ]);
  const deleteSubscriber = (indexToDelete) =>
      setSubscribers((currentSubscribers) =>
        currentSubscribers.filter((post, index) => index != indexToDelete)
  );
  
  // A17 - start
  const [posts, setPosts] = useState([]);
  const createPost = (newPost) => setPosts((currentPosts) =>[
    newPost,
    ...currentPosts,
  ]);
  const deletePost = (indexToDelete) =>
    setPosts((currentPosts) =>
      currentPosts.filter((post, index) => index != indexToDelete)
  );
  // A17 - end
  // if (loggedIn)

  // A18 - start
  const [recipes, setRecipes] = useState(RecipeData);
  const createRecipe = (newRecipe) => setRecipes((currentRecipes) => [
    ...currentRecipes,
    newRecipe,
  ]);
  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index != indexToDelete)
  );
  // A18 - end
  const [userId, setUserId] = useState(1);
  const userIds = [1, 2, 3, 4];
  return (
      <Router>
        <BackButton />
        <ForwardButton />
        <GoHomeButton />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {Array(10)
          .fill()
          .map((ignoredValue, index) => index + 1)
          .map((id) => (
            <div key={id}><Link to={`/users/${id}`}>User {id}</Link></div>
          ))}
        {/* <Link to="/about">About</Link> */}
        <Switch>
          {/* by convention `/` is listed first with exact={true} */}
          <Route exact={true} path="/">
            <p>
              <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} handleFontSizeIncrease={increaseFontSize} />
              <Content loggedIn={loggedIn}  fontSize={fontSize} text="My content." />
            </p>
            <hr className="solid" />
            <p>
              <lable>* Intro to Frontend Routing</lable>
              <div className="App">
                {window.location.pathname === "/about" ? <About /> : <Home />}
              </div>
            </p>
            <hr className="solid" />
            {/* <p>
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
                </header>
              </div>
            </p>
            <hr className="solid" /> */}
            <p>
              <label>* Profile Edit</label><br />
              {userIds.map((id) => (
                <button key={id} onClick={() => setUserId(id)}>
                  User ID {id}
                </button>
              ))}
              <h2>User ID {userId}</h2>
              <ProfileEdit userID={userId} />
            </p>
            <hr className="solid" />
            <p>
              <div className="App">
                <header><h1>Delicious Food Recipes</h1></header>
                <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
                <RecipeCreate createRecipe={createRecipe} />
              </div>
            </p>
            <hr className="solid" />
            <p>
              <h3>* Posts List</h3>
              <PostCreate createPost={createPost} />
              <PostListNestedRoute posts={posts} deletePost={deletePost} />
            </p>
            <p><CoinTossCounter /></p>
            <p>
              <SubscriberForm createSubscriber={createSubscriber}/>
              <SubscriberList subscribers={subscribers} deleteSubscriber={deleteSubscriber} />
            </p>
            <p>
              <WelcomeBack name="Joe" />
              <WelcomeBack name="Anna" />
              <WelcomeBack />
            </p>
            
            <p>
              <Greeting />
              <Greeting language="es" />
              <Greeting language="fr" />
            </p>
            <p><Notifications notifications={notifications} /></p>
            <p><Clock /></p>
            <p>
              {/* <GroceryList items={groceryItems} /> */}
              <GroceryList items={groceryList} />
            </p>
            <p><Roster rosters={roster} detailed={true} /></p>
            <p><Quote quote={quote} /></p>
            <p><UseStateHook /></p>
            <p><CountButton /></p>
            <p><DogForm /></p>
            <p><RSVPForm /></p>
            <p>
              <label>* To Do List</label><br />
              <ToDoList />
            </p>
            <hr className="solid" />
            <Footer name="Valentine's Day" day="14" month="February"/>
          </Route>
          {/* <Route path="/user/:userId">
            <UserProfile />
          </Route> */}
          {/* <Route exact={true} path="/about"> */}
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users/:userId">
            <User />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    );
  // return null;
}

export default App;