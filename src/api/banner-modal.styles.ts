import styled from 'styled-components';
import {Button} from '../global.styles';

export const ModalContainer = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.44);
  z-index: 1;
  
  display: flex;
  justify-content: center;
  align-items: center;

`

export const ModalContent = styled.div`
  width: 488px;
  background: ${({theme}) => theme.purple};
  
  padding: 2rem 2.5rem;
  
  strong {
    color: ${({theme}) => theme.white};
    font-size: 2rem;
  }
`

export const FormContainer = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  
  label{
    color: ${({theme}) => theme.white};
    font-size: 1rem;
    padding-bottom: .5rem;
  }
 
  input, select {
    color: ${({theme}) => theme['zinc-500']};
    background: ${({theme}) => theme['zinc-900']};
    border: none;
    border-radius: 4px;
    padding: .750rem 1rem;
    font-size: .875rem;
    margin-bottom: 1rem;
  
  }
  
  placeholder {
    color: ${({theme}) => theme['zinc-500']};
  
  }

`


export const FormFlexContainer = styled.div`
  display: flex;
  gap: .5rem;
`
export const FormFlexItem = styled.div`
  flex: 1;
`

export const ButtonBannerModal = styled(Button)`
  color: ${({theme}) => theme.white};
  background: ${({theme}) => theme['violet-500']};
  
  &:hover {
    background: ${({theme}) => theme['violet-600']};
  }
`
export const ContainerButton = styled.div`
display: flex;
  justify-content: flex-end;
  gap: .5rem;
`

export const ButtonBannerModalCancel = styled(Button)`
  color: ${({theme}) => theme.white};
  background: ${({theme}) => theme['zinc-500']};
  
  &:hover {
    background: ${({theme}) => theme['violet-600']};
  }
`