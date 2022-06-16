export function taskFirst() {
    let task;
    task = 'I prefer const when I can.';
    return task;
}

export function getLast() {
    return 'is okey';
}

export function taskNext() {
   const combination;
    conbination = 'But sometimes let';
   combination += getLast();

    return combination;
}
