import './App.css';
import PageContent from './components/PageContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Antic Slab', serif;
  }

  img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        height: auto;
    }

  h1 {
    font-family: 'Staatliches', cursive;
    font-size: 55px;
  }

  h2 {
    font-family: 'Staatliches', cursive;
    font-size: 35px;
  }

  h3 {
    font-family: 'Staatliches', cursive;
      font-size: 25px;
  }

  #styled-navbar {
    overflow: hidden;
    padding: 15px;
    height: 100px;
    background-color: black;
    border-bottom: 10px solid black;
    position: sticky;
  }

  #logo {
    float: left;
    color: white;
    font-family: 'Staatliches', cursive;
    font-size: 40px;
  }
  
  #styled-navbar .links-left {
    font-family: 'Staatliches', cursive;
    color: white;
    border: 1px solid grey;
    padding: 10px;
    margin: 15px;
    text-align: center;
    text-decoration: none;
    font-size: 25px;
    transition-duration: 0.4s;
    cursor: pointer;
    float: left;
    display: block;

    &:hover {
      background-color: grey;
      color: black;
    }
  }

  #styled-navbar .links-right {
    font-family: 'Staatliches', cursive;
    color: white;
    border: 1px solid grey;
    padding: 10px;
    margin: 15px;
    text-align: center;
    text-decoration: none;
    font-size: 25px;
    transition-duration: 0.4s;
    cursor: pointer;
    float: right;
    display: block;

    &:hover {
      background-color: grey;
      color: black;
    }
  }

  /* #styled-navbar .logged-in {
    font-family: 'Staatliches', cursive;
    color: black;
    padding: 10px;
    margin: 15px;
    text-align: center;
    text-decoration: none;
    font-size: 25px;
    transition-duration: 0.4s;
    cursor: pointer;
    float: right;
    display: block;
    border-radius: 5px;
  } */

  .button {
    font-family: 'Staatliches', cursive;
    color: white;
    background-color: black;
    padding: 10px;
    border: 1px solid black;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 25px;
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 0px;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  }

  #update {
    border: 3px solid #03989e;
    padding: 10px;
  }

  .col {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <PageContent/>
    </div>
  );
}

export default App;
