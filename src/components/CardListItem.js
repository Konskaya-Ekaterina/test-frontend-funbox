import './CardListItem.scss'
import changeWordForm from '../utils/changeWordForm'
import {useState} from "react";

function CardListItem({cardData, selectCard}) {
  const initialFooter = <div className='card__footer'><span className='footer__text'>Чего сидишь? Порадуй котэ, <strong
      onClick={handleBuyBtnClick}>купи</strong><b>.</b></span></div>
  const initialHeader = <div className='card__header'><span className='header__text'>Сказочное заморское яство</span>
  </div>

  const [initialRender, setInitialRender] = useState(true)
  const [disableSelectHover, setDisableSelectHover] = useState(true)

  const [modificator, setModificator] = useState('')
  const [footer, setFooter] = useState(initialFooter)
  const [header, setHeader] = useState(initialHeader)

  if (initialRender) {
    changeCardStyle()
    setInitialRender(false)
  }

  function changeCardStyle() {
    if (cardData.disabled) {
      setModificator('_disabled')
      setFooter(<div className='card__footer'><span
          className={'footer__text footer__text_disabled'}>Печалька, с {cardData.taste} закончился.</span></div>)
      setHeader(initialHeader)
      setDisableSelectHover(true)
    } else if (!cardData.disabled && cardData.selected) {
      setModificator('_selected')
      setFooter(<div className='card__footer'><span className='footer__text'>{cardData.description}</span></div>)
    } else {
      setModificator('')
      setFooter(initialFooter)
      setHeader(initialHeader)
      setDisableSelectHover(true)
    }
  }

  const presentPhrase = () => {
    const mouseWord = `мыш${changeWordForm(cardData.mouses, ['ь', 'и', 'ей'])}`
    const mouseNumber = cardData.mouses > 1 ? `${cardData.mouses} ` : ''
    return (<div className='card__present'><b>{mouseNumber}</b>{mouseWord} в подарок</div>)
  }

  function select() {
    selectCard(cardData.id)
    changeCardStyle()
  }

  function handleBuyBtnClick() {
    setDisableSelectHover(false)
    select()
  }

  function changeHeaderHover() {
    if (disableSelectHover) return
    setModificator('_selected_hover')
    setHeader(<div className='card__header'><span className='header__text_hover'>Котэ не одобряет?</span></div>)
  }

  function changeHeaderUnhover() {
    if (!cardData.selected || cardData.disabled) return
    setModificator('_selected')
    setHeader(initialHeader)
    setDisableSelectHover(false)
  }

  return (
      <div className='card'>
        <div className={`card__box${modificator ? ' card__box' + modificator : ''}`} onClick={select}
             onMouseOver={changeHeaderHover} onMouseLeave={changeHeaderUnhover}>
          <div className='card__content'>
            {header}
            <div className='card__title'>Нямушка</div>
            <div className='card__taste'>с {cardData.taste}</div>
            <div className='card__portion'><b>{cardData.portions}</b> порций</div>
            {presentPhrase()}
            {cardData.portions >= 100 && <div className='card__customer'>заказчик доволен</div>}
          </div>
          <div className={`card__weight${modificator ? ' card__weight' + modificator : ''}`}>
            <div className='card__num'>{cardData.weight}</div>
            <div className='card__measure'>кг</div>
          </div>
        </div>
        {footer}
      </div>
  );
}

export default CardListItem;
