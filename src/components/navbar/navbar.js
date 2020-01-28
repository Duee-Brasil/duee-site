import React from "react"
import { Link } from "gatsby"
import './navbar.scss'

// import MenuIcon from '../menuIcon/menuIcon'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      dropdownActive: true
    };
    this._pageScroller = null;
  }

  componentWillMount() {
    this.setState({dropdownActive : false});
  }

  activeDropdown = () => {
    if(!this.state.dropdownActive) {
      this.setState({dropdownActive : true});
    }

    if(this.state.dropdownActive) {
      this.setState({dropdownActive : false});
    }
  };

  render() {
    return <nav id="navbar">
      {/*{this.state.dropdownActive ? null : <i className="fas fa-bars icon-menu" onClick={this.activeDropdown}></i>}*/}
      <div id="topbar">
        <div className="logo">
          <Link to={"/"}><img src={this.props.urlImg} alt="Duee Brasil"/></Link>
        </div>
        <div className="menuButton">
          <i className={this.state.dropdownActive ? "fas fa-times" : "fas fa-bars" } role="button" onClick={() => this.setState({ dropdownActive: !this.state.dropdownActive })} onKeyDown={this.activeDropdown} />
        </div>
      </div>
      {this.state.dropdownActive ?
      <div id="dropdown">
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/leoes">Somos Leões</Link>
            </li>
            {/* <li>
              <Link to="/fazemos">Nosso Trabalho</Link>
            </li> */}
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://portfolio.duee.com.br">Portfólio</a>
            </li>
            <li>
              <a href="https://dueetando.com.br" target="_blank" rel="noopener noreferrer">Dueetando</a>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://dueedrive.duee.com.br">Área do cliente</a>
            </li>
          </ul>
        </div>
      </div> : null}
    </nav>
  }
}