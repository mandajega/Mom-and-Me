function calculateOvulation() {
    const firstDayInput = document.getElementById('first-day');
    const cycleLengthInput = document.getElementById('cycle-length');
    const result1Div = document.getElementById('result1');
    const result2Div = document.getElementById('result2');
    
  
    const firstDay = new Date(firstDayInput.value);
    const cycleLength = parseInt(cycleLengthInput.value);
  
    if (isNaN(firstDay.getTime()) || isNaN(cycleLength)) {
      result1Div.textContent = 'Please enter valid input.';
      result2Div.textContent = 'Please enter valid input.';
      
      return;
    }
  
    const estimatedNextPeriod = new Date(firstDay);
    estimatedNextPeriod.setDate(firstDay.getDate() + cycleLength);
  
    const ovulationDate = new Date(estimatedNextPeriod);
    ovulationDate.setDate(estimatedNextPeriod.getDate() - 14);
  
    result1Div.textContent =`Estimated Next Period: ${estimatedNextPeriod.toLocaleDateString()}`;
    result2Div.textContent =`Estimated Ovulation Date: ${ovulationDate.toLocaleDateString()}`;
    
}
  
  function resetCalculator() {
    document.getElementById('first-day').value = '';
    document.getElementById('cycle-length').value = '';
    document.getElementById('result1').textContent = '';
    document.getElementById('result2').textContent = '';
  }
  