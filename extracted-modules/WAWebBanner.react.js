__d("WAWebBanner.react", [
    "WAWebDetailImage.react",
    "WAWebFbtCommon",
    "WAWebFlexBox.react",
    "WAWebImgWithFallback.react",
    "WAWebTabOrder",
    "WAWebText.react",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = {
        container: {
            borderStartStartRadius: "xlr9sxt",
            borderStartEndRadius: "xvvg52n",
            borderEndEndRadius: "xwd4zgb",
            borderEndStartRadius: "xq8v1ta",
            $$css: true
        },
        title: {
            fontSize: "x1jchvi3",
            fontWeight: "xk50ysn",
            lineHeight: "x1o2sk6j",
            letterSpacing: "x1p4m5qa",
            $$css: true
        },
        text: {
            fontSize: "x1f6kntn",
            lineHeight: "x1fc57z9",
            letterSpacing: "xf4yft",
            $$css: true
        },
        dismissButton: {
            height: "xt7dq6l",
            width: "x14atkfc",
            minHeight: "x65nank",
            minWidth: "x15x72sd",
            borderStartStartRadius: "x1c9tyrk",
            borderStartEndRadius: "xeusxvb",
            borderEndEndRadius: "x1pahc9y",
            borderEndStartRadius: "x1ertn4p",
            paddingTop: "x1y1aw1k",
            paddingInlineEnd: "xf159sx",
            paddingBottom: "xwib8y2",
            paddingInlineStart: "xmzvs34",
            marginTop: "x9otpla",
            marginInlineEnd: "x1w5wx5t",
            marginBottom: "x1wsgfga",
            marginInlineStart: "x1qfufaz",
            ":hover_backgroundColor": "x1ubxc9n",
            $$css: true
        },
        iconFill: {
            color: "xhslqc4",
            $$css: true
        }
    };
    const c = {
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
            $$css: true
        }
    };
    const d = {
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
        }
    };
    function m({ actionText, icon, onAction, onClick, onDismiss, testid, text, textTestid, title, type }) {
        const h = p(icon, type);
        const y = onClick != null ? {
            onClick,
            role: "button"
        } : null;
        const Component = r("WDSButton.react");
        const Component_1 = o("WAWebFlexBox.react").FlexRow;
        const Component_2 = o("WAWebText.react").WAWebClickableText;
        const Component_3 = o("WAWebFlexBox.react").FlexRow;
        const Component_4 = o("WAWebFlexBox.react").FlexColumn;
        const Component_5 = o("WAWebFlexBox.react").FlexRow;
        return <Component_5 margin={[
            8,
            12
        ]} padding={[
            12,
            16
        ]} testid={testid} xstyle={[
            u.container,
            c[type]
        ]}>{h != null && s.jsx(o("WAWebFlexBox.react").FlexRow, babelHelpers.extends({
            align: "start",
            justify: "center",
            paddingEnd: 16
        }, y, {
            children: h
        }))}<Component_4 grow={1}><Component_1 justify="all" xstyle={u.title}>{s.jsx(o("WAWebFlexBox.react").FlexItem, babelHelpers.extends({}, y, {
            children: title
        }))}{onDismiss != null && <Component tabOrder={o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR} xstyle={[
            u.iconFill,
            u.dismissButton
        ]} aria-label={r("WAWebFbtCommon")("Close")} Icon={r("WDSIconIcClose.react")} onPress={onDismiss} variant="borderless"/>}</Component_1><Component_3 paddingTop={8} xstyle={u.text}>{s.jsxs(o("WAWebFlexBox.react").FlexItem, babelHelpers.extends({}, y, {
            children: [
                <span data-testid={textTestid}>{text}</span>,
                actionText != null && <> <Component_2 color="actionEmphasized" onClick={onClick != null ? onAction : null}>{actionText}</Component_2></>
            ]
        }))}</Component_3></Component_4></Component_5>;
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p(e, t) {
        if (e == null) {
            return null;
        }
        if (e.type === "custom") {
            return s.jsx(o("WAWebImgWithFallback.react").ImgWithFallback, {
                fallbackSVG: null,
                imgProps: {
                    src: e.customIcon.src,
                    alt: e.customIcon.altText
                },
                shape: o("WAWebDetailImage.react").DetailImageShape.Square,
                size: 36,
                theme: o("WAWebImgWithFallback.react").Theme.Transparent
            });
        }
        e.type;
        const Icon = e.icon;
        return <Icon height={36} width={36} xstyle={d[t]}/>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.WAWebBanner = m;
}, 98);