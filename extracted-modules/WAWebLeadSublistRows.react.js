__d("WAWebLeadSublistRows.react", [
    "WAWebCellMenuItem.react",
    "WAWebDropdownItem.react",
    "WAWebDropdownV2.react",
    "WAWebLeadStage",
    "WAWebLeadStageColors",
    "WAWebLeadStageNames",
    "WAWebListIcon.react",
    "WAWebListUtils",
    "WAWebPopoverContext.react",
    "WAWebStopEvent",
    "WDSIconIcAddCircle.react",
    "WDSIconIcArrowRight.react",
    "WDSIconIcCheck.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const e_useRef = e.useRef;
    const c = {
        icon: {
            color: "xhslqc4",
            flexShrink: "x2lah0s",
            $$css: true
        }
    };
    function d(e) {
        const t = o("react-compiler-runtime").c(41);
        const { currentStage, isStageResolved, onSelectStage } = e;
        const l = e_useRef(null);
        const controllerRef = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef();
        let p = null;
        if (isStageResolved) {
            let _;
            if (t[0] !== currentStage) {
                _ = currentStage == null ? o("WAWebLeadStageNames").getNoLeadStageName() : o("WAWebLeadStageNames").getLeadStageName(currentStage);
                t[0] = currentStage;
                t[1] = _;
            } else {
                _ = t[1];
            }
            p = _;
        }
        let f;
        if (t[2] !== controllerRef) {
            f = function() {
                const d_current = controllerRef.current;
                if (d_current != null) {
                    if (d_current.popoverIsVisible) {
                        d_current.hidePopover();
                    } else {
                        d_current.showPopover();
                    }
                }
            };
            t[2] = controllerRef;
            t[3] = f;
        } else {
            f = t[3];
        }
        const g = f;
        let h;
        if (t[4] !== g) {
            h = function() {
                g();
                return false;
            };
            t[4] = g;
            t[5] = h;
        } else {
            h = t[5];
        }
        let y;
        let C;
        let b;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            y = {
                className: "x6s0dn4 x9f619 x1aj3ljl x78zum5 x193iq5w x6ikm8r x10wlt62 x16ovd2e x12xbjc7 x1iw51ew xde1mab"
            };
            C = s.jsx(r("WDSIconIcAddCircle.react"), {
                iconXstyle: c.icon,
                width: 24
            });
            b = {
                className: "x98rzlu x6ikm8r x10wlt62"
            };
            t[6] = y;
            t[7] = C;
            t[8] = b;
        } else {
            y = t[6];
            C = t[7];
            b = t[8];
        }
        let v;
        if (t[9] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            v = <div {...babelHelpers.extends({}, b, {
                children: <Component type="Body2" colorName="contentDefault" maxLines={1}>{o("WAWebListUtils").getLeadStageListName()}</Component>
            })}/>;
            t[9] = v;
        } else {
            v = t[9];
        }
        let S;
        if (t[10] !== p) {
            const Component = r("WDSText.react");
            S = <Component type="Body2" colorName="contentDeemphasized" maxLines={1} testid="lead_stage_row_value">{p}</Component>;
            t[10] = p;
            t[11] = S;
        } else {
            S = t[11];
        }
        let R;
        if (t[12] === Symbol.for("react.memo_cache_sentinel")) {
            R = s.jsx(r("WDSIconIcArrowRight.react"), {
                iconXstyle: c.icon,
                width: 20
            });
            t[12] = R;
        } else {
            R = t[12];
        }
        let L;
        if (t[13] !== S) {
            L = <div {...babelHelpers.extends({
                ref: l
            }, y, {
                children: [
                    C,
                    v,
                    S,
                    R
                ]
            })}/>;
            t[13] = S;
            t[14] = L;
        } else {
            L = t[14];
        }
        let E;
        if (t[15] !== h || t[16] !== L) {
            const Component = o("WAWebDropdownItem.react").DropdownItem;
            E = <Component action={h} testid="lead_stage_row">{L}</Component>;
            t[15] = h;
            t[16] = L;
            t[17] = E;
        } else {
            E = t[17];
        }
        let k;
        if (t[18] !== currentStage || t[19] !== isStageResolved) {
            k = o("WAWebLeadStageNames").getLeadStageOptionAriaLabel(o("WAWebLeadStageNames").getNoLeadStageName(), isStageResolved && currentStage == null);
            t[18] = currentStage;
            t[19] = isStageResolved;
            t[20] = k;
        } else {
            k = t[20];
        }
        const I = isStageResolved && currentStage == null;
        let T;
        if (t[21] !== I) {
            T = <M3Component checked={I}/>;
            t[21] = I;
            t[22] = T;
        } else {
            T = t[22];
        }
        let D;
        if (t[23] === Symbol.for("react.memo_cache_sentinel")) {
            D = o("WAWebLeadStageNames").getNoLeadStageName();
            t[23] = D;
        } else {
            D = t[23];
        }
        let onSelect;
        if (t[24] !== onSelectStage) {
            onSelect = function() {
                return onSelectStage(null);
            };
            t[24] = onSelectStage;
            t[25] = onSelect;
        } else {
            onSelect = t[25];
        }
        let $;
        if (t[26] !== k || t[27] !== T || t[28] !== onSelect) {
            const Component = o("WAWebCellMenuItem.react").CellV2MenuItem;
            $ = <Component optionId="lead_stage_none" testid="lead_stage_option_none" ariaLabel={k} detailLeft={T} primary={D} onSelect={onSelect}/>;
            t[26] = k;
            t[27] = T;
            t[28] = onSelect;
            t[29] = $;
        } else {
            $ = t[29];
        }
        let P;
        if (t[30] !== currentStage || t[31] !== isStageResolved || t[32] !== onSelectStage) {
            P = o("WAWebLeadStage").ALL_LEAD_STAGES.map((e)=>{
                const Component = o("WAWebCellMenuItem.react").CellV2MenuItem;
                return <Component key={e} optionId={`lead_stage_${String(e)}`} testid={`lead_stage_option_${String(e)}`} ariaLabel={o("WAWebLeadStageNames").getLeadStageOptionAriaLabel(o("WAWebLeadStageNames").getLeadStageName(e), isStageResolved && currentStage === e)} detailLeft=<div className="x6s0dn4 x1aj3ljl x78zum5"><M3Component checked={isStageResolved && currentStage === e}/>{s.jsx(r("WAWebListIcon.react"), {
                    color: o("WAWebLeadStageColors").getLeadStageDotColor(e)
                })}</div> primary={o("WAWebLeadStageNames").getLeadStageName(e)} onSelect={function() {
                    return onSelectStage(e);
                }}/>;
            });
            t[30] = currentStage;
            t[31] = isStageResolved;
            t[32] = onSelectStage;
            t[33] = P;
        } else {
            P = t[33];
        }
        let N;
        if (t[34] !== controllerRef || t[35] !== $ || t[36] !== P) {
            const Component = o("WAWebDropdownV2.react").DropdownV2Menu;
            N = <div onKeyDown={o("WAWebStopEvent").stopPropagation} role="group"><Component controllerRef={controllerRef} target={l} position={o("WAWebDropdownV2.react").PopoverPosition.Start} alignment={o("WAWebDropdownV2.react").PopoverAlignment.Start} initHandling="controllable">{$}{P}</Component></div>;
            t[34] = controllerRef;
            t[35] = $;
            t[36] = P;
            t[37] = N;
        } else {
            N = t[37];
        }
        let M;
        if (t[38] !== E || t[39] !== N) {
            M = <>{E}{N}</>;
            t[38] = E;
            t[39] = N;
            t[40] = M;
        } else {
            M = t[40];
        }
        return M;
    }
    function M3Component(e) {
        const t = o("react-compiler-runtime").c(5);
        const e_checked = e.checked;
        let a;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            a = {
                className: "x78zum5 xw4jnvo"
            };
            t[0] = a;
        } else {
            a = t[0];
        }
        let i;
        if (t[1] !== e_checked) {
            i = e_checked ? s.jsx(r("WDSIconIcCheck.react"), {
                width: 20
            }) : null;
            t[1] = e_checked;
            t[2] = i;
        } else {
            i = t[2];
        }
        let l;
        if (t[3] !== i) {
            l = <div {...babelHelpers.extends({}, a, {
                children: i
            })}/>;
            t[3] = i;
            t[4] = l;
        } else {
            l = t[4];
        }
        return l;
    }
    l.default = d;
}, 98);