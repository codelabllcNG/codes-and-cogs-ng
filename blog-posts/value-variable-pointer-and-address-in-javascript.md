---
date: "04-17-2022" 
id: '5'
slug: value-variable-pointer-and-address-in-javascript
image: blog.webp
title: Values Types, Variables, Identifiers, Pointers, and Memory Addresses in JavaScript
excerpt: Either you are a junior, an intermediate, or a senior programmer, these terms; value, variable, identifier, pointer, memory address, etc., are definitely not new to you. However, if any of them is new, don't worry, you are reading the right article. 
isFeatured: true 


---


## Some Basic JavaScript Terminologies That May Get You Confused 


The first thing one has to deal with while learning JavaScript (even programming as a whole) is the technical terms surrounding it. There is a whole lot of them! Meanwhile, everyone wants to be up and running (building stuff) immediately they start learning coding. Yes, the best way to learn coding is by getting your hands dirty. But what happens to the fundamental terms? And without a convincing understanding of these terms, I'm afraid the foundation is still weak, and understanding the language can be a myth. I've seen many developers who have successfully gone above beginner's stage, without a proper understanding of some of these terminologies and how they work. The truth is that this kind of people continually pay for it whenever it's time to study code's behaviour or debug. Below are few of these terminologies and how they function:


## Variables, Identifiers, and Values 
In oftentimes, variables and identifiers are mistaken for each other. Yes, non-exclusively, they're the same, but technically, they're different. A variable is a user-defined word or combination of alpha-numeric characters (possibly with some symbols), that's used to point to a memory location and contain the value in the memory. 
This is what I'm talking about, when you do: 
```js
const phoneNumber = "+2348146931607";
```
You're saving the string "+2348146931607" into a memory stack and you're using the word phoneNumber to point at that location in the memory. 

Meanwhile, an identifier is also that word, or combination of alpha-numeric characters and symbols that is used to identify variables, functions, arrays, and the likes. _Now you must be confused, but wait a moment._ Have it at the back of your mind that all variables are identifiers but not all identifiers are variables because some identifiers are just the names given to some entities such as a function,, and an object. In the example above, the word "phoneNumber" is both a variable and an identifier, but look at it in the following example:
```js
const employee = {
name: "Olasunkanmi Ajibola",
phoneNumber: 2348146931607
}
```
The identifier "employee" is technically not a variable, it's only used to identify an object that contains some properties. However, the data contained in variables are referred to as values,  and can either be of primitive type or reference type. The primitive values as the basic value types in JavaScript such as string, number, and boolean; while the reference value is a collection of primitive values or properties. E.g "+2348146931607" as a primitive value, and **_{name: "Olasunkanmi Ajibola", phoneNumber: "+2348146931607"}_**  as a reference value. 
It's OK if you don't understand this yet, you'll get it soon. 

## Memories, Pointers, and Value Access 

I'm starting from Memories because we'll need it while explaining others. In saving values to memory, JavaScript uses two kinds of memory - the stack and the heap. These terms are two thick Computer Science topics so I won't go deep into them here, I'll just briefly introduce them. 

The stack is like a frequently accessed memory where majorly the primitive values and pointers are kept. For a technical reason, only the values whose size can be pre-calculated are stored in the stack memory (string, number, boolean, null, undefined), and they are saved as a stack i.e Last In First Out (LIFO). The heap on the other hand saves the values whose sizes can't be pre-determined, such as objects and arrays, then keep their pointers in the stack memory for easier access. Like I said earlier, this is deeper than this short explanation, but we can hold on to that for the later part of this article. 



Let me introduce you to Pointers and Values Access with a code sample:
```js

var newStudent = {
    name: "Ewatomi", 
    phone: "2348146931607"
    };
var favStudent = newStudent;
favStudent.phone = "2347069426383"
console.log(newStudent.phone)
```
Without reading further or trying it, can you guess what will be printed to console? Think. 
You'll see 2347069426383 logged in the console, _but why?_ This is where Value Access, Memories, and the Pointers come in. 

When the **_newStudent_** was saved to the memory, the value made it to the heap memory while a pointer to the heap memory location got saved to the stack memory. 
When the **_newStudent_** was assigned to the variable **_favStudent_**, it didn't copy the value of **_newStudent_**, it only assigned the pointer to its memory location which means new value wasn't given to **_favStudent_**, its value still points to what's saved in **_newStudent_** memory location. So, when **_favStudent.phone_** was manipulated, the property changed in the **_newStudent_**.

_How then can we get the values of **_newStudent_** into **_favStudent_** without it manipulating **_newStudent_** when changed?_ There are different ways to achieve this, I'll only share the one which is the most recently introduced method - Spread Operator.

When you have

```js
 var newStudent = { 
     name: "Ewatomi", 
     phone: "2348146931607" 
     };

 ```
 
 and you want to copy it's value into say **_favStudent_**, you can do:



```js
var newStudent = {
    name: "Ewatomi",
     phone: "2348146931607"
     };
var favStudent = {...newStudent};
favStudent.name = "Ola"
console.log(newStudent.name)

```
This will simply log "Ewatomi" to the console because using the Spread Operator "..." to copy the properties of **_newStudent_**, we're not pointing at the memory location, we created another memory location and saved the properties there almost independently. I hope this is clearer now. 




---






