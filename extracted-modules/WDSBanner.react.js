__d("WDSBanner.react", [
    "WAWebFbtCommon",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSIconIcError.react",
    "WDSIconIcLightbulb.react",
    "WDSIconIcWarning.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "WDSTooltip.react",
    "err",
    "getPlatformByGK",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = 36;
    const d = 40;
    const m = {
        container: {
            alignItems: "x6s0dn4",
            columnGap: "xs2akgl",
            display: "x78zum5",
            flexDirection: "x1q0g3np",
            $$css: true
        },
        containerWithBoxShadow: {
            boxShadow: "xokadva",
            $$css: true
        },
        icon: {
            objectFit: "x19kjcj4",
            $$css: true
        },
        bordered: {
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xnj1f2r",
            borderInlineEndColor: "x2uibgs",
            borderBottomColor: "xkveyfu",
            borderInlineStartColor: "x12llq9",
            $$css: true
        }
    };
    const p = {
        default: {
            backgroundColor: "x1abdmlv",
            $$css: true
        },
        warning: {
            backgroundColor: "xj44v4f",
            $$css: true
        },
        tip: {
            backgroundColor: "x1280gxy",
            borderTopWidth: "x178xt8z",
            borderInlineEndWidth: "x1lun4ml",
            borderBottomWidth: "xso031l",
            borderInlineStartWidth: "xpilrb4",
            borderTopStyle: "x13fuv20",
            borderInlineEndStyle: "x18b5jzi",
            borderBottomStyle: "x1q0q8m5",
            borderInlineStartStyle: "x1t7ytsu",
            borderTopColor: "xnj1f2r",
            borderInlineEndColor: "x2uibgs",
            borderBottomColor: "xkveyfu",
            borderInlineStartColor: "x12llq9",
            $$css: true
        },
        error: {
            backgroundColor: "xrkjzwr",
            $$css: true
        }
    };
    const _ = {
        container: {
            borderStartStartRadius: "x6nvzda",
            borderStartEndRadius: "x4i4b9w",
            borderEndEndRadius: "xhl9efl",
            borderEndStartRadius: "xj65ea0",
            paddingTop: "x1xrf6ya",
            paddingInlineEnd: "xvtqlqk",
            paddingBottom: "xscbp6u",
            paddingInlineStart: "xdx6fka",
            $$css: true
        }
    };
    const f = {
        container: {
            borderStartStartRadius: "xoqha5s",
            borderStartEndRadius: "x16jayiz",
            borderEndEndRadius: "xlylnr5",
            borderEndStartRadius: "x17ximpp",
            paddingTop: "x1xrf6ya",
            paddingInlineEnd: "xde1mab",
            paddingBottom: "xscbp6u",
            paddingInlineStart: "x1iw51ew",
            $$css: true
        }
    };
    const g = {
        default: {
            color: "x1v5yvga",
            $$css: true
        },
        warning: {
            color: "x1f81s73",
            $$css: true
        },
        tip: {
            color: "xhslqc4",
            $$css: true
        },
        error: {
            color: "x30a034",
            $$css: true
        }
    };
    function h({ actionText, body, bordered = false, boxShadowEnabled = false, icon, onAction, onDismiss, platform = o("getPlatformByGK").WDS_PLATFORM, ref, tabOrder, testid, title, type }) {
        const T = platform === "iOS";
        const D = T ? d : c;
        let x = icon;
        switch(type){
            case "warning":
                x = r("WDSIconIcWarning.react");
                break;
            case "tip":
                x = r("WDSIconIcLightbulb.react");
                break;
            default:
                if (type === "error") {
                    x = r("WDSIconIcError.react");
                }
        }
        if (body == null && title == null && actionText == null) {
            throw r("err")("WDSBanner used without any content");
        }
        const Component = r("WDSButton.react");
        const Component_1 = r("WDSTooltip.react");
        const Component_2 = r("WDSText.react");
        const Component_3 = r("WDSTextualLink.react");
        const Component_4 = r("WDSText.react");
        return <div ref={ref} className="x1n2onr6" data-testid={undefined}>{onDismiss != null && <div className="x67dgr1 x10l6tqk x1ngp85i"><Component_1 label={r("WAWebFbtCommon")("Close")}><Component variant="borderless" size="medium" onPress={function() {
            onDismiss();
        }} Icon={r("WDSIconIcClose.react")} aria-label={r("WAWebFbtCommon")("Close")} tabOrder={tabOrder} testid={undefined}/></Component_1></div>}<div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props([
            m.container,
            T ? f.container : _.container,
            !T && p[type],
            bordered && m.bordered,
            boxShadowEnabled && m.containerWithBoxShadow
        ]), {
            children: [
                x != null && u.jsx(x, {
                    viewBox: {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24
                    },
                    xstyle: [
                        g[type],
                        m.icon
                    ],
                    width: D,
                    height: D
                }),
                <div className="x78zum5 xdt5ytf x129bwdz x1yc453h">{title != null && <div {...babelHelpers.extends({}, {
                    0: {},
                    1: {
                        className: "xp48ta0"
                    }
                }[(onDismiss != null) << 0], {
                    children: <Component_2 type="Body1Emphasized" colorName="contentDefault" maxLines={2}>{title}</Component_2>
                })}/>}<div {...babelHelpers.extends({}, {
                    0: {},
                    1: {
                        className: "xp48ta0"
                    }
                }[(title == null && onDismiss != null) << 0], {
                    children: <Component_4 type="Body2" colorName="contentDefault">{body}{actionText != null && <> <Component_3 onClick={onAction} data-tab={tabOrder}>{actionText}</Component_3></>}</Component_4>
                })}/></div>
            ]
        })}/></div>;
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    l.default = h;
}, 98);