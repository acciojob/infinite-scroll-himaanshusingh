//your code here!
const ordList = document.getElementById("infi-list");
let itemCount = 1;
for (let i = 0; i < 10; i++) {
  const listItem = document.createElement("li");
  listItem.setAttribute("class", `list-item-${itemCount}`);
  listItem.innerText = `Item ${itemCount}`;
  ordList.append(listItem);
  itemCount++;
}
function loadMoreContent() {
  for (let i = 0; i < 2; i++) {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", `list-item-${itemCount}`);
    listItem.innerText = `Item ${itemCount}`;
    ordList.append(listItem);
    itemCount++;
  }
}
ordList.addEventListener("scroll", () => {
  if (ordList.scrollTop + ordList.clientHeight >= ordList.scrollHeight - 10)
    loadMoreContent();
});
