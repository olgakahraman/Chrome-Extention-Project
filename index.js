let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = " ";
  renderLeads();
});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    listItems +=
      "<li>" +
      "<a href = '${myLeads[i]} ' target='_blanc'>" + myLeads[i] +
      "</a>" +
      "</li>";
    console.log(listItems);
    // create element
    //set text content
    //append to ul

    //const li = document.createElememnt("li");
    //li.textContent = myLeads[i]
    //ulEl.append(li);
  }
  ulEl.innerHTML = listItems;
}
