__d("WAWebBizAGMCallCta.react", [
    "WAWebDesktopUpsellCallingUnavailablePopover.react",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDesktopUpsellUtils",
    "WAWebDropdownV2.react",
    "WAWebMessageBubbleActions.react",
    "WAWebPopover.react",
    "WDSIconIcCall.react",
    "nullthrows",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = [
        "ref"
    ];
    let s;
    const u = s || (s = o("react"));
    const c = s;
    const { useImperativeHandle, useRef } = c;
    function PComponent(t) {
        const n = o("react-compiler-runtime").c(11);
        let a;
        let i;
        if (n[0] !== t) {
            i = t.ref;
            a = babelHelpers.objectWithoutPropertiesLoose(t, e);
            n[0] = t;
            n[1] = a;
            n[2] = i;
        } else {
            a = n[1];
            i = n[2];
        }
        const l = a;
        const { ctaText, disabled } = l;
        const pRef = useRef(null);
        let _;
        if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
            _ = function() {
                pRef.current?.click();
            };
            n[3] = _;
        } else {
            _ = n[3];
        }
        const f = _;
        let g;
        if (n[4] === Symbol.for("react.memo_cache_sentinel")) {
            g = function() {
                return {
                    handleKeyActivation: f
                };
            };
            n[4] = g;
        } else {
            g = n[4];
        }
        useImperativeHandle(i, g);
        const h = o("WAWebDesktopUpsellUtils").getUserDesktopOs();
        const y = o("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformCheck();
        let C;
        if (n[5] !== a) {
            C = function() {
                a.onClick();
            };
            n[5] = a;
            n[6] = C;
        } else {
            C = n[6];
        }
        let b;
        if (n[7] !== ctaText || n[8] !== disabled || n[9] !== C) {
            b = <div ref={pRef}>{u.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                items: [
                    {
                        label: ctaText,
                        onClick: C,
                        disabled,
                        Icon: r("WDSIconIcCall.react")
                    }
                ]
            })}</div>;
            n[7] = ctaText;
            n[8] = disabled;
            n[9] = C;
            n[10] = b;
        } else {
            b = n[10];
        }
        const v = b;
        if (y === true) {
            const Component = o("WAWebDropdownV2.react").DropdownV2;
            return <>{v}<Component target={pRef} alignment={o("WAWebPopover.react").PopoverAlignment.Center} position={o("WAWebPopover.react").PopoverPosition.Bottom} buffer={12} onOpen={a.onClick}>{u.jsx(r("WAWebDesktopUpsellCallingUnavailablePopover.react"), {
                userDesktopOs: r("nullthrows")(h)
            })}</Component></>;
        }
        return v;
    }
    l.default = PComponent;
}, 98);