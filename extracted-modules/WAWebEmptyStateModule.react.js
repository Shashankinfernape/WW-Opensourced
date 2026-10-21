__d("WAWebEmptyStateModule.react", [
    "WAWebABProps",
    "WAWebFilePicker.react",
    "WAWebQuickActionLogging",
    "WAWebTabOrder",
    "WDSActionTile.react",
    "WDSButton.react",
    "WDSDisabledStateStyles",
    "WDSFlex.stylex",
    "WDSText.react",
    "WDSTextLayout.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useVisibility"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useId, useRef } = c;
    const p = {
        wrapper: {
            backgroundColor: "xs1q97v",
            width: "xh8yej3",
            height: "x5yr21d",
            textAlign: "x2b8uid",
            pointerEvents: "x67bb7w",
            position: "x1n2onr6",
            $$css: true
        },
        wrapperWithFooter: {
            boxSizing: "x9f619",
            paddingBottom: "x1vd43t0",
            $$css: true
        },
        actionTileItem: {
            alignItems: "x6s0dn4",
            display: "x78zum5",
            flexBasis: "x1r8uery",
            flexGrow: "x1iyjqo2",
            justifyContent: "xl56j7k",
            maxWidth: "x18qnofl",
            minWidth: "xeuugli",
            $$css: true
        },
        primaryActionTile: {
            flexDirection: "xdt5ytf",
            rowGap: "x1qvou4u",
            $$css: true
        },
        primaryActionTileButton: {
            borderStartStartRadius: "xt8t1vi",
            borderStartEndRadius: "x1xc408v",
            borderEndEndRadius: "x129tdwq",
            borderEndStartRadius: "x15urzxu",
            height: "xsdox4t",
            width: "x1247r65",
            $$css: true
        },
        titleCardWrapper: {
            maxWidth: "x1rjt51p",
            backgroundColor: "x1280gxy",
            borderStartStartRadius: "x1g83kfv",
            borderStartEndRadius: "x3qq2k7",
            borderEndEndRadius: "x2x8art",
            borderEndStartRadius: "x1qor8vf",
            paddingTop: "xl7twdi",
            paddingInlineEnd: "xyo0t3i",
            paddingBottom: "xvg22vi",
            paddingInlineStart: "xb0esv5",
            marginTop: "x98l61r",
            marginInlineEnd: "xviac27",
            marginBottom: "x1ua1l7f",
            marginInlineStart: "xlese2p",
            boxSizing: "x9f619",
            height: "xg7h5cd",
            $$css: true
        },
        titleCardWrapperLegacy: {
            rowGap: "x1j3ira4",
            columnGap: "xrdqr27",
            $$css: true
        }
    };
    function _(t) {
        const n = o("react-compiler-runtime").c(41);
        const { surface, titleCard } = t;
        let l;
        if (n[0] !== titleCard.Illustration || n[1] !== titleCard.animation || n[2] !== titleCard.heroMedia) {
            l = titleCard.heroMedia ?? (titleCard.Illustration ? <titleCard.Illustration height={88} width={132}/> : titleCard.animation);
            n[0] = titleCard.Illustration;
            n[1] = titleCard.animation;
            n[2] = titleCard.heroMedia;
            n[3] = l;
        } else {
            l = n[3];
        }
        const illustration = l;
        let d;
        if (n[4] !== surface || n[5] !== titleCard) {
            d = function() {
                if (surface != null && titleCard.actionButtonActionId != null) {
                    o("WAWebQuickActionLogging").logQuickActionCtaTap(surface, titleCard.actionButtonActionId);
                }
                titleCard.actionButtonClickHandler?.();
            };
            n[4] = surface;
            n[5] = titleCard;
            n[6] = d;
        } else {
            d = n[6];
        }
        const m = d;
        let _;
        if (n[7] !== surface || n[8] !== titleCard) {
            _ = {
                onVisible: function() {
                    const { actionButtonActionId, actionButtonClickHandler, actionButtonLabel } = titleCard;
                    if (surface != null && actionButtonActionId != null && actionButtonLabel != null && actionButtonClickHandler != null) {
                        o("WAWebQuickActionLogging").logQuickActionCtaImpression(surface, actionButtonActionId);
                    }
                }
            };
            n[7] = surface;
            n[8] = titleCard;
            n[9] = _;
        } else {
            _ = n[9];
        }
        const f = r("useVisibility")(_);
        const g = f[0];
        if (!o("WAWebABProps").getABPropConfigValue("wds_web_text_layout")) {
            let h;
            if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
                h = (e || (e = r("stylex"))).props(p.titleCardWrapper, p.titleCardWrapperLegacy, o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.alignCenter);
                n[10] = h;
            } else {
                h = n[10];
            }
            let y;
            if (n[11] === Symbol.for("react.memo_cache_sentinel")) {
                y = (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSFlex.stylex").wdsFlex.gapSingle);
                n[11] = y;
            } else {
                y = n[11];
            }
            let C;
            if (n[12] !== titleCard.title) {
                const Component = r("WDSText.react");
                C = <Component colorName="contentDefault" isSemanticHeading type="Headline2" robotoPropValue={3}>{titleCard.title}</Component>;
                n[12] = titleCard.title;
                n[13] = C;
            } else {
                C = n[13];
            }
            let b;
            if (n[14] !== titleCard.description) {
                const Component = r("WDSText.react");
                b = <Component colorName="contentDeemphasized" type="Body2">{titleCard.description}</Component>;
                n[14] = titleCard.description;
                n[15] = b;
            } else {
                b = n[15];
            }
            let v;
            if (n[16] !== C || n[17] !== b) {
                v = <div {...babelHelpers.extends({}, y, {
                    children: [
                        C,
                        b
                    ]
                })}/>;
                n[16] = C;
                n[17] = b;
                n[18] = v;
            } else {
                v = n[18];
            }
            let S;
            if (n[19] !== m || n[20] !== titleCard.actionButtonClickHandler || n[21] !== titleCard.actionButtonLabel) {
                const Component = r("WDSButton.react");
                S = titleCard.actionButtonLabel != null && titleCard.actionButtonClickHandler != null && <Component tabOrder={o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE} type="default" variant="tonal" size="small" label={titleCard.actionButtonLabel} onPress={m}/>;
                n[19] = m;
                n[20] = titleCard.actionButtonClickHandler;
                n[21] = titleCard.actionButtonLabel;
                n[22] = S;
            } else {
                S = n[22];
            }
            let R;
            if (n[23] !== g || n[24] !== illustration || n[25] !== v || n[26] !== S) {
                R = <div {...babelHelpers.extends({
                    ref: g,
                    "data-testid": "intro_panel_v2_title_card"
                }, h, {
                    children: [
                        illustration,
                        v,
                        S
                    ]
                })}/>;
                n[23] = g;
                n[24] = illustration;
                n[25] = v;
                n[26] = S;
                n[27] = R;
            } else {
                R = n[27];
            }
            return R;
        }
        let L;
        if (n[28] === Symbol.for("react.memo_cache_sentinel")) {
            L = {
                className: "x1rjt51p x1280gxy x1g83kfv x3qq2k7 x2x8art x1qor8vf xl7twdi xyo0t3i xvg22vi xb0esv5 x98l61r xviac27 x1ua1l7f xlese2p x9f619 xg7h5cd"
            };
            n[28] = L;
        } else {
            L = n[28];
        }
        let primaryAction;
        if (n[29] !== m || n[30] !== titleCard.actionButtonClickHandler || n[31] !== titleCard.actionButtonLabel) {
            primaryAction = titleCard.actionButtonLabel != null && titleCard.actionButtonClickHandler != null ? {
                label: titleCard.actionButtonLabel,
                onPress: m,
                variant: "tonal",
                size: "small",
                tabOrder: o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE
            } : undefined;
            n[29] = m;
            n[30] = titleCard.actionButtonClickHandler;
            n[31] = titleCard.actionButtonLabel;
            n[32] = primaryAction;
        } else {
            primaryAction = n[32];
        }
        let k;
        if (n[33] !== illustration || n[34] !== primaryAction || n[35] !== titleCard.description || n[36] !== titleCard.title) {
            k = u.jsx(r("WDSTextLayout.react"), {
                illustration,
                headline: titleCard.title,
                body: titleCard.description,
                actionsWidth: "hug",
                primaryAction
            });
            n[33] = illustration;
            n[34] = primaryAction;
            n[35] = titleCard.description;
            n[36] = titleCard.title;
            n[37] = k;
        } else {
            k = n[37];
        }
        let I;
        if (n[38] !== g || n[39] !== k) {
            I = <div {...babelHelpers.extends({
                ref: g,
                "data-testid": "intro_panel_v2_title_card"
            }, L, {
                children: k
            })}/>;
            n[38] = g;
            n[39] = k;
            n[40] = I;
        } else {
            I = n[40];
        }
        return I;
    }
    function F4Component(t) {
        const n = o("react-compiler-runtime").c(54);
        const { Icon, actionId, clickHandler, disabled, filePicker, isPrimary, numActionsVisible, slotPosition, surface, testid, title, tooltip } = t;
        const vRef = useRef();
        const S = useId();
        let R;
        if (n[0] !== actionId || n[1] !== clickHandler || n[2] !== filePicker || n[3] !== isPrimary || n[4] !== numActionsVisible || n[5] !== slotPosition || n[6] !== surface) {
            R = function() {
                if (surface != null && actionId != null) {
                    if (isPrimary === true) {
                        o("WAWebQuickActionLogging").logQuickActionCtaTap(surface, actionId);
                    } else if (slotPosition != null && numActionsVisible != null) {
                        o("WAWebQuickActionLogging").logQuickActionTap(surface, actionId, slotPosition, numActionsVisible);
                    }
                }
                if (filePicker != null) {
                    vRef.current?.open();
                    return;
                }
                clickHandler?.();
            };
            n[0] = actionId;
            n[1] = clickHandler;
            n[2] = filePicker;
            n[3] = isPrimary;
            n[4] = numActionsVisible;
            n[5] = slotPosition;
            n[6] = surface;
            n[7] = R;
        } else {
            R = n[7];
        }
        const L = R;
        if (isPrimary === true) {
            const E = `${testid ?? "intro-panel-empty-state-primary-action"}_wrapper`;
            let k;
            if (n[8] !== disabled) {
                k = (e || (e = r("stylex"))).props(p.actionTileItem, p.primaryActionTile, disabled === true && o("WDSDisabledStateStyles").WDSDisabledStateStyles.genericDisabledPersistent);
                n[8] = disabled;
                n[9] = k;
            } else {
                k = n[9];
            }
            const I = !(disabled === true && tooltip != null);
            const T = tooltip ?? "";
            let D;
            if (n[10] !== disabled) {
                D = disabled === true ? {
                    "aria-disabled": true
                } : null;
                n[10] = disabled;
                n[11] = D;
            } else {
                D = n[11];
            }
            const x = disabled === true ? undefined : L;
            const $ = testid ?? "intro-panel-empty-state-primary-action";
            let P;
            if (n[12] !== Icon || n[13] !== S || n[14] !== D || n[15] !== x || n[16] !== $ || n[17] !== title) {
                P = u.jsx(r("WDSButton.react"), babelHelpers.extends({}, D, {
                    "aria-label": title,
                    Icon,
                    id: S,
                    onPress: x,
                    size: "large",
                    tabOrder: o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE,
                    testid: $,
                    variant: "filled",
                    xstyle: p.primaryActionTileButton
                }));
                n[12] = Icon;
                n[13] = S;
                n[14] = D;
                n[15] = x;
                n[16] = $;
                n[17] = title;
                n[18] = P;
            } else {
                P = n[18];
            }
            let N;
            if (n[19] !== I || n[20] !== T || n[21] !== P) {
                const Component = r("WDSTooltip.react");
                N = <Component disabled={I} label={T}>{P}</Component>;
                n[19] = I;
                n[20] = T;
                n[21] = P;
                n[22] = N;
            } else {
                N = n[22];
            }
            const M = `${testid ?? "intro-panel-empty-state-primary-action"}_label`;
            let w;
            if (n[23] === Symbol.for("react.memo_cache_sentinel")) {
                w = {
                    className: "x1ypdohk"
                };
                n[23] = w;
            } else {
                w = n[23];
            }
            let A;
            if (n[24] !== title) {
                const Component = r("WDSText.react");
                A = <Component colorName="contentDefault" maxLines={1} selectable={false} type="Body3">{title}</Component>;
                n[24] = title;
                n[25] = A;
            } else {
                A = n[25];
            }
            let F;
            if (n[26] !== S || n[27] !== M || n[28] !== A) {
                F = <label {...babelHelpers.extends({
                    "data-testid": M,
                    htmlFor: S
                }, w, {
                    children: A
                })}/>;
                n[26] = S;
                n[27] = M;
                n[28] = A;
                n[29] = F;
            } else {
                F = n[29];
            }
            let O;
            if (n[30] !== filePicker) {
                O = filePicker != null ? u.jsx(r("WAWebFilePicker.react"), babelHelpers.extends({
                    ref: vRef
                }, filePicker)) : null;
                n[30] = filePicker;
                n[31] = O;
            } else {
                O = n[31];
            }
            let B;
            if (n[32] !== E || n[33] !== F || n[34] !== O || n[35] !== k || n[36] !== N) {
                B = <div {...babelHelpers.extends({
                    "data-testid": E
                }, k, {
                    children: [
                        N,
                        F,
                        O
                    ]
                })}/>;
                n[32] = E;
                n[33] = F;
                n[34] = O;
                n[35] = k;
                n[36] = N;
                n[37] = B;
            } else {
                B = n[37];
            }
            return B;
        }
        let W;
        if (n[38] === Symbol.for("react.memo_cache_sentinel")) {
            W = {
                className: "x6s0dn4 x78zum5 x1r8uery x1iyjqo2 xl56j7k x18qnofl xeuugli"
            };
            n[38] = W;
        } else {
            W = n[38];
        }
        let q;
        if (n[39] !== disabled) {
            q = disabled === true ? {
                "aria-disabled": true
            } : null;
            n[39] = disabled;
            n[40] = q;
        } else {
            q = n[40];
        }
        const U = testid ?? "intro-panel-empty-state-action-tile";
        let V;
        if (n[41] !== Icon || n[42] !== disabled || n[43] !== L || n[44] !== q || n[45] !== U || n[46] !== title || n[47] !== tooltip) {
            V = u.jsx(r("WDSActionTile.react"), babelHelpers.extends({}, q, {
                Icon,
                disabled,
                label: title,
                onPress: L,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE,
                testid: U,
                tooltip
            }));
            n[41] = Icon;
            n[42] = disabled;
            n[43] = L;
            n[44] = q;
            n[45] = U;
            n[46] = title;
            n[47] = tooltip;
            n[48] = V;
        } else {
            V = n[48];
        }
        let H;
        if (n[49] !== filePicker) {
            H = filePicker != null ? u.jsx(r("WAWebFilePicker.react"), babelHelpers.extends({
                ref: vRef
            }, filePicker)) : null;
            n[49] = filePicker;
            n[50] = H;
        } else {
            H = n[50];
        }
        let G;
        if (n[51] !== V || n[52] !== H) {
            G = <div {...babelHelpers.extends({}, W, {
                children: [
                    V,
                    H
                ]
            })}/>;
            n[51] = V;
            n[52] = H;
            n[53] = G;
        } else {
            G = n[53];
        }
        return G;
    }
    function G5Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const { surface, wdsActions } = e;
        const i = wdsActions.filter(h);
        const i_length = i.length;
        const s = r("useVisibility")({
            onVisible: function() {
                if (surface != null) {
                    o("WAWebQuickActionLogging").logQuickActionSurfaceView(surface, i_length);
                    wdsActions.forEach((e)=>{
                        if (e.isPrimary === true && e.actionId != null) {
                            o("WAWebQuickActionLogging").logQuickActionCtaImpression(surface, e.actionId);
                        }
                    });
                    i.forEach((e, slotPosition)=>{
                        if (e.actionId != null) {
                            o("WAWebQuickActionLogging").logQuickActionImpression({
                                actionId: e.actionId,
                                numActionsVisible: i_length,
                                slotPosition,
                                surface
                            });
                        }
                    });
                }
            }
        });
        const c = s[0];
        let d;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "x78zum5 xl56j7k x1f0uite xs2akgl x98l61r"
            };
            t[0] = d;
        } else {
            d = t[0];
        }
        const m = "intro-panel-empty-state-action-tile-group";
        const p = wdsActions.map((e)=><F4Component key={e.title.toString()} {...babelHelpers.extends({}, e, {
                surface,
                slotPosition: e.isPrimary === true ? undefined : i.indexOf(e),
                numActionsVisible: i_length
            })}/>);
        let _;
        if (t[1] !== c || t[2] !== d || t[3] !== p) {
            _ = <div {...babelHelpers.extends({
                ref: c
            }, d, {
                "data-testid": m,
                children: p
            })}/>;
            t[1] = c;
            t[2] = d;
            t[3] = p;
            t[4] = _;
        } else {
            _ = t[4];
        }
        return _;
    }
    function h(e) {
        return e.isPrimary !== true;
    }
    function y(t) {
        const n = o("react-compiler-runtime").c(16);
        const { banner, footer, surface, titleCard, wdsActions } = t;
        let d;
        if (n[0] !== footer) {
            d = (e || (e = r("stylex"))).props(p.wrapper, footer != null && p.wrapperWithFooter, o("WDSFlex.stylex").wdsFlex.flexCenter, o("WDSFlex.stylex").wdsFlex.flexColumn);
            n[0] = footer;
            n[1] = d;
        } else {
            d = n[1];
        }
        let m;
        if (n[2] !== surface || n[3] !== titleCard) {
            m = titleCard && <_ surface={surface} titleCard={titleCard}/>;
            n[2] = surface;
            n[3] = titleCard;
            n[4] = m;
        } else {
            m = n[4];
        }
        let f;
        if (n[5] !== surface || n[6] !== wdsActions) {
            f = <G5Component surface={surface} wdsActions={wdsActions}/>;
            n[5] = surface;
            n[6] = wdsActions;
            n[7] = f;
        } else {
            f = n[7];
        }
        let h;
        if (n[8] !== footer) {
            h = footer != null && <div className="x10l6tqk xo76822 x1o0tod xtijo5x x47corl">{footer}</div>;
            n[8] = footer;
            n[9] = h;
        } else {
            h = n[9];
        }
        let y;
        if (n[10] !== banner || n[11] !== d || n[12] !== m || n[13] !== f || n[14] !== h) {
            y = <section {...babelHelpers.extends({
                "data-testid": "intro-panel"
            }, d, {
                children: [
                    banner,
                    m,
                    f,
                    h
                ]
            })}/>;
            n[10] = banner;
            n[11] = d;
            n[12] = m;
            n[13] = f;
            n[14] = h;
            n[15] = y;
        } else {
            y = n[15];
        }
        return y;
    }
    l.default = y;
}, 98);