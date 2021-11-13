import styled from 'styled-components';
import { StatusCount } from './StatusCount';
import { UserData } from './UserData';
import useGithub from "../../hooks/github-hooks";

export const Profile = (props) => {
    const { githubState } = useGithub();
    const user = githubState.user;
    return(
        <Card role="separator" aria-label="profile">
            <Avatar alt="Github Avatar" src={user.avatar}/>
             {/* <div style={ {display: "flex", } }> */}
                <UserGeneric>
                    <UserData user={user}/>
                    <StatusCount user={user}/>
                </UserGeneric>
        </Card>
    );
};

const Card = styled.div`
    {
        display: flex; 
        border: "solid 1px",
        border-color: 'grey',
        padding: 2
    }
`;

const Avatar = styled.img`
    {
        border-radius: 50%;
        width: 200px;
        margin: 8px;
    }
` ;

export const UserGeneric = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 8px;
    height: 200px;

    h1 {
    font-size: 32px;
    font-weight: bold;
    }

    h3 {
      margin-right: 8px;
      font-size: 18px;
      font-weight: bold;
    }

    h4 {
    font-size: 16px;
    font-weight: bold;
    }

    a {
        font-size: 18px;
        color: blue;
        font-weight: bold;
      }
`;