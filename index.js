const app = "I don't do much."

function fatBastard(meal) {
  function whatsForDinner() {
    if (!meal) {
      console.log("The belly is empty. Woe is me!");
    } else if (!meal === "Mini Me") {
      console.log("The wee man is in my belly!");
    } else {
      console.log(`I'm eating' a bit of ${meal}! Burp.`);
    }
  }
  function digest() {
    meal = undefined;
  }
  return {
    whatsForDinner,
    digest
  };
}

const {whatsForDinner, digest } =
fatBastard('ribeye');
whatsForDinner();
digest();
whatsForDinner();
