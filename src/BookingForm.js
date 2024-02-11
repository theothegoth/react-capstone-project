import React, { useState,useEffect } from 'react';
import { fetchAPI } from './mockAPI'; // Import the fetchAPI function

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Log the formData before submission
        console.log('Form Data:', { date, time, guests, occasion });
        // Call the submitForm function with form data
        submitForm({ date, time, guests, occasion });
    };

    useEffect(() => {
        // Client-side validation logic
        const isFormValid = date && time && guests && occasion;
        setFormIsValid(isFormValid);
      }, [date, time, guests, occasion]);

    // Function to handle state change when the date form field is changed
    const handleDateChange = async (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        try {
            // Call fetchAPI to get available times for the selected date
            const fetchedTimes = await fetchAPI(selectedDate);
            // Update available times in the component state
            dispatch({ type: 'UPDATE_TIMES', payload: fetchedTimes });
        } catch (error) {
            console.error('Error fetching available times:', error);
        }
    };

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} required />
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Select a time</option>
                {availableTimes.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} required />
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Book Now" disabled={!formIsValid} onClick={handleSubmit} />
        </form>
    );
}

export default BookingForm;
