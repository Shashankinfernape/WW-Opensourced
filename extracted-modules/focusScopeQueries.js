__d("focusScopeQueries", [], function(t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
        return e === "h1" || e === "h2" || e === "h3" || t.role === "heading" && (t["aria-level"] === 1 || t["aria-level"] === 2 || t["aria-level"] === 3) || t["aria-busy"] === true || t.role === "progressbar" || t.role === "status";
    }
    function l(e, t) {
        if (t.tabIndex === -1 && !(t.disabled === true || t.type === "hidden" || t["aria-disabled"] === true || t["aria-hidden"] === true)) {
            return true;
        }
        return c(e, t);
    }
    function s(e) {
        return e.type !== "hidden" && e.type !== "file";
    }
    function u(e, t) {
        return e === "input" && s(t);
    }
    function c(e, t) {
        if (t.tabIndex === -1 || t.disabled === true) {
            return false;
        }
        if (t.tabIndex === 0 || t.contentEditable === true) {
            return true;
        }
        if (e === "a" || e === "area") {
            return t.href != null && t.href !== "" && t.rel !== "ignore";
        }
        if (e === "input") {
            return s(t);
        }
        return e === "button" || e === "textarea" || e === "select" || e === "iframe" || e === "embed";
    }
    const d = [
        u,
        c
    ];
    function m(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0;
    }
    function p(e, t, n) {
        return !m(n) && c(e, t);
    }
    function _(e, t) {
        return e === "td" || e === "th" || t.role === "gridcell" || t.role === "columnheader" || t.role === "rowheader";
    }
    function f(e, t) {
        return !_(e, t) && c(e, t);
    }
    const g = [
        e,
        c
    ];
    const h = [
        c,
        e
    ];
    function y(t, n) {
        return e(t, n) || c(t, n);
    }
    const C = function(t, n) {
        return n["data-focus-target"] === true && (n["aria-busy"] === true || n.role === "progressbar");
    };
    i.headerAndSpinnerFocusScopeQuery = e;
    i.focusableScopeQuery = l;
    i.tabbableScopeQuery = c;
    i.inputFirstTabbbableScopeQuery = d;
    i.displayedTabbableScopeQuery = p;
    i.tableCellScopeQuery = _;
    i.tableCellTabbableContentScopeQuery = f;
    i.headerFirstTabbableSecondScopeQuery = g;
    i.tabbableFirstHeaderSecondScopeQuery = h;
    i.headerOrTabbableScopeQuery = y;
    i.topLoadingScopeQuery = C;
}, 66);