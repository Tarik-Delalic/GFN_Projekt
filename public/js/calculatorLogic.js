const buttons = document.querySelectorAll('#calculator button');
const input = document.getElementById('result');

buttons.forEach(element => {
    element.addEventListener('click', () => {
        const value = element.value;
        if (element.value === '=') {

            try {
                input.value = eval(input.value);
            }
            catch (err) {
                input.value = 'Error';
            }
            return;
        }
        if (element.value === 'AC') {
            input.value = input.value.slice(0, -1);
            return;
        }
        if (element.value === 'DC') {
            input.value = '';
            return;
        }
        if (['+', '-', '*', '/'].includes(value)) {
            // Avoid adding multiple operators in a row
            const lastChar = input.value.slice(-1);
            if (['+', '-', '*', '/'].includes(lastChar)) {
                input.value = input.value.slice(0, -1); // Replace the last operator
            }
        }

        input.value += value;

    })
});