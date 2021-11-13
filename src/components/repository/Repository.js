import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import RepositoryItem from '../shared/RepositoryItem';
import useGithub from "../../hooks/github-hooks";

export const Repository = (props) => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const repos = githubState.repositories;
    const starred =  githubState.starred;
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

    useEffect(() => {
      if (githubState.user.login || githubState.mockData) {
        getUserRepos(githubState.user.login);
        getUserStarred(githubState.user.login);
      }
      setHasUserForSearchrepos(githubState.repositories);
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login]);
  
    return(
        <MyTabs>
         <MyTabList aria-label="repository">
           <MyTab>Repositories</MyTab>
           <MyTab>Starred</MyTab>
         </MyTabList>
     
         <MyTabPanel>
            <ListItem>
                {repos.map((item) => (
                    <RepositoryItem
                        key={item.id}
                        name={item.name}
                        linkToRepo={item.full_name}
                        fullName={item.full_name}
                    />
                ))}
            </ListItem>
         </MyTabPanel>
         <MyTabPanel>
             <ListItem>
                {starred.map((item) => (
                    <RepositoryItem
                        key={item.id}
                        name={item.name}
                        linkToRepo={item.full_name}
                        fullName={item.full_name}
                    />
                ))}
            </ListItem>
         </MyTabPanel>
       </MyTabs>
    );
}

const MyTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

const MyTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const MyTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin: 8px;

  &:focus {
    outline: none;
  }

  &.react-tabs__tab--selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

const MyTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.react-tabs__tab-panel--selected {
    display: block;
  }
`;

const ListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;