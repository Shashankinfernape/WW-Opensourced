__d("WAWebReconnectUtil", [
    "WAWebSocketModel",
    "WAWebStreamGetters",
    "WAWebStreamModel"
], function(t, n, r, o, a, i, l) {
    const e = function() {
        const e = this;
        this.isReconnecting = false;
        this.reconnectIfDisconnected = function() {
            if (!e.isReconnecting && o("WAWebStreamGetters").getDisplayInfo(o("WAWebStreamModel").Stream) === o("WAWebStreamModel").StreamInfo.OFFLINE) {
                e.isReconnecting = true;
                o("WAWebSocketModel").Socket.summary();
                self.setTimeout(function() {
                    return e.isReconnecting = false;
                }, 3000);
            }
        };
    };
    const reconnectIfDisconnected = new e().reconnectIfDisconnected;
    l.reconnect = reconnectIfDisconnected;
}, 98);