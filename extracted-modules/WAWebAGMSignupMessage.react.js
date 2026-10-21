__d("WAWebAGMSignupMessage.react", [
    "fbt",
    "WAWebBizAGMSignupHeader.react",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBody.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebSendSignupResponseAction",
    "WAWebSignupCTAExperiment",
    "WAWebStateUtils",
    "WDSIconIcReply.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const n = o("react-compiler-runtime").c(43);
        const { chat, displayAuthor, displayType, msg, privacyPolicyUrl } = e;
        let m;
        let p;
        if (n[0] !== msg) {
            m = o("WAWebStateUtils").unproxy(msg);
            p = o("WAWebMsgModelPropUtils").isTrusted(m.unsafe());
            n[0] = msg;
            n[1] = m;
            n[2] = p;
        } else {
            m = n[1];
            p = n[2];
        }
        const _ = p;
        let f;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WAWebMsgGetters").getSignupCtaTapped
            ];
            n[3] = f;
        } else {
            f = n[3];
        }
        const g = o("useWAWebMsgValues").useMsgValues(msg.id, f);
        const h = g[0];
        let y;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            y = o("WAWebSignupCTAExperiment").getSignupCTAExperiment();
            n[4] = y;
        } else {
            y = n[4];
        }
        const C = y;
        let b;
        if (n[5] !== m.id || n[6] !== displayType || n[7] !== _) {
            b = u.jsx(r("WAWebMessageTextBody.react"), {
                msgKey: m.id,
                displayType,
                handleLinkClick: null,
                trusted: _
            });
            n[5] = m.id;
            n[6] = displayType;
            n[7] = _;
            n[8] = b;
        } else {
            b = n[8];
        }
        const v = b;
        let S;
        if (n[9] === Symbol.for("react.memo_cache_sentinel")) {
            S = {
                className: "x78zum5 x13a6bvl"
            };
            n[9] = S;
        } else {
            S = n[9];
        }
        const R = m.id;
        let L;
        if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
            L = o("WAWebMessageMeta.react").getAGMTag();
            n[10] = L;
        } else {
            L = n[10];
        }
        let E;
        if (n[11] !== m.id) {
            E = <div {...babelHelpers.extends({}, S, {
                "data-testid": "signup-agm-tag",
                children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                    msgKey: R,
                    agmTag: L
                })
            })}/>;
            n[11] = m.id;
            n[12] = E;
        } else {
            E = n[12];
        }
        const k = E;
        let I;
        if (n[13] === Symbol.for("react.memo_cache_sentinel")) {
            I = C === o("WAWebSignupCTAExperiment").SignupCTAExperiment.GetOffers ? s._("Get offers") : s._("Sign up");
            n[13] = I;
        } else {
            I = n[13];
        }
        let T;
        if (n[14] !== chat || n[15] !== msg) {
            T = function() {
                o("WAWebSendSignupResponseAction").sendSignupResponse(chat, msg);
            };
            n[14] = chat;
            n[15] = msg;
            n[16] = T;
        } else {
            T = n[16];
        }
        const D = h === true;
        let x;
        if (n[17] !== T || n[18] !== D) {
            x = u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                    {
                        label: I,
                        onClick: T,
                        Icon: r("WDSIconIcReply.react"),
                        disabled: D
                    }
                ]
            });
            n[17] = T;
            n[18] = D;
            n[19] = x;
        } else {
            x = n[19];
        }
        const $ = x;
        const { id, isDynamicReplyButtonsMsg } = m;
        let M;
        if (n[20] === Symbol.for("react.memo_cache_sentinel")) {
            M = "x1gxa6cn";
            n[20] = M;
        } else {
            M = n[20];
        }
        const signupId = msg.signupContext?.signupId;
        let A;
        if (n[21] !== chat.contact || n[22] !== chat.id || n[23] !== chat.t || n[24] !== privacyPolicyUrl || n[25] !== signupId) {
            A = u.jsx(r("WAWebBizAGMSignupHeader.react"), {
                businessWid: chat.id,
                chatTimestamp: chat.t,
                contact: chat.contact,
                experiment: C,
                privacyPolicyUrl,
                signupId
            });
            n[21] = chat.contact;
            n[22] = chat.id;
            n[23] = chat.t;
            n[24] = privacyPolicyUrl;
            n[25] = signupId;
            n[26] = A;
        } else {
            A = n[26];
        }
        let F;
        if (n[27] !== m.id || n[28] !== k || n[29] !== v) {
            const Component = r("WAWebMessageSpacerText.react");
            F = <Component msgKey={m.id} spacer={false} data-id={m.id}>{v}{k}</Component>;
            n[27] = m.id;
            n[28] = k;
            n[29] = v;
            n[30] = F;
        } else {
            F = n[30];
        }
        let O;
        if (n[31] !== m.id || n[32] !== m.senderObj || n[33] !== $ || n[34] !== A || n[35] !== F) {
            const Component = r("WAWebMessageBubbleHiddenText.react");
            O = <Component className={M} contact={m.senderObj} msgKey={m.id}>{A}{F}{$}</Component>;
            n[31] = m.id;
            n[32] = m.senderObj;
            n[33] = $;
            n[34] = A;
            n[35] = F;
            n[36] = O;
        } else {
            O = n[36];
        }
        let B;
        if (n[37] !== m.id || n[38] !== m.isDynamicReplyButtonsMsg || n[39] !== displayAuthor || n[40] !== displayType || n[41] !== O) {
            const Component = r("WAWebMessageTextBubble.react");
            B = <Component msgKey={id} displayType={displayType} displayAuthor={displayAuthor} hideMeta useFixedWidth={isDynamicReplyButtonsMsg}>{O}</Component>;
            n[37] = m.id;
            n[38] = m.isDynamicReplyButtonsMsg;
            n[39] = displayAuthor;
            n[40] = displayType;
            n[41] = O;
            n[42] = B;
        } else {
            B = n[42];
        }
        return B;
    }
    l.default = c;
}, 226);