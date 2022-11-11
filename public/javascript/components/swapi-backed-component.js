"use strict";

import BaseComponent from "../lib/base-component.js"

export default class SWAPIBackedComponent extends BaseComponent {
  constructor(componentPath="/") {
    super(componentPath)
    this.apiData = {}
  }

  // automatically repopulate the component when the api data changes
  set data (data) {
    this.apiData = data
    this.fill()
  }

  // fill the component with data from this.apiData
  fill () { }

  // fetch data from the api and save it in this.data
  lookup () { }

  // fetch data and populate when the component is ready
  readyCallback () {
    this.id = this.getAttribute('id')
    this.lookup()
  }
}
