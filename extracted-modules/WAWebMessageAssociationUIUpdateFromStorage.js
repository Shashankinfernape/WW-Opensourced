__d("WAWebMessageAssociationUIUpdateFromStorage", [
    "WAWebBackendApi",
    "WAWebHandleMsgTypes.flow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        e.forEach((e)=>{
            o("WAWebBackendApi").frontendFireAndForget("updateMessageUI", {
                chatId: e.id.remote,
                msg: e,
                messageOverwriteOption: o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE,
                preserveOrder: true
            });
        });
    }
    l.updateAssociatedMsgsUIFromStorage = e;
}, 98);