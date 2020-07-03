(() => {
    document.getElementById("upload").addEventListener("change", function () {
        if (this.value !== "") {
            let reader = new FileReader();
            reader.readAsDataURL(event.srcElement.files[0]);
            reader.onload = function () {
                document.getElementById("img").src = reader.result;
            }
        }
    });

    let blur = 0, hue = 0, cont = 100, bright = 100, gray = 0, inv = 0, opc = 100, sat = 100, sep = 0;

    let img = document.getElementById("img");
    let allElement = document.querySelectorAll("#contrast, #blur, #brightness, #grayscale, #hue-rotate, #invert, #opacity, #saturate, #sepia");
    let allElementArray = Array.prototype.slice.call(allElement);

    allElementArray.map((cur) => {
        cur.addEventListener('input', controls);
    });

    function controls() {
        let span = document.getElementById(this.id + "_value");

        if (this.id === "blur") blur = this.value;
        else if (this.id === "hue-rotate") hue = this.value;
        else if (this.id === "contrast") cont = this.value;
        else if (this.id === "brightness") bright = this.value;
        else if (this.id === "grayscale") gray = this.value;
        else if (this.id === "invert") inv = this.value;
        else if (this.id === "opacity") opc = this.value;
        else if (this.id === "saturate") sat = this.value;
        else if (this.id === "sepia") sep = this.value;

        img.style.filter = `blur(${blur}px) hue-rotate(${hue}deg) contrast(${cont}%) brightness(${bright}%) grayscale(${gray}%) invert(${inv}%) opacity(${opc}%) saturate(${sat}%) sepia(${sep}%)`;
        span.innerText = this.value;
    }
})();