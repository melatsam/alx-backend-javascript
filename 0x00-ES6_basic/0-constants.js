export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
}

export function getLast() {
    return 'is okey';
}

export function taskNext() {
    let combination = 'But sometimes let';
   let x = combination += getLast();

    return x;
}
