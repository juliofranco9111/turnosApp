import React from 'react';

export const ButtonGeneral = (props) => {
  
  const { fn = () =>{}, title='notitle', text='gray-100', bg, disabled, loading = false } = props;

  return (
    <>
       <button 
       onClick={ fn }
       disabled={ disabled }
       className={`group w-full flex justify-center py-2 px-4 border 
                            border-transparent text-sm font-medium rounded-md 
                            text-${text} bg-${bg}-400 hover:bg-${bg}-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:text-gray-200`}>
               
        {
          !loading ? (<span>{ title }</span>):(
            <>            
          <span className='animate__animated animate__fadeInUp animate__faster'>
          <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 animate-spin'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                />
            </svg>
          </span>
          </>
          )
          }

      </button> 
    </>


  );
};

/* { title= '', text='white', bg='indigo', fn } */



