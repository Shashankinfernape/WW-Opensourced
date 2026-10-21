__d("WAWebPttMessageSeekBar", [
    "fbt",
    "WAWebClock",
    "WAWebMessageSmoothRangeInput",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(11);
        const n = `${o("WAWebClock").Clock.durationStr(e.currentTime)} / ${o("WAWebClock").Clock.durationStr(e.duration)}`;
        let r;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            r = s._("Audio playback");
            t[0] = r;
        } else {
            r = t[0];
        }
        const { currentTime, duration, onSeek, onCommit, disabled } = e;
        let p;
        if (t[1] !== e) {
            p = d(e);
            t[1] = e;
            t[2] = p;
        } else {
            p = t[2];
        }
        let _;
        if (t[3] !== e.currentTime || t[4] !== e.disabled || t[5] !== e.duration || t[6] !== e.onCommit || t[7] !== e.onSeek || t[8] !== p || t[9] !== n) {
            const Component = o("WAWebMessageSmoothRangeInput").SmoothRangeInput;
            _ = <Component ariaLabel={r} value={currentTime} valueText={n} min={0} max={duration} smallSkip={1} largeSkip={10} onChange={onSeek} onCommit={onCommit} disabled={disabled} theme={p}/>;
            t[3] = e.currentTime;
            t[4] = e.disabled;
            t[5] = e.duration;
            t[6] = e.onCommit;
            t[7] = e.onSeek;
            t[8] = p;
            t[9] = n;
            t[10] = _;
        } else {
            _ = t[10];
        }
        return _;
    }
    function d({ outgoing, played }) {
        if (outgoing) {
            if (played) {
                return o("WAWebMessageSmoothRangeInput").SmoothRangeInputTheme.AUDIO_OUTGOING_PLAYED;
            }
            return o("WAWebMessageSmoothRangeInput").SmoothRangeInputTheme.AUDIO_OUTGOING_UNPLAYED;
        }
        if (played) {
            return o("WAWebMessageSmoothRangeInput").SmoothRangeInputTheme.AUDIO_INCOMING_PLAYED;
        }
        return o("WAWebMessageSmoothRangeInput").SmoothRangeInputTheme.AUDIO_INCOMING_UNPLAYED;
    }
    l.default = c;
}, 226);