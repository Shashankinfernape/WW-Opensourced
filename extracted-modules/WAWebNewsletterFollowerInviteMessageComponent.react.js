__d("WAWebNewsletterFollowerInviteMessageComponent.react", [
    "fbt",
    "WAWebChannelOpenFromInviteWamEvent",
    "WAWebChatEntryPoint",
    "WAWebFrontendMsgGetters",
    "WAWebGroupsV4InviteMsg.stylex",
    "WAWebMediaLinkPreview.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageCaption.react",
    "WAWebMessageMeta.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebNewsletterApiParse",
    "WAWebNewsletterExecApiCmd",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoggingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebProfileImage.react",
    "WAWebSpacerText.react",
    "WAWebWamEnumChannelEntryPoint",
    "WAWebWamEnumChannelUserType",
    "WAWebWamEnumTsSurface",
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
        const n = o("react-compiler-runtime").c(46);
        const { displayAuthor, msgKey } = t;
        let l;
        if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebFrontendMsgGetters").getSenderObj,
                o("WAWebMsgGetters").getIsSentByMe,
                o("WAWebMsgGetters").getNewsletterFollowerInviteInfo,
                o("WAWebMsgGetters").getType
            ];
            n[0] = l;
        } else {
            l = n[0];
        }
        const u = o("useWAWebMsgValues").useMsgValues(msgKey, l);
        const d = u[0];
        const m = u[1];
        const p = u[2];
        const _ = r("useWAWebIsMsgTrusted")(msgKey);
        if (p == null) {
            return null;
        }
        let f;
        if (n[1] !== p.newsletterId) {
            f = function() {
                if (o("WAWebNewsletterGatingUtils").isChannelInviteContactsToFollowReceiverLoggingEnabled()) {
                    const t = r("WAWebNewsletterMetadataCollection").get(p.newsletterId);
                    const channelUserType = o("WAWebNewsletterLoggingUtils").getChannelUserTypeFromMembershipType(t) ?? o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE.GUEST;
                    const a = new (o("WAWebChannelOpenFromInviteWamEvent")).ChannelOpenFromInviteWamEvent({
                        cid: p.newsletterId.user,
                        channelEntryPoint: o("WAWebWamEnumChannelEntryPoint").CHANNEL_ENTRY_POINT.INVITE_CONTACTS_TO_FOLLOW_MESSAGE,
                        discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD,
                        channelUserType
                    });
                    a.commit();
                }
                o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
                    identifier: p.newsletterId.toString(),
                    identifierType: o("WAWebNewsletterApiParse").NewsletterIdentifierType.Id,
                    type: "view",
                    chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.DirectMessage,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_THREAD
                });
            };
            n[1] = p.newsletterId;
            n[2] = f;
        } else {
            f = n[2];
        }
        const g = f;
        const { inviteMessage, newsletterId, newsletterName } = p;
        let b;
        if (n[3] !== newsletterId) {
            b = c.jsx(r("WAWebProfileImage.react"), {
                size: 49,
                wid: newsletterId
            });
            n[3] = newsletterId;
            n[4] = b;
        } else {
            b = n[4];
        }
        const v = b;
        let S;
        if (n[5] !== inviteMessage || n[6] !== msgKey || n[7] !== _) {
            S = inviteMessage ? <div>{c.jsx(r("WAWebMessageCaption.react"), {
                msgKey,
                spacer: true,
                trusted: _
            })}</div> : null;
            n[5] = inviteMessage;
            n[6] = msgKey;
            n[7] = _;
            n[8] = S;
        } else {
            S = n[8];
        }
        const R = S;
        let L;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            L = s._("View channel");
            n[9] = L;
        } else {
            L = n[9];
        }
        let E;
        if (n[10] !== g) {
            E = c.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                    {
                        label: L,
                        onClick: g,
                        testid: "invite-newsletter-follower"
                    }
                ]
            });
            n[10] = g;
            n[11] = E;
        } else {
            E = n[11];
        }
        const k = E;
        let I;
        if (n[12] !== R) {
            I = (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.meta, !R && o("WAWebGroupsV4InviteMsg.stylex").styles.metaNoCaption);
            n[12] = R;
            n[13] = I;
        } else {
            I = n[13];
        }
        let T;
        if (n[14] !== msgKey) {
            T = c.jsx(o("WAWebMessageMeta.react").Meta, {
                msgKey
            });
            n[14] = msgKey;
            n[15] = T;
        } else {
            T = n[15];
        }
        let D;
        if (n[16] !== I || n[17] !== T) {
            D = <div {...babelHelpers.extends({}, I, {
                children: T
            })}/>;
            n[16] = I;
            n[17] = T;
            n[18] = D;
        } else {
            D = n[18];
        }
        const x = D;
        let $;
        if (n[19] === Symbol.for("react.memo_cache_sentinel")) {
            $ = s._("Channel follow invite");
            n[19] = $;
        } else {
            $ = n[19];
        }
        const P = $;
        let N;
        if (n[20] !== inviteMessage || n[21] !== msgKey) {
            const Component = r("WAWebSpacerText.react");
            N = inviteMessage ? P : <Component msgKey={msgKey}>{P}</Component>;
            n[20] = inviteMessage;
            n[21] = msgKey;
            n[22] = N;
        } else {
            N = n[22];
        }
        const M = N;
        let w;
        if (n[23] === Symbol.for("react.memo_cache_sentinel")) {
            w = (e || (e = r("stylex")))(o("WAWebGroupsV4InviteMsg.stylex").styles.container);
            n[23] = w;
        } else {
            w = n[23];
        }
        let A;
        if (n[24] !== R) {
            A = (e || (e = r("stylex"))).props(o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreview, !R && o("WAWebGroupsV4InviteMsg.stylex").styles.linkPreviewNoMarginBottom);
            n[24] = R;
            n[25] = A;
        } else {
            A = n[25];
        }
        let F;
        if (n[26] !== g || n[27] !== m || n[28] !== newsletterName || n[29] !== v || n[30] !== M) {
            const Component = r("WAWebMediaLinkPreview.react");
            F = <Component description={M} isInvite isSentByMe={m} onClick={g} thumbnail={v} title={newsletterName} isLoading={false}/>;
            n[26] = g;
            n[27] = m;
            n[28] = newsletterName;
            n[29] = v;
            n[30] = M;
            n[31] = F;
        } else {
            F = n[31];
        }
        let O;
        if (n[32] !== A || n[33] !== F) {
            O = <div {...babelHelpers.extends({}, A, {
                children: F
            })}/>;
            n[32] = A;
            n[33] = F;
            n[34] = O;
        } else {
            O = n[34];
        }
        let B;
        if (n[35] !== R || n[36] !== x || n[37] !== msgKey || n[38] !== d || n[39] !== O) {
            const Component = r("WAWebMessageBubbleHiddenText.react");
            B = <Component contact={d} msgKey={msgKey} className={w}>{O}{R}{x}</Component>;
            n[35] = R;
            n[36] = x;
            n[37] = msgKey;
            n[38] = d;
            n[39] = O;
            n[40] = B;
        } else {
            B = n[40];
        }
        let W;
        if (n[41] !== k || n[42] !== displayAuthor || n[43] !== msgKey || n[44] !== B) {
            const Component = r("WAWebMessageTextBubble.react");
            W = <Component msgKey={msgKey} displayAuthor={displayAuthor} hideMeta testid="newsletter-follow-invite">{B}{k}</Component>;
            n[41] = k;
            n[42] = displayAuthor;
            n[43] = msgKey;
            n[44] = B;
            n[45] = W;
        } else {
            W = n[45];
        }
        return W;
    }
    l.default = d;
}, 226);