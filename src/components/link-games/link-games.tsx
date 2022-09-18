import {SliderItem, SliderItemLegend} from './link-games.styles';

interface GameBannerProps {
  bannerUrl: string,
  title: string,
  adsCount: number
}

export const LinkGames = (props: GameBannerProps) => {
  return (
    <SliderItem>
      <a href="src/components/link-games/link-games">
        <img src={props.bannerUrl} alt="" />
      </a>

      <SliderItemLegend>
        <h4>{props.title}</h4>
        <p>{props.adsCount} Ad(s)</p>
      </SliderItemLegend>
    </SliderItem>

  )

}