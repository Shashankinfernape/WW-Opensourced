__d("WAWebNoteAction", [
    "invariant",
    "WALogger",
    "WATimeUtils",
    "WAWebDBNoteDatabaseApi",
    "WAWebGetOnlyNoteByChatJidJob",
    "WAWebMobilePlatforms",
    "WAWebNoteCollection",
    "WAWebNoteModel",
    "WAWebNoteSync",
    "WAWebNotesIdUtils",
    "WAWebSchemaNote",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l, s) {
    let e;
    function u(e) {
        return c.apply(this, arguments);
    }
    function c() {
        c = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebNoteCollection").NoteCollection.hasCachedQueryForChatJid(e)) {
                const t = yield o("WAWebGetOnlyNoteByChatJidJob").getOnlyNoteByChatJidJob({
                    chatJid: e
                });
                o("WAWebNoteCollection").NoteCollection.updateCollectionFromDB(e, t);
            }
            return o("WAWebNoteCollection").NoteCollection.maybeGetNoteByChatJid(e);
        });
        return c.apply(this, arguments);
    }
    function d(e) {
        return m.apply(this, arguments);
    }
    function m() {
        m = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatJid, content, type }) {
            yield f({
                actionType: "add",
                noteType: type,
                chatJid,
                content
            });
        });
        return m.apply(this, arguments);
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ chatJid, content, createdAt, id, type }) {
            yield f({
                actionType: "edit",
                id,
                noteType: type,
                chatJid,
                content,
                createdAt
            });
        });
        return _.apply(this, arguments);
    }
    function f(e) {
        return g.apply(this, arguments);
    }
    function g() {
        g = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!o("WAWebMobilePlatforms").isSMB()) {
                s(0, 79042);
            }
            const modifiedAt = o("WATimeUtils").unixTime();
            let l = t.id;
            if (l == null) {
                l = yield o("WAWebNotesIdUtils").generateNoteId(t.chatJid);
            }
            const u = {
                id: l,
                type: t.noteType,
                chatJid: t.chatJid,
                content: t.content,
                createdAt: t.createdAt ?? modifiedAt,
                modifiedAt
            };
            const c = yield r("WAWebNoteSync").getNoteMutation(u);
            o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Notes] addOrEditNoteAction: id ",
                " mutation generated"
            ])), l);
            yield o("WAWebSyncdCoreApi").lockForSync([
                "note"
            ], [
                c
            ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                yield o("WAWebDBNoteDatabaseApi").addOrEditNote(u);
            }));
            o("WAWebNoteCollection").NoteCollection.add(babelHelpers.extends({}, u), {
                merge: true
            });
        });
        return g.apply(this, arguments);
    }
    function h(e) {
        return y.apply(this, arguments);
    }
    function y() {
        y = n("asyncToGeneratorRuntime").asyncToGenerator(function*({ canonicalChatJid, chatJid, content, type }) {
            if (!o("WAWebMobilePlatforms").isSMB()) {
                s(0, 79042);
            }
            const u = o("WATimeUtils").unixTime();
            const c = {
                id: yield o("WAWebNotesIdUtils").generateNoteId(chatJid),
                type,
                chatJid,
                content,
                createdAt: u,
                modifiedAt: u
            };
            const d = yield r("WAWebNoteSync").getNoteMutation(c);
            const m = r("err")("Note already exists");
            try {
                yield o("WAWebSyncdCoreApi").lockForSync([
                    "note"
                ], [
                    d
                ], n("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                    if ((yield o("WAWebDBNoteDatabaseApi").getNotesByChatJid(chatJid)).length > 0 || canonicalChatJid != null && canonicalChatJid !== chatJid && (yield o("WAWebDBNoteDatabaseApi").getNotesByChatJid(canonicalChatJid)).length > 0) {
                        throw m;
                    }
                    yield o("WAWebDBNoteDatabaseApi").addOrEditNote(c);
                }));
            } catch (error) {
                if (error === m) {
                    return false;
                }
                throw error;
            }
            o("WAWebNoteCollection").NoteCollection.add(babelHelpers.extends({}, c), {
                merge: true
            });
            return true;
        });
        return y.apply(this, arguments);
    }
    function C(e, t) {
        return b.apply(this, arguments);
    }
    function b() {
        b = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e, t) {
            const n = yield o("WAWebDBNoteDatabaseApi").getNotesByChatJid(t);
            if (n.length > 0) {
                yield o("WAWebSchemaNote").getNoteTable().bulkRemove(n.map((e)=>e.id));
                o("WAWebNoteCollection").NoteCollection.removeNotesByIds(n.map((e)=>String(e.id)));
                o("WAWebNoteCollection").NoteCollection.purgeNotesByChatJid(t);
            }
            const r = yield o("WAWebDBNoteDatabaseApi").getNotesByChatJid(e);
            if (r.length !== 0) {
                const a = r.map((e)=>babelHelpers.extends({}, e, {
                        chatJid: t
                    }));
                const i = a.map((e)=>new (o("WAWebNoteModel")).Note(e));
                o("WAWebNoteCollection").NoteCollection.purgeNotesByChatJid(e);
                o("WAWebNoteCollection").NoteCollection.add(i, {
                    merge: true
                });
                return o("WAWebDBNoteDatabaseApi").bulkUpdateNotes(a);
            }
        });
        return b.apply(this, arguments);
    }
    l.retrieveOnlyNoteForChatJid = u;
    l.noteAddAction = d;
    l.noteEditAction = p;
    l.addOrEditNoteAction = f;
    l.noteAddIfAbsentAction = h;
    l.updateNoteJidAction = C;
}, 98);