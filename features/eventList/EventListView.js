class EventListView {
  constructor() {
    this.addEventButton = document.getElementById("btn-new-event");
    this.eventList = document.getElementById("event-list");
    this.addButton = document.getElementById("add-button");
    this.cancelButton = document.getElementById("cancel-button");
    this.addRow = document.getElementById("add-row");
    this.form = document.getElementById.apply("add-form")
  }

  showAddRow() {
    const classList = this.addRow.classList;
    console.log(classList)
    classList.remove("hidden");
  }
  hideAddRow() {
    const classList = this.addRow.classList;
    console.log(classList);
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
    document.getElementById("event-name").value = "";
    document.getElementById("start-date").value = "";
    document.getElementById("end-date").value = "";
  }

  addNewRow(event) {
    const { id, name, start, end } = event;
    const newRow = document.createElement("tr");
    newRow.className = "event-list__row";
    newRow.id = id;

    //setup new Row
    const nameField = document.createElement("td");
    nameField.textContent = name;
    newRow.appendChild(nameField);
    const startField = document.createElement("td");
    startField.textContent = start;
    newRow.appendChild(startField);
    const endField = document.createElement("td");
    endField.textContent = end;
    newRow.appendChild(endField);

    //remove addRow from table
    this.eventList.removeChild(addRow);
    //add new row
    this.eventList.appendChild(newRow);
    //add addRow back to table
    this.eventList.appendChild(addRow);
  }

  toggleEditRow(id) {
    const editRow = document.getElementById(id);
    if (!editRow) {
      console.log("id not found in row");
      return;
    }
  }
}
