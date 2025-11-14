const ol = document.querySelector("#infi-list");
function listCreation() {
  const li = document.createElement("li");
  li.setAttribute("class", `list-item-${itemCount}`);
  li.innerText = `Item ${itemCount}`;
  ol.append(li);
  itemCount++;
}
let itemCount = 1;
for (let i = 0; i < 10; i++) listCreation();
ol.addEventListener("scroll", () => {
  if (ol.scrollTop + ol.clientHeight >= ol.scrollHeight - 10) {
    for (let i = 0; i < 2; i++) listCreation();
  }
});
