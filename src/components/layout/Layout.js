import { Button } from '../shared';
import styled from "styled-components";

export const Layout = ({children, onUpdate}) => {
    return (
        <section style={ {margin: 16} }>
            <WrapperLayout role="main" aria-label="layout">
    {/*             <input type="text" id="buscar" />
                <label for="buscar">Nome usuário</label> */}
                <div>
                    <input aria-label="username" type="text"/>
                    <Button kind="blue" onClick={onUpdate}>buscar</Button>
                </div>
            </WrapperLayout>
            {children}
        </section>
    );
};

const WrapperLayout = styled.header`
{
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;
  }

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }
`;