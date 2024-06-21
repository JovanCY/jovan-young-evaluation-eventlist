class EventListController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.#model.initializeEvents();
    this.setupEvents();
    this.populateEvents();
  }

  populateEvents() {
    this.#model.getEvents().map((event) => {
      this.#view.addNewRow(event);
    });
  }

  setupEvents() {
    this.toggleAddEvent();
    this.setUpCancelEvent();
  }

  toggleAddEvent() {
    const { addEventButton } = this.#view;

    addEventButton.addEventListener("click", (event) => {
      event.preventDefault();
      //if successful
      this.#view.showAddRow();
    });
  }

  setupAddRowButton() {
   this.#view.addButton.addEventListener("click", (event)=> {
      event.preventDefault();
      //input validation 

      
   })
  }
  setUpCancelEvent() {
    this.#view.cancelButton.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("cancelEvent called");
      this.#view.hideAddRow();
      this.#view.clearForm()
    });

  }
}
