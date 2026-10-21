__d("useWeightedScrollSpeedRef.react", [
    "VirtualizationContainerContext",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useContext, useEffect } = s;
    const d = 10;
    const m = typeof WeakMap === "function" ? WeakMap : Map;
    const p = new m;
    const _ = new m;
    function useF(e = null) {
        const o = useContext(r("VirtualizationContainerContext"));
        const a = typeof e === "function" ? e() : o?.rootElementRef?.current;
        const i = a ?? window;
        const l = _.get(i) ?? {
            lastScrollY: 0,
            lastTime: Date.now(),
            speedHistory: [],
            weightedSpeed: 0
        };
        _.set(i, l);
        useEffect(function() {
            if (!p.has(i)) {
                const handleScroll = function() {
                    const { lastScrollY, lastTime, speedHistory } = l;
                    const o = (i === window ? window.scrollY : a?.scrollTop) ?? 0;
                    const s = Date.now();
                    const u = o - lastScrollY;
                    const c = s - lastTime;
                    if (c > 0 && u > 0 && c > 0) {
                        const speed = Math.abs(u / (c / 1000));
                        speedHistory.push({
                            speed
                        });
                        if (speedHistory.length > d) {
                            speedHistory.shift();
                        }
                    }
                    l.lastScrollY = o;
                    l.lastTime = s;
                    let p = 0;
                    let _ = 0;
                    speedHistory.forEach(({ speed }, t)=>{
                        const r = t + 1;
                        p += speed * r;
                        _ += r;
                    });
                    l.weightedSpeed = _ > 0 ? p / _ : 0;
                };
                i.addEventListener("scroll", handleScroll);
                p.set(i, {
                    handleScroll,
                    subscribers: 0
                });
            }
            const t = p.get(i);
            if (t) {
                t.subscribers++;
            }
            return function() {
                if (t && --t.subscribers === 0) {
                    i.removeEventListener("scroll", t.handleScroll);
                    p.delete(i);
                    _.delete(i);
                }
            };
        }, [
            i,
            l,
            a
        ]);
        return l;
    }
    l.default = useF;
}, 98);