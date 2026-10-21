__d("WAWebPollsDetailsFlow", [
    "$InternalEnum",
    "WAWebFrontendMsgGetters",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebMsgCollection",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsDetailsDrawer",
    "WAWebPollsViewAllVotesDrawer",
    "WAWebWamEnumPollActionType",
    "nullthrows",
    "react",
    "useWAWebFlow",
    "useWAWebListener"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useEffect, useState } = u;
    const m = n("$InternalEnum").Mirrored([
        "Details",
        "ViewAll",
        "ContactInfo"
    ]);
    function p({ associatedMessages, msg }) {
        const a = o("useWAWebFlow").useFlow(m.Details, {
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight
        });
        const I = a[0];
        const l = a[1];
        const u = useState(null);
        const p = u[0];
        const _ = u[1];
        const f = useState(null);
        const g = f[0];
        const h = f[1];
        const y = msg.unsafe();
        const C = y.id;
        const b = o("WAWebFrontendMsgGetters").getChat(y);
        const onOpenContactInfo = function(t) {
            h(t);
            l.push(m.ContactInfo);
        };
        useEffect(function() {
            o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric(babelHelpers.extends({
                action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.VIEW_RESULTS_MODAL,
                chat: b
            }, o("WAWebPollsActionsMetricUtils").getPollMetricFieldsFromCreationMsg(msg)));
        }, []);
        o("useWAWebListener").useListener(y, "revoked", function() {
            l.end();
        });
        o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, "remove", function(e) {
            if (e.id.equals(C)) {
                l.end();
            }
        });
        if (l.step == null) {
            return null;
        }
        let S;
        const Component = o("WAWebPollsDetailsDrawer").DetailsDrawer;
        const Component_1 = o("WAWebPollsViewAllVotesDrawer").ViewAllVotesDrawer;
        const Component_2 = o("WAWebInfoFlowLoadable").InfoFlowLoadable;
        switch(l.step){
            case m.Details:
                S = <Component msgKey={C} associatedMessages={associatedMessages} onClose={function() {
                    l.pop();
                }} onViewAllVotes={function(t) {
                    _(t);
                    l.push(m.ViewAll);
                }} onOpenContactInfo={onOpenContactInfo}/>;
                break;
            case m.ViewAll:
                S = <Component_1 msgKey={C} associatedMessages={associatedMessages} optionLocalId={r("nullthrows")(p)} onBack={function() {
                    l.pop();
                }} onOpenContactInfo={onOpenContactInfo}/>;
                break;
            case m.ContactInfo:
                S = <Component_2 chat={r("nullthrows")(g)} initialStep={o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo} onBack={l.pop} onEnd={function() {
                    return l.pop();
                }}/>;
                break;
        }
        return <I flow={l}>{S}</I>;
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    l.default = p;
}, 98);