import HistoricalEvent from './historical-event.js';

describe("historical-event", () => {
  it("registers the historical-event tag", () => {
    expect(customElements.get("historical-event")).toBeDefined()
  });

  it("runs a lookup against the api", async () => {
    const historicalEvent = new HistoricalEvent()
    historicalEvent.id = 1
    await historicalEvent.lookup()
    expect(historicalEvent.apiData).toBeDefined()
    expect(historicalEvent.apiData.title).toBe("A New Hope")
  })

  it("renders the api data", async () => {
    const historicalEvent = new HistoricalEvent()
    historicalEvent.id = 1
    await historicalEvent.lookup()
    historicalEvent.waitForReady(() => {
      historicalEvent.fill()
      expect(historicalEvent.querySelector('#name').innerHTML)
        .toContain("A New Hope")
    })
  })
})
