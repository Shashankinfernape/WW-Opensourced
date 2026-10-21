__d("WDSRichTextAddOns", [
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
            flexShrink: "x2lah0s",
            $$css: true
        },
        bottomTextContainer: {
            flexGrow: "x1iyjqo2",
            flexShrink: "xs83m0k",
            flexBasis: "x1r8uery",
            minWidth: "xeuugli",
            $$css: true
        },
        errorIcon: {
            flexShrink: "x2lah0s",
            $$css: true
        }
    };
    function p({ StartIcon, platform, prefix }) {
        if (StartIcon == null && prefix == null) {
            return null;
        }
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
    p.displayName = `${p.name} [from ${i.id}]`;
    function _(e, t) {
        return `${e}/${t}`;
    }
    function FComponent({ EmojiIcon, EndIcon, SecondaryIcon, emojiIconAriaLabel, endIconAriaLabel, isDisabled, isFocused, loading, onEmojiIconClick, onEndIconClick, onSecondaryIconClick, platform, secondaryIconAriaLabel, suffix }) {
        if (EndIcon == null && EmojiIcon == null && SecondaryIcon == null && suffix == null && loading == null) {
            return null;
        }
        let v;
        let S;
        let R;
        let L;
        let E;
        let k;
        let I;
        if (platform === "android") {
            v = 24;
            S = c.iconContainer;
            R = c.EndIconContainer;
            L = c.textSuffixNoIcon;
            E = "Body1";
            k = c.addOnEnd;
            I = c.addOnEnd;
        } else {
            v = 20;
            S = d.iconContainer;
            R = d.EndIconContainer;
            L = d.textSuffixNoIcon;
            E = "Body2";
        }
        const T = [
            m.iconContainer,
            S,
            R
        ];
        let D = null;
        const Component = r("WDSButton.react");
        if (SecondaryIcon != null) {
            if (onSecondaryIconClick != null) {
                D = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e, T), {
                    children: <Component variant="borderless" size={platform === "android" ? "medium" : "small"} onPress={onSecondaryIconClick} Icon={SecondaryIcon} xstyle={k} aria-label={secondaryIconAriaLabel ?? undefined} widthMode="fit" disabled={isDisabled === true}/>
                })}/>;
            } else {
                D = <SecondaryIcon colorName="contentDefault" xstyle={[].concat(T, [
                    I
                ])} height={v} width={v}/>;
            }
        }
        let x = null;
        if (loading === true) {
            x = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e, T), {
                children: u.jsx(r("WDSSpinner.react"), {
                    size: v
                })
            })}/>;
        } else {
            const Component = r("WDSButton.react");
            if (EndIcon != null) {
                if (onEndIconClick != null) {
                    x = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e, T), {
                        children: <Component variant="borderless" size={platform === "android" ? "medium" : "small"} onPress={onEndIconClick} Icon={EndIcon} xstyle={k} aria-label={endIconAriaLabel ?? undefined} widthMode="fit" disabled={isDisabled === true}/>
                    })}/>;
                } else {
                    x = <EndIcon colorName="contentDefault" xstyle={[].concat(T, [
                        I
                    ])} height={v} width={v}/>;
                }
            }
        }
        let $ = null;
        if (EmojiIcon != null && onEmojiIconClick != null && isFocused === true) {
            const Component = r("WDSButton.react");
            $ = <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e, T), {
                children: <Component variant="borderless" size={platform === "android" ? "medium" : "small"} onPress={onEmojiIconClick} Icon={EmojiIcon} xstyle={k} aria-label={emojiIconAriaLabel ?? undefined} widthMode="fit" disabled={isDisabled === true}/>
            })}/>;
        }
        const Component_1 = r("WDSText.react");
        return <>{suffix != null && <div aria-hidden="true"><Component_1 type={E} colorName="contentDeemphasized" selectable={false} xstyle={[
            m.textAffixes,
            m.textSuffix,
            EndIcon == null && SecondaryIcon == null && EmojiIcon == null && L
        ]}>{suffix}</Component_1></div>}{D}{$}{x}</>;
    }
    FComponent.displayName = `${FComponent.name} [from ${i.id}]`;
    function GComponent({ bottomId, bottomText, characterCountRenderer = _, errorText, maxCharacterCount, platform, shouldShowError, testid, textLength }) {
        if (bottomText == null && maxCharacterCount == null && errorText == null) {
            return null;
        }
        let f;
        if (shouldShowError) {
            if (platform === "android") {
                f = "secondaryNegative";
            } else {
                f = "secondaryNegativeEmphasized";
            }
        } else {
            f = "contentDeemphasized";
        }
        const g = shouldShowError ? `${testid}-error-text` : `${testid}-bottom-text`;
        const Component = r("WDSText.react");
        const Component_1 = r("WDSText.react");
        const Component_2 = r("WDSText.react");
        return <>{shouldShowError ? errorText != null && <div className="x78zum5 x1iyjqo2 xs83m0k x1r8uery xeuugli x1q0g3np x1cy8zhl x1trrmfo" role="alert" id={bottomId} data-testid={undefined}>{u.jsx(r("WDSIconIcError.react"), {
            colorName: f,
            xstyle: m.errorIcon,
            height: 16,
            width: 16
        })}<Component type="Body3" selectable={false} colorName={f}>{errorText}</Component></div> : bottomText != null && <Component_1 id={bottomId} type="Body3" selectable={false} testid={undefined} xstyle={m.bottomTextContainer} colorName="contentDeemphasized">{bottomText}</Component_1>}{maxCharacterCount != null && <Component_2 type="Body3" selectable={false} xstyle={m.counter} testid={undefined} colorName={f}>{characterCountRenderer(textLength, maxCharacterCount)}</Component_2>}</>;
    }
    GComponent.displayName = `${GComponent.name} [from ${i.id}]`;
    l.RichTextFieldAddOnStart = p;
    l.RichTextFieldAddOnEnd = FComponent;
    l.RichTextFieldAddOnBottom = GComponent;
}, 98);