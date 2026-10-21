__d("useWAWebMusicMsgPlayerState", [
    "WAWebMusicMsgPlayerStore",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const useSyncExternalStore = (e || (e = o("react"))).useSyncExternalStore;
    function u(e) {
        o("WAWebMusicMsgPlayerStore").MusicMsgPlayer.on("change", e);
        return function() {
            o("WAWebMusicMsgPlayerStore").MusicMsgPlayer.off("change", e);
        };
    }
    function c() {
        return o("WAWebMusicMsgPlayerStore").MusicMsgPlayer.getState();
    }
    function d() {
        return useSyncExternalStore(u, c);
    }
    l.default = d;
}, 98);