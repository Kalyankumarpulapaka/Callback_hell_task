document.addEventListener("DOMContentLoaded", function() {
    var data = document.getElementById("countdown");



        setTimeout(function () {
            data.innerHTML = "<h1>count :9</h1>";
            setTimeout(function () {
                data.innerHTML = "<h1>count :8</h1>";
                setTimeout(function () {
                    data.innerHTML = "<h1>count :7</h1>";
                    setTimeout(function () {
                        data.innerHTML = "<h1>count :6</h1>";
                        setTimeout(function () {
                            data.innerHTML = "<h1>count :5</h1>";
                            setTimeout(function () {
                                data.innerHTML = "<h1>count :4</h1>";
                                setTimeout(function () {
                                    data.innerHTML = "<h1>count :3</h1>";
                                    setTimeout(function () {
                                        data.innerHTML = "<h1>count :2</h1>";
                                        setTimeout(function () {
                                            data.innerHTML = "<h1>count :1</h1>";
                                            setTimeout(function () {
                                                data.innerHTML = `<h1 class="maintheme">Happy Independence Day</h1>`;
                                            }, 1000);   
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    });