__d("WAWebUprMessage.react", [
    "fbt",
    "WAWebClickable.react",
    "WAWebCopyTextWithToast",
    "WAWebExternalLink.react",
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyFlowsUtils",
    "WAWebInteractiveBubble.react",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebOrderDetails",
    "WAWebUnsupportedMessage",
    "WAWebUprDetailDrawerLoadable",
    "WAWebUprGating",
    "WAWebUprPaymentBubble.react",
    "WAWebUprPaymentMethodLabels",
    "WAWebUprPaymentOptionsDrawerLoadable",
    "WAWebUprPaymentRequest",
    "WAWebUprWamLogger",
    "WDSIconIcContentCopy.react",
    "WDSIconIcOpenInNew.react",
    "react",
    "react-compiler-runtime",
    "useWAWebHasOrderStatusUpdate",
    "useWAWebMsgDownloadMedia"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const e_useEffect = e.useEffect;
    const d = {
        clickable: {
            cursor: "x1ypdohk",
            $$css: true
        }
    };
    function m(info) {
        return info.paymentOptions.length === 1 && info.paymentOptions[0].kind === "payment_link";
    }
    function p(msg, chat) {
        const n = o("WAWebOrderDetails").getOrderInfo(msg);
        const sellerWid = o("WAWebMsgGetters").getSender(msg.unsafe());
        if (n == null || sellerWid == null) {
            return false;
        }
        o("WAWebUprDetailDrawerLoadable").openUprDetailDrawer({
            chat,
            msg,
            orderInfo: n,
            sellerWid
        });
        return true;
    }
    function _(info) {
        if (info.paymentOptions.length !== 1) {
            return null;
        }
        const opt = info.paymentOptions[0];
        if (opt.kind !== "payment_account") {
            return null;
        }
        const labels = o("WAWebUprPaymentMethodLabels").getUprMethodLabels(opt.accountType, opt.identifierType);
        if (labels == null) {
            return null;
        }
        return {
            opt,
            labels
        };
    }
    function f(e, t) {
        o("WAWebCopyTextWithToast").copyTextWithToast({
            failureMsg: s._("Couldn't copy"),
            successMsg: t.copySuccessToast(),
            text: e
        });
    }
    function g(opt) {
        o("WAWebCopyTextWithToast").copyTextWithToast({
            failureMsg: s._("Couldn't copy"),
            successMsg: s._("Name copied"),
            text: opt.beneficiaryName
        });
    }
    function h(msg) {
        if (msg.interactiveHeader?.thumbnail != null) {
            return `data:image/jpeg;base64,${msg.interactiveHeader.thumbnail}`;
        }
        const o = msg.mediaData?.preview;
        if (o instanceof r("WAWebMediaOpaqueData")) {
            return o.url();
        }
        return null;
    }
    function y({ chat, info, msg, statusUpdatedFromPending }) {
        const l = function() {
            if (p(msg, chat)) {
                o("WAWebUprWamLogger").logUprInteractionWAMEvent({
                    msg,
                    info,
                    chat,
                    cta: o("WAWebUprWamLogger").UprCtaType.VIEW_DETAILS
                });
                return;
            }
            if (m(info)) {
                const e = info.paymentOptions[0];
                if (e.kind === "payment_link") {
                    o("WAWebUprWamLogger").logUprInteractionWAMEvent({
                        msg,
                        info,
                        chat,
                        cta: o("WAWebUprWamLogger").UprCtaType.OPEN_PAYMENT_LINK
                    });
                    o("WAWebExternalLink.react").openExternalLink(e.uri);
                }
            }
        };
        if (m(info)) {
            const u = info.paymentOptions[0];
            if (u.kind === "payment_link") {
                if (statusUpdatedFromPending) {
                    return {
                        actions: [
                            {
                                label: s._("View details"),
                                onClick: l
                            }
                        ],
                        headerClick: l
                    };
                }
                return {
                    actions: [
                        {
                            label: s._("Open payment link"),
                            Icon: r("WDSIconIcOpenInNew.react"),
                            onClick: function() {
                                o("WAWebUprWamLogger").logUprInteractionWAMEvent({
                                    msg,
                                    info,
                                    chat,
                                    cta: o("WAWebUprWamLogger").UprCtaType.OPEN_PAYMENT_LINK
                                });
                                o("WAWebExternalLink.react").openExternalLink(u.uri);
                            }
                        }
                    ],
                    headerClick: l
                };
            }
        }
        const c = _(info);
        if (c != null) {
            const d = [
                {
                    label: c.labels.copyLabel(),
                    Icon: r("WDSIconIcContentCopy.react"),
                    onClick: function() {
                        f(c.opt.identifierValue, c.labels);
                        o("WAWebUprWamLogger").logUprInteractionWAMEvent({
                            msg,
                            info,
                            chat,
                            cta: o("WAWebUprWamLogger").UprCtaType.COPY_PAYMENT_KEY,
                            paymentMethodChoice: c.opt.accountType,
                            identifierType: c.opt.identifierType
                        });
                    }
                }
            ];
            const h = (i)=>{
                const e = o("WAWebUprPaymentMethodLabels").getUprMethodLabels(c.opt.accountType, i.identifierType);
                if (e == null) {
                    return 0;
                }
                d.push({
                    label: e.copyLabel(),
                    Icon: r("WDSIconIcContentCopy.react"),
                    onClick: function() {
                        f(i.value, e);
                        o("WAWebUprWamLogger").logUprInteractionWAMEvent({
                            msg,
                            info,
                            chat,
                            cta: o("WAWebUprWamLogger").UprCtaType.COPY_PAYMENT_KEY,
                            paymentMethodChoice: c.opt.accountType,
                            identifierType: i.identifierType
                        });
                    }
                });
                if (d.length === 2) {
                    return 1;
                }
            };
            let y;
            for (const C of c.opt.additionalIdentifiers){
                y = h(C);
                if (y !== 0 && y === 1) {
                    break;
                }
            }
            if (d.length < 2 && c.opt.beneficiaryName !== "") {
                d.push({
                    label: s._("Copy name"),
                    Icon: r("WDSIconIcContentCopy.react"),
                    onClick: function() {
                        g(c.opt);
                        o("WAWebUprWamLogger").logUprInteractionWAMEvent({
                            msg,
                            info,
                            chat,
                            cta: o("WAWebUprWamLogger").UprCtaType.COPY_PAYMENT_KEY,
                            paymentMethodChoice: c.opt.accountType,
                            identifierType: "beneficiary_name"
                        });
                    }
                });
            }
            return {
                actions: d,
                headerClick: l
            };
        }
        const b = function() {
            o("WAWebUprWamLogger").logUprInteractionWAMEvent({
                msg,
                info,
                chat,
                cta: o("WAWebUprWamLogger").UprCtaType.VIEW_PAYMENT_OPTIONS
            });
            o("WAWebUprPaymentOptionsDrawerLoadable").openUprPaymentOptionsDrawer({
                info,
                msg
            });
        };
        return {
            actions: [
                {
                    label: s._("View payment options"),
                    onClick: b
                }
            ],
            headerClick: l
        };
    }
    function C(e) {
        const a = o("react-compiler-runtime").c(25);
        const { displayAuthor, displayType, msg } = e;
        const m = o("WAWebUprPaymentRequest").parseUprPaymentInfo(msg);
        let p;
        if (a[0] !== msg) {
            p = o("WAWebFrontendMsgGetters").getChat(msg.unsafe());
            a[0] = msg;
            a[1] = p;
        } else {
            p = a[1];
        }
        const _ = p;
        const f = o("WAWebMsgGetters").getSender(msg.unsafe());
        const g = m != null && o("WAWebUprGating").isUprBubbleEnabledForSender(f);
        const statusUpdatedFromPending = o("useWAWebHasOrderStatusUpdate").useWAWebHasOrderStatusUpdate(_, m?.referenceId);
        const downloadHeaderMedia = o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(msg.id);
        let v;
        let S;
        if (a[2] !== g || a[3] !== msg) {
            v = function() {
                if (g) {
                    o("WAWebUprWamLogger").logUprBubbleViewWAMEvent({
                        direction: msg.id.fromMe ? "sent" : "received",
                        msg
                    });
                }
            };
            S = [
                g,
                msg
            ];
            a[2] = g;
            a[3] = msg;
            a[4] = v;
            a[5] = S;
        } else {
            v = a[4];
            S = a[5];
        }
        e_useEffect(v, S);
        if (m == null) {
            return null;
        }
        if (!g) {
            let R;
            if (a[6] !== msg) {
                R = o("WAWebGalaxyFlowsUtils").getInvalidatedFlowMessageFromHistorySync(msg);
                a[6] = msg;
                a[7] = R;
            } else {
                R = a[7];
            }
            let L;
            if (a[8] !== displayAuthor || a[9] !== R) {
                L = u.jsx(r("WAWebUnsupportedMessage"), {
                    msg: R,
                    displayAuthor,
                    hideUpdateButton: true
                });
                a[8] = displayAuthor;
                a[9] = R;
                a[10] = L;
            } else {
                L = a[10];
            }
            return L;
        }
        const E = (m.items?.length ?? 0) > 0;
        let k;
        if (a[11] !== msg) {
            k = h(msg);
            a[11] = msg;
            a[12] = k;
        } else {
            k = a[12];
        }
        const thumbnailUrl = k;
        const T = y({
            chat: _,
            info: m,
            msg,
            statusUpdatedFromPending
        });
        const { actions, headerClick } = T;
        let $;
        if (a[13] !== downloadHeaderMedia || a[14] !== E || a[15] !== headerClick || a[16] !== msg || a[17] !== thumbnailUrl) {
            const Component = o("WAWebClickable.react").Clickable;
            $ = E ? <Component onClick={headerClick} xstyle={d.clickable}>{u.jsx(r("WAWebUprPaymentBubble.react"), {
                downloadHeaderMedia,
                headerMediaData: msg.mediaData,
                msg,
                thumbnailUrl
            })}</Component> : u.jsx(r("WAWebUprPaymentBubble.react"), {
                downloadHeaderMedia,
                headerMediaData: msg.mediaData,
                msg,
                thumbnailUrl
            });
            a[13] = downloadHeaderMedia;
            a[14] = E;
            a[15] = headerClick;
            a[16] = msg;
            a[17] = thumbnailUrl;
            a[18] = $;
        } else {
            $ = a[18];
        }
        let P;
        if (a[19] !== actions || a[20] !== displayAuthor || a[21] !== displayType || a[22] !== msg.id || a[23] !== $) {
            P = u.jsx(r("WAWebInteractiveBubble.react"), {
                msgKey: msg.id,
                displayAuthor,
                displayType,
                header: $,
                actions
            });
            a[19] = actions;
            a[20] = displayAuthor;
            a[21] = displayType;
            a[22] = msg.id;
            a[23] = $;
            a[24] = P;
        } else {
            P = a[24];
        }
        return P;
    }
    l.default = C;
}, 226);