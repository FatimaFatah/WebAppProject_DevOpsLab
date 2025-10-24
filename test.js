// Basic email validation function
function validateEmail(email) {
  return email.includes("@");
}

// Automated test example using simple JS
if (validateEmail("invalidEmail")) {
  console.error("❌ Test Failed: Invalid email passed validation");
  process.exit(1); // Fail pipeline
} else {
  console.log("✅ Test Passed: Invalid email rejected successfully");
}
