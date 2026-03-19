const Seat = require('../models/seatModel');
const Booking = require('../models/bookingModel');


// get all seats

const getSeats=async(req,res)=>{

    try {
        const seats = await Seat.find();
        res.json(seats);
        
    } catch (error) {
        res.status(500).json({error:error.message});
        
    }


}

// booking seats and user data

const bookSeats =async(req,res)=>{
    try {
        const {seats,name,email} = req.body;

        if(!seats || seats.length === 0){
           return  res.status(400).json({message:"no seats selected"})
        }
        if(!name || !email){
           return res.status(400).json({message:"name & email required"})
        }

        const alreadyBooked = await Seat.find({
            id: { $in: seats },
           booked: true,
        })

         if (alreadyBooked.length > 0) {
      return res.status(400).json({
        message: "Some seats already booked",
        seats: alreadyBooked,
      });

     

    }

       await Seat.updateMany(
      { id: { $in: seats } },
      { $set: { booked: true } }
    );
      const booking = await Booking.create({
      name,
      email,
      seats,
    });

    res.json({
      message: "Booking successful",
      booking,
    });
    } catch (error) {
         res.status(500).json({ error: error.message });
        
    }
}


const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




module.exports ={getSeats,bookSeats,getBookings} ;