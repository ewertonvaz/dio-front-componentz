import React, { createContext, useCallback, useState } from "react";
import { user, repos, starred } from '../mock/data';
import api from "../services/api";

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({ children, mockData }) => {
  const mockState = {
    hasUser: true,
    loading: false,
    user,
    repositories : repos,
    starred
  };

  const initialState = {
    mockData : mockData,
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  }

  const [githubState, setGithubState] = useState(initialState);

  const getUser = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    console.log('State mockdata ?', githubState.mockData);

    if (!githubState.mockData) {
      console.log('Dados da API');
      api
        .get(`users/${username}`)
        .then(({ data }) => {
          setGithubState((prevState) => ({
            ...prevState,
            hasUser: true,
            user: {
              id: data.id,
              avatar: data.avatar_url,
              login: data.login,
              name: data.name,
              html_url: data.html_url,
              blog: data.blog,
              company: data.company,
              location: data.location,
              followers: data.followers,
              following: data.following,
              public_gists: data.public_gists,
              public_repos: data.public_repos,
            },
          }));
        })
        .finally(() => {
          setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
          }));
        });
      } else {
        console.log('Dados mockados');
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
          user: mockState.user,
        }));
      }  
  };

  const getUserRepos = (username) => {
    if (!githubState.mockData) {
      api.get(`users/${username}/repos`).then(({ data }) => {
        //console.log("data: " + JSON.stringify(data));
        setGithubState((prevState) => ({
          ...prevState,
          repositories: data,
        }));
      });
    } else {
      console.log('Dados mockados');
        setGithubState((prevState) => ({
          ...prevState,
          repositories: mockState.repositories,
        }));
    }
  };

  const getUserStarred = (username) => {
    if (!githubState.mockData) {
      api.get(`users/${username}/starred`).then(({ data }) => {
        //console.log("data: " + JSON.stringify(data));
        setGithubState((prevState) => ({
          ...prevState,
          starred: data,
        }));
      });
    } else {
      console.log('Dados mockados');
        setGithubState((prevState) => ({
          ...prevState,
          starred: mockState.starred,
        }));
    }  
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
