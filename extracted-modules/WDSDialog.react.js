__d("WDSDialog.react", [
    "fbt",
    "WDSButton.react",
    "WDSDialogConfig",
    "WDSIconIcClose.react",
    "WDSText.react",
    "react",
    "stylex",
    "useWDSMenu"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useId, useRef } = d;
    function _({ menu }) {
        const nRef = useRef(null);
        const o = r("useWDSMenu")({
            targetRef: nRef,
            menu,
            position: "below",
            align: "end"
        });
        const { menuPortal, openMenu } = o;
        const Component = r("WDSButton.react");
        return <><Component Icon={r("WDSIconIcClose.react")} ref={nRef} variant="borderless" onPress={openMenu} aria-label={s._("Close")}/>{menuPortal}</>;
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    const f = {
        footerDivider: {
            borderTopColor: "xx42vgk",
            borderTopStyle: "x13fuv20",
            borderTopWidth: "x178xt8z",
            $$css: true
        },
        topBarAfterMedia: {
            minHeight: "x65nank",
            $$css: true
        },
        titleWrapperAfterMedia: {
            minHeight: "x65nank",
            $$css: true
        },
        titleExpressive: {
            justifyContent: "xl56j7k",
            textAlign: "x2b8uid",
            $$css: true
        }
    };
    function GComponent({ children, closeButton = true, description, footer, headerAlignment = "center", headerMedia, headerType = "functional", layoutType = "functional", menuToRenderOnDismiss, onDismiss, open, size = "md", stickyFooter = false, testid, title, topBarEndContent, topBarStartContent }) {
        const P = useId();
        const N = useId();
        const M = o("WDSDialogConfig").getDialogStyles(size, layoutType, headerType);
        const w = headerType === "expressive" ? "Headline2" : "Body1";
        const A = headerType === "expressive";
        if (!open) {
            return null;
        }
        let F = topBarEndContent;
        if (closeButton) {
            const Component = r("WDSButton.react");
            F = menuToRenderOnDismiss != null ? <_ menu={menuToRenderOnDismiss}/> : <Component Icon={r("WDSIconIcClose.react")} variant="borderless" onPress={onDismiss} aria-label={s._("Close")}/>;
        }
        const Component = r("WDSText.react");
        const Component_1 = r("WDSText.react");
        return <div role="dialog" aria-modal aria-labelledby={P} aria-describedby={children != null && children !== false ? N : undefined}><div {...babelHelpers.extends({
            "data-testid": undefined
        }, (e || (e = r("stylex"))).props.apply(e, M.container), {
            children: [
                headerMedia != null && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(M.headerMedia), {
                    children: headerMedia
                })}/>,
                (closeButton || topBarEndContent != null) && <div {...babelHelpers.extends({}, {
                    0: {
                        className: "x2fp4s7 x10l6tqk x242muq x1vjfegm"
                    },
                    1: {
                        className: "x10l6tqk x1vjfegm xa3bivy xymx5cc"
                    }
                }[(layoutType === "expressive") << 0], {
                    children: F
                })}/>,
                <div {...babelHelpers.extends({}, e.props(...M.header.concat(headerMedia != null ? M.headerAfterMedia : [])), {
                    children: [
                        <div {...babelHelpers.extends({}, e.props(...M.topBar.concat([
                            headerMedia != null && f.topBarAfterMedia
                        ])), {
                            children: [
                                topBarStartContent,
                                <div {...babelHelpers.extends({
                                    "data-testid": undefined
                                }, e.props(...M.titleWrapper.concat([
                                    headerMedia != null && f.titleWrapperAfterMedia,
                                    A && headerAlignment === "center" && f.titleExpressive
                                ])), {
                                    children: <Component id={P} type={w} colorName="contentDefault">{title}</Component>
                                })}/>
                            ]
                        })}/>,
                        description != null && <div data-testid={undefined}><Component_1 type="Body2" colorName="contentDeemphasized">{description}</Component_1></div>
                    ]
                })}/>,
                children != null && children !== false && <div {...babelHelpers.extends({
                    id: N
                }, (e || (e = r("stylex"))).props.apply(e || (e = r("stylex")), M.body), {
                    children
                })}/>,
                footer != null && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e || (e = r("stylex")), M.footer.concat([
                    stickyFooter && f.footerDivider
                ])), {
                    children: footer
                })}/>
            ]
        })}/></div>;
    }
    GComponent.displayName = `${GComponent.name} [from ${i.id}]`;
    l.default = GComponent;
}, 226);