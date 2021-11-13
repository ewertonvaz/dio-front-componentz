import './App.css';
import React, { useState } from "react";
import { Layout, Profile, Repository } from "../../components/";
import NoSearch from "../../components/shared/no-search";
import useGithub from "../../hooks/github-hooks";

function App() {
  const { githubState, getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  //const { githubState } = useGithub();

  return (
    <Layout onUpdate={submitGetUser} onChange={(event) => setUsernameForSearch(event.target.value)}>
      { (githubState.hasUser || githubState.mockData) ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              {/* <Profile user={user} />
              <Repository repos={repos} starred={starred} /> */}
              <Profile />
              <Repository />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;