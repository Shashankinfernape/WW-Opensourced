__d("WAWebClearAppStates", [
    "WAWebConnModel",
    "WAWebMediaStorage",
    "WAWebUserPrefsClearLocalState",
    "WAWebWindowsHybridBridgeInitiator",
    "asyncToGeneratorRuntime",
    "cr:17219"
], function(t, n, r, o, a, i, l) {
    function e() {
        return s.apply(this, arguments);
    }
    function s() {
        s = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
            let e;
            o("WAWebMediaStorage").delistAndDeleteAllMedia();
            o("WAWebUserPrefsClearLocalState").clearAllTemporaryStorageData();
            if (!(n("cr:17219") == null || (e = n("cr:17219").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebClearAppStates)) == null || (e = e.getPreferences()) == null)) {
                e.clean();
            }
            o("WAWebConnModel").Conn.blockStoreAdds = true;
        });
        return s.apply(this, arguments);
    }
    l.default = e;
}, 98);