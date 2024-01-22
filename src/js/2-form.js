// SELECT HTML ELEMENTS TO WORK WITH
const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];

// SETUP REFERENCE TO LOCAL STORAGE DATA
document.addEventListener('DOMContentLoaded', () => {
  const storedLocStorData = localStorage.getItem('feedback-form-state');

  if (storedLocStorData) {
    const { email, message } = JSON.parse(storedLocStorData);
    // emailInput.value = email ?? '';
    emailInput.value = email || '';

    // messageInput.value = message ?? '';
    messageInput.value = message || '';
  }
});

// STORE TO LOCAL STORAGE
form.addEventListener('input', () => {
  const currentState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentState));
});

// STORE TO LOCAL STORAGE
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!emailInput.value.trim() || !messageInput.value.trim()) {
    console.log('Please fill out input fields.');
    return;
  }

  const currentLocStorData = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  console.log(currentLocStorData);

  localStorage.removeItem('feedback-form-state');

  // emailInput.value = '';
  // emailInput.value = email || '';
  // messageInput.value = '';
  // messageInput.value = message || '';
});

// SETUP TO EXPORT BY DEFAULT
export default {};
