__d("useWAWebFilteredOutContacts", [
    "WAWebOutContactCollection",
    "WAWebOutContactInviteJourney",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef, useState } = s;
    function m() {
        return o("WAWebOutContactCollection").OutContactCollection.getContacts();
    }
    function useP() {
        const e = o("react-compiler-runtime").c(6);
        const tRef = useRef(false);
        const n = useState(m);
        const a = n[0];
        const i = n[1];
        let l;
        if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = function() {
                i(m());
            };
            e[0] = l;
        } else {
            l = e[0];
        }
        const s = r("useWAWebDebouncedCallback")(l, 50);
        let p;
        let _;
        if (e[1] === Symbol.for("react.memo_cache_sentinel")) {
            p = function() {
                if (!tRef.current) {
                    tRef.current = true;
                    o("WAWebOutContactInviteJourney").startOutContactInviteJourney();
                }
            };
            _ = [];
            e[1] = p;
            e[2] = _;
        } else {
            p = e[1];
            _ = e[2];
        }
        useEffect(p, _);
        let f;
        if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                "add",
                "change",
                "remove",
                "reset"
            ];
            e[3] = f;
        } else {
            f = e[3];
        }
        let g;
        if (e[4] !== s) {
            g = function() {
                s();
            };
            e[4] = s;
            e[5] = g;
        } else {
            g = e[5];
        }
        o("useWAWebListener").useListener(o("WAWebOutContactCollection").OutContactCollection, f, g);
        return a;
    }
    l.default = useP;
}, 98);