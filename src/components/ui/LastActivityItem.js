import React from 'react'

export const LastActivityItem = ({ msg='Turno atendido', date='yesterday', name='Gloria Roberston'  }) => {
    return (
        <div class='shadow-lg pt-4 ml-2 mr-2 rounded-lg'>
        <a href='gooe' class='block bg-gray-50 py-3 pb-4 dark:bg-gray-800'>
          <div class='px-4 py-2 flex  justify-between'>
            <span class='text-sm font-semibold text-gray-800 dark:text-gray-200'>
              {name}
            </span>
            <div class='flex'>
              <span class='px-4 text-sm font-semibold text-gray-500 dark:text-gray-400'>
               
                { date }
              </span>
              <img
                class='h-6 w-6 rounded-full object-cover'
                src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=144&amp;q=80'
                alt=''
              />
            </div>
          </div>
          <p class='px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-500'>
            {msg}
          </p>
        </a>
      </div>
    )
}
