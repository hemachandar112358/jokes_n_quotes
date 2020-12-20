import "./App.css";
import React from "react";
import Jokes from "./Jokes";
import Navbar from "./Navbar";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jq: "",
      author: "",
      status: "",
      error: "",
    };
    this.quoteClick = this.quoteClick.bind(this);
    this.tvQuoteClick = this.tvQuoteClick.bind(this);
    this.jokesClick = this.jokesClick.bind(this);
    this.norrisJokesClick = this.norrisJokesClick.bind(this);
  }
  norrisJokesClick = () => {
    this.setState({
      jq: "",
      author: "",
      status: "",
      error: "",
    });
    axios
      .get("https://api.icndb.com/jokes/random")
      .then(
        this.setState({
          status: "Loading...",
        })
      )
      .then((response) => {
        this.setState({
          jq: response.data.value.joke,
          author: "",
          status: "",
        });
      })
      .catch((error) => {
        this.setState({
          error: "Something is wrong",
          status: "",
        });
      });
  };
  quoteClick = () => {
    this.setState({
      jq: "",
      author: "",
      status: "",
      error: "",
    });
    axios
      .get("https://api.quotable.io/random")
      .then(
        this.setState({
          status: "Loading...",
        })
      )
      .then((response) => {
        this.setState({
          jq: response.data.content,
          author: "- " + response.data.author,
          status: "",
        });
      })
      .catch((error) => {
        this.setState({
          error: "Something is wrong",
          status: "",
        });
      });
  };
  tvQuoteClick = () => {
    this.setState({
      jq: "",
      author: "",
      status: "",
      error: "",
    });
    axios
      .get("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
      .then(
        this.setState({
          status: "Loading...",
        })
      )
      .then((response) => {
        this.setState({
          jq: response.data[0].quote,
          author: "- " + response.data[0].author,
          status: "",
        });
      })
      .catch((error) => {
        this.setState({
          error: "Something is wrong",
          status: "",
        });
      });
  };
  jokesClick = () => {
    this.setState({
      jq: "",
      author: "",
      status: "",
      error: "",
    });
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then(
        this.setState({
          status: "Loading...",
        })
      )
      .then((response) => {
        this.setState({
          jq: response.data.setup + " " + response.data.punchline,
          author: "",
          status: "",
        });
      })
      .catch((error) => {
        this.setState({
          error: "Something is wrong",
          status: "",
        });
      });
  };
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="row ">
          <div className="col-sm-4 col-md-4 col-lg-4 col-xs-4 vertical-4">
            <button
              type="button"
              className="btn btn-lg button btn-block"
              onClick={this.quoteClick}
            >
              Quote
            </button>
            <button
              type="button"
              className="btn btn-lg button btn-block"
              onClick={this.tvQuoteClick}
            >
              Tv Quote
            </button>
            <button
              type="button"
              className="btn btn-lg button btn-block"
              onClick={this.jokesClick}
            >
              Jokes
            </button>
            <button
              type="button"
              className="btn btn-lg button btn-block"
              onClick={this.norrisJokesClick}
              title="Don't you dare"
            >
              Chuck Norris Jokes
            </button>
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8 col-xs-8 vertical-8">
            <Jokes
              jq={this.state.jq}
              author={this.state.author}
              error={this.state.error}
              status={this.state.status}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
