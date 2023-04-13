# DSAJavaScript

Data Structures and Algorithms examples in JavaScript

## Space and Time Complexity

How many primitive operations are executed?

### Loops to find min and max of array

Nested loops: O(N^2) time complexity
Two separate loops: O(2N) time complexity

### Sorted List find min and max of array

Constant time complexity: O(2) AKA O(1)

### Big O Notations from fast to slow

![big-oh-graph](https://user-images.githubusercontent.com/44857032/231610786-0e6ec79a-ee9d-4ad7-985c-4021c1f78672.jpg)

Constant: O(1)

Logarithmic: O(logN)

Linear: O(N)

Quadratic: O(N^2)

Exponential: O(K^N)

### Describing complexity in interviews

Drop constants, describe it as the highest complexity involved

### Complexity of different JS Methods and expressions

const arr = [1,2,3]

arr.pop(): Constant

arr[0]: Constant

arr.shift(): Linear

const obj = {a: 1}

obj.a: Constant

### Calculating Time complexity

Multiply loops inside of loops: O(N^2)

Add separate loops: O(2N)

If every time you loop, you cut your problem by a set amount: O(log N)

A standard linear loop that has another loop performed inside of it cut by a set amount each time: O(Nlog N)

### Complexity Operation

O(1) Running a statement

O(1) Value look-up on an array, object, variable

O(logn) Loop that cuts problem in half every iteration

O(n) Looping through the values of an array

O(n^2) Double nested loops

O(n^3) Triple nested loops

### Calculating Space complexity

Calculated by determining the size and whether you are creating new objects when your code executes

### What is the time complexity?

    var countChars = function(str){
        var count = 0;

        for(var i = 0; i < str.length; i++) {
            count++;
        }

        return count;
    };

    countChars("dance");
    countChars("walk");

Single loop, so the complexity is O(N), where N is the length of str

    var countChars = function(str){

        return str.length;

    };

    countChars("dance");

    countChars("walk");


    // How much more work would it take
    // to get the length of 1 million
    //char string?

Because the length is a property of the string object, the complexity is O(1). Property lookups are instant.

      var myList = ["hello", "hola"];

      myList.push("bonjour");

      myList.unshift();

      myList.shift();

      //calculate the time complexity for the
      //native methods above (separately)


The push method is constant time, O(1), while shift and unshift are linear time, O(N), because you must modify all elements of the array.

## Optimization with Caching

You can save the value of your loop to optimize time complexity at the cost of space complexity. See isUnique.js

## Memoization

Caching the value that a function returns

    const factorial = (n) => {
    // Calculations: n * (n-1) * (n-2) * ... (2) * (1)
        return factorial;
        }

        factorial(35);

        factorial(36); // factorial(36) = factorial(35) * 36

See memoization.js for example

## Recursion

Recursion is when a function calls itself

### Call Stack

    var callMe = function() {
        callMe();
        callMe();
        callMe('anytime');
    };

1. Push called Fn on stack
2. Execute Fn body until...
    
    ...another fn is called:
       Pause the current execution and start at step 1.
       
    ...a return is hit:
       Pop the current Fn off the stack.
       Resume executing the previous Fn.

### Recursion in four steps
    var callMyself = function() {

        if() {
            // base case
            return;
        } else {
            // recursive case
            callMyself();
        }
    
        return;
        };
1. Identify base case(s)
2. Identify recursive case(s)
3. Return where appropriate
4. Write procedures for each case that bring you closer to the base case(s)

### Recursion Vs. Loop

Recursion can always be implemented as a loop, but in some situations it is simpler to use recursion

### Common Patterns for Recursion

1. Wrapper functions (wrapper.js)
2. Accumulators (accumulator.js)

## Divide and Conquer

### Binary Search (Logarithmic Time)
Search for a value in a sorted array by cutting the side of the search area in half (binarySearch.js)

### Linear Search (Linear Time)
Search for a value in an array by checking each value in order. (linearSearch.js)

### Divide and Conquer
Recursive calls to a subset of the problem
0. Recognize base case
1. Divide: Break problem down during each call
2. Conquer: Do work on each subset
3. Combine: Solutions

### Sorting Types
#### Naive Sorts: Keep looping and comparing values until the list is sorted
Bubble Sort, insertion sort, selection sort
#### Divide and Conquer Sorts: Recursively divide lists and sort smaller parts of list until entire list is sorted
Mergesort and Quicksort

### Bubble Sort
Loop through an array, comparing adjacent indices and swapping the greater value to the end
![pasted-from-clipboard](https://user-images.githubusercontent.com/44857032/231650851-48ea4199-4ee8-459e-83f7-e8c10cf9a1eb.png)

### Merge Sort
Recursively merge sorted sub-lists
![Merge_sort_algorithm_diagram](https://user-images.githubusercontent.com/44857032/231650910-7cf493d4-856d-4370-824e-9e80272035e1.svg)

#### Merging Lists
The merge step takes two sorted lists and merges them into 1 sorted list
![Screen_Shot_2015-11-17_at_10 25 12_PM](https://user-images.githubusercontent.com/44857032/231651018-35da01a4-5ee0-495b-a3dd-e52fa9f7f21f.png)

## Merge Sort Step One
Divide input array into 'n' single element subarrays
![merge_sort_1](https://user-images.githubusercontent.com/44857032/231651254-76279013-42b0-45d9-b45f-961f7c2deb42.png)

## Merge Sort Step Two
Repeatedly merge subarrays and sort on each merge
![merge_sort_2](https://user-images.githubusercontent.com/44857032/231651347-cb98603f-a59f-4433-9e1d-222109de7183.png)
![merge_sort](https://user-images.githubusercontent.com/44857032/231651372-3c29785e-e7d9-4038-ac25-67de466fb609.gif)

## Pseudocode: Merge Sort
    mergeSort(list)
        base case: if list.length < 2, return
        break the list into halves L & R
        Lsorted = mergeSort(L)
        Rsorted = mergeSort(R)
        return merge(Lsorted, Rsorted)

    mergeSort(list)
        initialize n to the length of the list

        base case is if n < 2, just return

        initialize mid to n/2

        left = left slice of array to mid - 1

        right = right slice of array mid to n - 1

        mergeSort(left)
        mergeSort(right)

        merge(left, right)
        
This results in O(N logN) time complexity (bubblesort.js)
