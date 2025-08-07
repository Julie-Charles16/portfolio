import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <img src="./img/Me.png" alt="mon avatar" className="w-[65px] h-[65px]" />
      </Link>
    </div>
  )
}
