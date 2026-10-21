__d("WAWebPanelsMenu.react", [
    "WAFilterObjectNullishProps",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebPanelsDisplayLocation",
    "WAWebPanelsMenuContainer.react",
    "WAWebPanelsMenuTabMarker.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = s || (s = o("react"));
    function c(t) {
        const a = o("react-compiler-runtime").c(29);
        const t_displayLocation = t.displayLocation;
        let l;
        if (a[0] !== t.sectionIds || a[1] !== t.selectedSectionId || a[2] !== t.showTabHighlight) {
            l = t.showTabHighlight === true ? t.sectionIds.findIndex((e)=>e === t.selectedSectionId) : -1;
            a[0] = t.sectionIds;
            a[1] = t.selectedSectionId;
            a[2] = t.showTabHighlight;
            a[3] = l;
        } else {
            l = a[3];
        }
        const selectedTabIndex = l;
        let c;
        if (a[4] !== t) {
            c = t.sectionIds.map((e)=>t.renderSectionTab(e, t.showTabHighlight === true && e === t.selectedSectionId));
            a[4] = t;
            a[5] = c;
        } else {
            c = a[5];
        }
        const d = c;
        let m;
        if (a[6] !== t) {
            m = function() {
                if (r("WAWebL10N").isRTL()) {
                    if (t.onFocusNext != null) {
                        t.onFocusNext();
                    }
                } else if (t.onFocusPrev != null) {
                    t.onFocusPrev();
                }
            };
            a[6] = t;
            a[7] = m;
        } else {
            m = a[7];
        }
        const p = m;
        let _;
        if (a[8] !== t) {
            _ = function() {
                if (r("WAWebL10N").isRTL()) {
                    if (t.onFocusPrev != null) {
                        t.onFocusPrev();
                    }
                } else if (t.onFocusNext != null) {
                    t.onFocusNext();
                }
            };
            a[8] = t;
            a[9] = _;
        } else {
            _ = a[9];
        }
        const f = _;
        const g = t_displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions || t_displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel || t_displayLocation === o("WAWebPanelsDisplayLocation").DisplayLocation.Dropdown;
        let h;
        if (a[10] === Symbol.for("react.memo_cache_sentinel")) {
            h = (e || (e = r("stylex")))(false);
            a[10] = h;
        } else {
            h = a[10];
        }
        let y;
        if (a[11] !== f || a[12] !== p || a[13] !== t.onEnter || a[14] !== t.onFocusLeave || a[15] !== t.onFocusNext || a[16] !== t.onFocusPrev) {
            y = o("WAFilterObjectNullishProps").filterObjectNullishProps({
                "shift+tab": t.onFocusPrev,
                tab: t.onFocusNext,
                down: t.onFocusLeave,
                left: p,
                right: f,
                enter: t.onEnter,
                space: t.onEnter
            });
            a[11] = f;
            a[12] = p;
            a[13] = t.onEnter;
            a[14] = t.onFocusLeave;
            a[15] = t.onFocusNext;
            a[16] = t.onFocusPrev;
            a[17] = y;
        } else {
            y = a[17];
        }
        const C = g ? o("WAWebPanelsMenuContainer.react").MenuContainerTheme.TAB_MARKER_SEPARATOR : undefined;
        const animate = t.showTabHighlight ?? true;
        let v;
        if (a[18] !== t.sectionIds.length || a[19] !== selectedTabIndex || a[20] !== animate) {
            v = u.jsx(r("WAWebPanelsMenuTabMarker.react"), {
                numTabs: t.sectionIds.length,
                selectedTabIndex,
                animate
            });
            a[18] = t.sectionIds.length;
            a[19] = selectedTabIndex;
            a[20] = animate;
            a[21] = v;
        } else {
            v = a[21];
        }
        let S;
        if (a[22] !== d || a[23] !== C || a[24] !== v) {
            const Component = o("WAWebPanelsMenuContainer.react").MenuContainer;
            S = <Component theme={C}>{v}{d}</Component>;
            a[22] = d;
            a[23] = C;
            a[24] = v;
            a[25] = S;
        } else {
            S = a[25];
        }
        let R;
        if (a[26] !== y || a[27] !== S) {
            const Component = o("WAWebKeyboardHotKeys.react").HotKeys;
            R = <Component component="div" className={h} tabIndex={null} handlers={y}>{S}</Component>;
            a[26] = y;
            a[27] = S;
            a[28] = R;
        } else {
            R = a[28];
        }
        return R;
    }
    l.default = c;
}, 98);