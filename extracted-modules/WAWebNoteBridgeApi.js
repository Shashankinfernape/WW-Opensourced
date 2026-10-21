__d("WAWebNoteBridgeApi", [
    "WAWebNoteAction",
    "WAWebNoteCollection"
], function(t, n, r, o, a, i, l) {
    const e = {
        removeNotes: function({ noteIds }) {
            o("WAWebNoteCollection").NoteCollection.removeNotesByIds(noteIds);
        },
        updateNoteJidAction: function({ newJid, oldJid }) {
            o("WAWebNoteAction").updateNoteJidAction(oldJid, newJid);
        },
        upsertNotesFromSyncd: function({ noteRecords }) {
            o("WAWebNoteCollection").NoteCollection.add(noteRecords.map((e)=>babelHelpers.extends({}, e)), {
                merge: true
            });
        }
    };
    l.NoteBridgeApi = e;
}, 98);