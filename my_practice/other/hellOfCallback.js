"use strict";

/**
 * Js is synchronouse
 * Execute the code block by orger after hoisting
 * Hoisting: var, function declaration
 */
// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 2000);
// console.log("3");

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("Sync"));

// Async
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("Async"), 2000);

// Callback Hell
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "jinho" && password === "jake") ||
        (id === "jim" && password === "4242")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "jinho") {
        onSuccess({ name: "Jinho", role: "Founder" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("Enter your id");
const password = prompt("Enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRoll) => {
        alert(
          `Hello ${userWithRoll.name}, you have a ${userWithRoll.role} role`
        );
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);
