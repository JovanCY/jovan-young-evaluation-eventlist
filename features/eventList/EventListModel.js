class EventListModel {
   #events;

   constructor() {
      this.#events = [];
   }

   async initializeEvents() {
      const events = await getEvents() 

      console.log(events)
   }

   getEvents() {
      return [...this.#events]
   }

   async addEvent(event) {
      await postEvents(event)
   }

   async deleteEvent(id) {

   }

}