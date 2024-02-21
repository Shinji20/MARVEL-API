import { Link } from 'react-router-dom';

export function Btnback() {
  return (
    <div className='justify-center items-center h-16 max-w-full bg-gray-950 relative'>
      <Link to='/'>
        <h1 className='text-center flex-auto text-white h-24 text-4xl pt-2 font-bold'>
          MARVEL
        </h1>
      </Link>
    </div>
  );
}
