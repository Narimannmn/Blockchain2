import {axiosInstance} from "../api/api";

export const userService = {
  createUser: async (userData) => {
    try {
      const response = await axiosInstance.post('/registration', userData);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error.response.data;
    }
  },

  login: async (loginData) => {
    try {
      const response = await axiosInstance.post('/login', loginData);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error.response.data;
    }
  },

  sendFriendRequest: async (request) => {
    try {
      const response = await axiosInstance.post('/sendFriend', request);
      return response.data;
    } catch (error) {
      console.error('Error sending friend request:', error);
      throw error.response.data;
    }
  },

  receiveFriendRequest: async (request) => {
    try {
      const response = await axiosInstance.post('/recieveFriend', request);
      return response.data;
    } catch (error) {
      console.error('Error receiving friend request:', error);
      throw error.response.data;
    }
  },

  createPost: async (postData) => {
    try {
      const response = await axiosInstance.post('/post', postData);
      return response.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error.response.data;
    }
  },
};
