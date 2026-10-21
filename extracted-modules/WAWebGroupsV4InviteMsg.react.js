__d("WAWebGroupsV4InviteMsg.react", [
    "fbt",
    "WAWebFrontendMsgGetters",
    "WAWebGroupsV4InviteModalLoadable",
    "WAWebGroupsV4InviteMsg.stylex",
    "WAWebMediaLinkPreview.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageMeta.react",
    "WAWebMessageTextBubble.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProfileImage.react",
    "WAWebSpacerText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebIsMsgTrusted",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    function d(t) {
        const n = o("react-compiler-runtime").c(57);
        const { displayAuthor, msgKey } = t;
        let l;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let u;
            l = [
                (u = o("WAWebMsgGetters")).getId,
                u.getInviteCode,
                u.getInviteCodeExp,
                u.getInviteGrp,
                u.getInviteGrpName,
                u.getInviteGrpJpegThum,
                o("WAWebFrontendMsgGetters").getSenderObj,
                u.getComment,
                u.getIsSentByMe,
                u.getIsGroupMsg,
                u.getIsPSA,
                u.getIsGroupsV4InviteExpired,
                u.getType
            ];
            n[0] = l;
        } else {
            l = n[0];
        }
        const d = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const m = d[4];
        const thumb = d[5];
        const _ = d[6];
        const f = d[7];
        const g = d[8];
        const h = d[11];
        const y = r("useWAWebIsMsgTrusted")(msgKey);
        let C;
        if (n[1] !== msgKey) {
            C = function() {
                const t = o("WAWebMsgCollection").MsgCollection.get(msgKey)?.safe();
                if (!(t == null || t.type !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE)) {
                    o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebGroupsV4InviteModalLoadable").GroupsV4InviteModalLoadable, {
                        msg: t,
                        source: "invite_link"
                    }));
                }
            };
            n[1] = msgKey;
            n[2] = C;
        } else {
            C = n[2];
        }
        const b = C;
        const v = h;
        const S = m;
        let R;
        if (n[3] !== thumb) {
            R = c.jsx(r("WAWebProfileImage.react"), {
                size: 49,
                thumb
            });
            n[3] = thumb;
            n[4] = R;
        } else {
            R = n[4];
        }
        const L = R;
        const E = f != null && f !== "";
        let k;
        if (n[5] !== E || n[6] !== msgKey || n[7] !== y) {
            k = E ? <div>{c.jsx(r("WAWebMessageCaption.react"), {
                msgKey,
                spacer: true,
                trusted: y
            })}</div> : null;
            n[5] = E;
            n[6] = msgKey;
            n[7] = y;
            n[8] = k;
        } else {
            k = n[8];
        }
        const I = k;
        let T;
        if (n[9] !== b || n[10] !== E || n[11] !== v || n[12] !== g) {
            T = v ? null : c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                    {
                        label: g ? s._("View invite") : s._("Join group"),
                        onClick: b,
                        testid: "invite-v4-open-invite"
                    }
                ],
                theme: E ? undefined : o("WAWebMessageBubbleActions.react").BubbleActionsTheme.NO_DIVIDER
            });
            n[9] = b;
            n[10] = E;
            n[11] = v;
            n[12] = g;
            n[13] = T;
        } else {
            T = n[13];
        }
        const D = T;
        const x = !v || !I;
        let $;
        if (n[14] !== I || n[15] !== x || n[16] !== v || n[17] !== msgKey) {
            $ = x ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.meta, !I && o("WAWebGroupsV4InviteMsg.stylex").styles.metaNoCaption, v && !I && o("WAWebGroupsV4InviteMsg.stylex").styles.metaExpiredNoCaption), {
                children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                    msgKey
                })
            })}/> : null;
            n[14] = I;
            n[15] = x;
            n[16] = v;
            n[17] = msgKey;
            n[18] = $;
        } else {
            $ = n[18];
        }
        const P = $;
        let N;
        if (n[19] !== E || n[20] !== msgKey) {
            const Component = r("WAWebSpacerText.react");
            N = E ? s._("WhatsApp group invite") : <Component msgKey={msgKey}>{s._("WhatsApp group invite")}</Component>;
            n[19] = E;
            n[20] = msgKey;
            n[21] = N;
        } else {
            N = n[21];
        }
        const M = N;
        let w;
        if (v) {
            let A;
            if (n[22] !== I || n[23] !== msgKey) {
                const Component = r("WAWebSpacerText.react");
                A = I ? s._("Invite expired") : <Component msgKey={msgKey}>{s._("Invite expired")}</Component>;
                n[22] = I;
                n[23] = msgKey;
                n[24] = A;
            } else {
                A = n[24];
            }
            const F = A;
            let O;
            if (n[25] !== I) {
                O = (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.status, !I && o("WAWebGroupsV4InviteMsg.stylex").styles.statusExpiredNoCaption);
                n[25] = I;
                n[26] = O;
            } else {
                O = n[26];
            }
            let B;
            if (n[27] !== F || n[28] !== O) {
                B = <div {...babelHelpers.extends({}, O, {
                    children: F
                })}/>;
                n[27] = F;
                n[28] = O;
                n[29] = B;
            } else {
                B = n[29];
            }
            w = B;
        }
        let W;
        if (n[30] === Symbol.for("react.memo_cache_sentinel")) {
            W = (e || (e = r("stylex")))(o("WAWebGroupsV4InviteMsg.stylex").styles.container);
            n[30] = W;
        } else {
            W = n[30];
        }
        let q;
        if (n[31] !== I || n[32] !== v) {
            q = (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreview, (v || !I) && o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreviewNoMarginBottom);
            n[31] = I;
            n[32] = v;
            n[33] = q;
        } else {
            q = n[33];
        }
        const U = v ? undefined : b;
        const V = v ? "extended" : undefined;
        let H;
        if (n[34] !== L || n[35] !== S || n[36] !== g || n[37] !== M || n[38] !== U || n[39] !== V) {
            const Component = r("WAWebMediaLinkPreview.react");
            H = <Component description={M} isInvite isSentByMe={g} onClick={U} thumbnail={L} title={S} theme={V} isLoading={false}/>;
            n[34] = L;
            n[35] = S;
            n[36] = g;
            n[37] = M;
            n[38] = U;
            n[39] = V;
            n[40] = H;
        } else {
            H = n[40];
        }
        let G;
        if (n[41] !== H || n[42] !== q) {
            G = <div {...babelHelpers.extends({}, q, {
                children: H
            })}/>;
            n[41] = H;
            n[42] = q;
            n[43] = G;
        } else {
            G = n[43];
        }
        let z;
        if (n[44] !== I || n[45] !== P || n[46] !== msgKey || n[47] !== _ || n[48] !== w || n[49] !== G) {
            const Component = r("WAWebMessageBubbleHiddenText.react");
            z = <Component contact={_} msgKey={msgKey} className={W}>{G}{w}{I}{P}</Component>;
            n[44] = I;
            n[45] = P;
            n[46] = msgKey;
            n[47] = _;
            n[48] = w;
            n[49] = G;
            n[50] = z;
        } else {
            z = n[50];
        }
        let j;
        if (n[51] !== D || n[52] !== displayAuthor || n[53] !== x || n[54] !== msgKey || n[55] !== z) {
            const Component = r("WAWebMessageTextBubble.react");
            j = <Component msgKey={msgKey} displayAuthor={displayAuthor} hideMeta={x}>{z}{D}</Component>;
            n[51] = D;
            n[52] = displayAuthor;
            n[53] = x;
            n[54] = msgKey;
            n[55] = z;
            n[56] = j;
        } else {
            j = n[56];
        }
        return j;
    }
    l.default = d;
}, 226);