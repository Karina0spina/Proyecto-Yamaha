document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const loginMessage = document.getElementById("loginMessage");

  const adminUser = {
    email: "admin@yamaha.com",
    password: "admin123"
  };

  if (email === adminUser.email && password === adminUser.password) {
    loginMessage.innerHTML = `<div class="alert alert-success">Bienvenido, administrador.</div>`;
    
    // Puedes redirigir a otra página como "panel.html"
    setTimeout(() => {
      window.location.href = "panel.html";
    }, 1000);
  } else {
    loginMessage.innerHTML = `<div class="alert alert-danger">Credenciales incorrectas.</div>`;
  }
});
