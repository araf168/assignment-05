document.getElementById('button-donate-one')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const accountBalance = getTextFieldValueById('account-balance');
        const inputAmountOne = getTextFieldValueById('input-amount-one');

        if (inputAmount > 0 && inputAmount <= accountBalance) {
            const amountDonated = getTextFieldValueById('amount-donated-one');
            const newAccountBalance = accountBalance - inputAmount;

            document.getElementById('account-balance').innerText = updatedAccountBalance;

            const newDonationAmount = amountDonated + inputAmount;

            document.getElementById('amount-donated-one').innerText = updatedDonationAmount;

            const div = document.createElement('div');
            div.classList.add('border');
            div.classList.add('rounded-lg');
            div.classList.add('p-8');
            div.classList.add('mb-5');

            div.innerHTML = `
            <h1 class="font-extrabold text-xl md:text-2xl mb-5">${donateMoneyOne} Taka is Donated for Flood at Noakhali, Bangladesh</h1>
            <p class="text-xl"> <span class="font-bold">Date & Time :</span> ${new Date().toLocaleString()}</p>`
            document.getElementById('my-modal-one').showModal();
        }
        else {
            alert('Failed to Donation');
        }
    });


document.getElementById('button-donate-two')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const accountBalance = getTextFieldValueById('account-balance');
        const inputAmountTwo = getTextFieldValueById('input-amount-two');

        if (inputAmountTwo > 0 && inputAmountTwo <= accountBalance) {
            const amountDonatedTwo = getTextFieldValueById('amount-donated-two');
            const newAccountBalance = accountBalance - inputAmountTwo;

            document.getElementById('account-balance').innerText = updatedAccountBalance;

            const newDonationAmount = amountDonatedTwo + inputAmount;

            document.getElementById('amount-donated-two').innerText = updatedDonationAmount;

            const div = document.createElement('div');
            div.classList.add('border');
            div.classList.add('rounded-lg');
            div.classList.add('p-8');
            div.classList.add('mb-5');

            div.innerHTML = `
            <h1 class="font-extrabold text-xl md:text-2xl mb-5">${donateMoneyTwo} Taka is Donated for Flood at Noakhali, Bangladesh</h1>
            <p class="text-xl"> <span class="font-bold">Date & Time :</span> ${new Date().toLocaleString()}</p>`
            document.getElementById('history-log').appendChild('div');

            document.getElementById('my--modal-two');
        }
        else {
            alert('Failed to Donation');
        }
    });


document.getElementById('button-donate-three')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const accountBalance = getTextFieldValueById('account-balance');
        const inputAmountTwo = getTextFieldValueById('input-amount-three');

        if (inputAmountThree > 0 && inputAmountThree <= accountBalance) {
            const amountDonatedThree = getTextFieldValueById('amount-donated-three');
            const newAccountBalance = accountBalance - inputAmountThree;

            document.getElementById('account-balance').innerText = updatedAccountBalance;

            const newDonationAmount = amountDonatedThree + inputAmountThree;

            document.getElementById('amount-donated-three').innerText = updatedDonationAmount;

            const div = document.createElement('div');
            div.classList.add('border');
            div.classList.add('rounded-lg');
            div.classList.add('p-8');
            div.classList.add('mb-5');

            div.innerHTML = `
            <h1 class="font-extrabold text-xl md:text-2xl mb-5">${donateMoneyTwo} Taka is Donated for Flood at Noakhali, Bangladesh</h1>
            <p class="text-xl"> <span class="font-bold">Date & Time :</span> ${new Date().toLocaleString()}</p>`
            document.getElementById('history-log').appendChild('div');

            document.getElementById('my-modal-three').showModal();
        }
        else {
            alert('Failed to Donation');
        }
    });