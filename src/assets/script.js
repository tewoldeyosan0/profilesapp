document.getElementById('profileForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  try {
    const res = await fetch('https://your-api-id.execute-api.us-east-1.amazonaws.com/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, message })
    });

    const result = await res.json();
    document.getElementById('response').innerText = 'Saved successfully!';
  } catch (err) {
    document.getElementById('response').innerText = 'Error saving message.';
    console.error(err);
  }
});
