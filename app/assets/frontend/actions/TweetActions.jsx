import API from "../API";

export default {
  getAllTweets() {
    console.log(1, "Tweet Actions")
    API.getAllTweets();
  },
  sendTweet(body) {
    console.log(6, "Send Tweet To API Utility")
    API.createTweet(body);
  }

}