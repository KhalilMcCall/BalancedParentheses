/*
Structuring characters inside of a Stack to push pop and 
peek parenthese characters off the top of stack (LIFO)   //MAIN FUNCTION AT THE BOTTOM
*/
class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  push = (element) => {
    this.items[this.count] = element;
    this.count++;
    console.log(`${element} added to index ${this.count - 1}`);
    return this.count - 1;
  };
  pop = () => {
    if (this.count == 0) {
      console.log("Undefined");
      return undefined;
    }
    let removedItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${removedItem} was removed`);
  };
  peek = () => {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  };

  isEmpty = () => {
    return this.count === 0;
  };
}

//Function that is ran
// Test String is passed in

const isBalanced = (str) => {
  //Checks if input is a string
  if (typeof str !== "string") {
    return "please input a string";
  }
  // New Stack is created
  let stack = new Stack();

  //Loop through each character in  string
  for (let i = 0; i < str.length; i++) {
    //if current element is an opening parenthesis
    // element is pushed into stack
    if (str[i] === "(") {
      stack.push(str[i]);
    } // else if current element is a closing parenthesis
    // we must make sure theres atleast one element in stack
    //if not we know the string is not balanced
    else if (str[i] === ")") {
      if (stack.count == 0) {
        return false;
      }
      //if the character at the top of the stack is an opening
      //parenthesis we pop it out of stack
      else if (stack.peek() === "(") {
        console.log("we have a match");
        stack.pop();
      }
    }
  }
  //If we have looped thru the entire string and
  //the stack is not empty then we know the string is not balanced
  // if empty the string is balanced

  return stack.isEmpty();

  /*if (stack.count === 0) {
    return true;
  } else return false;*/
};

//INPUT STRING
let testCode =
  "(select (:title :author :year)" +
  "(from :books)" +
  "(where (:and (:>= :year 1995)" +
  " (:< :year 2010))" +
  "(order-by (:desc :year))" +
  "((:title Practical Common Lisp" +
  ":author Peter Seibel" +
  " :year 2005))" +
  " (:title ANSI Common Lisp)" +
  ":author Paul Graham" +
  ":year 1995))";

//  MAIN FUNCTION IS RAN HERE:
console.log(isBalanced(testCode));
