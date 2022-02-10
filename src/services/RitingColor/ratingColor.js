export const getRatingColor = (rating) => {
    let color = '';
    if (rating > 7) {
        color = '#abe2ab'
    } else if (rating < 5) {
        color = '#f88'
    } else {
        color = '#fabd64'
    }
    return color;
}