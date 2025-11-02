import { useState } from "react";

type User = 'all' | 'online' | 'ofline';

type Status = {
    id: number
    user: string
    age: number
    status: string
}

export default function UseStateFunc() {
    const [online, setOnline] = useState<User>('all');

    const bd: Status[] = [
        { id: 1, user: 'Max', age: 25, status: 'online' },
        { id: 2, user: 'Oleg', age: 21, status: 'ofline' },
        { id: 3, user: 'Kosta', age: 28, status: 'online' }
    ]

    const filterOnline = bd.filter(el => {
        if (online === 'all') return true;
        if (online === 'online') return el.status === 'online';
        if (online === 'ofline') return el.status === 'ofline';
    })


    return (
        <div className="w-300 m-auto">
            <button className="m-3 border cursor-pointer hover:bg-gray-600 p-1" onClick={() => setOnline('all')}>Все</button>
            <button className="m-3 border cursor-pointer hover:bg-gray-600 p-1" onClick={() => setOnline('online')}>Онлайн</button>
            <button className="m-3 border cursor-pointer hover:bg-gray-600 p-1" onClick={() => setOnline('ofline')}>Офлайн</button>


            {filterOnline.map(el => (
                <div key={el.id} className="border mb-2">
                    <h1 className="m-2">Пользователь: {el.user}</h1>
                    <p className="m-2">Возвраст: {el.age}</p>
                    <p className="m-2">Статус: {el.status}</p>
                </div>
            ))}
        </div>
    )
}