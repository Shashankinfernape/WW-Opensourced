__d("WAWebCallLogTitle.react", [
    "fbt",
    "WAWebCallLogMsgData.flow",
    "WAWebCallLogUtils",
    "WAWebContactCollection",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMobilePlatforms",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebName.react",
    "WAWebOrgMemberLidEligibility",
    "WAWebOrgNameWithIcon.react",
    "WAWebParticipantListUtils",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
    "useWAWebMsgValues",
    "useWAWebOrgMemberIdentity"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const c = {
        headerTitle: {
            maxWidth: "x193iq5w",
            overflowX: "x6ikm8r",
            overflowY: "x10wlt62",
            textOverflow: "xlyipyv",
            whiteSpace: "xuxw1ft",
            minWidth: "xeuugli",
            $$css: true
        }
    };
    function d(e) {
        const i = o("react-compiler-runtime").c(15);
        const { callLogMsg, filterPreset, isCallInfoHeader } = e;
        const g = isCallInfoHeader === undefined ? false : isCallInfoHeader;
        const h = o("WAWebMsgModelUtils").getMsgDisplayName(callLogMsg);
        let y;
        if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
            let C;
            y = [
                (C = o("WAWebMsgGetters")).getLabels,
                C.getCallParticipants,
                C.getIsCallLink,
                C.getCallOutcome,
                C.getIsSentByMe
            ];
            i[0] = y;
        } else {
            y = i[0];
        }
        const b = o("useWAWebMsgValues").useMsgValues(callLogMsg.id, y);
        const v = b[0];
        const S = b[1];
        const R = b[2];
        const L = b[3];
        const E = b[4];
        const k = S?.some(p) ?? false;
        const I = k ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        const T = S?.filter(function(e) {
            return !e.participant.equals(I);
        });
        const D = T?.length === 1 ? T[0].participant : null;
        let x;
        if (i[1] === Symbol.for("react.memo_cache_sentinel")) {
            x = [
                o("WAWebFrontendContactGetters").getIsGuest
            ];
            i[1] = x;
        } else {
            x = i[1];
        }
        const $ = o("useWAWebContactValues").useOptionalContactValues(D, x);
        const P = $?.[0] ?? false;
        const N = g || D == null ? null : o("WAWebContactCollection").ContactCollection.get(D);
        const M = g ? null : o("WAWebOrgMemberLidEligibility").getWAWebOrgMemberLid(N?.id ?? D);
        const w = r("useWAWebOrgMemberIdentity")(N, M);
        const w_displayName = w.displayName;
        const F = o("WAWebFrontendMsgGetters").getChat(callLogMsg);
        if (T != null && !F.id.isGroup()) {
            const O = o("WAWebCallLogUtils").sortCallParticipantWids(T.map(m), callLogMsg);
            if (T.length === 1) {
                const B = _(O[0], g, P);
                if (B != null) {
                    return B;
                }
            }
            const W = w_displayName ?? o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(O, false);
            let q;
            if (L !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing) {
                q = W;
            } else if (R != null && R) {
                if (T.length === 0) {
                    let U;
                    if (i[2] === Symbol.for("react.memo_cache_sentinel")) {
                        U = s._("Waiting for others...");
                        i[2] = U;
                    } else {
                        U = i[2];
                    }
                    q = U;
                } else {
                    q = E ? s._("Your call") : s._("{call-link-creator-name}'s call", [
                        s._param("call-link-creator-name", h)
                    ]).toString();
                }
            } else {
                if (T.length > 1) {
                    q = E ? s._("Your group call") : s._("{call-creator-name}'s group call", [
                        s._param("call-creator-name", h)
                    ]).toString();
                } else {
                    q = W;
                }
            }
            const membership = q === W ? w.membership : null;
            const H = g ? c.headerTitle : undefined;
            let G;
            if (i[3] !== q || i[4] !== H) {
                G = u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: q,
                    titlify: true,
                    ellipsify: true,
                    direction: "auto",
                    inlineblock: true,
                    xstyle: H
                });
                i[3] = q;
                i[4] = H;
                i[5] = G;
            } else {
                G = i[5];
            }
            let z;
            if (i[6] !== membership || i[7] !== G) {
                const Component = r("WAWebOrgNameWithIcon.react");
                z = <Component membership={membership}>{G}</Component>;
                i[6] = membership;
                i[7] = G;
                i[8] = z;
            } else {
                z = i[8];
            }
            return z;
        }
        const j = filterPreset?.label;
        let K;
        if (i[9] === Symbol.for("react.memo_cache_sentinel")) {
            K = o("WAWebMobilePlatforms").isSMB();
            i[9] = K;
        } else {
            K = i[9];
        }
        const Q = g ? c.headerTitle : undefined;
        let X;
        if (i[10] !== F || i[11] !== v || i[12] !== j || i[13] !== Q) {
            X = u.jsx(o("WAWebName.react").Name, {
                chat: F,
                labels: v,
                firstLabel: j,
                showLabelIcon: K,
                titlify: true,
                ellipsify: true,
                xstyle: Q
            });
            i[10] = F;
            i[11] = v;
            i[12] = j;
            i[13] = Q;
            i[14] = X;
        } else {
            X = i[14];
        }
        return X;
    }
    function m(e) {
        return e.participant;
    }
    function p(e) {
        return e.participant.isLid();
    }
    function _(e, t, n) {
        if (!n) {
            return null;
        }
        const r = o("WAWebContactCollection").ContactCollection.get(e);
        if (r == null) {
            return null;
        }
        return u.jsx(o("WAWebName.react").Name, {
            contact: r,
            showNotifyName: true,
            elevatedPushNamesEnabled: true,
            titlify: true,
            ellipsify: true,
            xstyle: t ? c.headerTitle : undefined
        });
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    l.default = d;
}, 226);