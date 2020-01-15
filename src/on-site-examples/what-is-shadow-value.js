const elements = [10, 90, 20, 11];

function shuffleElements() {
    // this is a shadow:
    const elements = [];

    // Nie mogę już dostać się do outer scope
    // Dlatego że moja stała lokalna nazywa się tak samo
    // jak ta zdefiniowana w outer scope
    console.log(elements);
}
shuffleElements();