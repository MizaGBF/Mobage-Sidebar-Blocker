chrome.webRequest.onBeforeRequest.addListener(
    function(){ return {cancel: true}; },
        {
            urls: ["https://cdn-connect.mobage.jp/jssdk/mobage-menubar.2.6.0.min.js"],
            types: ["script"]
        },
    ["blocking"]
);