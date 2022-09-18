import {MagnifyingGlassPlus} from 'phosphor-react';
import {AddComment, AddCommentItem, ButtonBanner,} from './create-banner.styles';

// @ts-ignore
export const CreateBanner = ({onClick}) => {


  return (
    <>
      <AddComment>
        <AddCommentItem>
          <h3>Não encontrou seu duo?</h3>
          <p>Publique um anúncio para encontrar novos players!</p>
        </AddCommentItem>

        <ButtonBanner onClick={onClick}>
          <MagnifyingGlassPlus size={20} />
          Add Comment
        </ButtonBanner>
      </AddComment>

    </>
  );
};
