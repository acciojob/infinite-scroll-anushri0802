// script.js

// Get the list element
const infiList = document.getElementById('infi-list');

// Function to generate list items
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${infiList.children.length + 1}`;
    infiList.appendChild(listItem);
  }
}

// Initially load 10 items
addListItems(100);

// Listen for the scroll event
infiList.addEventListener('scroll', () => {
  // Log scroll values to debug
  console.log('ScrollTop:', infiList.scrollTop);
  console.log('ClientHeight:', infiList.clientHeight);
  console.log('ScrollHeight:', infiList.scrollHeight);

  // Check if the user has scrolled to the bottom of the list
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    console.log('User reached the bottom, adding more items...');
    // Add more items as the user reaches the bottom
    addListItems(2);
  }
});
