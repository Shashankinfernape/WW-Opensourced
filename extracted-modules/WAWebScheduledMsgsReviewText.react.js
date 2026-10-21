__d("WAWebScheduledMsgsReviewText.react", [
    "fbt",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c(e) {
        const t = o("react-compiler-runtime").c(5);
        const { count, onReview } = e;
        let i;
        if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
            i = {
                className: "x78zum5 xdt5ytf x1b73lln x46w9ns x1380le5"
            };
            t[0] = i;
        } else {
            i = t[0];
        }
        let l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSText.react");
            l = <Component type="Body2Emphasized" colorName="contentDefault">{s._("Review scheduled messages")}</Component>;
            t[1] = l;
        } else {
            l = t[1];
        }
        let c;
        if (t[2] !== count || t[3] !== onReview) {
            let d;
            const Component = r("WDSTextualLink.react");
            const Component_1 = r("WDSText.react");
            c = <div {...babelHelpers.extends({
                "data-testid": "scheduled_msgs_review"
            }, i, {
                children: [
                    l,
                    <Component_1 type="Body3" colorName="contentDeemphasized">{(d = s._plural(count, "number"), s._("_j{\"*\":\"You have {=m2} that will still be sent even if you delete this chat.\"}", [
                        d,
                        s._implicitParam("=m2", <Component onClick={onReview} testid="scheduled_msgs_review_link">{s._("_j{\"*\":\"{number} scheduled messages\",\"_1\":\"1 scheduled message\"}", [
                            d
                        ])}</Component>)
                    ]))}</Component_1>
                ]
            })}/>;
            t[2] = count;
            t[3] = onReview;
            t[4] = c;
        } else {
            c = t[4];
        }
        return c;
    }
    l.default = c;
}, 226);