__d("WAWebScheduleMessageButton.react", [
    "fbt",
    "WAWebModalManager",
    "WAWebScheduleTimePickerLoadable",
    "WAWebTabOrder",
    "WAWebTooltip.react",
    "WDSIconIcSchedule.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "stylex"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    const c = u || (u = o("react"));
    const d = u;
    const { useCallback, useRef } = d;
    const _ = {
        container: {
            alignSelf: "xpvyfi4",
            $$css: true
        }
    };
    const openingDelay = 350;
    function GComponent(t) {
        const n = o("react-compiler-runtime").c(23);
        const { atLimit, buttonSize, disabled, isGroup, onOpenPicker, onScheduleSend, onSelectDateTime, overMediaLimit, viewOnce, xstyle } = t;
        const b = atLimit === undefined ? false : atLimit;
        const buttonSize_1 = buttonSize === undefined ? "medium" : buttonSize;
        const S = disabled === undefined ? false : disabled;
        const isGroup_1 = isGroup === undefined ? false : isGroup;
        const L = overMediaLimit === undefined ? false : overMediaLimit;
        const E = viewOnce === undefined ? false : viewOnce;
        const k = xstyle === undefined ? null : xstyle;
        const IRef = useRef(null);
        let T;
        if (n[0] !== isGroup_1 || n[1] !== onOpenPicker || n[2] !== onScheduleSend || n[3] !== onSelectDateTime) {
            T = function() {
                onOpenPicker();
                const Component = o("WAWebScheduleTimePickerLoadable").WAWebScheduleTimePickerLoadable;
                o("WAWebModalManager").ModalManager.open(<Component isGroup={isGroup_1} onCancel={o("WAWebModalManager").closeModalManager} onFirstDateTimeChange={onSelectDateTime} onSchedule={function(t) {
                    o("WAWebModalManager").closeModalManager();
                    onScheduleSend(t);
                }}/>);
            };
            n[0] = isGroup_1;
            n[1] = onOpenPicker;
            n[2] = onScheduleSend;
            n[3] = onSelectDateTime;
            n[4] = T;
        } else {
            T = n[4];
        }
        const D = T;
        let x;
        if (n[5] === Symbol.for("react.memo_cache_sentinel")) {
            x = s._("Schedule message");
            n[5] = x;
        } else {
            x = n[5];
        }
        const $ = x;
        let P;
        if (n[6] !== b || n[7] !== L || n[8] !== E) {
            const N = s._("You have reached the maximum number of messages you can schedule");
            const M = s._("You can schedule only one photo or video at a time");
            const w = s._("View once isn't available with send later");
            P = (()=>{
                const e = true;
                if (b) {
                    return N;
                }
                if (L) {
                    return M;
                }
                if (E) {
                    return w;
                }
                return null;
            })();
            n[6] = b;
            n[7] = L;
            n[8] = E;
            n[9] = P;
        } else {
            P = n[9];
        }
        const A = P;
        let F;
        if (n[10] !== k) {
            F = (e || (e = r("stylex"))).props(_.container, k);
            n[10] = k;
            n[11] = F;
        } else {
            F = n[11];
        }
        const O = S || b || L || E;
        const B = A != null ? "" : $;
        let W;
        if (n[12] !== buttonSize_1 || n[13] !== D || n[14] !== O || n[15] !== B) {
            const Component = r("WDSMenuBarItem.react");
            W = <Component buttonSize={buttonSize_1} buttonType="default" disabled={O} icon={r("WDSIconIcSchedule.react")} onClick={D} tabOrder={o("WAWebTabOrder").TAB_ORDER.SEND_BUTTON} testid="scheduled_messages_compose_button" title={B}/>;
            n[12] = buttonSize_1;
            n[13] = D;
            n[14] = O;
            n[15] = B;
            n[16] = W;
        } else {
            W = n[16];
        }
        let q;
        if (n[17] !== A) {
            const Component = o("WAWebTooltip.react").WAWebHoverTooltip;
            q = A != null && <Component targetRef={IRef} alignment={o("WAWebTooltip.react").PopoverAlignment.Center} position={o("WAWebTooltip.react").PopoverPosition.Top} openingDelay={openingDelay} testid="scheduled_messages_limit_tooltip">{A}</Component>;
            n[17] = A;
            n[18] = q;
        } else {
            q = n[18];
        }
        let U;
        if (n[19] !== F || n[20] !== W || n[21] !== q) {
            U = <div {...babelHelpers.extends({
                ref: IRef
            }, F, {
                children: [
                    W,
                    q
                ]
            })}/>;
            n[19] = F;
            n[20] = W;
            n[21] = q;
            n[22] = U;
        } else {
            U = n[22];
        }
        return U;
    }
    l.default = GComponent;
}, 226);