var express = require('express');
var router = express.Router();

Customer = require('../models/customer.js');
Invoice = require('../models/invoice.js');

Offer = require('../models/offerModel.js');

// Get All Offers
router.get('/', function(req, res){
	Offer.getOffers(function(err, offers){
		if(err){
			res.send(err);
		}
		res.json(offers);
	});
});

// Get Single Offer
router.get('/:id', function(req, res){
	Offer.getOfferById(req.params.id, function(err, offer){
		if(err){
			res.send(err);
		}
		res.json(Offer);
	});
});

// Add Offer
router.post('/', function(req, res){
	var offer = req.body;
	Offer.addOffer(offer, function(err, offer){
		if(err){
			res.send(err);
		}
		res.json(offer);
	});
});

// Update Offer
router.put('/:id', function(req, res){
	var id = req.params.id;
	var offer = req.body;
	Offer.updateOffer(id, offer, {}, function(err, offer){
		if(err){
			res.send(err);
		}
		res.json(offer);
	});
});

// Delete Offer
router.delete('/:id', function(req, res){
	var id = req.params.id;
	Offer.removeOffer(id, function(err, offer){
		if(err){
			res.send(err);
		}
		res.json(offer);
	});
});


module.exports = router;