import { Link } from 'react-router-dom'
import Title from './title'

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <Title title="JULIE" tag="h3" className="font-bold text-2xl" />
      </Link>
    </div>
  )
}
