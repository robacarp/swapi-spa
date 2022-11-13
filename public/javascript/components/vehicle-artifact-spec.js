import VehicleArtifact from './vehicle-artifact.js';

describe("vehicle artifact", () => {
  it("registers the vehicle-artifact tag", () => {
    expect(customElements.get("vehicle-artifact")).toBeDefined()
  });

  it("runs a lookup against the api", async () => {
    const vehicleArtifact = new VehicleArtifact()
    vehicleArtifact.id = 14
    await vehicleArtifact.lookup()
    expect(vehicleArtifact.apiData).toBeDefined()
    console.log(vehicleArtifact.apiData)
    expect(vehicleArtifact.apiData.name).toBe("Snowspeeder")
  })

  it("renders the api data", async () => {
    const vehicleArtifact = new VehicleArtifact()
    vehicleArtifact.id = 14
    await vehicleArtifact.lookup()
    vehicleArtifact.waitForReady(() => {
      vehicleArtifact.fill()
      expect(vehicleArtifact.querySelector('#name').innerHTML)
        .toContain("Snowspeeder")
    })
  })
})
