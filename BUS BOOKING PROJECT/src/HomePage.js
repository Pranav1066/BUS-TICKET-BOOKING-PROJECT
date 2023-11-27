import React from 'react';
import { Typography, Button, Grid, Card, CardContent, AppBar, Toolbar } from '@mui/material';
import logoImage from './Components/image/1a.png';

import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BusBookingPage from './BusBookingPage';
const HomePage = () => {
  const services = [

        {
          title: 'Comfortable Seats',
          description: 'Relax in our spacious and comfortable seats during your journey. Our seats are designed with ergonomics in mind to ensure a pleasant travel experience.',
          details: [
            'Adjustable headrests for added comfort',
            'Extra legroom for a relaxed journey',
            'Reclining seats for better rest',
            'Individual reading lights',
            'USB charging ports for devices',
          ],
          
        },
          
        {
          title: 'Free Wi-Fi',
          description: 'Stay connected with our complimentary onboard Wi-Fi service. Stream your favorite movies, connect with loved ones, or catch up on work while you travel.',
          details: [
            'High-speed internet connectivity',
            'Unlimited data usage',
            'Secured network for privacy',
            'Seamless browsing experience',
            'Connect multiple devices',
          ],
        },
        {
          title: 'On-Time Departure',
          description: 'Enjoy our punctual departure and arrival timings for a hassle-free journey. We prioritize timely service to make sure you reach your destination on schedule.',
          details: [
            'Regular maintenance of vehicles for reliability',
            'Adherence to strict schedules',
            'Efficient boarding and departure process',
            'Real-time updates on travel status',
            'Responsive customer service',
          ],
        },
        {
          title: 'Entertainment Options',
          description: 'Enhance your travel experience with our entertainment options. Enjoy movies, music, and more during your journey.',
          details: [
            'Onboard entertainment system',
            'Variety of movies and TV shows',
            'Music playlists for every taste',
            'Headphones available on request',
            'Interactive entertainment for kids',
          ],
        },
        {
          title: 'Refreshments',
          description: 'Satisfy your hunger with our onboard refreshments. Choose from a selection of snacks and beverages to enjoy during your trip.',
          details: [
            'Snacks and light meals available',
            'Beverages including hot and cold drinks',
            'Healthy snack options',
            'Special dietary options upon request',
            'Hygienic food handling and serving',
          ],
        },
        {
          title: 'Friendly Staff',
          description: 'Our dedicated staff is committed to providing you with excellent service throughout your journey.',
          details: [
            'Professional and courteous crew',
            'Assistance with luggage and seating',
            'Prompt response to passenger needs',
            'Safety and security measures',
            'Welcoming and helpful attitude',
          ],
        },
        {
          title: 'Luxury Amenities',
          description: 'Indulge in luxury with our premium amenities to elevate your travel experience.',
          details: [
            'Plush, spacious seating',
            'Personalized concierge service',
            'Exclusive access to lounges',
            'Gourmet dining options',
            'Complimentary premium entertainment',
          ],
        },
        {
          title: 'Travel Assistance',
          description: 'Our dedicated team ensures you have a hassle-free journey with expert guidance and support at every step.',
          details: [
            '24/7 customer support',
            'Assistance with travel planning',
            'Help with ticket modifications',
            'Guidance on local attractions',
            'Emergency assistance services',
          ],
        },
       
      ];
  return (
    <div>
    

      <AppBar position="static" sx={{ bgcolor: 'orange' }}>
        <Toolbar>
          <div style={{ flexGrow: 1 }} />
          <img src={logoImage} alt="Logo" width="100" height="100" />
          <Button color='inherit' component={Link} to="/signup">Login</Button>
          <Button color='inherit' component={Link} to="/login">Signup</Button>
        </Toolbar>
      </AppBar>

      <center>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ marginLeft: '300px' }}>
            <Typography variant="h2">Welcome to SAFE TRIP Website!</Typography><br />
            <Typography variant="body1">
              Explore our services and book your next trip.
            </Typography><br />
            <Link to="/book"><Button variant="contained" color="primary" >Book Now</Button></Link>
  

<br /><br /><br />

          </div>
        </div>
      </center>

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent sx={{ bgcolor: 'orange' }}>
                <Typography variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <footer style={{ marginTop: '20px', textAlign: 'center' }}>
        <section>
          <Typography variant="h3">About Us</Typography><br />
          <Typography variant="body1">
            Welcome to SAFE TRIP! We are dedicated to providing exceptional travel experiences with comfortable seats, free Wi-Fi, on-time departure, entertainment options, refreshments, and friendly staff.
            <br /> Our bus ticket booking website is committed to providing you with easy and hassle-free bus ticket bookings. We strive to offer a one-stop solution for all your bus travel needs, covering all major routes across the country...Embark on a journey of comfort and convenience with SAFE TRIP! Our mission is to elevate your travel experience by providing top-notch services throughout your trip. From spacious and ergonomically designed seats ensuring utmost comfort to offering complimentary onboard Wi-Fi allowing you to stay connected during your journey, we prioritize your satisfaction.
            Our commitment extends beyond mere amenities. We ensure punctuality in departure and arrival timings, allowing you to reach your destination hassle-free. With an array of entertainment options ranging from movies to music and an onboard refreshment selection, we aim to make your travel enjoyable and rejuvenating.
            At SAFE TRIP, our staff is not just dedicated but committed to providing exceptional service. From assisting with luggage to ensuring safety and security measures, our crew's professionalism and welcoming attitude are tailored to enhance your travel experience.
            Our bus ticket booking website simplifies the process, ensuring easy and efficient booking. With a user-friendly interface, secure payment options, and real-time seat selection, we've streamlined the process to make it effortless for you. Our extensive network covers major routes across the country, ensuring connectivity and accessibility wherever your journey takes you.
            Whether it's a short getaway or a long-haul adventure, SAFE TRIP promises a seamless travel experience, providing reliability, comfort, and convenience at every step of your journey.
          </Typography><br /><br /><br />
        </section>
        <Typography variant="body2">
          <center>
            © 2023 Bus Booking website. All Rights Reserved <br /><br />
            Contact us <br /><br />
            @9092495051 / @8838251296
          </center>
        </Typography>
      </footer>
        
      <Routes>
          <Route path="/book" element={<BusBookingPage />} />
        </Routes>
        
    </div>
  );
};

export default HomePage;
