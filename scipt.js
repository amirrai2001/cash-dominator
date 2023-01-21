const billamount = document.getElementById("bill-ammount");
const paidammount = document.getElementById("paid-amount");
const btnclaculate = document.getElementById("btn");
const errormessage = document.getElementById("error");
const successcontainer = document.getElementById("success-container");
const successmessage = document.getElementById("success-message");


const denominations= [2000,500,200,100,50,20,10,5,1];
const denominationcount=[];


const shoeerrormessage= function(message) {
    errormessage.style.display= 'block';
    errormessage.innerText=message;
}
const showsuccessmessage = function(message){
    successcontainer.style.display='block';
    successmessage.textContent=message;
}
const calcultedenomination= function(change){
    for(let i=0; i<denominations.length;i++){
        denominationcount.push(Math.trunc(change / denominations[i]));
    change=change%denominations[i];
    }
   
}

const displayui = function () {
   const listEl = document.createElement('ul');
   listEl.classList.add('denomination');
   successcontainer.appendChild(listEl);

   for(let i=0; i<denominations.length; i++){
    const listitem = document.createElement('li');
    listitem.classList.add('list-item');
    listEl.appendChild(listitem);
    listitem.innerHTML=`<p class="denomination-value">${denominations[i]}</p><p class="denomination-count"> ${denominationcount[i]}</p>`;
   }
}


btnclaculate.addEventListener('click',()=>{
    const billvalue = Number(billamount.value);
    const paidvlaue = Number(paidammount.value);
    const change = paidvlaue-billvalue;
    if (billvalue>0 && paidvlaue>0) {
        if(change>=0){
            showsuccessmessage(`your balance is ${change}`);
            calcultedenomination(change);
            displayui();
        }
        else{
            shoeerrormessage('bill amount is geater than paid amount');
        }
        }
    else{
             shoeerrormessage('enter a valid input');
    }    
});