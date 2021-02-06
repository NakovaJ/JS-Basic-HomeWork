$(document).ready(function () {
  // Task 1
  // Make a simple calculator application
  // It should have two input fields of type number and five buttons
  // Every button should perform the different calculation: SUM, DIFFERENCE, MULTIPLICATION, DIVISION, SQUARE
  // You should create a function for each of them and to call it on the appropriate button click
  // After clicking the button the result should be display the result in an appropriate <p> tag.

  $("button:first").click(function () {
    $("p:first").text(
      `The result is ${
        parseInt($("input:first").val()) +
        parseInt($("input:first").next().val())
      }`
    );
  });
  $("button:first")
    .next()
    .click(function () {
      $("p:first").text(
        `The result is ${
          parseInt($("input:first").val()) -
          parseInt($("input:first").next().val())
        }`
      );
    });
  $("button:first")
    .next()
    .next()
    .click(function () {
      $("p:first").text(
        `The result is ${
          parseInt($("input:first").val()) *
          parseInt($("input:first").next().val())
        }`
      );
    });
  $("button:first")
    .next()
    .next()
    .next()
    .click(function () {
      $("p:first").text(
        `The result is ${
          parseInt($("input:first").val()) /
          parseInt($("input:first").next().val())
        }`
      );
    });
  $("button:first")
    .next()
    .next()
    .next()
    .next()
    .click(function () {
      $("p:first").text(
        `The result is ${Math.pow(
          parseInt($("input:first").val()),
          parseInt($("input:first").next().val())
        )}`
      );
    });

  // Task 2
  // Make a simple login application
  // Declare an array named users, that will hold usernames and serve you as a fake database
  // Declare another array that will keep the passwords
  // Declare two fields one for username and one for password, and one login button
  // On login button click if the username and the password from the input field match the combination: users[i], passwords[j] print in <h2> tag “Hello username” else print “Wrong username”

  let userNames = ["Jelena", "Marko", "Marjan", "Mihaela", "Keti", "Ana"];
  let passwords = ["jelenaX", "markoX", "marjanX", "mihaelaX", "ketiX", "anaX"];

  $("#task2")
    .find("button")
    .click(function () {
      for (i = 0; i < userNames.length; i++) {
        if (
          userNames[i] === $("#task2").find("input:first").val() &&
          passwords[i] === $("#task2").find("input:last").val()
        ) {
          $("#task2").find("p").text(`Hello ${userNames[i]}`);
        }
      }
      if ($("#task2").find("p").text() == "") {
        $("#task2").find("p").text(`Wrong username!`);
      }
    });

  // Task 3
  // Write a JavaScript program that will serve as a bingo application.
  // Make an array of numbers from 1 till 37 that you will display it in a <ol> tag
  // Make another array that will have only 5 numbers and it will serve you as a winning combination
  // There should be 5 input fields for inserting numbers and a button for submitting the bingo combination
  // You should get the values from the input fields and check if all of the inserted numbers are equal to the winning combination and display it in a h1 tag winning message “You won 1000000$! Congrats!”
  // Else print “More luck next time!”

  let winingTicket = [4, 7, 19, 22, 39];
  let inputOne = $("#task3").find("input").first();
  let inputTwo = $("#task3").find("input").first().next();
  let inputThree = $("#task3").find("input").first().next().next();
  let inputFour = $("#task3").find("input").last().prev();
  let inputFive = $("#task3").find("input").last();
  let personalTicket = [];

  $("#task3")
    .find("button")
    .click(function () {
      personalTicket.push(
        parseInt(inputOne.val()),
        parseInt(inputTwo.val()),
        parseInt(inputThree.val()),
        parseInt(inputFour.val()),
        parseInt(inputFive.val())
      );
      if (
        inputOne.val() == "" ||
        inputTwo.val() == "" ||
        inputThree.val() == "" ||
        inputFour.val() == "" ||
        inputFive.val() == ""
      ) {
        $(`#task3`)
          .find("h1")
          .text(`Please enter your ticket numbers in the required fields!`);
      } else {
        let checker = [];
        for (i = 0; i < personalTicket.length; i++) {
          for (a = 0; a < winingTicket.length; a++) {
            if (personalTicket[i] == winingTicket[a]) {
              checker.push(personalTicket[i]);
            }
          }
        }
        if (checker.length === 5) {
          $(`#task3`).find(`h1`).text(`YOU WON!!! CONGRATS!!!
        The winning combination is ${checker.join(`    `)}`);
        } else {
          $(`#task3`)
            .find(`h1`)
            .text(
              `You have ${
                checker.length
              } matching number/s with the winning combination: ${checker.join(
                "    "
              )}! Wishing you more luck next time!`
            );
        }
      }
    });

  // Task 4
  // Write a JavaScript page that can save recipes in a table.
  // There should be inputs for:
  // Name
  // Ingredients ( strings )
  // TimeToMake
  // The recipes in the table should have a delete button that deletes the table row
  // Below the table there should be 3 buttons
  // Show recipe that takes the longest time to make, show recipe that takes the shortest time to make and show all
  // The buttons should change the table to only show that recipe or show all recipes

  let arrayIngredients = [];
  let arrayTimeToPrepare = [];
  let ingredient = "";

  $("#task4")
    .find("button")
    .click(function () {
      $("#task4").html(
        `<input type='text' placeholder='Name of the recipe!'><input type='number' placeholder='Time to make(in minutes)!'><input type='text' placeholder='Ingredients needed'><ul></ul><button>Add ingredient</button><button>Add this recipe!</button><h3></h3><table border='1'><thead><th>NAME</th><th>TIME TO PREPARE</th><th>INGREDIENTS</th></thead><tbody></tbody><tfoot></tfoot></table> `
      );

      $(`#task4`)
        .find(`button:first`)
        .click(function () {
          $("#task4")
            .find("ul")
            .append(`<li>${$("#task4").find("input:last").val()}</li>`);
          arrayIngredients.push($("#task4").find("input:last").val());
          $("#task4").find("input:last").val("");
        });

      $(`#task4`)
        .find("button:last")
        .click(function () {
          if (
            $("#task4").find("input:first").val() == "" ||
            $("#task4").find("input:first").next().val() == "" ||
            arrayIngredients.length == 0
          ) {
            $("#task4")
              .find("h3")
              .text("Please fill in all the required fields!");
          } else {
            $(`#task4`).find("li").remove();
            for (i = 0; i < arrayIngredients.length; i++) {
              ingredient += ` ${arrayIngredients[i]} `;
            }
            $("#task4").find("h3").text("");
            let timeToPrepare = `${$("#task4")
              .find("input:first")
              .next()
              .val()}`;
            arrayTimeToPrepare.push(parseInt(timeToPrepare));

            $("#task4")
              .find("tbody")
              .append(
                `<tr><td>${$("#task4")
                  .find("input:first")
                  .val()}</td><td class='timeToPrepare'>${$("#task4")
                  .find("input:first")
                  .next()
                  .val()}</td><td>${ingredient}</td><td><button class='del'>Delete</button></td></tr>`
              );
            $(`#task4`)
              .find("tfoot")
              .html(
                `<td><button>Show all recipes</button></td><td><button id='longestToMake'>Recipe longest to make</button></td><td><button>Recipe shortest to make</button></td>`
              );

            $("#task4").find("input:first").val("");
            $("#task4").find("input:first").next().val("");
            $("#task4").find("input:last").val("");
            arrayIngredients = [];
            ingredient = "";

            let minTime = arrayTimeToPrepare[0];
            for (i = 0; i < arrayTimeToPrepare.length; i++) {
              if (minTime > arrayTimeToPrepare[i]) {
                minTime = arrayTimeToPrepare[i];
              } else {
                minTime = minTime;
                
              }
            }
            indexOfElement = arrayTimeToPrepare.findIndex((x) => x === minTime);
            indexOfElement = indexOfElement + 1;

            let maxTime = arrayTimeToPrepare[0];
            for (i = 0; i < arrayTimeToPrepare.length; i++) {
              if (maxTime < arrayTimeToPrepare[i]) {
                maxTime = arrayTimeToPrepare[i];
              } else {
                maxTime = maxTime;
              }
            }
            indexOfElementMax = arrayTimeToPrepare.findIndex(
              (y) => y === maxTime
            );
            indexOfElementMax = indexOfElementMax +
             1;

            firstTdValueMin=$(`tr:nth-child(${indexOfElement})`).find('td:first').text();
            secondTdValueMin=$(`tr:nth-child(${indexOfElement})`).find('td:first').next().text();
            thirdTdValueMin=$(`tr:nth-child(${indexOfElement})`).find('td:first').next().next().text();

            firstTdValueMax=$(`tr:nth-child(${indexOfElementMax})`).find('td:first').text();
            secondTdValueMax=$(`tr:nth-child(${indexOfElementMax})`).find('td:first').next().text();
            thirdTdValueMax=$(`tr:nth-child(${indexOfElementMax})`).find('td:first').next().next().text();
            

            $(`.del`).click(function (event) {
              event.target.parentNode.parentNode.remove(event.parentNode);
            });

            $("#task4")
              .find(`button:last`)
              .click(function () {
                $('tbody').hide();
                
                $(`thead`).html(
                  `<tr><th>NAME</th><th>TIME TO PREPARE</th><th>INGREDIENTS</th></tr><tr><td>${firstTdValueMin}</td><td>${secondTdValueMin}</td><td>${thirdTdValueMin}</td><td><button class='del'>Delete</button></td></tr>`
                );
              });

            $("#longestToMake").click(function () {
              $(`tbody`).hide();
              $(`thead`).html(
                `<tr><th>NAME</th><th>TIME TO PREPARE</th><th>INGREDIENTS</th></tr><tr><td>${firstTdValueMax}</td><td>${secondTdValueMax}</td><td>${thirdTdValueMax}</td><td><button class='del'>Delete</button></td></tr>`
              );
            });

            $("tfoot")
              .find(`button:first`)
              .click(function () {
                $('thead').html(`<tr><th>NAME</th><th>TIME TO PREPARE</th><th>INGREDIENTS</th></tr>`)
                $(`tbody`).show();
              });
          }
        });
    });
});
