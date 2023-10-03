'use strict';
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  // currentAccount = accounts.find(acc => acc.owner === inputLoginUsername.value);
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  // if (currentAccount.pin === Number(inputLoginPin.value)) {
  if (currentAccount?.pin === Number(inputLoginPin?.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    // inputLoginUsername.value = inputLoginPin.value = '';
    // Does not work, what happend?
    // Display movements
    displayMovements(currentAccount.movements);

    // Display balance
    calcDisplayBalance(currentAccount.movements);

    // Display balance
    calcDisplaySummary(currentAccount.movements);
  }
});
