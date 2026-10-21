__d("WAWebReachoutTimelockBridgeApi", [
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebModalManager",
    "WAWebReachoutTimelockUnrestrictedModalLoadable",
    "react"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = e || (e = o("react"));
    const u = {
        reachoutTimelockEnforcementLifted: function({ enforcementType, shouldPresentRestrictionsLiftedModal }) {
            if (shouldPresentRestrictionsLiftedModal) {
                o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebReachoutTimelockUnrestrictedModalLoadable").ReachoutTimelockUnrestrictedModalLoadable, {
                    enforcementType
                }));
            }
            o("WAWebCmd").Cmd.reachoutTimelockStateChange();
            o("WAWebContactCollection").ContactCollection.forEach((e)=>{
                e.set("canSendMsgWhileTimelocked", true);
            });
        },
        reachoutTimelockEnforcementSet: function() {
            o("WAWebCmd").Cmd.reachoutTimelockStateChange();
        }
    };
    l.ReachoutTimelockBridgeApi = u;
}, 98);