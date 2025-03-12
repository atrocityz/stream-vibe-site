import './MovieBannerCard.scss'
import Button from '@/components/Button'
import { Picture } from 'minista'
import classNames from 'classnames'

const MovieBannerCard = (props) => {
  const {
    title,
    titleId,
    TitleTag = 'h2',
    description,
    imgSrc,
    isSmallPaddingY = false,
  } = props

  return (
    <div className="movie-banner-card">
      <Picture
        src={imgSrc}
        className="movie-banner-card__image"
        formats={['webp', 'inherit']}
      />
      <div
        className={classNames('movie-banner-card__inner', {
          'movie-banner-card__inner--small-padding-y': isSmallPaddingY,
        })}
      >
        <div className="movie-banner-card__body">
          <TitleTag
            className="movie-banner-card__title title title--h3"
            id={titleId}
          >
            {title}
          </TitleTag>
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
