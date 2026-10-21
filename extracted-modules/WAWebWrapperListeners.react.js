__d("WAWebWrapperListeners.react", [
    "WAWebCmd",
    "WAWebMediaDataGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebMediaDataValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const useEffect = (e || (e = o("react"))).useEffect;
    function u(e) {
        const t = o("react-compiler-runtime").c(8);
        const e_parent = e.parent;
        let r;
        if (t[0] !== e_parent) {
            r = function(t, r) {
                e_parent.scrollMsg(t, r);
            };
            t[0] = e_parent;
            t[1] = r;
        } else {
            r = t[1];
        }
        const a = r;
        let i;
        if (t[2] !== e_parent) {
            i = function(t) {
                e_parent.highlight?.(t);
            };
            t[2] = e_parent;
            t[3] = i;
        } else {
            i = t[3];
        }
        const l = i;
        let s;
        if (t[4] !== e_parent) {
            s = function() {
                e_parent.highlightMention?.();
            };
            t[4] = e_parent;
            t[5] = s;
        } else {
            s = t[5];
        }
        const u = s;
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "scroll_to_focused_msg", a);
        let c;
        if (t[6] !== l) {
            c = function(t) {
                return l(t);
            };
            t[6] = l;
            t[7] = c;
        } else {
            c = t[7];
        }
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "flash_focused_msg", c);
        o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "flash_mention_msg", u);
        return null;
    }
    function c(e) {
        const t = o("react-compiler-runtime").c(2);
        const { msgId, parent, selectedMessages } = e;
        let i;
        if (t[0] !== parent) {
            i = function(t) {
                parent.onSelectChange(t);
            };
            t[0] = parent;
            t[1] = i;
        } else {
            i = t[1];
        }
        o("useWAWebListener").useListener(selectedMessages, msgId, i);
        return null;
    }
    function d(e) {
        const t = o("react-compiler-runtime").c(6);
        const e_forceUpdate = e.forceUpdate;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebMediaDataGetters").getIsGif
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebMediaDataValues").useMediaDataValues(e.mediaData, r);
        const i = a[0];
        let l;
        if (t[1] !== e_forceUpdate) {
            l = function() {
                e_forceUpdate();
            };
            t[1] = e_forceUpdate;
            t[2] = l;
        } else {
            l = t[2];
        }
        let u;
        if (t[3] !== e_forceUpdate || t[4] !== i) {
            u = [
                i,
                e_forceUpdate
            ];
            t[3] = e_forceUpdate;
            t[4] = i;
            t[5] = u;
        } else {
            u = t[5];
        }
        useEffect(l, u);
        return null;
    }
    l.WhileFocusedListener = u;
    l.SelectionListener = c;
    l.MediaListener = d;
}, 98);