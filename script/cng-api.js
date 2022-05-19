var CallnGo = (function () {

    function log() {
        console.log.apply(console, ["CallnGo: "].concat(Array.prototype.slice.call(arguments)));
    };

    function init(parameters) {
        log("init");
    };

    var navigator = {
        goSlide: function (slideName) {
            log("navigator.goSlide: ", slideName);
        },//deprecated
        goBranch: function (branchName) {
            log("navigator.goSlide: ", branchName);
        },
        nextSlide: function () {
            log("navigator.nextSlide");
        },
        prevSlide: function () {
            log("navigator.prevSlide");
        }
    };

    var content = {
        show: function (contentName) {
            log("content.show: ", contentName);
        }
    };

    var storage = {
        getValue: function (id) {
            log("storage.getValue: ", id);
            return null;
        },
        setValue: function (id, name, value, local) {
            log("storage.setValue: ", id, name, value, local);
        },
        hasValue: function (id) {
            log("storage.hasValue: ", id);
            return false;
        }
    };

    var menu = {
        showNavigationMenu: function () {
            log("menu.showNavigationMenu");
        }
    };

    //public
    return {
        init: init,
        content: content,
        navigator: navigator,
        storage: storage,
        menu: menu,
        interactive:[]
    };

})();
