var mongoose = require('mongoose');

// Offer Schema
var offerSchema = mongoose.Schema({
	offerID:{
		type: String,
		required: true
	},
	merchantID:{
		type: String,
		required: true
	},
	merchantName:{
		type: String,
		required: true
	},
	offerType:{
		type: String,
		required: true
	},
	categoryType:{
		type: String,
		required: true
	},
	categorySubType:{
		type: String,
		required: true
	},
	latitude:{
		type: String,
		required: true
	},
	longitude:{
		type: String,
		required: true
	},
	phoneNumber:{
		type: String,
		required: true
	},
	logoURL:{
		type: String,
		required: true
	},
	address:{
		street: String,
		city: String,
		state: String,
		country: String,
		zip: String,	
	},
	redemptionTimings:[{
           		description: {type:String, default: "Weeekdays"},
            	startTime: String,
            	endTime: String
    }],
	createdAt:{
		type: Date,
		default: Date.now
	},
});

var Offer = module.exports = mongoose.model('Offer', offerSchema);

// Get Offers
module.exports.getOffers= function(callback, limit){
	Offer.find(callback).limit(limit).sort([['distance', 'descending']]);
}

// Get Offers
module.exports.getOfferById = function(id, callback){
	Offer.findById(id, callback);
}

// Add Offesr
module.exports.addOffer = function(offer, callback){
	var add = {
		customer: offer.customer_id,
		service: offer.service,
		price: offer.price,
		due: offer.due,
		status: invoice.status
	}
	Offer.create(add, callback);
}

// Update Offers
module.exports.updateOffer = function(id, invoice, options, callback){
	var query = {_id: id};
	var update = {
		service: invoice.service,
		price: invoice.price,
		due: invoice.due,
		status: invoice.status
	}
	Offer.findOneAndUpdate(query, update, options, callback);
}

// Remove Offers
module.exports.removeOffer = function(id, callback){
	var query = {_id: id};
	Offer.remove(query, callback);
}