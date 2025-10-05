

const amount = localStorage.getItem('finalamount');

if(amount === null){
    amount = 0;
}

document.getElementById('amount').textContent = `₹${amount}`;


function shop(){
    localStorage.removeItem('finalamount');
}







    