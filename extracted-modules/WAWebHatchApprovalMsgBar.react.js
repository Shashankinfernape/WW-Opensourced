__d("WAWebHatchApprovalMsgBar.react", [
    "fbt",
    "WAWebFlex.react",
    "WAWebHatchApprovalBatches",
    "WAWebHatchApprovalReviewDialogLoadable",
    "WDSButton.react",
    "WDSDialogBridge",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebPendingHatchApprovals"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c() {
        const e = o("react-compiler-runtime").c(7);
        const t = r("useWAWebPendingHatchApprovals")();
        if (t.length === 0) {
            return null;
        }
        const n = d;
        let a;
        if (e[0] !== t) {
            a = m(o("WAWebHatchApprovalBatches").getApprovalsToReviewNow(t).length);
            e[0] = t;
            e[1] = a;
        } else {
            a = e[1];
        }
        let i;
        if (e[2] !== a) {
            const Component = r("WDSText.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            i = <Component_1 grow={1} paddingEnd={4}><Component type="Body2" colorName="contentDefault" testid="hatch_approval_compose_bar">{a}</Component></Component_1>;
            e[2] = a;
            e[3] = i;
        } else {
            i = e[3];
        }
        let l;
        if (e[4] === Symbol.for("react.memo_cache_sentinel")) {
            const Component = r("WDSButton.react");
            const Component_1 = o("WAWebFlex.react").FlexRow;
            l = <Component_1 shrink={0}><Component label={s._("Review")} onPress={n} testid="hatch_approval_review_btn" variant="filled"/></Component_1>;
            e[4] = l;
        } else {
            l = e[4];
        }
        let c;
        if (e[5] !== i) {
            const Component = o("WAWebFlex.react").FlexRow;
            c = <Component align="center" grow={1}>{i}{l}</Component>;
            e[5] = i;
            e[6] = c;
        } else {
            c = e[6];
        }
        return c;
    }
    function d() {
        const Component = o("WAWebHatchApprovalReviewDialogLoadable").WAWebHatchApprovalReviewDialogLoadable;
        o("WDSDialogBridge").openWDSDialog(<Component onClose={o("WDSDialogBridge").closeWDSDialog}/>);
    }
    function m(e) {
        return s._("_j{\"*\":\"{number} tasks need review\",\"_1\":\"1 task needs review\"}", [
            s._plural(e, "number")
        ]);
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    l.default = c;
}, 226);