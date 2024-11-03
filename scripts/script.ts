const generate = (loopAmount : number, values : string[]): string | number | void => {
    for (let amountOfIterations = 0; amountOfIterations <= 25; amountOfIterations++) {
        const displayGeneratedContent = document.createElement('div');
        for (let i = 0; i < loopAmount; i++) {
            const str : string = values[i];
            const arr : string[] = str.split("");
            arr.forEach((_, index) => {
                const randomIndex : number = Math.floor(Math.random() * arr.length);
                const t : string = arr[index];
                arr[index] = arr[randomIndex];
                arr[randomIndex] = t;
            });
            const outputString : string = arr.join("");
            displayGeneratedContent && (displayGeneratedContent.innerHTML += ` ${outputString} `);
        };
        document.body.append(displayGeneratedContent);
    };
    const buttonGone = document.getElementById('pppoopoo') as HTMLElement | null;
    buttonGone && (buttonGone.innerHTML = '');
    
};

const wordCount = (en : boolean): string | number | void => {

    const inputElement = document.getElementById('inputValue') as HTMLInputElement | null;
    const inputValue : string = inputElement?.value || '';
    const inputArray : string[] = inputValue.trim().split(/\s+/);
    const count : number = inputArray.length;

    if (en) {
        generate(count, inputArray);
        return;
    };

    console.log(count);
};

