__d("WAWebPttAudioMessageComponent.react", [
    "WAWebAudioFileIcon.react",
    "WAWebDetailImage.react",
    "WAWebFrontendMsgGetters",
    "WAWebMessageAuthor.react",
    "WAWebMsgGetters",
    "WAWebPttAudioBubble.react",
    "WAWebPttAudioMediaState.react",
    "WAWebPttAudioPlayedStatus",
    "WAWebPttFileIcon.react",
    "WAWebPttMessageComponent.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgDownloadMedia",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l) {
    const e = [
        "ref"
    ];
    const s = [
        "enableKbSeekSpeedChange"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useImperativeHandle, useRef } = d;
    function _(t) {
        const n = o("react-compiler-runtime").c(32);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const a_msgKey = a.msgKey;
        let d;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            d = [
                o("WAWebMsgGetters").getIsForwarded,
                o("WAWebFrontendMsgGetters").getSenderObj,
                o("WAWebFrontendMsgGetters").getAsPttLike,
                o("WAWebMsgGetters").getHasOriginatedFromNewsletter
            ];
            n[3] = d;
        } else {
            d = n[3];
        }
        const _ = o("useWAWebMsgValues").useMsgValues(a_msgKey, d);
        const g = _[0];
        const h = _[1];
        const y = _[2];
        const C = _[3];
        const bRef = useRef(null);
        o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(a_msgKey);
        let v;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            v = function() {
                return {
                    handleKeyActivation: function(t) {
                        bRef.current?.handleKeyActivation(t);
                    }
                };
            };
            n[4] = v;
        } else {
            v = n[4];
        }
        useImperativeHandle(i, v);
        if (y != null && !g) {
            let S;
            if (n[5] !== a) {
                const R = a;
                const L = R.enableKbSeekSpeedChange;
                const E = babelHelpers.objectWithoutPropertiesLoose(R, s);
                S = E;
                n[5] = a;
                n[6] = S;
            } else {
                S = n[6];
            }
            let k;
            if (n[7] !== S) {
                k = c.jsx(o("WAWebPttMessageComponent.react").Ptt, babelHelpers.extends({}, S));
                n[7] = S;
                n[8] = k;
            } else {
                k = n[8];
            }
            return k;
        }
        let I;
        if (n[9] !== a_msgKey || n[10] !== a.displayAuthor || n[11] !== a.displayType || n[12] !== h) {
            I = a.displayAuthor && h ? c.jsx(r("WAWebMessageAuthor.react"), {
                msgKey: a_msgKey,
                contact: h,
                displayType: a.displayType
            }) : null;
            n[9] = a_msgKey;
            n[10] = a.displayAuthor;
            n[11] = a.displayType;
            n[12] = h;
            n[13] = I;
        } else {
            I = n[13];
        }
        const T = I;
        let D;
        if (n[14] !== C || n[15] !== a_msgKey) {
            D = C ? c.jsx(r("WAWebPttAudioPlayedStatus"), {
                msgKey: a_msgKey
            }) : null;
            n[14] = C;
            n[15] = a_msgKey;
            n[16] = D;
        } else {
            D = n[16];
        }
        let x;
        if (n[17] !== a_msgKey || n[18] !== a.displayType || n[19] !== a.enableKbSeekSpeedChange || n[20] !== a.mediaData) {
            const Component = r("WAWebPttAudioMediaState.react");
            x = <Component ref={bRef} msgKey={a_msgKey} mediaData={a.mediaData} displayType={a.displayType} enableKbSeekSpeedChange={a.enableKbSeekSpeedChange}/>;
            n[17] = a_msgKey;
            n[18] = a.displayType;
            n[19] = a.enableKbSeekSpeedChange;
            n[20] = a.mediaData;
            n[21] = x;
        } else {
            x = n[21];
        }
        let $;
        if (n[22] !== a_msgKey) {
            $ = <F17 msgKey={a_msgKey}/>;
            n[22] = a_msgKey;
            n[23] = $;
        } else {
            $ = n[23];
        }
        let P;
        if (n[24] !== T || n[25] !== a_msgKey || n[26] !== a.displayType || n[27] !== a.quotedMsg || n[28] !== D || n[29] !== x || n[30] !== $) {
            P = c.jsx(r("WAWebPttAudioBubble.react"), {
                msgKey: a_msgKey,
                quotedMsg: a.quotedMsg,
                author: T,
                status: D,
                player: x,
                avatar: $,
                displayType: a.displayType
            });
            n[24] = T;
            n[25] = a_msgKey;
            n[26] = a.displayType;
            n[27] = a.quotedMsg;
            n[28] = D;
            n[29] = x;
            n[30] = $;
            n[31] = P;
        } else {
            P = n[31];
        }
        return P;
    }
    function F17(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_msgKey = e.msgKey;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = [
                o("WAWebFrontendMsgGetters").getAsPttLike,
                o("WAWebMsgGetters").getIsForwarded,
                o("WAWebMsgGetters").getHasOriginatedFromNewsletter,
                o("WAWebFrontendMsgGetters").getMsgSenderId
            ];
            t[0] = r;
        } else {
            r = t[0];
        }
        const a = o("useWAWebMsgValues").useMsgValues(e_msgKey, r);
        const i = a[0];
        const l = a[1];
        const s = a[2];
        const u = a[3];
        let d;
        if (t[1] !== u) {
            d = c.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: u,
                size: 55
            });
            t[1] = u;
            t[2] = d;
        } else {
            d = t[2];
        }
        const m = d;
        if (s) {
            return m;
        }
        if (i == null) {
            let p;
            if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                p = <div className="xnfjc3l x14h49td x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p">{c.jsx(o("WAWebAudioFileIcon.react").AudioFileIcon, {})}</div>;
                t[3] = p;
            } else {
                p = t[3];
            }
            return p;
        }
        if (l) {
            let _;
            if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
                _ = <div className="xnfjc3l x14h49td x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p">{c.jsx(o("WAWebPttFileIcon.react").PttFileIcon, {})}</div>;
                t[4] = _;
            } else {
                _ = t[4];
            }
            return _;
        }
        return m;
    }
    l.Audio = _;
}, 98);