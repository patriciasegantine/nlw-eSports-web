import styled, {keyframes} from 'styled-components';
import {Button} from '../global.styles';
import * as Dialog from '@radix-ui/react-dialog';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});


export const ModalContainer = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
  
  display: flex;
  justify-content: center;
  align-items: center;
  animation: \`${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)\`

`

export const ModalContent = styled(Dialog.Content)`
  width: 500px;
  background: ${({theme}) => theme.purple};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  
  border-radius: 6px;
  
  padding: 2rem 2.5rem;
`

export const ModalDescription = styled(Dialog.Description) `

`

export const ModalTitle = styled(Dialog.Title)`
 
    color: ${({theme}) => theme.white};
    font-size: 2rem;
  
`

export const ButtonBannerModalCancel = styled(Dialog.Close)`
  color: ${({theme}) => theme.white};
  background: ${({theme}) => theme['zinc-500']};
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  
  padding: .6rem 1rem ;
  border: none;
  border-radius: 6px;
  
  cursor: pointer;
  
  &:hover {
    background: ${({theme}) => theme['violet-600']};
  }
`

export const FormContainer = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`

export const LabelForm = styled.label`
  color: ${({theme}) => theme.white};
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: .5rem;
`

export const SelectForm = styled.select`
  color: ${({theme}) => theme['zinc-500']};
  background: ${({theme}) => theme['zinc-900']};
  border: none;
  border-radius: 4px;
  padding: .750rem 1rem;
  font-size: .875rem;
  margin-bottom: 1rem;
    margin-top: .5rem;
  
  
  placeholder {
    color: ${({theme}) => theme['zinc-500']};
    
  }
`

export const InputForm = styled.input`
  color: ${({theme}) => theme['zinc-500']};
  background: ${({theme}) => theme['zinc-900']};
  border: none;
  border-radius: 4px;
  padding: .750rem 1rem;
  font-size: .875rem;
  margin-bottom: 1rem;
  margin-top: .5rem;
  
  placeholder {
    color: ${({theme}) => theme['zinc-500']};
  }  
`

export const FormFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: .5rem;
`

export const FormFlexItem = styled.div`
  flex: 1;
`
export const FormFlexItemOther = styled.div`
  width: 150px;
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
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

`

export const WeekDaysContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  button {
    width: 35px;
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 1rem;
    background: ${({theme}) => theme['zinc-900']};
    color: ${({theme}) => theme.white};
    cursor: pointer;
    
    &:focus{
      background: ${({theme}) => theme['violet-500']};
    }
  }
`

