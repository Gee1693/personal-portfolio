'use strict';

const controls = {

    themeBtn:document.createElement('anchor'),

    init:function () {

        this.themeBtn.addEventListener('click', this.toggleTheme, false);

        document.body.appendChild(this.themeBtn);
        this.themeBtn.classList.add('themeBtn');
        this.themeBtn.textContent = 'Light Theme';

    },


    toggleTheme: function () {

        const body = this.getAttribute('aria-expanded');

        if (body === 'false') {

            this.parentNode.classList.add('darkTheme');
            this.parentNode.classList.remove('lightTheme');
            this.setAttribute('aria-expanded', 'true');
            this.textContent = 'Light Theme';


        }

        else {
            this.parentNode.classList.add('lightTheme');
            this.parentNode.classList.remove('darkTheme');
            this.setAttribute('aria-expanded', 'false');
            this.textContent = 'Dark Theme';
        }

    }

}

controls.init()