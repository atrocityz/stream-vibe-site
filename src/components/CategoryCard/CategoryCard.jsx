import './CategoryCard.scss'
import { Image, Picture } from 'minista'
import Icon from '@/components/Icon'

const CategoryCard = (props) => {
  const { title, images = [] } = props

  return (
    <a
      className="category-card"
      href="/movies"
    >
      <div className="category-card__images">
        {images.map((imgSrc, index) => (
          <Picture
            className="caregory-card__image"
            src={imgSrc}
            key={index}
            formats={['webp', 'avif', 'inherit']}
          />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">{title}</h3>
        <Icon
          className="category-card__icon"
          name="arrow-right"
        />
      </div>
    </a>
  )
}

export default CategoryCard
