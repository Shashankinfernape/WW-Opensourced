__d("WAWebPttMessageWaveform.react", [
    "WAWebChatThemeModeContext",
    "WAWebPttComposerWaveform.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useContext, useRef } = u;
    function p(e) {
        const t = o("react-compiler-runtime").c(20);
        const { currentTime, disabled, duration, onSeek, onSeekEnd, outgoing, played, skipThumb, waveform } = e;
        const y = useContext(r("WAWebChatThemeModeContext"));
        const y_isThemed = y.isThemed;
        const bRef = useRef(null);
        let v;
        if (t[0] !== currentTime) {
            v = function() {
                return currentTime ?? 0;
            };
            t[0] = currentTime;
            t[1] = v;
        } else {
            v = t[1];
        }
        const getCurrentTime = v;
        let R;
        if (t[2] !== waveform) {
            R = function() {
                return Array.from(waveform).map(_);
            };
            t[2] = waveform;
            t[3] = R;
        } else {
            R = t[3];
        }
        const getSamples = R;
        let E;
        if (t[4] !== duration) {
            E = function() {
                return duration;
            };
            t[4] = duration;
            t[5] = E;
        } else {
            E = t[5];
        }
        const getDuration = E;
        let I;
        if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
            I = {
                className: "x78zum5 xxk0z11"
            };
            t[6] = I;
        } else {
            I = t[6];
        }
        let location;
        if (t[7] !== outgoing || t[8] !== played) {
            location = f(outgoing, played);
            t[7] = outgoing;
            t[8] = played;
            t[9] = location;
        } else {
            location = t[9];
        }
        const colorSourceRef = y_isThemed ? bRef : undefined;
        let x;
        if (t[10] !== disabled || t[11] !== getDuration || t[12] !== getCurrentTime || t[13] !== getSamples || t[14] !== onSeek || t[15] !== onSeekEnd || t[16] !== skipThumb || t[17] !== location || t[18] !== colorSourceRef) {
            const Component = o("WAWebPttComposerWaveform.react").Waveform;
            x = <div {...babelHelpers.extends({
                ref: bRef
            }, I, {
                children: <Component location={location} sampleRate={6} getSamples={getSamples} getCurrentTime={getCurrentTime} getDuration={getDuration} live={false} mode={o("WAWebPttComposerWaveform.react").WaveformMode.PREVIEW} onSeek={onSeek} onSeekEnd={onSeekEnd} disabled={disabled} skipThumb={skipThumb} colorSourceRef={colorSourceRef}/>
            })}/>;
            t[10] = disabled;
            t[11] = getDuration;
            t[12] = getCurrentTime;
            t[13] = getSamples;
            t[14] = onSeek;
            t[15] = onSeekEnd;
            t[16] = skipThumb;
            t[17] = location;
            t[18] = colorSourceRef;
            t[19] = x;
        } else {
            x = t[19];
        }
        return x;
    }
    function _(e) {
        return e / 100;
    }
    function f(outgoing, played) {
        switch(outgoing){
            case true:
                if (played) {
                    return o("WAWebPttComposerWaveform.react").WaveformLocation.OUTGOING_PLAYED_MESSAGE;
                }
                return o("WAWebPttComposerWaveform.react").WaveformLocation.OUTGOING_UNPLAYED_MESSAGE;
            case false:
                if (played) {
                    return o("WAWebPttComposerWaveform.react").WaveformLocation.INCOMING_PLAYED_MESSAGE;
                }
                return o("WAWebPttComposerWaveform.react").WaveformLocation.INCOMING_UNPLAYED_MESSAGE;
        }
    }
    l.default = p;
}, 98);