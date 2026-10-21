__d("WAWebPaymentDetailsStrings", [
    "fbt",
    "WAWebPaymentDetailsModels"
], function(t, n, r, o, a, i, l, s) {
    function e() {
        return s._("Payment details");
    }
    function u(e) {
        if (e === o("WAWebPaymentDetailsModels").PaymentDetailsStatus.NOT_CONFIRMED) {
            return s._("Not confirmed");
        }
        if (e === o("WAWebPaymentDetailsModels").PaymentDetailsStatus.MARKED_AS_PAID) {
            return s._("Marked as paid");
        }
        return (()=>{
            throw Error(`Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: ${e}`);
        })();
    }
    function c() {
        return s._("Requested by you");
    }
    function d(e) {
        return s._("Requested by {name}", [
            s._param("name", e)
        ]);
    }
    function m() {
        return s._("Payment in a third-party app can only be confirmed by the receiver.");
    }
    function p(e) {
        return s._("You marked this as paid on {date_time}.", [
            s._param("date_time", e)
        ]);
    }
    function _(e, t) {
        return s._("{name} marked this as paid on {date_time}.", [
            s._param("name", e),
            s._param("date_time", t)
        ]);
    }
    function f() {
        return s._("Mark as paid");
    }
    function g() {
        return s._("Mark this as paid?");
    }
    function h(e) {
        return s._("Make sure the money is in your bank account. {name} will see that you marked this as paid.", [
            s._param("name", e)
        ]);
    }
    function y() {
        return s._("Add receipt");
    }
    function C() {
        return s._("Add receipt (optional)");
    }
    function b(e) {
        return s._("Share proof with {name}. This doesn't confirm payment.", [
            s._param("name", e)
        ]);
    }
    function v(e) {
        return s._("Adding a receipt will notify {name} in chat.", [
            s._param("name", e)
        ]);
    }
    function S() {
        return s._("Take photo");
    }
    function R() {
        return s._("Choose photo");
    }
    function L() {
        return s._("Couldn't add the receipt. Try again.");
    }
    function E() {
        return s._("Couldn't mark this as paid. Try again.");
    }
    function k() {
        return s._("Couldn't remove the receipt. Try again.");
    }
    function I() {
        return s._("Share");
    }
    function T() {
        return s._("Couldn't share the payment details. Try again.");
    }
    function D() {
        return s._("Couldn't download the payment details. Try again.");
    }
    function x() {
        return s._("Payment receipt");
    }
    function $() {
        return s._("Couldn't load this receipt. Try again.");
    }
    function P(e) {
        return s._("Added by you on {date}", [
            s._param("date", e)
        ]);
    }
    function N(e, t) {
        return s._("Added by {name} on {date}", [
            s._param("name", e),
            s._param("date", t)
        ]);
    }
    function M() {
        return s._("Only you can confirm payment.");
    }
    function w(e) {
        return s._("Only {name} can confirm payment.", [
            s._param("name", e)
        ]);
    }
    function A() {
        return s._("Delete this receipt?");
    }
    function F() {
        return s._("This removes it from these payment details for both of you. You can add another one.");
    }
    function O() {
        return s._("Delete");
    }
    function B() {
        return s._("Delete receipt");
    }
    function W() {
        return s._("Sent from");
    }
    function q() {
        return s._("Paid to");
    }
    function U() {
        return s._("You");
    }
    function V() {
        return s._("Recipient details");
    }
    function H() {
        return s._("Recipient");
    }
    function G() {
        return s._("Pix key");
    }
    function z(e) {
        return s._("{name} added a receipt.", [
            s._param("name", e)
        ]);
    }
    function j() {
        return s._("A receipt was added.");
    }
    function K() {
        return s._("View details");
    }
    l.getPaymentDetailsTitle = e;
    l.getPaymentStatusLabel = u;
    l.getRequestedByYouHeader = c;
    l.getRequestedByHeader = d;
    l.getNotConfirmedExplainer = m;
    l.getMarkedAsPaidByYouExplainer = p;
    l.getMarkedAsPaidByExplainer = _;
    l.getMarkAsPaidLabel = f;
    l.getMarkAsPaidDialogTitle = g;
    l.getMarkAsPaidDialogBody = h;
    l.getAddReceiptLabel = y;
    l.getAddReceiptSectionTitle = C;
    l.getAddReceiptSectionBody = b;
    l.getAddReceiptSheetBody = v;
    l.getTakePhotoLabel = S;
    l.getChoosePhotoLabel = R;
    l.getAddReceiptFailedToast = L;
    l.getMarkAsPaidFailedToast = E;
    l.getDeleteReceiptFailedToast = k;
    l.getShareLabel = I;
    l.getSharePaymentDetailsFailedToast = T;
    l.getDownloadPaymentDetailsFailedToast = D;
    l.getReceiptTitle = x;
    l.getReceiptLoadFailedText = $;
    l.getReceiptAddedByYou = P;
    l.getReceiptAddedBy = N;
    l.getOnlyYouCanConfirm = M;
    l.getOnlyNameCanConfirm = w;
    l.getDeleteReceiptDialogTitle = A;
    l.getDeleteReceiptDialogBody = F;
    l.getDeleteReceiptLabel = O;
    l.getDeleteReceiptA11yLabel = B;
    l.getSentFromLabel = W;
    l.getPaidToLabel = q;
    l.getYouLabel = U;
    l.getRecipientDetailsTitle = V;
    l.getRecipientLabel = H;
    l.getPixKeyLabel = G;
    l.getReceiptAddedNotice = z;
    l.getPlainReceiptAddedNotice = j;
    l.getViewDetailsLabel = K;
}, 226);