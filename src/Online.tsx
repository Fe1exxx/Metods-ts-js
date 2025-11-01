import './index.css'

export default function Online() {

    interface User {
        id: number;
        name: string;
        isOnline: boolean;
    }

    const users: User[] = [
        { id: 1, name: "Анна", isOnline: true },
        { id: 2, name: "Борис", isOnline: false },
        { id: 3, name: "Вера", isOnline: true }
    ];


    return (
        <div className='text-center m-5'>
            <ul>
                {users.map(el => <li>{el.isOnline ? `🟢 ${el.name}` : `⚪ ${el.name}`}</li>)}
            </ul>
        </div>
    )
}