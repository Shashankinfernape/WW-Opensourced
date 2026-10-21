__d("WAWebEventFiles", [
    "Promise",
    "WAWebCreateFile",
    "WAWebImageUtils",
    "WAWebMediaLoadErrors"
], function(t, n, r, o, a, i, l) {
    let e;
    function s(t, r) {
        const files = t.target.files;
        const l = files || t.dataTransfer?.files;
        let s = l ? Array.from(l) : [];
        if (r != null && r !== "") {
            const u = typeof r === "string" ? [
                r
            ] : r;
            const c = u.map((e)=>new RegExp(e));
            s = s.filter((e)=>c.some((t)=>e.type.match(t)));
        }
        if (s.length) {
            return (e || (e = n("Promise"))).resolve(s);
        }
        const t_dataTransfer = t.dataTransfer;
        if (t_dataTransfer && t_dataTransfer.getData("text/uri-list")) {
            return o("WAWebImageUtils").urlToFile(t_dataTransfer.getData("text/uri-list")).then((e)=>[
                    o("WAWebCreateFile").createFile([
                        e
                    ], "", {
                        type: e.type
                    })
                ]);
        }
        if (t_dataTransfer && t_dataTransfer.getData("text/html")) {
            const m = new DOMParser;
            const p = m.parseFromString(t_dataTransfer.getData("text/html"), "text/html");
            if (p.createNodeIterator(p.childNodes[0], NodeFilter.SHOW_TEXT).nextNode()) {
                if (t_dataTransfer.getData("text/plain")) {
                    return (e || (e = n("Promise"))).reject(new (o("WAWebMediaLoadErrors")).MediaDragDropError("dropped html has text nodes"));
                }
            } else {
                const _ = p.getElementsByTagName("img");
                if (_.length) {
                    return o("WAWebImageUtils").urlToFile(_[0].src).then((e)=>[
                            o("WAWebCreateFile").createFile([
                                e
                            ], "", {
                                type: e.type
                            })
                        ]);
                }
            }
        }
        return (e || (e = n("Promise"))).resolve([]);
    }
    l.getFiles = s;
}, 98);