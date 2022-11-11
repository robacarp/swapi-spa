'use strict';

import Builder from './lib/builder.js'
import SWAPI from './swapi.js'
import DossierProfile from './components/dossier-profile.js'
import HistoricalEvent from './components/historical-event.js'
import VehicleArtifact from './components/vehicle-artifact.js'

// handle the search button
document.querySelector('#swapi-form').addEventListener('submit', e => {
  e.preventDefault()
  const searchInput = e.target.querySelector('#search')
  searchDatabase(searchInput.value)
})

// run a search and populate the page
async function searchDatabase(query) {
  const people = await SWAPI.peopleSearch(query)
                            .then(response => response.results)

  document.querySelectorAll('dossier-profile').forEach(dossier => dossier.remove())

  people.forEach(person => {
    const profile = document.querySelector('body').appendChild(Builder.tag('dossier-profile'))
    profile.setAttribute('id', person.url.split('/')[5])
  })
}
