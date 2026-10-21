__d("setElementCanTab", [], function(t, n, r, o, a, i) {
    const e = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "tabIndex");
    const l = Object.getOwnPropertyDescriptor(SVGElement.prototype, "tabIndex");
    const s = function(t) {
        return t;
    };
    const u = e ? e.set : s;
    const c = l ? l.set : s;
    function d(e) {
        if (e instanceof SVGElement) {
            return c;
        }
        return u;
    }
    function m(e, canTab, n = false) {
        const e__tabIndexState = e._tabIndexState;
        const o = d(e);
        if (e__tabIndexState) {
            if (e__tabIndexState.canTab !== canTab && typeof o === "function") {
                o.call(e, canTab ? e__tabIndexState.value : -1);
                e__tabIndexState.canTab = canTab;
            }
        } else {
            if (canTab && n && e.tabIndex < 0) {
                e.tabIndex = 0;
            }
            const a = {
                value: e.tabIndex,
                canTab
            };
            e._tabIndexState = a;
            if (!canTab) {
                e.tabIndex = -1;
            }
            Object.defineProperty(e, "tabIndex", {
                enumerable: false,
                configurable: true,
                get: function() {
                    if (a.canTab) {
                        return a.value;
                    }
                    return -1;
                },
                set: function(t) {
                    if (a.canTab && typeof o === "function") {
                        o.call(this, t);
                    }
                    a.value = t;
                }
            });
        }
    }
    function p(e) {
        const e__tabIndexState = e._tabIndexState;
        if (e__tabIndexState) {
            return e__tabIndexState.canTab;
        }
        return e.tabIndex > 0;
    }
    i.setElementCanTab = m;
    i.canElementTab = p;
}, 66);