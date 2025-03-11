import './MovieBannerCard.scss'
import { Image } from 'minista'
import Button from '@/components/Button'

const MovieBannerCard = (props) => {
  const { title, description, imgSrc } = props

  return (
    <div className="movie-banner-card">
      <Image src={imgSrc} className="movie-banner-card__image" />
      <div className="movie-banner-card__inner">
        <div className="movie-banner-card__body">
          <h2 className="movie-banner-card__title title title--h3">{title}</h2>
          <div className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <footer className="movie-banner-card__footer">
          <Button
            className="movie-banner-card__play-button"
            label="Play Now"
            isLabelVisible
            iconName="play"
            hasFillIcon
          />
          <div className="movie-banner-card__actions">
            <Button label="Add to playlist" iconName="plus" mode="black-06" />
            <Button label="Like" iconName="like" mode="black-06" />
            <Button label="Mute" iconName="volume" mode="black-06" />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MovieBannerCard
