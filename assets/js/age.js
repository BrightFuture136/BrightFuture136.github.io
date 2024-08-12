function calculateAge(birthDate) {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();

  // If birth month is greater than current month, or it's the same month but the birth day has not passed yet, subtract a year from the age.
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }
  return age;
}

// Set your birthdate here (format: 'YYYY-MM-DD')
const birthDate = "1999-10-08"; // Example birthdate, please replace it with your actual birthdate.

document.getElementById("age").textContent = calculateAge(birthDate);
