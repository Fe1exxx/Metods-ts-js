import './index.css'

export default function MassivAnother() {

    interface User {
        id: number;
        name: string;
    }

    const users: User[] = [
        { id: 1, name: 'bob' },
        { id: 2, name: 'Lov' }
    ]

    return (
        <>
            <ul className='text-center'>
                {users.map(el => <li>{el.name}</li>)}
            </ul>
        </>
    )
}