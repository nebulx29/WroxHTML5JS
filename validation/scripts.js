var contactName = document.getElementById('contactName');
contactName.oninvalid = function(e) {
  e.target.setCustomValidity("");
  if (!e.target.validity.valid) {
    if (e.target.value.length == 0) {
      e.target.setCustomValidity("Contact name is required.");
    }
    else if (e.target.value.length < 15) {
      e.target.setCustomValidity("Contact name must be a least 5 characters long.");
    }
  }
}
