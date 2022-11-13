import Dossier from './dossier-profile.js';

describe("dossier", () => {
  it("registers the dossier-profile tag", () => {
    expect(customElements.get("dossier-profile")).toBeDefined()
  });

  it("runs a lookup against the api", async () => {
    const dossier = new Dossier()
    dossier.id = 1
    await dossier.lookup()
    expect(dossier.apiData).toBeDefined()
    expect(dossier.apiData.name).toBe("Luke Skywalker")
  })

  it("renders the api data", async () => {
    const dossier = new Dossier()
    dossier.id = 1
    await dossier.lookup()
    dossier.waitForReady(() => {
      dossier.fill()
      expect(dossier.querySelector('#name').innerHTML)
        .toContain("Luke Skywalker")
    })
  })
})
