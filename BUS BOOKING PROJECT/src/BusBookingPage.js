// BusBookingPage.js

import React, { useState } from 'react';
import { Typography, Button, TextField, Grid, Paper, MenuItem } from '@mui/material';

const cities = ['Chennai', 'Coimbatore', 'Trichy', 'Madurai', 'Salem', 'Dindugal'];

const getRandomCities = (count) => {
  const shuffledCities = cities.sort(() => 0.5 - Math.random());
  return shuffledCities.slice(0, count);
};

const BusBookingPage = () => {
  const [selectedSeat, setSelectedSeat] = useState('');
  const [passengerName, setPassengerName] = useState('');
  const [fromDestination, setFromDestination] = useState('');
  const [toDestination, setToDestination] = useState('');

  const handleSeatSelection = (seatNumber) => {
    setSelectedSeat(seatNumber);
  };

  const handleBooking = () => {
    // In a real application, you would make an API request to book the seat.
    // This is a placeholder for demonstration purposes.
    alert(`Seat ${selectedSeat} booked for ${passengerName} from ${fromDestination} to ${toDestination}`);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '80vh' }}>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '500px', color: 'orange'}}>
        <center>
          <Typography variant="h4" style={{ marginBottom: '20px' }}>
            Bus Booking
          </Typography>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <TextField
                label="Passenger Name"
                fullWidth
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Select a seat"
                select
                fullWidth
                value={selectedSeat}
                onChange={(e) => setSelectedSeat(e.target.value)}
              >
                {Array.from({ length: 30 }, (_, index) => (
                  <MenuItem key={index + 1} value={`${index + 1}`}>
                    {index + 1}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="From Destination"
                select
                fullWidth
                value={fromDestination}
                onChange={(e) => setFromDestination(e.target.value)}
              >
                {getRandomCities(3).map((city, index) => (
                  <MenuItem key={index} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="To Destination"
                select
                fullWidth
                value={toDestination}
                onChange={(e) => setToDestination(e.target.value)}
              >
                {getRandomCities(3).map((city, index) => (
                  <MenuItem key={index} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <br />
          <Button variant="contained" color="primary" onClick={handleBooking}>
            Book Seat
          </Button>
        </center>
      </Paper>
    </Grid>
  );
};

export default BusBookingPage;
