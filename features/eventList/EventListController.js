class EventListController {
  #model;
  #view;

constructor(model, view) {
    this.#model = model;
    this.#view = view;
    
    const events = this.#model.getEvents()
    
    this.populateEvents();
    this.setupEvents();
  }

  async populateEvents() {
    await this.#model.initializeEvents();

    this.#model.getEvents().map((event) => {
      this.#view.addNewRow(event);
    });
  }

  setupEvents() {
    this.toggleAddEvent();
    this.setupFormCancelButton();
    this.setupFormAddButton();
    this.setupDeleteButton()
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
         this.#model.addEvent(input);
        const event = await eventAPI.postEventAPI(event);
    
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

  setupDeleteButton() {
   //updates deleteButtons
   this.#view.deleteButtons = document.getElementsByClassName("delete-row")
   // console.log("----", this.deleteButtons)

   this.#view.deleteButtons.forEach((button)=>  {
      button.addEventListener("click", (event) => {
         event.preventDefault()

         const row = button.closest('tr');
         
      
      // Check if the row is found
      if (row) {
        row.parentElement.removeChild(row); // Remove the row from the DOM
        console.log(`Row with ID ${row.id} deleted.`);
      } else {
        console.error('Row not found for the clicked button.');
      }})
   })
  }

//   setupEditButtons() {
//    this.#
//   }
}
