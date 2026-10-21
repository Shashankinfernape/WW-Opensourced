__d("WAWebIdleComponent.react", [
    "WAWebIdleTaskRunner",
    "WAWebWid",
    "react",
    "useLazyRef"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useRef, useState } = u;
    function p({ children, id, onComplex, waitIdle = false }) {
        const u = useState(function() {
            return o("WAWebIdleTaskRunner").UIBusyTasks.isBusy();
        });
        const p = u[0];
        const _ = u[1];
        const f = function() {
            _(false);
        };
        const g = r("useLazyRef")(function() {
            if (waitIdle) {
                return o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(f);
            }
            return null;
        });
        const hRef = useRef(null);
        useEffect(function() {
            return function() {
                if (waitIdle && g.current != null) {
                    o("WAWebIdleTaskRunner").UIBusyTasks.dequeue(g.current);
                }
            };
        }, []);
        useEffect(function() {
            const hRef_current = hRef.current;
            hRef.current = id;
            if (!r("WAWebWid").equals(hRef_current, id) || !waitIdle) {
                if (p && g.current != null) {
                    o("WAWebIdleTaskRunner").UIBusyTasks.dequeue(g.current);
                }
                const t = o("WAWebIdleTaskRunner").UIBusyTasks.isBusy();
                if (t && waitIdle) {
                    g.current = o("WAWebIdleTaskRunner").UIBusyTasks.enqueue(f);
                }
                _(t);
            }
        }, [
            id,
            g,
            p,
            waitIdle
        ]);
        if (p && waitIdle) {
            return <>{children}</>;
        }
        return onComplex();
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 98);