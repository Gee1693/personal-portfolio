"use strict";

const controls = {

    btn: document.createElement('button'),
    smAnchor: document.createElement('a'),
    mdAnchor: document.createElement('a'),
    lgAnchor: document.createElement('a'),


    init: function () {

        this.btn.addEventListener('click', this.toggleTheme, false);
        this.smAnchor.addEventListener('click', this.smallText, false);
        this.mdAnchor.addEventListener('click', this.mediumText, false);
        this.lgAnchor.addEventListener('click', this.largeText, false);
        this.smAnchor.addEventListener('click', function (smallText) {
            smallText.preventDefault()
        });
        this.mdAnchor.addEventListener('click', function (mediumText) {
            mediumText.preventDefault()
        });
        this.lgAnchor.addEventListener('click', function (largeText) {
            largeText.preventDefault()
        });


        // Creation and styling of div container
        const container = document.createElement('div');
        document.body.appendChild(container);
        container.classList.add('controlsContainer');
        container.setAttribute('aria-hidden', 'true');

        // Putting the theme button on the page 
        this.btn.appendChild(document.createTextNode('Dark Theme'));
        document.body.appendChild(this.btn);
        this.btn.classList.add('themeBtn')
        this.btn.setAttribute('type', 'button');

        //Resizing small text button
        this.smAnchor.appendChild(document.createTextNode('A'))
        document.body.appendChild(this.smAnchor);
        this.smAnchor.classList.add('smAnchor');
        this.smAnchor.setAttribute('type', 'button');
        this.smAnchor.setAttribute('aria-label', 'Regular Text Size');
        this.smAnchor.href = '#';

        //Resizing medium text button
        this.mdAnchor.appendChild(document.createTextNode('A'));
        document.body.appendChild(this.mdAnchor);
        this.mdAnchor.classList.add('mdAnchor');
        this.mdAnchor.setAttribute('type', 'button');
        this.mdAnchor.setAttribute('aria-label', 'Larger Text Size');
        this.mdAnchor.href = '#';

        //Resizing large text button
        this.lgAnchor.appendChild(document.createTextNode('A'));
        document.body.appendChild(this.lgAnchor);
        this.lgAnchor.classList.add('lgAnchor');
        this.lgAnchor.setAttribute('type', 'button');
        this.lgAnchor.setAttribute('aria-label', 'Largest Text Size');
        this.lgAnchor.href = '#';

    },

    toggleTheme: function () {

        const body = this.getAttribute('aria-expanded');
        const blockquote = document.querySelector('blockquote');
        const blockClass = blockquote.classList;


        if (body === 'false') {

            // Light Theme
            this.parentNode.classList.add('lightThemeBody');
            this.parentNode.classList.remove('darkThemeBody');
            blockClass.remove('darkThemeBody')
            this.setAttribute('aria-expanded', 'true');
            this.textContent = "Dark Theme";

        }

        else {

            //Dark Theme
            this.parentNode.classList.add('darkThemeBody');
            this.parentNode.classList.remove('lightThemeBody');
            blockClass.add('darkThemeBody');
            this.setAttribute('aria-expanded', 'false');
            this.textContent = "Light Theme";

        }



    },


    smallText: function () {

        this.parentNode.classList.add('smtextResize');
        this.parentNode.classList.remove('mdTextResize');
        this.parentNode.classList.remove('lgTextResize');

    },



    mediumText: function () {

        this.parentNode.classList.add('mdTextResize');
        this.parentNode.classList.remove('smTextResize');
        this.parentNode.classList.remove('lgTextResize');

    },

    largeText: function () {

        this.parentNode.classList.add('lgTextResize');
        this.parentNode.classList.remove('smTextResize');
        this.parentNode.classList.remove('mdTextResize');

    },


}

controls.init();