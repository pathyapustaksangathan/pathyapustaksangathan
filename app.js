let pps = document.querySelector('.PPS');
function changeColor(color, delay, nextColor) {
    setTimeout(() => {
        pps.style.color = color;
        if (nextColor) nextColor();
    }, delay);
}
// changeColor('yellow', 1000, () => {
    changeColor('blue', 1000, () => {
        changeColor('red', 1000, () => {
            changeColor('aqua', 1000, () => {
                changeColor('orange', 1000, () => {
                    changeColor('pink', 1000, () => {
                        changeColor('green', 1000, () => {
                            changeColor('maroon', 1000, () => {
                                changeColor('', 1000,()=>{

                                });
                            });

                        });

                    });

                });

            });

        });

    });
// });