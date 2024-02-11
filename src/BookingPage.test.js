import { initializeTimes, updateTimes } from './BookingPage';

describe('initializeTimes function', () => {
  test('returns correct initial state', () => {
    // Arrange
    const expectedInitialState = [
      '10:00', '11:00', '12:00'
    ];

    // Act
    const initialState = initializeTimes();

    // Assert
    expect(initialState).toEqual(expectedInitialState);
  });
});

describe('updateTimes function', () => {
  test('updates available times based on selected date', () => {
    // Arrange
    const initialState = [
      '10:00', '11:00', '12:00'
    ];
    const selectedDate = '2024-02-13';
    const expectedUpdatedTimes = [
      '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'
    ];

    // Act
    const updatedTimes = updateTimes(initialState, selectedDate);

    // Assert
    expect(updatedTimes).toEqual(expectedUpdatedTimes);
  });

  // Add more test cases as needed
});
