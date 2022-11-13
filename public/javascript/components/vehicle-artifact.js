"use strict";

import SWAPIBackedComponent from "./swapi-backed-component.js"
import SWAPI from "../swapi.js"

export default class VehicleArtifact extends SWAPIBackedComponent {
  constructor() {
    super(import.meta.url)
    this.attachHTML('vehicle-artifact.html')
  }

  async lookup () {
    if (this.id)
      return SWAPI.getVehicle(this.id).then(data => this.data = data)
    else
      return Promise.resolve()
  }

  fill () {
    if (! this.domAttached) return
    this.Q('#name').textContent = this.apiData.name
  }
}

customElements.define('vehicle-artifact', VehicleArtifact)
