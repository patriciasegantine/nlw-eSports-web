import styled from 'styled-components';
import {Button} from '../../global.styles';
import * as Dialog from '@radix-ui/react-dialog';

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
    inset: 0;
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

export const ButtonBanner = styled(Dialog.Trigger)`
  color: ${({theme}) => theme.white};
  background: ${({theme}) => theme['violet-500']};
  
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


