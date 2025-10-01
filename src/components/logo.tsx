import { Link } from 'react-router-dom'
import Title from './title'

export default function Logo() {
  return (
    <div>
      <Link to="/">
        {/* <img src="./img/Me.png" alt="mon avatar" className="w-[65px] h-[65px]" /> */}
        <Title title="JULIE" tag="h3" className='font-bold italic text-2xl' />
      </Link>
    </div>
  )
}
