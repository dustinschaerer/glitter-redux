import API from "../API";

export default {
  getAllUsers() {
    console.log(1, "User Actions")
    API.getAllUsers();
  },
  followUser(userId) {
    API.followUser(userId);
  }
}