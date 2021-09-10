import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});
export const usersAPI = {
  getUsers: async () => {
    const response = await instance.get(`posts/`);
    return response.data;
  }
};
export const profileAPI = {
  async getProfileData(userId) {
    const response = await instance.get(`posts/${userId}`);
    return response.data;
  },
  pushProfile (post) {
        return instance.put(`posts/`, { post: post });
    },
  getStatus(userId) {
    return instance.get(`posts/${userId}/comments`);
  }
};


const instanceAuth = axios.create({
  baseURL: "https://reqres.in/api/"
});

export const authAPI = {
  me() {
    return instanceAuth.get(`api/login`);
  },
  async login(email, password) {
    const response = await instanceAuth.post(`api/login`, {
      email,
      password
    });
    return response.data;
  },
  async logout() {
    const response = await instanceAuth.delete(`api/login`);
    return response.data;
  }
};
