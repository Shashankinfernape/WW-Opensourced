__d("WAWebQuizOptionCheckbox", [
    "fbt",
    "WALogger",
    "WAWebCheckBox.react",
    "WAWebCmd",
    "WAWebLottieAnimationLoadable",
    "WDSIconIcCancel.react",
    "WDSIconIcCancelFilled.react",
    "WDSIconIcCheckCircle.react",
    "WDSIconIcCheckCircleFilled.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = "x1vsok4u-B";
    const m = {
        xoeyzqq: "x1emn1tm xoeyzqq",
        $$css: true
    };
    const p = {
        shake: {
            animationName: "x52n5gc",
            animationDuration: "xe1tv58",
            animationTimingFunction: "xu9fayn",
            animationIterationCount: "x1v7wizp",
            $$css: true
        },
        lottieOverlay: {
            width: "xb5ztz5",
            height: "x1a3bvp5",
            pointerEvents: "x47corl",
            position: "x10l6tqk",
            zIndex: "x1n327nk",
            top: "xdsb8wn",
            insetInlineStart: "xbudbmw",
            left: null,
            right: null,
            transform: "xo88s9q",
            $$css: true
        }
    };
    function _(e) {
        const t = o("react-compiler-runtime").c(23);
        const { animationPromise, checked, count, hideResults, id, isAdminOrOwner, isCorrectOption, msgId, onOptionToggle, option, testid } = e;
        const { localId, name } = option;
        let v;
        if (t[0] !== count || t[1] !== name) {
            v = s._("_j{\"*\":\"{option} {responses} responses\",\"_1\":\"{option} 1 response\"}", [
                s._plural(count, "responses"),
                s._param("option", name)
            ]);
            t[0] = count;
            t[1] = name;
            t[2] = v;
        } else {
            v = t[2];
        }
        const S = v;
        if (hideResults) {
            let R;
            if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
                R = {
                    className: "x1emn1tm xoeyzqq"
                };
                t[3] = R;
            } else {
                R = t[3];
            }
            let L;
            if (t[4] !== animationPromise || t[5] !== isCorrectOption || t[6] !== localId || t[7] !== msgId || t[8] !== onOptionToggle) {
                L = function() {
                    if (isCorrectOption) {
                        f(animationPromise);
                    } else {
                        o("WAWebCmd").Cmd.trigger("animate_message_bubble", msgId, p.shake);
                    }
                    onOptionToggle(localId);
                };
                t[4] = animationPromise;
                t[5] = isCorrectOption;
                t[6] = localId;
                t[7] = msgId;
                t[8] = onOptionToggle;
                t[9] = L;
            } else {
                L = t[9];
            }
            let E;
            if (t[10] !== checked || t[11] !== id || t[12] !== S || t[13] !== L || t[14] !== testid) {
                const Component = o("WAWebCheckBox.react").CheckBox;
                E = <div {...babelHelpers.extends({}, R, {
                    children: <Component ariaLabel={S} checked={checked} id={id} onChange={L} testid={testid} theme={o("WAWebCheckBox.react").CheckboxTheme.POLLS_RECEIVER}/>
                })}/>;
                t[10] = checked;
                t[11] = id;
                t[12] = S;
                t[13] = L;
                t[14] = testid;
                t[15] = E;
            } else {
                E = t[15];
            }
            return E;
        }
        let k;
        if (t[16] === Symbol.for("react.memo_cache_sentinel")) {
            k = {
                width: 24,
                height: 24
            };
            t[16] = k;
        } else {
            k = t[16];
        }
        const I = k;
        if (isCorrectOption) {
            let T;
            if (t[17] !== checked || t[18] !== isAdminOrOwner) {
                T = isAdminOrOwner || checked ? c.jsx(r("WDSIconIcCheckCircleFilled.react"), babelHelpers.extends({}, I, {
                    colorName: "accent"
                })) : c.jsx(r("WDSIconIcCheckCircle.react"), babelHelpers.extends({}, I, {
                    colorName: "accent"
                }));
                t[17] = checked;
                t[18] = isAdminOrOwner;
                t[19] = T;
            } else {
                T = t[19];
            }
            return T;
        }
        let D;
        if (t[20] !== checked || t[21] !== isAdminOrOwner) {
            D = checked && !isAdminOrOwner ? c.jsx(r("WDSIconIcCancelFilled.react"), babelHelpers.extends({}, I, {
                colorName: "secondaryNegative"
            })) : c.jsx(r("WDSIconIcCancel.react"), babelHelpers.extends({}, I, {
                colorName: "contentDeemphasized"
            }));
            t[20] = checked;
            t[21] = isAdminOrOwner;
            t[22] = D;
        } else {
            D = t[22];
        }
        return D;
    }
    function f(animationPromise) {
        if (animationPromise != null) {
            animationPromise.then((data)=>{
                const t = Date.now();
                o("WAWebCmd").Cmd.trigger("show_overlay_animation", c.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
                    autoplay: true,
                    loop: false,
                    data,
                    wrapperXstyle: p.lottieOverlay
                }, t));
            }).catch(()=>{
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to load Lottie animation "
                ]))).tags("quiz", "lottie");
            });
        }
    }
    l.default = _;
}, 226);