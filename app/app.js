function handleResponse(isYes) {
    if (isYes) {
        window.location.href = 'yes'; // Redirect to a page for a positive response
    } else {
        window.location.href = 'no'; // Redirect to a page for a negative response
    }
}
