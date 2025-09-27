//1. ดึง <h2> ด้วย getElementById
const h2Nodes = document.getElementById("heading")
console.log(h2Nodes)

//2. console.log nodeName, nodeType, nodeValue
const pNodes = document.querySelector("p")
console.log(pNodes.nodeName)
console.log(pNodes.nodeType)
console.log(pNodes.nodeValue)

console.log(h2Nodes.nodeName)
console.log(h2Nodes.nodeType)
console.log(h2Nodes.nodeValue)

//3. ถ้าเป็น ELEMENT_NODE ให้เปลี่ยนสีข้อความเป็น "green"
if(h2Nodes.nodeType === Node.ELEMENT_NODE){
    h2Nodes.style.color = "green"
}

if(pNodes.nodeType === Node.ELEMENT_NODE){
    pNodes.style.color = "green"
}

//4. เพิ่ม comment node "This is a comment" หลัง <h2>
const commentText = document.createComment("This is a comment")
h2Nodes.appendChild(commentText)

//5. สร้าง <span> ใหม่ " - DOM Challenge" และ append เข้า <h2>
const span = document.createElement("span")
h2Nodes.appendChild(span) 