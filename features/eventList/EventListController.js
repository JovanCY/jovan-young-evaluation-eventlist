class EventListController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
    this.#model.initializeEvents();
    const events = this.#model.getEvents()

    events.map((event) => {
      console.log("hey")
      this.#view.addNewRow(event)
    })
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
    this.setupFormCancelButton();
    this.setupFormAddButton();
  }

  toggleAddEvent() {
    const { addEventButton } = this.#view;

    addEventButton.addEventListener("click", (event) => {
      event.preventDefault();
      //if successful
      this.#view.showAddRow();
    });
  }

  setupFormAddButton() {
    this.#view.formAddButton.addEventListener("click", async (event) => {
      event.preventDefault();

      //input validation
      const input = this.#view.getFormFields();
      console.log(input);
      const { eventName, startDate, endDate } = input;
      if (!!eventName && !!startDate && !!endDate) {
        console.log("addEvent called");
        //push event to API and model
        const event = await this.#model.addEvent(input);
        console.log("==event ", event);
        this.#view.addNewRow(event);
        this.#view.clearForm();
      }
    });
  }
  setupFormCancelButton() {
    this.#view.formCancelButton.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("cancelEvent called");
      this.#view.hideAddRow();
      this.#view.clearForm();
    });
  }
}
