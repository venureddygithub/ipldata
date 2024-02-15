import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <div>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img src={competingTeamLogo} className="team-logo" alt="team logo" />
      <hr />
      <div>
        <p>first innings</p>
        <p>{firstInnings}</p>
        <p>second innings</p>
        <p>{secondInnings}</p>
        <p>man of the match</p>
        <p>{manOfTheMatch}</p>
        <p>umpire</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
