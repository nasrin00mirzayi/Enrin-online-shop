
const send=()=>{
    alert(`you send it succesfully!`)
}
const btn=()=>{
const btn=document.getElementById(`btn`)
btn.addEventListener('click', ()=>{
    const card =document.getElementById('card')
    card.classList.toggle("pic2")
})
}

 const dis=()=>{
const dis=prompt(` select one:
    1> "you bought from Enrin before
    2> "don't have enough money"
    3> "you're a admin"`)
if(dis===null){
    alert("invalid! shop closed")
 }
switch(dis){
    case"1":
    alert(`ohh.welcome back
      happy so see you again🥰 congratulations!
      you got 40% discount`)

    break;
case "2":
            alert(`don't be sad. it's ok
              we'll give you 30% discount 🥰`)
    break;

    case "3":
        alert(`for the user of Enrin online shop we considered 17% discount.
          enjoy!🥰`)
    break;

     }

    }

  
function btn0() {
  const btn = document.getElementById(`btn0`)
  btn.addEventListener('click', () => {
    const newpara = document.createElement('p')
    newpara.textContent = `congratulations! 💃🏽
  you bought  "wonder eye cream"
  with "700$"`
    newpara.style.color = "red"
    const div = document.getElementById('div')
    div.appendChild(newpara)
    console.log(`wonder eye cream
    price=700$`)

  })
   }
// function del(){
//   const btn=document.getElementById('del')
//   const para=document.getElementById('para')
//   btn.addEventListener('click',()=>{
//     para.textContent="removed"
//   })
// }
const btn1=()=>{
const btn=document.getElementById(`btn1`)
btn.addEventListener('click',()=>{
  const newpara=document.createElement('p')
  newpara.textContent=`congratulations! 💃🏽
  you bought  "susanne kaufmann"
  with"59$"`
  newpara.style.color="blue"
  const div=document.getElementById('div')
  div.appendChild(newpara)
  console.log(`susanne kaufmann
    price=59$`)

})
}
const btn2=()=>{
const btn=document.getElementById(`btn2`)
btn.addEventListener('click',()=>{
  const newpara=document.createElement('p')
  newpara.textContent=`congratulations! 💃🏽
  you bought  "Enzyme Exfoliator"
  with "710$"`
  newpara.style.color="gold"
  const div=document.getElementById('div')
  div.appendChild(newpara)
  console.log(`Enzyme Exfoliator
    price=710$`)

})
}
const btn3=()=>{
const btn=document.getElementById(`btn3`)
btn.addEventListener('click',()=>{
  const newpara=document.createElement('p')
  newpara.textContent=`congratulations! 💃🏽
  you bought  "Skin Caviar"
  with "71$"`
  newpara.style.color="orange"
  const div=document.getElementById('div')
  div.appendChild(newpara)
  console.log(`Skin Caviar
    price=71$`)
})
}
const btn4=()=>{
const btn=document.getElementById(`btn4`)
btn.addEventListener('click',()=>{
  const newpara=document.createElement('p')
  newpara.textContent=`congratulations! 💃🏽
  you bought  "Soothing cleansing milk"
  with "40$"`
  newpara.style.color="black"
  const div=document.getElementById('div')
  div.appendChild(newpara)
  console.log(`Soothing cleansing milk
     ${price3}$`)

})
}
const btn5=()=>{
const btn=document.getElementById(`btn5`)
btn.addEventListener('click',()=>{
  const newpara=document.createElement('p')
  newpara.textContent=`congratulations! 💃🏽
  you bought  "Glow Mask"
  with "795$"`
  newpara.style.color="silver"
  const div=document.getElementById('div')
  div.appendChild(newpara)
   console.log(`Glow Mask
     ${price4}$`)

})
}
const btn6=()=>{
const btn=document.getElementById(`btn6`)
btn.addEventListener('click',()=>{
  const newpara=document.createElement('p')
  newpara.textContent=`congratulations! 💃🏽
  you bought  "Eye Rescue Serum"
  with "98$"`
  newpara.style.color="purple"
  const div=document.getElementById('div')
  div.appendChild(newpara)
   console.log(`Eye Rescue Serum
    ${price2}`)


})
}
const btn7=()=>{
const btn=document.getElementById(`btn7`)
btn.addEventListener('click',()=>{
  const newpara=document.createElement('p')
  newpara.textContent=`congratulations! 💃🏽
  you bought  "Hyaluronic Acid Serum"
  with "89$"`
  newpara.style.color="green"
  const div=document.getElementById('div')
  div.appendChild(newpara)
  console.log(`Hyaluronic Acid Serum
    ${price}$`)
})
}
let price=89;
let price2=98;
let price3=40;
let price4=795;
// let sum =price+price2+price3+price4
// console.log(`total= ${sum}`)
// let price=89;
// let price2=98;

// const numbers=[1,2,3,4];
// const sum=numbers.rduce((total,num)=>total+num,0)