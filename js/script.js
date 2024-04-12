const successMsg = document.getElementById('success-container');

successMsg.innerHTML = `
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
        <button>Dismiss message</button>
    </div>
</div>
`;


