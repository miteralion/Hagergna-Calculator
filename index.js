var input = document.getElementById("input");
        var timerId;
        var isButtonActive = false;

        function addToInput(value) {
            input.value += value;
        }

        function removeLastCharacter() {
            var currentInput = input.value;
            if (currentInput.length > 0) {
                input.value = currentInput.slice(0, -1);
            }
        }

        function validateInput(event) {
            var key = event.key;
            var isNumericKey = /^[0-9]$/.test(key);

            if (!isNumericKey && key !== "Backspace") {
                event.preventDefault();
            }
        }

        function startTimer() {
            isButtonActive = true;
            timerId = setTimeout(function () {
                if (isButtonActive) {
                    input.value = ''; // Remove everything
                }
            }, 1000);
        }

        function stopTimer() {
            isButtonActive = false;
            clearTimeout(timerId);
            removeLastCharacter();
        }

        function calculate() {
            var expression = input.value.trim();

            if (expression !== "") {
                try {
                    var answer = eval(expression);
                    if (Number.isFinite(answer)) {
                        input.value = answer;
                    } else {
                        input.value = "Error: Invalid expression";
                    }
                } catch (error) {
                    input.value = "Error: Invalid expression";
                }
            }
        }