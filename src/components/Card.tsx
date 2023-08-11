import React from 'react'
import Stars from './Stars'

const Card: React.FC<ICardProps> = ({ link, count }) => {
  return (
    <div className="card">
      <img src={ link } alt="Hero" className="card__image" />
      <h2 className="card__title">Hero</h2>
      <Stars count={count} />
    </div>
  )
}

export default Card

interface ICardProps {
  link: string,
  count: number
}