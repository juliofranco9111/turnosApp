

export const daysInMonth = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    console.log(daysInMonth)
    let daysMonthWithDate = [];
    for (let i = 1; i <= daysInMonth; i++) {
      // Ojo, hay que restarle 1 para obtener el mes correcto
      //let index = new Date(year, currentMonth, i).getDay();
      daysMonthWithDate.push(i);
      
    }
    if(month === 1){
      
    }
    return daysMonthWithDate;
  };

  