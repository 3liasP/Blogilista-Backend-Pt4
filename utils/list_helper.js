const dummy = (blogs) => {
    return 1
}

const totalLikes = (array) => {
    // sums up the the likes of the elements in the given array
    return array.map(element => element.likes).reduce((a, b) => a + b, 0);
}

module.exports = {
    dummy,
    totalLikes
}