export function sort(input: number[], order: "asc" | "desc" = "asc"): number[] {
  const arr = [...input]; 

  for (let i = 0; i < arr.length - 1; i++) {
    let selectedIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      const shouldSwap =
        order === "asc" ? arr[j] < arr[selectedIndex] : arr[j] > arr[selectedIndex];

      if (shouldSwap) {
        selectedIndex = j;
      }
    }


    if (selectedIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[selectedIndex];
      arr[selectedIndex] = temp;
    }
  }

  return arr;
}
