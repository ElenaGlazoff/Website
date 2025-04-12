document.addEventListener("DOMContentLoaded", function(event) {
    // Capture the image element
    var thumbnailElement = document.getElementById("smart_thumbnail");

    // Event listener to toggle image size on click
    thumbnailElement.addEventListener("click", function() {
        // Check the current class to determine the action
        if (thumbnailElement.className === "small") {
            // Make the image large
            thumbnailElement.className = "large";
        } else {
            // Make the image small again
            thumbnailElement.className = "small";
        }
    });
});

