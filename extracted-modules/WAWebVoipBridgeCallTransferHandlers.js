__d("WAWebVoipBridgeCallTransferHandlers", [
    "WAWebVoipCallTransferEntryPointStore"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = {
        handleSwitchEntryPointChanged: function({ entryPointData }) {
            o("WAWebVoipCallTransferEntryPointStore").WAWebVoipCallTransferEntryPointStore.applyChange(entryPointData);
        }
    };
    l.VoipBridgeCallTransferHandlers = e;
}, 98);