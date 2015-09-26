// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    slideNumber: 'c / t',
    theme: Reveal.getQueryHash().theme,
    transition: Reveal.getQueryHash().transition || 'default',
    dependencies: [
        {
            src: '../lib/js/classList.js',
            condition: function () {
                return !document.body.classList;
            }
        },
        {
            src: '../plugin/markdown/marked.js',
            condition: function () {
                return !!document.querySelector('[data-markdown]');
            }
        },
        {
            src: '../plugin/markdown/markdown.js',
            condition: function () {
                return !!document.querySelector('[data-markdown]');
            }
        },
        {
            src: '../plugin/highlight/highlight.js',
            async: true,
            callback: function () {
                hljs.initHighlightingOnLoad();
            }
        },
        {
            src: '../plugin/zoom-js/zoom.js',
            async: true,
            condition: function () {
                return !!document.body.classList;
            }
        },
        {
            src: '../plugin/notes/notes.js',
            async: true,
            condition: function () {
                return !!document.body.classList;
            }
        }
    ]
});

if (window.location.search.match(/print-pdf/gi)) {
    (function () {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '../css/print/pdf.css';
        document.getElementsByTagName('head')[0].appendChild(link);
    }());
}
