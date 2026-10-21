__d("WDSTextFieldUtils.iOS", [
    "CheckmarkCircleFillIOS.svg.react",
    "ExclamationmarkCircleFillIOS.svg.react",
    "WDSButton.react",
    "WDSFlex.stylex",
    "WDSSpinner.react",
    "WDSSvgComponentBase.react",
    "WDSText.react",
    "XmarkCircleFillIOS.svg.react",
    "react",
    "stylex"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = s || (s = o("react"));
    const c = {
        icon: {
            height: "x17rw0jw",
            width: "x17z2i9w",
            $$css: true
        },
        clearButton: {
            color: "xhslqc4",
            $$css: true
        },
        textPrefix: {
            wordBreak: "x1lldw8n",
            $$css: true
        },
        counter: {
            whiteSpace: "xuxw1ft",
            $$css: true
        }
    };
    function d({ prefix }) {
        if (prefix != null) {
            const Component = r("WDSText.react");
            return <div aria-hidden="true"><Component type="Body1" colorName="contentDeemphasized" selectable={false} xstyle={c.textPrefix}>{prefix}</Component></div>;
        }
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m({ isFocused, loading, maxCharacterCount, onClearInput, shouldShowError, shouldShowSuccess, value }) {
        const p = maxCharacterCount != null && value.length > maxCharacterCount;
        const _ = maxCharacterCount != null ? maxCharacterCount - value.length : 0;
        const f = maxCharacterCount != null && (_ <= 10 || p);
        if (!(!shouldShowError && !shouldShowSuccess && !loading && !f && value.length === 0)) {
            let g;
            if (shouldShowError) {
                const Component = r("ExclamationmarkCircleFillIOS.svg.react");
                const Component_1 = r("WDSSvgComponentBase.react");
                g = <Component_1 xstyle={c.icon} colorName="secondaryNegative"><Component height={22} width={22} className="x17rw0jw x17z2i9w"/></Component_1>;
            } else if (shouldShowSuccess) {
                const Component = r("CheckmarkCircleFillIOS.svg.react");
                const Component_1 = r("WDSSvgComponentBase.react");
                g = <Component_1 xstyle={c.icon} colorName="secondaryPositive"><Component height={22} width={22} className="x17rw0jw x17z2i9w"/></Component_1>;
            } else if (loading === true) {
                g = u.jsx(r("WDSSpinner.react"), {
                    size: 22
                });
            } else if (value.length > 0 && isFocused) {
                const Component = r("WDSButton.react");
                g = <Component variant="borderless" size="small" onPressIn={onClearInput} Icon={r("XmarkCircleFillIOS.svg.react")} aria-label="Clear input" widthMode="fit" xstyle={[
                    c.clearButton,
                    c.icon
                ]}/>;
            }
            const Component = r("WDSText.react");
            return <div {...babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, o("WDSFlex.stylex").wdsFlex.alignCenter, o("WDSFlex.stylex").wdsFlex.columnGapSingle), {
                children: [
                    f && <div aria-hidden="true"><Component type="Body1" selectable={false} xstyle={c.counter} colorName={p ? "secondaryNegative" : "contentDeemphasized"}>{p ? `-${Math.abs(_)}` : `${_}`}</Component></div>,
                    g != null && <div className="x17rw0jw x17z2i9w">{g}</div>
                ]
            })}/>;
        }
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p({ errorText, loading, loadingText, shouldShowError, shouldShowSuccess, successText }) {
        if (!(errorText == null && successText == null && loadingText == null)) {
            let s;
            let c;
            if (shouldShowError) {
                c = errorText;
                s = "secondaryNegative";
            } else if (shouldShowSuccess) {
                c = successText;
                s = "contentActionEmphasized";
            } else if (loading) {
                c = loadingText;
                s = "contentDeemphasized";
            }
            if (!(c == null || s == null)) {
                const Component = r("WDSText.react");
                return <Component type="Body2" selectable={false} colorName={s}>{c}</Component>;
            }
        }
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.TextFieldAddOnStart = d;
    l.TextFieldAddOnEnd = m;
    l.TextFieldAddOnBottom = p;
}, 98);