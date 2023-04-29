let myLeads = ["olga", "eyup", "filiz"];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});
for (let i = 0; i < myLeads.length; i++) {
  //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";

  // create element
  //set text content
  //append to ul

  const li = document.createElememnt("li");
  li.textContent = myLeads[i]
  ulEl.append(li);
}
