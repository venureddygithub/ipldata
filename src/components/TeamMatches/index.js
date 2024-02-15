// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchData: {}}

  componentDidMount() {
    this.getTeamMatchData()
  }

  getLatestDetails = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchData = await response.json()
    console.log(fetchData)
    const updatedData = {
      bannerUrl: fetchData.team_banner_url,
      latestMatch: this.getLatestDetails(fetchData.latest_match_details),
      recentMatch: fetchData.recent_matches.map(each =>
        this.getLatestDetails(each),
      ),
    }
    this.setState({teamMatchData: updatedData})
  }

  displayTeamData = () => {
    const {teamMatchData} = this.state
    console.log(teamMatchData)
    const {bannerUrl, latestMatch} = teamMatchData
    return (
      <div className="team-match-bg-container">
        <img src={bannerUrl} className="banner" alt="team banner" />
        <LatestMatch latestMatchData={latestMatch} />
      </div>
    )
  }

  render() {
    return <div>{this.displayTeamData()}</div>
  }
}

export default TeamMatches
