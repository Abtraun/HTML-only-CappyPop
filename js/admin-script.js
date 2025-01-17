let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

// Get the modal and the button that opens it
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var closeBtn = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Get the select element and the list where selected options will be displayed
const sizeSelect = document.getElementById("size-select");
const selectedList = document.getElementById("selected-list");

// Event listener for when the user selects/deselects options
sizeSelect.addEventListener("change", updateSelectedList);

// Function to update the list of selected items
function updateSelectedList() {
    // Clear the current list
    selectedList.innerHTML = '';

    // Get the selected options
    const selectedOptions = Array.from(sizeSelect.selectedOptions);

    // Add each selected option to the displayed list
    selectedOptions.forEach(option => {
        const listItem = document.createElement("li");
        listItem.textContent = option.value;

        // Add a remove button to each selected item
        const removeBtn = document.createElement("span");
        removeBtn.textContent = "X";
        removeBtn.classList.add("remove-item");
        removeBtn.onclick = () => removeSelectedOption(option);

        listItem.appendChild(removeBtn);
        selectedList.appendChild(listItem);
    });
}

// Function to remove an option from the selection list
function removeSelectedOption(option) {
    option.selected = false;  // Deselect the option in the dropdown
    updateSelectedList();  // Update the displayed list
}
