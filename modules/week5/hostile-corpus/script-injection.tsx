/**
 * @fileoverview
 */

/**
 * Image source on error to fetch the document cookies.
 * - inserted innerHTML scripts don't execute by browser rules
 * - use event handlers such as 'img on error'
 * 
 * 'img on error' Is typically used as a fallback image when the main element fails to load properly.
 * 
 * 1. Find an input field vulnerable (e.g., comment section or serach bar)
 * 2. Inject broken <img> element (XSS) to application backend by input form to target other victims (rather than locally on console), it bypasses if application doesn't protect cookies by HttpOnly flag.
 * Input Form → Web Server → Database → Victim's Browser.
 * 3. src='x' It loads a non-existent path X, triggering error. 
 * 4. On error executes the JS.
 * 5. Target the page and btoa encodes data in a base64 format to pass through the URL string without breaking from special characters.

IMG script: <img src=x onerror="document.getElementById('attacker-view').textContent = document.cookie + ' | ' + localStorage.authToken">
*/

/**
 * On-focus scripting
 * <input autofocus onfocus="document.getElementById('attacker-view').textContent = localStorage.authToken">
 */