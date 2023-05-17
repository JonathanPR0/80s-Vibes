import React from 'react'

export const Movie = ({ img, gender, name, director, cast, description }) => {
  return (
    <div className='flex flex-col w-full h-full rounded-md text-secondaryColors-500'>
      <img src={img} alt={name} className='rounded-md mb-3' />
      <h3 className='font-bold text-left text-md mb-2'>Gênero: {gender}</h3>
      <span className='text-xs text-left'><strong className='font-bold'>Diretor:</strong> {director}</span>
      <span className='text-xs text-left'><strong className='font-bold'>Elenco:</strong>{cast}</span>
      <p className='text-left mt-4'>{description}</p>
    </div>
  )
}
