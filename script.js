const form = document.querySelector('#form')
const popup = document.querySelector('#popup')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const date = document.querySelector('#date')



form.addEventListener('submit', function(event){
    event.preventDefault();
    
    console.log("add");

    let elementJdid= document.createElement('div')

    let elementJdid1= document.createElement('div')
    let elementJdid2= document.createElement('div')
    let elementJdid3= document.createElement('div')

    let textNode1 = document.createTextNode(title.value)
    let textNode2= document.createTextNode(description.value)
    let textNode3= document.createTextNode(date.value)

    elementJdid1.appendChild(textNode1)
    elementJdid2.appendChild(textNode2)
    elementJdid3.appendChild(textNode3)

    elementJdid.appendChild(elementJdid1)
    elementJdid.appendChild(elementJdid2)
    elementJdid.appendChild(elementJdid3)

    document.body.appendChild(elementJdid)
    elementJdid.classList.add('elementjdid')
    elementJdid3.classList.add('elementjdid3')
    elementJdid2.classList.add('elementjdid2')
    elementJdid1.classList.add('elementjdid1')

})

function openpopup(){
    popup.classList.add('open-popup');
}

function closepopup(event){
    popup.classList.remove('open-popup');
}