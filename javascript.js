// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?
function findPairs(arr, targetSum) {
    const pairs = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
  
    return pairs;
  }
  
  const arr = [3, 4, 5, 6, 7];
  const targetSum = 10;
  const result = findPairs(arr, targetSum);
  console.log('Pairs with sum', targetSum, ':', result);
//   Q2. Write a program to reverse an array in place? In place means you cannot create a new array. You have to update the original array.
function reverseArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
  const arr2 = [1, 2, 3, 4, 5];
  console.log('Original array:', arr2);
  reverseArrayInPlace(arr2);
  console.log('Reversed array:', arr2);
//   Q3. Write a program to check if two strings are a rotation of each other? 
function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const concatenated = str1 + str1;
    return concatenated.includes(str2);
  }
  
  const str1 = 'abcd';
  const str2 = 'cdab';
  console.log('Are strings rotations?', areRotations(str1, str2));
//   Q4. Write a program to print the first non-repeated character from a string?  
function firstNonRepeatedChar(str) {
    const charCount = new Map();
  
    for (const char of str) {
      charCount.set(char, charCount.has(char) ? charCount.get(char) + 1 : 1);
    }
  
    for (const char of str) {
      if (charCount.get(char) === 1) {
        return char;
      }
    }
  
    return null;
  }
  
  const inputString = 'aabbccdeeffg';
  const result2 = firstNonRepeatedChar(inputString);
  console.log('First non-repeated character:', result2);
//  Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it. 
function towerOfHanoi(n, source, auxiliary, target) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${target}`);
      return;
    }
  
    towerOfHanoi(n - 1, source, target, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${target}`);
    towerOfHanoi(n - 1, auxiliary, source, target);
  }
  
  const numDisks = 3;
  towerOfHanoi(numDisks, 'Source', 'Auxiliary', 'Target');
// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression. 
function isOperator(char) {
    return /[+\-*/^]/.test(char);
  }
  
  function postfixToPrefix(expression) {
    const stack = [];
  
    for (const char of expression) {
      if (isOperator(char)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        stack.push(char + operand2 + operand1);
      } else {
        stack.push(char);
      }
    }
  
    return stack.pop();
  }
  
  const postfixExpression = '23*5+';
  console.log('Prefix expression:', postfixToPrefix(postfixExpression));
//  Q7. Write a program to convert prefix expression to infix expression. 
function isOperator(char) {
    return /[+\-*/^]/.test(char);
  }
  
  function prefixToInfix(expression) {
    const stack = [];
  
    for (let i = expression.length - 1; i >= 0; i--) {
      const char = expression[i];
      if (isOperator(char)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        stack.push(`(${operand1}${char}${operand2})`);
      } else {
        stack.push(char);
      }
    }
  
    return stack.pop();
  }
  
  const prefixExpression = '+*23*54';
  console.log('Infix expression:', prefixToInfix(prefixExpression));
//   Q8. Write a program to check if all the brackets are closed in a given code snippet.  
function areBracketsBalanced(code) {
    const stack = [];
    const bracketPairs = {
      '}': '{',
      ']': '[',
      ')': '(',
    };
  
    for (const char of code) {
      if (['{', '[', '('].includes(char)) {
        stack.push(char);
      } else if (['}', ']', ')'].includes(char)) {
        if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  const codeSnippet = 'function() { if (x) { return y; } }';
  console.log('Are brackets balanced?', areBracketsBalanced(codeSnippet));
// Q9. Write a program to reverse a stack.
class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(element) {
      this.stack.push(element);
    }
  
    pop() {
      if (!this.isEmpty()) {
        return this.stack.pop();
      }
      return null;
    }
  
    peek() {
      return !this.isEmpty() ? this.stack[this.stack.length - 1] : null;
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  
    reverse() {
      this.stack.reverse();
    }
  }
  
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log('Stack before reversal:', stack.stack);
  stack.reverse();
  console.log('Stack after reversal:', stack.stack);
//  Q10. Write a program to find the smallest number using a stack. 
class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(element) {
      this.stack.push(element);
      if (
        this.minStack.length === 0 ||
        element <= this.minStack[this.minStack.length - 1]
      ) {
        this.minStack.push(element);
      }
    }
  
    pop() {
      if (!this.isEmpty()) {
        const poppedElement = this.stack.pop();
        if (poppedElement === this.minStack[this.minStack.length - 1]) {
          this.minStack.pop();
        }
        return poppedElement;
      }
      return null;
    }
  
    peek() {
      return !this.isEmpty() ? this.stack[this.stack.length - 1] : null;
    }
  
    getMin() {
      return !this.isEmpty() ? this.minStack[this.minStack.length - 1] : null;
    }
  
    isEmpty() {
      return this.stack.length === 0;
    }
  }
  
  const minStack = new MinStack();
  minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(1);

console.log('Minimum element:', minStack.getMin());