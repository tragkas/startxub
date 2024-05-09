document.getElementById('downloadBtn').addEventListener('click', function() {
    // Find the hidden anchor element
    const link = document.getElementById('pdfLink');
    // Programmatically click the anchor element to initiate the download
    link.click();
});