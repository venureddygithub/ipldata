// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {iplTeamData: [], isLoading: true}

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({iplTeamData: updatedData, isLoading: false})
  }

  teamCardData = () => {
    const {iplTeamData} = this.state
    return (
      <ul className="team-card-bg-container">
        {iplTeamData.map(eachTeam => (
          <TeamCard teamCard={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  spinnerLoader = () => (
    <Loader type="TailSpin" color="#ffffff" height={50} width={50} />
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="ipl-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              className="ipl-logo"
              alt="ipl logo"
            />
            <div className="heading-container">
              <h1 className="ipl-heading">IPL Dashboard</h1>
            </div>
          </div>
          {isLoading ? this.spinnerLoader() : this.teamCardData()}
        </div>
      </div>
    )
  }
}

export default Home
