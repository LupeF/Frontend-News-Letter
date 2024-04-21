const mainContent = document.querySelector('main');
const email = document.getElementById('email');
const subscribeBtn = document.getElementById('sub-btn');
const successMsg = document.getElementById('success-container');


//adds success message 
subscribeBtn.addEventListener('click', (e) =>{

    if (email.value !== ""){
        mainContent.style.display = 'none';
        successMsg.innerHTML = 
        `
        <div id="success-msg">
            <div>
                <img src="assets/images/icon-list.svg" alt="image of a checkmark">
            </div>
            <div>
                <h1>Thanks for subscribing!</h1>
            </div>
            <div>
                <p>A confirmation email has been sent to <b>ash@loremcompany.com.</b> 
                Please open it and click the button inside to confirm your subscription.</p>
            </div>
            <div>
                <button id="dissmiss-btn">Dismiss message</button>
            </div>
        </div>
        `; 
    }   
    const dissmissBtn = document.getElementById('dissmiss-btn');
    dissmissBtn.addEventListener('click', (e)=>{
        successMsg.style.display = 'none';
        // mainContent.style.display = 'block';
    })
})

