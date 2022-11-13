"use strict";

import SWAPIBackedComponent from "./swapi-backed-component.js"
import SWAPI from "../swapi.js"

export default class HistoricalEvent extends SWAPIBackedComponent {
  constructor() {
    super(import.meta.url)
    this.attachHTML('historical-event.html')
  }

  async lookup () {
    if (this.id)
      return SWAPI.getFilm(this.id).then(data => this.data = data)
    else
      return Promise.resolve()
  }


  fill () {
    if (! this.domAttached) return
    this.Q('#name').textContent = this.apiData.title
  }
}

customElements.define('historical-event', HistoricalEvent)
