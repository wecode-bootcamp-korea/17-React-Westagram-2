import React, { Component } from 'react';
import './Footer.scss'

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      footerData: []
    }
  }
  componentDidMount() {
    fetch('/data_saranglee/footerData.json')
    .then(res => res.json())
    .then(res => {
      this.setState({
        footerData: res
      })
    })
  }

  render() {
    const { footerData } = this.state;
    return (
      <footer className='footer'>
        {footerData.map(footer => {
          return (
            <span key={footer.id}>
              <a href={footer.link}>{footer.text}</a>
              <span> • </span>
            </span>
            )}
          )
        }
        <button className="language">언어</button>
        <p className="copyright">© 2021 INSTAGRAM FROM FACEBOOK</p>
      </footer>
    );
  }
}

export default Footer;