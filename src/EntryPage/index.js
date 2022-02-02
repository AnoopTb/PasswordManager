import {Component} from 'react'

import {v4} from 'uuid'

import ContentListPage from '../ContentListPage'

import './index.css'

class EntryPage extends Component {
  state = {
    arrayOfListedElement: [],
    webAddress: '',
    userName: '',
    password: '',
    searchInput: '',
    showButton: false,
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddingList = event => {
    event.preventDefault()
    const {webAddress, userName, password} = this.state

    const newContent = {
      id: v4(),
      webAddress,
      userName,
      password,
    }

    this.setState(prevState => ({
      arrayOfListedElement: [...prevState.arrayOfListedElement, newContent],
      webAddress: '',
      userName: '',
      password: '',
    }))
  }

  onDeleteButton = id => {
    const {arrayOfListedElement} = this.state
    const filteredList = arrayOfListedElement.filter(each => each.id !== id)

    this.setState({arrayOfListedElement: filteredList})
  }

  onCheckBoxClicked = () => {
    this.setState(prevState => ({showButton: !prevState.showButton}))
  }

  onPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onUserNameInput = event => {
    this.setState({userName: event.target.value})
  }

  onWebInput = event => {
    this.setState({webAddress: event.target.value})
  }

  render() {
    const {
      arrayOfListedElement,
      webAddress,
      userName,
      password,
      showButton,
      searchInput,
    } = this.state

    const noOfPassword = arrayOfListedElement.length

    const filteredList = arrayOfListedElement.filter(each =>
      each.webAddress.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="password-manage-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="password-manager-bg-img"
          />
        </div>
        <div className="bg-intake-card-container">
          <div className="bg-form-container">
            <form className="form-container" onSubmit={this.onAddingList}>
              <h1 className="add-page-heading">Add New Password</h1>
              <div className="each-input-container">
                <div className="input-side-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-side-image"
                  />
                </div>
                <input
                  className="intake"
                  value={webAddress}
                  type="text"
                  onChange={this.onWebInput}
                  placeholder="Enter Website"
                />
              </div>
              <div className="each-input-container">
                <div className="input-side-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-side-image"
                  />
                </div>
                <input
                  className="intake"
                  value={userName}
                  type="text"
                  onChange={this.onUserNameInput}
                  placeholder="Enter Username"
                />
              </div>

              <div className="each-input-container">
                <div className="input-side-image-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-side-image"
                  />
                </div>
                <input
                  className="intake"
                  value={password}
                  type="password"
                  onChange={this.onPasswordInput}
                  placeholder="Enter password"
                />
              </div>
              <div className="button-container">
                <button className="add-button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="password-manager-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
              className="input-container-right-img"
            />
          </div>
        </div>

        <div className="bg-list-card-container">
          <div className="list-container-nav-bar">
            <div>
              <h1 className="no-of-password-heading">
                Your Passwords{' '}
                <p className="no-of-password-heading-span">{noOfPassword}</p>
              </h1>
            </div>
            <div className="search-input-container">
              <div className="search-input-img-bg">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  alt="search"
                  className="search-input-img"
                />
              </div>
              <input
                type="search"
                className="search-input"
                placeholder="search"
                onChange={this.onSearchInput}
              />
            </div>
          </div>
          <hr className="navbar-line" />

          <div className="show-password-bg-container">
            <input
              id="ListCheckBox"
              type="checkbox"
              onChange={this.onCheckBoxClicked}
            />
            <label htmlFor="ListCheckBox" className="show-password-heading">
              Show passwords
            </label>
          </div>
          <ul className="unordered-list-container">
            {filteredList.length !== 0 ? (
              filteredList.map(eachContent => (
                <ContentListPage
                  eachContent={eachContent}
                  onDeleteButton={this.onDeleteButton}
                  key={eachContent.id}
                  showButtonToEachList={showButton}
                />
              ))
            ) : (
              <div className="no-password-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  className="no-password-img"
                  alt="no passwords"
                />
                <p className="show-password-heading">No Passwords</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default EntryPage
