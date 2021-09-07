import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});
export const usersAPI = {
  getUsers: async () => {
    const response = await instance.get(`posts/`);
    return response.data;
  },
  getProfileData(userId) {
    console.warn("Obsolete method.Please profileAPI object.");
    return profileAPI.getProfileData(userId);
  },
  getCommentsData(userId) {
    console.warn("Obsolete method.Please commentsAPI object.");
    return commentsAPI.getCommentsData(userId);
  }
};
export const profileAPI = {
  async getProfileData(userId) {
    const response = await instance.get(`posts/${userId}`);
    return response.data;
  },
  getStatus(userId) {
    return instance.get(`posts/${userId}/comments`);
  }
};
export const commentsAPI = {
  async getCommentsData(userId) {
    const response = await instance.get(`posts/${userId}/comments`);
    return response.data;
  }
};
