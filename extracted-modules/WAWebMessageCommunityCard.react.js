__d("WAWebMessageCommunityCard.react", [
    "fbt",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebCommunityGeneralChatImage.react",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebCommunitySquircleIcon.react",
    "WAWebDetailImage.react",
    "WAWebDrawerManagerContext",
    "WAWebFlex.react",
    "WAWebGroupMetadataCollection",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "WAWebWid",
    "WAWebWidFactory",
    "WDSIconIcArrowForward.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = {
        communitySquircle: {
            color: "x17k9de1",
            $$css: true
        },
        footerButton: {
            color: "xo1mcw5",
            display: "x78zum5",
            justifyContent: "xl56j7k",
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "xx42vgk",
            width: "xh8yej3",
            $$css: true
        },
        marginEnd8: {
            marginInlineEnd: "xqf2s3x",
            $$css: true
        },
        paddingAll12: {
            paddingTop: "x1xrf6ya",
            paddingInlineEnd: "xde1mab",
            paddingBottom: "xscbp6u",
            paddingInlineStart: "x1iw51ew",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(45);
        const { body, footer, onFooterClick, openNavigation, subgroupId, subtitle, title } = e;
        const _ = openNavigation === undefined ? false : openNavigation;
        const f = o("WAWebDrawerManagerContext").useDrawerManagerContext("right");
        let g;
        if (t[0] !== e.communityId) {
            g = null;
            if (e.communityId) {
                g = e.communityId instanceof r("WAWebWid") ? e.communityId : o("WAWebWidFactory").createWid(e.communityId);
            }
            t[0] = e.communityId;
            t[1] = g;
        } else {
            g = t[1];
        }
        let h;
        let y;
        let C;
        if (t[2] !== subgroupId) {
            let b;
            h = subgroupId ? o("WAWebChatCollection").ChatCollection.get(subgroupId) : null;
            y = h ? !!(o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(h) || (b = h.groupMetadata) != null && b.isParentGroup) : false;
            C = h ? o("WAWebChatGroupUtils").isCommunityGeneralGroup(h) : false;
            t[2] = subgroupId;
            t[3] = h;
            t[4] = y;
            t[5] = C;
        } else {
            h = t[3];
            y = t[4];
            C = t[5];
        }
        const v = C;
        let S;
        if (t[6] !== h || t[7] !== g || t[8] !== onFooterClick || t[9] !== _ || t[10] !== f) {
            S = function(t) {
                let e;
                if (!g || !((e = r("WAWebGroupMetadataCollection").get(g)) != null && e.hasJoined())) {
                    const n = s._("This community no longer exists");
                    o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
                        msg: n
                    }));
                    return;
                }
                if (h) {
                    new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
                        action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.COMMUNITY_RICH_SYSTEM_MESSAGE_CLICK,
                        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
                        chat: h
                    }).commit();
                }
                if (t) {
                    t.preventDefault();
                    t.stopPropagation();
                }
                if (onFooterClick) {
                    return onFooterClick();
                }
                if (!_) {
                    const l = f.existsDrawer() ?? false;
                    if (!l && g) {
                        o("WAWebCmd").Cmd.openCommunityTabbedInfo(g);
                    }
                    return;
                }
                o("WAWebCmd").Cmd.openCommunityHome(g);
            };
            t[6] = h;
            t[7] = g;
            t[8] = onFooterClick;
            t[9] = _;
            t[10] = f;
            t[11] = S;
        } else {
            S = t[11];
        }
        const R = S;
        let L;
        if (!v) {
            if (g) {
                let E;
                if (t[12] !== g) {
                    E = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                        id: g,
                        shape: o("WAWebDetailImage.react").DetailImageShape.Squircle
                    });
                    t[12] = g;
                    t[13] = E;
                } else {
                    E = t[13];
                }
                L = E;
            } else {
                let k;
                if (t[14] === Symbol.for("react.memo_cache_sentinel")) {
                    k = u.jsx(o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon, {
                        width: 49,
                        height: 49,
                        iconXstyle: c.communitySquircle
                    });
                    t[14] = k;
                } else {
                    k = t[14];
                }
                L = k;
            }
        }
        let I;
        if (v) {
            let T;
            if (t[15] === Symbol.for("react.memo_cache_sentinel")) {
                T = <div className="x1c9tyrk xeusxvb x1pahc9y x1ertn4p xpyat2d x1exxlbk x1n2onr6">{u.jsx(o("WAWebCommunityGeneralChatImage.react").CommunityGeneralChatImage, {})}</div>;
                t[15] = T;
            } else {
                T = t[15];
            }
            I = T;
        } else if (subgroupId && !y) {
            let D;
            if (t[16] !== subgroupId) {
                D = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                    id: subgroupId,
                    xstyle: c.marginEnd8
                });
                t[16] = subgroupId;
                t[17] = D;
            } else {
                D = t[17];
            }
            let x;
            if (t[18] === Symbol.for("react.memo_cache_sentinel")) {
                x = u.jsx(r("WDSIconIcArrowForward.react"), {
                    directional: true,
                    height: 30,
                    width: 30,
                    xstyle: c.marginEnd8
                });
                t[18] = x;
            } else {
                x = t[18];
            }
            let $;
            if (t[19] !== D) {
                $ = <>{D}{x}</>;
                t[19] = D;
                t[20] = $;
            } else {
                $ = t[20];
            }
            I = $;
        }
        let P;
        if (t[21] !== L || t[22] !== I) {
            const Component = o("WAWebFlex.react").FlexRow;
            P = <Component justify="center" align="center">{I}{L}</Component>;
            t[21] = L;
            t[22] = I;
            t[23] = P;
        } else {
            P = t[23];
        }
        const N = P;
        let M;
        if (t[24] === Symbol.for("react.memo_cache_sentinel")) {
            M = {
                className: "x1380le5 xcytdqz"
            };
            t[24] = M;
        } else {
            M = t[24];
        }
        let w;
        if (t[25] !== title) {
            const Component = r("WDSText.react");
            w = <h3 data-testid="community-message-card-heading"><Component type="Body2Emphasized" colorName="contentDefault" testid="community-message-card-title">{title}</Component></h3>;
            t[25] = title;
            t[26] = w;
        } else {
            w = t[26];
        }
        let A;
        if (t[27] !== subtitle) {
            const Component = r("WDSText.react");
            A = subtitle != null ? <p data-testid="community-message-card-subtitle-paragraph"><Component type="Body3" colorName="systemsBubbleContentDeemphasized" testid="community-message-card-subtitle">{subtitle}</Component></p> : null;
            t[27] = subtitle;
            t[28] = A;
        } else {
            A = t[28];
        }
        let F;
        if (t[29] !== w || t[30] !== A) {
            F = <div {...babelHelpers.extends({}, M, {
                children: [
                    w,
                    A
                ]
            })}/>;
            t[29] = w;
            t[30] = A;
            t[31] = F;
        } else {
            F = t[31];
        }
        const O = F;
        let B;
        if (t[32] !== footer || t[33] !== R) {
            const Component = r("WDSText.react");
            const Component_1 = r("WAWebUnstyledButton.react");
            B = footer != null ? <Component_1 xstyle={[
                c.footerButton,
                c.paddingAll12
            ]} onClick={R}><Component type="Body2Emphasized" colorName="contentActionEmphasized" testid="community-message-card-footer-label">{footer}</Component></Component_1> : null;
            t[32] = footer;
            t[33] = R;
            t[34] = B;
        } else {
            B = t[34];
        }
        const W = B;
        let q;
        if (t[35] !== body) {
            q = ({
                0: {
                    className: "xb0esv5 xyo0t3i x1xrf6ya"
                },
                1: {
                    className: "xb0esv5 xyo0t3i x1xrf6ya xvpt6g3"
                }
            })[!!body << 0];
            t[35] = body;
            t[36] = q;
        } else {
            q = t[36];
        }
        let U;
        if (t[37] !== body || t[38] !== O || t[39] !== N || t[40] !== q) {
            U = <div {...babelHelpers.extends({}, q, {
                children: [
                    N,
                    O,
                    body
                ]
            })}/>;
            t[37] = body;
            t[38] = O;
            t[39] = N;
            t[40] = q;
            t[41] = U;
        } else {
            U = t[41];
        }
        let V;
        if (t[42] !== W || t[43] !== U) {
            V = <>{U}{W}</>;
            t[42] = W;
            t[43] = U;
            t[44] = V;
        } else {
            V = t[44];
        }
        return V;
    }
    function m(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_items = e.items;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = {
                className: "x1yc453h x1n2onr6 xyxtwap"
            };
            t[0] = r;
        } else {
            r = t[0];
        }
        let a;
        if (t[1] !== e_items) {
            a = e_items.map(p);
            t[1] = e_items;
            t[2] = a;
        } else {
            a = t[2];
        }
        let i;
        if (t[3] !== a) {
            i = <ul {...babelHelpers.extends({}, r, {
                children: a
            })}/>;
            t[3] = a;
            t[4] = i;
        } else {
            i = t[4];
        }
        return i;
    }
    function p(e, key) {
        return <li key={key} className="xo7wnuk x1a8jhtq x1hmns74">{e}</li>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.MessageCommunityCard = d;
    l.BulletedList = m;
}, 226);