// ดึง <ul> + children
const ulElement =  document.getElementById("tasks")
const ulChildren = ulElement.children
Array.from(ulChildren).forEach(li => {
    console.log(li.textContent)
})
// เลือก <li> "Task 2" → console.log previousElementSibling, nextElementSibling, parentElement
let task2 = ulChildren[1]
console.log(task2.previousElementSibling)
console.log(task2.nextElementSibling)
console.log(task2.parentElement)

// เปลี่ยนข้อความของ "Task 3" เป็น "lightcoral"
let task3 = ulChildren[2]
task3.textContent = "lightcoral"

// ลบข้อความ "Task 4"
let task4 = ulChildren[3]
task4.textContent = null

// เพิ่ม <li> "Task 5" เป็น child ตัวท้ายของ <ul>
const task5 = document.createElement("li")
task5.textContent = "Task 5"
ulElement.appendChild(task5)