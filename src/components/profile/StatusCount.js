import styled from 'styled-components';

export const StatusCount = ({user}) => {
    return (
      <Wrapper>
        {/* <div style={ {display: 'flex', flexDirection: "row", justifyContent: "space-between", textAlign: 'center'} }> */}
            <div>
                <h4 aria-label="followers">Followers</h4><span>{user.followers}</span>
            </div>
            <div>
                <h4 aria-label="following">Followings</h4><span>{user.following}</span>
            </div>
            <div>
                <h4 aria-label="gists">Gists</h4><span>{user.public_gists}</span>
            </div>
            <div>
                <h4 aria-label="repos">Repos</h4><span>{user.public_repos}</span>
            </div>
        {/* </div> */}
      </Wrapper>
    );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;