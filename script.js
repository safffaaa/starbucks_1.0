document.addEventListener("DOMContentLoaded", function () {
    const headings = document.getElementsByClassName('colour #fffff');

    for (let i = 0; i < headings.length; i++) {
        headings[i].addEventListener('mouseover', function () {
            this.style.color = "white";
        });

        headings[i].addEventListener('mouseout', function () {
            this.style.color = "lightrose";
        });
    }
});