
//home page
const showHomePage = (req, res) => {
    res.render('home');
}

//show About Page
const showAboutPage = (req, res) => {
    res.render('page', {
        title: "About",
        desc: "This is our Aboout Page and we can see the page"
    });
}

//export
module.exports = {
    showHomePage,
    showAboutPage
}