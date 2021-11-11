import styled from 'styled-components';

export const UserData = ({user}) => {
    return(
        <DivWrapper>
            <h1 aria-label="Nome do Usuário">{user.name}</h1>
            <div>
                <h3 aria-label="username">Username:</h3><a href={user.html_url} target="_blank" rel="noreferrer">{user.login}</a>
            </div>
            <div>
                <h3 aria-label="company">Company:</h3><span>{user.company}</span>
            </div>
            <div>
                <h3 aria-label="location">Location:</h3><span>{user.location}</span>
            </div>
            <div>
                <h3 aria-label="blog">Blog:</h3><a href={user.blog} target="_blank" rel="noreferrer">{user.blog}</a>
            </div>
        </DivWrapper>
    );
}

const DivWrapper = styled.div`
 { 
    div {
        display: flex;
        align-items: center;
        margin-top: 8px;
    }
  } 
`;