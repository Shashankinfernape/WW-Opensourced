__d("WAWebIconPopup.react", [
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebFilledIcon.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "WDSFlex.stylex",
    "asyncToGeneratorRuntime",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        fullWidth: {
            width: "xh8yej3",
            $$css: true
        }
    };
    function d({ buttonGroupJustify = "end", description, extraContent, filledIconBgColor, filledIconColor, icon, iconSize = "small", onOverlayClick, onPrimaryActionClick, onSecondaryActionClick, primaryActionDisabled = false, primaryActionText = r("WAWebFbtCommon")("OK"), secondaryActionText, stretchButtons = false, testid, title, useFilledIcon = true }) {
        const x = function() {
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if ((yield onPrimaryActionClick?.()) !== false) {
                    o("WAWebModalManager").ModalManager.close();
                }
            })();
        };
        const $ = function() {
            n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if ((yield onSecondaryActionClick?.()) !== false) {
                    o("WAWebModalManager").ModalManager.close();
                }
            })();
        };
        const P = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if ((yield onOverlayClick?.()) !== false) {
                    o("WAWebModalManager").ModalManager.close();
                }
            });
            return function() {
                return e.apply(this, arguments);
            };
        })();
        const widthMode = stretchButtons === true ? "flexible" : "fit";
        const M = useFilledIcon ? null : icon;
        const Component = o("WAWebFlex.react").FlexItem;
        const Component_1 = o("WAWebText.react").WAWebTextLarge;
        const Component_2 = o("WAWebFlex.react").FlexItem;
        const Component_3 = o("WAWebText.react").WAWebTextMuted;
        const Component_4 = r("WDSButton.react");
        const Component_5 = r("WDSButton.react");
        const Component_6 = o("WAWebButton.react").ButtonGroup;
        const Component_7 = o("WAWebFlex.react").FlexColumn;
        const Component_8 = o("WAWebModal.react").Modal;
        return <Component_8 testid={testid} type={o("WAWebModal.react").ModalTheme.Small} onOverlayClick={P}><Component_7><Component align="center">{M == null ? u.jsx(r("WAWebFilledIcon.react"), {
            Icon: icon,
            size: iconSize,
            iconColor: filledIconColor,
            backgroundColor: filledIconBgColor
        }) : <M/>}</Component><Component_2 align="center" testid="popup-title"><Component_1 paddingTop={20} weight="semibold">{title}</Component_1></Component_2>{description != null && <Component_3 testid="popup-description" paddingTop={16}>{description}</Component_3>}{extraContent}{onSecondaryActionClick != null && secondaryActionText != null ? <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.fullWidth, o("WDSFlex.stylex").wdsFlex.flex, o("WDSFlex.stylex").wdsFlex.justifyEnd), {
            children: u.jsx(r("WDSButtonGroup.react"), {
                orientation: "horizontal",
                tertiaryButtonProps: {
                    variant: "borderless",
                    type: "default",
                    onPress: $,
                    testid: "popup-controls-secondary",
                    size: "medium",
                    widthMode,
                    label: secondaryActionText
                },
                primaryButtonProps: {
                    variant: "filled",
                    type: "default",
                    onPress: x,
                    disabled: primaryActionDisabled,
                    testid: "popup-controls-primary",
                    size: "medium",
                    widthMode,
                    label: primaryActionText
                }
            })
        })}/> : <Component_6 paddingTop={20} alignSelf="stretch" justify={buttonGroupJustify} direction="horizontal">{onSecondaryActionClick != null && secondaryActionText != null && <Component_4 testid="popup-controls-secondary" onPress={$} variant="borderless" type="default" size="medium" widthMode={widthMode} label={secondaryActionText}/>}<Component_5 testid="popup-controls-primary" onPress={x} disabled={primaryActionDisabled} variant="filled" type="default" size="medium" widthMode={widthMode} label={primaryActionText}/></Component_6>}</Component_7></Component_8>;
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    l.default = d;
}, 98);