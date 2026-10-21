__d("WAWebMessageStatus", [
    "WAWebAck",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStatusUtils",
    "WDSIconWdsIcDelivered.react",
    "WDSIconWdsIcRead.react",
    "WDSIconWdsIcStatusPending.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useMemo = e.useMemo;
    const c = {
        light: {
            color: "x17t9dm2",
            $$css: true
        },
        ackBlue: {
            color: "x1rv0e52",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(24);
        const { associatedMessages, msgKey } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            let l;
            i = [
                (l = o("WAWebMsgGetters")).getAck,
                l.getIsMedia,
                l.getIsViewOnce,
                l.getCaption,
                l.getType,
                l.getLoc,
                l.getIsLive
            ];
            t[0] = i;
        } else {
            i = t[0];
        }
        const u = o("useWAWebMsgValues").useMsgValues(msgKey, i);
        const d = u[0];
        const m = u[1];
        const p = u[2];
        const _ = u[3];
        const f = u[4];
        const g = u[5];
        const h = u[6];
        const y = d ?? o("WAWebAck").ACK.CLOCK;
        const C = o("WAWebMessageAssociationUIUtils").getLowestAckState(y, f, associatedMessages);
        let b;
        if (t[1] !== _ || t[2] !== h || t[3] !== m || t[4] !== p || t[5] !== g || t[6] !== f) {
            b = m && r("isStringNullOrEmpty")(_) && !p && f !== o("WAWebMsgType").MSG_TYPE.AUDIO || f === o("WAWebMsgType").MSG_TYPE.LOCATION && !g && !h;
            t[1] = _;
            t[2] = h;
            t[3] = m;
            t[4] = p;
            t[5] = g;
            t[6] = f;
            t[7] = b;
        } else {
            b = t[7];
        }
        const v = b;
        let S;
        let R;
        let L;
        let E;
        let k;
        if (t[8] !== y || t[9] !== C) {
            const I = o("WAWebStatusUtils").getMessageStatusLabel(y);
            if (C < o("WAWebAck").ACK.SENT) {
                S = r("WDSIconWdsIcStatusPending.react");
                k = "wds-ic-status-pending";
            } else if (C === o("WAWebAck").ACK.SENT) {
                S = r("WDSIconWdsIcDelivered.react");
                k = "wds-ic-delivered";
            } else if (C === o("WAWebAck").ACK.RECEIVED) {
                S = r("WDSIconWdsIcRead.react");
                k = "wds-ic-read";
            } else {
                S = r("WDSIconWdsIcRead.react");
                k = "wds-ic-read";
                L = c.ackBlue;
            }
            R = S;
            E = I.toString();
            t[8] = y;
            t[9] = C;
            t[10] = S;
            t[11] = R;
            t[12] = L;
            t[13] = E;
            t[14] = k;
        } else {
            S = t[10];
            R = t[11];
            L = t[12];
            E = t[13];
            k = t[14];
        }
        const T = ` ${E} `;
        const D = S === r("WDSIconWdsIcStatusPending.react") ? 11 : undefined;
        const x = v && c.light;
        let $;
        if (t[15] !== L || t[16] !== x) {
            $ = [
                x,
                L
            ];
            t[15] = L;
            t[16] = x;
            t[17] = $;
        } else {
            $ = t[17];
        }
        let P;
        if (t[18] !== R || t[19] !== T || t[20] !== D || t[21] !== $ || t[22] !== k) {
            P = <R aria-label={T} height={D} testid={k} width={16} xstyle={$}/>;
            t[18] = R;
            t[19] = T;
            t[20] = D;
            t[21] = $;
            t[22] = k;
            t[23] = P;
        } else {
            P = t[23];
        }
        return P;
    }
    l.default = d;
}, 98);