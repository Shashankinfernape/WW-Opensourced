__d("WAWebListNameValidation", [
    "WAWebL10N",
    "WAWebLabelCollection"
], function(t, n, r, o, a, i, l) {
    function e(e) {
        const t = r("WAWebL10N").getFullLocale();
        const n = e.trim().toLocaleLowerCase(t);
        if (n === "") {
            return false;
        }
        return o("WAWebLabelCollection").LabelCollection.some((e)=>e.name != null && e.name.toLocaleLowerCase(t) === n);
    }
    l.isListNameDuplicate = e;
}, 98);