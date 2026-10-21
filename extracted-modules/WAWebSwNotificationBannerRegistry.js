__d("WAWebSwNotificationBannerRegistry", [], function(t, n, r, o, a, i) {
    const e = new Map;
    const l = Math.random().toString(36).slice(2);
    let s = 0;
    function u(t) {
        const n = `swbanner:${l}:${s++}`;
        e.set(n, t);
        return n;
    }
    function c(t) {
        if (t != null) {
            e.delete(t);
        }
    }
    function d(t) {
        const n = t != null ? e.get(t) : null;
        n?.onClick();
        return n != null;
    }
    function m(t) {
        const n = t != null ? e.get(t) : null;
        n?.onClose();
        return n != null;
    }
    i.registerSwNotificationBanner = u;
    i.unregisterSwNotificationBanner = c;
    i.handleSwNotificationBannerClick = d;
    i.handleSwNotificationBannerClose = m;
}, 66);