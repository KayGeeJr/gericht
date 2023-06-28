'use client'

import React, { useState } from 'react';
import { SubHeading } from '../../components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsFillCalendarFill } from 'react-icons/bs';

import './Booking.css';

const Booking = () => {
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation here
    if (numberOfPeople === '' || selectedDate === null || selectedTime === '') {
      alert('Please fill in all the fields.');
      return;
    }

    // Display success message
    setShowPopup(true);
  };

  return (
    <div className="app__booking flex-col flex__center section__padding" id="booking">
      <div className="app__booking-title ">
        <SubHeading title="Reservations" />
        <h1 className="headtext__cormorant">Book A Table</h1>
      </div>

      <form className="app__forms" onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="app__booking-form ">
            <div className="app__booking-form_name">
              
            <input
                name="email"
                id="time"
                className="p__opensans"
                placeholder=' name'
              />
            </div>
          </div>

          <div className="app__booking-form_name">
          
          <input
                name="email"
                id="time"
                className="p__opensans"
                placeholder=' surname'
              />
            
          </div>

          <div className="app__booking-form flex__center">
            <div className="app__booking-form_name">
              
              <input
                name="email"
                id="time"
                className="p__opensans"
                placeholder=' email'
              />
               
            </div>
          </div>


          
        </div>
  <div className="inputs">
          <div className="app__booking-form ">
            <div className="app__booking-form_name">
              
              <select
                name="number"
                id="number"
                className="p__opensans"
                value={numberOfPeople}
                onChange={handleNumberOfPeopleChange}
              >
                <option value="">Number of People</option>
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4+ people</option>
              </select>
            </div>
          </div>

          <div className="app__booking-form_name">
          
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd"
              placeholderText=" Date: YYYY/MM/DD"
              id="date"
              name="date"
              className="custom-datepicker"
              
            />
            
          </div>

          <div className="app__booking-form flex__center">
            <div className="app__booking-form_name">
              
              <select
                name="time"
                id="time"
                className="p__opensans"
                value={selectedTime}
                onChange={handleTimeChange}
              >
                <option value="">Time</option>
                <option value="10 AM">10 AM</option>
                <option value="12 PM">12 PM</option>
                <option value="02 PM">02 PM</option>
                <option value="04 PM">04 PM</option>
                <option value="06 PM">06 PM</option>
                <option value="08 PM">08 PM</option>
                <option value="10 PM">10 PM</option>
              </select>
            </div>
          </div>


          
        </div>

        <button type="submit" className="custom__button pt-10 btn">
          Book Now
        </button>
      </form>

      {showPopup && (
        <div className="popup">
          <p className="p__cormorant2">Message sent! Thank you for booking.<br/> An email will be sent to confirm all details </p>
        </div>
      )}
    </div>
  );
};

export default Booking;
