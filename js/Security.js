class Security {

    constructor() {
        this.access1 = createInput("Code 1")
        this.access1.position(100, 90);
        this.access1.style('background', 'white');

        this.button1 = createButton('Check');
        this.button1.position(100, 120);
        this.button1.style('background', 'cyan');

        this.access2 = createInput("Code 2")
        this.access2.position(700, 190);
        this.access2.style('background', 'white');

        this.button2 = createButton('Check');
        this.button2.position(700, 220);
        this.button2.style('background', 'cyan');

        this.access3 = createInput("Code 3");
        this.access3.position(300, 390);
        this.access3.style('background', 'white');

        this.button3 = createButton('Check');
        this.button3.position(300, 420);
        this.button3.style('background', 'cyan');
    }

    display() {
        this.button1.mousePressed(() => {
            if (system.authenticate(accessCode1, this.access1.value())) {
                this.button1.hide();
                this.access1.hide();
                score++;
                num_answers++;
            }
            else {
                this.button1.hide();
                this.access1.hide();
                num_answers++;
                mistakes++;
            }
        });

        this.button2.mousePressed(() => {
            if (system.authenticate(accessCode2, this.access2.value())) {
                this.button2.hide();
                this.access2.hide();
                score++;
                num_answers++;
            }
            else {
                this.button2.hide();
                this.access2.hide();
                num_answers++;
                mistakes++;
            }
        });

        this.button3.mousePressed(() => {
            if (system.authenticate(accessCode3, this.access3.value())) {
                this.button3.hide();
                this.access3.hide();
                score++;
                num_answers++;
            }
            else {
                this.button3.hide();
                this.access3.hide();
                num_answers++;
                mistakes++;
            }
        });
    }

    showButtonsAndInputBoxes() {
        this.access1.show();
        this.access2.show();
        this.access3.show();
        this.button1.show();
        this.button2.show();
        this.button3.show();
    }
}
