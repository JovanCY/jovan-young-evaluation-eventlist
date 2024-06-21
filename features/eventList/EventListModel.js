class EventListModel {
  #events;

  constructor() {
    this.#events = [];
  }

  async initializeEvents() {
    this.#events = await eventAPI.fetchEventsAPI();
    console.log(this.#events);
  }

  getEvents() {
    return [...this.#events];
  }

  async addEvent(event) {
    //returns id of event if success, -1 if not
    this.#events.push(event);
    console.log("addEvent");
    
  }

deleteEvent(id) {
    this.#events = this.#events.filter((event) => event.id !== id);
  }


}
