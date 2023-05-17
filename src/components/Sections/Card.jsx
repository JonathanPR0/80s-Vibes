import React from 'react';

const Card = ({ body, children, cols }) => {
  return (
    <div className="flex justify-center flex-col w-full p-6 rounded-md border border-complementaryColors-300 gap-4">
      <h3 className="text-2xl text-secondaryColors-500 font-bold">
        {body.title}
      </h3>
      {body.content}
      <span className={`grid grid-cols-${cols} items-center gap-6 `}>
        {children ? children : null}
      </span>
    </div>
  );
};

export default Card;
