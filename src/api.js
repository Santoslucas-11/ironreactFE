import axios from "axios";
const BASE_URL = `${process.env.REACT_APP_PROJECTS_API}/api`;
export const getAllProjects = () => {
    return axios.get(`${BASE_URL}/projects`);
};
export const getProject = (id) => {
    return axios.get(`${BASE_URL}/project/${id}`);
};
export const deleteProject = (id) => {
    return axios.delete(`${BASE_URL}/project/${id}`);
};
export const uploadImage =(uploadData) => {
    return axios.post(`${BASE_URL}/upload`, uploadData);
};
export const login = (user) => {
    console.log('Im running')
    return axios.post(`${BASE_URL}/login`, user);
};
export const signup = (user) => {
    return axios.post(`${BASE_URL}/signup`, user);
};
export const verify = (token) => {
    return axios.get(`${BASE_URL}/verify`, {
    headers: { Authorization: `Bearer ${token}`}
    });
};

export const addComment = (comment) => {
    return axios.post(`${BASE_URL}/comments`, comment, {
        headers: {Authorization: `Bearer ${localStorage.getItem("authToken")}`}
    });
};
export const getAllComments = () => {
    return axios.get(`${BASE_URL}/comments`);
};