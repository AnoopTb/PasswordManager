import {Component} from 'react'

import './index.css'

class ContentListPage extends Component {
  onClickToDelete = () => {
    const {onDeleteButton, eachContent} = this.props
    const {id} = eachContent

    onDeleteButton(id)
  }

  passwordTab = () => {
    const {eachContent, showButtonToEachList} = this.props
    const {password} = eachContent

    const starImage = (
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        className="password-star-img"
        alt="stars"
      />
    )

    return (
      <p className="each-list-password">
        {showButtonToEachList ? password : starImage}
      </p>
    )
  }

  onSelectColor = () => {
    const colorArray = [
      '#454f84',
      '#0b69ff',
      '#94a3b8',
      '#b6c3ca',
      '#7683cb',
      '#f59e0b',
      '#10b981',
      '#f97316',
      '#14b8a6',
      '#b91c1c',
    ]

    const selectColor =
      colorArray[Math.floor(Math.random() * colorArray.length)]

    return selectColor
  }

  render() {
    const {eachContent} = this.props
    const {webAddress, userName} = eachContent

    const slicedName = userName.slice(0, 1).toUpperCase()

    return (
      <li className="each-list-card-container">
        <div
          style={{backgroundColor: this.onSelectColor()}}
          className="sliced-heading-name-container"
        >
          <h1 className="sliced-heading-name">{slicedName}</h1>
        </div>
        <div className="each-list-details-container">
          <p className="each-list-web-address">{webAddress}</p>
          <p className="each-list-user-name">{userName}</p>
          {this.passwordTab()}
        </div>
        <button
          className="delete-button"
          type="button"
          onClick={this.onClickToDelete}
          testId="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            className="delete-button-img"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}

export default ContentListPage
