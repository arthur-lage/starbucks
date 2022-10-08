const footerLists = document.querySelectorAll("footer nav ul")

footerLists.forEach(list => {
  list.addEventListener("click", () => {
    list.classList.toggle("show")
  })
})