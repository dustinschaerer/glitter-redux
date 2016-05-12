import TweetBox from "./components/TweetBox"
import TweetsList from "./components/TweetsList"

let mockTweets = [
  { id: 1, name: "Dusty Farlo", body: "Yo my first Glitter Tweet" },
  { id: 2, name: "Dusty Farlo", body: "Yo my second Glitter Tweet" },
  { id: 3, name: "Dusty Farlo", body: "Yo my third Glitter Tweet" }
];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweetsList: [] }
  }
  addTweet(tweetToAdd) {
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({ id: Date.now(), name: 'Guest',body: tweetToAdd})

    this.setState({ tweetsList: newTweetsList });
  }
  render () {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)} />
        <TweetsList tweets={this.state.tweetsList} />
      </div>
    );
  }
}

window.Main = Main;