// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamCard} = props
  const {id, name, teamImageUrl} = teamCard
  return (
    <li className="list-team-container">
      <Link to={`/test-match/${id}`} className="link">
        <div className="image-container">
          <img src={teamImageUrl} className="image" alt={name} />
          <div>
            <h1 className="name">{name}</h1>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
