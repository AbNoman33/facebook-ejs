
const marriage = (req, res, next) => {
    const { name, age, Email } = req.body;

    if (age >= 70) {
        res.send('You have come to site by wrong');
    } else {
        next();
    }
}

module.exports = {
    marriage
}