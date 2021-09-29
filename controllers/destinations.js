const Flights = require('../models/flight')

module.exports = {
    create,
    delete: deleteDestination
}

function deleteDestination(req,res){
    Flights.findByIdAndDelete(req.params.id, function(err, destinationsToDelete) {
        if(err){
            console.log(err)
        } else {
            console.log('Deleted destination: ', destinationsToDelete, '<---- in deleteFlight controller function')
        }
    })
    res.redirect(`/flights`)
}

function create(req, res){
    // console.log(req.body)

    //find the flight
    Flights.findById(req.params.id, function(err, flightsDocument){
        if(err){
            console.log(err)
            res.send(err)
        }
        flightsDocument.destination.push(req.body);
        flightsDocument.save(function(err){
            res.redirect(`/flights/${req.params.id}`);
        })
    })
}