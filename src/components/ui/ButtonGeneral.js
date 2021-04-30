import React from 'react';

export const ButtonGeneral = (props) => {
  
  const { fn, title, text='gray-100', bg, disabled } = props;

  return (
    <>
       <button 
       onClick={ fn }
       disabled={ disabled }
       className={`group w-full flex justify-center py-2 px-4 border 
                            border-transparent text-sm font-medium rounded-md 
                            text-${text} bg-${bg}-600 hover:bg-${bg}-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-200`}>
               
        <span>{ title }</span>
      </button> 
    </>


  );
};

/* { title= '', text='white', bg='indigo', fn } */



