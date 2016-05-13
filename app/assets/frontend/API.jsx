import ServerActions from "./actions/ServerActions";

export default {
  getAllTweets() {
    console.log(2, "API Actions")
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
    .error(error => console.log(error))
  },
  createTweet(body) {
    console.log(7, "Server Actions post to create tweet")
    $.post("/tweets", { body })
    .success( rawTweet => ServerActions.receivedOneTweet(rawTweet) )
    .error(error => console.log(error))
  }
}