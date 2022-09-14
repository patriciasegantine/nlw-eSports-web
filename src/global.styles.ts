
import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
    font-family: ${({theme}) => theme.font}, sans-serif;
    }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px transparent;
    }

  body {
    background: url(${({theme}) => theme.backgroundImg}) no-repeat center center;
    background-size: cover;
    color: ${({theme}) => theme['zinc-400']};
    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
    }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    }
`

export const GlobalContainer = styled.main`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  
  max-width: 1100px;
  margin:  3rem auto;
`
export const ContainerLogo = styled.div`
`