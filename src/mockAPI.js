const availableTimesByDate = {
    '2024-02-11': ['10:00', '11:00', '12:00'],
    '2024-02-12': ['10:00', '11:00', '12:00'],
    '2024-02-13': ['14:00', '15:00', '16:00'],
    '2024-02-14': ['10:00', '11:00', '12:00'],
    '2024-02-15': ['14:00', '15:00', '16:00'],
    '2024-02-16': ['10:00', '11:00', '12:00'],
    '2024-02-17': ['14:00', '15:00', '16:00'],
    '2024-02-19': ['10:00', '11:00', '12:00'],
    '2024-02-20': ['14:00', '15:00', '16:00'],
    '2024-02-21': ['10:00', '11:00', '12:00'],
    '2024-02-22': ['14:00', '15:00', '16:00'],
    '2024-02-23': ['10:00', '11:00', '12:00'],
    '2024-02-24': ['14:00', '15:00', '16:00'],
    '2024-02-25': ['10:00', '11:00', '12:00'],
    '2024-02-26': ['14:00', '15:00', '16:00'],
    '2024-02-15': ['10:00', '11:00', '12:00'],
    '2024-02-27': ['14:00', '15:00', '16:00'],
    '2024-02-28': ['10:00', '11:00', '12:00'],
    '2024-02-29': ['14:00', '15:00', '16:00'],
    '2024-03-01': ['10:00', '11:00', '12:00'],
    '2024-03-02': ['14:00', '15:00', '16:00'],
  };


  const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {

    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}