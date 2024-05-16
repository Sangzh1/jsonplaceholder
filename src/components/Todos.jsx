import React from 'react'

function Todos({ data }) {
    console.log(data);
  return (
    <div>
        <ul className='grid grid-cols-3 ml-8 gap-5'>
            {data.map((item) => {
                return (
                    <li key={item.id} className='mb-5 text-left shadow-2xl p-6'>
                        <h1 className='text-2xl mb-3'>{item.id}</h1>
                        <p className="text-lg mb-3 capitalize">{item.title}</p>
                        <button className='btn btn-primary'>Completed: {String(item.completed)}</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Todos