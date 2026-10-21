__d("WAWebQuotedMsgAdminGroupName.react", [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebEmojiText.react",
    "WAWebFindChatAction",
    "WAWebGroupMetadataCollection",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    const e = [
        "ref"
    ];
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useImperativeHandle, useState } = d;
    const _ = {
        description: {
            color: "xhslqc4",
            paddingTop: "x123j3cw",
            fontSize: "x1f6kntn",
            fontWeight: "xo1l8bm",
            lineHeight: "xyesn5m",
            $$css: true
        }
    };
    function f(t) {
        const a = o("react-compiler-runtime").c(53);
        let i;
        let l;
        if (a[0] !== t) {
            l = t.ref;
            i = babelHelpers.objectWithoutPropertiesLoose(t, e);
            a[0] = t;
            a[1] = i;
            a[2] = l;
        } else {
            i = a[1];
            l = a[2];
        }
        const u = i;
        const { isComposePreview, quotedGroupJid, quotedGroupSubject, quotedParentGroupJid } = u;
        const y = isComposePreview === undefined ? false : isComposePreview;
        let C;
        if (a[3] !== quotedGroupJid) {
            C = r("WAWebGroupMetadataCollection").get(quotedGroupJid)?.participants;
            a[3] = quotedGroupJid;
            a[4] = C;
        } else {
            C = a[4];
        }
        const v = C;
        const S = quotedParentGroupJid != null;
        const R = useState(false);
        const L = R[0];
        const E = R[1];
        let k;
        if (a[5] === Symbol.for("react.memo_cache_sentinel")) {
            k = function(t) {
                E(true);
            };
            a[5] = k;
        } else {
            k = a[5];
        }
        const onMouseOver = k;
        let T;
        if (a[6] === Symbol.for("react.memo_cache_sentinel")) {
            T = function(t) {
                E(true);
            };
            a[6] = T;
        } else {
            T = a[6];
        }
        const D = T;
        let x;
        if (a[7] === Symbol.for("react.memo_cache_sentinel")) {
            x = function(t) {
                E(false);
            };
            a[7] = x;
        } else {
            x = a[7];
        }
        const $ = x;
        let P;
        if (a[8] !== quotedGroupJid) {
            P = function() {
                const e = o("WAWebChatCollection").ChatCollection.get(quotedGroupJid);
                return e?.formattedTitle;
            };
            a[8] = quotedGroupJid;
            a[9] = P;
        } else {
            P = a[9];
        }
        const N = P;
        let M;
        if (a[10] !== v || a[11] !== quotedGroupJid || a[12] !== S) {
            M = (()=>{
                const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    const e = S && (v == null || !v.iAmMember());
                    if (!e) {
                        const t = yield o("WAWebFindChatAction").findOrCreateLatestChat(quotedGroupJid, "quotedMsgAdminGroupName");
                        const n = t.chat;
                        yield o("WAWebCmd").Cmd.openChatBottom({
                            chat: n,
                            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.QuotedMessage
                        });
                    }
                });
                return function() {
                    return e.apply(this, arguments);
                };
            })();
            a[10] = v;
            a[11] = quotedGroupJid;
            a[12] = S;
            a[13] = M;
        } else {
            M = a[13];
        }
        const w = M;
        let A;
        if (a[14] !== L || a[15] !== y) {
            A = function() {
                return !L && !y;
            };
            a[14] = L;
            a[15] = y;
            a[16] = A;
        } else {
            A = a[16];
        }
        const hoverable = A;
        let O;
        if (a[17] !== hoverable) {
            O = function() {
                return {
                    hoverable
                };
            };
            a[17] = hoverable;
            a[18] = O;
        } else {
            O = a[18];
        }
        useImperativeHandle(l, O);
        let B;
        if (a[19] !== N || a[20] !== quotedGroupSubject) {
            B = quotedGroupSubject ?? N();
            a[19] = N;
            a[20] = quotedGroupSubject;
            a[21] = B;
        } else {
            B = a[21];
        }
        const W = B;
        if (W == null) {
            return null;
        }
        let q;
        if (a[22] !== L || a[23] !== y) {
            q = ({
                0: "x1n2onr6 x78zum5 x6ikm8r x10wlt62 x16p640f x1liijdw xu342n7 xelbjmh x16pgt24",
                2: "x1ypdohk x1n2onr6 x78zum5 x6ikm8r x10wlt62 x16p640f x1liijdw xu342n7 xelbjmh x16pgt24",
                1: "x1n2onr6 x78zum5 x6ikm8r x10wlt62 xjbqb8w x1bczwif x17un8ov x1e7945m x11o6v7j",
                3: "x1ypdohk x1n2onr6 x78zum5 x6ikm8r x10wlt62 xjbqb8w x1bczwif x17un8ov x1e7945m x11o6v7j"
            })[!!L << 1 | !!y << 0];
            a[22] = L;
            a[23] = y;
            a[24] = q;
        } else {
            q = a[24];
        }
        const U = q;
        let V;
        if (a[25] !== W || a[26] !== S) {
            V = S ? s._("{subgroup-name}", [
                s._param("subgroup-name", W)
            ]) : null;
            a[25] = W;
            a[26] = S;
            a[27] = V;
        } else {
            V = a[27];
        }
        const H = V;
        let G;
        if (a[28] !== S) {
            G = S ? c.jsx(o("WAWebEmojiText.react").EmojiText, {
                xstyle: _.description,
                text: s._("Request to join")
            }) : null;
            a[28] = S;
            a[29] = G;
        } else {
            G = a[29];
        }
        const z = G;
        let j;
        if (a[30] !== y) {
            j = ({
                0: {
                    className: "x78zum5 x6ikm8r x10wlt62 xlyipyv"
                },
                1: {
                    className: "x78zum5 x6ikm8r x10wlt62 xlyipyv xh8yej3 xcr9lap x1f6kntn x1o168i8"
                }
            })[!!y << 0];
            a[30] = y;
            a[31] = j;
        } else {
            j = a[31];
        }
        const K = y ? "none" : "button";
        let Q;
        if (a[32] === Symbol.for("react.memo_cache_sentinel")) {
            Q = <span className="x1okw0bk x51ohtg x1w6zdaa"/>;
            a[32] = Q;
        } else {
            Q = a[32];
        }
        let X;
        if (a[33] !== y || a[34] !== S) {
            X = ({
                0: {
                    className: "x9f619 x78zum5 x1iyjqo2 x6s0dn4 x123j3cw xpdmqnj x1ykpatu xmzvs34 x6ikm8r x10wlt62"
                },
                2: {
                    className: "x9f619 x78zum5 x1iyjqo2 x6s0dn4 x6ikm8r x10wlt62 x1y1aw1k xpdmqnj xdvlbce x1iwz3mf"
                },
                1: {
                    className: "x9f619 x78zum5 x1iyjqo2 x123j3cw xpdmqnj x1ykpatu xmzvs34 x6ikm8r x10wlt62 xdt5ytf x7a106z x1yc453h"
                },
                3: {
                    className: "x9f619 x78zum5 x1iyjqo2 x6ikm8r x10wlt62 x1y1aw1k xpdmqnj xdvlbce x1iwz3mf xdt5ytf x7a106z x1yc453h"
                }
            })[!!y << 1 | !!S << 0];
            a[33] = y;
            a[34] = S;
            a[35] = X;
        } else {
            X = a[35];
        }
        let Y;
        if (a[36] !== W || a[37] !== H) {
            Y = H ?? s._("Group • {groupName}", [
                s._param("groupName", W)
            ]);
            a[36] = W;
            a[37] = H;
            a[38] = Y;
        } else {
            Y = a[38];
        }
        let J;
        if (a[39] !== Y) {
            const Component = o("WAWebEmojiText.react").EmojiText;
            J = <Component key="status" className="quoted-mention" text={Y} direction="auto"/>;
            a[39] = Y;
            a[40] = J;
        } else {
            J = a[40];
        }
        let Z;
        if (a[41] !== z || a[42] !== X || a[43] !== J) {
            Z = <div {...babelHelpers.extends({}, X, {
                children: [
                    J,
                    z
                ]
            })}/>;
            a[41] = z;
            a[42] = X;
            a[43] = J;
            a[44] = Z;
        } else {
            Z = a[44];
        }
        let ee;
        if (a[45] !== w || a[46] !== j || a[47] !== K || a[48] !== Z) {
            ee = <div {...babelHelpers.extends({}, j, {
                role: K,
                onClick: w,
                children: [
                    Q,
                    Z
                ]
            })}/>;
            a[45] = w;
            a[46] = j;
            a[47] = K;
            a[48] = Z;
            a[49] = ee;
        } else {
            ee = a[49];
        }
        let te;
        if (a[50] !== U || a[51] !== ee) {
            te = <div onMouseOver={onMouseOver} onMouseEnter={D} onMouseLeave={$} className={U}>{ee}</div>;
            a[50] = U;
            a[51] = ee;
            a[52] = te;
        } else {
            te = a[52];
        }
        return te;
    }
    l.QuotedMsgAdminGroupName = f;
}, 226);