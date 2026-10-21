__d("WAWebMuteMenuItem.react", [
    "fbt",
    "WAWebChatGetters",
    "WAWebClock",
    "WAWebMuteExpirations",
    "WAWebSettingsGetters",
    "WDSIconIcNotifications.react",
    "WDSIconIcNotificationsOff.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebSettingsValues"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = function() {};
    function D1Component(e) {
        const t = o("react-compiler-runtime").c(4);
        const e_onMuteWithDuration = e.onMuteWithDuration;
        let a;
        if (t[0] !== e_onMuteWithDuration) {
            a = o("WAWebMuteExpirations").ALL_MUTE_DURATIONS.map(({ duration, getLabel, radioId })=>{
                const Component = r("WDSMenuItem.react");
                return <Component key={radioId} title={getLabel()} onPress={function() {
                    return e_onMuteWithDuration(duration);
                }} testid={`mi-mute-${radioId}`}/>;
            });
            t[0] = e_onMuteWithDuration;
            t[1] = a;
        } else {
            a = t[1];
        }
        let i;
        if (t[2] !== a) {
            const Component = r("WDSMenu.react");
            i = <Component>{a}</Component>;
            t[2] = a;
            t[3] = i;
        } else {
            i = t[3];
        }
        return i;
    }
    function MComponent(e) {
        const t = o("react-compiler-runtime").c(22);
        const { disabled, isMuted, onMuteWithDuration } = e;
        let l;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            l = [
                o("WAWebChatGetters").getArchive,
                o("WAWebChatGetters").getMuteExpiration
            ];
            t[0] = l;
        } else {
            l = t[0];
        }
        const m = o("useWAWebChatValues").useChatValues(e.chat.id, l);
        const p = m[0];
        const _ = m[1];
        let f;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            f = [
                o("WAWebSettingsGetters").getShowArchiveV2
            ];
            t[1] = f;
        } else {
            f = t[1];
        }
        const g = o("useWAWebSettingsValues").useSettingsValues(f);
        const h = g[0];
        let y;
        if (t[2] !== isMuted || t[3] !== e.onMute) {
            y = e.onMute.bind(null, !isMuted);
            t[2] = isMuted;
            t[3] = e.onMute;
            t[4] = y;
        } else {
            y = t[4];
        }
        const C = y;
        let b;
        let v;
        if (p && h) {
            b = c;
            let S;
            if (t[5] === Symbol.for("react.memo_cache_sentinel")) {
                S = s._("Unmute notifications");
                t[5] = S;
            } else {
                S = t[5];
            }
            v = S;
        } else {
            let R;
            if (t[6] !== isMuted) {
                R = isMuted ? s._("Unmute notifications") : s._("Mute notifications");
                t[6] = isMuted;
                t[7] = R;
            } else {
                R = t[7];
            }
            v = R;
            b = C;
        }
        let L;
        if (t[8] !== isMuted || t[9] !== onMuteWithDuration) {
            L = !isMuted && onMuteWithDuration != null ? <D1Component onMuteWithDuration={onMuteWithDuration}/> : null;
            t[8] = isMuted;
            t[9] = onMuteWithDuration;
            t[10] = L;
        } else {
            L = t[10];
        }
        const E = L;
        const k = E != null;
        let I;
        if (t[11] !== isMuted || t[12] !== _) {
            I = isMuted && _ ? o("WAWebClock").Clock.mutedUntilStr(_) : undefined;
            t[11] = isMuted;
            t[12] = _;
            t[13] = I;
        } else {
            I = t[13];
        }
        const subtitle = I;
        const D = r(isMuted ? "WDSIconIcNotifications.react" : "WDSIconIcNotificationsOff.react");
        const x = k ? c : b;
        let $;
        if (t[14] !== disabled || t[15] !== subtitle || t[16] !== k || t[17] !== E || t[18] !== D || t[19] !== x || t[20] !== v) {
            const Component = r("WDSMenuItem.react");
            $ = <Component Icon={D} title={v} subtitle={subtitle} onPress={x} testid="mi-mute" disabled={disabled} hasSubmenu={k} submenuContent={E}/>;
            t[14] = disabled;
            t[15] = subtitle;
            t[16] = k;
            t[17] = E;
            t[18] = D;
            t[19] = x;
            t[20] = v;
            t[21] = $;
        } else {
            $ = t[21];
        }
        return $;
    }
    l.default = MComponent;
}, 226);