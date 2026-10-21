__d("WAWebEventsRSVPPopup.react", [
    "fbt",
    "WAWebProtobufsE2E.pb",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWDSMenu"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const e_useImperativeHandle = e.useImperativeHandle;
    function d(e) {
        const t = o("react-compiler-runtime").c(34);
        const { controlPopupRef, currentResponse, onClick, onClose, triggerRef } = e;
        const m = currentResponse === undefined ? o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.UNKNOWN : currentResponse;
        let p;
        if (t[0] !== m || t[1] !== onClick) {
            p = function(t) {
                if (t !== m) {
                    onClick(t);
                }
            };
            t[0] = m;
            t[1] = onClick;
            t[2] = p;
        } else {
            p = t[2];
        }
        const _ = p;
        let f;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = s._("Going");
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = m === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING;
        let h;
        if (t[4] !== _) {
            h = function() {
                return _(o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.GOING);
            };
            t[4] = _;
            t[5] = h;
        } else {
            h = t[5];
        }
        let y;
        if (t[6] !== g || t[7] !== h) {
            const Component = r("WDSMenuItem.react");
            y = <Component testid="event_rsvp_going" title={f} isToggleable toggled={g} onPress={h}/>;
            t[6] = g;
            t[7] = h;
            t[8] = y;
        } else {
            y = t[8];
        }
        let C;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            C = s._("Maybe");
            t[9] = C;
        } else {
            C = t[9];
        }
        const b = m === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE;
        let v;
        if (t[10] !== _) {
            v = function() {
                return _(o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.MAYBE);
            };
            t[10] = _;
            t[11] = v;
        } else {
            v = t[11];
        }
        let S;
        if (t[12] !== b || t[13] !== v) {
            const Component = r("WDSMenuItem.react");
            S = <Component testid="event_rsvp_maybe" title={C} isToggleable toggled={b} onPress={v}/>;
            t[12] = b;
            t[13] = v;
            t[14] = S;
        } else {
            S = t[14];
        }
        let R;
        if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
            R = s._("Not going");
            t[15] = R;
        } else {
            R = t[15];
        }
        const L = m === o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING;
        let E;
        if (t[16] !== _) {
            E = function() {
                return _(o("WAWebProtobufsE2E.pb").Message$EventResponseMessage$EventResponseType.NOT_GOING);
            };
            t[16] = _;
            t[17] = E;
        } else {
            E = t[17];
        }
        let k;
        if (t[18] !== L || t[19] !== E) {
            const Component = r("WDSMenuItem.react");
            k = <Component testid="event_rsvp_not_going" title={R} isToggleable toggled={L} onPress={E}/>;
            t[18] = L;
            t[19] = E;
            t[20] = k;
        } else {
            k = t[20];
        }
        let I;
        if (t[21] !== S || t[22] !== k || t[23] !== y) {
            const Component = r("WDSMenu.react");
            I = <Component>{y}{S}{k}</Component>;
            t[21] = S;
            t[22] = k;
            t[23] = y;
            t[24] = I;
        } else {
            I = t[24];
        }
        const menu = I;
        let D;
        if (t[25] !== menu || t[26] !== onClose || t[27] !== triggerRef) {
            D = {
                targetRef: triggerRef,
                menu,
                position: "below",
                align: "middle",
                onClose
            };
            t[25] = menu;
            t[26] = onClose;
            t[27] = triggerRef;
            t[28] = D;
        } else {
            D = t[28];
        }
        const x = r("useWDSMenu")(D);
        const { closeMenu, menuPortal, openMenu } = x;
        let M;
        if (t[29] !== closeMenu || t[30] !== openMenu) {
            M = function() {
                return {
                    open: function(t) {
                        return openMenu();
                    },
                    close: closeMenu
                };
            };
            t[29] = closeMenu;
            t[30] = openMenu;
            t[31] = M;
        } else {
            M = t[31];
        }
        e_useImperativeHandle(controlPopupRef, M);
        let w;
        if (t[32] !== menuPortal) {
            w = <>{menuPortal}</>;
            t[32] = menuPortal;
            t[33] = w;
        } else {
            w = t[33];
        }
        return w;
    }
    l.default = d;
}, 226);