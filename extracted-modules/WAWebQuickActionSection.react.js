__d("WAWebQuickActionSection.react", [
    "WAWebQuickActionGatingUtils",
    "WAWebQuickActionLogging",
    "WAWebTabOrder",
    "WDSActionTile.react",
    "react",
    "react-compiler-runtime",
    "useVisibility"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    function u(e) {
        const t = o("react-compiler-runtime").c(9);
        const { actions, context, surface } = e;
        if (!o("WAWebQuickActionGatingUtils").isQuickActionsEnabled(surface)) {
            return null;
        }
        let i;
        if (t[0] !== actions || t[1] !== context) {
            let l;
            if (t[3] !== context) {
                l = function(t) {
                    return t.isVisible == null || t.isVisible(context);
                };
                t[3] = context;
                t[4] = l;
            } else {
                l = t[4];
            }
            i = actions.filter(l);
            t[0] = actions;
            t[1] = context;
            t[2] = i;
        } else {
            i = t[2];
        }
        const actions_1 = i;
        if (actions_1.length === 0) {
            return null;
        }
        let d;
        if (t[5] !== context || t[6] !== surface || t[7] !== actions_1) {
            d = <C1Component actions={actions_1} context={context} surface={surface}/>;
            t[5] = context;
            t[6] = surface;
            t[7] = actions_1;
            t[8] = d;
        } else {
            d = t[8];
        }
        return d;
    }
    function C1Component(e) {
        const t = o("react-compiler-runtime").c(16);
        const { actions, context, surface } = e;
        let l;
        if (t[0] !== actions || t[1] !== surface) {
            l = {
                onVisible: function() {
                    o("WAWebQuickActionLogging").logQuickActionSurfaceView(surface, actions.length);
                    actions.forEach((e, slotPosition)=>{
                        o("WAWebQuickActionLogging").logQuickActionImpression({
                            actionId: e.id,
                            numActionsVisible: actions.length,
                            slotPosition,
                            surface
                        });
                    });
                }
            };
            t[0] = actions;
            t[1] = surface;
            t[2] = l;
        } else {
            l = t[2];
        }
        const u = r("useVisibility")(l);
        const c = u[0];
        let d;
        if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
            d = {
                className: "xrvj5dj x75r7lz xl56j7k x98l61r xs2akgl x1f0uite"
            };
            t[3] = d;
        } else {
            d = t[3];
        }
        let m;
        if (t[4] !== actions || t[5] !== context || t[6] !== surface) {
            let p;
            if (t[8] !== actions.length || t[9] !== context || t[10] !== surface) {
                p = function(t, l) {
                    const testid = `quick-action-${t.id}`;
                    const u = function() {
                        o("WAWebQuickActionLogging").logQuickActionTap(surface, t.id, l, actions.length);
                        t.onClick(context);
                    };
                    const Component = r("WDSActionTile.react");
                    return <Component key={t.id} Icon={t.Icon} label={t.label()} onPress={u} tabOrder={o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE} testid={testid}/>;
                };
                t[8] = actions.length;
                t[9] = context;
                t[10] = surface;
                t[11] = p;
            } else {
                p = t[11];
            }
            m = actions.map(p);
            t[4] = actions;
            t[5] = context;
            t[6] = surface;
            t[7] = m;
        } else {
            m = t[7];
        }
        let _;
        if (t[12] !== c || t[13] !== surface || t[14] !== m) {
            _ = <div {...babelHelpers.extends({
                ref: c
            }, d, {
                "data-testid": "quick-action-section",
                "data-surface": surface,
                children: m
            })}/>;
            t[12] = c;
            t[13] = surface;
            t[14] = m;
            t[15] = _;
        } else {
            _ = t[15];
        }
        return _;
    }
    l.default = u;
}, 98);