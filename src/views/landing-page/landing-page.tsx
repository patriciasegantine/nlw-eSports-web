import {AddComment, AddCommentItem, Button, DuoSpan, LandingPageContainer, LandingPageContent, SliderContainer, SliderItem, SliderItemLegend} from './landing-page.styles';
import eSportsImage from '../../assets/logo-esports.svg'
import {ContainerLogo, GlobalContainer} from '../../global.styles';
import {MagnifyingGlassPlus} from 'phosphor-react'

export const LandingPage = () => {
  return (
    <LandingPageContainer>
      <GlobalContainer>
        <ContainerLogo>
          <img src={eSportsImage} alt=""/>
        </ContainerLogo>

        <LandingPageContent>
          <h1>Seu <DuoSpan>duo</DuoSpan> está aqui.</h1>
        </LandingPageContent>

        <SliderContainer>

          <SliderItem>
            <a href="">
              <img src="/game1.svg" alt=""/>
            </a>

            <SliderItemLegend>
              <h4>League of Legends</h4>
              <p>4 Anúncios</p>
            </SliderItemLegend>
          </SliderItem>

          <SliderItem>
            <a href="">
              <img src="/game2.svg" alt=""/>
            </a>

            <SliderItemLegend>
              <h4>Dota 2</h4>
              <p>4 Anúncios</p>
            </SliderItemLegend>
          </SliderItem>

          <SliderItem>
            <a href="">
              <img src="/game3.svg" alt=""/>
            </a>

            <SliderItemLegend>
              <h4>Counter Strike</h4>
              <p>4 Anúncios</p>
            </SliderItemLegend>
          </SliderItem>

          <SliderItem>
            <a href="">
              <img src="/game4.svg" alt=""/>
            </a>

            <SliderItemLegend>
              <h4>Apex Legends</h4>
              <p>4 Anúncios</p>
            </SliderItemLegend>
          </SliderItem>


            <SliderItem>
              <a href="">
                <img src="/game5.svg" alt=""/>
              </a>

              <SliderItemLegend>
                <h4>Fortnite</h4>
                <p>4 Anúncios</p>
              </SliderItemLegend>
            </SliderItem>

            <SliderItem>
              <a href="">
                <img src="/game6.svg" alt=""/>
              </a>

              <SliderItemLegend>
                <h4>World of Warcraft</h4>
                <p>4 Anúncios</p>
              </SliderItemLegend>
            </SliderItem>
        </SliderContainer>

        <AddComment>
          <AddCommentItem>
            <h3>Não encontrou seu duo?</h3>
            <p>Publique um anúncio para encontrar novos players!</p>
          </AddCommentItem>

          <Button>
            <MagnifyingGlassPlus size={20} />
            Add Comment
          </Button>
        </AddComment>

      </GlobalContainer>
    </LandingPageContainer>
  )
}