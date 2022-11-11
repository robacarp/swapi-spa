'use strict';

import SWAPIBackedComponent from "./swapi-backed-component.js"
import Builder from "../lib/builder.js"
import SWAPI from "../swapi.js"

export default class Dossier extends SWAPIBackedComponent {
  constructor() {
    super(import.meta.url)
    this.attachHTML('dossier-profile.html')
  }

  lookup () {
    SWAPI.getPerson(this.id).then(data => this.data = data)
  }

  fill () {
    if (! this.domAttached) return
    this.Q("#name").innerText = this.apiData.name
    this.Q("#height").innerText = this.apiData.height
    this.Q("#mass").innerText = this.apiData.mass
    this.Q("#hair-color").innerText = this.apiData.hair_color
    this.Q("#birth-year").innerText = this.apiData.birth_year

    this.apiData.films.map(historical_event_url => {
      this.Q("#events").appendChild(
        Builder.tag('historical-event')
      ).setAttribute('id', historical_event_url.split('/')[5])
    })

    this.apiData.vehicles.map(vehicle_url => {
      this.Q("#vehicles").appendChild(
        Builder.tag('vehicle-artifact')
      ).setAttribute('id', vehicle_url.split('/')[5])
    })
  }
}

customElements.define('dossier-profile', Dossier)
