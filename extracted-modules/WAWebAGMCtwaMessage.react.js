__d("WAWebAGMCtwaMessage.react", [
    "WAWebBizAGMCallCta.react",
    "WAWebBizAGMCatalogCta.react",
    "WAWebBizAGMFlowCta.react",
    "WAWebBizAGMWebsiteCta.react",
    "WAWebBizCtwaAGMUtils",
    "WAWebBizCtwaContext.react",
    "WAWebCtwaAGMUtils",
    "WAWebCtwaLogger",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageMeta.react",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBody.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgModelPropUtils",
    "WAWebStateUtils",
    "WAWebUnsupportedMessage",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        linkPreview: {
            marginTop: "x1198e8h",
            marginInlineEnd: "x1lxpwgx",
            marginBottom: "xzueoph",
            marginInlineStart: "xw01apr",
            $$css: true
        },
        hasAuthorLinkPreview: {
            marginTop: "x1ok221b",
            $$css: true
        },
        forwardedLinkPreview: {
            marginTop: "x1ok221b",
            $$css: true
        },
        hasSuspiciousLinksLinkPreview: {
            marginTop: "x1ok221b",
            $$css: true
        },
        quoteLinkPreview: {
            marginTop: "x1198e8h",
            $$css: true
        }
    };
    function DComponent(t) {
        const a = o("react-compiler-runtime").c(60);
        const { chat, displayAuthor, displayType, msg } = t;
        let m;
        let agmPayload;
        let _;
        let f;
        let g;
        if (a[0] !== displayAuthor || a[1] !== msg) {
            g = Symbol.for("react.early_return_sentinel");
            e: {
                m = o("WAWebStateUtils").unproxy(msg);
                _ = m.ctwaContext;
                agmPayload = o("WAWebCtwaAGMUtils").extractAGMPayload(_);
                if (!o("WAWebBizCtwaAGMUtils").isAGMSupported(m)) {
                    g = u.jsx(r("WAWebUnsupportedMessage"), {
                        msg: m,
                        displayAuthor,
                        hideUpdateButton: true
                    });
                    break e;
                }
                f = o("WAWebMsgModelPropUtils").isTrusted(m.unsafe());
            }
            a[0] = displayAuthor;
            a[1] = msg;
            a[2] = m;
            a[3] = agmPayload;
            a[4] = _;
            a[5] = f;
            a[6] = g;
        } else {
            m = a[2];
            agmPayload = a[3];
            _ = a[4];
            f = a[5];
            g = a[6];
        }
        if (g !== Symbol.for("react.early_return_sentinel")) {
            return g;
        }
        const h = f;
        let y;
        const C = m.id;
        let b;
        if (a[7] === Symbol.for("react.memo_cache_sentinel")) {
            b = (e || (e = r("stylex")))([
                c.linkPreview,
                c.hasAuthorLinkPreview,
                c.forwardedLinkPreview,
                c.hasSuspiciousLinksLinkPreview,
                c.quoteLinkPreview
            ]);
            a[7] = b;
        } else {
            b = a[7];
        }
        let v;
        if (a[8] !== m.id || a[9] !== b) {
            v = u.jsx(r("WAWebBizCtwaContext.react"), {
                msgKey: C,
                wrapperClass: b
            });
            a[8] = m.id;
            a[9] = b;
            a[10] = v;
        } else {
            v = a[10];
        }
        const S = v;
        let R;
        if (a[11] !== m.id || a[12] !== displayType || a[13] !== h) {
            R = u.jsx(r("WAWebMessageTextBody.react"), {
                msgKey: m.id,
                displayType,
                handleLinkClick: null,
                trusted: h
            });
            a[11] = m.id;
            a[12] = displayType;
            a[13] = h;
            a[14] = R;
        } else {
            R = a[14];
        }
        const L = R;
        let E;
        if (a[15] === Symbol.for("react.memo_cache_sentinel")) {
            E = {
                className: "x78zum5 x13a6bvl"
            };
            a[15] = E;
        } else {
            E = a[15];
        }
        const k = m.id;
        let I;
        if (a[16] === Symbol.for("react.memo_cache_sentinel")) {
            I = o("WAWebMessageMeta.react").getAGMTag();
            a[16] = I;
        } else {
            I = a[16];
        }
        let T;
        if (a[17] !== m.id) {
            T = <div {...babelHelpers.extends({}, E, {
                "data-testid": "ctwa-agm-tag",
                children: u.jsx(o("WAWebMessageMeta.react").Meta, {
                    msgKey: k,
                    agmTag: I
                })
            })}/>;
            a[17] = m.id;
            a[18] = T;
        } else {
            T = a[18];
        }
        const D = T;
        const adId = _?.sourceId;
        if (agmPayload && adId != null) {
            const $ = agmPayload;
            const { ctaPayload, ctaText, ctaType } = $;
            let w;
            if (a[19] !== adId || a[20] !== agmPayload || a[21] !== msg.from || a[22] !== msg.id.fromMe) {
                w = function() {
                    o("WAWebCtwaLogger").logAGMOperation({
                        operationType: o("WAWebCtwaLogger").AGM_OPERATION_TYPE.agm_cta_clicked,
                        fromBusiness: msg.id.fromMe,
                        agmPayload,
                        businessWid: msg.from,
                        adId
                    });
                };
                a[19] = adId;
                a[20] = agmPayload;
                a[21] = msg.from;
                a[22] = msg.id.fromMe;
                a[23] = w;
            } else {
                w = a[23];
            }
            const A = w;
            e: switch(ctaType){
                case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.URL:
                    {
                        if (ctaPayload != null && ctaPayload.length) {
                            let F;
                            if (a[24] !== ctaPayload || a[25] !== ctaText || a[26] !== A) {
                                const Component = r("WAWebBizAGMWebsiteCta.react");
                                F = <Component ctaText={ctaText} link={ctaPayload} onClick={A}/>;
                                a[24] = ctaPayload;
                                a[25] = ctaText;
                                a[26] = A;
                                a[27] = F;
                            } else {
                                F = a[27];
                            }
                            y = F;
                        }
                        break e;
                    }
                case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.CALL:
                    {
                        let O;
                        if (a[28] !== ctaText || a[29] !== A || a[30] !== msg.id.fromMe) {
                            const Component = r("WAWebBizAGMCallCta.react");
                            O = <Component ctaText={ctaText} disabled={msg.id.fromMe} onClick={A}/>;
                            a[28] = ctaText;
                            a[29] = A;
                            a[30] = msg.id.fromMe;
                            a[31] = O;
                        } else {
                            O = a[31];
                        }
                        y = O;
                        break e;
                    }
                case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.CATALOG:
                    {
                        let B;
                        if (a[32] !== chat || a[33] !== ctaText || a[34] !== A || a[35] !== msg.from) {
                            const Component = r("WAWebBizAGMCatalogCta.react");
                            B = <Component ctaText={ctaText} businessWid={msg.from} chat={chat} onClick={A}/>;
                            a[32] = chat;
                            a[33] = ctaText;
                            a[34] = A;
                            a[35] = msg.from;
                            a[36] = B;
                        } else {
                            B = a[36];
                        }
                        y = B;
                        break e;
                    }
                case o("WAWebCtwaAGMUtils").AGM_CTA_TYPE.FLOW:
                    if (ctaPayload != null && ctaPayload.length) {
                        let W;
                        if (a[37] !== chat || a[38] !== ctaPayload || a[39] !== ctaText || a[40] !== A || a[41] !== msg) {
                            const Component = r("WAWebBizAGMFlowCta.react");
                            W = <Component ctaText={ctaText} chat={chat} onClick={A} ctaPayload={ctaPayload} msg={msg}/>;
                            a[37] = chat;
                            a[38] = ctaPayload;
                            a[39] = ctaText;
                            a[40] = A;
                            a[41] = msg;
                            a[42] = W;
                        } else {
                            W = a[42];
                        }
                        y = W;
                    }
            }
        }
        const { id, isDynamicReplyButtonsMsg } = m;
        let V;
        if (a[43] === Symbol.for("react.memo_cache_sentinel")) {
            V = "x1gxa6cn";
            a[43] = V;
        } else {
            V = a[43];
        }
        let H;
        if (a[44] !== m.id || a[45] !== D || a[46] !== L) {
            const Component = r("WAWebMessageSpacerText.react");
            H = <Component msgKey={m.id} spacer={false} data-id={m.id}>{L}{D}</Component>;
            a[44] = m.id;
            a[45] = D;
            a[46] = L;
            a[47] = H;
        } else {
            H = a[47];
        }
        let G;
        if (a[48] !== m.id || a[49] !== m.senderObj || a[50] !== y || a[51] !== S || a[52] !== H) {
            const Component = r("WAWebMessageBubbleHiddenText.react");
            G = <Component className={V} contact={m.senderObj} msgKey={m.id}>{S}{H}{y}</Component>;
            a[48] = m.id;
            a[49] = m.senderObj;
            a[50] = y;
            a[51] = S;
            a[52] = H;
            a[53] = G;
        } else {
            G = a[53];
        }
        let z;
        if (a[54] !== m.id || a[55] !== m.isDynamicReplyButtonsMsg || a[56] !== displayAuthor || a[57] !== displayType || a[58] !== G) {
            const Component = r("WAWebMessageTextBubble.react");
            z = <Component msgKey={id} displayType={displayType} displayAuthor={displayAuthor} hideMeta useFixedWidth={isDynamicReplyButtonsMsg}>{G}</Component>;
            a[54] = m.id;
            a[55] = m.isDynamicReplyButtonsMsg;
            a[56] = displayAuthor;
            a[57] = displayType;
            a[58] = G;
            a[59] = z;
        } else {
            z = a[59];
        }
        return z;
    }
    l.default = DComponent;
}, 98);