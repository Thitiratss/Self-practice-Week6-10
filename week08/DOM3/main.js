// Task:
//1. ปุ่มที่มี data-color → เปลี่ยน background color ของ <div id="colorBox"> ตามสีที่ปุ่มกำหนด และเปลี่ยนข้อความใน box เป็นชื่อสี (ตัวพิมพ์ใหญ่)
const buttons = document.getElementsByTagName('button')
const box = document.getElementById('colorBox')
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", () => {
        const color = button.dataset.color
        box.style.backgroundColor = color
        box.textContent = color.toUpperCase()
    })
})

//2. ปุ่ม reset → เปลี่ยนกลับเป็น background สี lightgray และข้อความเป็น "BOX"
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", () => {
        if(button.id === "reset"){
            box.style.backgroundColor = "lightgray" 
            box.textContent = "BOX"
        }
    })
})

// 3. สร้างปุ่มใหม่ เมื่อกดปุ่มใหม่ ให้เปลี่ยนสี box เป็นสีเขียว
const newButton = document.createElement('button')
newButton.textContent ="green"
newButton.dataset.color = "green"
document.body.appendChild(newButton)

newButton.addEventListener("click", () => {
    box.style.backgroundColor = "green"
})