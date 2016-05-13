import AppDispatcher  from "../dispatcher";
import ActionTypes from "../constants";

export default {
  receivedTweets(rawTweets) {
    console.log(3, "Server Actions Recevied Tweet Actions")
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets: rawTweets
    })
  },
  receivedOneTweet(rawTweet) {
    console.log(8, "Server Actions Recevied One Tweet Action")
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet: rawTweet
    })
  }
}