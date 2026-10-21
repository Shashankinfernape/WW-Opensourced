__d("useWAWebLogHarmfulFileDialogLifecycle", [
    "WAWebHarmfulFileWamLogger",
    "WAWebWamEnumHarmfulFileWarningClickthroughAction",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const { useEffect, useRef } = s;
    function d(e) {
        const tRef = useRef(false);
        useEffect(function() {
            o("WAWebHarmfulFileWamLogger").logHarmfulFileWarningInteraction(o("WAWebWamEnumHarmfulFileWarningClickthroughAction").HARMFUL_FILE_WARNING_CLICKTHROUGH_ACTION.DIALOG_OPEN, e);
            return function() {
                if (!tRef.current) {
                    o("WAWebHarmfulFileWamLogger").logHarmfulFileWarningInteraction(o("WAWebWamEnumHarmfulFileWarningClickthroughAction").HARMFUL_FILE_WARNING_CLICKTHROUGH_ACTION.DIALOG_DISMISSED, e);
                }
            };
        }, []);
        return function() {
            tRef.current = true;
        };
    }
    l.default = d;
}, 98);