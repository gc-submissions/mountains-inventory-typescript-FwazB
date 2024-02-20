interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

function findNameOfTallestMountain(mountains: Mountain[]) {
  if (mountains.length === 0) {
    return "";
  } else {
    let tallestMountain = mountains[0];
    for (let i = 1; i < mountains.length; i++) {
      if (mountains[i].height > tallestMountain.height) {
        tallestMountain = mountains[i];
      }
    }
    return tallestMountain.name;
  }
}
export { Mountain, findNameOfTallestMountain };
