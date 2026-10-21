__d("WDSTextFieldUtils", [
    "WDSButton.react",
    "WDSIconIcError.react",
    "WDSSpinner.react",
    "WDSText.react",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        iconContainer: {
            height: "x1vqgdyp",
            width: "x100vrsf",
            $$css: true
        },
        addOnEnd: {
            color: "xhslqc4",
            $$css: true
        },
        StartIconContainer: {
            marginInlineEnd: "xviac27",
            $$css: true
        },
        EndIconContainer: {
            marginInlineEnd: "xqf2s3x",
            $$css: true
        },
        textSuffixNoIcon: {
            marginInlineEnd: "xviac27",
            $$css: true
        }
    };
    const d = {
        iconContainer: {
            height: "x10w6t97",
            width: "x1td3qas",
            $$css: true
        },
        StartIconContainer: {
            marginInlineEnd: "xqf2s3x",
            $$css: true
        },
        EndIconContainer: {
            marginInlineEnd: "x7g7pl8",
            $$css: true
        },
        textSuffixNoIcon: {
            marginInlineEnd: "x1sa5p1d",
            $$css: true
        }
    };
    const m = {
        iconContainer: {
            display: "x78zum5",
            justifyContent: "xl56j7k",
            alignItems: "x6s0dn4",
            $$css: true
        },
        textAffixes: {
            wordBreak: "x1lldw8n",
            $$css: true
        },
        textPrefix: {
            marginInlineEnd: "x7g7pl8",
            $$css: true
        },
        textSuffix: {
            marginInlineStart: "x1wbi8v6",
            $$css: true
        },
        counter: {
            whiteSpace: "xuxw1ft",
            alignSelf: "x1y8v6su",
            marginInlineStart: "xvc5jky",
            $$css: true
        }
    };
    function p({ StartIcon, platform, prefix }) {
        if (!(StartIcon == null && prefix == null)) {
            let i;
            let l;
            let s;
            if (platform === "android") {
                i = c.StartIconContainer;
                l = 24;
                s = "Body1";
            } else {
                i = d.StartIconContainer;
                l = 20;
                s = "Body2";
            }
            const Component = r("WDSText.react");
            return <div className="x78zum5 x6s0dn4">{StartIcon != null && <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.iconContainer, i), {
                children: <StartIcon height={l} width={l} xstyle={m.iconContainer} colorName="contentDeemphasized"/>
            })}/>}{prefix != null && <div aria-hidden="true"><Component type={s} colorName="contentDeemphasized" selectable={false} xstyle={[
                m.textAffixes,
                m.textPrefix
            ]}>{prefix}</Component></div>}</div>;
        }
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(platform) {
        if (platform === "android") {
            return {
                size: 24,
                iconContainerStyle: c.iconContainer,
                endIconCointanerStyle: c.EndIconContainer,
                textSuffixNoIconStyle: c.textSuffixNoIcon,
                suffixTextType: "Body1",
                addOnEndButtonStyle: c.addOnEnd,
                addOnEndStyle: c.addOnEnd
            };
        }
        return {
            size: 20,
            iconContainerStyle: d.iconContainer,
            endIconCointanerStyle: d.EndIconContainer,
            textSuffixNoIconStyle: d.textSuffixNoIcon,
            suffixTextType: "Body2"
        };
    }
    function f({ EndIcon, endIconAriaLabel, loading, onEndIconClick, platform, shouldShowError, suffix }) {
        if (!(!shouldShowError && EndIcon == null && suffix == null && loading == null)) {
            const d = _(platform);
            const { addOnEndButtonStyle, addOnEndStyle, endIconCointanerStyle, iconContainerStyle, size, suffixTextType, textSuffixNoIconStyle } = d;
            const v = [
                m.iconContainer,
                iconContainerStyle,
                endIconCointanerStyle
            ];
            let S = shouldShowError ? u.jsx(r("WDSIconIcError.react"), {
                colorName: "secondaryNegative",
                xstyle: v,
                height: size,
                width: size
            }) : EndIcon != null && (()=>{
                if (onEndIconClick) {
                    const Component = r("WDSButton.react");
                    return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e || (e = r("stylex")), v), {
                        children: <Component variant="borderless" size={platform === "android" ? "medium" : "small"} onPress={onEndIconClick} Icon={EndIcon} xstyle={addOnEndButtonStyle} aria-label={endIconAriaLabel ?? undefined} widthMode="fit"/>
                    })}/>;
                }
                return <EndIcon colorName="contentDefault" xstyle={[].concat(v, [
                    addOnEndStyle
                ])} height={size} width={size}/>;
            })();
            if (loading === true) {
                S = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e, v), {
                    children: u.jsx(r("WDSSpinner.react"), {
                        size
                    })
                })}/>;
            }
            const Component = r("WDSText.react");
            return <>{suffix != null && <div aria-hidden="true"><Component type={suffixTextType} colorName="contentDeemphasized" selectable={false} xstyle={[
                m.textAffixes,
                m.textSuffix,
                EndIcon == null && textSuffixNoIconStyle
            ]}>{suffix}</Component></div>}{S}</>;
        }
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g({ bottomId, bottomText, errorText, maxCharacterCount, platform, shouldShowError, value }) {
        if (!(bottomText == null && maxCharacterCount == null && errorText == null)) {
            let c;
            if (shouldShowError) {
                if (platform === "android") {
                    c = "secondaryNegative";
                } else {
                    c = "secondaryNegativeEmphasized";
                }
            } else {
                c = "contentDeemphasized";
            }
            const Component = r("WDSText.react");
            const Component_1 = r("WDSText.react");
            return <>{(shouldShowError ? errorText : bottomText) != null && <Component id={bottomId} type="Body3" selectable={false} colorName={shouldShowError ? "secondaryNegativeEmphasized" : "contentDeemphasized"}>{shouldShowError ? errorText : bottomText}</Component>}{maxCharacterCount != null && <Component_1 type="Body3" selectable={false} xstyle={m.counter} colorName={c}>{value.length}/{maxCharacterCount}</Component_1>}</>;
        }
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    l.TextFieldAddOnStart = p;
    l.TextFieldAddOnEnd = f;
    l.TextFieldAddOnBottom = g;
}, 98);