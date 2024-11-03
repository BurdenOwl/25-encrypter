var generate = function (loopAmount, values) {
    for (var amountOfIterations = 0; amountOfIterations <= 25; amountOfIterations++) {
        var displayGeneratedContent = document.createElement('div');
        var _loop_1 = function (i) {
            var str = values[i];
            var arr = str.split("");
            arr.forEach(function (_, index) {
                var randomIndex = Math.floor(Math.random() * arr.length);
                var t = arr[index];
                arr[index] = arr[randomIndex];
                arr[randomIndex] = t;
            });
            var outputString = arr.join("");
            displayGeneratedContent && (displayGeneratedContent.innerHTML += " ".concat(outputString, " "));
        };
        for (var i = 0; i < loopAmount; i++) {
            _loop_1(i);
        }
        ;
        document.body.append(displayGeneratedContent);
    }
    ;
    var buttonGone = document.getElementById('pppoopoo');
    buttonGone && (buttonGone.innerHTML = '');
};
var wordCount = function (en) {
    var inputElement = document.getElementById('inputValue');
    var inputValue = (inputElement === null || inputElement === void 0 ? void 0 : inputElement.value) || '';
    var inputArray = inputValue.trim().split(/\s+/);
    var count = inputArray.length;
    if (en) {
        generate(count, inputArray);
        return;
    }
    ;
    console.log(count);
};
