//1. สร้าง <h3> "Student List" + attribute id="title"
const h3Element = document.createElement("h3")
const idAttr = document.createAttribute("title")
h3Element.textContent = "Student List"

//2. append <h3> เข้า <section>
const section = document.getElementById("info")
section.appendChild(h3Element)

//3. สร้าง <ul> + append <li> "Alice", "Bob", "Charlie" เพิ่ม attribute class="student" ให้ <li> ทุกตัว
const ulElement = document.createElement("ul")
const names = ["Alice","Bob","Charlie"]
names.forEach(names => {
    const li = document.createElement("li")
    li.textContent = names
    li.setAttribute("class", "student");
    ulElement.appendChild(li)
})
section.appendChild(ulElement)