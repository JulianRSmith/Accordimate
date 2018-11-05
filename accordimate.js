// Function called to run program
function accordimate(userSettings) {
    // Global variables
    var amList, settings;
    // SetUp Program Function
    function setUp() {
        amList = document.querySelectorAll("[aim]");
        // Generate Default Settings
        settings = {
            viewHeight: 0.75,
            viewHeightMob: 0.75,
            makeOpaque: true,
            globalClass: "",
            mobileWidth: 770,
            forget: false
        };
        // Replace default settings with users
        if (userSettings !== undefined) {
            for (var j = 0; j < Object.keys(userSettings).length; j++) {
                var userSetting = Object.keys(userSettings)[j];
                settings[userSetting] = userSettings[userSetting];
            }
        }
        // Action pre load
        for (var i = 0; i < amList.length; i++) {
            if (settings.makeOpaque) {
                amList[i].style.opacity = "0";
            }
        }
    }
    // Detects if the use is on mobile or not
    function ifMobile() {
        return window.innerWidth <= settings.mobileWidth;
    }
    // Detects if the item is in view or not
    function isInView(e) {
        var item = e.getBoundingClientRect();
        if (ifMobile()) {
            return item.top < (settings.viewHeightMob * window.innerHeight) && item.bottom >= 0;
        } else {
            return item.top < (settings.viewHeight * window.innerHeight) && item.bottom >= 0;
        }
    }
    // Action to take if in view
    function inView(e) {
        // Add delays
        if(ifMobile() && e.getAttribute("aim-delay-mob")) {
            e.style.webkitAnimationDelay = e.getAttribute("aim-delay-mob") + "s";
            e.style.animationDelay = e.getAttribute("aim-delay-mob") + "s";
        } else {
            if(e.getAttribute("aim-delay")) {
                e.style.webkitAnimationDelay = e.getAttribute("aim-delay") + "s";
                e.style.animationDelay = e.getAttribute("aim-delay") + "s";
            }
        }
        // Add chosen class to item
        if (ifMobile() && e.getAttribute("aim-class-mob")) {
            e.classList.add(e.getAttribute("aim-class-mob"));
        } else {
            if (e.getAttribute("aim-class")) {
                e.classList.add(e.getAttribute("aim-class"));
            }
        }
        // If there is a global class to add, add it
        if (settings.globalClass) {
            e.classList.add(settings.globalClass);
        }
    }
    function forget(e) {
        if (ifMobile() && e.getAttribute("aim-class-mob")) {
            e.classList.remove(e.getAttribute("aim-class-mob"));
        } else {
            if (e.getAttribute("aim-class")) {
                e.classList.remove(e.getAttribute("aim-class"));
            }
        }
        e.classList.remove(settings.globalClass);
    }
    // The main loop
    function mainLoop() {
        for (var i = 0; i<amList.length; i++) {
            // If item is in view
            if (isInView(amList[i])) {
                if (settings.makeOpaque) {
                    amList[i].style.opacity = "1";
                }
                inView(amList[i]);
            } else {
                if (settings.forget || amList[i].getAttribute("aim-forget") !== null){
                    forget(amList[i]);
                }
            }
        }
    }
    // SetUp Program
    setUp();
    // Run main loop
    mainLoop();
    // When the window scrolls
    window.addEventListener("scroll", mainLoop);
    // When the window is re-sized
    window.addEventListener("resize", mainLoop);
}