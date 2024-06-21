class EventListModel {
   #events;

   constructor() {
      this.#events = [];
   }

   async initializeEvents() {
      const events = await fetchEventsAPI() 

      console.log(events)
   }

   getEvents() {
      return [...this.#events]
   }

   async addEvent(event) { //returns id of event if success, -1 if not
      
      console.log("addEvent")
      const response = await postEventAPI(event)
      return response
   }

   async deleteEvent(id) {

   }

}