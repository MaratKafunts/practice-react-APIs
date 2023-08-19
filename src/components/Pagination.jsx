import React from 'react'

const Pagination = ({setSettingReq, settingReg}) => {

const limitedes = [5,10,15,20,50]



  return (
        <select onChange={(e)=>setSettingReq({...settingReg,limit:e.target.selectedOptions[0].value})} className='menu'>
            {
                limitedes.map((limitedBtn)=>{
                    if(settingReg.limit == limitedBtn){
                        return <option selected key={limitedBtn}>{limitedBtn}</option>
                    }
                    return <option key={limitedBtn}>{limitedBtn}</option>
                })
            }
        </select>
  )
}

export default Pagination

/*

    На сайт где наша верстка постов - добавить пагинацию
    реализовать на сайте выпадающие меню с цифрами - 5,10,15,20 
    я при выборе нового числа из выпадающего меню буду получать то количество постов сколько я выбрал
    СЛЕДОВАТЕЛЬНО
    и количество кнопок тоже будет меняться
    +
    кнопки отображатся следующим образом
    к примеру если их 10

    1 [2] 3 >
    < 4 5 [6] >
    < 8 9 [10]

    активная страничка как-оо выделяется

*/