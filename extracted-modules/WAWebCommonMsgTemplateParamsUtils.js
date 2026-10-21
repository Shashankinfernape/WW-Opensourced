__d("WAWebCommonMsgTemplateParamsUtils", [
    "WAWebWid"
], function(t, n, r, o, a, i, l) {
    function e(templateParams) {
        if (templateParams.length === 2 && templateParams[0] instanceof r("WAWebWid") && templateParams[1] instanceof r("WAWebWid")) {
            return [
                templateParams[0],
                templateParams[1]
            ];
        }
        if (templateParams.length === 4 && templateParams[0] instanceof r("WAWebWid") && templateParams[1] instanceof r("WAWebWid") && templateParams[2] instanceof r("WAWebWid") && templateParams[3] instanceof r("WAWebWid")) {
            return [
                templateParams[0],
                templateParams[1],
                templateParams[2],
                templateParams[3]
            ];
        }
        return null;
    }
    function s({ templateParams, type }) {
        if (templateParams == null) {
            return null;
        }
        if (type === "pinned_message" || type === "payment_invite_account_set_up") {
            if (templateParams.length > 0 && templateParams[0] instanceof r("WAWebWid")) {
                return [
                    templateParams[0]
                ];
            }
            return null;
        }
        if (type === "payment_transaction_request_cancelled" || type === "payment_transaction_status_receiver_pending_setup" || type === "payment_action_request_declined") {
            if (templateParams.length >= 3 && templateParams[0] instanceof r("WAWebWid") && typeof templateParams[1] === "string" && typeof templateParams[2] === "string") {
                return [
                    templateParams[0],
                    templateParams[1],
                    templateParams[2]
                ];
            }
            return null;
        }
        if (type === "payment_action_request_expired") {
            if (templateParams.length >= 4 && templateParams[0] instanceof r("WAWebWid") && templateParams[1] instanceof r("WAWebWid") && typeof templateParams[2] === "string" && typeof templateParams[3] === "string") {
                return [
                    templateParams[0],
                    templateParams[1],
                    templateParams[2],
                    templateParams[3]
                ];
            }
            return null;
        }
        if (type === "chat_assignment") {
            if (templateParams.length > 0 && typeof templateParams[0] === "string") {
                return [
                    templateParams[0]
                ];
            }
            return null;
        }
        if (type === "change_number") {
            return e(templateParams);
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${type}`);
        })();
    }
    l.interpretMsgTemplateParams = s;
}, 98);