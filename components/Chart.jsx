import { useEffect, useState } from 'react';
import data from '../data/data.json'
const Chart = () => {

    const [percentage,setPercentage] = useState([]);
    const [mostAmount,setMostAmount] = useState(0)

    useEffect(()=>{
        const mostAmount = Math.max(...data.map(item=>item.amount))
        setMostAmount(mostAmount)
        setPercentage(data.map(item=>item.amount/mostAmount)) 
    },[])

    return (
        <div className='flex justify-between text-brown items-end pt-10'>
            {data.map((item,idx)=>{
                return (
                <div key={idx} className='flex flex-col items-center rounded'>
                    <div className={`group overflow-visible w-6 rounded-md cursor-pointer hover:brightness-110 ${item.amount===mostAmount?"bg-cyan":"bg-soft-red "}`} style={{height: percentage[idx]*100 + 'px'}}>
                        <span className='bg-dark-brown text-pale-orange p-1 rounded text-xs absolute -translate-y-7 -translate-x-3 scale-0 group-hover:scale-100 duration-100'>
                            {`$${item.amount}`}
                        </span>
                    </div>
                    <p>{item.day}</p>
                </div>
                )
            })}
        </div>
    )
}
export default Chart;