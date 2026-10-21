__d("WAWebPaymentStatusText", [
    "fbt",
    "WATimeUtils",
    "WAWeb-moment",
    "WAWebProtobufsWeb.pb"
], function(t, n, r, o, a, i, l, s) {
    const e = 60000;
    function u(e, t, n) {
        if (t != null) {
            return p(t, n);
        }
        return m(e, n);
    }
    function c(e, t) {
        return u(e, t, null);
    }
    function d(t) {
        if (t == null) {
            return s._("Pending");
        }
        const n = o("WATimeUtils").unixTime() * 1000;
        const a = t * 1000;
        if (a - n > e) {
            const i = r("WAWeb-moment")(n).to(r("WAWeb-moment")(a));
            return s._("Pending (expires {timeSpan})", [
                s._param("timeSpan", i)
            ]);
        } else if (a - n > 0) {
            return s._("Pending (expires in less than 1 minute)");
        }
        return s._("Pending (expiring)");
    }
    function m(e, t) {
        let n = null;
        let r = null;
        if (e != null) {
            switch(e){
                case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.PROCESSING:
                    n = s._("Processing");
                    r = "pending";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COMPLETE:
                    n = s._("Completed");
                    r = "success";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.SENT:
                    n = s._("Pending");
                    r = "pending";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.NEED_TO_ACCEPT:
                    n = d(t);
                    r = "pending";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COULD_NOT_COMPLETE:
                    n = s._("Failed");
                    r = "failed";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REFUNDED:
                    n = s._("Failed");
                    r = "failed";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.EXPIRED:
                    n = s._("Expired");
                    r = "failed";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REJECTED:
                    n = s._("Declined");
                    r = "failed";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.CANCELLED:
                    n = s._("Cancelled");
                    r = "failed";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.WAITING_FOR_PAYER:
                    n = d(t);
                    r = "pending";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.WAITING:
                    n = d(t);
                    r = "pending";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS:
                    n = null;
                    r = null;
                    break;
            }
        }
        return {
            str: n,
            themeClassName: r
        };
    }
    function p(e, t) {
        let n = null;
        let r = null;
        if (e != null) {
            switch(e){
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN:
                    n = null;
                    r = null;
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.PENDING_SETUP:
                    n = d(t);
                    r = "pending";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.PENDING_RECEIVER_SETUP:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_INIT:
                    n = s._("Pending");
                    r = "pending";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.INIT:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_PROCESSING:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_RECEIVER_PROCESSING:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_DA:
                    n = s._("Processing");
                    r = "pending";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.SUCCESS:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COMPLETED:
                    n = s._("Completed");
                    r = "success";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_RISK:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_DA_FINAL:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUNDED_TXN:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUND_FAILED:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUND_FAILED_PROCESSING:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUND_FAILED_DA:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.AUTH_CANCELED:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.AUTH_CANCEL_FAILED_PROCESSING:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.AUTH_CANCEL_FAILED:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_FAILED:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_FAILED_RISK:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REVERSAL_SUCCESS:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REVERSAL_PENDING:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUND_PENDING:
                    n = s._("Failed");
                    r = "failed";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.EXPIRED_TXN:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_EXPIRED:
                    n = s._("Expired");
                    r = "pending";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_SUCCESS:
                    n = d(t);
                    r = "pending";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_REJECTED:
                    n = s._("Declined");
                    r = "pending";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_CANCELED:
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_CANCELLING:
                    n = s._("Cancelled");
                    r = "pending";
                    break;
                case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.IN_REVIEW:
                    n = s._("In review");
                    r = "pending";
                    break;
            }
        }
        return {
            str: n,
            themeClassName: r
        };
    }
    l.getPaymentStatusText = u;
    l.getPaymentStatusTextForRecord = c;
}, 226);