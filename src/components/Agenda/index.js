import React, { Component } from 'react'
import AgendaItem from '../AgendaItem'
import DateMarker from '../DateMarker'
import auditorium from '../../static/auditorium@2x.jpg'
import beer from '../../static/beer@2x.jpg'
import music_hall2 from '../../static/music_hall2@2x.jpg'
import moment from 'moment'
import twix from 'twix' // needed for tweening

const drinks_at_old_court = {
  graphic: {
    type: 'image',
    image: {
      src: beer,
      alt: '',
    },
  },
  name: 'Casual Drinks',
  startTime: moment('2018-11-23 9:00 PM'),
  endTime: moment('2018-11-23 11:00 PM'),
  location: 'Old Court Pub',
  description:
    'If you’re arriving the Friday before we would love to say hello.',
  cta_link: {
    type: 'Directions',
    url: '#',
  },
}

const ceremony = {
  graphic: {
    type: 'image',
    image: {
      src: music_hall2,
      alt: 'The organ and ceiling of the Methuen Memorial Music Hall',
    },
  },
  name: 'Ceremony',
  startTime: moment('2018-11-24 2:00 PM'),
  endTime: moment('2018-11-24 4:00 PM'),
  location: 'Methuen Memorial Music Hall',
  description:
    'If you’re arriving the Friday before we would love to say hello.',
  cta_link: {
    type: 'Directions',
    url: '#',
  },
}

const cocktail_hour = {
  name: 'Cocktail Hour',
  graphic: {
    type: 'icon',
    icon: 'clinking',
  },
  startTime: moment('2018-11-24 5:00 PM'),
  endTime: moment('2018-11-24 6:00 PM'),
  location: 'Lowell Memorial Auditorium',
  description:
    'Join us in the lobby of the LMA to enjoy some hors d’oeuvre before kicking off the party.',
}

const reception = {
  name: 'Reception',
  graphic: {
    type: 'image',
    image: {
      src: auditorium,
      alt: '',
    },
  },
  startTime: moment('2018-11-24 6:00 PM'),
  endTime: moment('2018-11-24 11:00 PM'),
  location: 'Lowell Memorial Auditorium',
  description: '',
}

const brunch = {
  name: 'Sunday Brunch',
  graphic: {
    type: 'icon',
    icon: 'brunch',
  },
  startTime: moment('2018-11-25 10:00 AM'),
  endTime: moment('2018-11-25 2:00 PM'),
  location: "The Lincoln's",
  description: '',
  cta_link: {
    type: 'RSVP',
    url: '#',
  },
}
export default class Agenda extends Component {
  render() {
    return (
      <section className="agenda">
        <div className="agenda-items">
          <DateMarker date={drinks_at_old_court.startTime}>
            <AgendaItem event={drinks_at_old_court} />
          </DateMarker>
          <DateMarker date={ceremony.startTime}>
            <AgendaItem event={ceremony} />
            <AgendaItem event={cocktail_hour} />
            <AgendaItem event={reception} />
          </DateMarker>
          <DateMarker date={brunch.startTime}>
            <AgendaItem event={brunch} />
          </DateMarker>
          {this.props.children}
        </div>
      </section>
    )
  }
}

React.propTypes = {}