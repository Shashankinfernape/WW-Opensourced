__d("WAWebMultiStepFormPanel.react", [
    "fbt",
    "WALogger",
    "WAWebFbtCommon",
    "WAWebFrontendMsgGetters",
    "WAWebMultiStepFormButton",
    "WAWebMultiStepFormResponseUtils",
    "WAWebUimUie.react",
    "WDSBaseCheckbox.react",
    "WDSBaseRadio.react",
    "WDSButton.react",
    "WDSIconIcChevronLeft.react",
    "WDSIconIcChevronRight.react",
    "WDSIconIcClose.react",
    "WDSIconIcEdit.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = c || (c = o("react"));
    const m = c;
    const { useRef, useState } = m;
    const f = {
        customInputIcon: {
            color: "xhslqc4",
            flexShrink: "x2lah0s",
            $$css: true
        }
    };
    function g({ formInfo, msg, onDismiss, ref }) {
        const formInfo_steps = formInfo.steps;
        const fRef = useRef(false);
        const g = useState(0);
        const y = g[0];
        const C = g[1];
        const b = useState(function() {
            return formInfo_steps.map(()=>({
                    selectedIds: new Set,
                    customAnswer: ""
                }));
        });
        const v = b[0];
        const S = b[1];
        const m_length = formInfo_steps.length;
        const L = formInfo_steps[y];
        const selection = v[y];
        const k = y === m_length - 1;
        const onToggle = function(t) {
            const e = L.variant === o("WAWebMultiStepFormButton").A2UIChoicePickerVariant.MutuallyExclusive;
            S(function(n) {
                const r = [].concat(n);
                if (e) {
                    r[y] = babelHelpers.extends({}, r[y], {
                        selectedIds: new Set([
                            t
                        ]),
                        customAnswer: ""
                    });
                } else {
                    const selectedIds = new Set(r[y].selectedIds);
                    if (selectedIds.has(t)) {
                        selectedIds.delete(t);
                    } else {
                        selectedIds.add(t);
                    }
                    r[y] = babelHelpers.extends({}, r[y], {
                        selectedIds
                    });
                }
                return r;
            });
        };
        const onCustomAnswerChange = function(customAnswer) {
            const e = L.variant === o("WAWebMultiStepFormButton").A2UIChoicePickerVariant.MutuallyExclusive;
            S(function(n) {
                const r = [].concat(n);
                r[y] = babelHelpers.extends({}, r[y], {
                    customAnswer
                }, e ? {
                    selectedIds: new Set
                } : null);
                return r;
            });
        };
        const D = selection.selectedIds.size > 0 || selection.customAnswer.trim() !== "";
        const x = (()=>{
            const t = n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                if (!fRef.current) {
                    fRef.current = true;
                    const t = o("WAWebMultiStepFormResponseUtils").buildResponseJson(formInfo_steps, v);
                    const n = o("WAWebMultiStepFormResponseUtils").buildResponseBody(formInfo_steps, v);
                    const r = o("WAWebFrontendMsgGetters").getChat(msg.unsafe());
                    if (r == null) {
                        o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[MultiStepFormPanel] chat not found for message"
                        ])));
                        onDismiss();
                        return;
                    }
                    try {
                        yield o("WAWebMultiStepFormResponseUtils").sendFormResponse(r, t, n);
                    } catch (error) {
                        o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[MultiStepFormPanel] failed to send form response: ",
                            ""
                        ])), error);
                    }
                    onDismiss();
                }
            });
            return function() {
                return t.apply(this, arguments);
            };
        })();
        const $ = function() {
            if (D) {
                if (k) {
                    x();
                } else {
                    C(function(e) {
                        return e + 1;
                    });
                }
            }
        };
        const P = function() {
            if (y > 0) {
                C(function(e) {
                    return e - 1;
                });
            }
        };
        const N = s._("{current} of {total}", [
            s._param("current", y + 1),
            s._param("total", m_length)
        ]);
        const Component = r("WDSButton.react");
        const Component_1 = r("WDSText.react");
        const Component_2 = r("WDSButton.react");
        const Component_3 = r("WDSButton.react");
        const Component_4 = r("WDSText.react");
        const Component_5 = r("WDSButton.react");
        const Component_6 = o("WAWebUimUie.react").UIE;
        return <Component_6 ref={ref} displayName="MultiStepFormPanel" escapable requestDismiss={onDismiss}><div className="x78zum5 xdt5ytf xh8yej3 x3d5gib xk7ee7b xuqqiot x1lkg3h2 xcouhex x17mbzc4 xkfubxc x1o7ofs5" data-testid="multistep_form_panel"><div className="x78zum5 x6s0dn4 x1qughib x12w63v0 x1nzty39 x1xrf6ya xscbp6u"><div className="x78zum5 x6s0dn4 x129bwdz x1trrmfo"><Component Icon={r("WDSIconIcChevronLeft.react")} variant="borderless" disabled={y === 0} onPress={P} aria-label={s._("Previous step")}/><Component_1 type="Body2" colorName="contentDefault">{N}</Component_1><Component_2 Icon={r("WDSIconIcChevronRight.react")} variant="borderless" disabled={!D} onPress={$} aria-label={k ? s._("Submit") : s._("Next step")}/></div><Component_3 Icon={r("WDSIconIcClose.react")} variant="borderless" onPress={onDismiss} aria-label={r("WAWebFbtCommon")("Cancel")}/></div><div className="x1phvje8 xcldk2z x12xbjc7"><Component_4 type="Body1Emphasized" colorName="contentDefault">{L.label}</Component_4></div><div className="x1iyjqo2 x2lwn1j x1odjw0f x12xbjc7" data-testid="multistep_form_options"><H3Component step={L} selection={selection} onToggle={onToggle} onCustomAnswerChange={onCustomAnswerChange}/></div>{D && <div className="x1phvje8 xcldk2z xscbp6u" data-testid="multistep_form_footer"><Component_5 label={k ? s._("Submit") : s._("Next")} variant="filled" onPress={$} widthMode="flexible"/></div>}</div></Component_6>;
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    function H3Component(e) {
        const t = o("react-compiler-runtime").c(21);
        const { onCustomAnswerChange, onToggle, selection, step } = e;
        const u = step.variant === o("WAWebMultiStepFormButton").A2UIChoicePickerVariant.MutuallyExclusive;
        let c;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            c = {
                className: "x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl xdj266r x14z9mp xat24cr x1lziwak"
            };
            t[0] = c;
        } else {
            c = t[0];
        }
        const step_label = step.label;
        const p = u ? "radiogroup" : "group";
        let _;
        if (t[1] !== u || t[2] !== onToggle || t[3] !== selection || t[4] !== step.id || t[5] !== step.options) {
            let g;
            if (t[7] !== u || t[8] !== onToggle || t[9] !== selection || t[10] !== step.id) {
                g = function(t) {
                    const Component = r("WDSBaseRadio.react");
                    const Component_1 = r("WDSBaseCheckbox.react");
                    const Component_2 = r("WDSText.react");
                    return <label key={t.id} className="x78zum5 x6s0dn4 x8a3fw1 x1aj3ljl x1phvje8 xcldk2z x1xrf6ya xscbp6u x1ypdohk x1ubxc9n" data-testid="multistep_form_option_row">{u ? <Component name={step.id} value={t.id} checked={selection.selectedIds.has(t.id)} onChange={onToggle}/> : <Component_1 value={selection.selectedIds.has(t.id)} onChange={function() {
                        return onToggle(t.id);
                    }}/>}<Component_2 type="Body1" colorName="contentDefault">{t.title}</Component_2></label>;
                };
                t[7] = u;
                t[8] = onToggle;
                t[9] = selection;
                t[10] = step.id;
                t[11] = g;
            } else {
                g = t[11];
            }
            _ = step.options.map(g);
            t[1] = u;
            t[2] = onToggle;
            t[3] = selection;
            t[4] = step.id;
            t[5] = step.options;
            t[6] = _;
        } else {
            _ = t[6];
        }
        let h;
        if (t[12] !== onCustomAnswerChange || t[13] !== selection || t[14] !== step.allow_custom_answer) {
            h = step.allow_custom_answer === true && <><div className="x6pxu1d xd6izgl x178xt8z x13fuv20 xx42vgk"/><div className="x78zum5 x6s0dn4 x8a3fw1 x1aj3ljl x1phvje8 xcldk2z x1xrf6ya xscbp6u">{d.jsx(r("WDSIconIcEdit.react"), {
                xstyle: f.customInputIcon
            })}<input className="x1iyjqo2 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1t137rt x1md70p1 xln7xf2 x1qlqyl8 x14ug900 xexx8yu xyri2b x18d9i69 x1c1uobl x1hcheoe" type="text" aria-label={s._("Type your answer")} placeholder={s._("Type your answer...")} value={selection.customAnswer} onChange={function(t) {
                return onCustomAnswerChange(t.target.value);
            }} data-testid="multistep_form_custom_input"/></div></>;
            t[12] = onCustomAnswerChange;
            t[13] = selection;
            t[14] = step.allow_custom_answer;
            t[15] = h;
        } else {
            h = t[15];
        }
        let y;
        if (t[16] !== step.label || t[17] !== p || t[18] !== _ || t[19] !== h) {
            y = <fieldset {...babelHelpers.extends({}, c, {
                "aria-label": step_label,
                role: p,
                children: [
                    _,
                    h
                ]
            })}/>;
            t[16] = step.label;
            t[17] = p;
            t[18] = _;
            t[19] = h;
            t[20] = y;
        } else {
            y = t[20];
        }
        return y;
    }
    l.default = g;
}, 226);