import React from 'react'
import Icon from '../Icon'

// TODO Make the social media link data come in from GraphQL if needed elsewhere
const Footer = () => (
  <footer className="site-footer">
    <div className="footer-col">
      <h3>Any Questions?</h3>
      <form
        className="contact-form"
        name="contact"
      >
        <fieldset>
          <label>
            <span>Name</span>
            <input type="text" className="name" name="name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" className="email" name="email" required />
          </label>
          <label>
            <span>Message</span>
            <textarea className="message" name="message" required />
          </label>
        </fieldset>
        <fieldset>
          <button type="submit">Send</button>
        </fieldset>
      </form>
    </div>
    <div className="footer-col">
      <h3>Find us Online</h3>
      <div className="social-media wrap">
        <div className="social-media-andy">
          <h6>Connect with Andy</h6>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/andy_lincoln"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="instagram" />
                <span>@andy_lincoln</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/andylincoln11"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="facebook" />
                <span> facebook.com/andylincoln11</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="social-media-sarah">
          <h6>Connect with Sarah</h6>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/sarahcroughwell"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="instagram" />
                <span>@sarahcroughwell</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/sarah.croughwell"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="facebook" />
                <span>facebook.com/sarah.croughwell</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span className="colophon">Created by Sarah and Andy with love</span>
    </div>
  </footer>
)

export default Footer
