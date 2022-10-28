// Profile and createbutton open close function

const btn = document.getElementById("btn");
const profile = document.getElementById("photo");

profile.addEventListener("click", function () {
  if (btn) {
    btn.style.display = "block";
    profile.style.display = "none";
  }
});

btn.addEventListener("click", function () {
  if (profile) {
    profile.style.display = "block";
    btn.style.display = "none";
  }
});

// add-address modal add-edit button

const edit = document.getElementById("ad-saveAdd");
const editBtn = document.getElementById("save-edit");

const save = document.getElementById("save-add");
const saveBtn = document.getElementById("save-address");

editBtn.addEventListener("click", function () {
  if (edit) {
    edit.style.display = "none";
    save.style.display = "block";
  }
});

saveBtn.addEventListener("click", function () {
  if (save) {
    save.style.display = "none";
    edit.style.display = "block";
  }
});

