__d("WAWebChatlistPageNavigation.react", [], function(t, n, r, o, a, i) {
    "use strict";
    const e = '[aria-label="Chat list"]';
    const l = '[role="row"]';
    const s = `${e} > ${l}`;
    const u = '[aria-selected="true"][tabindex="0"]';
    const c = "pane-side";
    const d = 8;
    function m() {
        const element = document.getElementById(c);
        if (element) {
            const t = element.getBoundingClientRect();
            const n = t.top + d;
            const bottom = t.bottom - d;
            const o = bottom - n;
            return {
                top: n,
                bottom,
                height: o,
                element
            };
        }
    }
    function p() {
        const e = document.querySelector(u);
        if (!e) {
            return -1;
        }
        const t = e.closest(l);
        if (!t) {
            return -1;
        }
        const n = Array.from(document.querySelectorAll(s));
        return n.indexOf(t);
    }
    function _(e) {
        const t = m();
        if (!t) {
            return false;
        }
        const n = e.getBoundingClientRect();
        const { top, bottom } = t;
        return n.top >= top && n.bottom <= bottom;
    }
    function f(e) {
        const e_direction = e.direction;
        for(var n = e_direction === undefined ? "down" : e_direction, r = e.nodes, o = e.start, a = o, i = o + (n === "down" ? 1 : -1); (n === "down" ? i < r.length : i >= 0) && _(r[i]); n === "down" ? ++i : --i){
            a = i;
        }
        return a;
    }
    function g(e) {
        const e_direction = e.direction;
        const n = e_direction === undefined ? "down" : e_direction;
        for(var r = e.nodes, o = e.start, a = e.viewportHeight, i = 0, l = o, s = n === "down" ? 1 : -1, u = o + s; u >= 0 && u < r.length; u += s){
            const c = r[u].getBoundingClientRect().height;
            i += c;
            l = u;
            if (i >= a) {
                break;
            }
        }
        return l;
    }
    function h() {
        const e = Array.from(document.querySelectorAll(s));
        return e;
    }
    function y(e, t = false) {
        const n = m();
        if (n) {
            const r = h();
            if (!(e < 0 || e >= r.length)) {
                const o = r[e];
                const a = o.getBoundingClientRect();
                if (t) {
                    const i = a.bottom - n.bottom;
                    n.element.scrollTop += i;
                } else {
                    const l = a.top - n.top;
                    n.element.scrollTop += l;
                }
            }
        }
    }
    function C({ direction, event, selection, setSelectedChat }) {
        if (selection) {
            const a = selection.list;
            if (a.length !== 0) {
                const i = selection.index;
                if (i !== -1) {
                    const l = m();
                    if (l) {
                        if (event) {
                            event.preventDefault();
                        }
                        const nodes = Array.from(document.querySelectorAll(s));
                        const start = p();
                        if (start !== -1) {
                            const d = f({
                                start,
                                nodes,
                                direction
                            });
                            const _ = direction === "down" ? d > start : d < start;
                            if (_) {
                                const h = direction === "down" ? i + (d - start) : i - (start - d);
                                selection?.set(h);
                                setSelectedChat(selection?.getVal());
                                return;
                            }
                            const C = g({
                                start,
                                nodes,
                                viewportHeight: l.height,
                                direction
                            });
                            const b = direction === "down" ? i + (C - start) : i - (start - C);
                            const v = direction === "down" ? Math.min(b, a.length - 1) : Math.max(b, 0);
                            selection?.set(v, true);
                            setSelectedChat(selection?.getVal());
                            y(C, direction === "down");
                        }
                    }
                }
            }
        }
    }
    i.handlePageNavigation = C;
}, 66);