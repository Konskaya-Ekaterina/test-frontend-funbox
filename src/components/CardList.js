import './CardList.scss'
import CardListItem from "./CardListItem";

function CardList() {
  const cardsData = [
    {
      id: 0,
      taste: 'фуа-гра',
      portions: 10,
      weight: '0,5',
      mouses: 1,
      description: 'Печень утки разварная с артишоками.',
      selected: false,
      disabled: false
    },
    {
      id: 1,
      taste: 'рыбой',
      portions: 40,
      weight: '2',
      mouses: 2,
      description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      selected: false,
      disabled: false
    },
    {
      id: 2,
      taste: 'курой',
      portions: 100,
      weight: '5',
      mouses: 5,
      description: 'Филе из цыплят с трюфелями в бульоне.',
      selected: false,
      disabled: true
    }
  ]

  function selectCard(id) {
    const selectedCardId = cardsData.findIndex(card => card.id === id)
    const selectedCard = cardsData[selectedCardId]
    if (!selectedCard.disabled) {
      selectedCard.selected = !selectedCard.selected
    }
  }

  const cards = cardsData.map((card, index) => {
    return <CardListItem cardData={card} selectCard={selectCard} key={index}/>
  })

  return (
      <div className='card-list'>
        {cards}
      </div>
  );
}

export default CardList;
