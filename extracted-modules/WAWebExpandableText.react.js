__d("WAWebExpandableText.react", [
    "fbt",
    "WAUnicodeUtils",
    "WAWebClassnames",
    "WAWebClickable.react",
    "WAWebExpandableTextContext",
    "react"
], function(t, n, r, o, a, i, l, s) {
    let e;
    const u = e || (e = o("react"));
    const c = e;
    const { memo, useContext, useImperativeHandle, useRef, useState } = c;
    const g = "read-more-button";
    const pageSize = 3072;
    const y = 0.1;
    function C({ children, ref, text, textLimit }) {
        const lRef = useRef(text);
        const c = useState(function() {
            if (b({
                pageSize: textLimit,
                text,
                textLimit
            })) {
                return textLimit;
            }
            return Infinity;
        });
        const d = c[0];
        const y = c[1];
        const C = useContext(r("WAWebExpandableTextContext"));
        const v = useState(false);
        const isExpanded = v[0];
        const R = v[1];
        useImperativeHandle(ref, function() {
            return {
                isExpanded
            };
        });
        if (lRef.current !== text) {
            lRef.current = text;
            y(b({
                pageSize: textLimit,
                text,
                textLimit
            }) ? textLimit : Infinity);
            R(false);
        }
        const L = function() {
            C();
            R(true);
            const e = d + pageSize;
            y(b({
                pageSize,
                text,
                textLimit: e
            }) ? e : Infinity);
        };
        const Component = o("WAWebClickable.react").Clickable;
        return <>{children({
            textLimit: d
        })}{d !== Infinity ? <> <Component className={o("WAWebClassnames").classnamesConvertMeToStylexPlease("xuxw1ft x1ypdohk x1rg5ohu xo1mcw5 x1xlr1w8 x1hl2dhg xt0b8zv xbvygy2 x17f7hit xp30eni xhmieyt", g)} dataTestId="caption-read-more-button" preventDefaultKeyboard onClick={L}>{s._("Read more")}</Component></> : null}</>;
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b({ pageSize, text, textLimit }) {
        return o("WAUnicodeUtils").numCodepoints(text) - textLimit > pageSize * y;
    }
    const v = memo(C);
    l.ExpandableText = v;
}, 226);