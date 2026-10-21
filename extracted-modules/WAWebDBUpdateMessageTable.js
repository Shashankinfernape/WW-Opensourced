__d("WAWebDBUpdateMessageTable", [
    "WALogger",
    "WAWebSchemaMessage"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, n) {
        return o("WAWebSchemaMessage").getMessageTable().merge(t.toString(), n).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "updateMessageTable: failed to update in storage"
            ]))).verbose().sendLogs("updateMessageTable failed");
            throw t;
        });
    }
    l.updateMessageTable = s;
}, 98);