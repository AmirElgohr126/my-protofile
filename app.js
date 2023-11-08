(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


function downloadCV() {
    // Use JavaScript to trigger the download of the PDF file.
    var link = document.createElement("a");
    link.href = "amir nagy elgohr cv.pdf";
    link.download = "your-cv.pdf";
    link.click();
}