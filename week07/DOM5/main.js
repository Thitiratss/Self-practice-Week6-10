// สร้าง <p> "New message" แล้ว replace <p id="msg1">
const oldP = document.getElementById("msg1")
const newP = document.createElement("p")
newP.textContent = "New message"
oldP.parentElement.replaceChild(newP,oldP)

// append <p> "Another message" เข้า <div>
const divElement = document.getElementById("messages")
const newP2 = document.createElement("p")
newP2.textContent = "Another message"
divElement.appendChild(newP2)

// สร้าง <p> "Inserted before keep" แล้ว insert ก่อน <p id="msg2">
const newP3 = document.createElement("p")
newP3.textContent = "Inserted before keep"
divElement.appendChild(newP3)

// loop all children ของ <div> แล้ว console.log textContent
const children = divElement.children
for(let child of children){
    console.log(child.textContent)
}