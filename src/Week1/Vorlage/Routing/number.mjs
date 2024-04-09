export function range(from, to) {
    if (from < to) {
        return calculateRange(from, to);
    }
    return calculateRange(to, from);
}

function calculateRange(from, to) {
    if (from < to) {
        return [from].concat(calculateRange(from + 1, to));
    }
    return [to];
}