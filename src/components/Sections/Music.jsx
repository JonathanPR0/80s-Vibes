/* eslint-disable react/prop-types */
export const Music = ({ img, name, releaseYear, singer, description }) => {
  return (
    <div className='flex flex-col w-full h-full bg-primaryColors-100 rounded-md border border-complementaryColors-300 p-4 text-secondaryColors-500'>
      <img src={img} alt={name} className='rounded-md' />
      <h3 className='font-bold text-left mt-3 text-xl'>{name} {releaseYear ? `(${releaseYear})` : ""}</h3>
      <span className='text-xs text-left'>{singer}</span>
      <p className='text-left mt-4'>{description}</p>
    </div>
  )
}
