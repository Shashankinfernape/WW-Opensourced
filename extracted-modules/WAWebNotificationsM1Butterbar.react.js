__d("WAWebNotificationsM1Butterbar.react", [
    "fbt",
    "WAWebTabOrder",
    "WDSBanner.react",
    "WDSIconIcNotificationsOff.react",
    "WDSIconIcUnread.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c() {
        return s._("Get message notifications");
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    function d() {
        return s._("Turn on");
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m() {
        return s._("Make sure you know when you have new messages.");
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p() {
        return s._("You’ll only be notified if you’re logged in and WhatsApp is open on a tab.");
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(e, t) {
        if (e && t) {
            return s._("Message and call notifications are off.");
        }
        if (t) {
            return s._("Call notifications are off.");
        }
        return s._("Message notifications are off.");
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f(e, t) {
        if (e && t) {
            return s._("Message and call notifications are off");
        }
        if (t) {
            return s._("Call notifications are off");
        }
        return s._("Message notifications are off");
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g(e, t) {
        if (e && t) {
            return s._("Get notifications for messages, groups, or calls.");
        }
        if (t) {
            return s._("Get notifications for calls.");
        }
        return s._("Get notifications for messages or groups.");
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    function h(e) {
        const t = o("react-compiler-runtime").c(22);
        const { bannerVariant, callsOff, messagesOff, onAction, onDismiss, ref } = e;
        const y = callsOff === undefined ? false : callsOff;
        const C = messagesOff === undefined ? true : messagesOff;
        let b;
        let v;
        let S;
        if (bannerVariant === 1) {
            let R;
            if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
                R = c();
                t[0] = R;
            } else {
                R = t[0];
            }
            b = R;
            let L;
            if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
                L = m();
                t[1] = L;
            } else {
                L = t[1];
            }
            v = L;
            S = r("WDSIconIcUnread.react");
        } else if (bannerVariant === 2) {
            let E;
            if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
                E = c();
                t[2] = E;
            } else {
                E = t[2];
            }
            b = E;
            let k;
            if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                k = p();
                t[3] = k;
            } else {
                k = t[3];
            }
            v = k;
            S = r("WDSIconIcUnread.react");
        } else if (bannerVariant === 3) {
            b = null;
            let I;
            if (t[4] !== y || t[5] !== C) {
                I = _(C, y);
                t[4] = y;
                t[5] = C;
                t[6] = I;
            } else {
                I = t[6];
            }
            v = I;
            S = r("WDSIconIcNotificationsOff.react");
        } else {
            let T;
            if (t[7] !== y || t[8] !== C) {
                T = f(C, y);
                t[7] = y;
                t[8] = C;
                t[9] = T;
            } else {
                T = t[9];
            }
            b = T;
            let D;
            if (t[10] !== y || t[11] !== C) {
                D = g(C, y);
                t[10] = y;
                t[11] = C;
                t[12] = D;
            } else {
                D = t[12];
            }
            v = D;
            S = r("WDSIconIcNotificationsOff.react");
        }
        let x;
        if (t[13] === Symbol.for("react.memo_cache_sentinel")) {
            x = {
                className: "x1380le5 x14mko6t xefnzgg x1uvdrpn"
            };
            t[13] = x;
        } else {
            x = t[13];
        }
        let $;
        if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
            $ = d();
            t[14] = $;
        } else {
            $ = t[14];
        }
        let P;
        if (t[15] !== S || t[16] !== onAction || t[17] !== onDismiss || t[18] !== ref || t[19] !== v || t[20] !== b) {
            const Component = r("WDSBanner.react");
            P = <div {...babelHelpers.extends({}, x, {
                children: <Component ref={ref} actionText={$} onAction={onAction} title={b} body={v} type="default" onDismiss={onDismiss} icon={S} tabOrder={o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR} testid="chat_list_notifications_banner"/>
            })}/>;
            t[15] = S;
            t[16] = onAction;
            t[17] = onDismiss;
            t[18] = ref;
            t[19] = v;
            t[20] = b;
            t[21] = P;
        } else {
            P = t[21];
        }
        return P;
    }
    l.default = h;
}, 226);