import {MagnifyingGlassPlus} from 'phosphor-react';
import {AddComment, AddCommentItem, ButtonBanner,} from './create-banner.styles';
import {BannerModal} from '../../api/banner-modal';

export const CreateBanner = () => {


  return (
    <>
      <AddComment>
        <AddCommentItem>
          <h3>Não encontrou seu duo?</h3>
          <p>Publique um anúncio para encontrar novos players!</p>
        </AddCommentItem>

        <ButtonBanner >
          <MagnifyingGlassPlus size={20} />
          Add Comment
        </ButtonBanner>
      </AddComment>

    </>
  );
};
