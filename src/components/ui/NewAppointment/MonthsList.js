import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../../../actions/appointment';
import { showList } from '../../../actions/ui';
import { MONTHS } from '../../../helpers/datePickerLocale';

export const MonthsList = () => {
  const dispatch = useDispatch();
  const thisMonth = new Date().getMonth();
  const { month: currentMonth } = useSelector((state) => state.appointment);

  const handleSelectMonth = (month) => {
    dispatch(setDate({ month }));
    dispatch(showList(true));
  };

  return (
    <>
      <div
        className='-inset-0 w-full h-full align-middle object-center grid w-full h-44 shadow-xl rounded grid-cols-3 gap-2
      animate__animated animate__fadeIn animate__faster absolute
      bg-gray-50 dark:bg-gray-900'>
        {MONTHS.map(
          (month, i) =>
            i >= thisMonth && (
              <button
                key={month}
                onClick={() => handleSelectMonth(i)}
                className={
                  i === currentMonth
                    ? 'grid-col p-2 cursor-pointer w-full focus:text-indigo-400 focus:outline-none dark:text-indigo-300'
                    : 'grid-col p-2 cursor-pointer w-full focus:text-indigo-400 focus:outline-none dark:text-gray-200'
                }>
                {month.slice(0, 3)}.
              </button>
            )
        )}
      </div>
    </>
  );
};
