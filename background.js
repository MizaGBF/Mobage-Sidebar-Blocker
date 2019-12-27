chrome.webRequest.onBeforeRequest.addListener(
    function(){ return {cancel: true}; },
        {
            urls: ["https://cdn-connect.mobage.jp/jssdk/mobage-menubar.*.js"],
            types: ["script"]
        },
    ["blocking"]
);