import styled from 'styled-components';

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