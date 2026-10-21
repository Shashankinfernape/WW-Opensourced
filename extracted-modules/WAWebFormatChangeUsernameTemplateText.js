__d("WAWebFormatChangeUsernameTemplateText", [
    "fbt",
    "WALogger",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "isStringNullOrEmpty"
], function(t, n, r, o, a, i, l, s) {
    let e;
    let u;
    let c;
    const d = function({ newUsername, phoneNumber }) {
        return s._("{phoneNumber} set the username \u0040{newUsername}", [
            s._param("phoneNumber", phoneNumber),
            s._param("newUsername", newUsername.toString())
        ]);
    };
    const m = function({ newUsername, savedName }) {
        return s._("{contactName} set the username \u0040{newUsername}", [
            s._param("contactName", savedName),
            s._param("newUsername", newUsername.toString())
        ]);
    };
    const p = function({ newUsername, oldUsername }) {
        return s._("\u0040{oldUsername} changed their username to \u0040{newUsername}", [
            s._param("oldUsername", oldUsername),
            s._param("newUsername", newUsername.toString())
        ]);
    };
    const _ = function({ newUsername, savedName }) {
        return s._("{contactName} changed their username to \u0040{newUsername}", [
            s._param("contactName", savedName),
            s._param("newUsername", newUsername.toString())
        ]);
    };
    const f = function({ oldUsername }) {
        return s._("\u0040{oldUsername} deleted their username", [
            s._param("oldUsername", oldUsername)
        ]);
    };
    const g = function({ savedName }) {
        return s._("{contactName} deleted their username", [
            s._param("contactName", savedName)
        ]);
    };
    const oneOnOne_noSavedName_noPhoneNumber_created_consumer = function({ newUsername }) {
        return s._("This person set the username \u0040{newUsername}", [
            s._param("newUsername", newUsername.toString())
        ]);
    };
    const y = function({ newUsername }) {
        return s._("A member set the username \u0040{newUsername}", [
            s._param("newUsername", newUsername.toString())
        ]);
    };
    const oneOnOne_noSavedName_noPhoneNumber_created_business = function({ newUsername }) {
        return s._("This business set the username \u0040{newUsername}", [
            s._param("newUsername", newUsername.toString())
        ]);
    };
    const oneOnOne_noSavedName_noPhoneNumber_deleted_business = function({ oldUsername }) {
        return s._("This business deleted their username");
    };
    const v = {
        oneOnOne_noSavedName_noPhoneNumber_created_consumer,
        oneOnOne_noSavedName_phoneNumber_created_consumer: d,
        oneOnOne_savedName_noPhoneNumber_created_consumer: m,
        oneOnOne_savedName_phoneNumber_created_consumer: m,
        oneOnOne_noSavedName_noPhoneNumber_updated_consumer: p,
        oneOnOne_noSavedName_phoneNumber_updated_consumer: p,
        oneOnOne_savedName_noPhoneNumber_updated_consumer: _,
        oneOnOne_savedName_phoneNumber_updated_consumer: _,
        oneOnOne_noSavedName_noPhoneNumber_deleted_consumer: f,
        oneOnOne_noSavedName_phoneNumber_deleted_consumer: f,
        oneOnOne_savedName_noPhoneNumber_deleted_consumer: g,
        oneOnOne_savedName_phoneNumber_deleted_consumer: g,
        group_noSavedName_noPhoneNumber_created_consumer: y,
        group_noSavedName_phoneNumber_created_consumer: d,
        group_savedName_noPhoneNumber_created_consumer: m,
        group_savedName_phoneNumber_created_consumer: m,
        group_noSavedName_noPhoneNumber_updated_consumer: p,
        group_noSavedName_phoneNumber_updated_consumer: p,
        group_savedName_noPhoneNumber_updated_consumer: _,
        group_savedName_phoneNumber_updated_consumer: _,
        group_noSavedName_noPhoneNumber_deleted_consumer: f,
        group_noSavedName_phoneNumber_deleted_consumer: f,
        group_savedName_noPhoneNumber_deleted_consumer: g,
        group_savedName_phoneNumber_deleted_consumer: g,
        oneOnOne_noSavedName_noPhoneNumber_created_business,
        oneOnOne_noSavedName_phoneNumber_created_business: d,
        oneOnOne_savedName_noPhoneNumber_created_business: m,
        oneOnOne_savedName_phoneNumber_created_business: m,
        oneOnOne_noSavedName_noPhoneNumber_updated_business: p,
        oneOnOne_noSavedName_phoneNumber_updated_business: p,
        oneOnOne_savedName_noPhoneNumber_updated_business: _,
        oneOnOne_savedName_phoneNumber_updated_business: _,
        oneOnOne_noSavedName_noPhoneNumber_deleted_business,
        oneOnOne_noSavedName_phoneNumber_deleted_business: f,
        oneOnOne_savedName_noPhoneNumber_deleted_business: g,
        oneOnOne_savedName_phoneNumber_deleted_business: g,
        group_noSavedName_noPhoneNumber_created_business: y,
        group_noSavedName_phoneNumber_created_business: d,
        group_savedName_noPhoneNumber_created_business: m,
        group_savedName_phoneNumber_created_business: m,
        group_noSavedName_noPhoneNumber_updated_business: p,
        group_noSavedName_phoneNumber_updated_business: p,
        group_savedName_noPhoneNumber_updated_business: _,
        group_savedName_phoneNumber_updated_business: _,
        group_noSavedName_noPhoneNumber_deleted_business: f,
        group_noSavedName_phoneNumber_deleted_business: f,
        group_savedName_noPhoneNumber_deleted_business: g,
        group_savedName_phoneNumber_deleted_business: g
    };
    function S(t) {
        if (t.templateParams.length === 1) {
            return s._("User changed their username to {newUsername}", [
                s._param("newUsername", t.templateParams[0].toString())
            ]);
        }
        const newUsername = t.templateParams[1];
        if (typeof newUsername !== "string") {
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[formatChangeUsernameTemplateText] invalid newUsername"
            ]))).sendLogs("formatChangeUsernameTemplateText-newUsername-not-a-string");
            return "";
        }
        const a = t.templateParams[0];
        if (typeof a !== "string") {
            o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
                "[formatChangeUsernameTemplateText] invalid oldUsername"
            ]))).sendLogs("formatChangeUsernameTemplateText-oldUsername-not-a-string");
            return "";
        }
        const i = a === "";
        const l = newUsername === "";
        const d = o("WAWebFrontendMsgGetters").getChat(t);
        const m = r("WAWebWid").isGroup(d.id);
        const p = t.templateParams[2];
        if (p == null) {
            return "";
        }
        const _ = o("WAWebContactCollection").ContactCollection.get(p);
        const f = _ ? o("WAWebFrontendContactGetters").getFormattedSavedNameOrPushnameWithType(_) : null;
        const g = f != null && f.type === o("WAWebWamEnumOppositeVisibleIdentificationType").OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME ? f.displayName : null;
        const h = o("WAWebWidFormat").widToFormattedUser(o("WAWebLidMigrationUtils").toPn(o("WAWebWidFactory").createUserWidOrThrow(p.toString())));
        const y = m ? "group" : "oneOnOne";
        const C = r("isStringNullOrEmpty")(g) ? "noSavedName" : "savedName";
        const b = r("isStringNullOrEmpty")(h) ? "noPhoneNumber" : "phoneNumber";
        let S;
        if (i) {
            S = "created";
        } else if (l) {
            S = "deleted";
        } else {
            S = "updated";
        }
        const R = _ != null && _.isBusiness ? "business" : "consumer";
        const L = `${y}_${C}_${b}_${S}_${R}`;
        const E = v[L];
        if (E == null) {
            o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
                "[formatChangeUsernameTemplateText] invalid lookupKey ",
                ""
            ])), L).sendLogs("formatChangeUsernameTemplateText-lookupKey-not-valid");
            return "";
        }
        const k = E({
            newUsername,
            savedName: g ?? "",
            oldUsername: a ?? "",
            phoneNumber: h
        });
        return k;
    }
    l.default = S;
}, 226);