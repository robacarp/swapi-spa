export default class SWAPI {
  static baseUrl = "https://swapi.dev/api"

  static async getPeople() {
    return await SWAPI.instance().fetchCached(`${SWAPI.baseUrl}/people/`)
  }

  static async getPerson(id) {
    return await SWAPI.instance().fetchCached(`${SWAPI.baseUrl}/people/${id}/`)
  }

  static async getFilm(id) {
    return await SWAPI.instance().fetchCached(`${SWAPI.baseUrl}/films/${id}/`)
  }

  static async peopleSearch(query) {
    return await SWAPI.instance().fetchCached(`${SWAPI.baseUrl}/people/?search=${query}`)
  }

  static async getVehicle(id) {
    return await SWAPI.instance().fetchCached(`${SWAPI.baseUrl}/vehicles/${id}/`)
  }

  static _instance = null

  static instance() {
    if (SWAPI._instance == null) {
      SWAPI._instance = new SWAPI()
    }
    return SWAPI._instance
  }

  constructor() {
    this.cache = {}
  }

  async fetchCached(url) {
    if (this.cache[url] == null) {
      const promise = fetch(url).then(response => response.json())
      this.cache[url] = promise
      return this.cache[url] = await promise
    } else if (this.cache[url] instanceof Promise) {
      return await this.cache[url]
    } else {
      return this.cache[url]
    }
  }
}
