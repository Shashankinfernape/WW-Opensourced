__d("WAWebBizBroadcastsHomeStrings", [
    "fbt",
    "WAWebBroadcastConsts",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebL10N",
    "WDSTextualLink.react",
    "react"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = e || (e = o("react"));
    function c() {
        return s._("Broadcasts");
    }
    c.displayName = `${c.name} [from ${i.id}]`;
    function d() {
        return s._("Audience");
    }
    d.displayName = `${d.name} [from ${i.id}]`;
    function m() {
        return s._("Status");
    }
    m.displayName = `${m.name} [from ${i.id}]`;
    function p() {
        return s._("Read rate");
    }
    p.displayName = `${p.name} [from ${i.id}]`;
    function _() {
        return s._("Reply rate");
    }
    _.displayName = `${_.name} [from ${i.id}]`;
    function f() {
        return s._("Audience name");
    }
    f.displayName = `${f.name} [from ${i.id}]`;
    function g() {
        return s._("Recipients");
    }
    g.displayName = `${g.name} [from ${i.id}]`;
    function h() {
        return s._("Last broadcast");
    }
    h.displayName = `${h.name} [from ${i.id}]`;
    function y(e) {
        return ((e)=>{
            switch(e){
                case "ACTIVE":
                    return s._("Active");
                case "COMPLETED":
                    return s._("Completed");
                case "IN_DRAFT":
                    return s._("In draft");
                case "IN_REVIEW":
                    return s._("In review");
                case "NOT_APPROVED":
                    return s._("Not approved");
                case "NOT_SENDING":
                    return s._("Not sending");
                case "SCHEDULED":
                    return s._("Scheduled");
                case "SENDING_LIMITED":
                    return s._("Sending limited");
                case "STOPPED":
                    return s._("Stopped");
                default:
                    return null;
            }
        })(e == null ? null : String(e));
    }
    function C() {
        return s._("In review");
    }
    C.displayName = `${C.name} [from ${i.id}]`;
    function b() {
        return s._("This can take a few minutes or up to 3 hours.");
    }
    b.displayName = `${b.name} [from ${i.id}]`;
    function v() {
        return s._("Scheduled to send");
    }
    v.displayName = `${v.name} [from ${i.id}]`;
    function S() {
        return s._("Scheduled");
    }
    S.displayName = `${S.name} [from ${i.id}]`;
    function R() {
        return s._("Completed");
    }
    R.displayName = `${R.name} [from ${i.id}]`;
    function L() {
        return s._("Delivering…");
    }
    L.displayName = `${L.name} [from ${i.id}]`;
    function E() {
        return s._("Broadcast couldn't send");
    }
    E.displayName = `${E.name} [from ${i.id}]`;
    function k() {
        return s._("Couldn't send");
    }
    k.displayName = `${k.name} [from ${i.id}]`;
    function I() {
        return s._("Something went wrong while sending your broadcast. Please retry sending it.");
    }
    I.displayName = `${I.name} [from ${i.id}]`;
    function T() {
        return s._("Draft");
    }
    T.displayName = `${T.name} [from ${i.id}]`;
    function D() {
        return s._("Couldn't load broadcasts. Try again later.");
    }
    D.displayName = `${D.name} [from ${i.id}]`;
    function x() {
        return s._("Couldn't load audiences. Try again later.");
    }
    x.displayName = `${x.name} [from ${i.id}]`;
    function $(e) {
        return s._("Sent {date}", [
            s._param("date", e)
        ]);
    }
    $.displayName = `${$.name} [from ${i.id}]`;
    function P(e) {
        return s._("Created on {date}", [
            s._param("date", e)
        ]);
    }
    P.displayName = `${P.name} [from ${i.id}]`;
    function N(e) {
        return s._("Sent {date}", [
            s._param("date", e)
        ]);
    }
    N.displayName = `${N.name} [from ${i.id}]`;
    function M(e) {
        return s._("For {date}", [
            s._param("date", e)
        ]);
    }
    M.displayName = `${M.name} [from ${i.id}]`;
    function w() {
        return s._("Business broadcasts");
    }
    w.displayName = `${w.name} [from ${i.id}]`;
    function A() {
        return s._("Create broadcast");
    }
    A.displayName = `${A.name} [from ${i.id}]`;
    function F() {
        return s._("Broadcasts");
    }
    F.displayName = `${F.name} [from ${i.id}]`;
    function O() {
        return s._("Audiences");
    }
    O.displayName = `${O.name} [from ${i.id}]`;
    function B() {
        return s._("Connect in more ways with business broadcasts");
    }
    B.displayName = `${B.name} [from ${i.id}]`;
    function W() {
        return s._("Add buttons so customers can respond instantly and track performance to optimise results.");
    }
    W.displayName = `${W.name} [from ${i.id}]`;
    function q() {
        return s._("Business broadcasts");
    }
    q.displayName = `${q.name} [from ${i.id}]`;
    function U(e) {
        return s._("Get more out of broadcasts with bigger reach, better insights and flexible spending. {learn more link}", [
            s._param("learn more link", e)
        ]);
    }
    U.displayName = `${U.name} [from ${i.id}]`;
    function V() {
        return s._("Learn more");
    }
    V.displayName = `${V.name} [from ${i.id}]`;
    function H() {
        return s._("Learn more about business broadcasts");
    }
    H.displayName = `${H.name} [from ${i.id}]`;
    function G() {
        return s._("Broadcast details");
    }
    G.displayName = `${G.name} [from ${i.id}]`;
    function z() {
        return s._("Broadcast preview");
    }
    z.displayName = `${z.name} [from ${i.id}]`;
    function j() {
        return s._("Rename broadcast");
    }
    j.displayName = `${j.name} [from ${i.id}]`;
    function K() {
        return s._("Rename audience");
    }
    K.displayName = `${K.name} [from ${i.id}]`;
    function Q() {
        return s._("Preview");
    }
    Q.displayName = `${Q.name} [from ${i.id}]`;
    function X() {
        return s._("Duplicate");
    }
    X.displayName = `${X.name} [from ${i.id}]`;
    function Y() {
        return s._("This broadcast couldn't load. Open the broadcast on your phone to view it.");
    }
    Y.displayName = `${Y.name} [from ${i.id}]`;
    function J() {
        return s._("Performance");
    }
    J.displayName = `${J.name} [from ${i.id}]`;
    function Z() {
        return s._("Performance insights");
    }
    Z.displayName = `${Z.name} [from ${i.id}]`;
    function ee() {
        return s._("Status");
    }
    ee.displayName = `${ee.name} [from ${i.id}]`;
    function te() {
        return s._("Delivered");
    }
    te.displayName = `${te.name} [from ${i.id}]`;
    function ne() {
        return s._("Sent");
    }
    ne.displayName = `${ne.name} [from ${i.id}]`;
    function re() {
        return s._("Custom reply clicks");
    }
    re.displayName = `${re.name} [from ${i.id}]`;
    function oe() {
        return s._("Website clicks");
    }
    oe.displayName = `${oe.name} [from ${i.id}]`;
    function ae() {
        return s._("Amount spent");
    }
    ae.displayName = `${ae.name} [from ${i.id}]`;
    function ie() {
        return s._("Maximum price");
    }
    ie.displayName = `${ie.name} [from ${i.id}]`;
    function le() {
        return s._("Budget");
    }
    le.displayName = `${le.name} [from ${i.id}]`;
    function se() {
        return s._("Read");
    }
    se.displayName = `${se.name} [from ${i.id}]`;
    function ue() {
        return s._("Reads");
    }
    ue.displayName = `${ue.name} [from ${i.id}]`;
    function ce() {
        return s._("Replies");
    }
    ce.displayName = `${ce.name} [from ${i.id}]`;
    function de() {
        return s._("Details");
    }
    de.displayName = `${de.name} [from ${i.id}]`;
    function me() {
        return s._("Delete broadcast");
    }
    me.displayName = `${me.name} [from ${i.id}]`;
    function pe() {
        return s._("Broadcast deleted");
    }
    pe.displayName = `${pe.name} [from ${i.id}]`;
    function _e() {
        return s._("Something went wrong. Try again.");
    }
    _e.displayName = `${_e.name} [from ${i.id}]`;
    function fe() {
        return s._("Delete broadcast?");
    }
    fe.displayName = `${fe.name} [from ${i.id}]`;
    function ge() {
        return s._("This broadcast message will be deleted only for you. Your contacts will still see the message you sent them. This can't be undone and you'll lose performance details for this broadcast.");
    }
    ge.displayName = `${ge.name} [from ${i.id}]`;
    function he() {
        return s._("Status unavailable");
    }
    he.displayName = `${he.name} [from ${i.id}]`;
    function ye() {
        return s._("Stop");
    }
    ye.displayName = `${ye.name} [from ${i.id}]`;
    function Ce() {
        return s._("Stop broadcast?");
    }
    Ce.displayName = `${Ce.name} [from ${i.id}]`;
    function be() {
        return s._("This broadcast will stop being sent.");
    }
    be.displayName = `${be.name} [from ${i.id}]`;
    function ve() {
        return s._("Stop broadcast");
    }
    ve.displayName = `${ve.name} [from ${i.id}]`;
    function Se() {
        return s._("Broadcast stopped");
    }
    Se.displayName = `${Se.name} [from ${i.id}]`;
    function Re() {
        return s._("Couldn't confirm this broadcast stopped. Check its status.");
    }
    Re.displayName = `${Re.name} [from ${i.id}]`;
    function Le() {
        return r("WAWebFbtCommon")("Cancel");
    }
    function Ee(e) {
        return s._("_j{\"*\":\"{percentage}\\u0025\"}", [
            s._param("percentage", e, [
                0
            ])
        ]);
    }
    Ee.displayName = `${Ee.name} [from ${i.id}]`;
    function ke(e) {
        return r("WAWebL10N").n(e / 100, undefined, {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
            style: "percent"
        });
    }
    function Ie() {
        return s._("Broadcast name updated");
    }
    Ie.displayName = `${Ie.name} [from ${i.id}]`;
    function Te() {
        return s._("Couldn't rename broadcast. Try again.");
    }
    Te.displayName = `${Te.name} [from ${i.id}]`;
    function De() {
        return s._("Audience name updated");
    }
    De.displayName = `${De.name} [from ${i.id}]`;
    function xe() {
        return s._("Couldn't rename audience. Try again.");
    }
    xe.displayName = `${xe.name} [from ${i.id}]`;
    function $e() {
        return s._("Audience info");
    }
    $e.displayName = `${$e.name} [from ${i.id}]`;
    function Pe() {
        return s._("Delete audience");
    }
    Pe.displayName = `${Pe.name} [from ${i.id}]`;
    function Ne() {
        return s._("Delete");
    }
    Ne.displayName = `${Ne.name} [from ${i.id}]`;
    function Me() {
        return s._("Menu");
    }
    Me.displayName = `${Me.name} [from ${i.id}]`;
    function we() {
        return s._("Account settings");
    }
    we.displayName = `${we.name} [from ${i.id}]`;
    function Ae() {
        return s._("Manage payments");
    }
    Ae.displayName = `${Ae.name} [from ${i.id}]`;
    function Fe() {
        return s._("Payments");
    }
    Fe.displayName = `${Fe.name} [from ${i.id}]`;
    function Oe() {
        return s._("Performance explained");
    }
    Oe.displayName = `${Oe.name} [from ${i.id}]`;
    function BeComponent() {
        const Component = r("WDSTextualLink.react");
        return s._("These metrics are {=m1}", [
            s._implicitParam("=m1", <Component href="https://www.facebook.com/business/help/metrics-labeling#estimated">{s._("in development")}</Component>)
        ]);
    }
    BeComponent.displayName = `${BeComponent.name} [from ${i.id}]`;
    function We() {
        return s._("Delivered");
    }
    We.displayName = `${We.name} [from ${i.id}]`;
    function qe() {
        return s._("The number of accounts that received this message. Some accounts may not have received it, for example if their device was out of service.");
    }
    qe.displayName = `${qe.name} [from ${i.id}]`;
    function Ue() {
        return s._("Read rate");
    }
    Ue.displayName = `${Ue.name} [from ${i.id}]`;
    function Ve() {
        return s._("The percentage of accounts that read this message. Read rate is the number of messages read divided by the number of messages delivered. Only includes accounts that have replied to your first message or have saved you as a contact. Doesn't include reads that happen when read receipts are off on either device.");
    }
    Ve.displayName = `${Ve.name} [from ${i.id}]`;
    function He() {
        return s._("Reads");
    }
    He.displayName = `${He.name} [from ${i.id}]`;
    function Ge() {
        return s._("The number of accounts that read this message. Only includes accounts that have replied to your first message or have saved you as a contact. Doesn't include reads that happen when read receipts are off on either device.");
    }
    Ge.displayName = `${Ge.name} [from ${i.id}]`;
    function ze() {
        return s._("Reply rate");
    }
    ze.displayName = `${ze.name} [from ${i.id}]`;
    function je() {
        return s._("The percentage of unique accounts that replied to this message. Reply rate is the number of replies divided by the number of accounts that received the message.");
    }
    je.displayName = `${je.name} [from ${i.id}]`;
    function Ke() {
        return s._("Replies");
    }
    Ke.displayName = `${Ke.name} [from ${i.id}]`;
    function Qe() {
        return s._("The number of unique accounts that replied to this message.");
    }
    Qe.displayName = `${Qe.name} [from ${i.id}]`;
    function Xe() {
        return s._("Unique clicks");
    }
    Xe.displayName = `${Xe.name} [from ${i.id}]`;
    function Ye() {
        return s._("The number of taps or clicks on the button to visit your website.");
    }
    Ye.displayName = `${Ye.name} [from ${i.id}]`;
    function Je() {
        return r("WAWebFbtCommon")("OK");
    }
    function Ze() {
        return s._("Insights update until broadcast delivery is complete.");
    }
    Ze.displayName = `${Ze.name} [from ${i.id}]`;
    function et(e) {
        return s._("Last synced {timestamp}.", [
            s._param("timestamp", e)
        ]);
    }
    et.displayName = `${et.name} [from ${i.id}]`;
    function tt() {
        return s._("Refresh");
    }
    tt.displayName = `${tt.name} [from ${i.id}]`;
    function nt() {
        return s._("Performance metrics updated");
    }
    nt.displayName = `${nt.name} [from ${i.id}]`;
    function rt() {
        return s._("Open WhatsApp on your phone to see latest insights");
    }
    rt.displayName = `${rt.name} [from ${i.id}]`;
    function ot(e, t) {
        return s._("_j{\"*\":{\"*\":\"{labelCount} lists linked \\u00b7 {recipientCount} recipients\",\"_1\":\"{labelCount} lists linked \\u00b7 1 recipient\"},\"_1\":{\"*\":\"1 list linked \\u00b7 {recipientCount} recipients\",\"_1\":\"1 list linked \\u00b7 1 recipient\"}}", [
            s._plural(e, "labelCount"),
            s._plural(t, "recipientCount")
        ]);
    }
    ot.displayName = `${ot.name} [from ${i.id}]`;
    function at() {
        return s._("Edit recipients");
    }
    at.displayName = `${at.name} [from ${i.id}]`;
    function it() {
        return s._("Use your phone to edit this audience.");
    }
    it.displayName = `${it.name} [from ${i.id}]`;
    function lt() {
        return s._("Some people you selected may not be listed because the message couldn't be delivered to them.");
    }
    lt.displayName = `${lt.name} [from ${i.id}]`;
    function st() {
        return s._("Loading contact list...");
    }
    st.displayName = `${st.name} [from ${i.id}]`;
    function ut() {
        return s._("Couldn't load contact list. Try again later.");
    }
    ut.displayName = `${ut.name} [from ${i.id}]`;
    function ct() {
        return s._("No delivery data available yet");
    }
    ct.displayName = `${ct.name} [from ${i.id}]`;
    function dt(e) {
        return s._("_j{\"*\":\"{count} recipients\",\"_1\":\"1 recipient\"}", [
            s._plural(e, "count")
        ]);
    }
    dt.displayName = `${dt.name} [from ${i.id}]`;
    function mt() {
        return s._("Advanced settings");
    }
    mt.displayName = `${mt.name} [from ${i.id}]`;
    function pt() {
        return s._("Advanced settings");
    }
    pt.displayName = `${pt.name} [from ${i.id}]`;
    function _t() {
        return s._("Disconnect business broadcasts");
    }
    _t.displayName = `${_t.name} [from ${i.id}]`;
    function ft() {
        return s._("Connect business broadcasts");
    }
    ft.displayName = `${ft.name} [from ${i.id}]`;
    function gt() {
        return s._("Disconnected");
    }
    gt.displayName = `${gt.name} [from ${i.id}]`;
    function HtComponent(e) {
        const Component = r("WDSTextualLink.react");
        return s._("Connect business broadcasts to send. {=m2}", [
            s._implicitParam("=m2", <Component onClick={e} testid="biz-broadcasts-connect-banner-action">{s._("Connect")}</Component>)
        ]);
    }
    HtComponent.displayName = `${HtComponent.name} [from ${i.id}]`;
    function yt() {
        return s._("Manage customer base");
    }
    yt.displayName = `${yt.name} [from ${i.id}]`;
    function Ct() {
        return s._("Manage your customer base in advanced settings");
    }
    Ct.displayName = `${Ct.name} [from ${i.id}]`;
    function bt() {
        return s._("Download subscribed recipients in advanced settings");
    }
    bt.displayName = `${bt.name} [from ${i.id}]`;
    function vt() {
        return s._("Remove recipients from data sharing in advanced settings");
    }
    vt.displayName = `${vt.name} [from ${i.id}]`;
    function St() {
        return s._("View");
    }
    St.displayName = `${St.name} [from ${i.id}]`;
    function Rt() {
        return s._("Customer base");
    }
    Rt.displayName = `${Rt.name} [from ${i.id}]`;
    function Lt() {
        return s._("Unsubscribe recipients");
    }
    Lt.displayName = `${Lt.name} [from ${i.id}]`;
    function Et() {
        return s._("Download subscribed recipients");
    }
    Et.displayName = `${Et.name} [from ${i.id}]`;
    function kt() {
        return s._("Message limits");
    }
    kt.displayName = `${kt.name} [from ${i.id}]`;
    function It(e) {
        return s._("_j{\"*\":\"{conversations} daily conversations\",\"_1\":\"1 daily conversation\"}", [
            s._plural(e, "conversations")
        ]);
    }
    It.displayName = `${It.name} [from ${i.id}]`;
    function Tt() {
        return s._("Unlimited daily conversations");
    }
    Tt.displayName = `${Tt.name} [from ${i.id}]`;
    function Dt() {
        return s._("Message limit");
    }
    Dt.displayName = `${Dt.name} [from ${i.id}]`;
    function xt() {
        return s._("Daily conversations");
    }
    xt.displayName = `${xt.name} [from ${i.id}]`;
    function $t(e, t) {
        return s._("_j{\"*\":\"{daily conversations sent} of {daily conversation limit} sent\"}", [
            s._param("daily conversation limit", t, [
                0
            ]),
            s._param("daily conversations sent", e)
        ]);
    }
    $t.displayName = `${$t.name} [from ${i.id}]`;
    function Pt(e) {
        return s._("{daily conversations sent} of unlimited sent", [
            s._param("daily conversations sent", e)
        ]);
    }
    Pt.displayName = `${Pt.name} [from ${i.id}]`;
    function Nt() {
        return s._("Message limits aren't available right now.");
    }
    Nt.displayName = `${Nt.name} [from ${i.id}]`;
    function Mt() {
        return s._("Increase message limit");
    }
    Mt.displayName = `${Mt.name} [from ${i.id}]`;
    function wt() {
        return s._("Complete these requirements to raise your daily limit.");
    }
    wt.displayName = `${wt.name} [from ${i.id}]`;
    function At() {
        return s._("Switch to primary phone");
    }
    At.displayName = `${At.name} [from ${i.id}]`;
    function FtComponent() {
        const Component = r("WDSTextualLink.react");
        return s._("Get verified on your primary phone. {=m2}", [
            s._implicitParam("=m2", <Component href={o("WAWebFaqUrl").getBusinessBroadcastsLearnMoreUrl()}>{s._("Learn about business broadcasts")}</Component>)
        ]);
    }
    FtComponent.displayName = `${FtComponent.name} [from ${i.id}]`;
    function Ot() {
        return s._("You may need to log back in after this change is complete.");
    }
    Ot.displayName = `${Ot.name} [from ${i.id}]`;
    function Bt() {
        return s._("You may need to log back in after setup is complete.");
    }
    Bt.displayName = `${Bt.name} [from ${i.id}]`;
    function Wt() {
        return s._("Business broadcasts need to be disconnected on your primary phone.");
    }
    Wt.displayName = `${Wt.name} [from ${i.id}]`;
    function qt() {
        return s._("Switch to your primary phone");
    }
    qt.displayName = `${qt.name} [from ${i.id}]`;
    function Ut() {
        return s._("Business broadcasts need to be connected on your primary phone.");
    }
    Ut.displayName = `${Ut.name} [from ${i.id}]`;
    function Vt() {
        return s._("Send high-quality messages");
    }
    Vt.displayName = `${Vt.name} [from ${i.id}]`;
    function Ht(e, t, n, a = false) {
        if (a) {
            let i;
            i = s._plural(n, "days");
            const Component = r("WDSTextualLink.react");
            return s._("_j{\"*\":\"{sent} of {target} sent in the last {days} days. {=m6}\",\"_1\":\"{sent} of {target} sent in the last day. {=m6}\"}", [
                i,
                s._param("sent", e),
                s._param("target", t),
                s._implicitParam("=m6", <Component href={o("WAWebBroadcastConsts").HIGH_QUALITY_MESSAGES_DOC_URL}>{s._("_j{\"*\":\"What are high quality messages?\"}", [
                    i
                ])}</Component>)
            ]);
        }
        return s._("_j{\"*\":\"{sent} of {target} sent in the last {days} days.\",\"_1\":\"{sent} of {target} sent in the last day.\"}", [
            s._plural(n, "days"),
            s._param("sent", e),
            s._param("target", t)
        ]);
    }
    Ht.displayName = `${Ht.name} [from ${i.id}]`;
    l.getBroadcastColumnHeader = c;
    l.getAudienceColumnHeader = d;
    l.getStatusColumnHeader = m;
    l.getReadRateColumnHeader = p;
    l.getReplyRateColumnHeader = _;
    l.getAudienceNameColumnHeader = f;
    l.getRecipientsColumnHeader = g;
    l.getLastBroadcastColumnHeader = h;
    l.getProDisplayStatusLabel = y;
    l.getProcessingStatusLabel = C;
    l.getProcessingStatusSublabel = b;
    l.getScheduledStatusLabel = v;
    l.getScheduledTableStatusLabel = S;
    l.getSentStatusLabel = R;
    l.getDeliveringStatusLabel = L;
    l.getFailedStatusLabel = E;
    l.getFailedTableStatusLabel = k;
    l.getFailedStatusSublabel = I;
    l.getDraftStatusLabel = T;
    l.getBroadcastProLoadFailedInlineMessage = D;
    l.getAudienceProLoadFailedInlineMessage = x;
    l.getSentDateText = $;
    l.getCreatedDateText = P;
    l.getCompletedStatusSublabel = N;
    l.getScheduledForDateSublabel = M;
    l.getBusinessBroadcastsTitle = w;
    l.getCreateBroadcastButtonLabel = A;
    l.getBroadcastsTabTitle = F;
    l.getAudiencesTabTitle = O;
    l.getEmptyStateTitle = B;
    l.getEmptyStateSubtitle = W;
    l.getProEmptyStateTitle = q;
    l.getProEmptyStateSubtitle = U;
    l.getEmptyStateLearnMoreLinkText = V;
    l.getEmptyStateLearnMoreLinkAriaLabel = H;
    l.getBroadcastDetailsTitle = G;
    l.getBroadcastPreviewTitle = z;
    l.getRenameBroadcastActionLabel = j;
    l.getRenameAudienceActionLabel = K;
    l.getPreviewActionLabel = Q;
    l.getDuplicateActionLabel = X;
    l.getBroadcastMessageUnavailableToast = Y;
    l.getPerformanceSectionTitle = J;
    l.getPerformanceInsightsSectionTitle = Z;
    l.getStatusSectionTitle = ee;
    l.getDeliveredLabel = te;
    l.getSentLabel = ne;
    l.getCustomReplyClicksLabel = re;
    l.getWebsiteClicksLabel = oe;
    l.getAmountSpentLabel = ae;
    l.getMaximumPriceLabel = ie;
    l.getBudgetLabel = le;
    l.getReadSublabel = se;
    l.getReadsLabel = ue;
    l.getRepliesSublabel = ce;
    l.getDetailsSectionTitle = de;
    l.getDeleteBroadcastLabel = me;
    l.getBroadcastDeletedToastMessage = pe;
    l.getBroadcastActionFailedToastMessage = _e;
    l.getDeleteBroadcastModalTitle = fe;
    l.getDeleteBroadcastModalBody = ge;
    l.getBroadcastStatusUnavailableLabel = he;
    l.getStopBroadcastButtonLabel = ye;
    l.getStopBroadcastModalTitle = Ce;
    l.getStopBroadcastModalBody = be;
    l.getStopBroadcastConfirmLabel = ve;
    l.getBroadcastStoppedToastMessage = Se;
    l.getBroadcastStopUnconfirmedToastMessage = Re;
    l.getCancelButtonLabel = Le;
    l.getPercentageLabel = Ee;
    l.getBBProRatePercentageLabel = ke;
    l.getBroadcastRenamedToastMessage = Ie;
    l.getBroadcastRenameFailedToastMessage = Te;
    l.getAudienceRenamedToastMessage = De;
    l.getAudienceRenameFailedToastMessage = xe;
    l.getAudienceInfoPanelTitle = $e;
    l.getDeleteAudienceLabel = Pe;
    l.getDeleteActionLabel = Ne;
    l.getMenuButtonTitle = Me;
    l.getAccountSettingsLabel = we;
    l.getManagePaymentsSectionLabel = Ae;
    l.getPaymentsLabel = Fe;
    l.getPerformanceExplainedTitle = Oe;
    l.getPerformanceExplainedDescription = BeComponent;
    l.getDeliveredMetricLabel = We;
    l.getDeliveredMetricDescription = qe;
    l.getReadRateMetricLabel = Ue;
    l.getReadRateMetricDescription = Ve;
    l.getReadsMetricLabel = He;
    l.getReadsMetricDescription = Ge;
    l.getReplyRateMetricLabel = ze;
    l.getReplyRateMetricDescription = je;
    l.getRepliesMetricLabel = Ke;
    l.getRepliesMetricDescription = Qe;
    l.getUniqueClicksMetricLabel = Xe;
    l.getUniqueClicksMetricDescription = Ye;
    l.getOkButtonLabel = Je;
    l.getInsightsUpdateExplainer = Ze;
    l.getLastUpdatedLabel = et;
    l.getRefreshInsightsLabel = tt;
    l.getPerformanceMetricsUpdatedToast = nt;
    l.getPrimaryOfflineInsightsToast = rt;
    l.getListsLinkedTitle = ot;
    l.getEditRecipientsLabel = at;
    l.getEditAudienceOnPhoneLabel = it;
    l.getRecipientsDisclaimerLabel = lt;
    l.getDeliveredToLoadingLabel = st;
    l.getDeliveredToErrorLabel = ut;
    l.getDeliveredToEmptyLabel = ct;
    l.getDeliveredToCountLabel = dt;
    l.getBroadcastSettingsLabel = mt;
    l.getBusinessBroadcastsSettingsTitle = pt;
    l.getAdvancedToolsLabel = _t;
    l.getConnectBusinessBroadcastsLabel = ft;
    l.getConnectBroadcastsBannerTitle = gt;
    l.getConnectBroadcastsBannerBody = HtComponent;
    l.getManageCustomerBaseSectionLabel = yt;
    l.getManageCustomerBaseReminderToast = Ct;
    l.getDownloadSubscribedRecipientsReminderToast = bt;
    l.getRemoveFromDataSharingReminderToast = vt;
    l.getReminderToastActionLabel = St;
    l.getCustomerBaseIdentityLabel = Rt;
    l.getUnsubscribeRecipientsLabel = Lt;
    l.getDownloadSubscribedRecipientsLabel = Et;
    l.getMessageLimitsLabel = kt;
    l.getMessageLimitsSublabel = It;
    l.getUnlimitedMessageLimitsSublabel = Tt;
    l.getMessageLimitPanelTitle = Dt;
    l.getDailyConversationsLabel = xt;
    l.getDailyConversationsUsageLabel = $t;
    l.getUnlimitedDailyConversationsUsageLabel = Pt;
    l.getMessageLimitsUnavailableLabel = Nt;
    l.getIncreaseMessageLimitLabel = Mt;
    l.getIncreaseMessageLimitSublabel = wt;
    l.getVerifyOnPhoneTitle = At;
    l.getVerifyOnPhoneSubtitle = FtComponent;
    l.getAdvancedToolsSettingsReloginNotice = Ot;
    l.getAdvancedToolsSetupReloginNotice = Bt;
    l.getAdvancedToolsTurnOffOnPhoneSubtitle = Wt;
    l.getConnectBroadcastsOnPhoneTitle = qt;
    l.getAdvancedToolsTurnOnOnPhoneSubtitle = Ut;
    l.getSendHighQualityMessagesLabel = Vt;
    l.getSendHighQualityMessagesProgressSublabel = Ht;
}, 226);