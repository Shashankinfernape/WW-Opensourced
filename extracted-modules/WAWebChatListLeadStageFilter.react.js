__d("WAWebChatListLeadStageFilter.react", [
    "fbt",
    "WAWebLeadStage",
    "WAWebLeadStageColors",
    "WAWebLeadStageNames",
    "WAWebListIcon.react",
    "WAWebNoop",
    "WAWebPaymentSendIcon.react",
    "WAWebTabOrder",
    "WDSChip.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWDSMenu"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const e_useRef = e.useRef;
    const d = {
        stageDot: {
            color: "xyco68o",
            $$css: true
        }
    };
    function m(e) {
        const t = o("react-compiler-runtime").c(35);
        const { applied, "aria-controls": aria_controls, "aria-selected": aria_selected, id, onFocus, onSelectStage, ref, role, selectedStage, tabIndex } = e;
        const targetRef = e_useRef(null);
        const b = r("useMergeRefs")(targetRef, ref);
        let v;
        if (t[0] !== applied || t[1] !== onSelectStage || t[2] !== selectedStage) {
            v = o("WAWebLeadStage").ALL_LEAD_STAGES.map((e)=>{
                const Component = r("WDSMenuItem.react");
                return <span key={`lead_stage_filter_${String(e)}`} className="xjp7ctv" style={{
                    "--lead-stage-dot-color": o("WAWebLeadStageColors").getLeadStageDotColor(e)
                }}><Component Icon={o("WAWebPaymentSendIcon.react").PaymentSendIcon} iconXstyle={d.stageDot} isToggleable onPress={function() {
                    return onSelectStage(e);
                }} testid={`chat_list_lead_stage_filter_${String(e)}`} title={_(e)} toggled={applied && selectedStage === e}/></span>;
            });
            t[0] = applied;
            t[1] = onSelectStage;
            t[2] = selectedStage;
            t[3] = v;
        } else {
            v = t[3];
        }
        const S = v;
        let R;
        if (t[4] !== S) {
            const Component = r("WDSMenu.react");
            R = {
                targetRef,
                menu: <Component>{S}</Component>
            };
            t[4] = S;
            t[5] = R;
        } else {
            R = t[5];
        }
        const L = r("useWDSMenu")(R);
        const { closeMenu, isMenuOpen, menuPortal, openMenu } = L;
        const focusable = tabIndex != null && tabIndex >= 0;
        let x;
        if (t[6] !== applied || t[7] !== selectedStage) {
            x = applied ? _(selectedStage) : p();
            t[6] = applied;
            t[7] = selectedStage;
            t[8] = x;
        } else {
            x = t[8];
        }
        const $ = onFocus ?? r("WAWebNoop");
        let P;
        if (t[9] !== closeMenu || t[10] !== isMenuOpen || t[11] !== openMenu) {
            P = function() {
                if (isMenuOpen) {
                    return closeMenu();
                }
                return openMenu();
            };
            t[9] = closeMenu;
            t[10] = isMenuOpen;
            t[11] = openMenu;
            t[12] = P;
        } else {
            P = t[12];
        }
        let smbLabelsContent;
        if (t[13] !== applied || t[14] !== selectedStage) {
            const Component = r("WDSText.react");
            smbLabelsContent = applied ? <span className="x6s0dn4 x3nfvp2 xeuugli"><span className="x6s0dn4 x78zum5 x2lah0s x1qx5ct2 xl56j7k xw4jnvo">{u.jsx(r("WAWebListIcon.react"), {
                color: o("WAWebLeadStageColors").getLeadStageDotColor(selectedStage ?? o("WAWebLeadStage").LeadStage.LEAD)
            })}</span><span className="x150mmf0 x1qh4rir x6ikm8r x10wlt62"><Component colorName="accentEmphasized" maxLines={1} type="Body2Emphasized">{_(selectedStage)}</Component></span></span> : undefined;
            t[13] = applied;
            t[14] = selectedStage;
            t[15] = smbLabelsContent;
        } else {
            smbLabelsContent = t[15];
        }
        const tabOrder = tabIndex != null && tabIndex >= 0 ? o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER : undefined;
        let w;
        if (t[16] !== applied || t[17] !== aria_controls || t[18] !== aria_selected || t[19] !== id || t[20] !== b || t[21] !== role || t[22] !== focusable || t[23] !== x || t[24] !== $ || t[25] !== P || t[26] !== smbLabelsContent || t[27] !== tabOrder) {
            const Component = r("WDSChip.react");
            w = <div data-testid="filter-button" role="none"><Component ref={b} aria-controls={aria_controls} aria-selected={aria_selected} focusable={focusable} id={id} isSelected={applied} label={x} onFocus={$} onPress={P} role={role} showEndDropdownIcon smbLabelsContent={smbLabelsContent} tabOrder={tabOrder} testid="chat_list_filter_button_pill_chat_list_lead_stage_pill" truncateText/></div>;
            t[16] = applied;
            t[17] = aria_controls;
            t[18] = aria_selected;
            t[19] = id;
            t[20] = b;
            t[21] = role;
            t[22] = focusable;
            t[23] = x;
            t[24] = $;
            t[25] = P;
            t[26] = smbLabelsContent;
            t[27] = tabOrder;
            t[28] = w;
        } else {
            w = t[28];
        }
        let A;
        if (t[29] === Symbol.for("react.memo_cache_sentinel")) {
            A = {
                className: "xjp7ctv"
            };
            t[29] = A;
        } else {
            A = t[29];
        }
        let F;
        if (t[30] !== menuPortal) {
            F = <div {...babelHelpers.extends({}, A, {
                "data-testid": "chat_list_lead_stage_menu_portal",
                children: menuPortal
            })}/>;
            t[30] = menuPortal;
            t[31] = F;
        } else {
            F = t[31];
        }
        let O;
        if (t[32] !== F || t[33] !== w) {
            O = <>{w}{F}</>;
            t[32] = F;
            t[33] = w;
            t[34] = O;
        } else {
            O = t[34];
        }
        return O;
    }
    function p() {
        return s._("Lead stage");
    }
    function _(e) {
        if (e == null) {
            return o("WAWebLeadStageNames").getLeadListDisplayName();
        }
        return o("WAWebLeadStageNames").getLeadStageName(e);
    }
    l.default = m;
}, 226);