__d("WAWebMusicChatsRefreshBatcher", [
    "WAWebMusicChatsConsumptionRefresherLoadable",
    "WAWebMusicGatingUtils"
], function(t, n, r, o, a, i, l) {
    const e = 300;
    const s = new Set;
    let u = null;
    function c(t) {
        if (o("WAWebMusicGatingUtils").isMusicOnChatsReceiverEnabled()) {
            s.add(t.toString());
            if (u == null) {
                u = self.setTimeout(d, e);
            }
        }
    }
    function d() {
        const e = Array.from(s);
        s.clear();
        u = null;
        o("WAWebMusicChatsConsumptionRefresherLoadable").refreshMusicChatsConsumptionLoadable(e);
    }
    l.requestMusicChatsRefresh = c;
}, 98);