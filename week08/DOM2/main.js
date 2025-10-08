// Task:

//1. เมื่อกดปุ่ม Add Message ให้สร้าง <p> ใหม่จากข้อความ input แล้ว append เป็น child ของ #messageBox
const buttons = document.getElementsByTagName('button')
const MessageBox = document.getElementById('messageBox')
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", () => {
        if(button.id === "addMsgBtn"){
            const newP = document.createElement('p')
            MessageBox.appendChild(newP)
        }
    })
})

//2. เมื่อกดปุ่ม Clear All ให้ลบ children ทั้งหมดของ #messageBox
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", () => {
        if(button.id === "clearMsgBtn"){
            MessageBox.innerHTML = ""
        }
    })
})

//3. เมื่อกดปุ่ม Add Task ให้สร้าง <li> ใหม่จากข้อความ input แล้ว append ไปที่ #tasksList
const tasksList = document.getElementById('tasksList')
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", () => {
        if(button.id === "addTaskBtn"){
            const newli = document.createElement('li')
            tasksList.appendChild(newli)
        }
    })
})
