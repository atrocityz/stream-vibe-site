import './TabsNavigation.scss'
import getIdFromTitle from '@/utils/getIdFromTitle'
import classNames from 'classnames'
import getTabsElementsIdsFromTitle from '@/components/Tabs/utils/getTabsElementsIdsFromTitle'

const TabsNavigation = (props) => {
  const { className, id, title, items = [] } = props

  const titleFormatted = getIdFromTitle(title)
  const titleId = `${titleFormatted}-title`

  return (
    <div
      className={classNames(className, 'tabs-navigation')}
      id={id}
      role="tablist"
      aria-labelledby={titleId}
      data-js-tabs-navigation=""
    >
      <h3 className="visually-hidden" id={titleId}>
        {title}
      </h3>
      {items.map(({ isActive, title }, index) => {
        const { buttonId, contentId } = getTabsElementsIdsFromTitle(title)

        return (
          <div
            className={classNames('tabs-navigation__button', {
              'is-active': isActive,
            })}
            id={buttonId}
            aria-controls={contentId}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            data-js-tabs-button=""
            key={index}
          >
            {title}
          </div>
        )
      })}
    </div>
  )
}

export default TabsNavigation
