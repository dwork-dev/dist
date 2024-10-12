    var ops = {
        height: 24,
        width: 24,
        viewBox: "0 -960 960 960",
        fill: "var(--c-dgreen)"
    }
    function render(el) {
        let { svg, path, title } = $tags("http://www.w3.org/2000/svg");
        el.innerText = "";
        var o = el.options();
        var s = $data.find(f => f.name == o.name);
        let arrPathTag = [];
        console.log('s', s)
        if (Array.isArray(s?.svg)) {
            for (let item of s.svg) {
                arrPathTag.push(path({ d: item??''}))
            }
        } else {
            arrPathTag.push(path({ d: s?.svg }))
        }
        var ob = { ...ops };
        [...Object.keys(ops), "name"].map(k => {
            if (typeof o[k] != "undefined") {
                return ob[k] = o[k];
            }
            if (s && typeof s[k] != "undefined") {
                return ob[k] = s[k];
            }
        })
        el.$el = s ? svg(
            ob,
            ...arrPathTag
        ) : null
        $add(el, el.$el);
    }
    $el("x-svg", [], (el) => {
        render(el);
        el.changeName = (n) => {
            let d = $data.find(item => item.name === n)
            el.querySelector('path')?.setAttribute('d', d?.svg);
        }
    }, (el, name, valNew, valOld) => {
        if (name == "t-options" && valOld) {
            render(el);
        }
    })
