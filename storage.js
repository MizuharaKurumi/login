function storePlaintext(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const data = {
    email: email,
    password: password  // ⚠️ PLAINTEXT storage
  };

  // Store in localStorage
  localStorage.setItem("user_" + email, JSON.stringify(data));

  document.getElementById("status").innerText = "Stored in localStorage as plaintext ✅";
}
