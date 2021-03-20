import React from 'react';
import '../CSS/Hamburger.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

class SlideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <div>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          right
          disableAutoFocus
          width={'300px'}>
          <Link
            to='/dash'
            onClick={() => this.closeMenu()}
            className='hover-tag'
            style={dashboard}>
            Rama Pharamacy
          </Link>
          <div style={listStyle1} className='listItems'>
            <div className='ham-up'>
              <Link
                to='/'
                onClick={() => this.closeMenu()}
                className='hover-tag'
                style={aTag}>
                Past Prescriptions
              </Link>
              <Link
                to='/register'
                onClick={() => this.closeMenu()}
                className='hover-tag'
                style={aTag}>
                Register
              </Link>
            </div>

            <div className='ham-down'>
              <div style={underline}></div>
              <Link
                to='/about'
                onClick={() => this.closeMenu()}
                className='hoverTag'
                style={aTag}>
                About
              </Link>
              <Link
                to='/contact-us'
                onClick={() => this.closeMenu()}
                className='hoverTag'
                style={aTag}>
                Contact Us
              </Link>
            </div>
          </div>
        </Menu>
        {/* <CustomIcon onClick={() => this.toggleMenu()} /> */}
      </div>
    );
  }
}

export default SlideMenu;

const listStyle1 = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  marginTop: '10px',
};

const dashboard = {
  textDecoration: 'none',
  color: 'white',
  textTransform: 'uppercase',
  borderBottom: '2.5px solid #ff4b2b',
  paddingBottom: '20px',
  textAlign: 'center',
};
const underline = {
  width: 'inherit',
  height: '2.5px',
  backgroundColor: '#ff4b2b',
  marginTop: '15px',
};

const aTag = {
  textDecoration: 'none',
  color: 'white',
  textTransform: 'uppercase',
  margin: '10px 0',
  fontSize: '23px',
};
