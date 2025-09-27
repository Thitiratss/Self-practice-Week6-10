// 1. ดึง <div> ด้วย getElementById
const divContainer = document.getElementById("container")
console.log(divContainer)

// 2. loop .childNodes → console.log nodeName, nodeType, nodeValue
const divChildNodes = divContainer.childNodes
divChildNodes.forEach((child) => {
    console.log(child.nodeName)
    console.log(child.nodeType)
    console.log(child.nodeValue)
})
// 3. loop .children → console.log nodeName
const divChildren = divContainer.children
Array.from(divChildren).forEach((children) => {
    console.log(children.nodeName)
    console.log(children.nodeType)
    console.log(children.nodeValue)
})
// 4. เปลี่ยน font size <p> ทุกตัวเป็น "18px"
const pFontSize = document.querySelectorAll("p")
pFontSize.forEach((p)=> {
    p.style.fontSize = "18px"
})

// 5. เพิ่ม <strong> "Important" เป็น child ตัวแรกของ <div>
const strong = document.createElement("strong")
strong.textContent = "Important"
divContainer.insertBefore(strong,divContainer.firstChild)