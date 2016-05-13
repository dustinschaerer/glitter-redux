import TweetActions from "../actions/TweetActions"

export default class TweetBox extends React.Component {
  sendTweet(event) {
    event.preventDefault();
    TweetActions.sendTweet(this.refs.tweetTextArea.value);
    this.refs.tweetTextArea.value = '';
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.sendTweet.bind(this)}>
          <div className="input-field">
            <textarea ref="tweetTextArea" id="tweet-text-area" className="materialize-textarea"/>
            <label for="tweet-text-area">Wat up?</label>
            <button className="btn right">Tweet</button>
          </div>
        </form>
      </div>
    )
  }
}