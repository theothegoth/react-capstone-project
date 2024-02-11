import React, { useReducer, useEffect } from 'react';
import BookingForm from './BookingForm'; // Import the BookingForm component
import { fetchAPI, submitAPI } from './mockAPI'; // Import the fetchAPI function
import { useNavigate } from 'react-router-dom';

// Reducer function to update availableTimes state based on the selected date
const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.payload; // Update available times with fetched data
        default:
            return state;
    }
};

function BookingPage() {
    const navigate = useNavigate();
    // Initialize availableTimes state using reducer
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, []);

    // Function to handle state change when the selected date changes
    const updateTimes = async (selectedDate) => {
        try {
            // Call fetchAPI to get available times for the selected date
            const fetchedTimes = await fetchAPI(selectedDate);
            // Dispatch action to update availableTimes based on the fetched data
            dispatch({ type: 'UPDATE_TIMES', payload: fetchedTimes });
        } catch (error) {
            console.error('Error fetching available times:', error);
        }
    };

    // Function to submit form data
    const submitForm = async (formData) => {
        try {
            // Call the submitAPI function and wait for the result
            const result = await submitAPI(formData);
            // If the submission is successful, navigate to the booking confirmation page
            if (result) {
                navigate('/confirmed'); // Navigate to the booking confirmation page
            } else {
                console.error('Form submission failed.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    // Example useEffect to demonstrate updating availableTimes based on selected date
    useEffect(() => {
        // Simulated API call to fetch available times based on the selected date
        const selectedDate = new Date().toISOString().split('T')[0]; // Get today's date
        updateTimes(selectedDate);
    }, []);

    return (
        <div>
            <h1>Booking Page</h1>
            <p>Fill out the form below to book your appointment.</p>
            {/* Render the BookingForm component */}
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </div>
    );
}

export default BookingPage;
