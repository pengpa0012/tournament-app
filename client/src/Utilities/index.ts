export const halveArray = (arr: any[]): any => {
  if (arr.length === 1) {
    // Base case: array has only one element
    return arr[0];
  } else {
    // Recursive case: array has more than one element
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return halveArray(left) + halveArray(right);
  }
}