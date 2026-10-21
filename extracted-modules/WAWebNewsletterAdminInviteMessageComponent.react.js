__d("WAWebNewsletterAdminInviteMessageComponent.react", [
    "fbt",
    "WAWebFrontendMsgGetters",
    "WAWebGroupsV4InviteMsg.stylex",
    "WAWebMediaLinkPreview.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageMeta.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebNewsletterViewInviteAction",
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
    const u_useCallback = u.useCallback;
    function m(t) {
        const n = o("react-compiler-runtime").c(59);
        const { displayAuthor, msgKey } = t;
        let l;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            let u;
            l = [
                (u = o("WAWebMsgGetters")).getId,
                o("WAWebFrontendMsgGetters").getSenderObj,
                u.getIsSentByMe,
                u.getIsNewsletterAdminInviteExpired,
                u.getNewsletterAdminInviteInfo,
                u.getType,
                o("WAWebFrontendMsgGetters").getIsNewsletterInviteAccepted,
                u.getTo
            ];
            n[0] = l;
        } else {
            l = n[0];
        }
        const d = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const m = d[1];
        const p = d[2];
        const _ = d[3];
        const f = d[4];
        const g = d[6];
        const invitee = d[7];
        const y = r("useWAWebIsMsgTrusted")(msgKey);
        const C = _ || g;
        let b;
        if (n[1] !== invitee || n[2] !== p || n[3] !== f?.inviteExpiration || n[4] !== f?.newsletterId) {
            b = function() {
                o("WAWebNewsletterViewInviteAction").viewNewsletterInviteAction({
                    newsletterWid: f?.newsletterId,
                    expiration: f?.inviteExpiration,
                    invitee,
                    isSentByMe: p
                });
            };
            n[1] = invitee;
            n[2] = p;
            n[3] = f?.inviteExpiration;
            n[4] = f?.newsletterId;
            n[5] = b;
        } else {
            b = n[5];
        }
        const v = b;
        if (f == null) {
            return null;
        }
        const { inviteMessage, newsletterId, newsletterName } = f;
        let E;
        if (n[6] !== newsletterId) {
            E = c.jsx(r("WAWebProfileImage.react"), {
                size: 49,
                wid: newsletterId
            });
            n[6] = newsletterId;
            n[7] = E;
        } else {
            E = n[7];
        }
        const k = E;
        let I;
        if (n[8] !== inviteMessage || n[9] !== msgKey || n[10] !== y) {
            I = inviteMessage ? <div>{c.jsx(r("WAWebMessageCaption.react"), {
                msgKey,
                spacer: true,
                trusted: y
            })}</div> : null;
            n[8] = inviteMessage;
            n[9] = msgKey;
            n[10] = y;
            n[11] = I;
        } else {
            I = n[11];
        }
        const T = I;
        let D;
        if (n[12] !== v || n[13] !== C) {
            D = C ? null : c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                    {
                        label: s._("View invite"),
                        onClick: v,
                        testid: "invite-newsletter-admin"
                    }
                ]
            });
            n[12] = v;
            n[13] = C;
            n[14] = D;
        } else {
            D = n[14];
        }
        const x = D;
        const $ = !C || !T;
        let P;
        if (n[15] !== T || n[16] !== $ || n[17] !== C || n[18] !== msgKey) {
            P = $ ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.meta, !T && o("WAWebGroupsV4InviteMsg.stylex").styles.metaNoCaption, C && !T && o("WAWebGroupsV4InviteMsg.stylex").styles.metaExpiredNoCaption), {
                children: c.jsx(o("WAWebMessageMeta.react").Meta, {
                    msgKey
                })
            })}/> : null;
            n[15] = T;
            n[16] = $;
            n[17] = C;
            n[18] = msgKey;
            n[19] = P;
        } else {
            P = n[19];
        }
        const N = P;
        let M;
        if (n[20] === Symbol.for("react.memo_cache_sentinel")) {
            M = s._("WhatsApp channel admin invite");
            n[20] = M;
        } else {
            M = n[20];
        }
        const w = M;
        let A;
        if (n[21] !== inviteMessage || n[22] !== msgKey) {
            const Component = r("WAWebSpacerText.react");
            A = inviteMessage ? w : <Component msgKey={msgKey}>{w}</Component>;
            n[21] = inviteMessage;
            n[22] = msgKey;
            n[23] = A;
        } else {
            A = n[23];
        }
        const F = A;
        let O;
        if (C) {
            let B;
            if (n[24] !== T || n[25] !== msgKey) {
                const Component = r("WAWebSpacerText.react");
                B = T ? s._("Invite expired") : <Component msgKey={msgKey}>{s._("Invite expired")}</Component>;
                n[24] = T;
                n[25] = msgKey;
                n[26] = B;
            } else {
                B = n[26];
            }
            const W = B;
            let q;
            if (n[27] !== T) {
                q = (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.status, !T && o("WAWebGroupsV4InviteMsg.stylex").styles.statusExpiredNoCaption);
                n[27] = T;
                n[28] = q;
            } else {
                q = n[28];
            }
            let U;
            if (n[29] !== W || n[30] !== q) {
                U = <div {...babelHelpers.extends({}, q, {
                    children: W
                })}/>;
                n[29] = W;
                n[30] = q;
                n[31] = U;
            } else {
                U = n[31];
            }
            O = U;
        }
        let V;
        if (n[32] === Symbol.for("react.memo_cache_sentinel")) {
            V = (e || (e = r("stylex")))(o("WAWebGroupsV4InviteMsg.stylex").styles.container);
            n[32] = V;
        } else {
            V = n[32];
        }
        let H;
        if (n[33] !== T || n[34] !== C) {
            H = (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreview, (C || !T) && o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreviewNoMarginBottom);
            n[33] = T;
            n[34] = C;
            n[35] = H;
        } else {
            H = n[35];
        }
        const G = C ? undefined : v;
        const z = C ? "extended" : undefined;
        let j;
        if (n[36] !== p || n[37] !== newsletterName || n[38] !== k || n[39] !== F || n[40] !== G || n[41] !== z) {
            const Component = r("WAWebMediaLinkPreview.react");
            j = <Component description={F} isInvite isSentByMe={p} onClick={G} thumbnail={k} title={newsletterName} theme={z} isLoading={false}/>;
            n[36] = p;
            n[37] = newsletterName;
            n[38] = k;
            n[39] = F;
            n[40] = G;
            n[41] = z;
            n[42] = j;
        } else {
            j = n[42];
        }
        let K;
        if (n[43] !== H || n[44] !== j) {
            K = <div {...babelHelpers.extends({}, H, {
                children: j
            })}/>;
            n[43] = H;
            n[44] = j;
            n[45] = K;
        } else {
            K = n[45];
        }
        let Q;
        if (n[46] !== T || n[47] !== N || n[48] !== msgKey || n[49] !== m || n[50] !== O || n[51] !== K) {
            const Component = r("WAWebMessageBubbleHiddenText.react");
            Q = <Component contact={m} msgKey={msgKey} className={V}>{K}{O}{T}{N}</Component>;
            n[46] = T;
            n[47] = N;
            n[48] = msgKey;
            n[49] = m;
            n[50] = O;
            n[51] = K;
            n[52] = Q;
        } else {
            Q = n[52];
        }
        let X;
        if (n[53] !== x || n[54] !== displayAuthor || n[55] !== $ || n[56] !== msgKey || n[57] !== Q) {
            const Component = r("WAWebMessageTextBubble.react");
            X = <Component msgKey={msgKey} displayAuthor={displayAuthor} hideMeta={$} testid="newsletter-admin-invite">{Q}{x}</Component>;
            n[53] = x;
            n[54] = displayAuthor;
            n[55] = $;
            n[56] = msgKey;
            n[57] = Q;
            n[58] = X;
        } else {
            X = n[58];
        }
        return X;
    }
    l.default = m;
}, 226);