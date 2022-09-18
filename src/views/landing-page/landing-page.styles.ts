import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  
  width: auto;

`

export const LandingPageContent= styled.main`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin-top: 1.250rem;
  
  
  h1 {
    color: ${({theme}) => theme.white};
    font-weight: 900;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 4rem;
  }
`

export const DuoSpan = styled.span`
  background: linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const SliderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-top: 4rem;
`

