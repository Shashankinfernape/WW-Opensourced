__d("WAWebGalaxyFlowsNavBarUtils.react", [
    "fbt",
    "WAWebActionMenuItem.react",
    "WAWebClickable.react",
    "WAWebDrawerHeader.react",
    "WAWebDropdownV2.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebReportMsgPopup.react",
    "WAWebSpamConstants",
    "WDSIconIcClose.react",
    "WDSIconIcMoreVert.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    const e_useRef = e.useRef;
    const d = {
        LEARN_MORE: 2107457129437300,
        HELP: 301407378887650
    };
    const minWidth = 197;
    const p = {
        contextMenuIconContainer: {
            borderStartStartRadius: "xvs2etk",
            borderStartEndRadius: "xg3wpu6",
            borderEndEndRadius: "x1jwbhkm",
            borderEndStartRadius: "xgg4q86",
            height: "x1vqgdyp",
            width: "x100vrsf",
            display: "x78zum5",
            alignItems: "x6s0dn4",
            justifyContent: "xl56j7k",
            flex: "x1okw0bk",
            cursor: "x1ypdohk",
            ":hover_backgroundColor": "x1j1k1sc",
            $$css: true
        }
    };
    function _(e) {
        o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getFullUrl(e));
    }
    function f(e) {
        o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportMsgPopup.react"), {
            msg: e.unsafe(),
            spamFlow: o("WAWebSpamConstants").SpamFlow.GalaxyFlowsContextMenuReport
        }));
    }
    function g(e) {
        const t = o("react-compiler-runtime").c(17);
        const { isResponseFlow, msg, onCancel } = e;
        const l = e_useRef(null);
        const d = e_useRef(null);
        let _;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            _ = s._("Menu");
            t[0] = _;
        } else {
            _ = t[0];
        }
        const g = _;
        let y;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            y = s._("Close");
            t[1] = y;
        } else {
            y = t[1];
        }
        const C = y;
        let b;
        if (t[2] === Symbol.for("react.memo_cache_sentinel")) {
            b = u.jsx(r("WDSIconIcClose.react"), {});
            t[2] = b;
        } else {
            b = t[2];
        }
        let v;
        if (t[3] !== onCancel) {
            const Component = o("WAWebClickable.react").Clickable;
            v = <Component ref={l} xstyle={p.contextMenuIconContainer} title={C} ariaLabel={C} onClick={onCancel}>{b}</Component>;
            t[3] = onCancel;
            t[4] = v;
        } else {
            v = t[4];
        }
        const S = v;
        let R;
        if (t[5] !== isResponseFlow) {
            const Component = o("WAWebClickable.react").Clickable;
            R = !isResponseFlow && <Component ref={d} xstyle={p.contextMenuIconContainer} title={g} ariaLabel={g}>{u.jsx(r("WDSIconIcMoreVert.react"), {})}</Component>;
            t[5] = isResponseFlow;
            t[6] = R;
        } else {
            R = t[6];
        }
        let L;
        if (t[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = o("WAWebActionMenuItem.react").ActionMenuItem;
            L = <Component optionId="help" primary={s._("Help")} onSelect={h}/>;
            t[7] = L;
        } else {
            L = t[7];
        }
        let E;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
            E = s._("Report");
            t[8] = E;
        } else {
            E = t[8];
        }
        let k;
        if (t[9] !== msg) {
            const Component = o("WAWebActionMenuItem.react").ActionMenuItem;
            const Component_1 = o("WAWebDropdownV2.react").DropdownV2Menu;
            k = <Component_1 minWidth={minWidth} target={d} alignment={o("WAWebDropdownV2.react").PopoverAlignment.Center} position={o("WAWebDropdownV2.react").PopoverPosition.Bottom}>{L}<Component optionId="report" primary={E} onSelect={function() {
                return f(msg);
            }}/></Component_1>;
            t[9] = msg;
            t[10] = k;
        } else {
            k = t[10];
        }
        let I;
        if (t[11] !== R || t[12] !== k) {
            I = <>{R}{k}</>;
            t[11] = R;
            t[12] = k;
            t[13] = I;
        } else {
            I = t[13];
        }
        const T = I;
        let D;
        if (t[14] !== S || t[15] !== T) {
            const Component = o("WAWebFlex.react").FlexRow;
            const Component_1 = o("WAWebDrawerHeader.react").DrawerHeader;
            D = <Component_1 testid="galaxy-flows-header" type={o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB}><Component align="end" justify="end" gap={12}>{T}{S}</Component></Component_1>;
            t[14] = S;
            t[15] = T;
            t[16] = D;
        } else {
            D = t[16];
        }
        return D;
    }
    function h() {
        return _(d.HELP);
    }
    l.GALAXY_FLOWS_ARTICLE_IDS = d;
    l.openHelpCenterArticle = _;
    l.reportGalaxyFlow = f;
    l.WAWebGalaxyFlowsNavBar = g;
}, 226);