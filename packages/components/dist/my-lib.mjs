import { defineComponent as x, openBlock as c, createElementBlock as h, createElementVNode as B, provide as V, renderSlot as g, inject as q, computed as v, onBeforeMount as F, h as P, useSlots as O, ref as $, normalizeClass as w, normalizeStyle as C, unref as y, createCommentVNode as p, createBlock as D, withCtx as K, createVNode as U, watchEffect as Z, withDirectives as G, vShow as J } from "vue";
const Q = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
}, X = /* @__PURE__ */ B(
  "path",
  {
    d: "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372zm104 240.9c0 10.3-4.9 19.9-13.2 25.9L457.4 512l145.4 105.1c8.3 6 13.2 15.7 13.2 25.9v46.9c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178c5.3-3.8 12.7 0 12.7 6.5v46.9z",
    "fill-opacity": ".1",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), Y = /* @__PURE__ */ B(
  "path",
  {
    d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z",
    "fill-opacity": ".8",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), ee = /* @__PURE__ */ B(
  "path",
  {
    d: "M603.3 327.5l-246 178a7.95 7.95 0 0 0 0 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z",
    "fill-opacity": ".8",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), te = [X, Y, ee], oe = x({
  name: "LeftCircleTwotone",
  render: function(e, t) {
    return c(), h("svg", Q, te);
  }
});
function ne(o) {
  let e = 0;
  for (let t = 0; t < o.length; ++t)
    o[t] === "&" && ++e;
  return e;
}
const z = /\s*,(?![^(]*\))\s*/g, re = /\s+/g;
function se(o, e) {
  const t = [];
  return e.split(z).forEach((n) => {
    let s = ne(n);
    if (s) {
      if (s === 1) {
        o.forEach((r) => {
          t.push(n.replace("&", r));
        });
        return;
      }
    } else {
      o.forEach((r) => {
        t.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (r && r + " ") + n
        );
      });
      return;
    }
    let l = [
      n
    ];
    for (; s--; ) {
      const r = [];
      l.forEach((i) => {
        o.forEach((f) => {
          r.push(i.replace("&", f));
        });
      }), l = r;
    }
    l.forEach((r) => t.push(r));
  }), t;
}
function le(o, e) {
  const t = [];
  return e.split(z).forEach((n) => {
    o.forEach((s) => {
      t.push((s && s + " ") + n);
    });
  }), t;
}
function ie(o) {
  let e = [""];
  return o.forEach((t) => {
    t = t && t.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    t && (t.includes("&") ? e = se(e, t) : e = le(e, t));
  }), e.join(", ").replace(re, " ");
}
const ue = /[A-Z]/g;
function W(o) {
  return o.replace(ue, (e) => "-" + e.toLowerCase());
}
function fe(o, e = "  ") {
  return typeof o == "object" && o !== null ? ` {
` + Object.entries(o).map((t) => e + `  ${W(t[0])}: ${t[1]};`).join(`
`) + `
` + e + "}" : `: ${o};`;
}
function de(o, e, t) {
  return typeof o == "function" ? o({
    context: e.context,
    props: t
  }) : o;
}
function A(o, e, t, n) {
  if (!e)
    return "";
  const s = de(e, t, n);
  if (!s)
    return "";
  if (typeof s == "string")
    return `${o} {
${s}
}`;
  const l = Object.keys(s);
  if (l.length === 0)
    return t.config.keepEmptyBlock ? o + ` {
}` : "";
  const r = o ? [
    o + " {"
  ] : [];
  return l.forEach((i) => {
    const f = s[i];
    if (i === "raw") {
      r.push(`
` + f + `
`);
      return;
    }
    i = W(i), f != null && r.push(`  ${i}${fe(f)}`);
  }), o && r.push("}"), r.join(`
`);
}
function k(o, e, t) {
  o && o.forEach((n) => {
    if (Array.isArray(n))
      k(n, e, t);
    else if (typeof n == "function") {
      const s = n(e);
      Array.isArray(s) ? k(s, e, t) : s && t(s);
    } else
      n && t(n);
  });
}
function j(o, e, t, n, s, l) {
  const r = o.$;
  !r || typeof r == "string" ? e.push(r) : typeof r == "function" ? e.push(r({
    context: n.context,
    props: s
  })) : (r.before && r.before(n.context), !r.$ || typeof r.$ == "string" ? e.push(r.$) : r.$ && e.push(r.$({
    context: n.context,
    props: s
  })));
  const i = ie(e), f = A(i, o.props, n, s);
  l && f && l.insertRule(f), !l && f.length && t.push(f), o.children && k(o.children, {
    context: n.context,
    props: s
  }, (d) => {
    if (typeof d == "string") {
      const b = A(i, { raw: d }, n, s);
      l ? l.insertRule(b) : t.push(b);
    } else
      j(d, e, t, n, s, l);
  }), e.pop(), r && r.after && r.after(n.context);
}
function M(o, e, t, n = !1) {
  const s = [];
  return j(o, [], s, e, t, n ? o.instance.__styleSheet : void 0), n ? "" : s.join(`

`);
}
function ae(o) {
  for (var e = 0, t, n = 0, s = o.length; s >= 4; ++n, s -= 4)
    t = o.charCodeAt(n) & 255 | (o.charCodeAt(++n) & 255) << 8 | (o.charCodeAt(++n) & 255) << 16 | (o.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, e = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      e ^= (o.charCodeAt(n + 2) & 255) << 16;
    case 2:
      e ^= (o.charCodeAt(n + 1) & 255) << 8;
    case 1:
      e ^= o.charCodeAt(n) & 255, e = /* Math.imul(h, m): */
      (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = /* Math.imul(h, m): */
  (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
function E(o) {
  if (!o)
    return;
  const e = o.parentElement;
  e && e.removeChild(o);
}
function L(o) {
  return document.querySelector(`style[cssr-id="${o}"]`);
}
function ce(o) {
  const e = document.createElement("style");
  return e.setAttribute("cssr-id", o), e;
}
window && (window.__cssrContext = {});
function H(o) {
  const e = o.getAttribute("mount-count");
  return e === null ? null : Number(e);
}
function T(o, e) {
  o.setAttribute("mount-count", String(e));
}
function R(o, e, t, n) {
  const { els: s } = e;
  if (t === void 0)
    s.forEach(E), e.els = [];
  else {
    const l = L(t);
    if (l && s.includes(l)) {
      const r = H(l);
      n ? r === null ? console.error(`[css-render/unmount]: The style with target='${t}' is mounted in count mode.`) : r <= 1 ? (E(l), e.els = s.filter((i) => i !== l)) : T(l, r - 1) : r !== null ? console.error(`[css-render/unmount]: The style with target='${t}' is mounted in no-count mode.`) : (E(l), e.els = s.filter((i) => i !== l));
    }
  }
}
function he(o, e) {
  o.push(e);
}
function ge(o, e, t, n, s, l, r, i, f) {
  if (r && !f) {
    if (t === void 0) {
      console.error("[css-render/mount]: `id` is required in `boost` mode.");
      return;
    }
    const m = window.__cssrContext;
    m[t] || (m[t] = !0, M(e, o, n, r));
    return;
  }
  let d;
  const { els: b } = e;
  let u;
  if (t === void 0 && (u = e.render(n), t = ae(u)), f) {
    f(t, u ?? e.render(n));
    return;
  }
  const a = L(t);
  if (i || a === null) {
    if (d = a === null ? ce(t) : a, u === void 0 && (u = e.render(n)), d.textContent = u, a !== null)
      return;
    if (s) {
      const m = document.head.getElementsByTagName("style")[0] || null;
      document.head.insertBefore(d, m);
    } else
      document.head.appendChild(d);
    l && T(d, 1), he(b, d);
  } else {
    const m = H(a);
    l ? m === null ? console.error(`[css-render/mount]: The style with id='${t}' has been mounted in no-count mode.`) : T(a, m + 1) : m !== null && console.error(`[css-render/mount]: The style with id='${t}' has been mounted in count mode.`);
  }
  return a ?? d;
}
function me(o) {
  return M(this, this.instance, o);
}
function ye(o = {}) {
  const { target: e, id: t, ssr: n, props: s, count: l = !1, head: r = !1, boost: i = !1, force: f = !1 } = o;
  return ge(this.instance, this, t ?? e, s, r, l, i, f, n);
}
function pe(o = {}) {
  const { id: e, target: t, delay: n = 0, count: s = !1 } = o;
  n === 0 ? R(this.instance, this, e ?? t, s) : setTimeout(() => R(this.instance, this, e ?? t, s), n);
}
const S = function(o, e, t, n) {
  return {
    instance: o,
    $: e,
    props: t,
    children: n,
    els: [],
    render: me,
    mount: ye,
    unmount: pe
  };
}, be = function(o, e, t, n) {
  return Array.isArray(e) ? S(o, { $: null }, null, e) : Array.isArray(t) ? S(o, e, null, t) : Array.isArray(n) ? S(o, e, t, n) : S(o, e, t, null);
};
function we(o = {}) {
  let e = null;
  const t = {
    c: (...n) => be(t, ...n),
    use: (n, ...s) => n.install(t, ...s),
    find: L,
    context: {},
    config: o,
    get __styleSheet() {
      if (!e) {
        const n = document.createElement("style");
        return document.head.appendChild(n), e = document.styleSheets[document.styleSheets.length - 1], e;
      }
      return e;
    }
  };
  return t;
}
const { c: _ } = we(), ve = _(".xicon", {
  width: "1em",
  height: "1em",
  display: "inline-flex"
}, [
  _("svg", {
    width: "1em",
    height: "1em"
  }),
  _("svg:not([fill])", {
    fill: "currentColor"
  })
]), Ce = () => {
  ve.mount({ id: "xicons-icon" });
}, I = {
  size: [String, Number],
  color: String,
  tag: String
}, N = Symbol("IconConfigInjection");
x({
  name: "IconConfigProvider",
  props: I,
  setup(o, { slots: e }) {
    return V(N, o), () => g(e, "default");
  }
});
const xe = "span", Be = x({
  name: "Icon",
  props: I,
  setup(o, { slots: e }) {
    const t = q(N, null), n = v(() => {
      var r;
      const i = (r = o.size) !== null && r !== void 0 ? r : t?.size;
      if (i !== void 0)
        return typeof i == "number" || /^\d+$/.test(i) ? `${i}px` : i;
    }), s = v(() => {
      const { color: r } = o;
      return r === void 0 ? t ? t.color : void 0 : r;
    }), l = v(() => {
      var r;
      const { tag: i } = o;
      return i === void 0 ? (r = t?.tag) !== null && r !== void 0 ? r : xe : i;
    });
    return F(() => {
      Ce();
    }), () => P(l.value, {
      class: "xicon",
      style: {
        color: s.value,
        fontSize: n.value
      }
    }, [
      g(e, "default")
    ]);
  }
}), Se = { class: "flex-1 flex flex-col" }, $e = {
  key: 1,
  class: "flex-1 overflow-hidden"
}, Ee = /* @__PURE__ */ x({
  __name: "BaseLayout",
  props: {
    sidebarWidth: { default: "200px" },
    sidebarCollapseWidth: { default: "60px" },
    headHeight: { default: "60px" },
    footHeight: { default: "40px" },
    showSidebarCollapseButton: { type: Boolean, default: !0 },
    showSidebarRightBorder: { type: Boolean, default: !0 },
    showLogoBottomBorder: { type: Boolean, default: !0 },
    showLogoRightBorder: { type: Boolean, default: !0 },
    showHeadBottomBorder: { type: Boolean, default: !0 },
    showFootTopBorder: { type: Boolean, default: !0 },
    layoutMode: { default: "vertical" },
    themeMode: { default: "light" }
  },
  emits: ["onSidebarCollapseChange"],
  setup(o, { expose: e, emit: t }) {
    const n = o, s = O(), l = $({ width: n.sidebarWidth }), r = v(() => ({
      height: n.headHeight
    })), i = v(() => ({
      height: n.headHeight,
      width: n.sidebarWidth
    })), f = v(() => ({
      height: n.footHeight
    })), d = $(!1), b = (u) => {
      d.value = u, d.value ? (l.value.width = n.sidebarCollapseWidth, i.value.width = n.sidebarCollapseWidth) : (l.value.width = n.sidebarWidth, i.value.width = n.sidebarWidth), t("onSidebarCollapseChange", u);
    };
    return e({
      // 控制侧边收起展开
      sidebarCollapseHandler: b
    }), (u, a) => (c(), h("div", {
      class: w(["h-full flex", { dark: u.themeMode === "dark" }])
    }, [
      n.layoutMode === "vertical" ? (c(), h("div", {
        key: 0,
        class: "flex flex-col relative transition-all duration-300",
        style: C(l.value)
      }, [
        y(s).logo ? (c(), h("div", {
          key: 0,
          class: w(["border-solid border-0 border-gray-700/9 dark:border-neutral-50/15", [u.showLogoRightBorder ? "border-r" : "", u.showLogoBottomBorder ? "border-b" : ""]]),
          style: C(i.value)
        }, [
          g(u.$slots, "logo")
        ], 6)) : p("", !0),
        y(s).sidebar ? (c(), h("div", {
          key: 1,
          class: w(["flex-1 border-solid border-0 overflow-hidden border-gray-700/9 dark:border-neutral-50/15", [u.showSidebarRightBorder ? "border-r" : ""]])
        }, [
          g(u.$slots, "sidebar")
        ], 2)) : p("", !0),
        n.showSidebarCollapseButton ? (c(), D(y(Be), {
          key: 2,
          class: w(["absolute cursor-pointer right-0 inset-y-0 my-auto transition-all duration-300 translate-x-1/2 rounded-full bg-white", { "rotate-180": d.value }]),
          size: "20",
          color: "#8b949e",
          onClick: a[0] || (a[0] = (m) => b(!d.value))
        }, {
          default: K(() => [
            U(y(oe))
          ]),
          _: 1
        }, 8, ["class"])) : p("", !0)
      ], 4)) : p("", !0),
      B("div", Se, [
        y(s).head ? (c(), h("div", {
          key: 0,
          class: w(["border-solid border-0 w-full border-gray-700/9 dark:border-neutral-50/15", [u.showHeadBottomBorder ? "border-b" : ""]]),
          style: C(r.value)
        }, [
          y(s).logo && n.layoutMode !== "vertical" ? (c(), h("div", {
            key: 0,
            class: w(["border-solid border-0 border-gray-700/9 dark:border-neutral-50/15", [u.showLogoRightBorder ? "border-r" : "", u.showLogoBottomBorder ? "border-b" : ""]]),
            style: C(i.value)
          }, [
            g(u.$slots, "logo")
          ], 6)) : p("", !0),
          g(u.$slots, "head")
        ], 6)) : p("", !0),
        y(s).main ? (c(), h("div", $e, [
          g(u.$slots, "main")
        ])) : p("", !0),
        y(s).foot ? (c(), h("div", {
          key: 2,
          class: w(["border-solid border-0 overflow-hidden border-gray-700/9 dark:border-neutral-50/15", [u.showFootTopBorder ? "border-t" : "", u.showLogoBottomBorder ? "border-b" : ""]]),
          style: C(f.value)
        }, [
          g(u.$slots, "foot")
        ], 6)) : p("", !0)
      ])
    ], 2));
  }
}), _e = { class: "flex items-center justify-center h-full overflow-hidden" }, ke = { class: "ml-3" }, Te = /* @__PURE__ */ x({
  __name: "SystemLogo",
  props: {
    showTitle: { type: Boolean, default: !0 },
    systemLogoWidth: {},
    systemLogoCollapseWidth: {}
  },
  emits: ["onShowTitleChange"],
  setup(o, { expose: e, emit: t }) {
    const n = o;
    Z(() => {
      t("onShowTitleChange", n.showTitle);
    });
    const s = $(n.showTitle);
    return e({
      showTitleChange: (r) => {
        console.log("showTitleChange:", r), s.value = r, t("onShowTitleChange", r);
      }
    }), (r, i) => (c(), h("div", _e, [
      g(r.$slots, "logoImg"),
      G(B("h2", ke, [
        g(r.$slots, "default")
      ], 512), [
        [J, s.value]
      ])
    ]));
  }
});
function Ae(o = !1) {
  const e = $(o);
  function t(r) {
    e.value = r;
  }
  function n() {
    t(!0);
  }
  function s() {
    t(!1);
  }
  function l() {
    t(!e.value);
  }
  return {
    bool: e,
    setBool: t,
    setTrue: n,
    setFalse: s,
    toggle: l
  };
}
const Re = {
  install: (o) => {
    o.component("BaseLayout", Ee), o.component("SystemLogo", Te);
  }
};
export {
  Ee as BaseLayout,
  Te as SystemLogo,
  Re as default,
  Ae as useBoolean
};
