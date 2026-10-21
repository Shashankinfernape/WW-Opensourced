__d("WAWebAddMsgToNoteAction", [
    "fbt",
    "invariant",
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebCmd",
    "WAWebFrontendMsgGetters",
    "WAWebMobilePlatforms",
    "WAWebNoteAction",
    "WAWebNotesLogEvents",
    "WAWebNotesUtils",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react"
], function(t, n, r, o, a, i, l, s, u) {
    "use strict";
    let e;
    let c;
    let d;
    let m;
    let p;
    let _;
    const f = _ || (_ = o("react"));
    const g = {
        type: "error-other",
        loggingInfo: {
            action_status: "ERROR"
        }
    };
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            const t = new (o("WAWebActionToast.react")).ActionType(s._("Adding text to note."));
            const r = C(e).then((t)=>{
                const r = o("WAWebFrontendMsgGetters").getChat(e);
                const r_contact = r.contact;
                if (t.type === "success") {
                    o("WAWebNotesLogEvents").logAddMsgToNoteMenuItemClicked(r_contact, t.loggingInfo);
                    return new (o("WAWebActionToast.react")).ActionType(s._("Added text to note."), {
                        actionText: s._("View"),
                        actionHandler: function() {
                            return new (p || (p = n("Promise")))(function() {
                                o("WAWebNotesLogEvents").logViewInAddMsgToNoteToastClicked(r_contact);
                                o("WAWebCmd").Cmd.openProfile(r);
                            });
                        }
                    });
                }
                if (t.type === "error-too-long") {
                    o("WAWebNotesLogEvents").logAddMsgToNoteMenuItemClicked(r_contact, t.loggingInfo);
                    return new (o("WAWebActionToast.react")).ActionType(s._("Can't add text to note: character limit exceeded."));
                }
                o("WAWebNotesLogEvents").logAddMsgToNoteMenuItemClicked(r_contact, t.loggingInfo);
                return new (o("WAWebActionToast.react")).ActionType(s._("Couldn't add text to note"));
            });
            o("WAWebToastManager").ToastManager.open(f.jsx(o("WAWebActionToast.react").ActionToast, {
                initialAction: t,
                pendingAction: r
            }));
        });
        return y.apply(this, arguments);
    }
    function C(e) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!o("WAWebMobilePlatforms").isSMB()) {
                u(0, 78461);
            }
            const a = o("WAWebFrontendMsgGetters").getChat(t);
            if (a == null) {
                o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                    "addMsgToNoteAction: msg has null chat"
                ])));
                return g;
            }
            const chatJid = o("WAJids").validateChatJid(a.id?.toJid() ?? "");
            if (chatJid == null) {
                o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                    "addMsgToNoteAction: invalid chatJid"
                ])));
                return g;
            }
            const l = o("WAWebFrontendMsgGetters").getText(t);
            if (l == null) {
                o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose([
                    "addMsgToNoteAction: msg is empty"
                ])));
                return g;
            }
            try {
                const p = yield o("WAWebNoteAction").retrieveOnlyNoteForChatJid(chatJid);
                const _ = p?.content ?? "";
                const f = p == null || _.trim() === "" ? l : `${_}

${l}`;
                if (f.length > o("WAWebNotesUtils").MAX_NOTE_LENGTH) {
                    return {
                        type: "error-too-long",
                        loggingInfo: {
                            action_status: "ERROR",
                            content_existed: _ !== "",
                            previous_length: _.length
                        }
                    };
                }
                const h = p == null ? {
                    actionType: "add",
                    noteType: "unstructured",
                    chatJid,
                    content: f
                } : {
                    actionType: "edit",
                    id: p.id,
                    noteType: p.type,
                    chatJid,
                    content: f,
                    createdAt: p.createdAt
                };
                yield o("WAWebNoteAction").addOrEditNoteAction(h);
                return {
                    type: "success",
                    loggingInfo: {
                        action_status: "SUCCESS",
                        content_existed: _ !== "",
                        previous_length: _.length,
                        has_content: true,
                        length: f.length
                    }
                };
            } catch (error) {
                o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose([
                    "addMsgToNoteAction: failed to add msg to note: ",
                    ""
                ])), error);
                return g;
            }
        });
        return b.apply(this, arguments);
    }
    l.default = h;
}, 226);