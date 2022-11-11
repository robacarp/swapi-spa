export default class SWAPI {
  static baseUrl = "https://swapi.dev/api"

  static async getPeople() {
    return await fetch(`${SWAPI.baseUrl}/people/`).then(response => response.json());
  }

  static async getPerson(id) {
    return await fetch(`${SWAPI.baseUrl}/people/${id}/`).then(response => response.json());
  }

  static async peopleSearch(query) {
    return await fetch(`${SWAPI.baseUrl}/people/?search=${query}`).then(response => response.json());
  }
}
