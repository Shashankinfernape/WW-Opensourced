__d("WAWebSignupLoadingState", [
    "WAWebEventEmitter"
], function(t, n, r, o, a, i, l) {
    const e = "change";
    const s = new Set;
    const u = new (r("WAWebEventEmitter"));
    function c(t, n) {
        let r;
        if (n) {
            r = !s.has(t);
            if (r) {
                s.add(t);
            }
        } else {
            r = s.delete(t);
        }
        if (r) {
            u.trigger(e);
        }
    }
    function d(e) {
        return s.has(e);
    }
    function m() {
        return u;
    }
    const p = e;
    l.setSignupLoading = c;
    l.isSignupLoading = d;
    l.getSignupLoadingEmitter = m;
    l.SIGNUP_LOADING_CHANGE_EVENT = p;
}, 98);