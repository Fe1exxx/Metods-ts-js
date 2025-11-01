import './index.css'
import Massiv from './MassivMap';
import MassivAnother from './MassivMapAnother';
import Online from './Online';
import Card from './Card';
import DateList from './DateList';
import {Price} from './Price';

export default function App() {
  return (
    <>
      <Massiv />
      <MassivAnother />
      <Online />
      <Card />
      <DateList />
      <p className='text-center mt-20'>{Price(10)}</p>
    </>
  )
}