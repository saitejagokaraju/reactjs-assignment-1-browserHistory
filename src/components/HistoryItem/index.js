import './index.css'

const HistoryItem = props => {
  const {eachItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item-container">
      <div className="time-logo-container">
        <p className="time">{timeAccessed}</p>
        <div className="logo-title-container">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="title-domain-container">
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onClickDelete}
        data-testid="delete"
        className="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
