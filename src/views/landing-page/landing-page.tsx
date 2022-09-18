import {DuoSpan, LandingPageContainer, LandingPageContent, SliderContainer,} from './landing-page.styles';
import eSportsImage from '../../assets/logo-esports.svg';
import {ContainerLogo, GlobalContainer} from '../../global.styles';
import {LinkGames} from '../../components/link-games/link-games';
import {CreateBanner} from '../../components/create-banner/create-banner';
import {useEffect, useState} from 'react';
import {BannerModal} from '../../api/banner-modal';
import * as Dialog from '@radix-ui/react-dialog';

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

export const LandingPage = () => {

  const [addComment, setAddComment] = useState(false);
  const [games, setGames] = useState<Game[]>([]);

  const handleOnAddComment = () => {
    setAddComment(!addComment);
  }

  const handleClick = () => {
    console.log('oi')
  }



  useEffect(() => {
    fetch('http://localhost:3003/games/')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (
    <LandingPageContainer>
      <GlobalContainer>
        <ContainerLogo>
          <img src={eSportsImage} alt="" />
        </ContainerLogo>

        <LandingPageContent>
          <h1>
            Seu <DuoSpan>duo</DuoSpan> está aqui.
          </h1>
        </LandingPageContent>

        <SliderContainer>
          {games.map(game => {
            return (
              <LinkGames
                key={game.id}
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}/>
            )
          })}
        </SliderContainer>


        <Dialog.Root>
          <CreateBanner />

          <Dialog.Portal>
             <BannerModal/>
          </Dialog.Portal>
        </Dialog.Root>

        {/* {addComment && */}
        {/*   <BannerModal */}
        {/*   />} */}

      </GlobalContainer>
    </LandingPageContainer>
  );
};
