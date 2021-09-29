const Flights = require('../models/flight')

module.exports = {
    create,
    new: newFlight,
    index,
    show,
};

function show(req, res) {
    Flights.findById(req.params.id, function(err, flightsFromDatabase) {
        res.render('flights/show', {
            title: 'Flights detail', flightsFromDatabase
        })
        console.log(flightsFromDatabase)
    });
}

function index(req, res){

	Flights.find({}, function(err, flightsDocuments){ // <-- this moviesDocuments 
		//is the all the flights found in the database, (its always an array)

		// best practice
		console.log(flightsDocuments, ' <- flights documents') // if this isn't working log out the error

		res.render('flights/index', { // responding to the browser
			flights: flightsDocuments,// <-- remember the key is the variable name in flights/index
			title: 'Flights'
		})
	})
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req,res) {
    const flight = new Flights(req.body);
    flight.save(function(err) {
        //one way to handle errors
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights')
    })
}