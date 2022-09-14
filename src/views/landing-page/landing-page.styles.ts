import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  
  
  
  width: auto;
  //height: 100vh;

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
  text-fill-color: transparent;
`

export const SliderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-top: 4rem;
`

export const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  
  border-radius: 10px;
  
  overflow: hidden;

  p {
  font-size: 0.8rem;  
}
`

export const SliderItemLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: .2rem;
  
  padding: 4rem 1rem .5rem;
  border-radius: 0px 0px 8px 8px;
  
  color: ${({theme}) => theme['zinc-400']};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);
  
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

export const AddComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  padding: 1rem;
  
  background: ${({theme}) => theme.purple};
  border-radius: 8px;
  
  margin: 3rem 2rem;
  position: relative;
  
  &:before {
    position: absolute;
    content: '';
    display: block;
    background: linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin-top: -5px;
    border-radius: 15px;    
  }
  `
export const AddCommentItem = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 900;
    color: ${({theme}) => theme.white};
    line-height: 1.5;
  }
  
  p{
    font-size: 1rem;
    color: ${({theme}) => theme['zinc-400']};
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  
  color: ${({theme}) => theme.white};
  background: ${({theme}) => theme['violet-500']};
  
  padding: .8rem 1.2rem ;
  border: none;
  border-radius: 8px;
  
  cursor: pointer;
  
  &:hover {
    background: ${({theme}) => theme['violet-600']};
  
  }
`