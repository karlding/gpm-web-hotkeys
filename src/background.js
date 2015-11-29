var sendKey = function (button) {
    chrome.tabs.query({url: "https://play.google.com/music/*"}, function (tabs) {
        if (tabs.length === 0) {
            chrome.tabs.create({url: "https://play.google.com/music/"});
        }

        var code = "document.querySelectorAll(\"[icon='" + button + "']\")[0].click();";
        tabs.every(function (tab) {
            chrome.tabs.executeScript(tab.id, {code: code});
        });

        window.close();
    });
};

chrome.commands.onCommand.addListener(sendKey);
