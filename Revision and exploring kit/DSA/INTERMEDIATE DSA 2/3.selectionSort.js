// let arr = [3, 1, 4, 2, 6, 5];
let arr = [6, 5, 4, 3, 2, 1];

// find index of minimum Element
// swap at 0 index to min elem index
// isme pahla Element hi pahle sort hota hai
// [1, 3, 4, 2, 6, 5]; // 1st iteration

// // fir se dusra min index find karo
// [1, 2, 4, 3, 6, 5]; // 2nd iteration

// [1, 2, 3, 4, 6, 5]; // 3rd iteration

// [1, 2, 3, 4, 6, 5] // 4th iteration

// [1, 2, 3, 4, 5, 6]; // 5th iteration

// (n-1) iteration

// let arr = [6, 5, 4, 3, 2, 1];
function selectionSort(arr, len) {
  for (let count = 0; count < arr.length - 1; count++) {
    let minIndex = count;
    // minIndex = 0;
    for (let j = count + 1; j < len; j++) {
      // j = 1 to n
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (count !== minIndex) {
      // minIndex = 5
      let temp = arr[count];
      arr[count] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  console.log("Array after sorting is ", arr);
}
selectionSort(arr, arr.length);

// Worst case time complexity of selection sort
// O(n^2)
// Best case time complexity Omega(n^2).
// Inplace sorting algo // yes (No extra space)
// space complexity = O(1)
// stable sorting algo ? // UnStable element
// same 2 element array me rakh kar compare karo
