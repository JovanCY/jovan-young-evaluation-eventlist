class EventListView {
  constructor() {
    this.addEventButton = document.getElementById("btn-new-event");
    this.eventList = document.getElementById("event-list");
    this.formAddButton = document.getElementById("add-button");
    this.formCancelButton = document.getElementById("cancel-button");
    this.form = document.getElementById("add-form");
    this.addRow = document.getElementById("add-row");
  }

  showAddRow() {
    const classList = this.addRow.classList;
    //  console.log(classList)
    classList.remove("hidden");
  }
  hideAddRow() {
    const classList = this.addRow.classList;
    //  console.log(classList);
    classList.add("hidden");
  }
  // addEmptyRow() {
  //    const newRow = document.createElement("tr")
  //    newRow.className = "event-list__row"

  //    const formWrapper = document.createElement("form")
  //    newRow.classList.add("hidden")

  //    newRow.appendChild

  //    //input validation
  // }
  clearForm() {
    document.getElementById("add-form__name").value = "";
    document.getElementById("add-form__start").value = "";
    document.getElementById("add-form__end").value = "";
  }

  getFormFields() {
    return {
      eventName: document.getElementById("add-form__name").value,
      startDate: document.getElementById("add-form__start").value,
      endDate: document.getElementById("add-form__end").value,
    };
  }

  addNewRow(event) {
    const { id, eventName, startDate, endDate } = event;
    const newRow = document.createElement("tr");
    newRow.className = "event-list__row";
    newRow.id = id;

    //setup new Row
    const nameField = document.createElement("td");
    nameField.textContent = eventName;
    newRow.appendChild(nameField);
    const startField = document.createElement("td");
    startField.textContent = startDate;
    newRow.appendChild(startField);
    const endField = document.createElement("td");
    endField.textContent = endDate;
    newRow.appendChild(endField);

    const buttonDiv = document.createElement("div");
    buttonDiv.innerHTML = `
    <button class="blue edit-row row-button"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg></button>
    <button class="red delete-row row-button"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></button>
    `;
    newRow.appendChild(buttonDiv);

    //remove addRow from table
    const tbody = this.eventList.querySelector("tbody") || this.eventList;

    // Remove the addRow from the table
    const addRow = this.addRow; // Select the row by its reference or ID
    if (addRow) {
      tbody.removeChild(addRow);
    } else {
      console.error("addRow not found in the table");
    }

    // Add the new row
    tbody.appendChild(newRow);

    tbody.appendChild(addRow);
  }

  toggleEditRow(id) {
    const editRow = document.getElementById(id);
    if (!editRow) {
      console.log("id not found in row");
      return;
    }
  }
}
