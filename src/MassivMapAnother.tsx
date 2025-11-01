import './index.css'

export default function Massiv() {

  const names = ["Анна", "Борис", "Вера", "Глеб"];

  return (
    <div className='text-center m-5'>
      {names.map(el => <h1>Привет, {el}!</h1>)}      
    </div>
  )
}