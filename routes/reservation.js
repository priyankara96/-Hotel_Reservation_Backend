const router = require("express").Router();
const Reservation = require("../models/reservations");
const extractToken = require("../TokenExtract");
const jwt_decode = require('jwt-decode');

//Add a reservation
router.post("/reservations", async (req, res) => {
    try {
        const decodeHeader = jwt_decode(extractToken(req));
        const userID = decodeHeader.data._id;
        console.log("header", decodeHeader);
        console.log("ID : ", userID);
        const reserve = new Reservation({
            roomType: req.body.roomType,
            checkIn: req.body.checkIn,
            checkOut: req.body.checkOut,
            noOfRooms: req.body.noOfRooms,
            noOfKids: req.body.noOfKids,
            noOfAdults: req.body.noOfAdults,
            userID:userID
        });
        const savedReserve = await reserve.save();
        if (savedReserve) {
            res.status(201).send({ message: "success", data: savedReserve });
        } else {
            res.status(400).send({ message: "failed", data: savedReserve });
        }
        console.log("result , ", savedReserve);
    } catch (err) {
        console.log("error in reserving room", err);
        res.status(500).send({ message: "failed", data: err });
    }
});

//Get a reservation
router.get("/reservation/:id", async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        res.json(reservation);
        console.log("result , ", reservation);
    } catch (err) {
        console.log("error in getting reservation details", err);
        res.status(204).send({ message: "failed", data: err });
    }
});

//Get all reservations- need for admin
router.get("/reservations", async (req, res) => {
    try {
        const allReservations = await Reservation.find(req.params);
        res.json(allReservations);
        console.log("result , ", allReservations);
    } catch (err) {
        console.log("error in get reservations", err);
        res.status(204).send({ message: "failed", data: err });
    }
});

//Get all reservations by one user
router.get("/reservations/:userID", async (req, res) => {
    try {
        const allReservations = await Reservation.find(req.params);
        res.json(allReservations);
        console.log("result , ", allReservations);
    } catch (err) {
        console.log("error in get reservations", err);
        res.status(204).send({ message: "failed", data: err });
    }
});

//update reservation
router.put("/reservations/:id", async (req, res) => {
    try {
        const allReservations = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(allReservations);
        console.log("result , ", allReservations);
    } catch (err) {
        console.log("error in updating reservation", err);
        res.status(204).send({ message: "failed", data: err });
    }

});

//
router.delete("/reservations/:id", async (req, res) => {
    try {
        const cancelReserve = await Reservation.findByIdAndRemove(req.params.id);
        res.json(cancelReserve);
        console.log("Cancelled reservation!");
    } catch (err) {
        console.log("error in deleting reservation", err);
        res.status(204).send({ message: "failed", data: err });
    }
});





module.exports = router;