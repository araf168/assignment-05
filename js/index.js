document.getElementById('button-one')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const moneyAvailable = getTextFieldValueById('account-balance');
        const donateMoneyOne = getInputFieldValueById('donation-input-one');
        if (donateMoneyOne > 0 && donateMoneyOne <= moneyAvailable) {
            const donatedOne = getTextFieldValueById('donated-amount-one');
            const updatedMoneyAvailable = moneyAvailable - donateMoneyOne;
            document.getElementById('account-balance').innerText = updatedMoneyAvailable;
            const updatedDonation = donatedOne + donateMoneyOne;
            document.getElementById('donated-amount-one').innerText = updatedDonation;
            const div =document.createElement('div');
            div.classList.add('border');
            div.classList.add('rounded-lg');
            div.classList.add('p-8');
            div.classList.add('mb-5');
            div.innerHTML = `
            <h1 class="font-extrabold text-xl md:text-2xl mb-5">${donateMoneyOne} Taka is Donated for Flood at Noakhali, Bangladesh</h1>
            <p class="text-xl"> <span class="font-bold">Date & Time :</span> ${new Date().toLocaleString()}</p>`
            document.getElementById('history-log').appendChild(div);

            document.getElementById('my-modal-one').showModal();
        }
        else {
            alert('Donation failed! Please enter a valid amount.');
        }
    });

document.getElementById('button-two')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const moneyAvailable = getTextFieldValueById('account-balance');
        const donateMoneyTwo = getInputFieldValueById('donation-input-two');
        if (donateMoneyTwo > 0 && donateMoneyTwo <= moneyAvailable) {
            const donatedTwo = getTextFieldValueById('donated-amount-two');
            const updatedMoneyAvailable = moneyAvailable - donateMoneyTwo;
            document.getElementById('account-balance').innerText = updatedMoneyAvailable;
            const updatedDonation = donatedTwo + donateMoneyTwo;
            document.getElementById('donated-amount-two').innerText = updatedDonation;
            const div =document.createElement('div');
            div.classList.add('border');
            div.classList.add('rounded-lg');
            div.classList.add('p-8');
            div.classList.add('mb-5');
            div.innerHTML = `
            <h1 class="font-extrabold text-xl md:text-2xl mb-5">${donateMoneyTwo} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
            <p class="text-xl"> <span class="font-bold">Date & Time :</span> ${new Date().toLocaleString()}</p>`
            document.getElementById('history-log').appendChild(div);

            document.getElementById('my-modal-two').showModal();
        }
        else {
            alert('Donation failed! Please enter a valid amount.');
        }
    });

document.getElementById('button-three')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const moneyAvailable = getTextFieldValueById('account-balance');
        const donateMoneyThree = getInputFieldValueById('donation-input-three');
        if (donateMoneyThree > 0 && donateMoneyThree <= moneyAvailable) {
            const donatedThree = getTextFieldValueById('donated-amount-three');
            const updatedMoneyAvailable = moneyAvailable - donateMoneyThree;
            document.getElementById('account-balance').innerText = updatedMoneyAvailable;
            const updatedDonation = donatedThree + donateMoneyThree;
            document.getElementById('donated-amount-three').innerText = updatedDonation;
            const div =document.createElement('div');
            div.classList.add('border');
            div.classList.add('rounded-lg');
            div.classList.add('p-8');
            div.classList.add('mb-5');
            div.innerHTML = `
            <h1 class="font-extrabold text-xl md:text-2xl mb-5">${donateMoneyThree} Taka is Donated for Injured in the Quota Movement</h1>
            <p class="text-xl"> <span class="font-bold">Date & Time :</span> ${new Date().toLocaleString()}</p>`
            document.getElementById('history-log').appendChild(div);

            document.getElementById('my-modal-three').showModal();
        }
        else {
            alert('Donation failed! Please enter a valid amount.');
        }
    });