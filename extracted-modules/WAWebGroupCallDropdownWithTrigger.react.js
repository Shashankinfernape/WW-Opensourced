__d("WAWebGroupCallDropdownWithTrigger.react", [
    "WAWebDropdownV2.react",
    "WAWebGroupCallParticipantSelector.react",
    "WAWebGroupCallPickerJourney",
    "WAWebPopoverContext.react",
    "react"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useRef, useState } = u;
    const p = {
        callDropdownShadow: {
            boxShadow: "xvktan5",
            $$css: true
        }
    };
    const _ = 488;
    const f = 20;
    function g({ callFromUi, chat, initialSubtext, isVideo, logger, onDropdownClose, onDropdownOpen, preselectedWids, trigger }) {
        const CRef = useRef(null);
        const controllerRef = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef();
        const vRef = useRef(false);
        const S = useState(_);
        const maxHeight = S[0];
        const L = S[1];
        const onCallStart = function(t) {
            vRef.current = true;
            controllerRef.current?.hidePopover();
        };
        const k = useCallback(function(e) {
            CRef.current = e;
        }, []);
        const Component = r("WAWebGroupCallParticipantSelector.react");
        const Component_1 = o("WAWebDropdownV2.react").DropdownV2Menu;
        return <>{trigger(k)}<Component_1 xstyle={p.callDropdownShadow} controllerRef={controllerRef} position={o("WAWebDropdownV2.react").PopoverPosition.Bottom} alignment={o("WAWebDropdownV2.react").PopoverAlignment.Start} target={CRef} maxHeight={maxHeight} onOpen={function() {
            vRef.current = false;
            L(h(CRef.current));
            onDropdownOpen?.();
        }} onSelect={function() {
            vRef.current = true;
        }} onClose={function() {
            if (!vRef.current) {
                o("WAWebGroupCallPickerJourney").logGroupCallPickerDismiss(logger, "chat");
            }
            onDropdownClose?.();
        }}><Component key={chat.id.toString()} callFromUi={callFromUi} chat={chat} hideActions initialSubtext={initialSubtext} isCallingDisabled={false} isVideo={isVideo} logger={logger} onActionTaken={function() {
            vRef.current = true;
        }} onCallStart={onCallStart} origin="chat" preselectedWids={preselectedWids}/></Component_1></>;
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    function h(e) {
        if (e == null) {
            return _;
        }
        const t = e.getBoundingClientRect();
        const { bottom, top } = t;
        const o = Math.max(top, window.innerHeight - bottom) - f;
        return Math.max(120, Math.min(_, o));
    }
    l.default = g;
}, 98);