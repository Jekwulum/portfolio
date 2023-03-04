// contact details
function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  Email.send({
    SecureToken: "b85a1106-d346-4835-97ac-b22b744fa8a3",
    To: 'charlesnwoye2@gmail.com',
    From: "charlesnwoye2@gmail.com",
    Subject: `Website Email from ${name}`,
    Body: `${message} <br> My email: ${email}`
  }).then(
    message => {
      alert(message);
      location.reload();
    }
  );

};