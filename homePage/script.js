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

const edit =document.getElementById("ad-saveAdd");
const save = document.getElementById("add")
console.log(edit,"gg");
console.log(add,"uiu");


edit.addEventListener("click", function () {
  if (edit) {
    edit.style.display = "none";
    add.style.display = "block";
  }
});

save.addEventListener("click", function () {
  if (save) {
    save.style.display = "none";
    edit.style.display = "block";
  }
});
