const text = document.querySelector(".sec-text");

let textArray = ['Desarrollador', 'La Fundación', "Codo a Codo"]
let count = 0;
const textLoad = () => {
    text.textContent = textArray[2]
    setInterval(() => {
        text.textContent = textArray[count]
        count++
        if (count > textArray.length - 1) {
            count = 0;
        }

    }, 4000)
}

textLoad()