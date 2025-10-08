// Task:
//1. ลบ <li> "Iced Coffee" ออก
const ulElement = document.getElementById('drinkShelf')
const liChild = ulElement.children
let icedCoffee = null
Array.from(liChild).forEach((ele) => {
    if(ele.textContent === "Iced Coffee")
        icedCoffee = ele
})
ulElement.removeChild(icedCoffee)

//2. สร้าง <li> "Herbal Tea" class "cold" แล้ว insert ก่อน "Smoothie"
const newElement = document.createElement('li')
newElement.textContent = "Herbal Tea"
newElement.setAttribute("class","cold")
let smoothieElement = null
Array.from(liChild).forEach((ele) => {
    if(ele.textContent.trim() === "Smoothie")
        smoothieElement = ele
})
ulElement.insertBefore(newElement,smoothieElement)

//3. แทนที่ "Cappuccino" ด้วย "Flat White" และเปลี่ยน class เป็น "warm"
const newElement2 = document.createElement('li')
newElement2.textContent = "Flat White"
newElement2.setAttribute("class","warm")
let cappuccinoElement = null
Array.from(liChild).forEach((ele) => {
    if(ele.textContent.trim() === "Cappuccino")
        cappuccinoElement = ele
})
ulElement.replaceChild(newElement2,cappuccinoElement)

//4. Loop ทุก children ของ ul#drinkShelf และ console.log(textContent)
Array.from(liChild).forEach((ele) => {
    console.log(ele.textContent)
})