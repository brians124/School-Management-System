/**
 * Login.js - Handles the sliding animation toggle
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Select the main wrapper
    const container = document.getElementById('container');

    // 2. Select the buttons inside the sliding overlay
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    /**
     * Trigger: 'Sign Up' button clicked
     * Result: Adds 'active' class. 
     * CSS takes over to slide the diagonal white panel to the left side.
     */
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    /**
     * Trigger: 'Sign In' button clicked
     * Result: Removes 'active' class.
     * CSS takes over to slide the diagonal blue panel back to the right side.
     */
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
});