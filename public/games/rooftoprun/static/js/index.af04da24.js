!(function () {
  var e,
    t,
    a,
    i,
    n,
    r,
    l,
    o,
    s = {
      93992: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          A: function () {
            return g
          },
        }),
          a(17932),
          a(86204))
        var i = a(3144),
          n = a(83827),
          r = a(28063),
          l = a(86037),
          o = a(26635),
          s = a(59176),
          c = a(43088)
        let u = ["id"]
        var d = (0, i.pM)({
            __name: "AdContainer",
            props: {
              type: {},
              emptyClass: {},
              intersectionRootMargin: {},
              refreshSec: {},
              reserveHeight: { type: Boolean },
              respectHeight: { type: Boolean },
            },
            emits: ["update:visible"],
            setup(e, { emit: t }) {
              let a = (0, o.N)(),
                d = (0, l.a)(),
                p = {
                  sidebar: { sizes: [[300, 300], "fluid"], placeholderHeight: 300 },
                  sidebar_bottom: {
                    sizes: [[300, 300], [300, 600], [120, 600], [160, 600], [300, 250], "fluid"],
                    placeholderHeight: 300,
                  },
                  leaderboard: {
                    sizes: [[728, 90], [950, 90], [960, 90], [970, 90], [980, 90], "fluid"],
                    placeholderHeight: 90,
                  },
                  leaderboard_rest: {
                    sizes: [[728, 90], [950, 90], [960, 90], [970, 90], [980, 90], "fluid"],
                    placeholderHeight: 90,
                  },
                  sticky_mobile_non_game_page: {
                    sizes: [[320, 100], [300, 50], [320, 50], "fluid"],
                  },
                  sticky_mobile: { sizes: [[300, 50], [320, 50], "fluid"] },
                  sticky_tablet: { sizes: [[728, 90], "fluid"] },
                  sticky_desktop: {
                    sizes: [[970, 90], [960, 90], [950, 90], [980, 90], [728, 90], "fluid"],
                  },
                  widget_sidebar: {
                    sizes: [[120, 600], [300, 300], [300, 600], [160, 600], [300, 250], "fluid"],
                  },
                  widget_sidebar_bottom: { sizes: [[300, 250], "fluid"] },
                  widget_horizontal: { sizes: [[728, 90], "fluid"] },
                  widget_horizontal_2: { sizes: [[728, 90], "fluid"] },
                  widget_sticky_mobile: { sizes: [[300, 50], [320, 50], "fluid"] },
                  widget_sticky_tablet: { sizes: [[728, 90], "fluid"] },
                  universal_banner_1: {
                    sizes: [
                      [960, 90],
                      [300, 600],
                      [970, 90],
                      [300, 250],
                      [336, 280],
                      [320, 100],
                      [950, 90],
                      [320, 480],
                      [300, 50],
                      [480, 320],
                      [300, 300],
                      [728, 90],
                      [120, 600],
                      [320, 50],
                      [160, 600],
                      [300, 100],
                      [980, 90],
                    ],
                  },
                  universal_banner_short_1: {
                    sizes: [
                      [300, 250],
                      [320, 100],
                      [320, 50],
                      [300, 100],
                      [300, 50],
                      [300, 300],
                      [120, 600],
                      [160, 600],
                    ],
                  },
                  universal_banner_2: {
                    sizes: [
                      [960, 90],
                      [300, 600],
                      [970, 90],
                      [300, 250],
                      [336, 280],
                      [320, 100],
                      [950, 90],
                      [320, 480],
                      [300, 50],
                      [480, 320],
                      [300, 300],
                      [728, 90],
                      [120, 600],
                      [320, 50],
                      [160, 600],
                      [300, 100],
                      [980, 90],
                    ],
                  },
                  vertical_1: { sizes: [] },
                  vertical_2: { sizes: [] },
                  vertical_3: { sizes: [] },
                  horizontal_1: { sizes: [] },
                },
                m = (0, c.a)(),
                g = (0, i.EW)(() => p[e.type]),
                v = (0, i.EW)(() =>
                  g.value.sizes
                    .slice()
                    .sort((e, t) => ("fluid" === e ? 1 : "fluid" === t ? -1 : t[0] - e[0])),
                ),
                h = (0, i.IJ)(),
                f = (0, i.KR)(!0),
                _ = (0, i.KR)(!1),
                b = (0, i.EW)(() => {
                  if (f.value && g.value.placeholderHeight && e.reserveHeight)
                    return g.value.placeholderHeight
                }),
                y = (0, i.Bi)(),
                w = (0, i.rk)("container"),
                k = (0, i.KR)(),
                C = (0, i.KR)(void 0 === e.intersectionRootMargin)
              async function E() {
                if ((await (0, s.HD)(), !C.value || !a.adService || !w.value || d.isAdDisabled))
                  return
                let i = w.value.getBoundingClientRect(),
                  n = v.value.filter((t) => {
                    if ("fluid" === t) return i.width > 0
                    let a = !e.respectHeight || i.height >= t[1]
                    return i.width >= t[0] && a
                  })
                if (
                  JSON.stringify(n) !== JSON.stringify(k.value) &&
                  ((k.value = n),
                  h.value?.destroy(),
                  (h.value = void 0),
                  n.length > 0 && i.width > 0)
                ) {
                  if (
                    (await (0, s.HD)(),
                    (h.value = a.adService?.requestPageAd({
                      type: e.type,
                      refresh: e.refreshSec,
                      el: y,
                      sizes: n,
                    })),
                    !m.value || d.isAdDisabled)
                  )
                    return void h.value.destroy()
                  ;(h.value?.addEventListener("rendered", () => {
                    ;((_.value = !0), (f.value = !1), t("update:visible", !0))
                  }),
                    h.value?.addEventListener("empty", () => {
                      ;((_.value = !1), (f.value = !1), t("update:visible", !1))
                    }))
                }
              }
              let A = (0, n.k3)(E, 1e3)
              async function x() {
                if (!e.emptyClass) return
                await (0, s.HD)()
                let t = w.value?.appendChild(document.createElement("div"))
                t &&
                  (t.classList.add(e.emptyClass),
                  "none" === window.getComputedStyle(t).display &&
                    console.error(`AdBlock: class .${e.emptyClass} sets display to "none". That breaks tracking of the future size changes.

Use negative margins to hide empty ad in the layout.`),
                  t.remove())
              }
              if (
                ((0, i.sV)(() => {
                  ;(x(), A())
                }),
                (0, i.wB)(
                  () => e.emptyClass,
                  () => {
                    x()
                  },
                ),
                (0, i.wB)(
                  () => d.isAdDisabled,
                  (e) => {
                    ;(h.value?.destroy(), (h.value = void 0), e || A())
                  },
                ),
                (0, r.wYm)(w, A),
                void 0 !== e.intersectionRootMargin)
              ) {
                let { stop: t } = (0, r.BLq)(
                  w,
                  ([e]) => {
                    e?.isIntersecting && ((C.value = !0), A(), t())
                  },
                  { rootMargin: e.intersectionRootMargin },
                )
              }
              return (
                (0, i.xo)(() => {
                  h.value?.destroy()
                }),
                (t, a) => (
                  (0, i.uX)(),
                  (0, i.CE)(
                    "div",
                    {
                      ref: "container",
                      class: (0, i.C4)({
                        [e.emptyClass || ""]: e.emptyClass && !_.value && !b.value,
                      }),
                    },
                    [
                      (0, i.Lk)(
                        "div",
                        {
                          class: (0, i.C4)(t.$style.wrapper),
                          style: (0, i.Tr)({ height: b.value ? `${b.value}rem` : void 0 }),
                        },
                        [
                          (0, i.Lk)(
                            "div",
                            { id: (0, i.R1)(y), class: (0, i.C4)(t.$style.container) },
                            null,
                            10,
                            u,
                          ),
                          (0, i.RG)(t.$slots, "default", { isVisible: _.value }),
                        ],
                        6,
                      ),
                    ],
                    2,
                  )
                )
              )
            },
          }),
          p = a(97939)
        let m = {}
        m.$style = { wrapper: "RszFQ", container: "IVpN3" }
        var g = (0, p.default)(d, [["__cssModules", m]])
      },
      99952: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return u
          },
        })
        var i = a(3144),
          n = a(76915),
          r = a(8011)
        let l = ["href"]
        var o = (0, i.pM)({
            __name: "BaseLink",
            props: { disabled: { type: Boolean }, to: {}, externalTo: {} },
            setup(e) {
              let { keepRequiredParams: t } = (0, r.j)(),
                a = (0, r.u)(),
                o = (0, i.EW)(() => ("_blank" === e.target && e.to ? a(e.to) : e.to))
              return (a, r) =>
                e.externalTo
                  ? ((0, i.uX)(),
                    (0, i.CE)(
                      "a",
                      {
                        key: 0,
                        href: a.externalTo,
                        class: (0, i.C4)([a.$style.baseLink, e.disabled ? a.$style.disabled : ""]),
                      },
                      [(0, i.RG)(a.$slots, "default")],
                      10,
                      l,
                    ))
                  : o.value
                    ? ((0, i.uX)(),
                      (0, i.Wv)(
                        (0, i.R1)(n.Wk),
                        {
                          key: 1,
                          to: (0, i.R1)(t)(o.value),
                          class: (0, i.C4)([
                            a.$style.baseLink,
                            e.disabled ? a.$style.disabled : "",
                          ]),
                        },
                        { default: (0, i.k6)(() => [(0, i.RG)(a.$slots, "default")]), _: 3 },
                        8,
                        ["to", "class"],
                      ))
                    : (0, i.Q3)("", !0)
            },
          }),
          s = a(97939)
        let c = {}
        c.$style = { baseLink: "Mfnbj", disabled: "T6EOH" }
        var u = (0, s.default)(o, [["__cssModules", c]])
      },
      10906: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return p
          },
        })
        var i = a(3144),
          n = a(98289),
          r = a(81236),
          l = a(88531),
          o = a(84889),
          s = a(41004),
          c = (0, i.pM)({
            __name: "Button",
            props: {
              leftIcon: {},
              label: {},
              size: { default: "m" },
              width: { default: "normal" },
              color: { default: "purple-400" },
              to: {},
              externalTo: {},
              target: {},
              type: { default: "button" },
              disabled: { type: Boolean },
              interfaceTarget: {},
              onClick: {},
              onPointerdown: {},
            },
            setup(e) {
              let { labelBindings: t } = (0, o.E)(e.size)
              return (a, o) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  l.A,
                  (0, i.v6)(e, {
                    class: [a.$style.default_button_override, (0, i.R1)(s.A)[`size_${e.size}`]],
                  }),
                  {
                    default: (0, i.k6)(() => [
                      e.leftIcon
                        ? ((0, i.uX)(),
                          (0, i.Wv)(
                            n.A,
                            {
                              key: 0,
                              name: e.leftIcon,
                              class: (0, i.C4)((0, i.R1)(s.A).left_icon),
                            },
                            null,
                            8,
                            ["name", "class"],
                          ))
                        : (0, i.Q3)("", !0),
                      e.label
                        ? ((0, i.uX)(),
                          (0, i.Wv)(
                            r.A,
                            (0, i.v6)({ key: 1, type: "label", responsive: !1 }, (0, i.R1)(t), {
                              class: a.$style.label_override,
                            }),
                            { default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(e.label), 1)]), _: 1 },
                            16,
                            ["class"],
                          ))
                        : (0, i.Q3)("", !0),
                      (0, i.RG)(a.$slots, "default"),
                    ]),
                    _: 3,
                  },
                  16,
                  ["class"],
                )
              )
            },
          }),
          u = a(97939)
        let d = {}
        d.$style = {
          default_button_override: "rhhFH",
          defaultButtonOverride: "rhhFH",
          "#": "QFgl7",
          label_override: "mwOKV",
          labelOverride: "mwOKV",
        }
        var p = (0, u.default)(c, [["__cssModules", d]])
      },
      84520: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return m
          },
        })
        var i = a(3144),
          n = a(98289),
          r = a(81236),
          l = a(88531),
          o = a(84889),
          s = a(56657),
          c = a(41004),
          u = (0, i.pM)({
            __name: "GhostButton",
            props: {
              leftIcon: {},
              label: {},
              size: { default: "m" },
              width: { default: "normal" },
              color: { default: "purple-400" },
              to: {},
              externalTo: {},
              target: {},
              type: { default: "button" },
              disabled: { type: Boolean },
              interfaceTarget: {},
              onClick: {},
              onPointerdown: {},
            },
            setup(e) {
              let { labelBindings: t } = (0, o.E)(e.size)
              return (a, o) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  l.A,
                  (0, i.v6)(e, {
                    class: [
                      (0, i.R1)(s.A).ghost_button_override,
                      (0, i.R1)(s.A)[`color_${e.color}_override`],
                      (0, i.R1)(c.A)[`size_${e.size}`],
                    ],
                  }),
                  {
                    default: (0, i.k6)(() => [
                      e.leftIcon
                        ? ((0, i.uX)(),
                          (0, i.Wv)(
                            n.A,
                            {
                              key: 0,
                              name: e.leftIcon,
                              class: (0, i.C4)((0, i.R1)(c.A).left_icon),
                            },
                            null,
                            8,
                            ["name", "class"],
                          ))
                        : (0, i.Q3)("", !0),
                      e.label
                        ? ((0, i.uX)(),
                          (0, i.Wv)(
                            r.A,
                            (0, i.v6)({ key: 1, type: "label", responsive: !1 }, (0, i.R1)(t), {
                              class: a.$style.label_override,
                            }),
                            { default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(e.label), 1)]), _: 1 },
                            16,
                            ["class"],
                          ))
                        : (0, i.Q3)("", !0),
                      (0, i.RG)(a.$slots, "default"),
                    ]),
                    _: 3,
                  },
                  16,
                  ["class"],
                )
              )
            },
          }),
          d = a(97939)
        let p = {}
        p.$style = { label_override: "xf_4D", labelOverride: "xf_4D", "#": "bdwmL" }
        var m = (0, d.default)(u, [["__cssModules", p]])
      },
      84603: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return s
          },
        })
        var i = a(3144),
          n = a(98289),
          r = a(88531),
          l = a(56657),
          o = a(42017),
          s = (0, i.pM)({
            __name: "GhostIconButton",
            props: {
              icon: {},
              size: { default: "m" },
              width: { default: "normal" },
              color: { default: "purple-400" },
              to: {},
              externalTo: {},
              target: {},
              type: { default: "button" },
              disabled: { type: Boolean },
              interfaceTarget: {},
              onClick: {},
              onPointerdown: {},
            },
            setup: (e) => (t, a) => (
              (0, i.uX)(),
              (0, i.Wv)(
                r.A,
                (0, i.v6)(e, {
                  class: [
                    (0, i.R1)(l.A).ghost_button_override,
                    (0, i.R1)(l.A)[`color_${e.color}_override`],
                    (0, i.R1)(o.A)[`size_${e.size}_override`],
                  ],
                }),
                {
                  default: (0, i.k6)(() => [
                    e.icon
                      ? ((0, i.uX)(),
                        (0, i.Wv)(
                          n.A,
                          { key: 0, name: e.icon, class: (0, i.C4)((0, i.R1)(o.A).icon) },
                          null,
                          8,
                          ["name", "class"],
                        ))
                      : ((0, i.uX)(),
                        (0, i.CE)(
                          "div",
                          { key: 1, class: (0, i.C4)((0, i.R1)(o.A).icon) },
                          null,
                          2,
                        )),
                  ]),
                  _: 1,
                },
                16,
                ["class"],
              )
            ),
          })
      },
      90053: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return u
          },
        })
        var i = a(3144),
          n = a(98289),
          r = a(88531),
          l = a(42017),
          o = (0, i.pM)({
            __name: "IconButton",
            props: {
              icon: {},
              size: { default: "m" },
              width: { default: "normal" },
              color: { default: "purple-400" },
              to: {},
              externalTo: {},
              target: {},
              type: { default: "button" },
              disabled: { type: Boolean },
              interfaceTarget: {},
              onClick: {},
              onPointerdown: {},
            },
            setup: (e) => (t, a) => (
              (0, i.uX)(),
              (0, i.Wv)(
                r.A,
                (0, i.v6)(e, {
                  class: [t.$style.icon_button_override, (0, i.R1)(l.A)[`size_${e.size}_override`]],
                }),
                {
                  default: (0, i.k6)(() => [
                    e.icon
                      ? ((0, i.uX)(),
                        (0, i.Wv)(
                          n.A,
                          { key: 0, name: e.icon, class: (0, i.C4)((0, i.R1)(l.A).icon) },
                          null,
                          8,
                          ["name", "class"],
                        ))
                      : ((0, i.uX)(),
                        (0, i.CE)(
                          "div",
                          { key: 1, class: (0, i.C4)((0, i.R1)(l.A).icon) },
                          [(0, i.RG)(t.$slots, "default")],
                          2,
                        )),
                  ]),
                  _: 3,
                },
                16,
                ["class"],
              )
            ),
          }),
          s = a(97939)
        let c = {}
        c.$style = { icon_button_override: "z3syv", iconButtonOverride: "z3syv", "#": "bXvVe" }
        var u = (0, s.default)(o, [["__cssModules", c]])
      },
      87577: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return p
          },
        })
        var i = a(3144),
          n = a(98289),
          r = a(81236),
          l = a(88531),
          o = a(84889),
          s = a(41004),
          c = (0, i.pM)({
            __name: "OutlineButton",
            props: {
              leftIcon: {},
              label: {},
              size: { default: "m" },
              width: { default: "normal" },
              color: { default: "purple-400" },
              to: {},
              externalTo: {},
              target: {},
              type: { default: "button" },
              disabled: { type: Boolean },
              interfaceTarget: {},
              onClick: {},
              onPointerdown: {},
            },
            setup(e) {
              let { labelBindings: t } = (0, o.E)(e.size)
              return (a, o) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  l.A,
                  (0, i.v6)(e, {
                    class: [
                      a.$style[`color_${e.color}_override`],
                      a.$style.outline_button_override,
                      (0, i.R1)(s.A)[`size_${e.size}`],
                    ],
                  }),
                  {
                    default: (0, i.k6)(() => [
                      e.leftIcon
                        ? ((0, i.uX)(),
                          (0, i.Wv)(
                            n.A,
                            {
                              key: 0,
                              name: e.leftIcon,
                              class: (0, i.C4)((0, i.R1)(s.A).left_icon),
                            },
                            null,
                            8,
                            ["name", "class"],
                          ))
                        : (0, i.Q3)("", !0),
                      e.label
                        ? ((0, i.uX)(),
                          (0, i.Wv)(
                            r.A,
                            (0, i.v6)({ key: 1, type: "label", responsive: !1 }, (0, i.R1)(t), {
                              class: a.$style.label_override,
                            }),
                            { default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(e.label), 1)]), _: 1 },
                            16,
                            ["class"],
                          ))
                        : (0, i.Q3)("", !0),
                      (0, i.RG)(a.$slots, "default"),
                    ]),
                    _: 3,
                  },
                  16,
                  ["class"],
                )
              )
            },
          }),
          u = a(97939)
        let d = {}
        d.$style = {
          "color_purple-400_override": "YyvVp",
          colorPurple400Override: "YyvVp",
          "#": "RLEK6",
          "color_purple-500_override": "cVAa3",
          colorPurple500Override: "cVAa3",
          "color_purple-600_override": "_Xvni",
          colorPurple600Override: "_Xvni",
          "color_purple-graphite_override": "p4P1T",
          colorPurpleGraphiteOverride: "p4P1T",
          color_white_override: "LgGmi",
          colorWhiteOverride: "LgGmi",
          "color_white-60_override": "LBSLc",
          colorWhite60Override: "LBSLc",
          "color_white-20_override": "Eeujb",
          colorWhite20Override: "Eeujb",
          color_salad_override: "JCNQm",
          colorSaladOverride: "JCNQm",
          outline_button_override: "yMyKm",
          outlineButtonOverride: "yMyKm",
          label_override: "FdaWb",
          labelOverride: "FdaWb",
        }
        var p = (0, u.default)(c, [["__cssModules", d]])
      },
      88531: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return s
          },
        })
        var i = a(3144),
          n = a(99952),
          r = (0, i.pM)({
            __name: "BaseButton",
            props: {
              size: { default: "m" },
              width: { default: "normal" },
              color: { default: "purple-400" },
              to: {},
              externalTo: {},
              target: {},
              type: { default: "button" },
              disabled: { type: Boolean },
              interfaceTarget: {},
              onClick: {},
              onPointerdown: {},
            },
            setup(e) {
              let t,
                a,
                { isLink: r, linkBindings: l } =
                  ((t = (0, i.EW)(() => !!(e.to ?? e.externalTo))),
                  (a = (0, i.EW)(() =>
                    t.value ? { to: e.to, externalTo: e.externalTo, target: e.target } : {},
                  )),
                  { isLink: t, linkBindings: a })
              return (t, a) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  (0, i.$y)((0, i.R1)(r) ? n.A : "button"),
                  (0, i.v6)((0, i.R1)(l), {
                    class: [
                      t.$style.button,
                      t.$style[`width_${e.width}`],
                      t.$style[`color_${e.color}`],
                    ],
                    type: e.type,
                    disabled: e.disabled,
                    "data-interface-target": t.interfaceTarget,
                    onClick: e.onClick,
                    onPointerdown: e.onPointerdown,
                  }),
                  {
                    default: (0, i.k6)(() => [
                      (0, i.Lk)(
                        "div",
                        { class: (0, i.C4)(t.$style.content) },
                        [(0, i.RG)(t.$slots, "default")],
                        2,
                      ),
                    ]),
                    _: 3,
                  },
                  16,
                  [
                    "class",
                    "type",
                    "disabled",
                    "data-interface-target",
                    "onClick",
                    "onPointerdown",
                  ],
                )
              )
            },
          }),
          l = a(97939)
        let o = {}
        o.$style = {
          button: "ZPTtp",
          content: "_12k6",
          "color_purple-400": "uMJ4i",
          colorPurple400: "uMJ4i",
          "color_purple-400-flat": "u24Lb",
          colorPurple400Flat: "u24Lb",
          "color_purple-500": "nSjMa",
          colorPurple500: "nSjMa",
          "color_purple-600": "pZY1T",
          colorPurple600: "pZY1T",
          "color_purple-graphite": "UTvJD",
          colorPurpleGraphite: "UTvJD",
          color_golden: "SbKZp",
          colorGolden: "SbKZp",
          "color_white-60": "Yolfv",
          colorWhite60: "Yolfv",
          color_white: "Tcx2h",
          colorWhite: "Tcx2h",
          "color_white-08": "GFZEL",
          colorWhite08: "GFZEL",
          "color_white-20": "xI_5H",
          colorWhite20: "xI_5H",
          "color_carbon-200": "OuSwL",
          colorCarbon200: "OuSwL",
          "color_carbon-300": "K26Kf",
          colorCarbon300: "K26Kf",
          "color_carbon-400": "_KQR_",
          colorCarbon400: "_KQR_",
          color_lime: "Ym2gv",
          colorLime: "Ym2gv",
          "color_lavander-300": "jSDvk",
          colorLavander300: "jSDvk",
          "color_rose-100": "qsZkf",
          colorRose100: "qsZkf",
          "color_rose-400": "U52DE",
          colorRose400: "U52DE",
          color_salad: "fzZiO",
          colorSalad: "fzZiO",
          width_normal: "CTa2C",
          widthNormal: "CTa2C",
          width_full: "SiAXF",
          widthFull: "SiAXF",
        }
        var s = (0, l.default)(r, [["__cssModules", o]])
      },
      41024: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          A: function () {
            return h
          },
        }),
          a(52093))
        var i = a(3144),
          n = a(93911)
        a(22265)
        var r = a(99952)
        ;(a(17932), a(76429), a(69399))
        let l = [420, 480, 90, 160, 190, 320, 380].sort((e, t) => t - e),
          o = "TEMPORARY_DISABLE_TRANSFORMATIONS",
          s = RegExp("(/enlarged|/thumb)$"),
          c = (e, t) => {
            let a = l.find((e) => e <= t) || l.at(-1),
              i = 75
            return ((!a || a <= 160) && (i = 50), e.replace(s, `/width=${a},quality=${i}`))
          },
          u = (e, t) =>
            e.startsWith(o) && s.test(e)
              ? `${c(e, t)}, ${c(e, t)} 1.75x, ${c(e, 2 * t)} 2x, ${c(e, 3 * t)} 3x`
              : ""
        "u" > typeof window &&
          ((window.lazySizesConfig = window.lazySizesConfig || {}),
          (window.lazySizesConfig.expFactor = 3),
          (window.lazySizesConfig.expand = 1e3),
          window.document.addEventListener("lazybeforeunveil", (e) => {
            let t = e.target
            if (t.dataset.pgTop) {
              for (let e of t.querySelectorAll("image"))
                e.setAttribute("href", e.dataset.href || "")
              e.preventDefault()
              return
            }
            let a = t._lazysizesWidth
            if (!a) return
            let { src: i } = t.dataset
            i &&
              ((t.dataset.src = i.startsWith(o) && s.test(i) ? c(i, a) : i),
              (t.dataset.srcset = u(i, a)))
          }))
        let d = ["alt"],
          p = ["alt"]
        var m = (0, i.pM)({
            __name: "CardContainer",
            props: {
              is: { default: "div" },
              to: {},
              externalTo: {},
              appearance: { default: "medium_horizontal" },
              approximateWidth: {},
              target: {},
              src: {},
              alt: {},
              srcsetOn: { type: Boolean, default: !0 },
              responsive: { type: Boolean },
              lazy: { type: Boolean, default: !0 },
              preload: { type: Boolean },
              placeholder: { type: Boolean },
              iconSrc: {},
              iconImageClass: {},
              imageClass: {},
            },
            setup(e) {
              let t = (0, i.KR)(),
                a = (0, i.KR)(),
                l = (0, i.EW)(() => t.value || e.appearance),
                o = (0, i.EW)(() => a.value || e.src),
                s = (0, i.EW)(() => {
                  if (e.srcsetOn && !e.lazy && o.value) {
                    let t = 160
                    return (
                      "icon" === e.appearance && (t = 90),
                      "big_horizontal" === e.appearance && (t *= 2),
                      e.approximateWidth && (t = e.approximateWidth),
                      u(o.value, t)
                    )
                  }
                  return ""
                }),
                c = (0, i.EW)(() => {
                  let t = []
                  return (
                    e.preload &&
                      o.value &&
                      t.push({
                        rel: "preload",
                        as: "image",
                        href: o.value,
                        imagesrcset: s.value,
                        fetchpriority: "high",
                      }),
                    { link: t }
                  )
                })
              return (
                (0, n.u)(c),
                (t, a) => (
                  (0, i.uX)(),
                  (0, i.Wv)(
                    (0, i.$y)(e.is),
                    (0, i.v6)(
                      e.is === r.A ? { to: e.to, externalTo: e.externalTo, target: e.target } : {},
                      {
                        class: {
                          [t.$style.cardContainer]: !0,
                          [t.$style.responsive]: e.responsive,
                          [t.$style.cardVertical]: "vertical" === l.value,
                          [t.$style.bigCard]: "big_horizontal" === l.value,
                          [t.$style.icon]: "icon" === l.value,
                          [t.$style.placeholder]: !!o.value || e.placeholder,
                        },
                      },
                    ),
                    {
                      default: (0, i.k6)(() => [
                        o.value
                          ? ((0, i.uX)(),
                            (0, i.CE)(
                              "img",
                              (0, i.v6)(
                                {
                                  key: e.lazy ? `${o.value}_${l.value}` : void 0,
                                  class: e.imageClass,
                                  "data-allow-mismatch": "",
                                  alt: e.alt,
                                },
                                e.lazy
                                  ? {
                                      src: o.value,
                                      class: [t.$style.img, "lazyloaded"],
                                      loading: "lazy",
                                    }
                                  : {
                                      src: o.value,
                                      class: [t.$style.img, "lazyloaded"],
                                      fetchpriority: "high",
                                      srcset: s.value,
                                    },
                                { itemprop: "image" },
                              ),
                              null,
                              16,
                              d,
                            ))
                          : (0, i.Q3)("", !0),
                        t.iconSrc
                          ? ((0, i.uX)(),
                            (0, i.CE)(
                              "img",
                              (0, i.v6)(
                                {
                                  key: e.lazy ? `${t.iconSrc}` : void 0,
                                  class: e.iconImageClass,
                                  "data-allow-mismatch": "",
                                  alt: e.alt,
                                },
                                e.lazy
                                  ? {
                                      src: t.iconSrc,
                                      class: [t.$style.img, "lazyloaded"],
                                      loading: "lazy",
                                    }
                                  : {
                                      src: t.iconSrc,
                                      class: [t.$style.img, "lazyloaded"],
                                      fetchpriority: "high",
                                    },
                                { itemprop: "image" },
                              ),
                              null,
                              16,
                              p,
                            ))
                          : (0, i.Q3)("", !0),
                        (0, i.RG)(t.$slots, "default"),
                      ]),
                      _: 3,
                    },
                    16,
                    ["class"],
                  )
                )
              )
            },
          }),
          g = a(97939)
        let v = {}
        v.$style = {
          cardContainer: "as_tL",
          icon: "ByCAJ",
          responsive: "NkQCK",
          bigCard: "Ge0uE",
          cardVertical: "Grkc1",
          placeholder: "Uk_Bh",
          img: "pUGtV",
          blink: "yTcZW",
        }
        var h = (0, g.default)(m, [["__cssModules", v]])
      },
      79660: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          A: function () {
            return h
          },
        }),
          a(17932),
          a(86204))
        var i = a(3144),
          n = a(76915),
          r = a(10906),
          l = a(87577),
          o = a(35584),
          s = a(30232),
          c = a(81236),
          u = a.p + "static/image/404.32c777b2.webp",
          d = a.p + "static/image/joystick-on-fire.07bef854.webp"
        let p = ["src", "alt"]
        var m = (0, i.pM)({
            __name: "ErrorContent",
            props: { type: {}, noRandomGame: { type: Boolean }, showButtons: { type: Boolean } },
            setup(e) {
              let t = (0, o.q)(),
                a = (0, n.lq)(),
                m = (0, i.EW)(() => ({
                  404: {
                    img: u,
                    imgAlt: t("errorContent.404_imgAlt"),
                    title: t("errorContent.404_title"),
                    text: t("errorContent.404_text"),
                    buttons: [
                      {
                        text: t("errorContent.404_back"),
                        link: { name: s.V2.MAIN },
                        interfaceTarget: "navigation-link",
                      },
                      !e.noRandomGame && {
                        text: t("errorContent.404_randomGame"),
                        interfaceTarget: "random-game",
                        link: { name: s.V2.RANDOM_GAME },
                      },
                    ].filter((e) => !!e),
                  },
                  500: {
                    img: d,
                    imgAlt: t("errorContent.500_imgAlt"),
                    title: t("errorContent.500_title"),
                    text: t("errorContent.500_text"),
                    buttons: [
                      {
                        text: t("errorContent.500_reload"),
                        link: a.fullPath,
                        interfaceTarget: "reload-page",
                      },
                      {
                        text: t("errorContent.500_back"),
                        link: { name: s.V2.MAIN },
                        interfaceTarget: "navigation-link",
                      },
                    ],
                  },
                })),
                g = (0, i.EW)(() => m.value[e.type] || m.value[500])
              return (e, t) => (
                (0, i.uX)(),
                (0, i.CE)(
                  "div",
                  { class: (0, i.C4)(e.$style.container) },
                  [
                    (0, i.Lk)(
                      "div",
                      { class: (0, i.C4)(e.$style.center) },
                      [
                        (0, i.Lk)(
                          "img",
                          { class: (0, i.C4)(e.$style.img), src: g.value.img, alt: g.value.imgAlt },
                          null,
                          10,
                          p,
                        ),
                        (0, i.Lk)(
                          "div",
                          { class: (0, i.C4)(e.$style.texts) },
                          [
                            (0, i.bF)(
                              c.A,
                              { is: "h2", type: "header", size: "m" },
                              {
                                default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(g.value.title), 1)]),
                                _: 1,
                              },
                            ),
                            (0, i.bF)(
                              c.A,
                              { type: "paragraph", size: "s" },
                              {
                                default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(g.value.text), 1)]),
                                _: 1,
                              },
                            ),
                          ],
                          2,
                        ),
                        e.showButtons
                          ? ((0, i.uX)(),
                            (0, i.CE)(
                              "div",
                              { key: 0, class: (0, i.C4)(e.$style.buttons) },
                              [
                                ((0, i.uX)(!0),
                                (0, i.CE)(
                                  i.FK,
                                  null,
                                  (0, i.pI)(
                                    g.value.buttons,
                                    (t, a) => (
                                      (0, i.uX)(),
                                      (0, i.Wv)(
                                        (0, i.$y)(0 === a ? r.A : l.A),
                                        {
                                          key: a,
                                          class: (0, i.C4)(e.$style.button_override),
                                          size: "l",
                                          interfaceTarget: t.interfaceTarget,
                                          to: t.link,
                                          label: t.text,
                                        },
                                        null,
                                        8,
                                        ["class", "interfaceTarget", "to", "label"],
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ],
                              2,
                            ))
                          : (0, i.Q3)("", !0),
                      ],
                      2,
                    ),
                  ],
                  2,
                )
              )
            },
          }),
          g = a(97939)
        let v = {}
        v.$style = {
          container: "Wn9Yy",
          center: "hHpvG",
          img: "jlcVs",
          texts: "hkQFP",
          buttons: "ARfaN",
          button_override: "dnz3V",
          buttonOverride: "dnz3V",
          "#": "QOCx0",
        }
        var h = (0, g.default)(m, [["__cssModules", v]])
      },
      98289: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return c
          },
        })
        var i = a(3144),
          n = a(10578)
        let r = ["src", "alt"]
        var l = (0, i.pM)({
            __name: "Icon",
            props: { name: {}, alt: {} },
            setup(e) {
              let t = (0, i.EW)(() => {
                  let t = n.P[e.name]
                  return "string" == typeof t
                    ? t
                    : (({ id: e, attrs: t }) => ({
                        render: () =>
                          (0, i.h)("svg", t, [(0, i.h)("use", { "xlink:href": a.svgSprite(e) })]),
                      }))(t)
                }),
                l = (0, i.EW)(() => e.alt || `${e.name} icon`)
              return (e, a) =>
                "string" != typeof t.value
                  ? ((0, i.uX)(),
                    (0, i.Wv)(
                      (0, i.$y)(t.value),
                      {
                        key: 0,
                        class: (0, i.C4)(e.$style.icon),
                        role: "img",
                        "aria-label": l.value,
                      },
                      null,
                      8,
                      ["class", "aria-label"],
                    ))
                  : ((0, i.uX)(),
                    (0, i.CE)(
                      "img",
                      {
                        key: 1,
                        src: t.value,
                        alt: l.value,
                        loading: "lazy",
                        class: (0, i.C4)(e.$style.icon),
                      },
                      null,
                      10,
                      r,
                    ))
            },
          }),
          o = a(97939)
        let s = {}
        s.$style = { icon: "fk6zU" }
        var c = (0, o.default)(l, [["__cssModules", s]])
      },
      39383: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return n
          },
        })
        var i = a(3144),
          n = (0, i.pM)({
            __name: "LazyHydration",
            props: { hydrate: { type: Function } },
            setup(e) {
              let t = (0, i.pM)({
                  render() {
                    return this.$slots.default?.()
                  },
                }),
                a = (0, i.$V)({ loader: () => Promise.resolve(t), hydrate: e.hydrate })
              return (e, t) => (
                (0, i.uX)(),
                (0, i.Wv)((0, i.R1)(a), null, {
                  default: (0, i.k6)(() => [(0, i.RG)(e.$slots, "default")]),
                  _: 3,
                })
              )
            },
          })
      },
      77138: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return s
          },
        })
        var i = a(3144),
          n = a(99952),
          r = (0, i.pM)({
            __name: "Link",
            props: {
              color: {},
              hoverAnimation: {},
              disabled: { type: Boolean },
              to: {},
              externalTo: {},
            },
            setup: (e) => (t, a) => (
              (0, i.uX)(),
              (0, i.Wv)(
                n.A,
                {
                  to: e.to,
                  externalTo: e.externalTo,
                  target: e.target,
                  class: (0, i.C4)([
                    t.$style.link,
                    e.color && t.$style[`color_${e.color}`],
                    e.hoverAnimation && t.$style[`hover_animation_${e.hoverAnimation}`],
                    e.disabled ? t.$style.disabled : "",
                  ]),
                  disabled: e.disabled,
                  onClick: e.onClick,
                },
                { default: (0, i.k6)(() => [(0, i.RG)(t.$slots, "default")]), _: 3 },
                8,
                ["to", "externalTo", "target", "class", "disabled", "onClick"],
              )
            ),
          }),
          l = a(97939)
        let o = {}
        o.$style = {
          "color_purple-500": "AVhWF",
          colorPurple500: "AVhWF",
          "color_purple-600": "DbhOo",
          colorPurple600: "DbhOo",
          color_golden: "KXyo8",
          colorGolden: "KXyo8",
          color_white: "gM_0P",
          colorWhite: "gM_0P",
          "color_white-80": "nncb7",
          colorWhite80: "nncb7",
          "color_white-60": "rfDtO",
          colorWhite60: "rfDtO",
          "color_white-40": "XrVcW",
          colorWhite40: "XrVcW",
          color_rainbow: "dOFPQ",
          colorRainbow: "dOFPQ",
          "color-change": "_vdd4",
          colorChange: "_vdd4",
          link: "Z4mIu",
          hover_animation_rainbow: "hrG_P",
          hoverAnimationRainbow: "hrG_P",
          disabled: "Vidyj",
        }
        var s = (0, l.default)(r, [["__cssModules", o]])
      },
      27986: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return o
          },
        })
        var i = a(3144)
        let n = ["aria-label"],
          r = ["aria-label"],
          l = ["aria-label"]
        var o = (0, i.pM)({
          __name: "Logo",
          props: { mode: {} },
          setup: (e) => (t, a) =>
            "short" === e.mode
              ? ((0, i.uX)(),
                (0, i.CE)(
                  "svg",
                  {
                    key: 0,
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 28 26",
                    "aria-label": t.$tr("logo.alt"),
                  },
                  [
                    ...(a[0] ||
                      (a[0] = [
                        (0, i.Lk)(
                          "path",
                          {
                            fill: "currentColor",
                            d: "M0 21.143V4h6.54c3.611 0 6.54 2.943 6.54 6.571 0 3.629-2.929 6.572-6.54 6.572H4.265v4zM6.113 8H4.265v5.143h1.848c1.536 0 2.56-1.143 2.56-2.572C8.673 9.143 7.649 8 6.113 8m14.778-4H28v13.4c0 3.829-2.758 6.6-6.568 6.6h-5.659v-4.286h5.63c1.337 0 2.332-1 2.332-2.343v-.228H20.89c-3.61 0-6.54-2.943-6.54-6.572S17.281 4 20.891 4m-2.132 6.571c0 1.429 1.023 2.572 2.559 2.572h2.417V8h-2.417c-1.536 0-2.56 1.143-2.56 2.571",
                          },
                          null,
                          -1,
                        ),
                      ])),
                  ],
                  8,
                  n,
                ))
              : "full" === e.mode
                ? ((0, i.uX)(),
                  (0, i.CE)(
                    "svg",
                    {
                      key: 1,
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 132 19",
                      "aria-label": t.$tr("logo.alt"),
                    },
                    [
                      ...(a[1] ||
                        (a[1] = [
                          (0, i.Lk)(
                            "path",
                            {
                              fill: "currentColor",
                              d: "M0 16.357V3.5h4.92a4.925 4.925 0 0 1 4.92 4.929 4.925 4.925 0 0 1-4.92 4.928H3.21v3zM4.6 6.5H3.208v3.857h1.39c1.156 0 1.926-.857 1.926-1.928 0-1.072-.77-1.929-1.926-1.929M14.764 13.357h-3.337V.5h3.337zM26.186 13.357h-4.92a4.925 4.925 0 0 1-4.921-4.928 4.925 4.925 0 0 1 4.92-4.929h4.92zm-4.6-3h1.39V6.5h-1.39c-1.155 0-1.925.857-1.925 1.929 0 1.071.77 1.928 1.925 1.928M32.735 18.5h-4.45v-3h4.236c1.134 0 1.968-.836 1.968-1.971v-.172h-6.204V3.5h3.21v6.857h2.994V3.5h3.21v10.243c0 2.743-2.097 4.757-4.964 4.757M44.246 3.5h5.348v10.05c0 2.871-2.075 4.95-4.942 4.95h-4.257v-3.214h4.236c1.005 0 1.754-.75 1.754-1.757v-.172h-2.14a4.925 4.925 0 0 1-4.92-4.928 4.925 4.925 0 0 1 4.92-4.929M42.64 8.429c0 1.071.77 1.928 1.926 1.928h1.818V6.5h-1.818c-1.156 0-1.926.857-1.926 1.929M60.968 13.357h-4.92a4.925 4.925 0 0 1-4.92-4.928 4.925 4.925 0 0 1 4.92-4.929h4.92zm-4.6-3h1.391V6.5h-1.39c-1.155 0-1.926.857-1.926 1.929 0 1.071.77 1.928 1.926 1.928M66.277 13.357h-3.209V3.5h9.948A4.395 4.395 0 0 1 77.4 7.893v5.464h-3.209V7.68c0-.643-.534-1.179-1.176-1.179h-1.177v6.857H68.63V6.5h-2.353zM88.67 13.357h-4.921a4.925 4.925 0 0 1-4.92-4.928 4.925 4.925 0 0 1 4.92-4.929h4.92zm-4.6-3h1.39V6.5h-1.39c-1.155 0-1.926.857-1.926 1.929 0 1.071.77 1.928 1.926 1.928M94.596 11.412a2.084 2.084 0 1 1-4.168.002 2.084 2.084 0 0 1 4.168-.002M120.876 13.357h-3.209V3.5h9.947A4.395 4.395 0 0 1 132 7.893v5.464h-3.209V7.68c0-.643-.535-1.179-1.177-1.179h-1.176v6.857h-3.209V6.5h-2.353zM100.546 13.385h4.249v-3h-3.929c-1.155 0-1.925-.857-1.925-1.928 0-1.072.77-1.929 1.925-1.929h3.929v-3h-4.249a4.925 4.925 0 0 0-4.92 4.929 4.925 4.925 0 0 0 4.92 4.928",
                            },
                            null,
                            -1,
                          ),
                          (0, i.Lk)(
                            "path",
                            {
                              fill: "currentColor",
                              "fill-rule": "evenodd",
                              d: "M111.13 13.537c2.823 0 5.112-2.297 5.112-5.13 0-2.834-2.289-5.131-5.112-5.131s-5.112 2.297-5.112 5.13c0 2.834 2.288 5.131 5.112 5.131m0-3.196a1.93 1.93 0 0 0 1.927-1.934 1.93 1.93 0 0 0-1.927-1.935 1.93 1.93 0 0 0-1.928 1.935c0 1.068.863 1.934 1.928 1.934",
                              "clip-rule": "evenodd",
                            },
                            null,
                            -1,
                          ),
                        ])),
                    ],
                    8,
                    r,
                  ))
                : ((0, i.uX)(),
                  (0, i.CE)(
                    "svg",
                    {
                      key: 2,
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "148",
                      height: "32",
                      fill: "none",
                      viewBox: "0 0 148 32",
                      "aria-label": t.$tr("logo.alt"),
                    },
                    [
                      ...(a[2] ||
                        (a[2] = [
                          (0, i.Lk)(
                            "path",
                            {
                              fill: "currentColor",
                              d: "M0 28.484v-21.1h8.105c4.476 0 8.106 3.623 8.106 8.089s-3.63 8.088-8.106 8.088H5.286v4.922zm7.577-16.176h-2.29v6.33h2.29c1.903 0 3.172-1.407 3.172-3.166s-1.27-3.164-3.172-3.164M24.598 23.56H19.1V2.463h5.498zm19.091 0h-8.106c-4.475 0-8.105-3.621-8.105-8.087s3.63-8.088 8.105-8.088h8.105zm-7.577-4.923h2.29v-6.33h-2.29c-1.903 0-3.172 1.407-3.172 3.165s1.269 3.165 3.172 3.165M54.754 32h-7.33v-4.923H54.4c1.868 0 3.243-1.372 3.243-3.235v-.281h-10.22V7.385h5.286v11.252h4.934V7.385h5.286v16.808c0 4.502-3.454 7.807-8.176 7.807M73.992 7.385h8.81v16.492c0 4.712-3.418 8.123-8.14 8.123h-7.014v-5.275h6.978c1.656 0 2.89-1.23 2.89-2.883v-.281h-3.524c-4.476 0-8.106-3.622-8.106-8.088s3.63-8.088 8.106-8.088m-2.643 8.088c0 1.758 1.268 3.164 3.171 3.164h2.996v-6.33H74.52c-1.903 0-3.171 1.407-3.171 3.165m30.466 8.088H93.71c-4.476 0-8.106-3.621-8.106-8.087s3.63-8.088 8.106-8.088h8.105zm-7.577-4.923h2.291v-6.33h-2.29c-1.904 0-3.172 1.407-3.172 3.165s1.268 3.165 3.171 3.165m16.599 4.923h-5.287V7.386h16.387c3.983 0 7.225 3.235 7.225 7.208v8.968h-5.286v-9.32a1.953 1.953 0 0 0-1.939-1.933h-1.938V23.56h-5.286V12.308h-3.876zm37.163 0h-8.105c-4.476 0-8.106-3.621-8.106-8.087s3.63-8.088 8.106-8.088H148zm-7.577-4.923h2.291v-6.33h-2.291c-1.903 0-3.171 1.407-3.171 3.165s1.268 3.165 3.171 3.165",
                            },
                            null,
                            -1,
                          ),
                        ])),
                    ],
                    8,
                    l,
                  )),
        })
      },
      99782: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return s
          },
        })
        var i = a(3144)
        let n = ["aria-hidden"]
        var r = (0, i.pM)({
            __name: "SeoOnly",
            props: { ariaHidden: { type: Boolean } },
            setup: (e) => (t, a) => (
              (0, i.uX)(),
              (0, i.CE)(
                "div",
                { class: (0, i.C4)(t.$style.seo_only), "aria-hidden": e.ariaHidden },
                [(0, i.RG)(t.$slots, "default")],
                10,
                n,
              )
            ),
          }),
          l = a(97939)
        let o = {}
        o.$style = { seo_only: "VDs2I", seoOnly: "VDs2I" }
        var s = (0, l.default)(r, [["__cssModules", o]])
      },
      94212: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return T
          },
        })
        var i = a(3144),
          n = a(20211),
          r = a(10906),
          l = a(98289),
          o = a(81236),
          s = a(35584),
          c = (0, i.pM)({
            __name: "ProviderButton",
            props: {
              color: {},
              size: {},
              id: {},
              providerDisplayName: {},
              disabled: { type: Boolean },
              onClick: { type: Function },
            },
            setup(e) {
              let t = (0, s.q)(),
                a = (0, i.EW)(() =>
                  "s" === e.size
                    ? e.providerDisplayName
                    : t("socialLogins.sign_in_with", { providerName: e.providerDisplayName }),
                )
              return (t, n) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  r.A,
                  {
                    interfaceTarget: `${e.id}-sign-in-button`,
                    color: e.color,
                    size: e.size,
                    width: "full",
                    disabled: e.disabled,
                    class: (0, i.C4)("s" === e.size && t.$style.small_button_override),
                    onClick: e.onClick,
                  },
                  {
                    default: (0, i.k6)(() => [
                      (0, i.bF)(l.A, { name: e.id }, null, 8, ["name"]),
                      (0, i.bF)(
                        o.A,
                        {
                          type: "label",
                          responsive: !1,
                          size: "s" === e.size ? "s" : "m",
                          accent: "",
                        },
                        { default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(a.value), 1)]), _: 1 },
                        8,
                        ["size"],
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["interfaceTarget", "color", "size", "disabled", "class", "onClick"],
                )
              )
            },
          }),
          u = a(97939)
        let d = {}
        d.$style = { small_button_override: "PECVP", smallButtonOverride: "PECVP", "#": "wcTXv" }
        let p = (0, u.default)(c, [["__cssModules", d]])
        var m = a(87743),
          g = a(97178),
          v = a(79316),
          h = a(92730),
          f = a(84608),
          _ = a(22065)
        let b = (0, n.nY)("appleAuth", () => {
            let e = (0, h.k)(),
              t = (0, v.G)(),
              { VUE_APP_APPLE_CLIENT_ID: a, VUE_APP_APPLE_REDIRECT: n } = (0, g.U)(),
              r = (0, i.KR)(!1),
              l = (0, i.KR)(!1),
              o = (0, i.KR)(),
              s = (0, i.KR)()
            return {
              initGlobalSignIn: async function () {
                if (!r.value) {
                  await (0, _.k)({
                    src: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
                    useExisting: !0,
                  })
                  try {
                    ;((o.value = await (0, f.n)()),
                      (s.value = crypto.randomUUID()),
                      window.AppleID?.auth.init({
                        clientId: a,
                        scope: "name email",
                        redirectURI: n,
                        nonce: o.value.hashedNonce,
                        state: s.value,
                        usePopup: !0,
                      }),
                      (r.value = !0))
                  } catch (e) {
                    console.error("Apple auth initialization error:", e)
                  }
                }
              },
              signIn: async function (a) {
                let i
                if (window.AppleID && r.value && !l.value) {
                  l.value = !0
                  try {
                    let e = await window.AppleID.auth.signIn()
                    if (e.authorization.state !== s.value)
                      throw Error("Invalid state returned from Apple sign-in")
                    let t = await fetch(n, {
                      method: "POST",
                      headers: { "content-type": "application/json" },
                      credentials: "include",
                      body: JSON.stringify({
                        credential: e.authorization.id_token,
                        user: e.user,
                        nonce: o.value?.rawNonce,
                      }),
                    })
                    t.status > 399 && (i = (await t.json()).message)
                  } catch (e) {
                    if (
                      ["popup_closed_by_user", "user_cancelled_authorize"].includes(
                        (i = e.message || e.error),
                      )
                    )
                      return
                  } finally {
                    l.value = !1
                  }
                  ;(await e.fetchUserInfo(),
                    t.logEvent({
                      event: "custom_event",
                      eventName: "login",
                      action: e.isAuthorized ? "success" : "fail",
                    }),
                    a(e.isAuthorized, i))
                }
              },
              initialized: r,
              isSigningIn: l,
            }
          }),
          y = (0, n.nY)("microsoftAuth", () => {
            let e = (0, h.k)(),
              t = (0, v.G)(),
              { VUE_APP_MSAL_CLIENT_ID: n, VUE_APP_MSAL_REDIRECT: r } = (0, g.U)(),
              l = (0, i.KR)(!1),
              o = (0, i.KR)(!1),
              s = (0, i.IJ)(),
              c = (0, i.KR)()
            return {
              initGlobalSignIn: async function () {
                if (!l.value && !s.value) {
                  c.value = await (0, f.n)()
                  let { PublicClientApplication: e } = await a.e("1988").then(a.bind(a, 31615))
                  ;((s.value = new e({
                    auth: {
                      clientId: n,
                      redirectUri: `${window.location.origin}/ms-auth-callback.html`,
                    },
                  })),
                    await s.value.initialize(),
                    (l.value = !0))
                }
              },
              signIn: async function (a) {
                let i
                if (s.value && l.value && !o.value) {
                  o.value = !0
                  try {
                    let { idToken: e } = await s.value.loginPopup({
                        scopes: ["openid", "profile", "email"],
                        prompt: "select_account",
                        nonce: c.value?.hashedNonce,
                      }),
                      t = await fetch(r, {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        credentials: "include",
                        body: JSON.stringify({ credential: e, nonce: c.value?.rawNonce }),
                      })
                    t.status > 399 && (i = (await t.json()).message)
                  } catch (e) {
                    if ("user_cancelled: User cancelled the flow." === (i = e.message)) return
                  } finally {
                    o.value = !1
                  }
                  ;(await e.fetchUserInfo(),
                    t.logEvent({
                      event: "custom_event",
                      eventName: "login",
                      action: e.isAuthorized ? "success" : "fail",
                    }),
                    a(e.isAuthorized, i))
                }
              },
              initialized: l,
              isSigningIn: o,
            }
          })
        var w = a(3231),
          k = a(81865),
          C = (0, i.pM)({
            __name: "GoogleAuth",
            props: { onFinish: { type: Function }, size: {} },
            setup(e) {
              let t = (0, v.G)(),
                a = (0, k.k)(),
                { initialized: r } = (0, n.bP)(a),
                l = (0, i.KR)(),
                o = () => {
                  window.google &&
                    l.value &&
                    window.google.accounts.id.renderButton(l.value, {
                      type: "standard",
                      text: "signin_with",
                      theme: "outline",
                      shape: "pill",
                      size: "large",
                      logo_alignment: "left",
                      width: "s" === e.size ? 292 : 320,
                      state: JSON.stringify({ returnURL: window.location.href }),
                      click_listener: s,
                    })
                }
              function s() {
                ;(t.logInterfaceEvents({
                  eventName: "interface_click",
                  interface_target: "google-sign-in-button",
                }),
                  a.setOnFinishCallback(e.onFinish))
              }
              return (
                (0, i.wB)(r, o),
                (0, i.sV)(() => {
                  r.value && o()
                }),
                (t, a) => (
                  (0, i.uX)(),
                  (0, i.CE)(
                    "div",
                    {
                      ref_key: "googleBtn",
                      ref: l,
                      class: (0, i.C4)({
                        [t.$style.small_button]: "s" === e.size,
                        [t.$style.large_button]: "l" === e.size,
                      }),
                    },
                    null,
                    2,
                  )
                )
              )
            },
          })
        let E = {}
        E.$style = {
          small_button: "SatUC",
          smallButton: "SatUC",
          large_button: "mG6iH",
          largeButton: "mG6iH",
        }
        let A = (0, u.default)(C, [["__cssModules", E]])
        var x = (0, i.pM)({
          __name: "SocialLogins",
          props: { loginSource: {}, type: {}, onFinish: { type: Function } },
          setup(e) {
            let t = (0, v.G)(),
              a = (0, m.C)(),
              r = (0, w.W)(),
              l = y(),
              o = b(),
              { initialized: c, isSigningIn: u } = (0, n.bP)(l),
              { initialized: d, isSigningIn: g } = (0, n.bP)(o),
              h = (0, s.q)(),
              f = (0, i.EW)(() => ("full" === e.type ? "l" : "s")),
              _ = (0, i.EW)(() => ("full" === e.type ? "carbon-400" : "carbon-200"))
            function k(a, i, n) {
              t.logEvent({
                event: "custom_event",
                eventName: i ? "auth_success" : "auth_failed",
                dimension1: e.loginSource,
                dimension2: a,
                dimension3: n?.substring(0, 100),
              })
              let l = { "User is banned": h("socialLogins.errorUserBanned") },
                o = h("socialLogins.errorDefaultDescription"),
                s = l[n || ""] || o
              if (!i) {
                let e = {
                  type: "error-message",
                  title: h("socialLogins.errorToastTitle"),
                  description: s,
                  showTimeoutMs: 4e4,
                  priority: 2,
                }
                r.showToast(e)
              }
              e.onFinish?.(i)
            }
            function C(e, t) {
              k("google", e, t)
            }
            function E() {
              l.signIn((e, t) => {
                k("microsoft", e, t)
              })
            }
            function x() {
              o.signIn((e, t) => {
                k("apple", e, t)
              })
            }
            return (
              (0, i.sV)(() => {
                ;(o.initGlobalSignIn(), a.isNativeIosEnv || l.initGlobalSignIn())
              }),
              (t, n) => (
                (0, i.uX)(),
                (0, i.CE)(
                  "div",
                  {
                    class: (0, i.C4)(
                      "full" === e.type ? t.$style.buttons_full : t.$style.buttons_compact,
                    ),
                  },
                  [
                    (0, i.bF)(A, { size: f.value, onFinish: C }, null, 8, ["size"]),
                    (0, i.Lk)(
                      "div",
                      { class: (0, i.C4)(t.$style.rest_providers) },
                      [
                        (0, i.R1)(a).isNativeIosEnv
                          ? (0, i.Q3)("", !0)
                          : ((0, i.uX)(),
                            (0, i.Wv)(
                              p,
                              {
                                key: 0,
                                id: "microsoft",
                                color: _.value,
                                size: f.value,
                                disabled: !(0, i.R1)(c) || (0, i.R1)(u),
                                providerDisplayName: "Microsoft",
                                onClick: E,
                              },
                              null,
                              8,
                              ["color", "size", "disabled"],
                            )),
                        (0, i.bF)(
                          p,
                          {
                            id: "apple",
                            color: _.value,
                            size: f.value,
                            disabled: !(0, i.R1)(d) || (0, i.R1)(g),
                            providerDisplayName: "Apple",
                            onClick: x,
                          },
                          null,
                          8,
                          ["color", "size", "disabled"],
                        ),
                      ],
                      2,
                    ),
                  ],
                  2,
                )
              )
            )
          },
        })
        let R = {}
        R.$style = {
          buttons_full: "nKYhN",
          buttonsFull: "nKYhN",
          buttons_compact: "nlu36",
          buttonsCompact: "nlu36",
          rest_providers: "oyMc_",
          restProviders: "oyMc_",
        }
        var T = (0, u.default)(x, [["__cssModules", R]])
      },
      42763: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return d
          },
        })
        var i = a(3144),
          n = a(20211),
          r = a(87743),
          l = a(61718),
          o = a(31928),
          s = (0, i.pM)({
            __name: "Tooltip",
            props: {
              content: {},
              position: { default: "top" },
              offset: { default: 8 },
              triggerClass: {},
              showOnMobile: { type: Boolean, default: !1 },
            },
            setup(e, { expose: t }) {
              let a = (0, r.C)(),
                { platform: s } = (0, n.bP)(a),
                c = (0, i.KR)(null),
                u = (0, i.KR)(null),
                {
                  isVisible: d,
                  showTooltip: p,
                  hideTooltip: m,
                  adjustedPosition: g,
                  tooltipStyle: v,
                } = (0, o.f)({
                  trigger: c,
                  hideDelayMs: 100,
                  tooltip: u,
                  additionalOffset: e.offset,
                  position: e.position,
                })
              t({ showTooltip: p, hideTooltip: m })
              let h = (0, i.EW)(
                () => e.content && (e.showOnMobile || "desktop" === s.value) && d.value,
              )
              return (e, t) => (
                (0, i.uX)(),
                (0, i.CE)(
                  i.FK,
                  null,
                  [
                    (0, i.Lk)(
                      "span",
                      {
                        ref_key: "trigger",
                        ref: c,
                        class: (0, i.C4)([(0, i.R1)(l.A).triggerElement, e.triggerClass]),
                        onMouseenter: t[0] || (t[0] = (...e) => (0, i.R1)(p) && (0, i.R1)(p)(...e)),
                        onMouseleave: t[1] || (t[1] = (...e) => (0, i.R1)(m) && (0, i.R1)(m)(...e)),
                        onFocus: t[2] || (t[2] = (...e) => (0, i.R1)(p) && (0, i.R1)(p)(...e)),
                        onBlur: t[3] || (t[3] = (...e) => (0, i.R1)(m) && (0, i.R1)(m)(...e)),
                      },
                      [(0, i.RG)(e.$slots, "default")],
                      34,
                    ),
                    h.value
                      ? ((0, i.uX)(),
                        (0, i.Wv)(i.Im, { key: 0, to: "body" }, [
                          (0, i.Lk)(
                            "div",
                            {
                              ref_key: "tooltip",
                              ref: u,
                              class: (0, i.C4)([
                                e.$style.tooltip,
                                (0, i.R1)(l.A).tooltip,
                                e.$style[`tooltip-${(0, i.R1)(g)}`],
                              ]),
                              style: (0, i.Tr)((0, i.R1)(v)),
                            },
                            [
                              (0, i.eW)((0, i.v_)(e.content) + " ", 1),
                              t[4] ||
                                (t[4] = (0, i.Lk)(
                                  "svg",
                                  { width: "28", height: "10", viewBox: "0 0 28 10", fill: "none" },
                                  [
                                    (0, i.Lk)("path", {
                                      d: "M0 0L27.997 0.000769947C20.9992 0.00115493 18.3931 4.00878 14.0008 10C9.60586 4.00802 6.78923 0.000172349 0 0Z",
                                      fill: "var(--electric-lime)",
                                    }),
                                  ],
                                  -1,
                                )),
                            ],
                            6,
                          ),
                        ]))
                      : (0, i.Q3)("", !0),
                  ],
                  64,
                )
              )
            },
          }),
          c = a(97939)
        let u = {}
        u.$style = {
          tooltip: "nixyo",
          "tooltip-top": "pCOoY",
          tooltipTop: "pCOoY",
          "tooltip-bottom": "EsCOe",
          tooltipBottom: "EsCOe",
          "tooltip-left": "abrb1",
          tooltipLeft: "abrb1",
          "tooltip-right": "yYt9r",
          tooltipRight: "yYt9r",
        }
        var d = (0, c.default)(s, [["__cssModules", u]])
      },
      81236: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return o
          },
        })
        var i = a(3144),
          n = (0, i.pM)({
            __name: "Typography",
            props: {
              type: { default: "paragraph" },
              is: { default: "span" },
              size: {},
              accent: { type: Boolean },
              semibold: { type: Boolean },
              bold: { type: Boolean },
              responsive: { type: Boolean, default: !0 },
            },
            setup: (e) => (t, a) => (
              (0, i.uX)(),
              (0, i.Wv)(
                (0, i.$y)(e.is),
                {
                  class: (0, i.C4)([
                    t.$style.typography,
                    {
                      [t.$style.accent]: e.accent,
                      [t.$style.semibold]: e.semibold,
                      [t.$style.bold]: e.bold,
                      [t.$style.responsive]: e.responsive,
                    },
                    t.$style[`${e.type}_${e.size}`],
                  ]),
                },
                { default: (0, i.k6)(() => [(0, i.RG)(t.$slots, "default")]), _: 3 },
                8,
                ["class"],
              )
            ),
          }),
          r = a(97939)
        let l = {}
        l.$style = {
          typography: "lGeKc",
          caption_xs: "pcmGV",
          captionXs: "pcmGV",
          accent: "hiFVh",
          "header_all-caps": "ixT2Y",
          headerAllCaps: "ixT2Y",
          paragraph_xxxl: "_R23q",
          paragraphXxxl: "_R23q",
          paragraph_xxl: "hyfWh",
          paragraphXxl: "hyfWh",
          paragraph_xl: "KBx9V",
          paragraphXl: "KBx9V",
          "paragraph_all-caps": "l1T0L",
          paragraphAllCaps: "l1T0L",
          label_xxxl: "Rptpr",
          labelXxxl: "Rptpr",
          label_xxl: "p1Dhq",
          labelXxl: "p1Dhq",
          label_xl: "FzTAE",
          labelXl: "FzTAE",
          "label_all-caps": "d7ctk",
          labelAllCaps: "d7ctk",
          caption_xxxl: "wP_Bx",
          captionXxxl: "wP_Bx",
          caption_xxl: "EcR1I",
          captionXxl: "EcR1I",
          caption_xl: "MD1yy",
          captionXl: "MD1yy",
          caption_l: "SJ9lC",
          captionL: "SJ9lC",
          paragraph_l: "PPJuT",
          paragraphL: "PPJuT",
          paragraph_m: "IcsTQ",
          paragraphM: "IcsTQ",
          paragraph_s: "fTslZ",
          paragraphS: "fTslZ",
          paragraph_xs: "WjhNL",
          paragraphXs: "WjhNL",
          label_l: "DZNLz",
          labelL: "DZNLz",
          label_m: "FPu4F",
          labelM: "FPu4F",
          label_s: "l6zjh",
          labelS: "l6zjh",
          label_xs: "NrJPp",
          labelXs: "NrJPp",
          caption_s: "texVl",
          captionS: "texVl",
          caption_m: "Qf3t5",
          captionM: "Qf3t5",
          "caption_all-caps": "YXMYa",
          captionAllCaps: "YXMYa",
          header_xxxl: "BCysT",
          headerXxxl: "BCysT",
          header_xxl: "j5VZs",
          headerXxl: "j5VZs",
          header_xl: "nS8A5",
          headerXl: "nS8A5",
          header_l: "clztK",
          headerL: "clztK",
          header_m: "qYvzA",
          headerM: "qYvzA",
          header_s: "BAqaC",
          headerS: "BAqaC",
          header_xs: "V0wvp",
          headerXs: "V0wvp",
          responsive: "gmXBd",
          semibold: "Ahpss",
          bold: "qf76s",
        }
        var o = (0, r.default)(n, [["__cssModules", l]])
      },
      26611: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return tX
          },
        })
        var i = a(3144),
          n = a(20211),
          r = a(76915)
        ;(a(17932), a(96466))
        var l = a(81236),
          o = (0, i.pM)({
            __name: "Copyright",
            setup: (e) => (e, t) => (
              (0, i.uX)(),
              (0, i.Wv)(
                l.A,
                {
                  is: "div",
                  type: "paragraph",
                  size: "xs",
                  class: (0, i.C4)(e.$style.copyright_override),
                },
                {
                  default: (0, i.k6)(() => [
                    (0, i.eW)(
                      (0, i.v_)(
                        e.$tr("navigation.copyright", { year: String(new Date().getFullYear()) }),
                      ),
                      1,
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["class"],
              )
            ),
          }),
          s = a(97939)
        let c = {}
        c.$style = { copyright_override: "M9n9S", copyrightOverride: "M9n9S", "#": "i2Gyj" }
        let u = (0, s.default)(o, [["__cssModules", c]])
        var d = a(77138),
          p = a(62656),
          m = a(57550),
          g = a(30232),
          v = a(4911),
          h = a(99952),
          f = a(98289),
          _ = (0, i.pM)({
            __name: "LinkSwitcher",
            props: {
              title: {},
              icon: {},
              to: {},
              externalTo: {},
              isSelected: { type: Boolean },
              dataInterfaceTarget: {},
              target: {},
              roundIcon: { type: Boolean },
            },
            emits: ["click"],
            setup:
              (e, { emit: t }) =>
              (a, n) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  (0, i.$y)(e.isSelected ? "div" : h.A),
                  {
                    class: (0, i.C4)([a.$style.link, { [a.$style.selected]: e.isSelected }]),
                    "data-interface-target": e.dataInterfaceTarget,
                    to: e.to,
                    target: e.target,
                    externalTo: e.externalTo,
                    disabled: e.isSelected,
                    onClick: n[0] || (n[0] = (e) => t("click", e)),
                  },
                  {
                    default: (0, i.k6)(() => [
                      (0, i.bF)(
                        f.A,
                        {
                          name: e.icon,
                          alt: `switch_to_${e.icon}`,
                          class: (0, i.C4)([a.$style.icon, e.roundIcon && a.$style.round_icon]),
                        },
                        null,
                        8,
                        ["name", "alt", "class"],
                      ),
                      (0, i.bF)(
                        l.A,
                        { type: "label", size: "xs", accent: "", responsive: !1 },
                        { default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(a.title), 1)]), _: 1 },
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class", "data-interface-target", "to", "target", "externalTo", "disabled"],
                )
              ),
          })
        let b = {}
        b.$style = {
          link: "MzFpr",
          selected: "oH46A",
          icon: "fZIE8",
          round_icon: "XqbXB",
          roundIcon: "XqbXB",
        }
        let y = (0, s.default)(_, [["__cssModules", b]])
        var w = a(99561),
          k = (0, i.pM)({
            __name: "LocaleSwitcher",
            props: { locale: {}, href: {}, isSelected: { type: Boolean } },
            emits: ["click"],
            setup(e, { emit: t }) {
              let a = (0, i.EW)(() => w.vi[e.locale])
              return (n, r) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  y,
                  {
                    title: a.value,
                    icon: n.locale,
                    externalTo: e.href,
                    dataInterfaceTarget: "switch-locale",
                    isSelected: e.isSelected,
                    roundIcon: "",
                    onClick: r[0] || (r[0] = (a) => t("click", e.locale)),
                  },
                  null,
                  8,
                  ["title", "icon", "externalTo", "isSelected"],
                )
              )
            },
          }),
          C = (0, i.pM)({
            __name: "LocaleSwitchersList",
            props: { languageLinks: {} },
            setup(e) {
              let t = (0, m.Cf)(),
                { getLocalizedUrls: a } = (0, p.z)(),
                n = (0, r.lq)(),
                l = (0, i.EW)(() => n.meta.noLocaleInRoute),
                o = (0, i.EW)(() => {
                  let i = t.getSupportedLocales(),
                    n = e.languageLinks || (l.value ? a({ forRoute: { name: g.V2.MAIN } }) : a())
                  return i.map((e) => ({
                    href: n[e],
                    locale: e,
                    isSelected: e === t.currentLocale.value,
                  }))
                })
              function s(e) {
                e !== t.currentLocale.value && (t.setPreferredLocale(e), (0, v.wr)(e))
              }
              return (e, t) => (
                (0, i.uX)(),
                (0, i.CE)(
                  "div",
                  { class: (0, i.C4)(e.$style.locale_switchers) },
                  [
                    ((0, i.uX)(!0),
                    (0, i.CE)(
                      i.FK,
                      null,
                      (0, i.pI)(
                        o.value,
                        ({ locale: e, href: t, isSelected: a }) => (
                          (0, i.uX)(),
                          (0, i.Wv)(
                            k,
                            { key: e, locale: e, href: t, isSelected: a, onClick: s },
                            null,
                            8,
                            ["locale", "href", "isSelected"],
                          )
                        ),
                      ),
                      128,
                    )),
                  ],
                  2,
                )
              )
            },
          })
        let E = {}
        E.$style = { locale_switchers: "AONqH", localeSwitchers: "AONqH" }
        let A = (0, s.default)(C, [["__cssModules", E]])
        var x = a(8011),
          R = a(35584),
          T = a(78811),
          S = a(29023),
          $ = a(87743),
          L = a(97178),
          P = a.p + "static/svg/android_image.2c9435a8.svg"
        let M = ["src"]
        var I = (0, i.pM)({
          __name: "AndroidBadge",
          setup(e) {
            let { VUE_APP_ANDROID_APP_URL: t } = (0, L.U)()
            return (e, a) => (
              (0, i.uX)(),
              (0, i.Wv)(
                h.A,
                {
                  externalTo: (0, i.R1)(t),
                  target: "_blank",
                  class: (0, i.C4)(e.$style.android_link),
                },
                {
                  default: (0, i.k6)(() => [
                    (0, i.Lk)(
                      "img",
                      {
                        src: (0, i.R1)(P),
                        alt: "Playgama Android",
                        loading: "lazy",
                        class: (0, i.C4)(e.$style.android_badge),
                      },
                      null,
                      10,
                      M,
                    ),
                    (0, i.bF)(
                      l.A,
                      { size: "s", class: (0, i.C4)(e.$style.android_link_desc), accent: "" },
                      {
                        default: (0, i.k6)(() => [
                          (0, i.eW)((0, i.v_)(e.$tr("navigation.android_app_link")), 1),
                        ]),
                        _: 1,
                      },
                      8,
                      ["class"],
                    ),
                    (0, i.bF)(
                      f.A,
                      { name: "chevron-right", class: (0, i.C4)(e.$style.android_link_icon) },
                      null,
                      8,
                      ["class"],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["externalTo", "class"],
              )
            )
          },
        })
        let O = {}
        O.$style = {
          android_link: "Le7es",
          androidLink: "Le7es",
          android_badge: "M2go1",
          androidBadge: "M2go1",
          android_link_icon: "KWdTT",
          androidLinkIcon: "KWdTT",
          android_link_desc: "CgvI3",
          androidLinkDesc: "CgvI3",
        }
        let B = (0, s.default)(I, [["__cssModules", O]])
        var F = (0, i.pM)({
          __name: "Footer",
          props: { languageLinks: {}, additionalCategories: {} },
          setup(e) {
            let t = (0, R.q)(),
              a = (0, $.C)(),
              { mainData: n } = (0, T.G)(),
              r = (0, i.EW)(() => (0, S.lw)(t)),
              o = (0, i.EW)(() => n.value.menuHighlightCategoriesList || []),
              s = (0, i.EW)(() => [
                ...o.value.map(({ title: e, location: t }) => ({
                  title: e,
                  to: t,
                  dataInterfaceTarget: "category",
                })),
                {
                  title: t("navigation.random"),
                  to: { name: g.V2.RANDOM_GAME },
                  dataInterfaceTarget: "random-game",
                },
                { title: r.value.allTags.title, to: r.value.allTags.to },
                { title: r.value.allSeries.title, to: r.value.allSeries.to },
              ]),
              { getCategoryRoute: c } = (0, x.j)(),
              p = (0, i.EW)(() =>
                n.value.menuCategoriesList?.map(({ title: e, location: t }) => ({
                  title: e,
                  to: t,
                })),
              ),
              m = (0, i.EW)(() =>
                e.additionalCategories?.map(({ title: e, hru: t, categoryType: a }) => ({
                  title: e,
                  to: c({ hru: t, type: a }),
                })),
              ),
              v = (0, i.EW)(() => [
                ...(m.value || p.value || []),
                { title: r.value.allGames.title, to: r.value.allGames.to },
              ]),
              h = (0, i.EW)(() => [
                { title: t("navigation.blog"), externalTo: S.xo, target: "_blank" },
                ...(0, S.Tl)(t),
              ])
            function f() {
              window.googlefc?.showRevocationMessage?.()
            }
            return (t, n) => (
              (0, i.uX)(),
              (0, i.CE)(
                "div",
                { class: (0, i.C4)(t.$style.footer), "data-interface-section": "footer" },
                [
                  (0, i.R1)(a).isNativeAppEnv
                    ? (0, i.Q3)("", !0)
                    : ((0, i.uX)(),
                      (0, i.Wv)(
                        B,
                        { key: 0, class: (0, i.C4)(t.$style.android_badge_override) },
                        null,
                        8,
                        ["class"],
                      )),
                  (0, i.R1)(a).isAppEnv
                    ? (0, i.Q3)("", !0)
                    : ((0, i.uX)(),
                      (0, i.CE)(
                        "div",
                        {
                          key: 1,
                          class: (0, i.C4)([t.$style.links_group, t.$style.links_menu_highlight]),
                        },
                        [
                          (0, i.bF)(
                            l.A,
                            {
                              is: "ul",
                              type: "paragraph",
                              size: "xs",
                              class: (0, i.C4)(t.$style.links),
                            },
                            {
                              default: (0, i.k6)(() => [
                                ((0, i.uX)(!0),
                                (0, i.CE)(
                                  i.FK,
                                  null,
                                  (0, i.pI)(
                                    s.value,
                                    (e) => (
                                      (0, i.uX)(),
                                      (0, i.CE)("li", { key: e.title }, [
                                        (0, i.bF)(
                                          d.A,
                                          {
                                            to: e.to,
                                            "data-interface-target":
                                              e.dataInterfaceTarget || "navigation-link",
                                            class: (0, i.C4)(t.$style.links_item),
                                            color: "white-60",
                                          },
                                          {
                                            default: (0, i.k6)(() => [
                                              (0, i.eW)((0, i.v_)(e.title), 1),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["to", "data-interface-target", "class"],
                                        ),
                                      ])
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                              _: 1,
                            },
                            8,
                            ["class"],
                          ),
                        ],
                        2,
                      )),
                  (0, i.R1)(a).isAppEnv
                    ? (0, i.Q3)("", !0)
                    : ((0, i.uX)(),
                      (0, i.CE)(
                        "div",
                        { key: 2, class: (0, i.C4)(t.$style.main_links) },
                        [
                          (0, i.Lk)(
                            "div",
                            {
                              class: (0, i.C4)([
                                t.$style.links_group,
                                t.$style.links_topic_categories,
                              ]),
                            },
                            [
                              (0, i.bF)(
                                l.A,
                                {
                                  is: "ul",
                                  type: "paragraph",
                                  size: "xs",
                                  class: (0, i.C4)(t.$style.links),
                                },
                                {
                                  default: (0, i.k6)(() => [
                                    ((0, i.uX)(!0),
                                    (0, i.CE)(
                                      i.FK,
                                      null,
                                      (0, i.pI)(
                                        v.value,
                                        (e) => (
                                          (0, i.uX)(),
                                          (0, i.CE)("li", { key: e.title }, [
                                            (0, i.bF)(
                                              d.A,
                                              {
                                                to: e.to,
                                                class: (0, i.C4)(t.$style.links_item),
                                                color: "white-60",
                                                "data-interface-target": "navigation-link",
                                              },
                                              {
                                                default: (0, i.k6)(() => [
                                                  (0, i.eW)((0, i.v_)(e.title), 1),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["to", "class"],
                                            ),
                                          ])
                                        ),
                                      ),
                                      128,
                                    )),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["class"],
                              ),
                            ],
                            2,
                          ),
                          (0, i.Lk)(
                            "div",
                            { class: (0, i.C4)(t.$style.links_group) },
                            [
                              (0, i.bF)(
                                l.A,
                                {
                                  is: "ul",
                                  type: "paragraph",
                                  size: "xs",
                                  class: (0, i.C4)(t.$style.links),
                                },
                                {
                                  default: (0, i.k6)(() => [
                                    ((0, i.uX)(!0),
                                    (0, i.CE)(
                                      i.FK,
                                      null,
                                      (0, i.pI)(
                                        h.value,
                                        (e) => (
                                          (0, i.uX)(),
                                          (0, i.CE)("li", { key: e.title }, [
                                            (0, i.bF)(
                                              d.A,
                                              {
                                                externalTo: e.externalTo,
                                                to: e.to,
                                                target: e.target,
                                                class: (0, i.C4)(t.$style.links_item),
                                                color: "white-60",
                                                "data-interface-target":
                                                  e.dataInterfaceTarget || "navigation-link",
                                              },
                                              {
                                                default: (0, i.k6)(() => [
                                                  (0, i.eW)((0, i.v_)(e.title), 1),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              [
                                                "externalTo",
                                                "to",
                                                "target",
                                                "class",
                                                "data-interface-target",
                                              ],
                                            ),
                                          ])
                                        ),
                                      ),
                                      128,
                                    )),
                                    (0, i.Lk)("li", null, [
                                      (0, i.bF)(
                                        d.A,
                                        {
                                          externalTo: "about:blank",
                                          class: (0, i.C4)(t.$style.links_item),
                                          color: "white-60",
                                          "data-interface-target": "privacy-choices",
                                          onClick: (0, i.D$)(f, ["prevent"]),
                                        },
                                        {
                                          default: (0, i.k6)(() => [
                                            (0, i.eW)(
                                              (0, i.v_)(t.$tr("navigation.privacy_choices")),
                                              1,
                                            ),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["class"],
                                      ),
                                    ]),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["class"],
                              ),
                            ],
                            2,
                          ),
                        ],
                        2,
                      )),
                  (0, i.R1)(a).isAppEnv
                    ? (0, i.Q3)("", !0)
                    : ((0, i.uX)(),
                      (0, i.Wv)(
                        l.A,
                        {
                          key: 3,
                          is: "div",
                          type: "paragraph",
                          size: "xs",
                          class: (0, i.C4)(t.$style.other),
                        },
                        {
                          default: (0, i.k6)(() => [
                            (0, i.bF)(
                              A,
                              {
                                languageLinks: e.languageLinks,
                                class: (0, i.C4)(t.$style.language_override),
                              },
                              null,
                              8,
                              ["languageLinks", "class"],
                            ),
                            (0, i.R1)(a).isAppEnv
                              ? (0, i.Q3)("", !0)
                              : ((0, i.uX)(),
                                (0, i.Wv)(
                                  u,
                                  { key: 0, class: (0, i.C4)(t.$style.copyright_link_override) },
                                  null,
                                  8,
                                  ["class"],
                                )),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"],
                      )),
                ],
                2,
              )
            )
          },
        })
        let D = {}
        D.$style = {
          footer: "LRhum",
          language_override: "mzocs",
          languageOverride: "mzocs",
          "#": "tZ9_s",
          main_links: "mB6Qj",
          mainLinks: "mB6Qj",
          links_group: "jXmBC",
          linksGroup: "jXmBC",
          android_badge_override: "LHDeG",
          androidBadgeOverride: "LHDeG",
          other: "YhM4p",
          links: "Z0A6J",
          links_item: "l6FQ4",
          linksItem: "l6FQ4",
          copyright_link_override: "oxRPs",
          copyrightLinkOverride: "oxRPs",
          links_menu_highlight: "uWcFK",
          linksMenuHighlight: "uWcFK",
          links_topic_categories: "pbZZO",
          linksTopicCategories: "pbZZO",
        }
        let W = (0, s.default)(F, [["__cssModules", D]])
        var N = a(10906),
          G = a(27986),
          U = a(88789),
          V = a(59103),
          z = a(92730)
        a(52093)
        var H = a(28063),
          X = a(83827)
        let K = ["placeholder"]
        var q = (0, i.pM)({
          __name: "SearchInput",
          props: { placeholder: {}, buttonText: {}, short: { type: Boolean } },
          emits: ["focus", "update:modelValue", "enter"],
          setup(e, { expose: t, emit: a }) {
            let n = (0, i.rk)("input"),
              r = (0, i.KR)(""),
              l = (0, i.KR)(!0),
              o = (0, i.EW)(() => e.short),
              s = (0, X.Q0)((e) => {
                a("update:modelValue", e)
              }, 500)
            function c(e) {
              let t = e.target
              ;((l.value = r.value.trim().length <= 1),
                "" === t.value ? a("update:modelValue", "") : s(r.value))
            }
            return (
              (0, i.wB)(o, (e) => {
                e && ((r.value = ""), (l.value = !0), a("update:modelValue", r.value))
              }),
              t({
                focus: function () {
                  n.value?.focus()
                },
              }),
              (0, H.Ta5)("Enter", () => {
                r.value.trim().length > 0 && a("enter", r.value.trim())
              }),
              (t, a) => (
                (0, i.uX)(),
                (0, i.CE)(
                  "div",
                  { class: (0, i.C4)([t.$style.search_form_input, e.short && t.$style.short]) },
                  [
                    (0, i.bF)(f.A, { name: "search", class: (0, i.C4)(t.$style.icon) }, null, 8, [
                      "class",
                    ]),
                    (0, i.bo)(
                      (0, i.Lk)(
                        "input",
                        {
                          id: "search",
                          ref: "input",
                          "onUpdate:modelValue": a[0] || (a[0] = (e) => (r.value = e)),
                          type: "search",
                          placeholder: e.placeholder,
                          class: (0, i.C4)(t.$style.input),
                          autocomplete: "off",
                          style: (0, i.Tr)({ "--digits": e.placeholder?.length || 0 }),
                          inputmode: "search",
                          onInput: c,
                          onFocus: a[1] || (a[1] = (e) => t.$emit("focus")),
                        },
                        null,
                        46,
                        K,
                      ),
                      [[i.Jo, r.value]],
                    ),
                  ],
                  2,
                )
              )
            )
          },
        })
        let j = {}
        j.$style = {
          search_form_input: "byqss",
          searchFormInput: "byqss",
          icon: "d_udQ",
          input: "JcvZ_",
          short: "lecjY",
        }
        let Q = (0, s.default)(q, [["__cssModules", j]])
        a(86204)
        var Y = a(99930),
          Z = a(78494),
          J = a(12852),
          ee = a(59176),
          et = (0, i.pM)({
            __name: "PromoCategoriesSwitchers",
            setup(e) {
              let { mainData: t } = (0, T.G)(),
                a = (0, i.EW)(() =>
                  (0, ee.k4)(t.value.promoCategoriesList).slice(
                    0,
                    Math.min(7, t.value.promoCategoriesList.length),
                  ),
                )
              return (e, t) => (
                (0, i.uX)(),
                (0, i.CE)(
                  "div",
                  { class: (0, i.C4)(e.$style.promo_list) },
                  [
                    ((0, i.uX)(!0),
                    (0, i.CE)(
                      i.FK,
                      null,
                      (0, i.pI)(
                        a.value,
                        ({ location: t, title: a, id: n }) => (
                          (0, i.uX)(),
                          (0, i.Wv)(
                            y,
                            {
                              key: n,
                              class: (0, i.C4)(e.$style.switcher),
                              title: a,
                              icon: n,
                              to: t,
                              dataInterfaceTarget: "search-promo-category",
                            },
                            null,
                            8,
                            ["class", "title", "icon", "to"],
                          )
                        ),
                      ),
                      128,
                    )),
                  ],
                  2,
                )
              )
            },
          })
        let ea = {}
        ea.$style = { switcher: "mj5gq", promo_list: "UZbaF", promoList: "UZbaF", appear: "nENNP" }
        let ei = (0, s.default)(et, [["__cssModules", ea]]),
          en = {}
        en.$style = { placeholder: "J2PJ2", blink: "LvMTm" }
        let er = (0, s.default)({}, [
          [
            "render",
            function (e, t) {
              return (
                (0, i.uX)(),
                (0, i.CE)("div", { class: (0, i.C4)(e.$style.placeholder) }, null, 2)
              )
            },
          ],
          ["__cssModules", en],
        ])
        var el = a(41024),
          eo = (0, i.pM)({
            __name: "SearchCards",
            props: { cards: {}, searchQuery: {}, onClick: { type: Function } },
            setup(e) {
              let t = (0, i.EW)(() => (e.cards ? e.cards : [, , ,].fill(void 0)))
              return (a, n) => (
                (0, i.uX)(),
                (0, i.CE)(
                  "ul",
                  { class: (0, i.C4)(a.$style.cards) },
                  [
                    ((0, i.uX)(!0),
                    (0, i.CE)(
                      i.FK,
                      null,
                      (0, i.pI)(t.value, (t) => {
                        var n, r
                        return (
                          (0, i.uX)(),
                          (0, i.CE)("li", { key: t?.hru }, [
                            t
                              ? ((0, i.uX)(),
                                (0, i.Wv)(
                                  h.A,
                                  {
                                    key: 1,
                                    class: (0, i.C4)(a.$style.card),
                                    to:
                                      ((n = t.routeName || (0, i.R1)(g.V2).GAME_PAGE),
                                      (r = t.hru),
                                      n === g.V2.GAME_PAGE
                                        ? {
                                            name: n,
                                            params: { game: r },
                                            query: e.searchQuery
                                              ? {
                                                  from: "portal_search",
                                                  portal_search_query: e.searchQuery,
                                                }
                                              : void 0,
                                          }
                                        : { name: n, params: { hru: r } }),
                                    onClick: e.onClick,
                                  },
                                  {
                                    default: (0, i.k6)(() => [
                                      (0, i.bF)(
                                        el.A,
                                        {
                                          src: t.preview,
                                          class: (0, i.C4)(a.$style.image_override),
                                        },
                                        {
                                          default: (0, i.k6)(() => [
                                            t.previewIcon
                                              ? ((0, i.uX)(),
                                                (0, i.Wv)(
                                                  f.A,
                                                  {
                                                    key: 0,
                                                    name: t.previewIcon,
                                                    class: (0, i.C4)(a.$style.preview_icon),
                                                  },
                                                  null,
                                                  8,
                                                  ["name", "class"],
                                                ))
                                              : (0, i.Q3)("", !0),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["src", "class"],
                                      ),
                                      (0, i.bF)(
                                        l.A,
                                        {
                                          type: "label",
                                          size: "m",
                                          class: (0, i.C4)(a.$style.title),
                                        },
                                        {
                                          default: (0, i.k6)(() => [
                                            (0, i.eW)((0, i.v_)(t.title), 1),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["class"],
                                      ),
                                      t.statusIcon
                                        ? ((0, i.uX)(),
                                          (0, i.Wv)(
                                            f.A,
                                            {
                                              key: 0,
                                              name: t.statusIcon,
                                              class: (0, i.C4)(a.$style.icon),
                                            },
                                            null,
                                            8,
                                            ["name", "class"],
                                          ))
                                        : (0, i.Q3)("", !0),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["class", "to", "onClick"],
                                ))
                              : ((0, i.uX)(),
                                (0, i.CE)(
                                  "div",
                                  { key: 0, class: (0, i.C4)(a.$style.card) },
                                  [
                                    (0, i.bF)(
                                      el.A,
                                      {
                                        src: void 0,
                                        placeholder: "",
                                        class: (0, i.C4)(a.$style.image_override),
                                      },
                                      null,
                                      8,
                                      ["class"],
                                    ),
                                    (0, i.bF)(
                                      er,
                                      { class: (0, i.C4)(a.$style.title_placeholder) },
                                      null,
                                      8,
                                      ["class"],
                                    ),
                                  ],
                                  2,
                                )),
                          ])
                        )
                      }),
                      128,
                    )),
                  ],
                  2,
                )
              )
            },
          })
        let es = {}
        es.$style = {
          cards: "hl8t5",
          card: "qpLLr",
          preview_icon: "f48i0",
          previewIcon: "f48i0",
          icon: "ulQn4",
          image_override: "Sj4Ph",
          imageOverride: "Sj4Ph",
          "#": "ixjtD",
          title_placeholder: "OAn9j",
          titlePlaceholder: "OAn9j",
          title: "ZMwTh",
        }
        let ec = (0, s.default)(eo, [["__cssModules", es]]),
          eu = ["src"]
        var ed = (0, i.pM)({
          __name: "SearchResults",
          props: { searchResults: {}, status: {}, onClick: { type: Function } },
          setup(e) {
            let t = {
                [g.V2.CATEGORY]: "all_games",
                [g.V2.DEVELOPER]: "all_games",
                [g.V2.SERIES]: "all_series",
                [g.V2.TAG]: "all_tags",
              },
              a = (0, J.U)(),
              { myUnzippedGames: r } = (0, n.bP)(a),
              { unzippedTrendingWithGames: o } = (0, Z.F)({}),
              s = (0, i.EW)(() => r.value.slice(0, 3)),
              c = (0, i.EW)(() => o.value?.slice(0, 3)),
              u = (0, i.EW)(() =>
                e.searchResults?.result
                  ?.filter((e) => e.routeName === g.V2.GAME_PAGE)
                  .map((e) => ({
                    hru: e.gameHru,
                    preview: e.image,
                    title: e.name,
                    routeName: e.routeName,
                  })),
              ),
              d = (0, i.EW)(() =>
                e.searchResults?.result
                  ?.filter((e) => e.routeName !== g.V2.GAME_PAGE)
                  .map((e) => ({
                    hru: e.hru,
                    title: e.name,
                    routeName: e.routeName,
                    previewIcon: t[e.routeName],
                  })),
              )
            return (t, a) =>
              "loaded" === e.status || "loading" === e.status
                ? ((0, i.uX)(),
                  (0, i.CE)(
                    "div",
                    { key: 0, class: (0, i.C4)(t.$style.results) },
                    [
                      (0, i.bF)(
                        ec,
                        {
                          cards: u.value,
                          searchQuery: e.searchResults?.queryTerm,
                          onClick: e.onClick,
                        },
                        null,
                        8,
                        ["cards", "searchQuery", "onClick"],
                      ),
                      (0, i.bF)(ec, { cards: d.value, onClick: e.onClick }, null, 8, [
                        "cards",
                        "onClick",
                      ]),
                    ],
                    2,
                  ))
                : "empty" === e.status
                  ? ((0, i.uX)(),
                    (0, i.CE)(
                      "div",
                      { key: 1, class: (0, i.C4)(t.$style.empty) },
                      [
                        (0, i.Lk)(
                          "div",
                          { class: (0, i.C4)(t.$style.empty_wrapper_text) },
                          [
                            (0, i.Lk)(
                              "div",
                              { class: (0, i.C4)(t.$style.no_results_img_wrapper) },
                              [
                                (0, i.Lk)(
                                  "img",
                                  {
                                    src: (0, i.R1)(Y),
                                    alt: "no_results",
                                    loading: "lazy",
                                    class: (0, i.C4)(t.$style.no_results_img),
                                  },
                                  null,
                                  10,
                                  eu,
                                ),
                              ],
                              2,
                            ),
                            (0, i.Lk)(
                              "div",
                              { class: (0, i.C4)(t.$style.no_results_text) },
                              [
                                (0, i.bF)(
                                  l.A,
                                  { type: "header", size: "s", responsive: !1 },
                                  {
                                    default: (0, i.k6)(() => [
                                      (0, i.eW)((0, i.v_)(t.$tr("search.empty_title")), 1),
                                    ]),
                                    _: 1,
                                  },
                                ),
                                (0, i.bF)(
                                  l.A,
                                  {
                                    size: "s",
                                    responsive: !1,
                                    class: (0, i.C4)(t.$style.no_results_desc),
                                  },
                                  {
                                    default: (0, i.k6)(() => [
                                      (0, i.eW)((0, i.v_)(t.$tr("search.empty_desc")), 1),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["class"],
                                ),
                              ],
                              2,
                            ),
                          ],
                          2,
                        ),
                        (0, i.Lk)("div", { class: (0, i.C4)(t.$style.sep_section) }, null, 2),
                        (0, i.bF)(
                          l.A,
                          { type: "caption", size: "all-caps", class: (0, i.C4)(t.$style.title) },
                          {
                            default: (0, i.k6)(() => [
                              (0, i.eW)((0, i.v_)(t.$tr("search.top_games")), 1),
                            ]),
                            _: 1,
                          },
                          8,
                          ["class"],
                        ),
                        (0, i.bF)(ec, { cards: c.value }, null, 8, ["cards"]),
                      ],
                      2,
                    ))
                  : ((0, i.uX)(),
                    (0, i.CE)(
                      "div",
                      { key: 2, class: (0, i.C4)(t.$style.initial) },
                      [
                        (0, i.bF)(ei),
                        (0, i.bF)(
                          l.A,
                          { type: "caption", size: "all-caps", class: (0, i.C4)(t.$style.title) },
                          {
                            default: (0, i.k6)(() => [
                              (0, i.eW)((0, i.v_)(t.$tr("search.top_games")), 1),
                            ]),
                            _: 1,
                          },
                          8,
                          ["class"],
                        ),
                        (0, i.bF)(ec, { cards: c.value }, null, 8, ["cards"]),
                        s.value?.length
                          ? ((0, i.uX)(),
                            (0, i.CE)(
                              i.FK,
                              { key: 0 },
                              [
                                (0, i.bF)(
                                  l.A,
                                  {
                                    type: "caption",
                                    size: "all-caps",
                                    class: (0, i.C4)(t.$style.title),
                                  },
                                  {
                                    default: (0, i.k6)(() => [
                                      (0, i.eW)((0, i.v_)(t.$tr("search.recent_games")), 1),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["class"],
                                ),
                                (0, i.bF)(ec, { cards: s.value }, null, 8, ["cards"]),
                              ],
                              64,
                            ))
                          : (0, i.Q3)("", !0),
                      ],
                      2,
                    ))
          },
        })
        let ep = {}
        ep.$style = {
          results: "PNi7I",
          title: "TsE2Y",
          initial: "c320J",
          empty: "gqbuy",
          no_results_text: "vgbKO",
          noResultsText: "vgbKO",
          no_results_desc: "jwnaP",
          noResultsDesc: "jwnaP",
          no_results_img_wrapper: "CgPqy",
          noResultsImgWrapper: "CgPqy",
          no_results_img: "rf8uo",
          noResultsImg: "rf8uo",
          empty_wrapper_text: "t9BYo",
          emptyWrapperText: "t9BYo",
          sep_section: "lsRD6",
          sepSection: "lsRD6",
        }
        let em = (0, s.default)(ed, [["__cssModules", ep]])
        var eg = a(40903),
          ev = a(85692),
          eh = a(79316),
          ef = a(47006)
        ;(a(19329), a(76429))
        var e_ = a(77192)
        function eb() {
          let e = (0, i.KR)(""),
            t = (0, i.KR)(!1),
            a = (0, eh.G)(),
            n = (0, V.l)(),
            l = (0, m.Cf)(),
            o = (0, r.rd)(),
            { search: s } = (0, ef.M1)()
          function c(e) {
            ;((t.value = e), n.setFullscreen(e))
          }
          let u = (0, i.EW)(() => e.value.trim().length > 1 && !eg.S$),
            d = (0, i.EW)(() => ["portal-search", e.value, l.currentLocale.value]),
            {
              isError: p,
              isLoading: v,
              isSuccess: h,
              data: f,
            } = (0, ev.I)({
              queryKey: d,
              enabled: u,
              queryFn: async () => {
                let t = await s({
                  q: e.value,
                  num: "10",
                  hl: l.currentLocale.value,
                  lr: `lang_${l.getCurrentLanguage()}`,
                })
                return (({ query: e, data: t, resolveRoute: a }) => {
                  let i = { result: [], totalItems: 0, queryTerm: "" }
                  return (
                    t.items?.forEach((e) => {
                      let t = (0, e_.A)(e.link)?.pathname
                      if (!t) return
                      let n = a(t)
                      if (n.name === g.V2.GAME_PAGE) {
                        var r
                        let t = e.pagemap?.webapplication?.[0],
                          a =
                            t?.name || ((r = e.title) ? r.split(/\s[—–]\s/u)[0]?.trim() || "" : r),
                          l = t?.image || e.pagemap?.metatags?.[0]?.["og:image"]
                        a &&
                          l &&
                          i.result.push({
                            routeName: n.name,
                            gameHru: n.params.game,
                            image: l,
                            name: a,
                            htmlTitle: e.htmlTitle,
                          })
                      } else if (
                        n.name === g.V2.CATEGORY ||
                        n.name === g.V2.TAG ||
                        n.name === g.V2.SERIES
                      ) {
                        let t =
                          e.pagemap?.webapplication?.[0]?.name || e.title?.split("|")[0]?.trim()
                        if (t) {
                          let a = n.params.hru
                          i.result.find((e) => "object" == typeof e && "hru" in e && e.hru === a) ||
                            i.result.push({
                              routeName: n.name,
                              hru: a,
                              name: t,
                              htmlTitle: e.htmlTitle,
                            })
                        }
                      }
                    }),
                    (i.totalItems = t.searchInformation.totalResults),
                    (i.queryTerm = e),
                    i
                  )
                })({ query: e.value, data: t, resolveRoute: (e) => o.resolve(e) })
              },
              retry: 1,
            }),
            _ = (0, i.EW)(() =>
              (f.value && 0 === f.value.result.length) || p.value
                ? "empty"
                : f.value
                  ? "loaded"
                  : v.value && e.value
                    ? "loading"
                    : "initial",
            )
          return (
            (0, i.wB)(h, (e) => {
              e &&
                f.value &&
                a.logSearchEvent({
                  search_result_count: f.value.totalItems,
                  search_term: f.value.queryTerm,
                })
            }),
            {
              inputValue: e,
              isSearchOpened: t,
              searchData: f,
              status: _,
              isLoading: v,
              isError: p,
              handleClose: function () {
                c(!1)
              },
              handleOpen: function () {
                c(!0)
              },
              onUpdate: function (t) {
                e.value = t
              },
              onItemClick: function () {
                s({
                  q: e.value,
                  num: "10",
                  hl: l.currentLocale.value,
                  lr: `lang_${l.getCurrentLanguage()}`,
                  commit: "true",
                })
              },
              reset: function () {
                e.value = ""
              },
            }
          )
        }
        var ey = (0, i.pM)({
          __name: "Search",
          emits: ["open", "close"],
          setup(e, { emit: t }) {
            let a = (0, i.rk)("search-container"),
              n = (0, i.rk)("search-input"),
              l = (0, r.rd)(),
              {
                isSearchOpened: o,
                searchData: s,
                status: c,
                handleOpen: u,
                handleClose: d,
                onUpdate: p,
                onItemClick: m,
              } = eb()
            function v() {
              ;(u(), t("open"), n.value?.focus())
            }
            function h() {
              ;(d(), t("close"))
            }
            function f(e) {
              l.push({ name: g.V2.SEARCH, query: { q: e } })
            }
            return (
              (0, H.X2F)(a, () => {
                o.value && h()
              }),
              (0, H.Ta5)("Escape", () => {
                if (o.value) {
                  let e = document.activeElement
                  ;(h(), e.blur())
                }
              }),
              l.afterEach(h),
              (e, t) => (
                (0, i.uX)(),
                (0, i.CE)(
                  "div",
                  {
                    ref: "search-container",
                    class: (0, i.C4)([e.$style.wrapper, (0, i.R1)(o) && e.$style.search_opened]),
                    onClick: v,
                  },
                  [
                    (0, i.bF)(
                      Q,
                      {
                        ref: "search-input",
                        placeholder: e.$tr("search.placeholder"),
                        buttonText: e.$tr("search.placeholder"),
                        short: !(0, i.R1)(o),
                        "onUpdate:modelValue": (0, i.R1)(p),
                        onFocus: v,
                        onEnter: f,
                      },
                      null,
                      8,
                      ["placeholder", "buttonText", "short", "onUpdate:modelValue"],
                    ),
                    (0, i.R1)(o)
                      ? ((0, i.uX)(),
                        (0, i.CE)(
                          "div",
                          {
                            key: 0,
                            "data-overlay-blur": "",
                            class: (0, i.C4)(e.$style.results_anchor),
                          },
                          [
                            (0, i.bF)(
                              em,
                              {
                                searchResults: (0, i.R1)(s),
                                status: (0, i.R1)(c),
                                onClick: (0, i.R1)(m),
                              },
                              null,
                              8,
                              ["searchResults", "status", "onClick"],
                            ),
                          ],
                          2,
                        ))
                      : (0, i.Q3)("", !0),
                  ],
                  2,
                )
              )
            )
          },
        })
        let ew = {}
        ew.$style = {
          wrapper: "nqbUb",
          search_opened: "rAqDh",
          searchOpened: "rAqDh",
          results_anchor: "gUMG0",
          resultsAnchor: "gUMG0",
        }
        let ek = (0, s.default)(ey, [["__cssModules", ew]])
        var eC = a(86037),
          eE = a.p + "static/image/no-ad.dbedaddc.webp"
        let eA = ["src"]
        var ex = (0, i.pM)({
          __name: "DesktopNoAdButton",
          setup(e) {
            let t = (0, eC.a)(),
              { isAdFreeActive: a } = (0, n.bP)(t),
              r = (0, $.C)()
            return (e, n) =>
              !(0, i.R1)(a) && (0, i.R1)(r).isPurchaseEnabled
                ? ((0, i.uX)(),
                  (0, i.CE)(
                    "button",
                    {
                      key: 0,
                      class: (0, i.C4)(e.$style.button),
                      "data-interface-target": "no-ad-header-button",
                      onClick: n[0] || (n[0] = (e) => (0, i.R1)(t).openDisabledAdModal()),
                    },
                    [
                      (0, i.Lk)(
                        "img",
                        { class: (0, i.C4)(e.$style.icon), src: (0, i.R1)(eE), alt: "No Ad" },
                        null,
                        10,
                        eA,
                      ),
                      (0, i.bF)(
                        l.A,
                        { type: "label", size: "l" },
                        {
                          default: (0, i.k6)(() => [
                            (0, i.eW)((0, i.v_)(e.$tr("header.noAds")), 1),
                          ]),
                          _: 1,
                        },
                      ),
                    ],
                    2,
                  ))
                : (0, i.Q3)("", !0)
          },
        })
        let eR = {}
        eR.$style = { button: "VRqCf", icon: "_95RQ" }
        let eT = (0, s.default)(ex, [["__cssModules", eR]])
        var eS = (0, i.pM)({
          __name: "HeaderTiles",
          setup(e) {
            let t = (0, R.q)(),
              a = (0, i.EW)(() => [
                { title: t("tiles.for_business"), externalTo: S.qe, target: "_blank" },
                { title: t("navigation.blog"), externalTo: S.xo, target: "_blank" },
                { title: t("tiles.for_developers"), externalTo: S.F_, target: "_blank" },
                { title: t("tiles.contacts"), to: { name: g.V2.CONTACTS } },
              ]),
              n = (0, i.KR)(null),
              r = (0, i.KR)(null),
              o = (0, i.KR)(!1),
              s = (0, i.EW)(() => a.value.length > 5)
            function c(e) {
              if (!1 === e) {
                o.value = !1
                return
              }
              o.value = !o.value
            }
            function u(e) {
              ;((r.value = e.currentTarget), c())
            }
            function d(e) {
              if (!o.value) return
              let t = e.target,
                a = !n.value?.contains(t),
                i = !r.value?.contains(t)
              a && i && c(!1)
            }
            return (
              (0, i.sV)(() => {
                document.addEventListener("click", d)
              }),
              (0, i.xo)(() => {
                document.removeEventListener("click", d)
              }),
              (e, t) => (
                (0, i.uX)(),
                (0, i.CE)(
                  "div",
                  { class: (0, i.C4)(e.$style.tiles_wrapper) },
                  [
                    (0, i.Lk)(
                      "div",
                      { class: (0, i.C4)([e.$style.tiles_button, e.$style.tabletPlus]) },
                      [
                        (0, i.Lk)(
                          "button",
                          {
                            "data-interface-target": "open-links-menu",
                            class: (0, i.C4)(e.$style.icon_wrapper),
                            onClick: u,
                          },
                          [
                            (0, i.bF)(
                              f.A,
                              {
                                name: "plus",
                                class: (0, i.C4)([e.$style.icon, o.value && e.$style.icon_rotate]),
                              },
                              null,
                              8,
                              ["class"],
                            ),
                          ],
                          2,
                        ),
                      ],
                      2,
                    ),
                    (0, i.Lk)(
                      "div",
                      {
                        class: (0, i.C4)([
                          e.$style.tiles_row,
                          e.$style.desktop,
                          s.value && !o.value && e.$style.reduced_tiles,
                          s.value && o.value && e.$style.reduced_tiles_opened,
                        ]),
                      },
                      [
                        ((0, i.uX)(!0),
                        (0, i.CE)(
                          i.FK,
                          null,
                          (0, i.pI)(
                            a.value,
                            (t, a) => (
                              (0, i.uX)(),
                              (0, i.Wv)(
                                h.A,
                                {
                                  key: a,
                                  to: t.to,
                                  externalTo: t.externalTo,
                                  target: t.target,
                                  class: (0, i.C4)(e.$style.tile),
                                },
                                {
                                  default: (0, i.k6)(() => [
                                    (0, i.bF)(
                                      l.A,
                                      { type: "caption", size: "all-caps", semibold: "" },
                                      {
                                        default: (0, i.k6)(() => [
                                          (0, i.eW)((0, i.v_)(t.title), 1),
                                        ]),
                                        _: 2,
                                      },
                                      1024,
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["to", "externalTo", "target", "class"],
                              )
                            ),
                          ),
                          128,
                        )),
                        (0, i.Lk)(
                          "button",
                          {
                            class: (0, i.C4)([
                              e.$style.tile,
                              e.$style.more_btn,
                              !o.value && s.value && e.$style.more_btn_visible,
                            ]),
                            onClick: u,
                          },
                          [
                            (0, i.bF)(
                              l.A,
                              { type: "caption", size: "all-caps", semibold: "" },
                              {
                                default: (0, i.k6)(() => [
                                  (0, i.eW)((0, i.v_)(e.$tr("tiles.more")), 1),
                                ]),
                                _: 1,
                              },
                            ),
                          ],
                          2,
                        ),
                      ],
                      2,
                    ),
                    (0, i.Lk)(
                      "div",
                      { ref_key: "popupRef", ref: n, class: (0, i.C4)(e.$style.popup) },
                      [
                        (0, i.bF)(
                          i.F,
                          {
                            tag: "div",
                            class: (0, i.C4)(e.$style.tiles_popup),
                            enterActiveClass: e.$style.fade_enter_active,
                            leaveToClass: e.$style.fade_leave_to,
                          },
                          {
                            default: (0, i.k6)(() => [
                              ((0, i.uX)(!0),
                              (0, i.CE)(
                                i.FK,
                                null,
                                (0, i.pI)(
                                  o.value ? a.value : [],
                                  (t, a) => (
                                    (0, i.uX)(),
                                    (0, i.Wv)(
                                      h.A,
                                      {
                                        key: a,
                                        to: t.to,
                                        externalTo: t.externalTo,
                                        target: t.target,
                                        class: (0, i.C4)(e.$style.tile),
                                      },
                                      {
                                        default: (0, i.k6)(() => [
                                          (0, i.bF)(
                                            l.A,
                                            {
                                              type: "caption",
                                              size: "all-caps",
                                              semibold: "",
                                              class: (0, i.C4)(e.$style.desktop),
                                            },
                                            {
                                              default: (0, i.k6)(() => [
                                                (0, i.eW)((0, i.v_)(t.title), 1),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["class"],
                                          ),
                                          (0, i.bF)(
                                            l.A,
                                            {
                                              type: "header",
                                              size: "xs",
                                              semibold: "",
                                              class: (0, i.C4)(e.$style.tabletPlus),
                                            },
                                            {
                                              default: (0, i.k6)(() => [
                                                (0, i.eW)((0, i.v_)(t.title), 1),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["class"],
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["to", "externalTo", "target", "class"],
                                    )
                                  ),
                                ),
                                128,
                              )),
                              (0, i.Lk)(
                                "button",
                                {
                                  key: "close-btn",
                                  class: (0, i.C4)([
                                    e.$style.tile,
                                    e.$style.close_btn,
                                    e.$style.desktop,
                                  ]),
                                  onClick: u,
                                },
                                [
                                  (0, i.bF)(
                                    l.A,
                                    { type: "caption", size: "all-caps", accent: "" },
                                    {
                                      default: (0, i.k6)(() => [
                                        (0, i.eW)((0, i.v_)(e.$tr("tiles.close")), 1),
                                      ]),
                                      _: 1,
                                    },
                                  ),
                                ],
                                2,
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["class", "enterActiveClass", "leaveToClass"],
                        ),
                      ],
                      2,
                    ),
                  ],
                  2,
                )
              )
            )
          },
        })
        let e$ = {}
        e$.$style = {
          tiles_wrapper: "tc5_6",
          tilesWrapper: "tc5_6",
          tiles_button: "UbMBp",
          tilesButton: "UbMBp",
          tiles_row: "pYxh2",
          tilesRow: "pYxh2",
          icon: "zlRMd",
          icon_rotate: "wS9S7",
          iconRotate: "wS9S7",
          desktop: "b4TLG",
          icon_wrapper: "t7f1y",
          iconWrapper: "t7f1y",
          tile: "MKdsd",
          popup: "TGtft",
          more_btn: "atP72",
          moreBtn: "atP72",
          tiles_popup: "Od9KC",
          tilesPopup: "Od9KC",
          close_btn: "fEAYf",
          closeBtn: "fEAYf",
          fade_enter_active: "fdKJD",
          fadeEnterActive: "fdKJD",
          "bounce-in": "_7AHth",
          bounceIn: "_7AHth",
          fade_leave_to: "m2yZz",
          fadeLeaveTo: "m2yZz",
          "bounce-out": "yufZQ",
          bounceOut: "yufZQ",
          tabletPlus: "hRHUK",
          reduced_tiles: "WUQDA",
          reducedTiles: "WUQDA",
          reduced_tiles_opened: "vUGol",
          reducedTilesOpened: "vUGol",
          more_btn_visible: "fo7cd",
          moreBtnVisible: "fo7cd",
        }
        let eL = (0, s.default)(eS, [["__cssModules", e$]])
        var eP = (0, i.pM)({
          __name: "UserAvatar",
          props: { avatar: {}, firstName: {}, lastName: {} },
          setup(e) {
            let t = (0, i.EW)(
              () =>
                `${e.firstName?.[0]?.toUpperCase() || "x"}${e.lastName?.[0]?.toUpperCase() || ""}`,
            )
            return (a, n) => (
              (0, i.uX)(),
              (0, i.CE)(
                "div",
                { class: (0, i.C4)(a.$style.avatar) },
                [
                  (0, i.bF)(
                    l.A,
                    {
                      class: (0, i.C4)(a.$style.placeholder),
                      type: "label",
                      size: "xs",
                      accent: !0,
                      responsive: !1,
                    },
                    { default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(t.value), 1)]), _: 1 },
                    8,
                    ["class"],
                  ),
                  e.avatar
                    ? ((0, i.uX)(),
                      (0, i.CE)(
                        "div",
                        {
                          key: 0,
                          style: (0, i.Tr)({ backgroundImage: `url(${e.avatar})` }),
                          class: (0, i.C4)(a.$style.img),
                        },
                        null,
                        6,
                      ))
                    : (0, i.Q3)("", !0),
                ],
                2,
              )
            )
          },
        })
        let eM = {}
        eM.$style = { avatar: "pXwB_", placeholder: "jAGh2", img: "UgTmm" }
        let eI = (0, s.default)(eP, [["__cssModules", eM]])
        var eO = a(42763),
          eB = (0, i.pM)({
            __name: "NoAdBadge",
            props: { remainingMsWithoutAd: {} },
            setup(e) {
              let t = (0, R.q)(),
                a = (0, eC.a)(),
                n = (0, i.EW)(() => e.remainingMsWithoutAd <= 6e5),
                r = (0, i.EW)(() =>
                  n.value
                    ? Math.ceil(e.remainingMsWithoutAd / 6e4)
                    : Math.ceil(e.remainingMsWithoutAd / 864e5),
                ),
                o = (0, i.EW)(() =>
                  n.value ? t("noAdBadge.min", r.value) : t("noAdBadge.days", r.value),
                ),
                s = (0, i.EW)(() =>
                  n.value ? t("noAdBadge.tooltipMin", r.value) : t("noAdBadge.tooltip", r.value),
                )
              return (e, t) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  eO.A,
                  { content: s.value, position: "bottom" },
                  {
                    default: (0, i.k6)(() => [
                      (0, i.Lk)(
                        "button",
                        {
                          class: (0, i.C4)(e.$style.button),
                          "data-interface-target": "no-ad-badge",
                          onClick:
                            t[0] ||
                            (t[0] = (0, i.D$)(
                              (e) => (0, i.R1)(a).openDisabledAdModal(),
                              ["prevent"],
                            )),
                        },
                        [
                          (0, i.bF)(
                            l.A,
                            {
                              type: "caption",
                              size: "xs",
                              accent: "",
                              responsive: !1,
                              class: (0, i.C4)(e.$style.no_ad_label),
                            },
                            {
                              default: (0, i.k6)(() => [
                                (0, i.eW)((0, i.v_)(e.$tr("noAdBadge.label")), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["class"],
                          ),
                          (0, i.bF)(
                            l.A,
                            {
                              type: "label",
                              size: "m",
                              accent: "",
                              responsive: !1,
                              class: (0, i.C4)(e.$style.remaining_time),
                            },
                            { default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(o.value), 1)]), _: 1 },
                            8,
                            ["class"],
                          ),
                        ],
                        2,
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["content"],
                )
              )
            },
          })
        let eF = {}
        eF.$style = {
          button: "RdqwK",
          no_ad_label: "ZEsD1",
          noAdLabel: "ZEsD1",
          remaining_time: "nRf6N",
          remainingTime: "nRf6N",
        }
        let eD = (0, s.default)(eB, [["__cssModules", eF]])
        var eW = (0, i.pM)({
          __name: "UserWidget",
          props: { user: {} },
          setup(e) {
            let t = (0, eC.a)(),
              { remainingMsWithoutAd: a } = (0, n.bP)(t)
            return (t, n) => (
              (0, i.uX)(),
              (0, i.Wv)(
                h.A,
                {
                  class: (0, i.C4)(t.$style.profile),
                  to: { name: (0, i.R1)(g.V2).PROFILE },
                  "data-interface-target": "profile-link",
                },
                {
                  default: (0, i.k6)(() => [
                    (0, i.bF)(
                      eI,
                      {
                        class: (0, i.C4)(t.$style.avatar_override),
                        avatar: e.user.avatar,
                        firstName: e.user.firstName,
                        lastName: e.user.lastName,
                      },
                      null,
                      8,
                      ["class", "avatar", "firstName", "lastName"],
                    ),
                    (0, i.R1)(a)
                      ? ((0, i.uX)(),
                        (0, i.CE)(
                          "div",
                          { key: 0, class: (0, i.C4)(t.$style.balance_wrapper) },
                          [
                            (0, i.bF)(
                              l.A,
                              {
                                type: "label",
                                size: "xs",
                                class: (0, i.C4)(t.$style.mobile_no_ads_label),
                                responsive: !1,
                              },
                              {
                                default: (0, i.k6)(() => [
                                  (0, i.eW)((0, i.v_)(t.$tr("noAdBadge.mobile_label")), 1),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                          ],
                          2,
                        ))
                      : (0, i.Q3)("", !0),
                    (0, i.R1)(a)
                      ? ((0, i.uX)(),
                        (0, i.Wv)(eD, { key: 1, remainingMsWithoutAd: (0, i.R1)(a) }, null, 8, [
                          "remainingMsWithoutAd",
                        ]))
                      : (0, i.Q3)("", !0),
                  ]),
                  _: 1,
                },
                8,
                ["class", "to"],
              )
            )
          },
        })
        let eN = {}
        eN.$style = {
          profile: "VFRWm",
          avatar_override: "jRIeu",
          avatarOverride: "jRIeu",
          "#": "nuAJS",
          balance_wrapper: "ckJQw",
          balanceWrapper: "ckJQw",
          mobile_no_ads_label: "cnQLT",
          mobileNoAdsLabel: "cnQLT",
        }
        let eG = (0, s.default)(eW, [["__cssModules", eN]])
        var eU = (0, i.pM)({
          __name: "DesktopHeader",
          setup(e) {
            let t = (0, V.l)(),
              a = (0, z.k)(),
              r = (0, i.KR)(!1),
              { user: l } = (0, n.bP)(a),
              o = (0, U.C)()
            function s() {
              t.openSignInModal("desktop-header")
            }
            return (e, t) => (
              (0, i.uX)(),
              (0, i.CE)(
                "header",
                {
                  class: (0, i.C4)([e.$style.header, r.value && e.$style.search_opened]),
                  "data-interface-section": "desktop-header",
                },
                [
                  (0, i.bF)(
                    d.A,
                    {
                      to: { name: (0, i.R1)(g.V2).MAIN },
                      "data-interface-target": "navigation-link",
                      class: (0, i.C4)(e.$style.icon_wrapper),
                      hoverAnimation: "rainbow",
                    },
                    {
                      default: (0, i.k6)(() => [
                        (0, i.bF)(
                          G.A,
                          { mode: "default", class: (0, i.C4)(e.$style.logo_override) },
                          null,
                          8,
                          ["class"],
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["to", "class"],
                  ),
                  (0, i.Lk)(
                    "div",
                    { class: (0, i.C4)(e.$style.flexible_block) },
                    [
                      (0, i.bF)(ek, {
                        onOpen: t[0] || (t[0] = (e) => (r.value = !0)),
                        onClose: t[1] || (t[1] = (e) => (r.value = !1)),
                      }),
                      (0, i.R1)(o)
                        ? ((0, i.uX)(),
                          (0, i.CE)(
                            i.FK,
                            { key: 0 },
                            [
                              (0, i.bF)(eT),
                              (0, i.R1)(l)
                                ? ((0, i.uX)(),
                                  (0, i.Wv)(eG, { key: 0, user: (0, i.R1)(l) }, null, 8, ["user"]))
                                : ((0, i.uX)(),
                                  (0, i.Wv)(
                                    N.A,
                                    {
                                      key: 1,
                                      size: "l",
                                      color: "salad",
                                      interfaceTarget: "open-sign-in-modal",
                                      class: (0, i.C4)(e.$style.sign_in_button_override),
                                      label: e.$tr("header.login"),
                                      onClick: s,
                                    },
                                    null,
                                    8,
                                    ["class", "label"],
                                  )),
                            ],
                            64,
                          ))
                        : (0, i.Q3)("", !0),
                      (0, i.bF)(eL, { class: (0, i.C4)(e.$style.header_tiles_override) }, null, 8, [
                        "class",
                      ]),
                    ],
                    2,
                  ),
                ],
                2,
              )
            )
          },
        })
        let eV = {}
        eV.$style = {
          header: "eCFc0",
          flexible_block: "HCXyD",
          flexibleBlock: "HCXyD",
          header_tiles_override: "qKoSd",
          headerTilesOverride: "qKoSd",
          "#": "gbBQn",
          icon_wrapper: "gk9dY",
          iconWrapper: "gk9dY",
          logo_override: "AiKYb",
          logoOverride: "AiKYb",
          sign_in_button_override: "K6CSS",
          signInButtonOverride: "K6CSS",
          search_opened: "REzVh",
          searchOpened: "REzVh",
          tasks_widget_override: "_Gutu",
          tasksWidgetOverride: "_Gutu",
        }
        let ez = (0, s.default)(eU, [["__cssModules", eV]])
        var eH = a(84520)
        let eX = ["src"]
        var eK = (0, i.pM)({
          __name: "MobileNoAdButton",
          setup(e) {
            let t = (0, eC.a)(),
              { isAdFreeActive: a } = (0, n.bP)(t),
              r = (0, $.C)()
            return (e, n) =>
              !(0, i.R1)(a) && (0, i.R1)(r).isPurchaseEnabled
                ? ((0, i.uX)(),
                  (0, i.Wv)(
                    eH.A,
                    {
                      key: 0,
                      class: (0, i.C4)(e.$style.button_override),
                      interfaceTarget: "no-ad-header-button",
                      onClick: n[0] || (n[0] = (e) => (0, i.R1)(t).openDisabledAdModal()),
                    },
                    {
                      default: (0, i.k6)(() => [
                        (0, i.Lk)(
                          "img",
                          { class: (0, i.C4)(e.$style.icon), src: (0, i.R1)(eE), alt: "No Ad" },
                          null,
                          10,
                          eX,
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class"],
                  ))
                : (0, i.Q3)("", !0)
          },
        })
        let eq = {}
        eq.$style = {
          button_override: "VLM_d",
          buttonOverride: "VLM_d",
          "#": "PqKVo",
          icon: "oVNX8",
        }
        let ej = (0, s.default)(eK, [["__cssModules", eq]])
        var eQ = a(14410),
          eY = a.p + "static/svg/youtube.28b951a6.svg"
        let eZ = ["src"]
        var eJ = (0, i.pM)({
          __name: "MobileYoutubeButton",
          setup(e) {
            let { user: t } = (0, n.bP)((0, z.k)())
            return (e, a) => (
              (0, i.uX)(),
              (0, i.Wv)(
                eH.A,
                {
                  class: (0, i.C4)([
                    e.$style.button_override,
                    !!(0, i.R1)(t) && e.$style.button_auth_override,
                  ]),
                  interfaceTarget: "youtube-mobile-header-button",
                  externalTo: (0, i.R1)(eQ.O),
                  target: "_blank",
                },
                {
                  default: (0, i.k6)(() => [
                    (0, i.Lk)(
                      "img",
                      { class: (0, i.C4)(e.$style.icon), src: (0, i.R1)(eY), alt: "Youtube" },
                      null,
                      10,
                      eZ,
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["class", "externalTo"],
              )
            )
          },
        })
        let e0 = {}
        e0.$style = {
          button_override: "SVPUN",
          buttonOverride: "SVPUN",
          "#": "QpppG",
          button_auth_override: "Qj8b1",
          buttonAuthOverride: "Qj8b1",
          icon: "JV5FB",
        }
        let e1 = (0, s.default)(eJ, [["__cssModules", e0]])
        var e4 = a(90053)
        let e2 = ["value", "placeholder"]
        var e6 = (0, i.pM)({
          __name: "MobileInput",
          props: { modelValue: {} },
          emits: ["update:modelValue", "focus"],
          setup(e, { emit: t }) {
            let a = (0, X.Q0)((e) => {
              t("update:modelValue", e)
            }, 500)
            function n(e) {
              a(e.target.value)
            }
            return (e, a) => (
              (0, i.uX)(),
              (0, i.CE)(
                "div",
                { class: (0, i.C4)(e.$style.wrapper) },
                [
                  (0, i.bF)(f.A, { name: "search", class: (0, i.C4)(e.$style.icon) }, null, 8, [
                    "class",
                  ]),
                  (0, i.Lk)(
                    "input",
                    {
                      type: "search",
                      value: e.modelValue,
                      placeholder: e.$tr("search.placeholder"),
                      class: (0, i.C4)(e.$style.input),
                      autocomplete: "off",
                      inputmode: "search",
                      onInput: n,
                      onFocus: a[0] || (a[0] = (e) => t("focus")),
                    },
                    null,
                    42,
                    e2,
                  ),
                ],
                2,
              )
            )
          },
        })
        let e3 = {}
        e3.$style = { wrapper: "Z77Wj", icon: "b9A_G", input: "Gn9nF" }
        let e9 = (0, s.default)(e6, [["__cssModules", e3]])
        var e8 = (0, i.pM)({
          __name: "MobileInitBlock",
          setup(e) {
            let t = (0, R.q)(),
              { mainData: a } = (0, T.G)(),
              { getLocalizedUrls: n } = (0, p.z)(),
              r = (0, i.EW)(() => n()),
              o = (0, $.C)(),
              s = (0, i.EW)(() => {
                let e = (0, S.lw)(t),
                  i = (e) => {
                    let t = a.value.contentCategoriesList.find((t) => t.id === e)
                    return t ? { title: t.title, icon: t.id, to: t.location } : null
                  }
                return [
                  e.allGames,
                  i("trending_now"),
                  e.allSeries,
                  i("new"),
                  e.allTags,
                  { title: t("navigation.random"), icon: "random", to: { name: g.V2.RANDOM_GAME } },
                  {
                    title: t("navigation.add_game"),
                    icon: "plus",
                    externalTo: S.F_,
                    target: "_blank",
                  },
                ].filter((e) => !!e)
              }),
              c = (0, i.EW)(() => [
                { title: t("navigation.for_developers"), externalTo: S.F_, target: "_blank" },
                { title: t("navigation.blog"), externalTo: S.xo, target: "_blank" },
                { title: t("navigation.for_business"), externalTo: S.qe, target: "_blank" },
                { title: t("navigation.contact_us"), to: { name: g.V2.CONTACTS } },
                { title: t("navigation.terms_of_use"), to: { name: g.V2.TERMS_OF_USE } },
              ])
            return (e, t) => (
              (0, i.uX)(),
              (0, i.CE)(
                "div",
                { class: (0, i.C4)(e.$style.initial) },
                [
                  (0, i.Lk)(
                    "div",
                    { class: (0, i.C4)(e.$style.top_links) },
                    [
                      ((0, i.uX)(!0),
                      (0, i.CE)(
                        i.FK,
                        null,
                        (0, i.pI)(
                          s.value,
                          (t) => (
                            (0, i.uX)(),
                            (0, i.Wv)(
                              h.A,
                              {
                                key: t.title,
                                class: (0, i.C4)(e.$style.top_link),
                                to: t.to,
                                externalTo: t.externalTo,
                                target: t.target,
                                "data-interface-target": "search-top-link-mobile",
                              },
                              {
                                default: (0, i.k6)(() => [
                                  t.icon
                                    ? ((0, i.uX)(),
                                      (0, i.Wv)(
                                        f.A,
                                        {
                                          key: 0,
                                          name: t.icon,
                                          class: (0, i.C4)(e.$style.top_link_icon),
                                        },
                                        null,
                                        8,
                                        ["name", "class"],
                                      ))
                                    : (0, i.Q3)("", !0),
                                  (0, i.bF)(
                                    l.A,
                                    { size: "m", responsive: !1, type: "label" },
                                    {
                                      default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(t.title), 1)]),
                                      _: 2,
                                    },
                                    1024,
                                  ),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["class", "to", "externalTo", "target"],
                            )
                          ),
                        ),
                        128,
                      )),
                    ],
                    2,
                  ),
                  (0, i.Lk)(
                    "div",
                    { class: (0, i.C4)(e.$style.categories) },
                    [
                      ((0, i.uX)(!0),
                      (0, i.CE)(
                        i.FK,
                        null,
                        (0, i.pI)(
                          (0, i.R1)(a).menuCategoriesList,
                          (t) => (
                            (0, i.uX)(),
                            (0, i.Wv)(
                              h.A,
                              {
                                key: t.id,
                                to: t.location,
                                "data-interface-target": "search-category-link-mobile",
                                class: (0, i.C4)(e.$style.category),
                              },
                              {
                                default: (0, i.k6)(() => [
                                  (0, i.bF)(
                                    f.A,
                                    { name: t.id, class: (0, i.C4)(e.$style.category_icon) },
                                    null,
                                    8,
                                    ["name", "class"],
                                  ),
                                  (0, i.bF)(
                                    l.A,
                                    {
                                      size: "s",
                                      class: (0, i.C4)(e.$style.category_title),
                                      responsive: !1,
                                      type: "label",
                                    },
                                    {
                                      default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(t.title), 1)]),
                                      _: 2,
                                    },
                                    1032,
                                    ["class"],
                                  ),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["to", "class"],
                            )
                          ),
                        ),
                        128,
                      )),
                    ],
                    2,
                  ),
                  (0, i.Lk)(
                    "div",
                    { class: (0, i.C4)(e.$style.bottom_links) },
                    [
                      ((0, i.uX)(!0),
                      (0, i.CE)(
                        i.FK,
                        null,
                        (0, i.pI)(
                          c.value,
                          (t) => (
                            (0, i.uX)(),
                            (0, i.Wv)(
                              h.A,
                              {
                                key: t.title,
                                to: t.to,
                                externalTo: t.externalTo,
                                target: t.target,
                                class: (0, i.C4)(e.$style.bottom_link),
                                "data-interface-target": "search-bottom-link-mobile",
                              },
                              {
                                default: (0, i.k6)(() => [
                                  (0, i.bF)(
                                    l.A,
                                    { size: "m", responsive: !1, type: "label" },
                                    {
                                      default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(t.title), 1)]),
                                      _: 2,
                                    },
                                    1024,
                                  ),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["to", "externalTo", "target", "class"],
                            )
                          ),
                        ),
                        128,
                      )),
                    ],
                    2,
                  ),
                  (0, i.R1)(o).isAppEnv
                    ? ((0, i.uX)(),
                      (0, i.Wv)(A, { key: 0, languageLinks: r.value }, null, 8, ["languageLinks"]))
                    : (0, i.Q3)("", !0),
                ],
                2,
              )
            )
          },
        })
        let e5 = {}
        e5.$style = {
          initial: "NgyU6",
          top_links: "Y2CEm",
          topLinks: "Y2CEm",
          top_link: "ZrQkB",
          topLink: "ZrQkB",
          top_link_icon: "iLD7K",
          topLinkIcon: "iLD7K",
          categories: "EHDk4",
          category: "ODqt2",
          category_icon: "W0_th",
          categoryIcon: "W0_th",
          category_title: "jOruY",
          categoryTitle: "jOruY",
          bottom_links: "_vcwD",
          bottomLinks: "_vcwD",
          bottom_link: "QKRs7",
          bottomLink: "QKRs7",
        }
        let e7 = (0, s.default)(e8, [["__cssModules", e5]])
        var te = (0, i.pM)({
          __name: "MobileResults",
          props: {
            searchResults: {},
            status: {},
            isInitBlockVisible: { type: Boolean },
            onClick: { type: Function },
          },
          setup: (e) => (t, a) => (
            (0, i.uX)(),
            (0, i.CE)(
              "div",
              { class: (0, i.C4)(t.$style.wrapper) },
              [
                e.isInitBlockVisible
                  ? ((0, i.uX)(), (0, i.Wv)(e7, { key: 0 }))
                  : ((0, i.uX)(),
                    (0, i.Wv)(
                      em,
                      {
                        key: 1,
                        searchResults: e.searchResults,
                        status: e.status,
                        onClick: e.onClick,
                      },
                      null,
                      8,
                      ["searchResults", "status", "onClick"],
                    )),
              ],
              2,
            )
          ),
        })
        let tt = {}
        tt.$style = { wrapper: "LEtpL" }
        let ta = (0, s.default)(te, [["__cssModules", tt]])
        var ti = (0, i.pM)({
          __name: "MobileSearch",
          emits: ["open", "close"],
          setup(e, { emit: t }) {
            let a = (0, r.rd)(),
              {
                isSearchOpened: n,
                searchData: l,
                status: o,
                handleOpen: s,
                handleClose: c,
                inputValue: u,
                reset: d,
                onItemClick: p,
              } = eb(),
              m = (0, i.KR)(!0),
              g = (0, i.EW)(() => (n.value ? (m.value ? "close" : "chevron-left") : "search"))
            function v() {
              ;(c(), t("close"))
            }
            function h() {
              n.value ? (m.value ? v() : ((m.value = !0), d())) : (s(), (m.value = !0), t("open"))
            }
            return (
              a.afterEach(v),
              (e, t) => (
                (0, i.uX)(),
                (0, i.CE)(
                  i.FK,
                  null,
                  [
                    (0, i.Lk)(
                      "div",
                      {
                        class: (0, i.C4)([e.$style.wrapper, (0, i.R1)(n) && e.$style.width_expand]),
                      },
                      [
                        (0, i.bF)(
                          e4.A,
                          {
                            size: "l",
                            interfaceTarget: (0, i.R1)(n) ? "close-search" : "open-search",
                            icon: g.value,
                            class: (0, i.C4)(e.$style.search_button_override),
                            onClick: h,
                          },
                          null,
                          8,
                          ["interfaceTarget", "icon", "class"],
                        ),
                        (0, i.R1)(n)
                          ? ((0, i.uX)(),
                            (0, i.Wv)(
                              e9,
                              {
                                key: 0,
                                modelValue: (0, i.R1)(u),
                                "onUpdate:modelValue":
                                  t[0] || (t[0] = (e) => ((0, i.i9)(u) ? (u.value = e) : null)),
                                onFocus: t[1] || (t[1] = (e) => (m.value = !1)),
                              },
                              null,
                              8,
                              ["modelValue"],
                            ))
                          : (0, i.Q3)("", !0),
                      ],
                      2,
                    ),
                    (0, i.R1)(n)
                      ? ((0, i.uX)(),
                        (0, i.Wv)(
                          ta,
                          {
                            key: 0,
                            searchResults: (0, i.R1)(l),
                            status: (0, i.R1)(o),
                            isInitBlockVisible: m.value,
                            onClick: (0, i.R1)(p),
                          },
                          null,
                          8,
                          ["searchResults", "status", "isInitBlockVisible", "onClick"],
                        ))
                      : (0, i.Q3)("", !0),
                  ],
                  64,
                )
              )
            )
          },
        })
        let tn = {}
        tn.$style = {
          wrapper: "bOs9K",
          width_expand: "oRZcu",
          widthExpand: "oRZcu",
          search_button_override: "eU7_M",
          searchButtonOverride: "eU7_M",
          "#": "TFaKj",
        }
        let tr = (0, s.default)(ti, [["__cssModules", tn]])
        var tl = (0, i.pM)({
          __name: "MobileHeader",
          setup(e) {
            let t = (0, z.k)(),
              a = (0, V.l)(),
              { user: r } = (0, n.bP)(t),
              l = (0, U.C)(),
              o = (0, i.KR)(!1)
            function s() {
              a.openSignInModal("mobile-header")
            }
            return (e, t) => (
              (0, i.uX)(),
              (0, i.CE)(
                "div",
                {
                  class: (0, i.C4)([e.$style.header, o.value && e.$style.header_search_opened]),
                  "data-interface-section": "mobile-header",
                },
                [
                  (0, i.bF)(tr, {
                    onOpen: t[0] || (t[0] = (e) => (o.value = !0)),
                    onClose: t[1] || (t[1] = (e) => (o.value = !1)),
                  }),
                  o.value
                    ? (0, i.Q3)("", !0)
                    : ((0, i.uX)(),
                      (0, i.CE)(
                        i.FK,
                        { key: 0 },
                        [
                          (0, i.bF)(
                            d.A,
                            {
                              to: { name: (0, i.R1)(g.V2).MAIN },
                              "data-interface-target": "logo-link",
                              class: (0, i.C4)(e.$style.logo_link),
                            },
                            {
                              default: (0, i.k6)(() => [
                                (0, i.bF)(
                                  G.A,
                                  { class: (0, i.C4)(e.$style.logo_override), mode: "default" },
                                  null,
                                  8,
                                  ["class"],
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["to", "class"],
                          ),
                          (0, i.R1)(l)
                            ? ((0, i.uX)(),
                              (0, i.CE)(
                                i.FK,
                                { key: 0 },
                                [
                                  (0, i.bF)(ej),
                                  (0, i.bF)(e1),
                                  (0, i.R1)(r)
                                    ? ((0, i.uX)(),
                                      (0, i.Wv)(
                                        eG,
                                        {
                                          key: 0,
                                          user: (0, i.R1)(r),
                                          class: (0, i.C4)(e.$style.user_widget_override),
                                        },
                                        null,
                                        8,
                                        ["user", "class"],
                                      ))
                                    : ((0, i.uX)(),
                                      (0, i.Wv)(
                                        N.A,
                                        {
                                          key: 1,
                                          size: "l",
                                          color: "lime",
                                          interfaceTarget: "open-sign-in-modal",
                                          label: e.$tr("header.login"),
                                          class: (0, i.C4)(e.$style.login_button_override),
                                          onClick: s,
                                        },
                                        null,
                                        8,
                                        ["label", "class"],
                                      )),
                                ],
                                64,
                              ))
                            : (0, i.Q3)("", !0),
                        ],
                        64,
                      )),
                ],
                2,
              )
            )
          },
        })
        let to = {}
        to.$style = {
          header: "mL5Ql",
          header_search_opened: "jjozW",
          headerSearchOpened: "jjozW",
          logo_link: "TINUO",
          logoLink: "TINUO",
          logo_override: "mI96Y",
          logoOverride: "mI96Y",
          "#": "QD7mn",
          user_widget_override: "a5_ll",
          userWidgetOverride: "a5_ll",
          login_button_override: "dLy6F",
          loginButtonOverride: "dLy6F",
        }
        let ts = (0, s.default)(tl, [["__cssModules", to]])
        var tc = a(39383),
          tu = a(11223),
          td = a(99782)
        let tp = ["title"]
        var tm = (0, i.pM)({
          __name: "LeftSide",
          props: { languageLinks: {} },
          setup(e) {
            let t = (0, tu.L)(),
              { topActive: a, bottomActive: n } = t,
              r = (0, i.KR)(null),
              o = (e) => {
                let t = e.currentTarget,
                  a = e.relatedTarget
                a === t ||
                  t?.contains(a) ||
                  setTimeout(() => {
                    r.value && r.value.scrollTo({ top: 0, behavior: "smooth" })
                  }, 120)
              },
              s = (0, R.q)(),
              { mainData: c } = (0, T.G)(),
              p = (0, i.EW)(() => c.value.menuCategoriesList || []),
              m = (0, i.EW)(() => Object.values((0, S.lw)(s))),
              v = (0, i.EW)(() => [
                { id: "heart", location: { name: g.V2.MY_GAMES }, title: s("myGames.title") },
                ...p.value,
                ...m.value.map((e) => ({ id: e.icon, title: e.title, location: e.to })),
              ]),
              _ = (0, i.EW)(() => [
                { ...(0, S.qg)(s), icon: "fennek" },
                {
                  title: s("navigation.for_developers"),
                  externalTo: S.F_,
                  icon: "bridge",
                  target: "_blank",
                },
                { title: s("navigation.contact_us"), icon: "smile", to: { name: g.V2.CONTACTS } },
                {
                  title: s("navigation.terms_of_use"),
                  icon: "flag",
                  to: { name: g.V2.TERMS_OF_USE },
                },
              ]),
              b = (0, i.EW)(() => (0, S.w7)(s))
            return (s, c) => (
              (0, i.uX)(),
              (0, i.CE)(
                "div",
                {
                  class: (0, i.C4)(s.$style.sidebar),
                  "data-interface-section": "sidebar",
                  tabindex: "0",
                  onFocusout: o,
                  onMouseleave: o,
                },
                [
                  (0, i.bF)(
                    d.A,
                    {
                      to: { name: (0, i.R1)(g.V2).MAIN },
                      "data-interface-target": "navigation-link",
                      class: (0, i.C4)([s.$style.icon_wrapper, s.$style.hovered]),
                      color: "rainbow",
                    },
                    {
                      default: (0, i.k6)(() => [
                        (0, i.bF)(
                          f.A,
                          { name: "fennek", class: (0, i.C4)(s.$style.icon) },
                          null,
                          8,
                          ["class"],
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["to", "class"],
                  ),
                  (0, i.bF)(
                    d.A,
                    {
                      to: { name: (0, i.R1)(g.V2).MAIN },
                      "data-interface-target": "navigation-link",
                      class: (0, i.C4)([s.$style.icon_wrapper, s.$style.non_hovered]),
                      hoverAnimation: "rainbow",
                    },
                    {
                      default: (0, i.k6)(() => [
                        (0, i.bF)(
                          f.A,
                          { name: "fennek", class: (0, i.C4)(s.$style.icon) },
                          null,
                          8,
                          ["class"],
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["to", "class"],
                  ),
                  (0, i.Lk)(
                    "div",
                    { class: (0, i.C4)(s.$style.wrapper) },
                    [
                      (0, i.Lk)(
                        "div",
                        {
                          ref_key: "scrollerRef",
                          ref: r,
                          class: (0, i.C4)(s.$style.scroller),
                          onScroll:
                            c[0] ||
                            (c[0] = (...e) =>
                              (0, i.R1)(t).onVerticalScroll && (0, i.R1)(t).onVerticalScroll(...e)),
                        },
                        [
                          ((0, i.uX)(!0),
                          (0, i.CE)(
                            i.FK,
                            null,
                            (0, i.pI)(
                              v.value,
                              (e) => (
                                (0, i.uX)(),
                                (0, i.CE)(
                                  i.FK,
                                  { key: e.id },
                                  [
                                    e.location
                                      ? ((0, i.uX)(),
                                        (0, i.Wv)(
                                          h.A,
                                          {
                                            key: 0,
                                            to: e.location,
                                            "data-interface-target": "category",
                                            title: e.title,
                                            class: (0, i.C4)(s.$style.item),
                                          },
                                          {
                                            default: (0, i.k6)(() => [
                                              (0, i.Lk)(
                                                "div",
                                                { class: (0, i.C4)(s.$style.item_content) },
                                                [
                                                  (0, i.bF)(
                                                    f.A,
                                                    {
                                                      name: e.id,
                                                      alt: e.title,
                                                      class: (0, i.C4)(s.$style.item_icon),
                                                    },
                                                    null,
                                                    8,
                                                    ["name", "alt", "class"],
                                                  ),
                                                  (0, i.bF)(
                                                    l.A,
                                                    {
                                                      type: "label",
                                                      size: "m",
                                                      accent: "",
                                                      class: (0, i.C4)(s.$style.item_content_title),
                                                      responsive: !1,
                                                    },
                                                    {
                                                      default: (0, i.k6)(() => [
                                                        (0, i.eW)((0, i.v_)(e.title), 1),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1032,
                                                    ["class"],
                                                  ),
                                                ],
                                                2,
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["to", "title", "class"],
                                        ))
                                      : (0, i.Q3)("", !0),
                                  ],
                                  64,
                                )
                              ),
                            ),
                            128,
                          )),
                          (0, i.Lk)(
                            "div",
                            { class: (0, i.C4)(s.$style.rest) },
                            [
                              (0, i.Lk)("div", { class: (0, i.C4)(s.$style.sep_section) }, null, 2),
                              ((0, i.uX)(!0),
                              (0, i.CE)(
                                i.FK,
                                null,
                                (0, i.pI)(
                                  _.value,
                                  (e) => (
                                    (0, i.uX)(),
                                    (0, i.Wv)(
                                      h.A,
                                      {
                                        key: e.title,
                                        title: e.title,
                                        class: (0, i.C4)(s.$style.item),
                                        tabindex: "-1",
                                        to: e.to,
                                        externalTo: e.externalTo,
                                        target: e.target,
                                        "data-interface-target": "navigation-link",
                                      },
                                      {
                                        default: (0, i.k6)(() => [
                                          (0, i.Lk)(
                                            "div",
                                            { class: (0, i.C4)(s.$style.item_content) },
                                            [
                                              (0, i.bF)(
                                                td.A,
                                                { ariaHidden: "" },
                                                {
                                                  default: (0, i.k6)(() => [
                                                    (0, i.eW)((0, i.v_)(e.title), 1),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024,
                                              ),
                                              (0, i.bF)(
                                                f.A,
                                                {
                                                  name: e.icon,
                                                  alt: e.title,
                                                  class: (0, i.C4)(s.$style.item_icon),
                                                },
                                                null,
                                                8,
                                                ["name", "alt", "class"],
                                              ),
                                              (0, i.bF)(
                                                l.A,
                                                {
                                                  type: "label",
                                                  size: "m",
                                                  accent: "",
                                                  class: (0, i.C4)(s.$style.item_content_title),
                                                  responsive: !1,
                                                },
                                                {
                                                  default: (0, i.k6)(() => [
                                                    (0, i.eW)((0, i.v_)(e.title), 1),
                                                  ]),
                                                  _: 2,
                                                },
                                                1032,
                                                ["class"],
                                              ),
                                            ],
                                            2,
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["title", "class", "to", "externalTo", "target"],
                                    )
                                  ),
                                ),
                                128,
                              )),
                              (0, i.Lk)("div", { class: (0, i.C4)(s.$style.sep_section) }, null, 2),
                              (0, i.Lk)(
                                "div",
                                { class: (0, i.C4)(s.$style.social_links) },
                                [
                                  ((0, i.uX)(!0),
                                  (0, i.CE)(
                                    i.FK,
                                    null,
                                    (0, i.pI)(
                                      b.value,
                                      (e) => (
                                        (0, i.uX)(),
                                        (0, i.CE)(
                                          "div",
                                          {
                                            key: e.title,
                                            title: e.title,
                                            class: (0, i.C4)(s.$style.item),
                                          },
                                          [
                                            (0, i.bF)(
                                              h.A,
                                              {
                                                externalTo: e.externalTo,
                                                target: e.target,
                                                "data-interface-target": "navigation-social-link",
                                                class: (0, i.C4)(s.$style.item_content),
                                              },
                                              {
                                                default: (0, i.k6)(() => [
                                                  (0, i.bF)(
                                                    f.A,
                                                    {
                                                      name: e.icon,
                                                      alt: e.title,
                                                      class: (0, i.C4)(s.$style.item_icon),
                                                    },
                                                    null,
                                                    8,
                                                    ["name", "alt", "class"],
                                                  ),
                                                  (0, i.bF)(
                                                    td.A,
                                                    { ariaHidden: "" },
                                                    {
                                                      default: (0, i.k6)(() => [
                                                        (0, i.eW)((0, i.v_)(e.title), 1),
                                                      ]),
                                                      _: 2,
                                                    },
                                                    1024,
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["externalTo", "target", "class"],
                                            ),
                                          ],
                                          10,
                                          tp,
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ],
                                2,
                              ),
                              (0, i.Lk)("div", { class: (0, i.C4)(s.$style.sep_section) }, null, 2),
                              (0, i.Lk)(
                                "div",
                                { class: (0, i.C4)(s.$style.lang_section) },
                                [
                                  (0, i.bF)(A, { languageLinks: e.languageLinks }, null, 8, [
                                    "languageLinks",
                                  ]),
                                ],
                                2,
                              ),
                              (0, i.Lk)("div", { class: (0, i.C4)(s.$style.sep_section) }, null, 2),
                              (0, i.Lk)(
                                "div",
                                { class: (0, i.C4)(s.$style.copyright_section) },
                                [(0, i.bF)(u)],
                                2,
                              ),
                            ],
                            2,
                          ),
                        ],
                        34,
                      ),
                      (0, i.Lk)(
                        "div",
                        {
                          class: (0, i.C4)([
                            s.$style.shadow,
                            s.$style.shadow_top,
                            { [s.$style.visible]: (0, i.R1)(a) },
                          ]),
                        },
                        null,
                        2,
                      ),
                      (0, i.Lk)(
                        "div",
                        {
                          class: (0, i.C4)([
                            s.$style.shadow,
                            s.$style.shadow_bottom,
                            { [s.$style.visible]: (0, i.R1)(n) },
                          ]),
                        },
                        null,
                        2,
                      ),
                    ],
                    2,
                  ),
                ],
                34,
              )
            )
          },
        })
        let tg = {}
        tg.$style = {
          sidebar: "Zldzq",
          wrapper: "dLYnr",
          scroller: "RLcZ2",
          shadow: "Q4tmu",
          visible: "kfObB",
          shadow_top: "GwTPy",
          shadowTop: "GwTPy",
          shadow_bottom: "ZYmmU",
          shadowBottom: "ZYmmU",
          item: "LWb6j",
          item_icon: "pA8l8",
          itemIcon: "pA8l8",
          item_content: "iu70J",
          itemContent: "iu70J",
          item_content_title: "mqKRr",
          itemContentTitle: "mqKRr",
          icon_wrapper: "dqCmq",
          iconWrapper: "dqCmq",
          hovered: "WD9La",
          icon: "sCjly",
          non_hovered: "oPLYd",
          nonHovered: "oPLYd",
          rest: "kNA2L",
          sep_section: "EC1j_",
          sepSection: "EC1j_",
          lang_section: "yjDTA",
          langSection: "yjDTA",
          copyright_section: "DVvjZ",
          copyrightSection: "DVvjZ",
          social_links: "WNXh2",
          socialLinks: "WNXh2",
        }
        let tv = (0, s.default)(tm, [["__cssModules", tg]])
        var th = a(77100),
          tf = a(80217),
          t_ = a(26757),
          tb = (0, i.pM)({
            __name: "QuickPlayOverlay",
            setup(e) {
              let t = (0, r.lq)(),
                a = (0, t_.S)(),
                n = (0, x.u)()
              ;((0, i.wB)(
                () => a.gameHru,
                (e, t) => {
                  e && !t && history.pushState({ quickPlay: !0 }, "")
                },
              ),
                (0, i.sV)(() => {
                  window.addEventListener("popstate", p)
                }),
                (0, i.hi)(() => {
                  ;(window.removeEventListener("popstate", p), p())
                }))
              let l = (0, i.EW)(() => a.gameHru || ""),
                { game: o, gameCatInfo: s } = (0, tf.h)({ hru: l, isExport: !1 }),
                c = (0, i.KR)(!1),
                u = (0, i.EW)(() =>
                  a.gameHru
                    ? n({
                        name: g.V2.EXPORT_GAME_PAGE,
                        params: { locale: "", game: a.gameHru },
                        query: { ...t.query, export_mode: "portal" },
                      })
                    : "",
                )
              function d(e) {
                if (o.value?.is_hidden && !o.value.gameUrlRedirectTarget) {
                  s.value?.pathCategories[0] && p()
                  return
                }
                o.value && !c.value && (e(!0), (c.value = !0))
              }
              function p() {
                ;((c.value = !1), a.close(), history.state?.quickPlay && history.back())
              }
              return (e, t) =>
                (0, i.R1)(a).gameHru && (0, i.R1)(o)
                  ? ((0, i.uX)(),
                    (0, i.CE)(
                      "div",
                      { key: 0, class: (0, i.C4)(e.$style.overlay) },
                      [
                        (0, i.bF)(
                          th.A,
                          {
                            quickPlay: "",
                            game: (0, i.R1)(o),
                            exportGameURL: u.value,
                            categories: (0, i.R1)(s),
                            isExportPageOpened: c.value,
                            onStartPlayingGame: d,
                            onCloseGame: p,
                          },
                          null,
                          8,
                          ["game", "exportGameURL", "categories", "isExportPageOpened"],
                        ),
                      ],
                      2,
                    ))
                  : (0, i.Q3)("", !0)
            },
          })
        let ty = {}
        ty.$style = { overlay: "R9hKD" }
        let tw = (0, s.default)(tb, [["__cssModules", ty]])
        var tk = a(81865),
          tC = a(53018),
          tE = a(93992),
          tA = a(43088),
          tx = (0, i.pM)({
            __name: "DesktopStickyBanner",
            setup(e) {
              let t = (0, eh.G)(),
                a = (0, tA.a)(),
                n = (0, i.KR)(!0),
                r = (0, i.KR)(!0),
                l = (0, i.KR)()
              function o() {
                ;(t.logEvent({
                  event: "custom_event",
                  eventName: "ad_close",
                  adPlacement: "sticky_desktop",
                }),
                  (n.value = !1))
              }
              return (
                (0, H.BLq)(l, (e) => {
                  r.value = !e[0]?.isIntersecting
                }),
                (e, t) => (
                  (0, i.uX)(),
                  (0, i.CE)(
                    i.FK,
                    null,
                    [
                      (0, i.Lk)("div", { ref_key: "sentinelRef", ref: l }, null, 512),
                      (0, i.R1)(a)
                        ? ((0, i.uX)(),
                          (0, i.Wv)(
                            i.eB,
                            {
                              key: 0,
                              enterFromClass: e.$style.fade_enter_from,
                              enterActiveClass: e.$style.fade_enter_active,
                              leaveActiveClass: e.$style.fade_leave_active,
                              leaveToClass: e.$style.fade_leave_to,
                              appear: "",
                            },
                            {
                              default: (0, i.k6)(() => [
                                n.value
                                  ? ((0, i.uX)(),
                                    (0, i.CE)(
                                      "div",
                                      { key: 0, class: (0, i.C4)(e.$style.banner) },
                                      [
                                        (0, i.bF)(
                                          tE.A,
                                          { type: "sticky_desktop" },
                                          {
                                            default: (0, i.k6)(({ isVisible: t }) => [
                                              t && r.value
                                                ? ((0, i.uX)(),
                                                  (0, i.Wv)(
                                                    N.A,
                                                    {
                                                      key: 0,
                                                      size: "s",
                                                      color: "carbon-400",
                                                      class: (0, i.C4)(
                                                        e.$style.close_button_override,
                                                      ),
                                                      interfaceTarget:
                                                        "close-sticky-desktop-banner",
                                                      label: e.$tr(
                                                        "desktopStickyBanner.closeButtonLabel",
                                                      ),
                                                      onClick: o,
                                                    },
                                                    null,
                                                    8,
                                                    ["class", "label"],
                                                  ))
                                                : (0, i.Q3)("", !0),
                                            ]),
                                            _: 1,
                                          },
                                        ),
                                      ],
                                      2,
                                    ))
                                  : (0, i.Q3)("", !0),
                              ]),
                              _: 1,
                            },
                            8,
                            [
                              "enterFromClass",
                              "enterActiveClass",
                              "leaveActiveClass",
                              "leaveToClass",
                            ],
                          ))
                        : (0, i.Q3)("", !0),
                    ],
                    64,
                  )
                )
              )
            },
          })
        let tR = {}
        tR.$style = {
          banner: "fuK8J",
          close_button_override: "QNwI2",
          closeButtonOverride: "QNwI2",
          "#": "mwUfF",
          fade_enter_active: "VJgdG",
          fadeEnterActive: "VJgdG",
          fade_leave_active: "dGk5e",
          fadeLeaveActive: "dGk5e",
          fade_enter_from: "WexEe",
          fadeEnterFrom: "WexEe",
          fade_leave_to: "Y2Hv5",
          fadeLeaveTo: "Y2Hv5",
        }
        let tT = (0, s.default)(tx, [["__cssModules", tR]])
        var tS = (0, i.pM)({
          __name: "MobileStickyBanner",
          setup(e) {
            let t = (0, eh.G)(),
              a = (0, V.l)(),
              { screenOrientation: r } = (0, n.bP)(a),
              l = (0, tA.a)(),
              o = (0, i.KR)(!1),
              s = (0, i.KR)(!0),
              c = (0, i.KR)(!0),
              u = (0, i.KR)()
            function d() {
              ;(t.logEvent({
                event: "custom_event",
                eventName: "ad_close",
                adPlacement: "sticky_mobile",
              }),
                (s.value = !1))
            }
            function p(e) {
              o.value = e
            }
            return (
              (0, H.BLq)(u, (e) => {
                c.value = !e[0]?.isIntersecting
              }),
              (e, t) => (
                (0, i.uX)(),
                (0, i.CE)(
                  i.FK,
                  null,
                  [
                    (0, i.Lk)("div", { ref_key: "sentinelRef", ref: u }, null, 512),
                    (0, i.R1)(l) && "landscape" !== (0, i.R1)(r)
                      ? ((0, i.uX)(),
                        (0, i.Wv)(
                          i.eB,
                          {
                            key: 0,
                            enterFromClass: e.$style.fade_enter_from,
                            enterActiveClass: e.$style.fade_enter_active,
                            leaveActiveClass: e.$style.fade_leave_active,
                            leaveToClass: e.$style.fade_leave_to,
                            appear: "",
                          },
                          {
                            default: (0, i.k6)(() => [
                              s.value
                                ? ((0, i.uX)(),
                                  (0, i.CE)(
                                    "div",
                                    { key: 0, class: (0, i.C4)(e.$style.banner) },
                                    [
                                      o.value && c.value
                                        ? ((0, i.uX)(),
                                          (0, i.CE)(
                                            i.FK,
                                            { key: 0 },
                                            [
                                              (0, i.Lk)(
                                                "div",
                                                { class: (0, i.C4)(e.$style.backdrop) },
                                                null,
                                                2,
                                              ),
                                              (0, i.Lk)(
                                                "button",
                                                {
                                                  class: (0, i.C4)(e.$style.close_button),
                                                  "data-interface-target":
                                                    "close-sticky-desktop-banner",
                                                  onClick: d,
                                                },
                                                [
                                                  (0, i.bF)(
                                                    f.A,
                                                    {
                                                      name: "close",
                                                      class: (0, i.C4)(e.$style.close_icon),
                                                    },
                                                    null,
                                                    8,
                                                    ["class"],
                                                  ),
                                                ],
                                                2,
                                              ),
                                            ],
                                            64,
                                          ))
                                        : (0, i.Q3)("", !0),
                                      (0, i.bF)(
                                        tE.A,
                                        {
                                          type: "sticky_mobile_non_game_page",
                                          class: (0, i.C4)(e.$style.ad_block_override),
                                          "onUpdate:visible": p,
                                        },
                                        null,
                                        8,
                                        ["class"],
                                      ),
                                    ],
                                    2,
                                  ))
                                : (0, i.Q3)("", !0),
                            ]),
                            _: 1,
                          },
                          8,
                          [
                            "enterFromClass",
                            "enterActiveClass",
                            "leaveActiveClass",
                            "leaveToClass",
                          ],
                        ))
                      : (0, i.Q3)("", !0),
                  ],
                  64,
                )
              )
            )
          },
        })
        let t$ = {}
        t$.$style = {
          banner: "IMIzq",
          close_button: "gsNCd",
          closeButton: "gsNCd",
          close_icon: "Ww9Z6",
          closeIcon: "Ww9Z6",
          backdrop: "kH68r",
          ad_block_override: "jQLbs",
          adBlockOverride: "jQLbs",
          "#": "_awg7",
          fade_enter_active: "t1UTw",
          fadeEnterActive: "t1UTw",
          fade_leave_active: "wYnNG",
          fadeLeaveActive: "wYnNG",
          fade_enter_from: "ihvYh",
          fadeEnterFrom: "ihvYh",
          fade_leave_to: "ul92q",
          fadeLeaveTo: "ul92q",
        }
        let tL = (0, s.default)(tS, [["__cssModules", t$]])
        var tP = (0, i.pM)({
            __name: "StickyBanner",
            setup(e) {
              let t = (0, tC.w)(),
                { promptDisplayed: a } = (0, n.bP)((0, tk.k)()),
                l = (0, r.lq)(),
                { fullScreen: o } = (0, n.bP)((0, V.l)()),
                { platform: s, isAppEnv: c } = (0, n.bP)((0, $.C)()),
                u = (0, i.EW)(() => "desktop" === s.value && l.meta.showDesktopStickyBanner),
                d = (0, i.EW)(
                  () =>
                    "desktop" !== s.value &&
                    l.meta.showMobileStickyBanner &&
                    !o.value &&
                    !t.isDisplaying &&
                    !c.value &&
                    !a.value,
                )
              return (e, t) => (
                (0, i.uX)(),
                (0, i.CE)(
                  i.FK,
                  null,
                  [
                    u.value
                      ? ((0, i.uX)(), (0, i.Wv)(tT, { key: (0, i.R1)(l).path }))
                      : (0, i.Q3)("", !0),
                    d.value
                      ? ((0, i.uX)(), (0, i.Wv)(tL, { key: (0, i.R1)(l).path }))
                      : (0, i.Q3)("", !0),
                  ],
                  64,
                )
              )
            },
          }),
          tM = a(3231),
          tI = a(84603)
        let tO = ["src", "alt"]
        var tB = (0, i.pM)({
          __name: "ToasterContainer",
          props: {
            description: {},
            title: {},
            animation: {},
            isFullScreenAllowed: { type: Boolean },
            image: {},
            buttonText: {},
            closeButton: { type: Boolean },
            altImg: {},
            interfaceTarget: {},
            imageStyles: {},
          },
          emits: ["onAction", "onClose"],
          setup(e) {
            let t = (0, R.q)(),
              n = (0, i.$V)(() =>
                a
                  .e("3461")
                  .then(a.bind(a, 33124))
                  .then((e) => e.Vue3Lottie),
              )
            return (e, a) => (
              (0, i.uX)(),
              (0, i.CE)(
                "div",
                { class: (0, i.C4)(e.$style.toast_container) },
                [
                  (0, i.Lk)(
                    "div",
                    {
                      class: (0, i.C4)([
                        e.$style.toast,
                        e.closeButton && e.$style.toast_close_button,
                      ]),
                    },
                    [
                      e.closeButton
                        ? ((0, i.uX)(),
                          (0, i.Wv)(
                            tI.A,
                            {
                              key: 0,
                              icon: "close",
                              color: "white-60",
                              size: "m",
                              class: (0, i.C4)(e.$style.close_override),
                              interfaceTarget: `close-${e.interfaceTarget}`,
                              onClick: a[0] || (a[0] = (t) => e.$emit("onClose")),
                            },
                            null,
                            8,
                            ["class", "interfaceTarget"],
                          ))
                        : (0, i.Q3)("", !0),
                      (0, i.Lk)(
                        "div",
                        { class: (0, i.C4)(e.$style.instructions) },
                        [
                          e.animation
                            ? ((0, i.uX)(),
                              (0, i.CE)(
                                "div",
                                { key: 0, class: (0, i.C4)(e.$style.animation) },
                                [
                                  (0, i.bF)((0, i.R1)(n), { animationData: e.animation }, null, 8, [
                                    "animationData",
                                  ]),
                                ],
                                2,
                              ))
                            : (0, i.Q3)("", !0),
                          e.image
                            ? ((0, i.uX)(),
                              (0, i.CE)(
                                "img",
                                {
                                  key: 1,
                                  class: (0, i.C4)(e.$style.image),
                                  src: e.image,
                                  style: (0, i.Tr)(e.imageStyles),
                                  alt: (0, i.R1)(t)("toast-pwa.description"),
                                  loading: "lazy",
                                },
                                null,
                                14,
                                tO,
                              ))
                            : (0, i.Q3)("", !0),
                          (0, i.bF)(
                            l.A,
                            {
                              type: "header",
                              size: "xs",
                              accent: "",
                              responsive: !1,
                              class: (0, i.C4)(e.$style.header),
                            },
                            { default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(e.title), 1)]), _: 1 },
                            8,
                            ["class"],
                          ),
                          (0, i.bF)(
                            l.A,
                            {
                              type: "paragraph",
                              size: "s",
                              responsive: !1,
                              class: (0, i.C4)([
                                e.$style.paragraph,
                                { [e.$style.no_button_gap]: !e.buttonText },
                              ]),
                            },
                            {
                              default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(e.description), 1)]),
                              _: 1,
                            },
                            8,
                            ["class"],
                          ),
                          e.buttonText
                            ? ((0, i.uX)(),
                              (0, i.Wv)(
                                N.A,
                                {
                                  key: 2,
                                  size: "m",
                                  class: (0, i.C4)(e.$style.accept_override),
                                  interfaceTarget: `accept-${e.interfaceTarget}`,
                                  width: "full",
                                  label: e.buttonText,
                                  onClick: a[1] || (a[1] = (t) => e.$emit("onAction")),
                                },
                                null,
                                8,
                                ["class", "interfaceTarget", "label"],
                              ))
                            : (0, i.Q3)("", !0),
                        ],
                        2,
                      ),
                    ],
                    2,
                  ),
                ],
                2,
              )
            )
          },
        })
        let tF = {}
        tF.$style = {
          toast_container: "fpb8o",
          toastContainer: "fpb8o",
          toast: "RumI_",
          toast_close_button: "Uf2jg",
          toastCloseButton: "Uf2jg",
          close_override: "QLOLh",
          closeOverride: "QLOLh",
          "#": "HHSAW",
          instructions: "RTDu1",
          image: "qvRNZ",
          animation: "GUYjq",
          header: "IjuEt",
          paragraph: "ax6V9",
          accept_override: "JMagK",
          acceptOverride: "JMagK",
          no_button_gap: "SIMqI",
          noButtonGap: "SIMqI",
        }
        let tD = (0, s.default)(tB, [["__cssModules", tF]])
        var tW = (0, i.pM)({
          __name: "Toaster",
          props: { isFullScreen: { type: Boolean } },
          setup(e) {
            let t = (0, tM.W)(),
              a = (0, tA.a)(),
              r = (0, i.KR)(null),
              { isVisible: l, toast: o } = (0, n.bP)(t),
              s = (0, i.EW)(() => l.value && (!e.isFullScreen || o.value?.isFullScreenAllowed))
            return (
              (0, i.wB)(
                () => t.toast,
                () => {
                  t.toast?.showTimeoutMs &&
                    (r.value = setTimeout(() => {
                      ;(t.isVisible && t.closeToast(), (r.value = null))
                    }, t.toast?.showTimeoutMs))
                },
              ),
              (0, i.hi)(() => {
                r.value && (clearTimeout(r.value), (r.value = null))
              }),
              (e, n) =>
                (0, i.R1)(a)
                  ? ((0, i.uX)(),
                    (0, i.Wv)(i.Im, { key: 0, to: "body" }, [
                      (0, i.bF)(
                        i.eB,
                        {
                          enterActiveClass: e.$style.transition_enter_active,
                          enterFromClass: e.$style.transition_enter_from,
                          leaveActiveClass: e.$style.transition_leave_active,
                          leaveToClass: e.$style.transition_leave_to,
                          appear: "",
                        },
                        {
                          default: (0, i.k6)(() => [
                            s.value && (0, i.R1)(o)
                              ? ((0, i.uX)(),
                                (0, i.Wv)(
                                  tD,
                                  {
                                    key: 0,
                                    closeButton: "",
                                    class: (0, i.C4)(e.$style.toast_container_override),
                                    title: (0, i.R1)(o).title,
                                    image: (0, i.R1)(o).image,
                                    altImg: (0, i.R1)(o).description,
                                    description: (0, i.R1)(o).description,
                                    animation: (0, i.R1)(o).animation,
                                    buttonText: (0, i.R1)(o).buttonText,
                                    imageStyles: (0, i.R1)(o).imageStyles,
                                    interfaceTarget: `${(0, i.R1)(o).type}-toast`,
                                    onOnClose: (0, i.R1)(t).closeToast,
                                    onOnAction: (0, i.R1)(t).acceptToast,
                                  },
                                  null,
                                  8,
                                  [
                                    "class",
                                    "title",
                                    "image",
                                    "altImg",
                                    "description",
                                    "animation",
                                    "buttonText",
                                    "imageStyles",
                                    "interfaceTarget",
                                    "onOnClose",
                                    "onOnAction",
                                  ],
                                ))
                              : (0, i.Q3)("", !0),
                          ]),
                          _: 1,
                        },
                        8,
                        ["enterActiveClass", "enterFromClass", "leaveActiveClass", "leaveToClass"],
                      ),
                    ]))
                  : (0, i.Q3)("", !0)
            )
          },
        })
        let tN = {}
        tN.$style = {
          transition_enter_active: "_1EeK",
          transitionEnterActive: "_1EeK",
          transition_leave_active: "BbFKI",
          transitionLeaveActive: "BbFKI",
          transition_enter_from: "txK6g",
          transitionEnterFrom: "txK6g",
          transition_leave_to: "pkYQe",
          transitionLeaveTo: "pkYQe",
          toast_container_override: "SD90T",
          toastContainerOverride: "SD90T",
          "#": "p7Mxa",
        }
        let tG = (0, s.default)(tW, [["__cssModules", tN]])
        var tU = a(23624),
          tV = a(43438),
          tz = (0, i.pM)({
            __name: "Layout",
            props: { localeData: {}, additionalCategories: {} },
            setup(e) {
              let t = (0, tk.k)(),
                a = (0, V.l)(),
                l = (0, z.k)(),
                o = (0, $.C)(),
                { initialized: s } = (0, n.bP)(t),
                { isAuthorized: c } = (0, n.bP)(l),
                { fullScreen: u } = (0, n.bP)(a),
                d = (0, U.C)(),
                { suspense: p } = (0, T.G)(),
                m = (0, tC.w)(),
                v = (0, tV.c)(),
                h = (0, i.EW)(() => f.name === g.V2.GAME_PAGE),
                f = (0, r.lq)(),
                _ = (0, i.KR)(null)
              function b() {
                s.value && d.value && t.setPrompt()
              }
              function y() {
                u.value
                  ? t.cancelPrompt()
                  : setTimeout(() => {
                      b()
                    }, 100)
              }
              return (
                (0, i.wB)([s, d], b),
                (0, i.wB)(u, y),
                (0, tU.y)(u),
                (0, i.wB)(c, (e) => {
                  e && t.cancelPrompt()
                }),
                (0, i.SS)(p),
                (0, i.sV)(() => {
                  ;(y(),
                    (h.value && "desktop" === o.platform) ||
                      (_.value = setTimeout(() => {
                        ;((_.value = null),
                          o.isPWA
                            ? v.showSubscriptionPrompt({ considerMinVisits: !0 })
                            : m.showPWAInstallPrompt())
                      }, 3e3)),
                    (window.openLoginPopupFromAdBanner = () => {
                      !c.value && d.value && a.openSignInModal("window.open_login_popup_call")
                    }))
                }),
                (0, i.hi)(() => {
                  _.value && (clearTimeout(_.value), (_.value = null))
                }),
                (t, a) => (
                  (0, i.uX)(),
                  (0, i.CE)(
                    "div",
                    { class: (0, i.C4)(t.$styleCrit.container) },
                    [
                      (0, i.Lk)(
                        "div",
                        { class: (0, i.C4)(t.$styleCrit.grid) },
                        [
                          (0, i.Lk)(
                            "div",
                            { class: (0, i.C4)(t.$styleCrit.overlay_blur) },
                            null,
                            2,
                          ),
                          (0, i.bF)(
                            tc.A,
                            { hydrate: (0, i.rU)() },
                            {
                              default: (0, i.k6)(() => [
                                (0, i.Lk)(
                                  "div",
                                  { class: (0, i.C4)(t.$styleCrit.left) },
                                  [
                                    (0, i.bF)(
                                      tv,
                                      { languageLinks: e.localeData?.languageLinks },
                                      null,
                                      8,
                                      ["languageLinks"],
                                    ),
                                  ],
                                  2,
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["hydrate"],
                          ),
                          (0, i.Lk)(
                            "div",
                            { class: (0, i.C4)(t.$styleCrit.right) },
                            [
                              (0, i.bF)(
                                tc.A,
                                { hydrate: (0, i.rU)() },
                                {
                                  default: (0, i.k6)(() => [
                                    (0, i.bF)(
                                      ez,
                                      { class: (0, i.C4)(t.$styleCrit.desktop_header_override) },
                                      null,
                                      8,
                                      ["class"],
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["hydrate"],
                              ),
                              (0, i.bF)(
                                tc.A,
                                { hydrate: (0, i.rU)() },
                                {
                                  default: (0, i.k6)(() => [
                                    (0, i.bF)(
                                      ts,
                                      { class: (0, i.C4)(t.$styleCrit.mobile_header_override) },
                                      null,
                                      8,
                                      ["class"],
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["hydrate"],
                              ),
                              (0, i.RG)(t.$slots, "default"),
                              (0, i.bF)(
                                tc.A,
                                { hydrate: (0, i.rU)() },
                                {
                                  default: (0, i.k6)(() => [
                                    (0, i.bF)(
                                      W,
                                      {
                                        languageLinks: e.localeData?.languageLinks,
                                        additionalCategories: e.additionalCategories,
                                      },
                                      null,
                                      8,
                                      ["languageLinks", "additionalCategories"],
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["hydrate"],
                              ),
                            ],
                            2,
                          ),
                          (0, i.bF)(tP),
                        ],
                        2,
                      ),
                      (0, i.bF)(
                        tc.A,
                        { hydrate: (0, i.rU)() },
                        {
                          default: (0, i.k6)(() => [
                            (0, i.bF)(tG, { isFullScreen: (0, i.R1)(u) }, null, 8, [
                              "isFullScreen",
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["hydrate"],
                      ),
                      (0, i.bF)(tw),
                    ],
                    2,
                  )
                )
              )
            },
          })
        let tH = {}
        ;((tH.$styleCrit = {
          desktop_header_override: "Q8l1p",
          desktopHeaderOverride: "Q8l1p",
          "#": "aJF6R",
          mobile_header_override: "w5Ngj",
          mobileHeaderOverride: "w5Ngj",
          left: "MGWb5",
          container: "lBQwl",
          grid: "Hk5Zo",
          right: "JCalZ",
          overlay_blur: "FyAZp",
          overlayBlur: "FyAZp",
        }),
          (tH.$style = {
            desktop_header_override: "Q8l1p",
            desktopHeaderOverride: "Q8l1p",
            "#": "aJF6R",
            mobile_header_override: "w5Ngj",
            mobileHeaderOverride: "w5Ngj",
            left: "MGWb5",
            overlay_blur: "FyAZp",
            overlayBlur: "FyAZp",
          }))
        var tX = (0, s.default)(tz, [["__cssModules", tH]])
      },
      77897: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return s
          },
        })
        var i = a(3144),
          n = a(93911),
          r = a(79660),
          l = a(62656),
          o = a(30232),
          s = (0, i.pM)({
            __name: "ErrorPage",
            props: { type: {} },
            setup(e) {
              let { getCanonicalAndAlternates: t } = (0, l.z)()
              return (
                (0, n.u)(() => ({ link: t({ forRoute: { name: o.V2.MAIN } }) })),
                (e, t) => (
                  (0, i.uX)(),
                  (0, i.Wv)(r.A, { type: e.type, showButtons: "" }, null, 8, ["type"])
                )
              )
            },
          })
      },
      2993: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return ed
          },
        })
        var i = a(3144),
          n = a(39383),
          r = (0, i.pM)({
            __name: "NonCriticalCSSInject",
            setup: (e) => (e, t) => (
              (0, i.uX)(),
              (0, i.Wv)(
                n.A,
                { hydrate: () => {} },
                {
                  default: (0, i.k6)(() => [
                    ...(t[0] ||
                      (t[0] = [
                        (0, i.Lk)(
                          "div",
                          { "data-allow-mismatch": "" },
                          [(0, i.Lk)("noscript", null, "NON-CRITICAL-CSS-INJECT")],
                          -1,
                        ),
                      ])),
                  ]),
                  _: 1,
                },
              )
            ),
          }),
          l = a(10906),
          o = a(98289),
          s = a(81236),
          c = (0, i.pM)({
            __name: "FullscreenButton",
            props: { isFullscreen: { type: Boolean } },
            emits: ["click"],
            setup:
              (e, { emit: t }) =>
              (a, n) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  l.A,
                  {
                    color: "carbon-400",
                    "aria-label": a.$tr("gameContainer.fullscreen"),
                    interfaceTarget: "toggle-fullscreen",
                    class: (0, i.C4)(a.$style.button_override),
                    onClick: n[0] || (n[0] = (e) => t("click")),
                  },
                  {
                    default: (0, i.k6)(() => [
                      (0, i.bF)(
                        o.A,
                        { name: e.isFullscreen ? "collapse" : "fullscreen" },
                        null,
                        8,
                        ["name"],
                      ),
                      (0, i.bF)(
                        s.A,
                        {
                          size: "m",
                          type: "label",
                          accent: "",
                          responsive: !1,
                          class: (0, i.C4)(a.$style.button_label),
                        },
                        {
                          default: (0, i.k6)(() => [
                            (0, i.eW)((0, i.v_)(a.$tr("gameContainer.fullscreen")), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"],
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["aria-label", "class"],
                )
              ),
          }),
          u = a(97939)
        let d = {}
        d.$style = {
          button_override: "LPp9q",
          buttonOverride: "LPp9q",
          "#": "c7Wk_",
          button_label: "kRO3k",
          buttonLabel: "kRO3k",
        }
        let p = (0, u.default)(c, [["__cssModules", d]])
        var m = (0, i.pM)({
          __name: "DesktopFooterMinimalContent",
          props: { isFullscreen: { type: Boolean } },
          emits: ["toggleFullscreen", "closeGame"],
          setup(e, { expose: t, emit: a }) {
            let n = (0, i.rk)("login-button")
            return (
              t({ showLoginTooltip: () => n.value?.showTooltip() }),
              (t, n) => (
                (0, i.uX)(),
                (0, i.CE)(
                  i.FK,
                  null,
                  [
                    (0, i.bF)(
                      l.A,
                      {
                        color: "carbon-400",
                        interfaceTarget: "game-back-button",
                        class: (0, i.C4)(t.$style.back_button_override),
                        onClick: n[0] || (n[0] = (e) => a("closeGame")),
                      },
                      {
                        default: (0, i.k6)(() => [
                          (0, i.bF)(o.A, { name: "chevron-left" }),
                          (0, i.bF)(
                            s.A,
                            { size: "m", type: "label", accent: "", responsive: !1 },
                            {
                              default: (0, i.k6)(() => [
                                (0, i.eW)((0, i.v_)(t.$tr("gameContainer.back")), 1),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["class"],
                    ),
                    (0, i.Lk)("div", { class: (0, i.C4)(t.$style.panel_spacer) }, null, 2),
                    (0, i.Lk)(
                      "div",
                      { class: (0, i.C4)(t.$style.panel_buttons) },
                      [
                        (0, i.bF)(
                          p,
                          {
                            isFullscreen: e.isFullscreen,
                            onClick: n[1] || (n[1] = (e) => a("toggleFullscreen")),
                          },
                          null,
                          8,
                          ["isFullscreen"],
                        ),
                      ],
                      2,
                    ),
                  ],
                  64,
                )
              )
            )
          },
        })
        let g = {}
        g.$style = {
          panel_spacer: "pFfi2",
          panelSpacer: "pFfi2",
          panel_buttons: "ZmwPJ",
          panelButtons: "ZmwPJ",
          back_button_override: "SauqN",
          backButtonOverride: "SauqN",
          "#": "VyV9U",
        }
        let v = (0, u.default)(m, [["__cssModules", g]])
        var h = a(93883),
          f = a(33281),
          _ = a(32978),
          b = a(28063),
          y = a(90053),
          w = a(59812),
          k = a(61718),
          C = a(31928),
          E = (0, i.pM)({
            __name: "TooltipPopup",
            props: {
              position: { default: "top" },
              offset: { default: 6 },
              interfaceTarget: {},
              triggerClass: {},
            },
            setup(e, { expose: t }) {
              let a = (0, i.KR)(null),
                n = (0, i.KR)(null),
                {
                  isVisible: r,
                  showTooltip: l,
                  hideTooltip: o,
                  adjustedPosition: s,
                  tooltipStyle: c,
                  onHoverTooltip: u,
                } = (0, C.f)({
                  trigger: a,
                  hideDelayMs: 100,
                  tooltip: n,
                  additionalOffset: e.offset,
                  position: e.position,
                }),
                d = (0, i.KR)("")
              t({
                showTooltip: function () {
                  ;(l(), (d.value = "external-trigger"))
                },
                hideTooltip: o,
              })
              let p = (0, w.q)()
              return (
                (0, i.wB)(
                  () => r.value,
                  () => {
                    if (r.value) {
                      let t = d.value ? `${e.interfaceTarget}-${d.value}` : e.interfaceTarget
                      p.trigger({ id: t, interface_target: t })
                    } else d.value = ""
                  },
                ),
                (t, d) => (
                  (0, i.uX)(),
                  (0, i.CE)(
                    i.FK,
                    null,
                    [
                      (0, i.Lk)(
                        "span",
                        {
                          ref_key: "trigger",
                          ref: a,
                          class: (0, i.C4)([(0, i.R1)(k.A).triggerElement, e.triggerClass]),
                          onMouseenter:
                            d[0] || (d[0] = (...e) => (0, i.R1)(l) && (0, i.R1)(l)(...e)),
                          onMouseleave:
                            d[1] || (d[1] = (...e) => (0, i.R1)(o) && (0, i.R1)(o)(...e)),
                          onFocus: d[2] || (d[2] = (...e) => (0, i.R1)(l) && (0, i.R1)(l)(...e)),
                          onBlur: d[3] || (d[3] = (...e) => (0, i.R1)(o) && (0, i.R1)(o)(...e)),
                        },
                        [(0, i.RG)(t.$slots, "default")],
                        34,
                      ),
                      ((0, i.uX)(),
                      (0, i.Wv)(i.Im, { to: "body" }, [
                        (0, i.bF)(
                          i.eB,
                          {
                            enterActiveClass: (0, i.R1)(k.A)[`tooltip-${(0, i.R1)(s)}`],
                            leaveActiveClass: `${(0, i.R1)(k.A)[`tooltip-${(0, i.R1)(s)}`]} ${(0, i.R1)(k.A).reverse}`,
                          },
                          {
                            default: (0, i.k6)(() => [
                              (0, i.R1)(r) && t.$slots.content
                                ? ((0, i.uX)(),
                                  (0, i.CE)(
                                    "div",
                                    {
                                      key: 0,
                                      ref_key: "tooltip",
                                      ref: n,
                                      class: (0, i.C4)((0, i.R1)(k.A).tooltip),
                                      style: (0, i.Tr)((0, i.R1)(c)),
                                      onMouseenter:
                                        d[4] ||
                                        (d[4] = (...e) => (0, i.R1)(u) && (0, i.R1)(u)(...e)),
                                      onMouseleave:
                                        d[5] ||
                                        (d[5] = (...e) => (0, i.R1)(o) && (0, i.R1)(o)(...e)),
                                    },
                                    [
                                      (0, i.RG)(t.$slots, "content", {
                                        interfaceTarget: e.interfaceTarget,
                                      }),
                                    ],
                                    38,
                                  ))
                                : (0, i.Q3)("", !0),
                            ]),
                            _: 3,
                          },
                          8,
                          ["enterActiveClass", "leaveActiveClass"],
                        ),
                      ])),
                    ],
                    64,
                  )
                )
              )
            },
          }),
          A = a(14410),
          x = a.p + "static/image/discord.2902f644.webp"
        let R = ["src", "alt"]
        var T = (0, i.pM)({
          __name: "TooltipContent",
          props: { image: {}, title: {}, description: {} },
          setup: (e) => (t, a) => (
            (0, i.uX)(),
            (0, i.CE)(
              "div",
              { class: (0, i.C4)(t.$style.content) },
              [
                t.$slots.image
                  ? (0, i.Q3)("", !0)
                  : ((0, i.uX)(),
                    (0, i.CE)(
                      "img",
                      { key: 0, src: e.image, class: (0, i.C4)(t.$style.image), alt: e.title },
                      null,
                      10,
                      R,
                    )),
                (0, i.RG)(t.$slots, "image"),
                (0, i.Lk)(
                  "div",
                  { class: (0, i.C4)(t.$style.label_container) },
                  [
                    (0, i.bF)(
                      s.A,
                      {
                        type: "label",
                        size: "l",
                        semibold: "",
                        class: (0, i.C4)(t.$style.title),
                        responsive: !1,
                      },
                      { default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(e.title), 1)]), _: 1 },
                      8,
                      ["class"],
                    ),
                    e.description
                      ? ((0, i.uX)(),
                        (0, i.Wv)(
                          s.A,
                          {
                            key: 0,
                            type: "paragraph",
                            size: "s",
                            class: (0, i.C4)(t.$style.description),
                            responsive: !1,
                          },
                          {
                            default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(e.description), 1)]),
                            _: 1,
                          },
                          8,
                          ["class"],
                        ))
                      : (0, i.Q3)("", !0),
                  ],
                  2,
                ),
                (0, i.RG)(t.$slots, "default"),
              ],
              2,
            )
          ),
        })
        let S = {}
        S.$style = {
          content: "CxKQ6",
          image: "jNeK7",
          label_container: "Opmi_",
          labelContainer: "Opmi_",
          title: "LvKeL",
          description: "I5oUW",
        }
        let $ = (0, u.default)(T, [["__cssModules", S]])
        var L = (0, i.pM)({
            __name: "DiscordButton",
            props: { className: {} },
            setup(e) {
              let t = (0, b.qK$)(),
                a = (0, i.EW)(() => (t.value ? E : "div")),
                n = (0, i.EW)(() =>
                  t.value
                    ? { interfaceTarget: "discord-button", triggerClass: e.className }
                    : { class: e.className },
                )
              return (e, t) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  (0, i.$y)(a.value),
                  (0, i._B)((0, i.Ng)(n.value)),
                  {
                    content: (0, i.k6)(() => [
                      (0, i.bF)(
                        $,
                        {
                          image: (0, i.R1)(x),
                          title: e.$tr("gameContainer.discord_popup_header"),
                          description: e.$tr("gameContainer.discord_popup_description"),
                        },
                        {
                          default: (0, i.k6)(() => [
                            (0, i.bF)(
                              l.A,
                              {
                                interfaceTarget: "discord-button",
                                externalTo: (0, i.R1)(A.z),
                                target: "_blank",
                                width: "full",
                                label: e.$tr("gameContainer.discord_popup_button"),
                              },
                              null,
                              8,
                              ["externalTo", "label"],
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["image", "title", "description"],
                      ),
                    ]),
                    default: (0, i.k6)(() => [
                      (0, i.bF)(
                        y.A,
                        {
                          icon: "discord",
                          color: "carbon-400",
                          interfaceTarget: "discord-button",
                          externalTo: (0, i.R1)(A.z),
                          target: "_blank",
                        },
                        null,
                        8,
                        ["externalTo"],
                      ),
                    ]),
                    _: 1,
                  },
                  16,
                )
              )
            },
          }),
          P = a(42763),
          M = a(35584),
          I = a(87743),
          O = a(53018),
          B = a(80160)
        let F = ["aria-label"]
        var D = (0, i.pM)({
          __name: "InstallButton",
          props: { gamePic: {}, className: {} },
          setup(e) {
            let t = (0, b.qK$)(),
              a = (0, M.q)(),
              n = (0, O.w)(),
              r = (0, I.C)(),
              o = (0, i.KR)(!1),
              s = (0, i.KR)(!1),
              c = (0, i.EW)(() =>
                !t.value || n.showingNativePWA ? "div" : n.hasDeferredPrompt ? E : P.A,
              ),
              u = (0, i.EW)(() =>
                !t.value || n.showingNativePWA
                  ? { class: e.className }
                  : n.hasDeferredPrompt
                    ? {
                        interfaceTarget: "pwa_portal_install_game_prompt_shown",
                        triggerClass: e.className,
                      }
                    : { content: p.value, triggerClass: e.className },
              ),
              d = (0, i.EW)(() => "desktop" === r.platform),
              p = (0, i.EW)(() =>
                d.value ? a("gameDetails.installDesktop") : a("gameContainer.install"),
              )
            return (a, m) =>
              !(0, i.R1)(r).isAppEnv && (0, i.R1)(t)
                ? ((0, i.uX)(),
                  (0, i.Wv)(
                    (0, i.$y)(c.value),
                    (0, i._B)((0, i.v6)({ key: 0 }, u.value)),
                    {
                      content: (0, i.k6)(() => [
                        d.value
                          ? ((0, i.uX)(),
                            (0, i.Wv)(
                              $,
                              {
                                key: 0,
                                image: e.gamePic,
                                title: a.$tr("toast-pwa.game_title"),
                                description: a.$tr("toast-pwa.game_description"),
                              },
                              {
                                default: (0, i.k6)(() => [
                                  (0, i.bF)(
                                    l.A,
                                    {
                                      color: "purple-400",
                                      size: "m",
                                      interfaceTarget: "pwa_portal_install_game_button_click",
                                      class: (0, i.C4)(a.$style.button_install_override),
                                      target: "_blank",
                                      label: a.$tr("toast-pwa.button_game_text"),
                                      onClick: (0, i.R1)(n).onInstallPWAorMSN,
                                    },
                                    null,
                                    8,
                                    ["class", "label", "onClick"],
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["image", "title", "description"],
                            ))
                          : (0, i.Q3)("", !0),
                      ]),
                      default: (0, i.k6)(() => [
                        (0, i.Lk)(
                          "button",
                          {
                            class: (0, i.C4)([
                              a.$style.button,
                              s.value && a.$style.button_animated,
                            ]),
                            "aria-label": p.value,
                            "data-interface-target": "install-pwa-button",
                            onMouseenter: m[1] || (m[1] = (e) => (o.value = !0)),
                            onClick:
                              m[2] ||
                              (m[2] = (...e) =>
                                (0, i.R1)(n).onInstallPWAorMSN &&
                                (0, i.R1)(n).onInstallPWAorMSN(...e)),
                          },
                          [
                            (0, i.bF)(
                              B.A,
                              {
                                isAnimationVisible: s.value,
                                "onUpdate:isAnimationVisible":
                                  m[0] || (m[0] = (e) => (s.value = e)),
                                isHovered: o.value,
                              },
                              null,
                              8,
                              ["isAnimationVisible", "isHovered"],
                            ),
                          ],
                          42,
                          F,
                        ),
                      ]),
                      _: 1,
                    },
                    16,
                  ))
                : (0, i.Q3)("", !0)
          },
        })
        let W = {}
        W.$style = {
          button: "NEp4r",
          button_animated: "X82dH",
          buttonAnimated: "X82dH",
          "gradient-fall": "DjQGx",
          gradientFall: "DjQGx",
          button_install_override: "UhmXP",
          buttonInstallOverride: "UhmXP",
          "#": "FVbQ0",
        }
        let N = (0, u.default)(D, [["__cssModules", W]])
        var G = a(20211),
          U = a(94212),
          V = a(88789),
          z = a(59103),
          H = a(92730),
          X = a.p + "static/image/cloud.6c0782f9.webp",
          K = (0, i.pM)({
            __name: "LoginButton",
            props: { className: {} },
            setup(e, { expose: t }) {
              let a = (0, b.qK$)(),
                n = (0, z.l)(),
                r = (0, H.k)(),
                { isAuthorized: l } = (0, G.bP)(r),
                o = (0, V.C)(),
                s = (0, i.rk)("tooltip-popup")
              return (
                t({
                  showTooltip: () => {
                    s.value?.showTooltip()
                  },
                }),
                (t, r) =>
                  (0, i.R1)(a) && (0, i.R1)(l)
                    ? ((0, i.uX)(),
                      (0, i.Wv)(
                        P.A,
                        {
                          key: 0,
                          triggerClass: e.className,
                          content: t.$tr("gameContainer.logged_in_tooltip"),
                        },
                        {
                          default: (0, i.k6)(() => [
                            (0, i.bF)(y.A, {
                              interfaceTarget: "game-container-login-button",
                              color: "carbon-400",
                              icon: "happy-cloud",
                            }),
                          ]),
                          _: 1,
                        },
                        8,
                        ["triggerClass", "content"],
                      ))
                    : (0, i.R1)(a) && (0, i.R1)(o)
                      ? ((0, i.uX)(),
                        (0, i.Wv)(
                          E,
                          {
                            key: 1,
                            ref: "tooltip-popup",
                            interfaceTarget: "login-button-tooltip-popup",
                            triggerClass: e.className,
                          },
                          {
                            content: (0, i.k6)(({ interfaceTarget: e }) => [
                              (0, i.bF)(
                                $,
                                {
                                  image: (0, i.R1)(X),
                                  title: t.$tr("gameContainer.login_popup_header"),
                                  description: t.$tr("gameContainer.login_popup_description"),
                                },
                                {
                                  default: (0, i.k6)(() => [
                                    (0, i.bF)(U.A, { type: "compact", loginSource: e }, null, 8, [
                                      "loginSource",
                                    ]),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ["image", "title", "description"],
                              ),
                            ]),
                            default: (0, i.k6)(() => [
                              (0, i.bF)(y.A, {
                                interfaceTarget: "game-container-login-button",
                                color: "rose-100",
                                icon: "sad-cloud",
                                onClick:
                                  r[0] ||
                                  (r[0] = (e) =>
                                    (0, i.R1)(n).openSignInModal(
                                      "game-desktop-footer-login-button",
                                    )),
                              }),
                            ]),
                            _: 1,
                          },
                          8,
                          ["triggerClass"],
                        ))
                      : ((0, i.uX)(),
                        (0, i.Wv)(
                          y.A,
                          {
                            key: 2,
                            interfaceTarget: "game-container-login-button",
                            color: "carbon-400",
                            icon: void 0,
                            class: (0, i.C4)(e.className),
                          },
                          null,
                          8,
                          ["class"],
                        ))
              )
            },
          })
        ;(a(31430), a(50589), a(34512))
        var q = a(67118),
          j = a(42316)
        let Q = ["src", "alt"]
        var Y = (0, i.pM)({
          __name: "PartnerButton",
          props: { gameIcon: {}, hru: {}, className: {} },
          setup(e) {
            let t = (0, b.qK$)(),
              { exportUrl: a, partnerUrl: n } = (0, j.e)((0, i.lW)(() => e.hru)),
              { copied: r, copyToClipboard: c } = (0, q.i)(),
              u = (0, i.EW)(() => (t.value ? E : "div")),
              d = (0, i.EW)(() =>
                t.value
                  ? { interfaceTarget: "partner-button-tooltip", triggerClass: e.className }
                  : { class: e.className },
              ),
              p = (0, i.EW)(() => {
                try {
                  let e = new URL(a.value || "")
                  return e.href.replace(`${e.protocol}//`, "")
                } catch {
                  return a.value || ""
                }
              })
            return (t, m) => (
              (0, i.uX)(),
              (0, i.Wv)(
                (0, i.$y)(u.value),
                (0, i._B)((0, i.Ng)(d.value)),
                {
                  content: (0, i.k6)(() => [
                    (0, i.bF)(
                      $,
                      {
                        title: t.$tr("gameContainer.partner_popup_tooltip_title"),
                        description: t.$tr("gameContainer.partner_popup_tooltip_description"),
                      },
                      {
                        image: (0, i.k6)(() => [
                          (0, i.Lk)(
                            "div",
                            { class: (0, i.C4)(t.$style.image_container) },
                            [
                              (0, i.Lk)(
                                "img",
                                {
                                  src: e.gameIcon,
                                  class: (0, i.C4)(t.$style.game_icon),
                                  alt: (0, i.R1)(a),
                                },
                                null,
                                10,
                                Q,
                              ),
                              (0, i.Lk)(
                                "div",
                                { class: (0, i.C4)(t.$style.circle_on_icon) },
                                [
                                  (0, i.bF)(
                                    o.A,
                                    { name: "tag", class: (0, i.C4)(t.$style.icon_override) },
                                    null,
                                    8,
                                    ["class"],
                                  ),
                                ],
                                2,
                              ),
                            ],
                            2,
                          ),
                        ]),
                        default: (0, i.k6)(() => [
                          (0, i.Lk)(
                            "div",
                            {
                              class: (0, i.C4)(t.$style.copy_section),
                              "data-interface-target": "copy-export-game-link-tooltip",
                              onClick: m[1] || (m[1] = (e) => (0, i.R1)(c)((0, i.R1)(a))),
                            },
                            [
                              (0, i.bF)(
                                s.A,
                                {
                                  size: "s",
                                  type: "label",
                                  class: (0, i.C4)(t.$style.link),
                                  responsive: !1,
                                },
                                {
                                  default: (0, i.k6)(() => [
                                    (0, i.eW)(
                                      (0, i.v_)(
                                        (0, i.R1)(r)
                                          ? t.$tr("gameContainer.share_popup_tooltip_copied")
                                          : p.value,
                                      ),
                                      1,
                                    ),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["class"],
                              ),
                              (0, i.bF)(
                                y.A,
                                {
                                  color: "carbon-400",
                                  size: "s",
                                  interfaceTarget: "copy-export-game-link-tooltip",
                                  class: (0, i.C4)(t.$style.button_round_override),
                                  icon: "copy",
                                },
                                null,
                                8,
                                ["class"],
                              ),
                            ],
                            2,
                          ),
                          (0, i.bF)(
                            l.A,
                            {
                              color: "purple-400",
                              size: "m",
                              interfaceTarget: "goto-start-monetizing-link-tooltip",
                              class: (0, i.C4)(t.$style.button_start_override),
                              externalTo: (0, i.R1)(n),
                              target: "_blank",
                              label: "Start monetizing",
                            },
                            null,
                            8,
                            ["class", "externalTo"],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["title", "description"],
                    ),
                  ]),
                  default: (0, i.k6)(() => [
                    (0, i.bF)(
                      y.A,
                      {
                        icon: "tag",
                        class: (0, i.C4)(t.$style.button_override),
                        color: "carbon-400",
                        "aria-label": t.$tr("gameContainer.share"),
                        interfaceTarget: "copy-export-game-link",
                        onClick: m[0] || (m[0] = (e) => (0, i.R1)(c)((0, i.R1)(a))),
                      },
                      null,
                      8,
                      ["class", "aria-label"],
                    ),
                  ]),
                  _: 1,
                },
                16,
              )
            )
          },
        })
        let Z = {}
        Z.$style = {
          image_container: "Y4Dia",
          imageContainer: "Y4Dia",
          circle_on_icon: "nxcam",
          circleOnIcon: "nxcam",
          button_start_override: "u_5k3",
          buttonStartOverride: "u_5k3",
          "#": "Jxfnr",
          button_round_override: "dByiG",
          buttonRoundOverride: "dByiG",
          button_override: "HOAo9",
          buttonOverride: "HOAo9",
          icon_override: "TJbAa",
          iconOverride: "TJbAa",
          game_icon: "tT0wo",
          gameIcon: "tT0wo",
          copy_section: "QLRsb",
          copySection: "QLRsb",
          link: "I5l3F",
        }
        let J = (0, u.default)(Y, [["__cssModules", Z]])
        var ee = a(40520),
          et = a(79316),
          ea = a(27990),
          ei = (0, i.pM)({
            __name: "ShareButton",
            props: { shareData: {}, gameIcon: {} },
            setup(e) {
              let t = (0, b.qK$)(),
                a = (0, M.q)(),
                n = (0, I.C)(),
                r = (0, et.G)(),
                { share: c, shared: u } = (0, ee.$)({ successDuration: 3e3 }),
                d = (0, i.EW)(() => "desktop" === n.platform),
                p = (0, i.EW)(() => {
                  try {
                    let t = new URL(e.shareData.url || "")
                    return t.href.replace(`${t.protocol}//`, "")
                  } catch {
                    return e.shareData.url || ""
                  }
                }),
                m = (0, i.EW)(() => {
                  let t = encodeURIComponent(e.shareData.url || ""),
                    i = e.shareData.title || "",
                    n = encodeURIComponent(a("gameContainer.share_twitter_text", { title: i })),
                    r = encodeURIComponent(a("gameContainer.share_reddit_text", { title: i }))
                  return [
                    {
                      id: "facebook",
                      icon: "facebook",
                      url: `https://www.facebook.com/sharer/sharer.php?u=${t}&hashtag=${encodeURIComponent("#playgama")}`,
                    },
                    {
                      id: "twitter",
                      icon: "twitter",
                      url: `https://twitter.com/intent/tweet?url=${t}&text=${n}`,
                    },
                    {
                      id: "reddit",
                      icon: "reddit",
                      url: `https://reddit.com/submit?url=${t}&title=${r}`,
                    },
                  ]
                }),
                g = (0, i.EW)(() => (t.value ? E : "div")),
                v = (0, i.EW)(() => (t.value ? { interfaceTarget: "partner-button-tooltip" } : {}))
              function h() {
                try {
                  let t = (0, ea.R)(e.shareData.url)
                  c({ ...e.shareData, url: t }, "game-container-share-button")
                } catch {}
              }
              return (t, a) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  (0, i.$y)(g.value),
                  (0, i._B)((0, i.Ng)(v.value)),
                  {
                    content: (0, i.k6)(() => [
                      d.value
                        ? ((0, i.uX)(),
                          (0, i.Wv)(
                            $,
                            {
                              key: 0,
                              title: t.$tr("gameContainer.share_popup_tooltip_title"),
                              image: e.gameIcon,
                            },
                            {
                              default: (0, i.k6)(() => [
                                (0, i.Lk)(
                                  "div",
                                  { class: (0, i.C4)(t.$style.share_buttons) },
                                  [
                                    ((0, i.uX)(!0),
                                    (0, i.CE)(
                                      i.FK,
                                      null,
                                      (0, i.pI)(
                                        m.value,
                                        (e) => (
                                          (0, i.uX)(),
                                          (0, i.Wv)(
                                            y.A,
                                            {
                                              key: e.id,
                                              color: "carbon-400",
                                              size: "l",
                                              interfaceTarget: `share-to-${e.id}-button`,
                                              icon: e.icon,
                                              externalTo: e.url,
                                              target: "_blank",
                                              onClick: (t) => {
                                                var a
                                                return (
                                                  (a = e.id),
                                                  void r.logEvent({
                                                    event: "custom_event",
                                                    eventName: "share",
                                                    dimension1: `click-on-button-${a}`,
                                                  })
                                                )
                                              },
                                            },
                                            null,
                                            8,
                                            ["interfaceTarget", "icon", "externalTo", "onClick"],
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ],
                                  2,
                                ),
                                (0, i.Lk)(
                                  "div",
                                  {
                                    class: (0, i.C4)(t.$style.copy_section),
                                    "data-interface-target": "copy-share-link",
                                    onClick: h,
                                  },
                                  [
                                    (0, i.bF)(
                                      s.A,
                                      {
                                        size: "s",
                                        type: "label",
                                        class: (0, i.C4)(t.$style.link),
                                        responsive: !1,
                                      },
                                      {
                                        default: (0, i.k6)(() => [
                                          (0, i.eW)(
                                            (0, i.v_)(
                                              (0, i.R1)(u)
                                                ? t.$tr("gameContainer.share_popup_tooltip_copied")
                                                : p.value,
                                            ),
                                            1,
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["class"],
                                    ),
                                    (0, i.bF)(
                                      y.A,
                                      {
                                        color: "carbon-400",
                                        size: "s",
                                        interfaceTarget: "copy-share-link",
                                        class: (0, i.C4)(t.$style.button_round_override),
                                        icon: "copy",
                                      },
                                      null,
                                      8,
                                      ["class"],
                                    ),
                                  ],
                                  2,
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["title", "image"],
                          ))
                        : (0, i.Q3)("", !0),
                    ]),
                    default: (0, i.k6)(() => [
                      (0, i.bF)(
                        l.A,
                        {
                          color: "carbon-400",
                          "aria-label": t.$tr("gameContainer.share"),
                          interfaceTarget: "game-share",
                          class: (0, i.C4)(t.$style.button_override),
                          onClick: h,
                        },
                        {
                          default: (0, i.k6)(() => [
                            (0, i.bF)(o.A, { name: "send" }),
                            (0, i.bF)(
                              s.A,
                              {
                                size: "m",
                                type: "label",
                                accent: "",
                                responsive: !1,
                                class: (0, i.C4)(t.$style.button_label),
                              },
                              {
                                default: (0, i.k6)(() => [
                                  (0, i.eW)((0, i.v_)(t.$tr("gameContainer.share")), 1),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["aria-label", "class"],
                      ),
                    ]),
                    _: 1,
                  },
                  16,
                )
              )
            },
          })
        let en = {}
        en.$style = {
          share_buttons: "lGC6r",
          shareButtons: "lGC6r",
          copy_section: "CJVYv",
          copySection: "CJVYv",
          link: "s5mOl",
          button_round_override: "P4Nhv",
          buttonRoundOverride: "P4Nhv",
          "#": "B13tB",
          button_override: "n8t8A",
          buttonOverride: "n8t8A",
          button_label: "CgGCB",
          buttonLabel: "CgGCB",
        }
        let er = (0, u.default)(ei, [["__cssModules", en]])
        var el = (0, i.pM)({
          __name: "DesktopFooterPortalContent",
          props: {
            game: {},
            instreamData: {},
            category: {},
            isNoAdButtonShown: { type: Boolean },
            isFullscreen: { type: Boolean },
            shareData: {},
            limitedAvailability: { type: Boolean },
            isFullscreenButtonHidden: { type: Boolean },
            disabledIcon: { type: Boolean },
          },
          emits: ["toggleFullscreen", "openDisabledAdModal"],
          setup(e, { expose: t, emit: a }) {
            let n = (0, i.rk)("login-button")
            return (
              t({ showLoginTooltip: () => n.value?.showTooltip() }),
              (t, n) => (
                (0, i.uX)(),
                (0, i.CE)(
                  i.FK,
                  null,
                  [
                    t.instreamData.isVisible
                      ? ((0, i.uX)(),
                        (0, i.Wv)(
                          h.A,
                          {
                            key: 0,
                            secondsLeft: t.instreamData.secondsLeft,
                            adType: t.instreamData.adType,
                            isAdFreeActive: t.instreamData.isAdFreeActive,
                            podCounter: t.instreamData.podCounter,
                          },
                          null,
                          8,
                          ["secondsLeft", "adType", "isAdFreeActive", "podCounter"],
                        ))
                      : ((0, i.uX)(),
                        (0, i.Wv)(
                          f.A,
                          {
                            key: 1,
                            game: e.game,
                            category: e.category,
                            placement: "desktop_footer",
                            disabledIcon: e.disabledIcon,
                            limitedAvailability: e.limitedAvailability,
                          },
                          null,
                          8,
                          ["game", "category", "disabledIcon", "limitedAvailability"],
                        )),
                    (0, i.Lk)("div", { class: (0, i.C4)(t.$style.panel_spacer) }, null, 2),
                    (0, i.Lk)(
                      "div",
                      { class: (0, i.C4)(t.$style.panel_buttons) },
                      [
                        t.isNoAdButtonShown
                          ? (0, i.Q3)("", !0)
                          : ((0, i.uX)(),
                            (0, i.CE)(
                              i.FK,
                              { key: 0 },
                              [
                                (0, i.bF)(
                                  N,
                                  { gamePic: e.game.icon, className: t.$style.install_button },
                                  null,
                                  8,
                                  ["gamePic", "className"],
                                ),
                                (0, i.bF)(L, { className: t.$style.desktop_plus_only }, null, 8, [
                                  "className",
                                ]),
                                (0, i.bF)(
                                  K,
                                  { ref: "login-button", className: t.$style.desktop_plus_only },
                                  null,
                                  8,
                                  ["className"],
                                ),
                                e.game.is_in_export_catalog && "playgama" === e.game.source
                                  ? ((0, i.uX)(),
                                    (0, i.Wv)(
                                      J,
                                      {
                                        key: 0,
                                        className: t.$style.desktop_plus_only,
                                        hru: e.game.hru,
                                        gameIcon: e.game.icon,
                                      },
                                      null,
                                      8,
                                      ["className", "hru", "gameIcon"],
                                    ))
                                  : (0, i.Q3)("", !0),
                                e.game
                                  ? ((0, i.uX)(),
                                    (0, i.Wv)(_.A, { key: 1, game: e.game }, null, 8, ["game"]))
                                  : (0, i.Q3)("", !0),
                              ],
                              64,
                            )),
                        t.instreamData.isVisible
                          ? (0, i.Q3)("", !0)
                          : ((0, i.uX)(),
                            (0, i.Wv)(
                              er,
                              { key: 1, shareData: t.shareData, gameIcon: e.game.icon },
                              null,
                              8,
                              ["shareData", "gameIcon"],
                            )),
                        t.isNoAdButtonShown
                          ? ((0, i.uX)(),
                            (0, i.Wv)(
                              l.A,
                              {
                                key: 2,
                                color: "lime",
                                interfaceTarget: "no-ads-button",
                                label: t.$tr("gameContainer.noAds"),
                                onClick: n[0] || (n[0] = (e) => a("openDisabledAdModal")),
                              },
                              null,
                              8,
                              ["label"],
                            ))
                          : (0, i.Q3)("", !0),
                        t.isFullscreenButtonHidden
                          ? (0, i.Q3)("", !0)
                          : ((0, i.uX)(),
                            (0, i.Wv)(
                              p,
                              {
                                key: 3,
                                isFullscreen: t.isFullscreen,
                                onClick: n[1] || (n[1] = (e) => a("toggleFullscreen")),
                              },
                              null,
                              8,
                              ["isFullscreen"],
                            )),
                      ],
                      2,
                    ),
                  ],
                  64,
                )
              )
            )
          },
        })
        let eo = {}
        eo.$style = {
          panel_spacer: "gPbZI",
          panelSpacer: "gPbZI",
          panel_buttons: "n24q4",
          panelButtons: "n24q4",
          desktop_plus_only: "n_pv7",
          desktopPlusOnly: "n_pv7",
          install_button: "LLQEw",
          installButton: "LLQEw",
        }
        let es = (0, u.default)(el, [["__cssModules", eo]])
        var ec = (0, i.pM)({
          __name: "DesktopFooter",
          props: {
            game: {},
            instreamData: {},
            category: {},
            isNoAdButtonShown: { type: Boolean },
            isFullscreen: { type: Boolean },
            shareData: {},
            limitedAvailability: { type: Boolean },
            portalButtons: { type: Boolean },
            isFullscreenButtonHidden: { type: Boolean },
            disabledIcon: { type: Boolean },
          },
          emits: ["toggleFullscreen", "openDisabledAdModal", "closeGame"],
          setup(e, { expose: t, emit: a }) {
            let n = (0, i.rk)("desktop-footer-content")
            return (
              t({ showLoginTooltip: () => n.value?.showLoginTooltip() }),
              (t, n) => (
                (0, i.uX)(),
                (0, i.CE)(
                  "div",
                  { class: (0, i.C4)(t.$style.footer) },
                  [
                    (0, i.bF)(r),
                    e.game
                      ? ((0, i.uX)(),
                        (0, i.CE)(
                          i.FK,
                          { key: 0 },
                          [
                            t.portalButtons
                              ? ((0, i.uX)(),
                                (0, i.Wv)(
                                  es,
                                  {
                                    key: 0,
                                    ref: "desktop-footer-content",
                                    game: e.game,
                                    instreamData: e.instreamData,
                                    category: e.category,
                                    isNoAdButtonShown: e.isNoAdButtonShown,
                                    isFullscreen: e.isFullscreen,
                                    shareData: e.shareData,
                                    limitedAvailability: e.limitedAvailability,
                                    isFullscreenButtonHidden: e.isFullscreenButtonHidden,
                                    disabledIcon: e.disabledIcon,
                                    onToggleFullscreen:
                                      n[0] || (n[0] = (e) => a("toggleFullscreen")),
                                    onOpenDisabledAdModal:
                                      n[1] || (n[1] = (e) => a("openDisabledAdModal")),
                                  },
                                  null,
                                  8,
                                  [
                                    "game",
                                    "instreamData",
                                    "category",
                                    "isNoAdButtonShown",
                                    "isFullscreen",
                                    "shareData",
                                    "limitedAvailability",
                                    "isFullscreenButtonHidden",
                                    "disabledIcon",
                                  ],
                                ))
                              : ((0, i.uX)(),
                                (0, i.Wv)(
                                  v,
                                  {
                                    key: 1,
                                    isFullscreen: e.isFullscreen,
                                    onToggleFullscreen:
                                      n[2] || (n[2] = (e) => a("toggleFullscreen")),
                                    onCloseGame: n[3] || (n[3] = (e) => a("closeGame")),
                                  },
                                  null,
                                  8,
                                  ["isFullscreen"],
                                )),
                          ],
                          64,
                        ))
                      : (0, i.Q3)("", !0),
                  ],
                  2,
                )
              )
            )
          },
        })
        let eu = {}
        eu.$style = { footer: "VA4ep" }
        var ed = (0, u.default)(ec, [["__cssModules", eu]])
      },
      80160: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return d
          },
        })
        var i = a(3144),
          n = a(87743),
          r = a(53018)
        let l = ["src"],
          o = ["src"]
        var s = (0, i.pM)({
            __name: "InstallButtonContent",
            props: (0, i.zz)(
              { isHovered: { type: Boolean } },
              {
                isAnimationVisible: { type: Boolean, default: !1 },
                isAnimationVisibleModifiers: {},
              },
            ),
            emits: ["update:isAnimationVisible"],
            setup(e) {
              let t = (0, i.fn)(e, "isAnimationVisible"),
                a = (0, r.w)(),
                s = (0, n.C)(),
                c = (0, i.KR)(),
                u = (0, i.KR)(!1),
                d = (0, i.EW)(() => "desktop" === s.platform),
                p = (0, i.EW)(
                  () => u.value && !e.isHovered && !a.installed && !a.pwaHasShowed && d.value,
                )
              return (
                (0, i.wB)(
                  p,
                  (e) => {
                    t.value = e
                  },
                  { immediate: !0 },
                ),
                (0, i.wB)(
                  () => a.hasDeferredPrompt,
                  () => {
                    ;(clearTimeout(c.value), (c.value = void 0), (u.value = !0))
                  },
                ),
                (0, i.sV)(() => {
                  a.hasDeferredPrompt
                    ? (u.value = !0)
                    : (c.value = window.setTimeout(() => {
                        ;((u.value = !0), (c.value = void 0))
                      }, 3e3))
                }),
                (e, a) => (
                  (0, i.uX)(),
                  (0, i.CE)(
                    "div",
                    { class: (0, i.C4)(e.$style.button_content) },
                    [
                      (0, i.Lk)(
                        "img",
                        {
                          src: (0, i.R1)(
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNCAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuODgyODEgMTIuMzgyOEM3LjM5NDUzIDEyLjg3MTEgNi42MDE1NiAxMi44NzExIDYuMTEzMjggMTIuMzgyOEwxLjExMzI4IDcuMzgyODFDMC42MjUgNi44OTQ1MyAwLjYyNSA2LjEwMTU2IDEuMTEzMjggNS42MTMyOEMxLjYwMTU2IDUuMTI1IDIuMzk0NTMgNS4xMjUgMi44ODI4MSA1LjYxMzI4TDUuNzUgOC40ODA0N1YxLjVDNS43NSAwLjgwODU5NCA2LjMwODU5IDAuMjUgNyAwLjI1QzcuNjkxNDEgMC4yNSA4LjI1IDAuODA4NTk0IDguMjUgMS41VjguNDgwNDdMMTEuMTE3MiA1LjYxMzI4QzExLjYwNTUgNS4xMjUgMTIuMzk4NCA1LjEyNSAxMi44ODY3IDUuNjEzMjhDMTMuMzc1IDYuMTAxNTYgMTMuMzc1IDYuODk0NTMgMTIuODg2NyA3LjM4MjgxTDcuODg2NzIgMTIuMzgyOEg3Ljg4MjgxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
                          ),
                          class: (0, i.C4)([
                            e.$style.install_arrow,
                            t.value && e.$style.install_arrow_animated,
                          ]),
                        },
                        null,
                        10,
                        l,
                      ),
                      (0, i.Lk)(
                        "img",
                        {
                          src: (0, i.R1)(
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMyIgdmlld0JveD0iMCAwIDE2IDMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjc1IDIuNzVDMS4wNTg1OSAyLjc1IDAuNSAyLjE5MTQxIDAuNSAxLjVDMC41IDAuODA4NTk0IDEuMDU4NTkgMC4yNSAxLjc1IDAuMjVIMTQuMjVDMTQuOTQxNCAwLjI1IDE1LjUgMC44MDg1OTQgMTUuNSAxLjVDMTUuNSAyLjE5MTQxIDE0Ljk0MTQgMi43NSAxNC4yNSAyLjc1SDEuNzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
                          ),
                          class: (0, i.C4)([
                            e.$style.install_bottom,
                            t.value && e.$style.install_bottom_animated,
                          ]),
                        },
                        null,
                        10,
                        o,
                      ),
                    ],
                    2,
                  )
                )
              )
            },
          }),
          c = a(97939)
        let u = {}
        u.$style = {
          button_content: "kUaJ0",
          buttonContent: "kUaJ0",
          install_arrow: "kc4DE",
          installArrow: "kc4DE",
          install_bottom: "uQdDZ",
          installBottom: "uQdDZ",
          install_bottom_animated: "_9p1pv",
          installBottomAnimated: "_9p1pv",
          install_arrow_animated: "fnv7P",
          installArrowAnimated: "fnv7P",
          arrowBounce: "i0hlK",
          bottomBounce: "Z9jAv",
        }
        var d = (0, c.default)(s, [["__cssModules", u]])
      },
      77100: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          A: function () {
            return en
          },
        }),
          a(52093),
          a(17932),
          a(96466),
          a(76429))
        var i = a(3144),
          n = a(28063),
          r = a(20211),
          l = a(76915),
          o = a(81236),
          s = a(97178),
          c = a(8011),
          u = a(23624),
          d = a(35584),
          p = a(88789),
          m = a(10906),
          g = a(87577),
          v = a(11585)
        let h = ["src"]
        var f = (0, i.pM)({
            __name: "MobileLoginPromo",
            emits: ["close", "login"],
            setup:
              (e, { emit: t }) =>
              (e, a) => (
                (0, i.uX)(),
                (0, i.CE)(
                  "div",
                  { class: (0, i.C4)(e.$style.container) },
                  [
                    (0, i.Lk)(
                      "img",
                      { class: (0, i.C4)(e.$style.icon), src: (0, i.R1)(v), alt: "Save Icon" },
                      null,
                      10,
                      h,
                    ),
                    (0, i.bF)(
                      o.A,
                      {
                        size: "s",
                        type: "label",
                        responsive: !1,
                        class: (0, i.C4)(e.$style.label),
                      },
                      {
                        default: (0, i.k6)(() => [
                          (0, i.eW)((0, i.v_)(e.$tr("gameContainer.mobile_login_promo_title")), 1),
                        ]),
                        _: 1,
                      },
                      8,
                      ["class"],
                    ),
                    a[2] || (a[2] = (0, i.Lk)("div", null, null, -1)),
                    (0, i.bF)(
                      g.A,
                      {
                        class: (0, i.C4)(e.$style.button_override),
                        interfaceTarget: "game-top-bar-ignore-button",
                        size: "s",
                        label: e.$tr("gameContainer.mobile_login_promo_no_button"),
                        onClick: a[0] || (a[0] = (0, i.D$)((e) => t("close"), ["stop"])),
                      },
                      null,
                      8,
                      ["class", "label"],
                    ),
                    (0, i.bF)(
                      m.A,
                      {
                        color: "lime",
                        class: (0, i.C4)(e.$style.button_override),
                        interfaceTarget: "game-top-bar-login-button",
                        size: "s",
                        label: e.$tr("gameContainer.mobile_login_promo_save_button"),
                        onClick: a[1] || (a[1] = (0, i.D$)((e) => t("login"), ["stop"])),
                      },
                      null,
                      8,
                      ["class", "label"],
                    ),
                  ],
                  2,
                )
              ),
          }),
          _ = a(97939)
        let b = {}
        b.$style = {
          container: "loppD",
          icon: "vlgxO",
          button_override: "sNXiD",
          buttonOverride: "sNXiD",
          "#": "BovPl",
          label: "qo2V8",
        }
        let y = (0, _.default)(f, [["__cssModules", b]])
        var w = a(30232),
          k = a(86037),
          C = a(87743),
          E = a(59103),
          A = a(79316),
          x = a(10438),
          R = a(13344),
          T = a(43438),
          S = a(53018),
          $ = a(92730),
          L = a(98777),
          P = a(79846),
          M = a(33281),
          I = a(2993)
        let O = ["src"]
        var B = (0, i.pM)({
          __name: "DesktopLoginPromo",
          emits: ["close", "login"],
          setup:
            (e, { emit: t }) =>
            (e, a) => (
              (0, i.uX)(),
              (0, i.CE)(
                "div",
                { class: (0, i.C4)(e.$style.container) },
                [
                  (0, i.Lk)(
                    "img",
                    { class: (0, i.C4)(e.$style.icon), src: (0, i.R1)(v), alt: "Save Icon" },
                    null,
                    10,
                    O,
                  ),
                  (0, i.bF)(
                    o.A,
                    { size: "m", type: "label", responsive: !1, class: (0, i.C4)(e.$style.label) },
                    {
                      default: (0, i.k6)(() => [
                        (0, i.eW)((0, i.v_)(e.$tr("gameContainer.desktop_login_promo_label")), 1),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class"],
                  ),
                  a[2] || (a[2] = (0, i.Lk)("div", null, null, -1)),
                  (0, i.bF)(
                    g.A,
                    {
                      class: (0, i.C4)(e.$style.button_override),
                      interfaceTarget: "game-top-bar-ignore-button",
                      size: "s",
                      label: e.$tr("gameContainer.desktop_login_promo_ignore_button"),
                      onClick: a[0] || (a[0] = (e) => t("close")),
                    },
                    null,
                    8,
                    ["class", "label"],
                  ),
                  (0, i.bF)(
                    m.A,
                    {
                      color: "lime",
                      class: (0, i.C4)(e.$style.button_override),
                      interfaceTarget: "game-top-bar-login-button",
                      size: "s",
                      label: e.$tr("gameContainer.desktop_login_promo_login_button"),
                      onClick: a[1] || (a[1] = (e) => t("login")),
                    },
                    null,
                    8,
                    ["class", "label"],
                  ),
                ],
                2,
              )
            ),
        })
        let F = {}
        F.$style = {
          container: "vE4GJ",
          icon: "I9FaJ",
          button_override: "PPedi",
          buttonOverride: "PPedi",
          "#": "j_ZBT",
          label: "hjSUg",
        }
        let D = (0, _.default)(B, [["__cssModules", F]])
        var W = (0, i.pM)({
          __name: "MobileBarsHider",
          props: {
            active: { type: Boolean },
            isFrameHidden: { type: Boolean },
            isTabsOpened: { type: Boolean },
          },
          emits: ["update:isTabsOpened"],
          setup(e, { emit: t }) {
            let a = (0, n.qK$)(),
              r = (0, i.KR)(),
              l = (0, i.KR)(!1)
            function o(e) {
              t("update:isTabsOpened", e)
            }
            function s() {
              if (("number" == typeof r.value && cancelAnimationFrame(r.value), e.isFrameHidden)) {
                l.value = !1
                return
              }
              r.value = requestAnimationFrame(() => {
                document.documentElement.style.setProperty(
                  "--isl-vh",
                  `${0.01 * window.innerHeight}px`,
                )
                let t = Math.min(window.screen.width, window.screen.height),
                  a = window.visualViewport,
                  i = !!a && a.height + a.offsetTop < t - 20
                i !== e.isTabsOpened &&
                  (o(i),
                  window.setTimeout(() => {
                    l.value = !i
                  }, 100 * !i))
              })
            }
            return (
              (0, u.y)(l),
              (0, i.sV)(() => {
                e.active &&
                  (s(),
                  window.addEventListener("resize", s, { passive: !0 }),
                  window.addEventListener("orientationchange", s, { passive: !0 }),
                  window.addEventListener("scroll", s, { passive: !0 }),
                  window.visualViewport?.addEventListener("resize", s, { passive: !0 }),
                  window.visualViewport?.addEventListener("scroll", s, { passive: !0 }))
              }),
              (0, i.xo)(() => {
                e.active &&
                  (window.removeEventListener("resize", s),
                  window.removeEventListener("orientationchange", s),
                  window.removeEventListener("scroll", s),
                  window.visualViewport?.removeEventListener("resize", s),
                  window.visualViewport?.removeEventListener("scroll", s),
                  r.value && cancelAnimationFrame(r.value))
              }),
              (t, n) =>
                (0, i.R1)(a) && e.active
                  ? ((0, i.uX)(),
                    (0, i.Wv)(i.Im, { key: 0, to: "body" }, [
                      (0, i.Lk)(
                        "div",
                        {
                          class: (0, i.C4)([
                            t.$style.holder,
                            e.isFrameHidden && t.$style.with_hidden_frame,
                          ]),
                        },
                        [
                          (0, i.Lk)(
                            "div",
                            { class: (0, i.C4)(t.$style.scroller) },
                            [
                              (0, i.Lk)(
                                "div",
                                { class: (0, i.C4)(t.$style.scroller_inner) },
                                [
                                  (0, i.Lk)(
                                    "div",
                                    { class: (0, i.C4)(t.$style.content) },
                                    [(0, i.RG)(t.$slots, "default")],
                                    2,
                                  ),
                                ],
                                2,
                              ),
                            ],
                            2,
                          ),
                        ],
                        2,
                      ),
                      e.isTabsOpened
                        ? ((0, i.uX)(),
                          (0, i.CE)(
                            "div",
                            {
                              key: 0,
                              class: (0, i.C4)(t.$style.scroller_area),
                              onClick: n[0] || (n[0] = (e) => o(!1)),
                            },
                            null,
                            2,
                          ))
                        : (0, i.Q3)("", !0),
                    ]))
                  : (0, i.RG)(t.$slots, "default", { key: 1 })
            )
          },
        })
        let N = {}
        N.$style = {
          holder: "pQwn_",
          with_hidden_frame: "JTvKJ",
          withHiddenFrame: "JTvKJ",
          scroller: "EdjIf",
          scroller_inner: "DTJKI",
          scrollerInner: "DTJKI",
          content: "Aw0Oa",
          scroller_area: "xkSUV",
          scrollerArea: "xkSUV",
        }
        let G = (0, _.default)(W, [["__cssModules", N]])
        var U = a(92037),
          V = a.p + "static/image/face.1ec920a9.webp"
        let z = ["src"],
          H = ["innerHTML"]
        var X = (0, i.pM)({
          __name: "NoAdFinalScreen",
          setup(e) {
            let t = (0, k.a)(),
              { isAdFinalScreenVisible: a, remainingMsWithoutAd: n } = (0, r.bP)(t),
              l = (0, i.EW)(() => Math.ceil(n.value / 864e5))
            return (e, n) =>
              (0, i.R1)(a)
                ? ((0, i.uX)(),
                  (0, i.CE)(
                    "div",
                    {
                      key: 0,
                      class: (0, i.C4)(e.$style.wrapper),
                      onClick:
                        n[0] ||
                        (n[0] = (...e) =>
                          (0, i.R1)(t).closeNoAdFinalScreen &&
                          (0, i.R1)(t).closeNoAdFinalScreen(...e)),
                    },
                    [
                      (0, i.Lk)(
                        "img",
                        { class: (0, i.C4)(e.$style.icon), src: (0, i.R1)(V), alt: "" },
                        null,
                        10,
                        z,
                      ),
                      (0, i.bF)(
                        o.A,
                        { type: "label", size: "s", class: (0, i.C4)(e.$style.title) },
                        {
                          default: (0, i.k6)(() => [
                            (0, i.Lk)(
                              "span",
                              { innerHTML: e.$tr("noAdFinalScreen.title", l.value) },
                              null,
                              8,
                              H,
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"],
                      ),
                      (0, i.bF)(
                        m.A,
                        {
                          type: "submit",
                          color: "lime",
                          interfaceTarget: "no-ad-final-screen-button",
                          size: "l",
                          class: (0, i.C4)(e.$style.button_override),
                          label: e.$tr("noAdFinalScreen.button"),
                          onClick: (0, i.R1)(t).closeNoAdFinalScreen,
                        },
                        null,
                        8,
                        ["class", "label", "onClick"],
                      ),
                    ],
                    2,
                  ))
                : (0, i.Q3)("", !0)
          },
        })
        let K = {}
        K.$style = {
          wrapper: "jhvQu",
          icon: "ouyVg",
          title: "oz0Er",
          button_override: "D4hmM",
          buttonOverride: "D4hmM",
          "#": "yC5xt",
        }
        let q = (0, _.default)(X, [["__cssModules", K]])
        var j = a(59176)
        let Q = ["src"]
        var Y = (0, i.pM)({
          __name: "PlayingFriends",
          props: { shortCount: { default: 3 }, isTrendingGame: { type: Boolean } },
          setup(e) {
            let t = a(82851),
              n = t.keys().map((e) => t(e)),
              r = (0, d.q)(),
              l = (0, i.EW)(() => (0, j.k4)(n).slice(0, e.shortCount)),
              s = (0, i.EW)(() =>
                e.isTrendingGame
                  ? r("playingFriends.phrase_trending")
                  : (0, j.k4)([
                      r("playingFriends.phrase_1"),
                      r("playingFriends.phrase_3"),
                      r("playingFriends.phrase_4"),
                      r("playingFriends.phrase_5"),
                    ])[0],
              )
            return (e, t) => (
              (0, i.uX)(),
              (0, i.CE)(
                "div",
                { class: (0, i.C4)(e.$style.wrapper) },
                [
                  (0, i.Lk)(
                    "div",
                    { class: (0, i.C4)(e.$style.avatars) },
                    [
                      ((0, i.uX)(!0),
                      (0, i.CE)(
                        i.FK,
                        null,
                        (0, i.pI)(
                          l.value,
                          (t, a) => (
                            (0, i.uX)(),
                            (0, i.CE)(
                              i.FK,
                              { key: a },
                              [
                                (0, i.Lk)(
                                  "div",
                                  { class: (0, i.C4)(e.$style.avatar_base) },
                                  null,
                                  2,
                                ),
                                (0, i.Lk)(
                                  "img",
                                  { src: t, alt: "Avatar", loading: "lazy" },
                                  null,
                                  8,
                                  Q,
                                ),
                              ],
                              64,
                            )
                          ),
                        ),
                        128,
                      )),
                    ],
                    2,
                  ),
                  (0, i.bF)(
                    o.A,
                    {
                      type: "label",
                      size: "m",
                      responsive: !1,
                      class: (0, i.C4)(e.$style.playing_friends),
                    },
                    { default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(s.value), 1)]), _: 1 },
                    8,
                    ["class"],
                  ),
                ],
                2,
              )
            )
          },
        })
        let Z = {}
        Z.$style = {
          wrapper: "a1sU2",
          avatars: "iyzJX",
          avatar_base: "GP6Tq",
          avatarBase: "GP6Tq",
          avatarsFade: "eP22i",
          playing_friends: "NRaK_",
          playingFriends: "NRaK_",
          revealText: "RPWnJ",
          revealBorder: "dCQZA",
        }
        let J = (0, _.default)(Y, [["__cssModules", Z]]),
          ee = ["src", "title", "allow", "hidden"],
          et = ["src", "alt"]
        var ea = (0, i.pM)({
          __name: "GameContainer",
          props: {
            game: {},
            exportGameURL: {},
            categories: {},
            isExportPageOpened: { type: Boolean },
            quickPlay: { type: Boolean },
            disableNativeFS: { type: Boolean },
          },
          emits: ["startPlayingGame", "closeGame", "similarGamesPressed"],
          setup(e, { emit: t }) {
            let a = (0, d.q)(),
              m = (0, l.lq)(),
              g = (0, $.k)(),
              v = (0, C.C)(),
              h = (0, A.G)(),
              f = (0, k.a)(),
              _ = (0, E.l)(),
              b = (0, x.B)(),
              O = (0, n.qK$)(),
              { isAuthorized: B, user: F } = (0, r.bP)(g),
              W = (0, p.C)(),
              { query: N, isPortalEnv: V } = (0, r.bP)(v),
              { adDisabledModalOptions: z, isAdFreeActive: H } = (0, r.bP)(f),
              { isPaymentModalOpen: X } = (0, r.bP)(_),
              K = (0, i.rk)("game-container"),
              j = (0, i.rk)("game-iframe"),
              Q = (0, i.rk)("desktop-footer"),
              Y = (0, i.EW)(() => e.game?.categories.includes("trending_now")),
              Z = (0, c.u)(),
              { VUE_APP_HOST_URL: ea } = (0, s.U)(),
              ei = (0, i.EW)(() => ({
                title: e.game?.title,
                text: a("gameContainer.share_game_description", { title: e.game?.title ?? "" }),
                url: ea + Z({ name: w.V2.GAME_PAGE, params: { game: e.game?.hru } }),
              })),
              en = (0, i.EW)(() => !e.quickPlay),
              er = (0, i.EW)(() => {
                let t = []
                return (
                  e.game?.is_desktop && t.push("desktop"),
                  e.game?.is_android && t.push("android"),
                  e.game?.is_ios && t.push("ios"),
                  t
                )
              }),
              el = (0, i.EW)(() => ({
                desktop: a("gameContainer.desktop"),
                android: a("gameContainer.android"),
                ios: a("gameContainer.ios"),
              })),
              eo = (0, i.EW)(() => {
                if (eR.value || !e.game) return !1
                let t = el.value,
                  i = er.value[0]
                if (1 === er.value.length && i)
                  return a("gameContainer.limitedAvailability1", { platform: t[i] })
                let n = er.value.slice(0, -1),
                  r = er.value.slice(-1)[0]
                return (
                  !!r &&
                  a("gameContainer.limitedAvailabilityMany", {
                    platforms: n.map((e) => t[e]).join(", "),
                    lastPlatform: t[r],
                  })
                )
              }),
              es = (0, i.EW)(
                () => "desktop" === v.platform && O.value && !e.isExportPageOpened && !eo.value,
              ),
              ec = (0, i.KR)(!1),
              eu = (0, i.KR)(!1),
              ed = (0, i.KR)(!1),
              ep = (0, i.EW)(() => "desktop" !== v.platform && !ec.value && !e.quickPlay),
              em = (0, i.KR)(!1)
            function eg(e) {
              ;((eu.value = e),
                j.value?.contentWindow?.postMessage(
                  { type: "setTabsOpened", isTabsOpened: e },
                  "*",
                ))
            }
            ;(0, u.y)(
              () => em.value && e.isExportPageOpened && !ep.value && "desktop" === v.platform,
            )
            let ev = (0, i.KR)({ isVisible: !1, secondsLeft: 0, podCounter: void 0 }),
              eh = (0, i.EW)(
                () =>
                  V.value &&
                  ev.value.isVisible &&
                  !ev.value.isAdFreeActive &&
                  !H.value &&
                  v.isPurchaseEnabled,
              ),
              ef = (0, i.EW)(
                () =>
                  ec.value && "portrait" === eA.value && !e.game?.vertical && e.game?.horizontal,
              ),
              e_ = (0, S.w)(),
              eb = (0, R.p)(),
              ey = (0, T.c)(),
              ew = (0, i.KR)(!1),
              ek = (0, i.KR)()
            function eC() {
              eo.value || (e.isExportPageOpened ? ex() : eO())
            }
            ;((0, i.wB)(ec, (e) => {
              ;(ef.value
                ? eb.postMessage("changeOrientation", { action: "lockLandscape" })
                : eb.postMessage("changeOrientation", { action: "unlock" }),
                !e &&
                  !ew.value &&
                  ek.value &&
                  Date.now() - ek.value >= 9e5 &&
                  !B.value &&
                  b.desktopFooterTooltipTimesShown < 3 &&
                  "desktop" === v.platform &&
                  (Q.value?.showLoginTooltip(), b.markFooterDesktopTooltipShown(), (ew.value = !0)),
                j.value?.contentWindow?.postMessage(
                  { type: "toggleFullscreen", isFullscreen: e },
                  "*",
                ))
            }),
              (0, i.wB)(
                () => [e_.hasDeferredPrompt, ec.value],
                ([, t]) => {
                  "desktop" === v.platform &&
                    !t &&
                    (v.isPWA
                      ? ey.showSubscriptionPrompt()
                      : e_.showingNativePWA ||
                        !e.isExportPageOpened ||
                        e_.pwaHasShowed ||
                        (e_.hasDeferredPrompt
                          ? e_.showPWAGameInstallPrompt(e.game?.icon)
                          : e_.showPWAInstallPrompt({
                              force: !0,
                              showTimeoutMs: 4e4,
                              isFullScreenAllowed: !1,
                            })))
                },
              ),
              (0, i.wB)(
                () => eh,
                (e) => {
                  e &&
                    h.logEvent({
                      event: "custom_event",
                      eventName: "no_ads_button",
                      adPlacement: ev.value.adType,
                    })
                },
              ),
              (0, i.wB)(
                () => z.value.isOpened || X.value,
                (e) => {
                  j.value?.contentWindow?.postMessage(
                    { type: "setOutOfPageAdPlaybackState", play: !e },
                    "*",
                  )
                },
              ),
              (0, i.wB)(
                () => F.value,
                (e) => {
                  j.value?.contentWindow?.postMessage(
                    { type: "userChanged", user: JSON.stringify(e) },
                    "*",
                  )
                },
              ))
            let eE = (0, i.EW)(
                () => ("desktop" === v.platform || "android" === v.platform) && !e.disableNativeFS,
              ),
              { screenOrientation: eA } = (0, r.bP)(_)
            async function ex(e) {
              if (
                ((ec.value = "boolean" == typeof e ? e : !ec.value),
                document.fullscreenEnabled && eE.value)
              )
                try {
                  ec.value ? await K.value?.requestFullscreen() : await document.exitFullscreen()
                } catch {}
            }
            let eR = (0, i.EW)(() => er.value.includes(v.platform)),
              eT = (0, i.EW)(
                () =>
                  e.quickPlay ||
                  ((N.value?.autoplay || m.query.autoplay) && eR.value && !e.game?.is_hidden),
              ),
              eS = (0, i.KR)(!0),
              e$ = (0, i.EW)(
                () => e.game && eS.value && !ed.value && W.value && !B.value && !e.quickPlay,
              )
            function eL() {
              _.openSignInModal("game-container-top-bar")
            }
            let eP = (0, i.EW)(
              () => e.categories?.categoriesInfo.find((e) => "category" === e.categoryType)?.title,
            )
            function eM() {
              t("startPlayingGame", ex)
            }
            function eI() {
              t("similarGamesPressed")
            }
            function eO() {
              ;(h.logEvent({ event: "custom_event", eventName: "play" }), eM())
            }
            let eB = () => {
                ;((ec.value = null !== document.fullscreenElement),
                  ef.value
                    ? window.screen.orientation.lock("landscape")?.catch((e) => {
                        console.error("landscape rotate error", e)
                      })
                    : window.screen.orientation.unlock()?.catch((e) => {
                        console.error("unlock error", e)
                      }))
              },
              eF = () => {
                document.hidden || eM()
              }
            return (
              (0, i.sV)(() => {
                ;(document.fullscreenEnabled && document.addEventListener("fullscreenchange", eB),
                  eT.value && (eF(), document.addEventListener("visibilitychange", eF)),
                  (window.exportApi = {
                    authorizeUser: g.authorizeUser,
                    getUser: g.getUser,
                    chargeUser: g.chargeUser,
                    cancelCharge: g.cancelCharge,
                    startGame: () => {
                      ;((ed.value = !0), (ek.value = Date.now()))
                    },
                    closeGame: () => {
                      ;(ex(!1), t("closeGame"))
                    },
                    getGameAttributes: () => ({
                      clid: v.clid,
                      widgetId: v.widgetId,
                      userAcquisitionParams: { ...v.userAcquisitionParams30d },
                    }),
                    updateInstreamData: (e) => {
                      for (let t in e) ev.value[t] !== e[t] && (ev.value[t] = e[t])
                    },
                    openDisabledAdModal: () => f.openDisabledAdModal(ev.value.adType),
                    isMobileTabsOpened: () => eu.value,
                    isFullscreen: () => ec.value,
                    getGameOpeningType: () => (e.quickPlay ? "quick_play" : "default"),
                  }))
              }),
              (0, i.wB)(
                () => e.game,
                () => {
                  eT.value && eF()
                },
              ),
              (0, i.hi)(() => {
                ;(document.removeEventListener("fullscreenchange", eB),
                  document.removeEventListener("visibilitychange", eF),
                  eb.postMessage("changeOrientation", { action: "unlock" }),
                  "desktop" === v.platform && e_.forceHidePWAInstallPrompt(),
                  delete window.exportApi)
              }),
              (n, r) => (
                (0, i.uX)(),
                (0, i.CE)(
                  "div",
                  {
                    ref: "game-container",
                    class: (0, i.C4)([n.$styleCrit.container, ec.value && n.$styleCrit.fullscreen]),
                  },
                  [
                    (0, i.Lk)(
                      "div",
                      {
                        class: (0, i.C4)([
                          n.$styleCrit.content,
                          (!e.isExportPageOpened || ep.value) && n.$styleCrit.init_state,
                          "android" === (0, i.R1)(v).platform &&
                            !(0, i.R1)(v).isNativeAppEnv &&
                            n.$styleCrit.androidContent,
                          (0, i.R1)(v).isNativeAppEnv && n.$styleCrit.nativeContent,
                          e.isExportPageOpened && !ep.value && n.$styleCrit.black_mobile_background,
                        ]),
                      },
                      [
                        e.game && e.isExportPageOpened
                          ? ((0, i.uX)(),
                            (0, i.CE)(
                              i.FK,
                              { key: 0 },
                              [
                                (0, i.bF)(
                                  G,
                                  {
                                    active: "ios" === (0, i.R1)(v).platform,
                                    isFrameHidden: ep.value,
                                    isTabsOpened: eu.value,
                                    "onUpdate:isTabsOpened": eg,
                                  },
                                  {
                                    default: (0, i.k6)(() => [
                                      (0, i.Lk)(
                                        "iframe",
                                        {
                                          ref: "game-iframe",
                                          src: n.exportGameURL,
                                          class: (0, i.C4)(n.$styleCrit.iframe),
                                          title: e.game.title,
                                          allow: (0, i.R1)(L.Cp),
                                          hidden: ep.value,
                                          onMouseenter: r[0] || (r[0] = (e) => (em.value = !0)),
                                          onMouseleave: r[1] || (r[1] = (e) => (em.value = !1)),
                                        },
                                        null,
                                        42,
                                        ee,
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ["active", "isFrameHidden", "isTabsOpened"],
                                ),
                                (0, i.bF)(q),
                              ],
                              64,
                            ))
                          : (0, i.Q3)("", !0),
                        !e.isExportPageOpened || (e.isExportPageOpened && ep.value)
                          ? ((0, i.uX)(),
                            (0, i.CE)(
                              i.FK,
                              { key: 1 },
                              [
                                (0, i.bF)(
                                  M.A,
                                  {
                                    class: (0, i.C4)([
                                      n.$styleCrit.short_game_info_override,
                                      eo.value ? n.$style.darken_filter_override : "",
                                    ]),
                                    game: e.game,
                                    category: eP.value,
                                    placement: "mobile_game_container",
                                  },
                                  null,
                                  8,
                                  ["class", "game", "category"],
                                ),
                                (0, i.Lk)(
                                  "div",
                                  { class: (0, i.C4)(n.$styleCrit.preview_container), onClick: eC },
                                  [
                                    (0, i.Lk)(
                                      "img",
                                      {
                                        class: (0, i.C4)([
                                          n.$styleCrit.preview,
                                          e.game ? n.$styleCrit.visible : n.$styleCrit.hidden,
                                          eo.value ? n.$style.darken_filter_override : "",
                                        ]),
                                        src: e.game?.preview,
                                        fetchpriority: "high",
                                        alt: (0, i.R1)(a)("seo.preview", {
                                          title: e.game?.title ?? "",
                                        }),
                                      },
                                      null,
                                      10,
                                      et,
                                    ),
                                    eo.value
                                      ? ((0, i.uX)(),
                                        (0, i.Wv)(
                                          o.A,
                                          {
                                            key: 0,
                                            type: "paragraph",
                                            size: "m",
                                            accent: "",
                                            class: (0, i.C4)(n.$styleCrit.limited_availability),
                                          },
                                          {
                                            default: (0, i.k6)(() => [
                                              (0, i.eW)((0, i.v_)(eo.value), 1),
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["class"],
                                        ))
                                      : e$.value
                                        ? ((0, i.uX)(),
                                          (0, i.Wv)(y, {
                                            key: 1,
                                            onClose: r[2] || (r[2] = (e) => (eS.value = !1)),
                                            onLogin: eL,
                                          }))
                                        : (0, i.Q3)("", !0),
                                  ],
                                  2,
                                ),
                                e.isExportPageOpened
                                  ? ((0, i.uX)(),
                                    (0, i.Wv)(
                                      P.A,
                                      {
                                        key: 1,
                                        interfaceTarget: "play_button",
                                        label: n.$tr("gameContainer.continuePlay"),
                                        class: (0, i.C4)(n.$styleCrit.play_button_override),
                                        onClick: r[3] || (r[3] = (e) => ex()),
                                      },
                                      null,
                                      8,
                                      ["label", "class"],
                                    ))
                                  : ((0, i.uX)(),
                                    (0, i.CE)(
                                      i.FK,
                                      { key: 0 },
                                      [
                                        eo.value
                                          ? ((0, i.uX)(),
                                            (0, i.Wv)(
                                              P.A,
                                              {
                                                key: 0,
                                                interfaceTarget: "similar_games_button",
                                                label: n.$tr("gameContainer.similar_games"),
                                                class: (0, i.C4)(n.$styleCrit.play_button_override),
                                                onClick: eI,
                                              },
                                              null,
                                              8,
                                              ["label", "class"],
                                            ))
                                          : ((0, i.uX)(),
                                            (0, i.Wv)(
                                              P.A,
                                              {
                                                key: 1,
                                                interfaceTarget: "play_button",
                                                label: e.game ? n.$tr("gameContainer.play") : "",
                                                class: (0, i.C4)(n.$styleCrit.play_button_override),
                                                onClick: eO,
                                              },
                                              null,
                                              8,
                                              ["label", "class"],
                                            )),
                                      ],
                                      64,
                                    )),
                                es.value
                                  ? ((0, i.uX)(),
                                    (0, i.Wv)(J, { key: 2, isTrendingGame: Y.value }, null, 8, [
                                      "isTrendingGame",
                                    ]))
                                  : ((0, i.uX)(),
                                    (0, i.CE)(
                                      "div",
                                      {
                                        key: 3,
                                        class: (0, i.C4)(n.$styleCrit.playing_friends_placeholder),
                                      },
                                      null,
                                      2,
                                    )),
                                (0, i.bF)(
                                  U.A,
                                  {
                                    class: (0, i.C4)(n.$styleCrit.mobile_footer_override),
                                    game: e.game,
                                    shareData: ei.value,
                                  },
                                  null,
                                  8,
                                  ["class", "game", "shareData"],
                                ),
                              ],
                              64,
                            ))
                          : (0, i.Q3)("", !0),
                      ],
                      2,
                    ),
                    (0, i.bF)(
                      I.A,
                      {
                        ref: "desktop-footer",
                        game: e.game,
                        instreamData: ev.value,
                        category: eP.value,
                        isNoAdButtonShown: eh.value,
                        isFullscreen: ec.value,
                        shareData: ei.value,
                        limitedAvailability: !!eo.value,
                        portalButtons: en.value,
                        onToggleFullscreen: r[4] || (r[4] = (e) => ex()),
                        onOpenDisabledAdModal:
                          r[5] || (r[5] = (e) => (0, i.R1)(f).openDisabledAdModal(ev.value.adType)),
                        onCloseGame: r[6] || (r[6] = (e) => t("closeGame")),
                      },
                      null,
                      8,
                      [
                        "game",
                        "instreamData",
                        "category",
                        "isNoAdButtonShown",
                        "isFullscreen",
                        "shareData",
                        "limitedAvailability",
                        "portalButtons",
                      ],
                    ),
                    e$.value
                      ? ((0, i.uX)(),
                        (0, i.Wv)(D, {
                          key: 0,
                          onClose: r[7] || (r[7] = (e) => (eS.value = !1)),
                          onLogin: eL,
                        }))
                      : (0, i.Q3)("", !0),
                  ],
                  2,
                )
              )
            )
          },
        })
        let ei = {}
        ;((ei.$styleCrit = {
          visible: "z9R_p",
          hidden: "EEvow",
          container: "cYJVY",
          content: "XRqVd",
          preview_container: "eUCbp",
          previewContainer: "eUCbp",
          preview: "ZdgTC",
          limited_availability: "v5FVU",
          limitedAvailability: "v5FVU",
          play_button_override: "JDiFM",
          playButtonOverride: "JDiFM",
          "#": "ABDG7",
          iframe: "cpx6v",
          short_game_info_override: "odWFr",
          shortGameInfoOverride: "odWFr",
          mobile_footer_override: "HLh65",
          mobileFooterOverride: "HLh65",
          playing_friends_placeholder: "nYWXR",
          playingFriendsPlaceholder: "nYWXR",
          fullscreen: "__fIC",
          init_state: "ROIJc",
          initState: "ROIJc",
          black_mobile_background: "JKzV0",
          blackMobileBackground: "JKzV0",
          androidContent: "uAWji",
          nativeContent: "rCOiR",
        }),
          (ei.$style = {
            darken_filter_override: "FdHyW",
            darkenFilterOverride: "FdHyW",
            "#": "ABDG7",
            limited_availability: "v5FVU",
            limitedAvailability: "v5FVU",
            play_button_override: "JDiFM",
            playButtonOverride: "JDiFM",
            short_game_info_override: "odWFr",
            shortGameInfoOverride: "odWFr",
            mobile_footer_override: "HLh65",
            mobileFooterOverride: "HLh65",
            fullscreen: "__fIC",
            content: "XRqVd",
            androidContent: "uAWji",
          }))
        var en = (0, _.default)(ea, [["__cssModules", ei]])
      },
      92037: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return O
          },
        })
        var i = a(3144),
          n = a(20211),
          r = a(97178),
          l = a(90053),
          o = (0, i.pM)({
            __name: "RoundButton",
            props: { icon: {}, interfaceTarget: {}, externalTo: {}, target: {} },
            emits: ["click"],
            setup:
              (e, { emit: t }) =>
              (a, n) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  l.A,
                  {
                    class: (0, i.C4)(a.$style.button_override),
                    icon: e.icon,
                    size: "l",
                    interfaceTarget: e.interfaceTarget,
                    externalTo: e.externalTo,
                    target: e.target,
                    onClick: n[0] || (n[0] = (e) => t("click")),
                  },
                  { default: (0, i.k6)(() => [(0, i.RG)(a.$slots, "default")]), _: 3 },
                  8,
                  ["class", "icon", "interfaceTarget", "externalTo", "target"],
                )
              ),
          }),
          s = a(97939)
        let c = {}
        c.$style = { button_override: "WMPlf", buttonOverride: "WMPlf", "#": "Ug0SI" }
        let u = (0, s.default)(o, [["__cssModules", c]])
        var d = (0, i.pM)({
            __name: "AndroidStoreButton",
            setup(e) {
              let { VUE_APP_ANDROID_APP_URL: t } = (0, r.U)()
              return (e, a) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  u,
                  {
                    icon: "android",
                    interfaceTarget: "mobile-footer-install-android-button",
                    externalTo: (0, i.R1)(t),
                    target: "_blank",
                  },
                  null,
                  8,
                  ["externalTo"],
                )
              )
            },
          }),
          p = a(53018),
          m = a(80160),
          g = (0, i.pM)({
            __name: "InstallButton",
            setup(e) {
              let t = (0, p.w)(),
                a = (0, i.KR)(!1)
              return (e, n) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  u,
                  {
                    interfaceTarget: "install-pwa-button",
                    onClick: (0, i.R1)(t).onInstallPWAorMSN,
                  },
                  {
                    default: (0, i.k6)(() => [
                      (0, i.bF)(
                        m.A,
                        {
                          isAnimationVisible: a.value,
                          "onUpdate:isAnimationVisible": n[0] || (n[0] = (e) => (a.value = e)),
                        },
                        null,
                        8,
                        ["isAnimationVisible"],
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["onClick"],
                )
              )
            },
          }),
          v = a(87743),
          h = a(92730),
          f = a(32978),
          _ = a(14410),
          b = (0, i.pM)({
            __name: "DiscordButton",
            setup: (e) => (e, t) => (
              (0, i.uX)(),
              (0, i.Wv)(
                u,
                {
                  icon: "discord",
                  interfaceTarget: "discord-button",
                  externalTo: (0, i.R1)(_.z),
                  target: "_blank",
                },
                null,
                8,
                ["externalTo"],
              )
            ),
          }),
          y = a(42763),
          w = a(35584),
          k = a(88789),
          C = a(59103),
          E = (0, i.pM)({
            __name: "LoginMobileButton",
            setup(e) {
              let t = (0, i.D)(),
                a = (0, C.l)(),
                r = (0, k.C)(),
                l = (0, h.k)(),
                { isAuthorized: o } = (0, n.bP)(l),
                s = (0, w.q)(),
                c = (0, i.KR)(null)
              function d() {
                ;(c.value?.showTooltip(),
                  setTimeout(() => {
                    c.value?.hideTooltip()
                  }, 2e3))
              }
              return (e, n) =>
                (0, i.R1)(r) && (0, i.R1)(o)
                  ? ((0, i.uX)(),
                    (0, i.Wv)(
                      y.A,
                      {
                        key: 0,
                        ref_key: "tooltipRef",
                        ref: c,
                        content: (0, i.R1)(s)("gameContainer.logged_in_tooltip"),
                        showOnMobile: !0,
                      },
                      {
                        default: (0, i.k6)(() => [
                          (0, i.bF)(
                            u,
                            {
                              icon: "happy-cloud",
                              interfaceTarget: "game-container-login-button",
                              class: (0, i.C4)((0, i.R1)(t).button_green_override),
                              onClick: d,
                            },
                            null,
                            8,
                            ["class"],
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["content"],
                    ))
                  : (0, i.R1)(r) && !(0, i.R1)(o)
                    ? ((0, i.uX)(),
                      (0, i.Wv)(
                        u,
                        {
                          key: 1,
                          icon: "sad-cloud",
                          interfaceTarget: "game-container-login-button",
                          class: (0, i.C4)((0, i.R1)(t).button_red_override),
                          onClick:
                            n[0] ||
                            (n[0] = (e) =>
                              (0, i.R1)(a).openSignInModal("game-mobile-footer-login-button")),
                        },
                        null,
                        8,
                        ["class"],
                      ))
                    : ((0, i.uX)(), (0, i.Wv)(u, { key: 2, icon: void 0, interfaceTarget: "" }))
            },
          })
        let A = {}
        A.$style = {
          button_red_override: "q_UQR",
          buttonRedOverride: "q_UQR",
          "#": "Bl809",
          button_green_override: "C7jOp",
          buttonGreenOverride: "C7jOp",
        }
        let x = (0, s.default)(E, [["__cssModules", A]])
        var R = a(10906),
          T = a(40520),
          S = a(27990),
          $ = (0, i.pM)({
            __name: "ShareButton",
            props: { shareData: {} },
            setup(e) {
              let { share: t, shared: a } = (0, T.$)({ successDuration: 3e3 }),
                n = (0, i.EW)(() => (a.value ? "check" : "send"))
              function r() {
                let a = (0, S.R)(e.shareData.url)
                t({ ...e.shareData, url: a }, "game-container-share-button")
              }
              return (e, t) => (
                (0, i.uX)(),
                (0, i.Wv)(
                  R.A,
                  {
                    color: "carbon-400",
                    leftIcon: n.value,
                    size: "l",
                    "aria-label": e.$tr("gameContainer.share"),
                    interfaceTarget: "game-share",
                    class: (0, i.C4)(e.$style.button_override),
                    onClick: r,
                  },
                  null,
                  8,
                  ["leftIcon", "aria-label", "class"],
                )
              )
            },
          })
        let L = {}
        L.$style = { button_override: "pMrg6", buttonOverride: "pMrg6", "#": "lZDa1" }
        let P = (0, s.default)($, [["__cssModules", L]])
        var M = (0, i.pM)({
          __name: "MobileFooter",
          props: { game: {}, shareData: {} },
          setup(e) {
            let t = (0, v.C)(),
              { user: a } = (0, n.bP)((0, h.k)())
            return (n, r) => (
              (0, i.uX)(),
              (0, i.CE)(
                "div",
                { class: (0, i.C4)(n.$style.footer) },
                [
                  (0, i.bF)(f.A, { game: e.game }, null, 8, ["game"]),
                  (0, i.bF)(
                    b,
                    {
                      class: (0, i.C4)([
                        n.$style.discord_in_footer_override,
                        !!(0, i.R1)(a) && n.$style.discord_in_footer_auth_override,
                      ]),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                  (0, i.bF)(
                    g,
                    {
                      class: (0, i.C4)([
                        n.$style.install_in_footer_override,
                        !!(0, i.R1)(a) && n.$style.install_in_footer_auth_override,
                      ]),
                    },
                    null,
                    8,
                    ["class"],
                  ),
                  "android" !== (0, i.R1)(t).platform || (0, i.R1)(t).isNativeAppEnv
                    ? ((0, i.uX)(), (0, i.Wv)(x, { key: 1 }))
                    : ((0, i.uX)(), (0, i.Wv)(d, { key: 0 })),
                  (0, i.bF)(P, { shareData: n.shareData }, null, 8, ["shareData"]),
                ],
                2,
              )
            )
          },
        })
        let I = {}
        I.$style = {
          footer: "pbYgK",
          discord_in_footer_override: "wY8PJ",
          discordInFooterOverride: "wY8PJ",
          "#": "mvjfO",
          install_in_footer_override: "cPE3i",
          installInFooterOverride: "cPE3i",
          discord_in_footer_auth_override: "CvdYH",
          discordInFooterAuthOverride: "CvdYH",
          install_in_footer_auth_override: "rYKNN",
          installInFooterAuthOverride: "rYKNN",
        }
        var O = (0, s.default)(M, [["__cssModules", I]])
      },
      32978: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          A: function () {
            return _
          },
        }),
          a(17932),
          a(76429))
        var i = a(3144),
          n = a(28063),
          r = a(20211),
          l = a(98289),
          o = a(81236),
          s = a(59103),
          c = a(92730)
        a(96466)
        var u = a(79316)
        let d = (0, r.nY)(
          "votes",
          () => {
            let e = (0, u.G)(),
              t = (0, i.KR)([])
            return {
              votedGames: t,
              updateGameVote: function ({ hru: a, reaction: i }) {
                let n = t.value.find((e) => a === e?.hru)
                !(function ({ prevReaction: t, reaction: a }) {
                  ;(e.logEvent({ event: "custom_event", eventName: a }),
                    "reaction_like" === t && "reaction_dislike" === a
                      ? e.logEvent({ event: "custom_event", eventName: "reaction_unset_like" })
                      : "reaction_dislike" === t &&
                        "reaction_like" === a &&
                        e.logEvent({ event: "custom_event", eventName: "reaction_unset_dislike" }))
                })({ prevReaction: n?.reaction, reaction: i })
                let r = { hru: a, reaction: i }
                t.value = n
                  ? t.value.map((e) => (a === e.hru ? r : e))
                  : [r, ...t.value].slice(0, 50)
              },
            }
          },
          { persist: { pick: ["votedGames"] } },
        )
        var p = a(26903)
        let m = ["data-interface-target", "aria-label"],
          g = ["data-interface-target", "aria-label"]
        var v = (0, i.pM)({
            __name: "VoteToggles",
            props: { game: {} },
            setup(e) {
              let t = (0, c.k)(),
                a = (0, s.l)(),
                u = d(),
                { isAuthorized: v } = (0, r.bP)(t),
                { votedGames: h } = (0, r.bP)(u),
                f = (0, n.qK$)(),
                _ = (0, i.EW)(() => (v.value ? "auth" : "non_auth")),
                b = (0, i.EW)(() =>
                  f.value && e.game ? h.value.find((t) => t.hru === e.game?.hru)?.reaction : null,
                ),
                y = (0, i.EW)(() => "reaction_like" === b.value),
                w = (0, i.EW)(() => "reaction_dislike" === b.value),
                k = (0, i.EW)(() => (e.game?.rating?.count || 0) + +!!y.value),
                C = (0, i.EW)(() => (e.game ? (0, p.F)(k.value, { shorten: !0 }) : " "))
              function E(t) {
                e.game &&
                  (v.value
                    ? u.updateGameVote({ hru: e.game.hru, reaction: t })
                    : a.openSignInModal("vote-game"))
              }
              return (e, t) => (
                (0, i.uX)(),
                (0, i.CE)(
                  "div",
                  { class: (0, i.C4)(e.$style.container) },
                  [
                    (0, i.Lk)(
                      "button",
                      {
                        "data-interface-target": `${_.value}_like`,
                        "aria-label": e.$tr("gameContainer.like"),
                        class: (0, i.C4)([e.$style.like, y.value && e.$style.selected]),
                        onClick:
                          t[0] ||
                          (t[0] = (e) => E(y.value ? "reaction_unset_like" : "reaction_like")),
                      },
                      [
                        (0, i.bF)(l.A, { name: "like" }),
                        (0, i.bF)(
                          o.A,
                          {
                            type: "label",
                            responsive: !1,
                            size: "m",
                            class: (0, i.C4)(e.$style.label),
                            bold: "",
                          },
                          { default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(C.value), 1)]), _: 1 },
                          8,
                          ["class"],
                        ),
                      ],
                      10,
                      m,
                    ),
                    (0, i.Lk)(
                      "button",
                      {
                        "data-interface-target": `${_.value}_dislike`,
                        "aria-label": e.$tr("gameContainer.dislike"),
                        class: (0, i.C4)([e.$style.dislike, w.value && e.$style.selected]),
                        onClick:
                          t[1] ||
                          (t[1] = (e) =>
                            E(w.value ? "reaction_unset_dislike" : "reaction_dislike")),
                      },
                      [(0, i.bF)(l.A, { name: "dislike" })],
                      10,
                      g,
                    ),
                  ],
                  2,
                )
              )
            },
          }),
          h = a(97939)
        let f = {}
        f.$style = {
          container: "bTj63",
          like: "kAPDR",
          dislike: "R3AW4",
          selected: "kSXU7",
          label: "HvQdv",
        }
        var _ = (0, h.default)(v, [["__cssModules", f]])
      },
      93883: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return d
          },
        })
        var i = a(3144),
          n = a(81236),
          r = a.p + "static/image/dollar-coin.fe01134a.webp",
          l = a.p + "static/image/fennec.e0408bdd.webp"
        let o = ["src"]
        var s = (0, i.pM)({
            __name: "InstreamInfo",
            props: {
              secondsLeft: {},
              debranding: { type: Boolean },
              isAdFreeActive: { type: Boolean },
              adType: {},
              podCounter: {},
            },
            setup: (e) => (e, t) => (
              (0, i.uX)(),
              (0, i.CE)(
                "div",
                { class: (0, i.C4)(e.$style.content) },
                [
                  (0, i.Lk)(
                    "img",
                    {
                      src: e.debranding ? (0, i.R1)(r) : (0, i.R1)(l),
                      alt: "fennec",
                      class: (0, i.C4)(e.$style.icon),
                    },
                    null,
                    10,
                    o,
                  ),
                  (0, i.Lk)(
                    "div",
                    { class: (0, i.C4)(e.$style.info) },
                    [
                      (0, i.bF)(
                        n.A,
                        { accent: "", size: "s", class: (0, i.C4)(e.$style.text) },
                        {
                          default: (0, i.k6)(() => [
                            e.isAdFreeActive && "rewarded" === e.adType
                              ? ((0, i.uX)(),
                                (0, i.CE)(
                                  i.FK,
                                  { key: 0 },
                                  [
                                    (0, i.eW)(
                                      (0, i.v_)(e.$tr("instreamWrapper.noAdInfoRewarded")),
                                      1,
                                    ),
                                  ],
                                  64,
                                ))
                              : e.$slots.default
                                ? ((0, i.uX)(),
                                  (0, i.CE)(
                                    i.FK,
                                    { key: 2 },
                                    [(0, i.eW)((0, i.v_)(e.$tr("instreamWrapper.infoShort")), 1)],
                                    64,
                                  ))
                                : ((0, i.uX)(),
                                  (0, i.CE)(
                                    i.FK,
                                    { key: 1 },
                                    [(0, i.eW)((0, i.v_)(e.$tr("instreamWrapper.info")), 1)],
                                    64,
                                  )),
                          ]),
                          _: 1,
                        },
                        8,
                        ["class"],
                      ),
                      e.secondsLeft > 0 || e.podCounter
                        ? ((0, i.uX)(),
                          (0, i.CE)(
                            "div",
                            { key: 0, class: (0, i.C4)(e.$style.sub_info) },
                            [
                              e.isAdFreeActive
                                ? ((0, i.uX)(),
                                  (0, i.Wv)(
                                    n.A,
                                    { key: 0, size: "xs", class: (0, i.C4)(e.$style.subtext) },
                                    {
                                      default: (0, i.k6)(() => [
                                        (0, i.eW)(
                                          (0, i.v_)(e.$tr("instreamWrapper.noAdRewarded")),
                                          1,
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["class"],
                                  ))
                                : e.podCounter
                                  ? ((0, i.uX)(),
                                    (0, i.Wv)(
                                      n.A,
                                      { key: 1, size: "xs", class: (0, i.C4)(e.$style.subtext) },
                                      {
                                        default: (0, i.k6)(() => [
                                          (0, i.eW)(
                                            (0, i.v_)(
                                              e.$tr("instreamWrapper.adCounter", {
                                                count: e.podCounter.adPosition,
                                                total: e.podCounter.totalAds,
                                              }),
                                            ),
                                            1,
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["class"],
                                    ))
                                  : ((0, i.uX)(),
                                    (0, i.Wv)(
                                      n.A,
                                      { key: 2, size: "xs", class: (0, i.C4)(e.$style.subtext) },
                                      {
                                        default: (0, i.k6)(() => [
                                          (0, i.eW)(
                                            (0, i.v_)(e.secondsLeft) +
                                              " " +
                                              (0, i.v_)(e.$tr("instreamWrapper.sec")),
                                            1,
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["class"],
                                    )),
                            ],
                            2,
                          ))
                        : (0, i.Q3)("", !0),
                    ],
                    2,
                  ),
                  (0, i.RG)(e.$slots, "default"),
                ],
                2,
              )
            ),
          }),
          c = a(97939)
        let u = {}
        u.$style = {
          content: "ti62U",
          icon: "GKWiU",
          info: "KNGWB",
          sub_info: "zVM1c",
          subInfo: "zVM1c",
          text: "h49ge",
          subtext: "_a_9K",
        }
        var d = (0, c.default)(s, [["__cssModules", u]])
      },
      79846: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return s
          },
        })
        var i = a(3144),
          n = a(10906),
          r = (0, i.pM)({
            __name: "PlayButton",
            props: { label: {}, interfaceTarget: {}, withLoader: { type: Boolean } },
            emits: ["click"],
            setup(e, { emit: t }) {
              let a = (0, i.KR)(e.withLoader)
              return (
                (0, i.sV)(() => {
                  e.withLoader &&
                    setTimeout(() => {
                      a.value = !1
                    }, 700)
                }),
                (r, l) => (
                  (0, i.uX)(),
                  (0, i.Wv)(
                    n.A,
                    {
                      size: "xl",
                      interfaceTarget: e.interfaceTarget,
                      label: a.value ? r.$tr("gameContainer.warming_up") : e.label,
                      class: (0, i.C4)([
                        r.$style.play_button_override,
                        a.value && r.$style.loading_override,
                      ]),
                      onClick: l[0] || (l[0] = (e) => t("click")),
                    },
                    null,
                    8,
                    ["interfaceTarget", "label", "class"],
                  )
                )
              )
            },
          }),
          l = a(97939)
        let o = {}
        o.$style = {
          play_button_override: "Y2UNT",
          playButtonOverride: "Y2UNT",
          "#": "_qO69",
          loading_override: "UCydQ",
          loadingOverride: "UCydQ",
          progress: "BNHPc",
        }
        var s = (0, l.default)(r, [["__cssModules", o]])
      },
      33281: function (e, t, a) {
        "use strict"
        a.d(t, {
          A: function () {
            return d
          },
        })
        var i = a(3144),
          n = a(81236),
          r = a(35584)
        let l = ["src", "alt"],
          o = ["innerHTML"]
        var s = (0, i.pM)({
            __name: "ShortGameInfo",
            props: {
              game: {},
              category: {},
              placement: {},
              unavailable: { type: Boolean },
              disabledIcon: { type: Boolean },
              limitedAvailability: { type: Boolean },
            },
            setup(e) {
              let t = (0, r.q)(),
                a = (0, i.EW)(() =>
                  e.unavailable
                    ? t("unavailableGame.oops")
                    : e.game
                      ? `${e.game?.title}${"init_screen" === e.placement && e.game?.gameUrlRedirectTarget ? " *" : ""}`
                      : "",
                ),
                s = (0, i.EW)(() => "desktop_footer" === e.placement)
              return (r, c) => (
                (0, i.uX)(),
                (0, i.CE)(
                  "div",
                  {
                    class: (0, i.C4)([
                      r.$style.info_block,
                      s.value && r.$style.info_block_desktop_footer,
                    ]),
                  },
                  [
                    e.unavailable || e.disabledIcon
                      ? ((0, i.uX)(),
                        (0, i.CE)(
                          "div",
                          {
                            key: 1,
                            class: (0, i.C4)([
                              r.$style.image,
                              r.$style.unavailable_image,
                              s.value && r.$style.image_desktop_footer,
                            ]),
                          },
                          null,
                          2,
                        ))
                      : ((0, i.uX)(),
                        (0, i.CE)(
                          "img",
                          {
                            key: 0,
                            class: (0, i.C4)([
                              r.$style.image,
                              e.game ? r.$style.visible : r.$style.hidden,
                              s.value && r.$style.image_desktop_footer,
                              e.limitedAvailability && r.$style.darken_filter,
                            ]),
                            src: e.game?.icon,
                            alt: e.game?.title,
                          },
                          null,
                          10,
                          l,
                        )),
                    (0, i.Lk)(
                      "div",
                      {
                        class: (0, i.C4)([
                          r.$style.title_wrapper,
                          e.limitedAvailability && r.$style.darken_filter,
                        ]),
                      },
                      [
                        (0, i.bF)(
                          n.A,
                          {
                            type: e.unavailable ? "caption" : "label",
                            size: "m",
                            semibold: "",
                            responsive: !1,
                            class: (0, i.C4)(
                              e.unavailable ? r.$style.title_unavailable : r.$style.title,
                            ),
                          },
                          { default: (0, i.k6)(() => [(0, i.eW)((0, i.v_)(a.value), 1)]), _: 1 },
                          8,
                          ["type", "class"],
                        ),
                        e.unavailable
                          ? ((0, i.uX)(),
                            (0, i.Wv)(
                              n.A,
                              {
                                key: 0,
                                type: "label",
                                size: "xs",
                                responsive: !1,
                                class: (0, i.C4)(r.$style.description),
                              },
                              {
                                default: (0, i.k6)(() => [
                                  (0, i.Lk)(
                                    "p",
                                    { innerHTML: (0, i.R1)(t)("unavailableGame.description") },
                                    null,
                                    8,
                                    o,
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["class"],
                            ))
                          : r.category
                            ? ((0, i.uX)(),
                              (0, i.Wv)(
                                n.A,
                                {
                                  key: 1,
                                  type: "caption",
                                  size: "m",
                                  responsive: !1,
                                  class: (0, i.C4)(r.$style.category),
                                },
                                {
                                  default: (0, i.k6)(() => [
                                    (0, i.eW)((0, i.v_)(e.category || ""), 1),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["class"],
                              ))
                            : (0, i.Q3)("", !0),
                      ],
                      2,
                    ),
                  ],
                  2,
                )
              )
            },
          }),
          c = a(97939)
        let u = {}
        u.$style = {
          visible: "kun2H",
          hidden: "wJRPE",
          info_block: "x9Qya",
          infoBlock: "x9Qya",
          image: "IOyd3",
          info_block_desktop_footer: "jfYhw",
          infoBlockDesktopFooter: "jfYhw",
          image_desktop_footer: "X322y",
          imageDesktopFooter: "X322y",
          darken_filter: "FuMF6",
          darkenFilter: "FuMF6",
          unavailable_image: "GrRip",
          unavailableImage: "GrRip",
          title_wrapper: "DuvQy",
          titleWrapper: "DuvQy",
          title: "AsPd4",
          category: "m1z9m",
          description: "rGSC2",
          title_unavailable: "Wahh6",
          titleUnavailable: "Wahh6",
        }
        var d = (0, c.default)(s, [["__cssModules", u]])
      },
      56657: function (e, t) {
        "use strict"
        t.A = {
          "color_purple-400_override": "SLhKl",
          colorPurple400Override: "SLhKl",
          "#": "UyOWO",
          "color_purple-500_override": "g5dnT",
          colorPurple500Override: "g5dnT",
          "color_purple-600_override": "fk2t_",
          colorPurple600Override: "fk2t_",
          "color_purple-graphite_override": "Bf_3R",
          colorPurpleGraphiteOverride: "Bf_3R",
          color_golden_override: "hlg5n",
          colorGoldenOverride: "hlg5n",
          "color_white-20_override": "AGzUx",
          colorWhite20Override: "AGzUx",
          "color_carbon-200_override": "Gz5hr",
          colorCarbon200Override: "Gz5hr",
          "color_carbon-300_override": "xT7ky",
          colorCarbon300Override: "xT7ky",
          "color_carbon-400_override": "MAy3O",
          colorCarbon400Override: "MAy3O",
          color_salad_override: "WXFva",
          colorSaladOverride: "WXFva",
          ghost_button_override: "OGFrW",
          ghostButtonOverride: "OGFrW",
        }
      },
      42017: function (e, t) {
        "use strict"
        t.A = {
          size_s_override: "kUAcG",
          sizeSOverride: "kUAcG",
          "#": "oD03U",
          icon: "gG8Ce",
          size_m_override: "W6LoO",
          sizeMOverride: "W6LoO",
          size_l_override: "bwgkF",
          sizeLOverride: "bwgkF",
          size_xl_override: "xzDgi",
          sizeXlOverride: "xzDgi",
        }
      },
      41004: function (e, t) {
        "use strict"
        t.A = {
          size_s: "K5iiY",
          sizeS: "K5iiY",
          left_icon: "pCUCm",
          leftIcon: "pCUCm",
          size_m: "jMeZy",
          sizeM: "jMeZy",
          size_l: "HWRLh",
          sizeL: "HWRLh",
          size_xl: "FrntK",
          sizeXl: "FrntK",
        }
      },
      61718: function (e, t) {
        "use strict"
        t.A = {
          triggerElement: "Vv3MY",
          tooltip: "effvB",
          "tooltip-top": "SkdNh",
          tooltipTop: "SkdNh",
          "slide-top": "Zm5Az",
          slideTop: "Zm5Az",
          "tooltip-bottom": "YvloL",
          tooltipBottom: "YvloL",
          "slide-bottom": "uLMrW",
          slideBottom: "uLMrW",
          "tooltip-left": "cfvDu",
          tooltipLeft: "cfvDu",
          "slide-left": "MlUgr",
          slideLeft: "MlUgr",
          "tooltip-right": "bXT9c",
          tooltipRight: "bXT9c",
          "slide-right": "_NEKd",
          slideRight: "_NEKd",
          reverse: "hZ8Cy",
        }
      },
      82851: function (e, t, a) {
        var i = {
          "./64x64-1.webp": "28858",
          "./64x64-10.webp": "9148",
          "./64x64-100.webp": "67954",
          "./64x64-101.webp": "28943",
          "./64x64-102.webp": "18900",
          "./64x64-103.webp": "12673",
          "./64x64-104.webp": "13590",
          "./64x64-105.webp": "81411",
          "./64x64-106.webp": "87592",
          "./64x64-107.webp": "72197",
          "./64x64-108.webp": "15578",
          "./64x64-109.webp": "63511",
          "./64x64-11.webp": "61577",
          "./64x64-110.webp": "83409",
          "./64x64-111.webp": "74916",
          "./64x64-112.webp": "57695",
          "./64x64-113.webp": "68226",
          "./64x64-114.webp": "54453",
          "./64x64-115.webp": "25368",
          "./64x64-116.webp": "72627",
          "./64x64-117.webp": "95078",
          "./64x64-118.webp": "69209",
          "./64x64-119.webp": "38156",
          "./64x64-12.webp": "42970",
          "./64x64-120.webp": "14364",
          "./64x64-121.webp": "96937",
          "./64x64-122.webp": "9658",
          "./64x64-123.webp": "16919",
          "./64x64-124.webp": "3824",
          "./64x64-13.webp": "47735",
          "./64x64-14.webp": "96528",
          "./64x64-15.webp": "41709",
          "./64x64-16.webp": "28286",
          "./64x64-17.webp": "19115",
          "./64x64-18.webp": "40468",
          "./64x64-19.webp": "77505",
          "./64x64-2.webp": "7881",
          "./64x64-20.webp": "21777",
          "./64x64-21.webp": "90052",
          "./64x64-22.webp": "7391",
          "./64x64-23.webp": "91586",
          "./64x64-24.webp": "98901",
          "./64x64-25.webp": "97176",
          "./64x64-26.webp": "70963",
          "./64x64-27.webp": "13126",
          "./64x64-28.webp": "83193",
          "./64x64-29.webp": "59148",
          "./64x64-3.webp": "92892",
          "./64x64-30.webp": "69714",
          "./64x64-31.webp": "32271",
          "./64x64-32.webp": "70964",
          "./64x64-33.webp": "76609",
          "./64x64-34.webp": "29238",
          "./64x64-35.webp": "85059",
          "./64x64-36.webp": "73352",
          "./64x64-37.webp": "88197",
          "./64x64-38.webp": "35130",
          "./64x64-39.webp": "42391",
          "./64x64-4.webp": "20139",
          "./64x64-40.webp": "10199",
          "./64x64-41.webp": "50138",
          "./64x64-42.webp": "12809",
          "./64x64-43.webp": "97820",
          "./64x64-44.webp": "25067",
          "./64x64-45.webp": "31486",
          "./64x64-46.webp": "19981",
          "./64x64-47.webp": "33552",
          "./64x64-48.webp": "36527",
          "./64x64-49.webp": "89522",
          "./64x64-5.webp": "26558",
          "./64x64-50.webp": "13064",
          "./64x64-51.webp": "81317",
          "./64x64-52.webp": "22710",
          "./64x64-53.webp": "6883",
          "./64x64-54.webp": "28020",
          "./64x64-55.webp": "38145",
          "./64x64-56.webp": "77074",
          "./64x64-57.webp": "38063",
          "./64x64-58.webp": "81680",
          "./64x64-59.webp": "8461",
          "./64x64-6.webp": "15053",
          "./64x64-60.webp": "36717",
          "./64x64-61.webp": "75184",
          "./64x64-62.webp": "97771",
          "./64x64-63.webp": "6942",
          "./64x64-64.webp": "56585",
          "./64x64-65.webp": "87804",
          "./64x64-66.webp": "26391",
          "./64x64-67.webp": "21626",
          "./64x64-68.webp": "70629",
          "./64x64-69.webp": "10376",
          "./64x64-7.webp": "28624",
          "./64x64-70.webp": "82350",
          "./64x64-71.webp": "46619",
          "./64x64-72.webp": "12608",
          "./64x64-73.webp": "99805",
          "./64x64-74.webp": "15402",
          "./64x64-75.webp": "45191",
          "./64x64-76.webp": "57708",
          "./64x64-77.webp": "83609",
          "./64x64-78.webp": "66534",
          "./64x64-79.webp": "51443",
          "./64x64-8.webp": "31599",
          "./64x64-80.webp": "63715",
          "./64x64-81.webp": "7894",
          "./64x64-82.webp": "66853",
          "./64x64-83.webp": "52008",
          "./64x64-84.webp": "10927",
          "./64x64-85.webp": "48370",
          "./64x64-86.webp": "55265",
          "./64x64-87.webp": "49620",
          "./64x64-88.webp": "7211",
          "./64x64-89.webp": "64478",
          "./64x64-9.webp": "84594",
          "./64x64-90.webp": "60772",
          "./64x64-91.webp": "13841",
          "./64x64-92.webp": "26626",
          "./64x64-93.webp": "58047",
          "./64x64-94.webp": "29528",
          "./64x64-95.webp": "92405",
          "./64x64-96.webp": "19334",
          "./64x64-97.webp": "72979",
          "./64x64-98.webp": "43564",
          "./64x64-99.webp": "53369",
          "./64x64.webp": "21580",
        }
        function n(e) {
          return a(r(e))
        }
        function r(e) {
          if (!a.o(i, e)) {
            var t = Error("Cannot find module '" + e + "'")
            throw ((t.code = "MODULE_NOT_FOUND"), t)
          }
          return i[e]
        }
        ;((n.keys = function () {
          return Object.keys(i)
        }),
          (n.resolve = r),
          (e.exports = n),
          (n.id = 82851))
      },
      28858: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-1.99986f17.webp"
      },
      9148: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-10.4c282900.webp"
      },
      67954: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-100.0584eecc.webp"
      },
      28943: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-101.ad6f21f5.webp"
      },
      18900: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-102.4a6adb7a.webp"
      },
      12673: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-103.a0a7568b.webp"
      },
      13590: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-104.495601ba.webp"
      },
      81411: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-105.79e6d247.webp"
      },
      87592: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-106.d6292819.webp"
      },
      72197: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-107.40105c34.webp"
      },
      15578: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-108.73516e42.webp"
      },
      63511: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-109.fa139f4b.webp"
      },
      61577: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-11.afa6ae52.webp"
      },
      83409: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-110.7628f342.webp"
      },
      74916: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-111.cd4e3464.webp"
      },
      57695: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-112.f2fe22ae.webp"
      },
      68226: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-113.dcfc23c2.webp"
      },
      54453: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-114.b3807f43.webp"
      },
      25368: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-115.6fcbd85b.webp"
      },
      72627: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-116.21a5b873.webp"
      },
      95078: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-117.64e91479.webp"
      },
      69209: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-118.f50b93a4.webp"
      },
      38156: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-119.ee24157f.webp"
      },
      42970: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-12.09ff9b37.webp"
      },
      14364: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-120.250de2c0.webp"
      },
      96937: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-121.3f9a23e8.webp"
      },
      9658: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-122.18b5b759.webp"
      },
      16919: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-123.f3a9310a.webp"
      },
      3824: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-124.c1e139d8.webp"
      },
      47735: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-13.9de02cf3.webp"
      },
      96528: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-14.3046cdef.webp"
      },
      41709: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-15.0f1112f5.webp"
      },
      28286: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-16.87dbcabc.webp"
      },
      19115: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-17.83356dc5.webp"
      },
      40468: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-18.461a3c06.webp"
      },
      77505: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-19.494c31e4.webp"
      },
      7881: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-2.1f267a05.webp"
      },
      21777: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-20.9c73ac25.webp"
      },
      90052: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-21.743d0ea8.webp"
      },
      7391: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-22.121dada4.webp"
      },
      91586: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-23.877fced0.webp"
      },
      98901: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-24.06b14d48.webp"
      },
      97176: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-25.d7cd9f21.webp"
      },
      70963: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-26.6791fb4a.webp"
      },
      13126: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-27.deb252ab.webp"
      },
      83193: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-28.e76a36a4.webp"
      },
      59148: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-29.94cdd557.webp"
      },
      92892: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-3.ac483be5.webp"
      },
      69714: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-30.24591e19.webp"
      },
      32271: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-31.ce992864.webp"
      },
      70964: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-32.69ac733f.webp"
      },
      76609: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-33.5122d918.webp"
      },
      29238: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-34.7243d4c2.webp"
      },
      85059: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-35.0eb93c2e.webp"
      },
      73352: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-36.cec07775.webp"
      },
      88197: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-37.27abe75e.webp"
      },
      35130: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-38.ed5742af.webp"
      },
      42391: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-39.ac07f995.webp"
      },
      20139: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-4.f104b7da.webp"
      },
      10199: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-40.d4aa3635.webp"
      },
      50138: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-41.a1fad9aa.webp"
      },
      12809: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-42.f32afdcb.webp"
      },
      97820: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-43.8e1ab42c.webp"
      },
      25067: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-44.14b3a1d8.webp"
      },
      31486: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-45.899f06fd.webp"
      },
      19981: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-46.b95e3d08.webp"
      },
      33552: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-47.8042f656.webp"
      },
      36527: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-48.81f4bce0.webp"
      },
      89522: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-49.cd3ed773.webp"
      },
      26558: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-5.4f6efd68.webp"
      },
      13064: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-50.15d721ac.webp"
      },
      81317: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-51.bda58752.webp"
      },
      22710: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-52.89abe8e4.webp"
      },
      6883: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-53.22d8283a.webp"
      },
      28020: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-54.b08f240c.webp"
      },
      38145: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-55.bdd42372.webp"
      },
      77074: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-56.ac807d4b.webp"
      },
      38063: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-57.0ffa02b6.webp"
      },
      81680: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-58.21d0b93f.webp"
      },
      8461: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-59.b6187272.webp"
      },
      15053: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-6.8ddc1aef.webp"
      },
      36717: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-60.c1f5d09c.webp"
      },
      75184: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-61.1699a47e.webp"
      },
      97771: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-62.52455f72.webp"
      },
      6942: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-63.1f212e0f.webp"
      },
      56585: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-64.4530876d.webp"
      },
      87804: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-65.ae199171.webp"
      },
      26391: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-66.4308d816.webp"
      },
      21626: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-67.97dcd2d4.webp"
      },
      70629: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-68.ae83eb75.webp"
      },
      10376: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-69.61626940.webp"
      },
      28624: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-7.25b21958.webp"
      },
      82350: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-70.834f5bac.webp"
      },
      46619: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-71.75b95bca.webp"
      },
      12608: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-72.7513b8ef.webp"
      },
      99805: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-73.7d66a943.webp"
      },
      15402: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-74.5a331d76.webp"
      },
      45191: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-75.7e0fe749.webp"
      },
      57708: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-76.4a5c04e7.webp"
      },
      83609: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-77.8fc27987.webp"
      },
      66534: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-78.8a455059.webp"
      },
      51443: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-79.1c7d76d3.webp"
      },
      31599: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-8.158e9a72.webp"
      },
      63715: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-80.4edff283.webp"
      },
      7894: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-81.13641dac.webp"
      },
      66853: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-82.fcf1f820.webp"
      },
      52008: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-83.0e624ce0.webp"
      },
      10927: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-84.54384d25.webp"
      },
      48370: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-85.87b77c2c.webp"
      },
      55265: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-86.5cad9511.webp"
      },
      49620: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-87.6fc43194.webp"
      },
      7211: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-88.7b56eb39.webp"
      },
      64478: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-89.51d55223.webp"
      },
      84594: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-9.a01f0309.webp"
      },
      60772: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-90.86e21fbb.webp"
      },
      13841: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-91.c8c1e260.webp"
      },
      26626: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-92.4545bfd9.webp"
      },
      58047: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-93.23dd869a.webp"
      },
      29528: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-94.f11ac430.webp"
      },
      92405: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-95.e0b7e8ac.webp"
      },
      19334: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-96.82be696a.webp"
      },
      72979: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-97.65f00cfe.webp"
      },
      43564: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-98.b756b9b8.webp"
      },
      53369: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64-99.32de346b.webp"
      },
      21580: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/64x64.950c8101.webp"
      },
      72015: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/Playgama-OG.b0c038bf.webp"
      },
      96409: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/favicon-192.forced.ee934ed6.png"
      },
      22885: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/favicon-512.forced.0e230cda.png"
      },
      11574: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/svg/favicon.11c3dab7.svg"
      },
      99930: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/eyes.aeff8f11.webp"
      },
      11585: function (e, t, a) {
        "use strict"
        e.exports = a.p + "static/image/save.731dfca5.webp"
      },
      84889: function (e, t, a) {
        "use strict"
        a.d(t, {
          E: function () {
            return n
          },
        })
        var i = a(3144)
        function n(e) {
          return {
            labelBindings: (0, i.EW)(
              () =>
                ({
                  xs: { size: "xs", accent: !0 },
                  s: { size: "s", accent: !0 },
                  m: { size: "m", accent: !0 },
                  l: { size: "m", accent: !0 },
                  xl: { size: "l", semibold: !0 },
                })[e],
            ),
          }
        }
      },
      10578: function (e, t, a) {
        "use strict"
        a.d(t, {
          P: function () {
            return n
          },
        })
        var i = { id: "b7b21e8a", attrs: { viewBox: "0 0 28 28", width: "24", height: "24" } }
        let n = {
          "android-store": {
            id: "c051979e",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          android: { id: "34a8ec97", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          apple: { id: "14552300", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          bluesky: { id: "59243fd0", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          bridge: { id: "58c19f1e", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          "caret-right": {
            id: "fa844755",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          check: { id: "479fd3b9", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          "chevron-left": {
            id: "cd3eba95",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          "chevron-right": {
            id: "3864bb4b",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          close: { id: "a75616c5", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          collapse: { id: "1c2f3bd3", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          copy: { id: "3ffbe0fe", attrs: { viewBox: "0 0 18 18", width: "18", height: "18" } },
          desktop: { id: "838471e8", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          discord: { id: "b3d8e0ad", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          dislike: { id: "6c7800e8", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          download: { id: "92a64cea", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          facebook: { id: "4b1f8035", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          fennek: { id: "c55efef7", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          flag: { id: "385a2d1b", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          fullscreen: {
            id: "33451e8c",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          gift: { id: "dd1a400a", attrs: { viewBox: "0 0 20 20", width: "20", height: "20" } },
          github: { id: "e60611f3", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          hand: { id: "239f98cd", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          "happy-cloud": {
            id: "48d1b2f6",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          heart: { id: "ae9e2d9e", attrs: { viewBox: "0 0 25 24", width: "25", height: "24" } },
          like: { id: "802d0d04", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          "linked-in": {
            id: "e6aef802",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          loader: { id: "3916200b", attrs: { viewBox: "0 0 28 28", width: "28", height: "28" } },
          logout: { id: "0735a964", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          menu: { id: "c4f8d21b", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          microsoft: { id: "d3307e3d", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          play: { id: "b8d3e1d9", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          "playgama-app": {
            id: "bd518542",
            attrs: { viewBox: "0 0 60 60", width: "60", height: "60" },
          },
          plus: { id: "2e31f8d5", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          poop: { id: "f2f11358", attrs: { viewBox: "0 0 29 28", width: "29", height: "28" } },
          reddit: { id: "2e4a66e0", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          "sad-cloud": {
            id: "9840cc3e",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          "scroll-to-top": { id: "6a85b78e", attrs: { viewBox: "0 0 24 24" } },
          search: { id: "79c4df0a", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          send: { id: "6838bd29", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          smile: { id: "da415236", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          tag: { id: "03f8985e", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          telegram: { id: "4f376e8f", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          twitter: { id: "0d4a4e74", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          "two-fingers": {
            id: "eb4af878",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          action: { id: "65d17d3f", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          all_games: { id: "85a60a16", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          all_series: {
            id: "779ec039",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          all_tags: { id: "133541ac", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          arcade: { id: "d4786335", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          boys: { id: "5f0570bf", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          "bubble-shooter": {
            id: "a526ebf7",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          car: i,
          clicker: { id: "f2b87c05", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          drawing: { id: "ec15df62", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          funny: { id: "118e6e61", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          girls: { id: "be71022e", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          gun: { id: "18822f78", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          horror: { id: "da055319", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          idle: { id: "e17c2bb5", attrs: { viewBox: "0 0 28 28", width: "24", height: "24" } },
          io: { id: "4bf596ce", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          multiplayer: {
            id: "243de595",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          new: { id: "6f45af1b", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          puzzle: { id: "d8973db0", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          obby: { id: "56675b55", attrs: { viewBox: "0 0 22 24", width: "22", height: "24" } },
          racing: i,
          random: { id: "1b319c1a", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          recommended: {
            id: "c13d010e",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          shooting: { id: "4b3df9fa", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          simulation: {
            id: "38101618",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          skill: { id: "a7e6feb7", attrs: { viewBox: "0 0 28 28", width: "24", height: "24" } },
          snake: { id: "bb54c69c", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          soccer: { id: "9856a340", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          solitaire: { id: "5058f60a", attrs: { viewBox: "0 0 28 28", width: "24", height: "24" } },
          sports: { id: "e90aadca", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          strategy: { id: "a7af1f8e", attrs: { viewBox: "0 0 24 24", width: "24", height: "24" } },
          trending_now: {
            id: "e1222e3b",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          top_playgama: {
            id: "c55efef7",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          "two-player": {
            id: "d3c0ec7f",
            attrs: { viewBox: "0 0 24 24", width: "24", height: "24" },
          },
          "en-US": {
            id: "7f3012f5",
            attrs: { viewBox: "0 0 512 512", width: "512", height: "512" },
          },
          "es-ES": {
            id: "0b923787",
            attrs: { viewBox: "0 0 512 512", width: "512", height: "512" },
          },
          "de-DE": {
            id: "3f6dc3fa",
            attrs: { viewBox: "0 0 512 512", width: "512", height: "512" },
          },
          "fr-FR": {
            id: "1d0c12a2",
            attrs: { viewBox: "0 0 512 512", width: "512", height: "512" },
          },
          "it-IT": {
            id: "8f3ce995",
            attrs: { viewBox: "0 0 512 512", width: "512", height: "512" },
          },
          "pt-BR": {
            id: "2333b293",
            attrs: { viewBox: "0 0 512 512", width: "512", height: "512" },
          },
          "tr-TR": {
            id: "15988a8d",
            attrs: { viewBox: "0 0 512 512", width: "512", height: "512" },
          },
          "pl-PL": {
            id: "ce234b41",
            attrs: { viewBox: "0 0 512 512", width: "512", height: "512" },
          },
          "id-ID": {
            id: "58a95761",
            attrs: { viewBox: "0 0 512 512", width: "512", height: "512" },
          },
        }
      },
      3231: function (e, t, a) {
        "use strict"
        a.d(t, {
          W: function () {
            return l
          },
        })
        var i = a(20211),
          n = a(3144),
          r = a(43719)
        let l = (0, i.nY)("toast", () => {
          let e = (0, n.KR)(!1),
            t = (0, n.KR)(null),
            a = (0, r.L)()
          return {
            toast: t,
            isVisible: e,
            showToast: (i) => {
              a.request({
                name: i.type,
                priority: i.priority,
                onOpen: () => {
                  ;((t.value = { ...i }), (e.value = !0), i.onShow?.())
                },
                onClose: () => {
                  ;((e.value = !1), (t.value = null))
                },
              })
            },
            closeToast: () => {
              t.value && a.remove(t.value.type)
            },
            acceptToast: () => {
              t.value && (t.value.onAccept?.(), a.remove(t.value.type))
            },
          }
        })
      },
      31928: function (e, t, a) {
        "use strict"
        a.d(t, {
          f: function () {
            return n
          },
        })
        var i = a(3144)
        let n = ({ trigger: e, hideDelayMs: t, position: a, additionalOffset: n, tooltip: r }) => {
          let l = (0, i.IJ)({}),
            o = (0, i.KR)(!1),
            s = (0, i.KR)(null),
            c = (0, i.KR)(a),
            u = () => {
              let t = e.value?.firstElementChild
              if (!r.value || !t) return
              let i = r.value.getBoundingClientRect(),
                o = t.getBoundingClientRect(),
                s = window.innerHeight,
                u = window.innerWidth
              c.value = a
              let d = { top: o.top, bottom: s - o.bottom, left: o.left, right: u - o.right },
                p = n + 6 + 10
              switch (a) {
                case "top":
                  d.top < i.height + p && (c.value = "bottom")
                  break
                case "bottom":
                  d.bottom < i.height + p && (c.value = "top")
                  break
                case "left":
                  d.left < i.width + p && (c.value = "right")
                  break
                case "right":
                  d.right < i.width + p && (c.value = "left")
              }
              let m = 0,
                g = 0,
                v = "",
                h = n + 6
              switch (c.value) {
                case "top":
                  ;((m = o.top - h), (g = o.left + o.width / 2), (v = "translate(-50%, -100%)"))
                  break
                case "bottom":
                  ;((m = o.bottom + h), (g = o.left + o.width / 2), (v = "translate(-50%, 0)"))
                  break
                case "left":
                  ;((m = o.top + o.height / 2), (g = o.left - h), (v = "translate(-100%, -50%)"))
                  break
                case "right":
                  ;((m = o.top + o.height / 2), (g = o.right + h), (v = "translate(0, -50%)"))
              }
              if ("top" === c.value || "bottom" === c.value) {
                let e = g - i.width / 2
                e < 10 ? (g += 10 - e) : e + i.width > u - 10 && (g -= e + i.width - (u - 10))
              } else {
                let e = m - i.height / 2
                e < 10 ? (m += 10 - e) : e + i.height > s - 10 && (m -= e + i.height - (s - 10))
              }
              l.value = { position: "fixed", top: `${m}px`, left: `${g}px`, transform: v }
            },
            d = () => {
              ;(s.value && (clearTimeout(s.value), (s.value = null)), (o.value = !1))
            }
          return (
            (0, i.sV)(() => {
              ;(window.addEventListener("resize", u), window.addEventListener("scroll", d, !0))
            }),
            (0, i.xo)(() => {
              ;(s.value && clearTimeout(s.value),
                window.removeEventListener("resize", u),
                window.removeEventListener("scroll", d, !0))
            }),
            (0, i.wB)(o, (e) => {
              e && (0, i.dY)(u)
            }),
            {
              hideTooltip: () => {
                ;(s.value && (clearTimeout(s.value), (s.value = null)),
                  (s.value = window.setTimeout(() => {
                    o.value = !1
                  }, t)))
              },
              showTooltip: () => {
                ;(s.value && clearTimeout(s.value),
                  (s.value = window.setTimeout(() => {
                    o.value = !0
                  }, 100)))
              },
              onHoverTooltip: () => {
                ;((o.value = !0), s.value && clearTimeout(s.value))
              },
              tooltipStyle: l,
              isVisible: o,
              adjustedPosition: c,
            }
          )
        }
      },
      49384: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          _: function () {
            return C
          },
        }),
          a(17932),
          a(86204))
        var i = a(20211),
          n = a(3144),
          r = a(76915),
          l = a(97178),
          o = a(57550),
          s = a(50370)
        let c = {
          timeout: 5e3,
          adSettings: { initialDelayMs: 3e5, intervalsMs: 3e5 },
          adUnitConfig: [
            {
              platforms: ["desktop"],
              campaignId: "ms-store-fallback",
              creatives: [
                {
                  name: "9plgt00f15xs",
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "f6a172bd-52d7-46a2-9180-7f2ea1853300",
                  clickUrl: "ms-windows-store://pdp/?productid=9plgt00f15xs",
                  responsive: !0,
                },
                {
                  name: "9n08dpggwvqh",
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "8e7e7b20-ddc8-4933-624e-cc6bc5802000",
                  width: 540,
                  height: 300,
                  clickUrl: "ms-windows-store://pdp/?productid=9n08dpggwvqh",
                },
                {
                  name: "9n7qs1kn0v8l",
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "bdbfb342-d7e3-4c55-c04d-90ffc49d8900",
                  width: 540,
                  height: 300,
                  clickUrl: "ms-windows-store://pdp/?productid=9n7qs1kn0v8l",
                },
                {
                  name: "9pbp2j1pt8rd",
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "369626f5-4886-4ff2-cdae-5bff9d6dfa00",
                  width: 540,
                  height: 300,
                  clickUrl: "ms-windows-store://pdp/?productid=9pbp2j1pt8rd",
                },
                {
                  name: "9p87g58gdfs8",
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "ce93059a-dfa2-4e3c-2e6e-c6a0e4180900",
                  width: 540,
                  height: 300,
                  clickUrl: "ms-windows-store://pdp/?productid=9p87g58gdfs8",
                },
                {
                  name: "9pbbr7r5dnvz",
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "e2d4f385-381f-41aa-381a-fcfc181e2800",
                  width: 540,
                  height: 300,
                  clickUrl: "ms-windows-store://pdp/?productid=9pbbr7r5dnvz",
                },
                {
                  name: "9p3gwtlnq3ss",
                  adUnits: ["interstitial", "rewarded"],
                  format: "video",
                  file: "9b9743c86eed4a879194c60596357f53",
                  clickUrl: "ms-windows-store://pdp/?productid=9p3gwtlnq3ss",
                  skippable: !0,
                },
                {
                  name: "9pfc45g1xhp7",
                  adUnits: ["interstitial", "rewarded"],
                  format: "video",
                  file: "236ada3eea264401b7be98a0466cd6ce",
                  clickUrl: "ms-windows-store://pdp/?productid=9pfc45g1xhp7",
                  skippable: !0,
                },
                {
                  name: "9nwgnsdn6r0t",
                  adUnits: ["interstitial", "rewarded"],
                  format: "video",
                  file: "5190b1fcdbba4021a45c3930c54161e2",
                  clickUrl: "ms-windows-store://pdp/?productid=9nwgnsdn6r0t",
                  skippable: !0,
                },
                {
                  name: "9nxv05zxpkq7",
                  adUnits: ["interstitial", "rewarded"],
                  format: "video",
                  file: "d60b3bcee2174db1948f70ccbba67d7d",
                  clickUrl: "ms-windows-store://pdp/?productid=9nxv05zxpkq7",
                  skippable: !0,
                },
                {
                  name: "9p7cq8wcc3j7",
                  adUnits: ["interstitial", "rewarded"],
                  format: "video",
                  file: "c0fb61f2cb2a00cb11d95fdd283b5de0",
                  clickUrl: "ms-windows-store://pdp/?productid=9p7cq8wcc3j7",
                  skippable: !0,
                },
                {
                  name: "9plc0zqln6fw",
                  adUnits: ["interstitial", "rewarded"],
                  format: "video",
                  file: "5407857b9ace538d7954b7ab734ffc6a",
                  clickUrl: "ms-windows-store://pdp/?productid=9plc0zqln6fw",
                  skippable: !0,
                },
              ],
            },
          ],
        }
        var u = a(30232),
          d = a(87743),
          p = a(13344)
        let m = "playgama-anti-fraud-brand",
          g = [
            {
              platforms: ["desktop"],
              campaignId: m,
              creatives: [
                {
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "c82ca5d9-38ef-432b-25f1-2b183ab84b00",
                  width: 540,
                  height: 300,
                },
              ],
            },
            {
              platforms: ["ios", "android"],
              campaignId: m,
              creatives: [
                {
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "c809302d-1ba1-462f-c66f-1b54a4e55b00",
                  supportedOrientations: ["portrait"],
                  width: 300,
                  height: 300,
                },
                {
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "33525da5-dcab-43ae-a0e0-5b1471498000",
                  supportedOrientations: ["landscape"],
                  width: 320,
                  height: 100,
                },
              ],
            },
          ],
          v = "portal-export-fallback",
          h = [
            {
              platforms: ["desktop"],
              campaignId: v,
              creatives: [
                {
                  name: "tb-world",
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "a894bcc6-d4cb-4869-d09c-5c142a3cf400",
                  clickUrl: "https://playgama.com/game/tb-world?utm_source=gam_fallback",
                  width: 540,
                  height: 300,
                },
                {
                  name: "playground-man-ragdoll-show",
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "cdeb2791-7471-456f-ef52-694290f48000",
                  clickUrl:
                    "https://playgama.com/game/playground-man-ragdoll-show?utm_source=gam_fallback",
                  width: 540,
                  height: 300,
                },
                {
                  name: "gangster-island-crime-city",
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "ce93059a-dfa2-4e3c-2e6e-c6a0e4180900",
                  clickUrl:
                    "https://playgama.com/game/gangster-island-crime-city?utm_source=gam_fallback",
                  width: 540,
                  height: 300,
                },
                {
                  name: "piece-of-cake-merge--bake",
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "23a90036-7be5-4f32-c34f-c83c7158b900",
                  clickUrl:
                    "https://playgama.com/game/piece-of-cake-merge--bake?utm_source=gam_fallback",
                  width: 540,
                  height: 300,
                },
                {
                  name: "vega-mix-2-adventure",
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "7c110a82-bb25-429a-2be8-7692a60e7c00",
                  clickUrl:
                    "https://playgama.com/game/vega-mix-2-adventure?utm_source=gam_fallback",
                  width: 540,
                  height: 300,
                },
              ],
            },
            {
              platforms: ["ios"],
              campaignId: v,
              creatives: [
                {
                  name: "tb-world",
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "e626ee2d-7ed8-41f9-07c6-4d4111f41a00",
                  supportedOrientations: ["portrait"],
                  clickUrl: "https://playgama.com/game/tb-world?utm_source=gam_fallback",
                  width: 300,
                  height: 300,
                },
                {
                  name: "gangster-island-crime-city",
                  adUnits: ["interstitial", "rewarded"],
                  supportedOrientations: ["portrait"],
                  format: "banner",
                  file: "34e0500a-aecd-4cf4-f5af-30433f272d00",
                  clickUrl:
                    "https://playgama.com/game/gangster-island-crime-city?utm_source=gam_fallback",
                  width: 300,
                  height: 300,
                },
                {
                  name: "piece-of-cake-merge--bake",
                  adUnits: ["interstitial", "rewarded"],
                  supportedOrientations: ["portrait"],
                  format: "banner",
                  file: "06937377-1d70-40ae-9633-8d7a01b6fd00",
                  clickUrl:
                    "https://playgama.com/game/piece-of-cake-merge--bake?utm_source=gam_fallback",
                  width: 300,
                  height: 300,
                },
              ],
            },
            {
              platforms: ["android"],
              campaignId: v,
              creatives: [
                {
                  name: "tb-world",
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "e626ee2d-7ed8-41f9-07c6-4d4111f41a00",
                  supportedOrientations: ["portrait"],
                  clickUrl: "https://playgama.com/game/tb-world?utm_source=gam_fallback",
                  width: 300,
                  height: 300,
                },
                {
                  name: "gangster-island-crime-city",
                  adUnits: ["interstitial", "rewarded"],
                  supportedOrientations: ["portrait"],
                  format: "banner",
                  file: "34e0500a-aecd-4cf4-f5af-30433f272d00",
                  clickUrl:
                    "https://playgama.com/game/gangster-island-crime-city?utm_source=gam_fallback",
                  width: 300,
                  height: 300,
                },
                {
                  name: "piece-of-cake-merge--bake",
                  adUnits: ["interstitial", "rewarded"],
                  supportedOrientations: ["portrait"],
                  format: "banner",
                  file: "06937377-1d70-40ae-9633-8d7a01b6fd00",
                  clickUrl:
                    "https://playgama.com/game/piece-of-cake-merge--bake?utm_source=gam_fallback",
                  width: 300,
                  height: 300,
                },
                {
                  name: "vega-mix-2-adventure",
                  supportedOrientations: ["portrait"],
                  adUnits: ["interstitial", "rewarded"],
                  format: "banner",
                  file: "7c312346-aa30-4aab-5821-9d8b2e746c00",
                  clickUrl:
                    "https://playgama.com/game/vega-mix-2-adventure?utm_source=gam_fallback",
                  width: 300,
                  height: 300,
                },
                {
                  name: "playground-man-ragdoll-show",
                  adUnits: ["interstitial", "rewarded"],
                  supportedOrientations: ["portrait"],
                  format: "banner",
                  file: "745165fa-bd9a-4245-43e3-abdfa0cde500",
                  clickUrl:
                    "https://playgama.com/game/playground-man-ragdoll-show?utm_source=gam_fallback",
                  width: 300,
                  height: 300,
                },
              ],
            },
          ],
          f = [
            {
              platforms: ["desktop"],
              campaignId: "fallback_no_ads_eye",
              creatives: [
                {
                  adUnits: ["leaderboard"],
                  format: "banner",
                  file: "bcb2cf74-d18f-46db-88b8-cf2954f34d00",
                  clickUrl: "https://playgama.com/developers",
                  width: 728,
                  height: 90,
                },
                {
                  adUnits: ["leaderboard_rest"],
                  format: "banner",
                  file: "bcb2cf74-d18f-46db-88b8-cf2954f34d00",
                  clickUrl: "https://playgama.com/developers",
                  width: 728,
                  height: 90,
                },
                {
                  adUnits: ["sidebar_bottom"],
                  format: "banner",
                  file: "374a2dc4-458e-4af1-5256-35f309f0a400",
                  clickUrl: "https://playgama.com/developers",
                  width: 300,
                  height: 600,
                },
              ],
            },
            {
              platforms: ["desktop"],
              campaignId: "fallback_no_ads_balls",
              creatives: [
                {
                  adUnits: ["leaderboard"],
                  format: "banner",
                  file: "dccaa1b8-a6d0-4569-70a9-b752c115be00",
                  clickUrl: "https://playgama.com/developers",
                  width: 728,
                  height: 90,
                },
                {
                  adUnits: ["leaderboard_rest"],
                  format: "banner",
                  file: "dccaa1b8-a6d0-4569-70a9-b752c115be00",
                  clickUrl: "https://playgama.com/developers",
                  width: 728,
                  height: 90,
                },
                {
                  adUnits: ["sidebar_bottom"],
                  format: "banner",
                  file: "979162c2-542d-446b-63cc-9afa4b7ceb00",
                  clickUrl: "https://playgama.com/developers",
                  width: 300,
                  height: 600,
                },
              ],
            },
            {
              platforms: ["desktop"],
              campaignId: "fallback_no_ads_fruits",
              creatives: [
                {
                  adUnits: ["sidebar_bottom"],
                  format: "banner",
                  file: "c58e10aa-cd01-4623-b108-f1ce19f24500",
                  clickUrl: "https://playgama.com/developers",
                  width: 300,
                  height: 600,
                },
                {
                  adUnits: ["leaderboard"],
                  format: "banner",
                  file: "18ed08fd-1859-4757-ca7c-2bfbf988cf00",
                  clickUrl: "https://playgama.com/developers",
                  width: 728,
                  height: 90,
                },
                {
                  adUnits: ["leaderboard_rest"],
                  format: "banner",
                  file: "18ed08fd-1859-4757-ca7c-2bfbf988cf00",
                  clickUrl: "https://playgama.com/developers",
                  width: 728,
                  height: 90,
                },
              ],
            },
            {
              platforms: ["android", "ios"],
              campaignId: "fallback_no_ads_eye",
              creatives: [
                {
                  adUnits: ["leaderboard"],
                  format: "banner",
                  file: "bcb2cf74-d18f-46db-88b8-cf2954f34d00",
                  clickUrl: "https://playgama.com/developers",
                  width: 728,
                  height: 90,
                },
                {
                  adUnits: ["leaderboard_rest"],
                  format: "banner",
                  file: "bcb2cf74-d18f-46db-88b8-cf2954f34d00",
                  clickUrl: "https://playgama.com/developers",
                  width: 728,
                  height: 90,
                },
                {
                  adUnits: ["sidebar_bottom"],
                  format: "banner",
                  file: "374a2dc4-458e-4af1-5256-35f309f0a400",
                  clickUrl: "https://playgama.com/developers",
                  width: 300,
                  height: 600,
                },
              ],
            },
            {
              platforms: ["android", "ios"],
              campaignId: "fallback_no_ads_balls",
              creatives: [
                {
                  adUnits: ["leaderboard"],
                  format: "banner",
                  file: "dccaa1b8-a6d0-4569-70a9-b752c115be00",
                  clickUrl: "https://playgama.com/developers",
                  width: 728,
                  height: 90,
                },
                {
                  adUnits: ["leaderboard_rest"],
                  format: "banner",
                  file: "dccaa1b8-a6d0-4569-70a9-b752c115be00",
                  clickUrl: "https://playgama.com/developers",
                  width: 728,
                  height: 90,
                },
                {
                  adUnits: ["sidebar_bottom"],
                  format: "banner",
                  file: "979162c2-542d-446b-63cc-9afa4b7ceb00",
                  clickUrl: "https://playgama.com/developers",
                  width: 300,
                  height: 600,
                },
              ],
            },
          ],
          _ = "playgama.com",
          b = "https://playgama.com",
          y = ["2g", "slow-2g"],
          w = [...y, "3g"],
          k = {
            sticky_mobile_non_game_page: "sticky_mobile",
            sticky_mobile: "sticky_mobile",
            sticky_tablet: "sticky_mobile",
            sticky_desktop: "sticky_desktop",
            sidebar: "sidebar",
            sidebar_bottom: "sidebar_bottom",
            leaderboard: "leaderboard",
            leaderboard_rest: "leaderboard_rest",
            widget_sidebar: "widget_sidebar",
            widget_sidebar_bottom: "widget_sidebar_bottom",
            widget_horizontal: "widget_horizontal",
            widget_horizontal_2: "widget_horizontal_2",
            widget_sticky_mobile: "widget_sticky_mobile",
            widget_sticky_tablet: "widget_sticky_mobile",
            interstitial_on_return: "interstitial_on_return",
            universal_banner_1: "universal_banner_1",
            universal_banner_short_1: "universal_banner_1",
            universal_banner_2: "universal_banner_2",
          }
        function C() {
          let e,
            t,
            { VUE_APP_AD_MANAGER_ACCOUNT: a } = (0, l.U)(),
            m = (0, r.rd)(),
            { currentLocale: v } = (0, o.Cf)(),
            { sdk: C } = (0, i.bP)((0, p.p)()),
            { platform: E, effectiveType: A } = (0, i.bP)((0, d.C)()),
            x = (0, n.EW)(() => "desktop" === E.value),
            R = (0, n.EW)(() => w.includes(A.value)),
            T = (0, n.EW)(() => y.includes(A.value)),
            S = (0, n.EW)(() => (T.value ? 6e3 : 3e3)),
            $ = "u" > typeof window ? window.additionalServerData?.locale?.countryNameEn : void 0,
            L = (e) => ({
              type: "googleAd",
              options: { platform: E.value, pageDomain: _, gamAccount: a, timeout: 3e3, ...e },
            }),
            P = (e) => {
              let t = "rewarded" === e,
                a = `${b}${m.resolve({ name: u.V2.GAME_PAGE, params: { game: m.currentRoute.value.params.game } }).fullPath}`,
                i = "640x480|640x360|400x300|320x480|1x1"
              return (
                ("interstitial" === e || t) &&
                  (i = x.value
                    ? "640x360|1280x720|1920x1080|1080x1080|640x480|360x640|480x320|480x640|400x300|320x480|300x400|1x1"
                    : "640x360|360x640|480x320|1080x1080|640x480|480x640|400x300|320x480|300x400|1x1"),
                {
                  url: a,
                  description_url: a,
                  sz: i,
                  vpos: "interstitial_preroll" === e ? "preroll" : "midroll",
                  ...(t ? { pmad: 2, pmxd: 3e4, pmnd: 5e3 } : {}),
                }
              )
            },
            M = (e) => ({
              type: "googleInstream",
              options: {
                headerBidding: { bidders: [s.v.playgamaFallback.video] },
                platform: E.value,
                pageURL: b,
                gamAccount: a,
                timeout: 5e3,
                buildAdditionalAdParams: P,
                ...e,
              },
            }),
            I = (e) => ({
              type: "appProvider",
              options: { appNativeSDK: C.value, timeout: 6e3, platform: E.value, ...e },
            }),
            O = (e) => ({
              type: "directProvider",
              options: { platform: E.value, timeout: 3e3, locale: v.value, ...e },
            }),
            B = L({ adUnitConfig: { desktop: k, mobile: k } }),
            F = L({
              timeout: S.value,
              hasRewardedTypeInterstitial: !0,
              adUnitConfig: {
                desktop: {
                  rewarded: "rewarded_desktop",
                  interstitial: "h5_interstitial_desktop",
                  interstitial_preroll: "h5_interstitial_preroll_desktop",
                },
                mobile: {
                  rewarded: "rewarded_mobile",
                  interstitial: "h5_interstitial_mobile",
                  interstitial_preroll: "h5_interstitial_preroll_mobile",
                },
              },
            }),
            D = L({
              adUnitConfig: {
                desktop: {
                  interstitial_preroll: "h5_interstitial_preroll_2_desktop",
                  interstitial: "h5_interstitial_2_desktop",
                  rewarded: "rewarded_2_desktop",
                },
                mobile: {
                  interstitial_preroll: "h5_interstitial_preroll_2_mobile",
                  interstitial: "h5_interstitial_2_mobile",
                  rewarded: "rewarded_2_mobile",
                },
              },
            }),
            W = L({
              adUnitConfig: {
                desktop: {
                  rewarded: "widget_rewarded_desktop",
                  interstitial: "widget_h5_interstitial_desktop",
                  interstitial_preroll: "widget_h5_interstitial_preroll_desktop",
                },
                mobile: {
                  rewarded: "widget_rewarded_mobile",
                  interstitial: "widget_h5_interstitial_mobile",
                  interstitial_preroll: "widget_h5_interstitial_preroll_mobile",
                },
              },
            }),
            N = L({
              hasRewardedTypeInterstitial: !0,
              adUnitConfig: {
                desktop: {
                  interstitial_preroll: "h5_interstitial_preroll_2_desktop",
                  interstitial: "h5_interstitial_2_desktop",
                  rewarded: "rewarded_2_desktop",
                },
                mobile: {
                  interstitial_preroll: "h5_interstitial_preroll_2_mobile",
                  interstitial: "h5_interstitial_2_mobile",
                  rewarded: "rewarded_2_mobile",
                },
              },
            }),
            G =
              ((e = {
                timeout: S.value,
                headerBidding: {
                  bidders: ["India" === $ && s.v.nexverse, s.v.playgama].filter((e) => !!e),
                },
                adUnitConfig: {
                  desktop: {
                    interstitial_preroll: "banner_ingame_preroll_desktop",
                    interstitial: "banner_ingame_desktop",
                    rewarded: "banner_ingame_rewarded_desktop",
                  },
                  mobile: {
                    interstitial_preroll: "banner_ingame_preroll_mobile",
                    interstitial: "banner_ingame_mobile",
                    rewarded: "banner_ingame_rewarded_mobile",
                  },
                },
              }),
              {
                type: "googleBanner",
                options: { platform: E.value, pageDomain: _, gamAccount: a, timeout: 3e3, ...e },
              }),
            U = M({
              adUnitConfig: {
                desktop: {
                  rewarded: "instream_rewarded_desktop",
                  interstitial: "instream_desktop",
                  interstitial_preroll: "instream_preroll_desktop",
                },
                mobile: {
                  rewarded: "instream_rewarded_mobile",
                  interstitial: "instream_mobile",
                  interstitial_preroll: "instream_preroll_mobile",
                },
              },
            }),
            V = M({
              timeout: 3e3,
              targeting: { segment: "premium" },
              adUnitConfig: {
                desktop: {
                  interstitial_preroll: "instream_preroll_high_floor_desktop",
                  interstitial: "instream_high_floor_desktop",
                  rewarded: "instream_rewarded_high_floor_desktop",
                },
                mobile: {
                  interstitial_preroll: "instream_preroll_high_floor_mobile",
                  interstitial: "instream_high_floor_mobile",
                  rewarded: "instream_rewarded_high_floor_mobile",
                },
              },
            }),
            z = M({
              adUnitConfig: {
                desktop: {
                  interstitial_preroll: "instream_preroll_no_floor_desktop",
                  interstitial: "instream_no_floor_desktop",
                  rewarded: "instream_rewarded_no_floor_desktop",
                },
                mobile: {
                  interstitial_preroll: "instream_preroll_no_floor_mobile",
                  interstitial: "instream_no_floor_mobile",
                  rewarded: "instream_rewarded_no_floor_mobile",
                },
              },
            }),
            H = M({
              timeout: 3e3,
              adUnitConfig: {
                desktop: {
                  rewarded: "widget_instream_rewarded_desktop",
                  interstitial: "widget_instream_desktop",
                  interstitial_preroll: "widget_instream_preroll_desktop",
                },
                mobile: {
                  rewarded: "widget_instream_rewarded_mobile",
                  interstitial: "widget_instream_mobile",
                  interstitial_preroll: "widget_instream_preroll_mobile",
                },
              },
            }),
            X = I({
              adUnitConfig: {
                mobile: {
                  interstitial: "/23211928466/interstitial_android",
                  interstitial_preroll: "/23211928466/interstitial_preroll_android",
                  rewarded: "/23211928466/rewarded_android",
                },
                desktop: {},
              },
            }),
            K = I({
              adUnitConfig: {
                mobile: {
                  interstitial: "/21775744923/example/interstitial",
                  interstitial_preroll: "/21775744923/example/interstitial",
                  rewarded: "/21775744923/example/rewarded",
                },
                desktop: {},
              },
            }),
            q = I({
              adUnitConfig: {
                mobile: {
                  interstitial: "/23211928466/interstitial_ios",
                  interstitial_preroll: "/23211928466/interstitial_preroll_ios",
                  rewarded: "/23211928466/rewarded_ios",
                },
                desktop: {},
              },
            }),
            j = I({
              adUnitConfig: {
                mobile: {
                  interstitial: "/21775744923/example/interstitial",
                  interstitial_preroll: "/21775744923/example/interstitial",
                  rewarded: "/21775744923/example/rewarded",
                },
                desktop: {},
              },
            }),
            Q = O({ adUnitConfig: f }),
            Y = O({ adSettings: { initialDelayMs: 3e5, intervalsMs: 3e5 }, adUnitConfig: h }),
            Z =
              ((t = [s.v.playgamaFallback.banner]),
              {
                type: "headerBiddingAd",
                options: { targeting: {}, timeout: 3e3, platform: E.value, bidders: t },
              }),
            J = O({ adUnitConfig: g }),
            ee = O({ platform: E.value, locale: v.value, ...c }),
            et = { type: "googleAdSense", options: { platform: E.value, timeout: 3e3 } }
          return {
            AD_PROVIDER_SETTINGS_ON_PORTAL: [B, Q],
            AD_PROVIDER_SETTINGS_FOR_EXPORT_GAME_PAGE: R.value ? [F, G] : [F, U, G, D],
            AD_PROVIDER_SETTINGS_FOR_EXPORT_GAME_PAGE_ON_WIDGET: [W, H, N, G],
            AD_STATIC_BANNERS_PROVIDER_SETTINGS_ON_GAME_PAGE: [B],
            GAME_DISTRIBUTION_PROVIDER_SETTINGS: {
              type: "gameDistribution",
              options: { timeout: 3e3 },
            },
            ADSENSE_PROVIDER_SETTINGS: et,
            GOOGLE_INSTREAM_HIGH_SETTINGS: V,
            GOOGLE_AD_GAME_PAGE_SETTINGS: F,
            APP_NATIVE_ANDROID_PROVIDERS_SETTINGS: [X],
            APP_NATIVE_ANDROID_TEST_PROVIDERS_SETTINGS: [K],
            APP_NATIVE_IOS_PROVIDERS_SETTINGS: [q],
            APP_NATIVE_IOS_TEST_PROVIDERS_SETTINGS: [j],
            FALLBACK_AD_PROVIDER_SETTINGS_ON_PORTAL: [Z, Y],
            FALLBACK_AD_PROVIDER_SETTINGS_ON_PORTAL_PREROLL: [Y],
            FALLBACK_AD_PROVIDER_SETTINGS_PARTNER: [Z],
            FALLBACK_AD_PROVIDER_SETTINGS_PARTNER_PREROLL: [Y],
            MINIPLAY_PROVIDERS_SETTINGS: [U, z],
            COLOR_YOUR_EYE_PROVIDERS_SETTINGS: [J],
            MSN_STORE_FALLBACK_PROVIDERS_SETTINGS: [ee],
          }
        }
      },
      97178: function (e, t, a) {
        "use strict"
        a.d(t, {
          M: function () {
            return r
          },
          U: function () {
            return l
          },
        })
        var i = a(3144)
        let n = Symbol("config"),
          r = (e) => (t) => {
            t.provide(n, e)
          }
        function l() {
          let e = (0, i.WQ)(n)
          if (!e) throw Error("No config provided in Vue app.")
          return e
        }
      },
      62656: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          m: function () {
            return d
          },
          z: function () {
            return m
          },
        }),
          a(52093),
          a(17932),
          a(19329))
        var i = a(3144),
          n = a(76915),
          r = a(8011),
          l = a(99561),
          o = a(57550),
          s = a(30232),
          c = a(97178)
        let u = Symbol("localized-routers"),
          d = (e) => (t) => {
            t.provide(u, e)
          },
          p = (e) => ({ ...e, query: {} })
        function m() {
          let e = (0, o.Cf)().getDefaultLocale(),
            { keepRequiredParams: t } = (0, r.j)(),
            a = (0, i.WQ)(u),
            { VUE_APP_HOST_URL: d } = (0, c.U)()
          if (!a) throw Error("No localized routers provided in Vue app.")
          let m = (0, n.lq)(),
            g = (0, i.EW)(() =>
              m.name
                ? { name: m.name || void 0, params: m.params, query: m.query }
                : { name: s.V2.MAIN },
            )
          return {
            getCanonicalAndAlternates: ({
              forRoute: t = g.value,
              mapRoute: i = p,
              onlyCanonical: n,
            } = {}) => {
              let r = [],
                o = a[e],
                s = { ...(t.params || {}), locale: void 0 },
                c = { ...t, params: s },
                u = o.resolve(c).meta.noLocaleInRoute
              if (u && !1 === n)
                throw Error(
                  "onlyCanonical mode cannot be turned off for routes with noLocaleInRoute meta",
                )
              if (u || n) {
                let t = i(c, e)
                return (r.push({ rel: "canonical", href: `${d}${o.resolve(t).fullPath}` }), r)
              }
              let m = g.value.params?.locale,
                v = m ? (0, l.GL)(m) : e
              return (
                Object.entries(a).forEach(([a, n]) => {
                  let { locale: o, ...s } = t.params || {},
                    c = i({ ...t, params: s }, a)
                  ;(a === v &&
                    r.push({
                      rel: "canonical",
                      href: `${d}${n.resolve(c).fullPath}`,
                      hreflang: a === v ? void 0 : (0, l.vg)(a),
                    }),
                    r.push({
                      rel: "alternate",
                      href: `${d}${n.resolve(c).fullPath}`,
                      hreflang: (0, l.vg)(a),
                    }),
                    a === e &&
                      r.push({
                        rel: "alternate",
                        href: `${d}${n.resolve(c).fullPath}`,
                        hreflang: "x-default",
                      }))
                }),
                r
              )
            },
            getLocalizedUrls: ({ forRoute: e = g.value, mapRoute: i = p } = {}) => {
              let n = (e, a) => t(i(e, a)),
                { locale: r, ...l } = e.params || {},
                o = {}
              return (
                Object.entries(a).forEach(([t, a]) => {
                  let i = n({ ...e, params: l }, t)
                  o[t] = a.resolve(i).fullPath
                }),
                o
              )
            },
          }
        }
      },
      8011: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          j: function () {
            return s
          },
          u: function () {
            return c
          },
        }),
          a(31430),
          a(50589),
          a(34512),
          a(17932),
          a(19329))
        var i = a(76915),
          n = a(30232),
          r = a(35556),
          l = a(87743)
        let o = {
          tag: n.V2.TAG,
          series: n.V2.SERIES,
          category: n.V2.CATEGORY,
          developer: n.V2.DEVELOPER,
        }
        function s() {
          let e = ["clid", r.Ov, "debug", r.z5],
            { queryParams: t } = (0, l.C)()
          return {
            keepRequiredParams: function (a) {
              try {
                let i = new URLSearchParams()
                if (
                  (t.forEach(([t, a]) => {
                    e.includes(t) && i.set(t, a)
                  }),
                  "string" == typeof a)
                ) {
                  let [e, t] = a.split("?"),
                    n = new URLSearchParams(t)
                  i.forEach((e, t) => {
                    n.set(t, e)
                  })
                  let r = n.toString()
                  return r ? `${e}?${r}` : e
                }
                {
                  let e = a.query ? { ...a.query } : {}
                  return (
                    i.forEach((t, a) => {
                      e[a] = t
                    }),
                    { ...a, query: e }
                  )
                }
              } catch {
                throw Error("Could not retrieve URL params")
              }
            },
            getCategoryRoute: function ({ hru: e, type: t }) {
              return { name: o[t], params: { hru: e } }
            },
          }
        }
        let c = () => {
          let e = (0, i.rd)()
          return (t) => {
            let { href: a } = e.resolve(t)
            return (a.startsWith("#") && (a = a.slice(1)), a)
          }
        }
      },
      23624: function (e, t, a) {
        "use strict"
        a.d(t, {
          y: function () {
            return o
          },
        })
        var i = a(3144)
        let n = 0
        function r() {
          ;(0 === n && document.documentElement.classList.add("disable_scroll"), n++)
        }
        function l() {
          0 === (n = Math.max(0, n - 1)) &&
            document.documentElement.classList.remove("disable_scroll")
        }
        function o(e) {
          ;((0, i.wB)(e, (e) => {
            e ? r() : l()
          }),
            (0, i.sV)(() => {
              ;("function" == typeof e ? e() : e.value) && r()
            }),
            (0, i.hi)(() => {
              l()
            }))
        }
      },
      7620: function (e, t, a) {
        "use strict"
        a.d(t, {
          Ef: function () {
            return c
          },
          dS: function () {
            return d
          },
          ci: function () {
            return u
          },
          eN: function () {
            return p
          },
          ns: function () {
            return m
          },
        })
        var i = a(20211),
          n = a(3144),
          r = a(71808),
          l = a(63228),
          o = a(87743),
          s = a(49384)
        let c = "lagged",
          u = "p_8460bdc6-2f32-4753-b553-fa84d1fc40d7",
          d = "p_7a9df8c8-c8b2-433e-b06a-da47dc15b6ec",
          p = "p_ae5af802-1a10-4cc0-9e2a-989216d478af"
        function m() {
          let { MINIPLAY_PROVIDERS_SETTINGS: e, MSN_STORE_FALLBACK_PROVIDERS_SETTINGS: t } = (0,
            s._)(),
            { clid: a } = (0, i.bP)((0, o.C)()),
            m = (0, n.EW)(() => g.value[a.value] || {}),
            g = (0, n.EW)(() => ({
              [r.p]: { isInitGameScreenHidden: !0, inGameProviderSettings: e },
              msn_store: { fallBackProviders: t },
              [c]: { isInitGameScreenHidden: !0, isCustomized: !0, isPrerollDisabled: !0 },
              [u]: { isInitGameScreenHidden: !0, isCustomized: !0, isPrerollDisabled: !0 },
              [p]: {
                isPrerollDisabled: !0,
                isInitGameScreenHidden: !0,
                isCustomized: !0,
                inGameAdHandlerConfig: { interstitial: { timeout: 18e4 } },
              },
              "p_d1847169-9b0a-4ac8-a722-3ad587f8841c": {
                isPreloaderDisabled: !0,
                isPrerollDisabled: !0,
                isInitGameScreenHidden: !0,
                inGameAdHandlerConfig: { interstitial: { timeout: 18e4 } },
              },
              "p_a48fc4e4-2388-4403-a1b9-fce2b19a1f97": {
                inGameAdHandlerConfig: { interstitial: { timeout: 18e4 } },
              },
              5496748: { inGameAdHandlerConfig: { interstitial: { timeout: 18e4 } } },
              "p_b0f10b8c-2a74-481f-bcbc-67b689bdc92f": {
                isPrerollDisabled: !0,
                isInitGameScreenHidden: !0,
              },
              [l.I]: { isInitGameScreenHidden: !0, adDisabled: !0 },
              xiaomi_direct_twa: {
                isPrerollDisabled: !0,
                isInitGameScreenHidden: !0,
                adDisabled: !0,
                inGameAdHandlerConfig: { interstitial: { timeout: 18e4 } },
              },
              samsung_direct_twa: {
                isPrerollDisabled: !0,
                isInitGameScreenHidden: !0,
                adDisabled: !0,
                inGameAdHandlerConfig: { interstitial: { timeout: 18e4 } },
              },
              huawei_direct_twa: {
                isPrerollDisabled: !0,
                isInitGameScreenHidden: !0,
                adDisabled: !0,
                inGameAdHandlerConfig: { interstitial: { timeout: 18e4 } },
              },
              google_direct_twa: {
                isPrerollDisabled: !0,
                isInitGameScreenHidden: !0,
                adDisabled: !0,
                inGameAdHandlerConfig: { interstitial: { timeout: 18e4 } },
              },
              amazon_direct_twa: {
                isPrerollDisabled: !0,
                isInitGameScreenHidden: !0,
                adDisabled: !0,
                inGameAdHandlerConfig: { interstitial: { timeout: 18e4 } },
              },
              uptodown_direct_twa: {
                isPrerollDisabled: !0,
                isInitGameScreenHidden: !0,
                adDisabled: !0,
                inGameAdHandlerConfig: { interstitial: { timeout: 18e4 } },
              },
              ios_direct_twa: { isPrerollDisabled: !0, adDisabled: !0, isInitGameScreenHidden: !0 },
              pockethavengames: { isInitGameScreenHidden: !0, isPrerollDisabled: !0 },
              "p_c52cb451-4333-4b80-b6f8-08c68f9f993c": { isCustomized: !0 },
              [d]: { isCustomized: !0 },
              "p_9dc4c68b-0c7a-4a99-bc07-b1e64e4125cd": {
                isPrerollDisabled: !0,
                inGameAdHandlerConfig: { interstitial: { timeout: 18e4 } },
              },
              "p_08b565e0-8865-412e-9d23-5f5873d45566": { isPrerollDisabled: !0 },
            }))
          return { clidConfig: m }
        }
      },
      67118: function (e, t, a) {
        "use strict"
        a.d(t, {
          i: function () {
            return n
          },
        })
        var i = a(3144)
        function n(e = {}) {
          let t = (0, i.KR)(!1),
            { successDuration: a = 2e3, onSuccess: r, onError: l } = e,
            o = async (e, i) => {
              if (e)
                try {
                  ;(await navigator.clipboard.writeText(e),
                    (t.value = !0),
                    setTimeout(() => {
                      ;((t.value = !1), i?.(), r?.())
                    }, a))
                } catch (e) {
                  ;(console.error("Failed to copy link:", e), l?.(e))
                }
            }
          return { copied: t, copyToClipboard: o }
        }
      },
      59812: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          q: function () {
            return r
          },
        }),
          a(52093))
        var i = a(76415)
        let n = []
        function r() {
          let e = (0, i.n)()
          return {
            trigger: function (t) {
              n.includes(t.id) ||
                (e.logInterfaceEvents({ ...t, eventName: "interface_show" }), n.push(t.id))
            },
          }
        }
      },
      11223: function (e, t, a) {
        "use strict"
        a.d(t, {
          L: function () {
            return n
          },
        })
        var i = a(3144)
        function n() {
          let e = (0, i.KR)(!1),
            t = (0, i.KR)(!0)
          return {
            topActive: e,
            bottomActive: t,
            onVerticalScroll: function (a) {
              let i = a.currentTarget
              if (!(i instanceof HTMLElement)) return
              let n = i.scrollTop + i.clientHeight >= i.scrollHeight - 1
              ;((e.value = i.scrollTop > 0), (t.value = !n))
            },
          }
        }
      },
      40520: function (e, t, a) {
        "use strict"
        a.d(t, {
          $: function () {
            return o
          },
        })
        var i = a(3144),
          n = a(67118),
          r = a(87743),
          l = a(79316)
        function o(e = {}) {
          let t = (0, r.C)(),
            a = (0, l.G)(),
            { onSuccess: s, onError: c } = e,
            { copied: u, copyToClipboard: d } = (0, n.i)(e),
            p = (0, i.EW)(() => "desktop" === t.platform)
          function m(e) {
            a.logEvent({ event: "custom_event", eventName: "share", dimension1: e })
          }
          return {
            shared: u,
            share: async (e, t) => {
              if (e) {
                if (!p.value && navigator.canShare && navigator.canShare(e))
                  try {
                    ;(await navigator.share(e), m(t), s?.())
                  } catch (e) {
                    ;(console.error("Failed to share link:", e), c?.(e))
                  }
                d(e.url, () => m(t))
              }
            },
          }
        }
      },
      35584: function (e, t, a) {
        "use strict"
        a.d(t, {
          q: function () {
            return n
          },
        })
        var i = a(87311)
        function n() {
          let { t: e } = (0, i.s9)()
          return e
        }
      },
      88789: function (e, t, a) {
        "use strict"
        a.d(t, {
          C: function () {
            return l
          },
        })
        var i = a(3144),
          n = a(92730),
          r = a(43088)
        let l = () => {
          let e = (0, n.k)(),
            t = (0, r.a)()
          return (0, i.EW)(() => !e.hasAuthToken || (t.value && e._isUserInfoLoaded))
        }
      },
      85975: function (e, t, a) {
        "use strict"
        a.d(t, {
          E: function () {
            return i
          },
        })
        let i = "https://securepubads.g.doubleclick.net/tag/js/gpt.js"
      },
      17637: function (e, t, a) {
        "use strict"
        a.d(t, {
          $p: function () {
            return m
          },
          B5: function () {
            return o
          },
          GV: function () {
            return i
          },
          P: function () {
            return r
          },
          P2: function () {
            return s
          },
          Sx: function () {
            return n
          },
          hq: function () {
            return l
          },
          l: function () {
            return u
          },
          od: function () {
            return c
          },
          tc: function () {
            return p
          },
        })
        let i = { direct: "direct", directTest: "direct-test", unknown: "unknown" },
          n = {
            directAndroid: "direct-app-android",
            directAndroidTest: "direct-app-android-test",
            twa: "direct_twa",
            directIos: "direct-app-ios",
            directIosTest: "direct-app-ios-test",
          },
          r = { pwa: "direct_pwa" },
          l = { pwa: "direct_pwa", ...n },
          o = { ...n },
          s = { dailyhunt: "p_0f1c2670-63d5-491c-844e-00838c114201", "2page": "oppo-wl" },
          c = "pwa-manifest",
          u = "https://customer-8wsds98g05tbeoot.cloudflarestream.com/",
          d = { 320: { width: 569, height: 320 }, 640: { width: 1138, height: 640 } },
          p = (e, t) => ({
            url: `https://video.playgama.com/${e}/orig_length_h${t}_6so.mp4`,
            height: t,
            width: d[t].width,
          }),
          m = ["iap-testing", "ad-testing"]
      },
      51310: function (e, t, a) {
        "use strict"
        var i = a(55477),
          n = a(43948),
          r = a(29318),
          l = a(3144),
          o = a(76915),
          s = a(93911),
          c = a(99561),
          u = a(57550),
          d = (0, l.pM)({
            __name: "App",
            setup(e) {
              let { currentLocale: t } = (0, u.Cf)()
              return (
                (0, s.u)({
                  htmlAttrs: { class: "strict-px", lang: (0, c.vg)(t.value), translate: "no" },
                }),
                (e, t) => {
                  let a = (0, l.g2)("RouterView")
                  return ((0, l.uX)(), (0, l.Wv)(a))
                }
              )
            },
          }),
          p = a(97178),
          m = a(20211),
          g = a(31865)
        ;(a(17932), a(76429), a(19329), a(96466), a(52093))
        var v = a(28063),
          h = a.p + "static/image/favicon-32.forced.cf8d1070.png",
          f = a.p + "static/image/favicon-48.forced.a2b74de4.png",
          _ = a.p + "static/image/favicon-96.forced.1fea6d3e.png",
          b = a.p + "static/image/favicon-144.forced.9c6e7c4a.png",
          y = a.p + "static/image/favicon-180.forced.9be26569.png",
          w = a(96409),
          k = a(22885),
          C = a(11574),
          E = a(72015),
          A = a(62656),
          x = a(35584),
          R = a(85975),
          T = a(17637),
          S = a(78811),
          $ = a(30232),
          L = a(81865),
          P = a(43438)
        let M = { "data-head-meta": "" }
        var I = (0, l.pM)({
            __name: "HeadMeta",
            props: { prepareGoogleAds: { type: Boolean } },
            setup(e) {
              let t,
                a = {
                  PGFavicon32: h,
                  PGFavicon48: f,
                  PGFavicon96: _,
                  PGFavicon144: b,
                  PGFavicon180: y,
                  PGFavicon192: w,
                  PGFavicon512: k,
                  PGFaviconSVG: C,
                },
                i = (0, x.q)(),
                n = (0, P.c)(),
                r = (0, o.lq)(),
                c = (0, o.rd)(),
                u = (0, v.qK$)(),
                { mainData: d } = (0, S.G)(),
                m = (0, l.EW)(() => !!r.meta.noAppInstallBanner),
                g = (0, L.k)(),
                I =
                  ((t = []),
                  [
                    ["SVG", "image/svg+xml"],
                    [32, "image/png"],
                    [48, "image/png"],
                    [96, "image/png"],
                    [144, "image/png"],
                    [180, "image/png"],
                    [192, "image/png"],
                    [512, "image/png"],
                  ].forEach(([e, i]) => {
                    let n = "number" == typeof e ? `${e}x${e}` : void 0
                    t.push({ rel: "icon", type: i, sizes: n, href: a[`PGFavicon${e}`] })
                  }),
                  t),
                {
                  VUE_APP_HOST_URL: O,
                  ROBOTS_DISALLOW: B,
                  VUE_APP_AD_MANAGER_ACCOUNT: F,
                  VUE_APP_IOS_APP_ID: D,
                } = (0, p.U)(),
                W = (0, l.EW)(() => {
                  let t = ["window.dataLayer = window.dataLayer || [];"]
                  return (
                    e.prepareGoogleAds,
                    u.value &&
                      (t.push({
                        src: "https://accounts.google.com/gsi/client",
                        async: !0,
                        onload: g.initGlobalSignIn,
                      }),
                      n.properEnv &&
                        t.push({
                          src: "https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js",
                          defer: !0,
                        })),
                    t
                  )
                }),
                N = (0, l.EW)(() => {
                  let e = [
                    { name: "description", content: i("headMeta.description") },
                    { name: "validation-token", content: "hb42hn0e5uyz0bfp" },
                    { name: "mobile-web-app-capable", content: "yes" },
                    { name: "apple-mobile-web-app-capable", content: "yes" },
                    { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
                    { name: "theme-color", content: "#000000" },
                    { property: "og:image", content: E },
                    { property: "og:image:alt", content: i("headMeta.alt_image") },
                    { property: "og:title", content: i("headMeta.title") },
                    { property: "og:description", content: i("headMeta.description") },
                    { property: "og:type", content: "website" },
                    { property: "og:url", content: `${O}${"/" === r.fullPath ? "" : r.fullPath}` },
                    { property: "og:site_name", content: "Playgama.com" },
                    { name: "twitter:card", content: "summary" },
                    { name: "twitter:title", content: i("headMeta.title") },
                    { name: "twitter:description", content: i("headMeta.description") },
                    { name: "twitter:image", content: E },
                    { name: "twitter:image:alt", content: i("headMeta.alt_image") },
                    {
                      name: "apple-mobile-web-app-title",
                      content: "Playgama",
                      key: "apple-mobile-web-app-title",
                    },
                  ]
                  return (
                    m.value ||
                      e.push({ name: "google-play-app", content: "app-id=com.playgama.twa" }),
                    D && !m.value && e.push({ name: "apple-itunes-app", content: `app-id=${D}` }),
                    "DISALLOW" === B && e.push({ name: "robots", content: "noindex" }),
                    e
                  )
                }),
                { getCanonicalAndAlternates: G } = (0, A.z)(),
                U = (0, o.lq)(),
                V = (0, l.EW)(() => {
                  let t = `${O}${c.resolve({ name: $.V2.MAIN, query: { clid: T.P.pwa } }).fullPath}`,
                    a = [
                      ...(U.meta.noRootManifest
                        ? []
                        : [
                            {
                              rel: "manifest",
                              "data-start_url": t,
                              href: `/manifest/main.webmanifest?clid=${T.P.pwa}`,
                              key: T.od,
                            },
                          ]),
                      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
                      ...I,
                      {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: y,
                        key: "apple-touch-icon",
                      },
                      ...G(),
                    ]
                  return (
                    e.prepareGoogleAds &&
                      a.push(
                        {
                          rel: "preload",
                          "data-early-hints": !0,
                          href: R.E,
                          as: "script",
                          crossorigin: "anonymous",
                        },
                        {
                          rel: "preload",
                          "data-early-hints": !0,
                          href: `https://fundingchoicesmessages.google.com/i/${F}?ers=3`,
                          as: "script",
                          crossorigin: void 0,
                        },
                      ),
                    a
                  )
                }),
                z = (0, l.EW)(() =>
                  d.value.totalGamesCount
                    ? `${i("headMeta.title")} ${i("headMeta.titleCount", { count: d.value.totalGamesCount.toString() }, d.value.totalGamesCount)}`
                    : i("headMeta.title"),
                ),
                H = (0, l.EW)(() => ({
                  title: z.value,
                  meta: N.value,
                  link: V.value,
                  script: W.value,
                }))
              return ((0, s.u)(H), (e, t) => ((0, l.uX)(), (0, l.CE)("div", M)))
            },
          }),
          O = a(39383)
        let B = (0, l.$V)(() => a.e("5637").then(a.bind(a, 20052))),
          F = (0, l.$V)(() => a.e("2338").then(a.bind(a, 21422))),
          D = (0, l.$V)(() => a.e("6527").then(a.bind(a, 14482))),
          W = (0, l.$V)(() => a.e("644").then(a.bind(a, 5052))),
          N = (0, l.$V)(() => a.e("2473").then(a.bind(a, 25251)))
        var G = a(87743),
          U = (0, l.pM)({
            __name: "PageLoadBar",
            setup(e) {
              let t = (0, G.C)(),
                a = (0, l.KR)(),
                i = (0, l.KR)()
              return (
                (0, l.wB)(
                  () => t.pageLoadProgress,
                  (e) => {
                    let t = a.value,
                      n = i.value
                    n &&
                      t &&
                      (e
                        ? ((n.style.opacity = "1"),
                          n.animate([{ width: "0%" }, { width: "70%" }], {
                            duration: 5e3,
                            easing: "cubic-bezier(0.2, 0, 0.05, 1)",
                            fill: "forwards",
                          }))
                        : n
                            .animate([{ width: "100%" }], {
                              duration: 500,
                              easing: "ease-out",
                              fill: "forwards",
                            })
                            .addEventListener("finish", () => {
                              n.style.opacity = "0"
                            }))
                  },
                ),
                (e, t) => (
                  (0, l.uX)(),
                  (0, l.CE)(
                    "div",
                    { ref_key: "barRef", ref: a, class: (0, l.C4)(e.$style.bar) },
                    [
                      (0, l.Lk)(
                        "div",
                        { ref_key: "progressRef", ref: i, class: (0, l.C4)(e.$style.progress) },
                        null,
                        2,
                      ),
                    ],
                    2,
                  )
                )
              )
            },
          }),
          V = a(97939)
        let z = {}
        z.$style = { bar: "q1g3I", progress: "Ss8DM" }
        let H = (0, V.default)(U, [["__cssModules", z]])
        var X = a(26611),
          K = a(77897),
          q = a(37361),
          j = a(26635),
          Q = a(79316),
          Y = a(92730),
          Z = a(4911),
          J = a(59176)
        function ee(e) {
          let t = []
          for (let a of e.sources || []) {
            let e = (function (e) {
              if (!e || e.nodeType !== Node.ELEMENT_NODE) return null
              let t = e.getAttribute("id")
              if (t) return `#${t}`
              let a = e.tagName.toLowerCase(),
                i = (e.getAttribute("class") || "")
                  .split(/\s+/)
                  .map((e) => e.trim())
                  .filter(Boolean)
                  .slice(0, 2)
              return i.length > 0 ? `${a}.${i.join(".")}` : a
            })(a.node)
            e && t.push(e)
          }
          return t
        }
        ;(a(86204),
          a(58267),
          a(54965),
          a(69024),
          a(15381),
          a(30774),
          a(8109),
          a(56705),
          a(55156),
          a(55120),
          a(85866),
          a(92426),
          a(37539),
          a(14894),
          a(34420),
          a(35055),
          a(56596),
          a(48933),
          a(20329),
          a(60387),
          a(81623),
          a(77237),
          a(64632),
          a(71090))
        var et = a(65940)
        let ea = (0, m.nY)("consent", () => {
          let e = (0, l.KR)("unknown"),
            t = (0, l.KR)(void 0),
            a = (0, l.KR)(!1),
            i = (0, l.KR)(null)
          async function n() {
            if (a.value) return
            a.value = !0
            let n = await (function (e = 1e4) {
              return new Promise((t, a) => {
                let i = Date.now(),
                  n = () => {
                    "function" == typeof window.__tcfapi
                      ? t(window.__tcfapi)
                      : Date.now() - i > e
                        ? a(Error("__tcfapi not found"))
                        : setTimeout(n, 300)
                  }
                n()
              })
            })().catch(() => null)
            if (((i.value = n), !n)) {
              e.value = "hidden"
              return
            }
            n("addEventListener", 2, (a, i) => {
              if (!i) {
                e.value = "hidden"
                return
              }
              ;("cmpuishown" === a.eventStatus ? (e.value = "visible") : (e.value = "hidden"),
                "number" == typeof a.listenerId && (t.value = a.listenerId))
            })
          }
          return {
            isHidden: (0, l.EW)(() => "visible" !== e.value && "unknown" !== e.value),
            init: n,
            dispose: function () {
              i.value &&
                "number" == typeof t.value &&
                (i.value("removeEventListener", 2, () => {}, t.value), (t.value = void 0))
            },
          }
        })
        var ei = a(59103),
          en = a(28152),
          er = a(43719)
        let el = (0, m.nY)(
          "modal_install_google_play",
          () => {
            let e = (0, l.KR)(null),
              t = (0, l.KR)(null),
              a = (0, l.EW)(() => null === e.value || Date.now() - e.value >= 12096e5)
            return {
              lastDismissedAt: e,
              canShowModal: a,
              reset: function () {
                e.value = null
              },
              init: function () {
                let i = (0, G.C)(),
                  n = (0, ei.l)(),
                  r = (0, Q.G)(),
                  l = (0, er.L)()
                "android" === i.platform &&
                  i.isPortalEnv &&
                  !i.isAppEnv &&
                  a.value &&
                  (t.value = setTimeout(() => {
                    l.request({
                      name: "install-google-play-modal",
                      priority: 1,
                      onOpen: () => {
                        ;(r.logEvent({
                          event: "custom_event",
                          eventName: "google_play_modal_opened",
                        }),
                          n.openInstallGooglePlayModal())
                      },
                      onClose: () => {
                        ;(n.closeInstallGooglePlayModal(),
                          (e.value = Date.now()),
                          r.logEvent({
                            event: "custom_event",
                            eventName: "google_play_modal_closed",
                          }))
                      },
                    })
                  }, 2e4))
              },
              dispose: function () {
                let e = (0, er.L)()
                ;(t.value && (clearTimeout(t.value), (t.value = null)),
                  e.remove("install-google-play-modal"))
              },
            }
          },
          { persist: { key: "modal_install_google_play", pick: ["lastDismissedAt"] } },
        )
        var eo = a(13344),
          es = a(53018)
        let ec = (e) =>
            e
              .map((e) => {
                if (["string", "number", "boolean"].includes(typeof e)) return e
                if (e instanceof Element) return `${e.tagName}.${e.className}`
                if ("object" == typeof e && e) {
                  let t = e.constructor.name
                  return `[${t}]${JSON.stringify(e).slice(0, 20)}`
                }
                if ("symbol" == typeof e) return e.toString()
              })
              .join(" "),
          eu = !1
        var ed = (0, l.pM)({
            __name: "InitWrapper",
            setup(e) {
              var t
              let a, i, n, r, s, c
              ;(0, Q.n)()
              let u = (0, G.C)(),
                d = (0, en.Y)(),
                p = (0, eo.p)(),
                g = (0, j.N)(),
                v = (0, q.l)(),
                h = (0, Q.G)(),
                f = (0, er.L)(),
                _ = ea(),
                b = (0, o.rd)(),
                y = (0, o.lq)(),
                w = (0, es.w)(),
                k = (0, P.c)(),
                C = (0, ei.l)(),
                E = el(),
                { pageStatus: A, platform: x, isGameDistribution: R } = (0, m.bP)(u),
                T = (0, l.EW)(() => !y.meta.noLayout),
                S = (0, l.EW)(() => y.meta.noLazyHydration),
                L = (0, Y.k)(),
                M = (0, l.EW)(() => y.meta.manuallyHandledErrors),
                U = (0, l.EW)(() => !R.value)
              ;((t = {
                threshold: 0.25,
                onHighCls: ({ cls: e, viewport: t, sources: a }) => {
                  h.logEvent({
                    event: "custom_event",
                    eventName: "cls_high",
                    action: "portal_game",
                    dimension1: e.toFixed(4),
                    dimension2: t,
                    dimension3: a,
                    adUnit: screen.orientation.type,
                    adProvider: String(window.scrollY),
                  })
                },
              }),
                (a = (0, l.KR)(null)),
                (i = (0, l.KR)(null)),
                (n = (0, l.KR)(null)),
                (r = (0, l.KR)(!1)),
                (s = (e) => {
                  if (!r.value && e && !(e.value < t.threshold)) {
                    let a, i, n, l
                    ;((r.value = !0),
                      t.onHighCls({
                        cls: e.value,
                        viewport:
                          ((a = Math.round(window.visualViewport?.width ?? window.innerWidth)),
                          (i = Math.round(window.visualViewport?.height ?? window.innerHeight)),
                          (l = Number.isFinite((n = window.devicePixelRatio || 1))
                            ? n.toFixed(2).replace(/\.00$/, "")
                            : "1"),
                          `${a}x${i}@${l}`),
                        sources: (function (e) {
                          let t = [],
                            a = new Set()
                          for (let i of e)
                            if (i && !a.has(i) && (a.add(i), t.push(i), t.length >= 2)) break
                          let i = t.join(",")
                          return i.length > 120 ? i.slice(0, 120) : i
                        })(e.sources),
                      }))
                  }
                }),
                (c = (e) => {
                  for (let t of e.getEntries()) {
                    if ("layout-shift" !== t.entryType || t.hadRecentInput) continue
                    let e = t.startTime,
                      a = t.value || 0
                    if (!Number.isFinite(a) || a <= 0) continue
                    let r = n.value
                    if (r) {
                      let i = e - r.lastTs > 1e3,
                        l = e - r.startTs > 5e3
                      i || l
                        ? (n.value = { startTs: e, lastTs: e, value: a, sources: ee(t) })
                        : (n.value = {
                            ...r,
                            lastTs: e,
                            value: r.value + a,
                            sources: [...r.sources, ...ee(t)],
                          })
                    } else n.value = { startTs: e, lastTs: e, value: a, sources: ee(t) }
                    let l = n.value,
                      o = i.value
                    ;(l &&
                      (!o || l.value > o.value) &&
                      (i.value = { ...l, sources: [...l.sources] }),
                      s(n.value))
                  }
                }),
                (0, l.sV)(() => {
                  if ("u" > typeof PerformanceObserver)
                    try {
                      ;((a.value = new PerformanceObserver(c)),
                        a.value.observe({ type: "layout-shift", buffered: !0 }))
                    } catch {
                      a.value = null
                    }
                }),
                (0, l.xo)(() => {
                  ;(a.value?.disconnect(), (a.value = null))
                }),
                (0, l.SS)(() => {
                  let e = (0, l.LM)()
                  e &&
                    (e.pageStatus
                      ? u.setPageStatus(e.pageStatus)
                      : ((L.hasAuthToken = e.hasAuthToken),
                        e.hasAuthToken || (L._isUserInfoLoaded = !0),
                        u.$reset(),
                        u.setPlatform(e.platform),
                        u.setUserAgent(e.userAgent),
                        u.setAuidInfo(e.auid),
                        u.setExperiments(e.experiments),
                        u.setRankingParams(
                          y.query.audnc
                            ? { audience: y.query.audnc }
                            : {
                                clusterId: e.rankingParams.clusterId,
                                audience: e.rankingParams.audience,
                              },
                        )),
                    u.setUrlDetails({ host: e.host, query: y.query, referer: e.referer }),
                    u.setContentScopeCookie(e.contentScope))
                }),
                (0, l.KC)(() => {
                  var e
                  let t, a
                  ;((window.dataLayer = window.dataLayer || []),
                    (window.OneSignalDeferred = window.OneSignalDeferred || []),
                    u.setEffectiveType(),
                    h.setCTRSampling(),
                    h.logEvent({
                      event: "user_time",
                      eventName: "navigation",
                      dimension1: window.location.href,
                    }),
                    b.beforeEach((e) => {
                      u.setPageStatus(200)
                      let t = {
                        content_category: "",
                        provider: "",
                        hru: e.name && $.nH.includes(e.name) ? e.params.game : "",
                        page: e.name,
                        effectiveType: u.effectiveType,
                      }
                      g.updateTargeting(t)
                    }),
                    b.afterEach(() => {
                      h.logEvent({
                        event: "user_time",
                        eventName: "navigation",
                        dimension1: window.location.href,
                      })
                    }),
                    window.addEventListener("beforeunload", () => {
                      h.logEvent({ event: "user_time", eventName: "portal_session_end" })
                    }),
                    u.setUserAgent(window.navigator.userAgent),
                    u.setAuidInfo((0, Z.Ed)(document.cookie)))
                  let i = (0, Z.SQ)(document.cookie)
                  u.setRankingParams(
                    y.query.audnc
                      ? { audience: y.query.audnc }
                      : { clusterId: i.clusterId, audience: y.query.audnc || i.audience },
                  )
                  let n = (0, Z.n0)(document.cookie)
                  ;(u.setPlatform(n || (0, J.tb)(window.navigator.userAgent)),
                    u.setUserParams({
                      userAcquisitionParams30d: (0, Z._X)(document.cookie),
                      userAcquisitionParams1d: (0, Z._A)(document.cookie),
                    }),
                    u.setContentScopeCookie((0, Z.nE)(document.cookie)),
                    (!u.host || window.location.hash) &&
                      u.setUrlDetails({
                        host: window.location.host,
                        query: y.query,
                        referer: document.referrer,
                      }))
                  let r = y.query.gd_game_id
                  ;(r && (window.gd_id = r),
                    g.setAdServiceConfig({
                      targeting: {
                        hru: (y.name && $.nH.includes(y.name) && y.params.game) || "",
                        page: y.name,
                        effectiveType: u.effectiveType,
                        cohort: u.cohort || "",
                        rankingAudience: `${u.rankingParams?.audience || "NOT_SET"}-${u.platform}`,
                      },
                      auid: u.auid || "",
                    }),
                    g.adService?.consentManager.ready.then(() => {
                      v.detectAdBlockStatus(ed)
                    }))
                  let l = window.additionalServerData?.conversionValues
                  ;(void 0 !== l &&
                    window.dataLayer.push({
                      game_conversion_value: l.gameValue,
                      preroll_end_conversion_value: l.prerollEndValue,
                      timespent_5_min_conversion_value: l.timespent5MinValue,
                    }),
                    window.dataLayer.push({ device_platform: x.value }))
                  let o = !1
                  ;((e = (e, t) => {
                    if (t.toLowerCase().includes("hydration")) {
                      if (o) return
                      o = !0
                    }
                    h.logEvent({
                      event: "custom_event",
                      eventName: "vue_message",
                      dimension1: e,
                      dimension2: t,
                    })
                  }),
                    (t = console.warn),
                    (console.warn = (...a) => {
                      if ("string" == typeof a[0] && a[0].startsWith("[Vue ") && !eu) {
                        eu = !0
                        try {
                          e("warn", ec(a))
                        } catch {}
                        eu = !1
                      }
                      t(...a)
                    }),
                    (a = console.error),
                    (console.error = (...t) => {
                      if ("string" == typeof t[0] && t[0].startsWith("[Vue ") && !eu) {
                        eu = !0
                        try {
                          e("error", ec(t))
                        } catch {}
                        eu = !1
                      }
                      a(...t)
                    }))
                }))
              let V = (0, l.KR)(),
                { user: z } = (0, m.bP)(L)
              ;((0, l.wB)(
                () => z.value?._id,
                () => {
                  ;(z.value && window.dataLayer.push({ user_id: z.value._id }),
                    g.updateTargeting({ [et.u.IS_LOGGED_IN]: z.value ? "1" : "0" }))
                },
              ),
                (0, l.wB)(
                  () => _.isHidden,
                  (e) => {
                    e ? f.init() : f.dispose()
                  },
                ))
              let ed = ({ detector: e, fcTimedOut: t }) => {
                h.logEvent({
                  event: "custom_event",
                  eventName: "ad_blocker_detect_attempt",
                  dimension1: t ? "fc_timeout" : "fc_no_timeout",
                  dimension2: e,
                })
              }
              function ep() {
                C.setTabFocused("visible" === document.visibilityState)
              }
              function em() {
                ;(C.setOrientation(screen.orientation.type),
                  h.logInterfaceEvents({ eventName: "interface_rotate" }))
              }
              return (
                (0, l.sV)(async () => {
                  ;(_.init(),
                    w.init(),
                    k.init(),
                    p.init(),
                    u.initPageLoadProgressTracking(),
                    document.body.addEventListener("touchstart", () => {}, !1),
                    document.addEventListener("visibilitychange", ep),
                    C.setOrientation(screen.orientation.type),
                    screen.orientation.addEventListener("change", em),
                    E.init(),
                    await Promise.allSettled([u.fetchRankingParams(), L.getUser()]),
                    h.logEvent({
                      event: "custom_event",
                      eventName: "portal_session_start",
                      dimension3: u.effectiveType,
                    }),
                    p.postMessage("oneSignal.event", { auid: u.auid }))
                }),
                (0, l.hi)(() => {
                  ;(V.value && clearInterval(V.value),
                    E.dispose(),
                    _.dispose(),
                    d.disconnect(),
                    p.dispose(),
                    document.removeEventListener("visibilitychange", ep),
                    screen.orientation.removeEventListener("change", em))
                }),
                (e, t) => {
                  let a = (0, l.g2)("RouterView")
                  return (
                    (0, l.uX)(),
                    (0, l.CE)(
                      l.FK,
                      null,
                      [
                        (0, l.bF)(
                          O.A,
                          { hydrate: (0, l.rU)() },
                          {
                            default: (0, l.k6)(() => [
                              (0, l.bF)(I, { prepareGoogleAds: U.value }, null, 8, [
                                "prepareGoogleAds",
                              ]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["hydrate"],
                        ),
                        200 === (0, l.R1)(A) || M.value
                          ? ((0, l.uX)(),
                            (0, l.CE)(
                              l.FK,
                              { key: 0 },
                              [
                                S.value
                                  ? ((0, l.uX)(),
                                    (0, l.Wv)(
                                      (0, l.$y)(T.value ? X.A : "div"),
                                      { key: 0 },
                                      { default: (0, l.k6)(() => [(0, l.bF)(a)]), _: 1 },
                                    ))
                                  : ((0, l.uX)(),
                                    (0, l.Wv)(
                                      O.A,
                                      { key: 1, hydrate: (0, l.rU)() },
                                      {
                                        default: (0, l.k6)(() => [
                                          ((0, l.uX)(),
                                          (0, l.Wv)((0, l.$y)(T.value ? X.A : "div"), null, {
                                            default: (0, l.k6)(() => [(0, l.bF)(a)]),
                                            _: 1,
                                          })),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["hydrate"],
                                    )),
                              ],
                              64,
                            ))
                          : ((0, l.uX)(),
                            (0, l.Wv)(
                              X.A,
                              { key: 1 },
                              {
                                default: (0, l.k6)(() => [
                                  404 === (0, l.R1)(A)
                                    ? ((0, l.uX)(), (0, l.Wv)(K.A, { key: 0, type: 404 }))
                                    : (0, l.R1)(A) >= 500
                                      ? ((0, l.uX)(), (0, l.Wv)(K.A, { key: 1, type: 500 }))
                                      : (0, l.Q3)("", !0),
                                ]),
                                _: 1,
                              },
                            )),
                        (0, l.bF)((0, l.R1)(N)),
                        (0, l.bF)((0, l.R1)(W)),
                        (0, l.bF)((0, l.R1)(D)),
                        (0, l.bF)((0, l.R1)(F)),
                        (0, l.bF)((0, l.R1)(B)),
                        (0, l.bF)(H),
                      ],
                      64,
                    )
                  )
                }
              )
            },
          }),
          ep = a(73577)
        let em = {
            "en-US": {
              game: "game/:game",
              category: "category/:hru",
              tag: "tag/:hru",
              developer: "developer/:hru",
              series: "series/:hru",
              contacts: "contacts",
              profile: "profile",
              shop: "shop",
              invite: "invite/:inviteCode",
              allCategories: "all/categories",
              allTags: "all/tags",
              allSeries: "all/series",
              confidential: "confidential",
              termsofuse: "termsofuse",
              termsofuse_mcm: "mcm-termsofuse",
              takedown_notice: "takedown-notice",
              license: "license",
              partners_api: "partners-api",
              myGames: "my-games",
              digitalServiceAct: "digital-service-act",
              search: "search",
            },
            "es-ES": {
              game: "juego/:game",
              category: "categoria/:hru",
              tag: "etiqueta/:hru",
              developer: "desarrollador/:hru",
              series: "serie/:hru",
              contacts: "contactos",
              profile: "perfil",
              shop: "tienda",
              invite: "invitar/:inviteCode",
              allCategories: "todas/categorias",
              allTags: "todas/etiquetas",
              allSeries: "todas/series",
              confidential: "confidencial",
              termsofuse: "terminosdeuso",
              termsofuse_mcm: "mcm-terminosdeuso",
              takedown_notice: "aviso-de-eliminacion",
              license: "licencia",
              partners_api: "api-de-socios",
              myGames: "mis-juegos",
              digitalServiceAct: "ley-de-servicios-digitales",
              search: "buscar",
            },
            "de-DE": {
              game: "spiel/:game",
              category: "kategorie/:hru",
              tag: "tag/:hru",
              developer: "entwickler/:hru",
              series: "serie/:hru",
              contacts: "kontakte",
              profile: "profil",
              shop: "laden",
              invite: "einladen/:inviteCode",
              allCategories: "alle/kategorien",
              allTags: "alle/tags",
              allSeries: "alle/serien",
              confidential: "vertraulich",
              termsofuse: "nutzungsbedingungen",
              termsofuse_mcm: "mcm-nutzungsbedingungen",
              takedown_notice: "entfernungsmitteilung",
              license: "lizenz",
              partners_api: "partner-api",
              myGames: "meine-spiele",
              digitalServiceAct: "gesetz-uber-digitale-dienste",
              search: "suche",
            },
            "fr-FR": {
              game: "jeu/:game",
              category: "categorie/:hru",
              tag: "tag/:hru",
              developer: "d\xe9veloppeur/:hru",
              series: "serie/:hru",
              contacts: "contacts",
              profile: "profil",
              shop: "boutique",
              invite: "inviter/:inviteCode",
              allCategories: "toutes/categories",
              allTags: "toutes/tags",
              allSeries: "toutes/series",
              confidential: "confidentiel",
              termsofuse: "conditions-dutilisation",
              termsofuse_mcm: "mcm-conditions-dutilisation",
              takedown_notice: "avis-de-retrait",
              license: "licence",
              partners_api: "api-partenaires",
              myGames: "mes-jeux",
              digitalServiceAct: "loi-sur-les-services-numeriques",
              search: "recherche",
            },
            "it-IT": {
              game: "gioco/:game",
              category: "categoria/:hru",
              tag: "tag/:hru",
              developer: "sviluppatore/:hru",
              series: "serie/:hru",
              contacts: "contatti",
              profile: "profilo",
              shop: "negozio",
              invite: "invita/:inviteCode",
              allCategories: "tutte/categorie",
              allTags: "tutte/tag",
              allSeries: "tutte/serie",
              confidential: "riservato",
              termsofuse: "termini-di-uso",
              termsofuse_mcm: "mcm-termini-di-uso",
              takedown_notice: "avviso-di-rimozione",
              license: "licenza",
              partners_api: "api-partner",
              myGames: "i-miei-giochi",
              digitalServiceAct: "legge-sui-servizi-digitali",
              search: "ricerca",
            },
            "pt-BR": {
              game: "jogo/:game",
              category: "categoria/:hru",
              tag: "tag/:hru",
              developer: "desenvolvedor/:hru",
              series: "serie/:hru",
              contacts: "contatos",
              profile: "perfil",
              shop: "loja",
              invite: "convidar/:inviteCode",
              allCategories: "todas/categorias",
              allTags: "todas/tags",
              allSeries: "todas/series",
              confidential: "confidencial",
              termsofuse: "termos-de-uso",
              termsofuse_mcm: "mcm-termos-de",
              takedown_notice: "aviso-de-remocao",
              license: "licenca",
              partners_api: "api-parceiros",
              myGames: "meus-jogos",
              digitalServiceAct: "lei-dos-servicos-digitais",
              search: "pesquisar",
            },
            "tr-TR": {
              game: "oyun/:game",
              category: "kategori/:hru",
              tag: "etiket/:hru",
              developer: "gelistirici/:hru",
              series: "seri/:hru",
              contacts: "iletisim",
              profile: "profil",
              shop: "magaza",
              invite: "davet/:inviteCode",
              allCategories: "tum/kategoriler",
              allTags: "tum/etiketler",
              allSeries: "tum/seriler",
              confidential: "gizli",
              termsofuse: "kullanim-kosullari",
              termsofuse_mcm: "mcm-kullanim-kosullari",
              takedown_notice: "kaldirma-bildirimi",
              license: "lisans",
              partners_api: "ortaklar-api",
              myGames: "oyunlarim",
              digitalServiceAct: "dijital-hizmetler-yasasi",
              search: "ara",
            },
            "pl-PL": {
              game: "gra/:game",
              category: "kategoria/:hru",
              tag: "tag/:hru",
              developer: "deweloper/:hru",
              series: "seria/:hru",
              contacts: "kontakty",
              profile: "profil",
              shop: "sklep",
              invite: "zaproszenie/:inviteCode",
              allCategories: "wszystkie/kategorie",
              allTags: "wszystkie/tagi",
              allSeries: "wszystkie/serie",
              confidential: "poufne",
              termsofuse_mcm: "mcm-warunki-uzytkowania",
              termsofuse: "warunki-uzytkowania",
              takedown_notice: "powiadomienie-o-usunieciu",
              license: "licencja",
              partners_api: "api-partnerow",
              myGames: "moje-gry",
              digitalServiceAct: "ustawa-o-uslugach-cyfrowych",
              search: "szukaj",
            },
            "id-ID": {
              game: "permainan/:game",
              category: "kategori/:hru",
              tag: "tag/:hru",
              developer: "developer/:hru",
              series: "seri/:hru",
              contacts: "kontak",
              profile: "profil",
              shop: "toko",
              invite: "undang/:inviteCode",
              allCategories: "semua/kategori",
              allTags: "semua/tag",
              allSeries: "semua/seri",
              confidential: "rahasia",
              termsofuse: "ketentuan-penggunaan",
              termsofuse_mcm: "mcm-ketentuan-penggunaan",
              takedown_notice: "pemberitahuan-penghapusan",
              license: "lisensi",
              partners_api: "api-mitra",
              myGames: "permainanku",
              digitalServiceAct: "undang-undang-layanan-digital",
              search: "cari",
            },
          },
          eg = (e) => {
            let { page: t, ...a } = e.query
            if ("1" === t) return { path: e.path, query: a, replace: !0 }
          },
          ev = (e, t) => {
            let i = em[e],
              n = (e) => i[e]
            return [
              {
                path: "oauth/consent",
                name: $.V2.PLAYGAMA_AUTH_CONSENT,
                component: t(() => a.e("7252").then(a.bind(a, 21087))),
                meta: { noLocaleInRoute: !0 },
              },
              {
                path: "",
                name: $.V2.MAIN,
                component: t(() => Promise.all([a.e("3231"), a.e("4724")]).then(a.bind(a, 56731))),
                meta: { showDesktopStickyBanner: !0, showMobileStickyBanner: !0 },
              },
              {
                path: n("game"),
                name: $.V2.GAME_PAGE,
                component: t(() => Promise.all([a.e("9120"), a.e("1874")]).then(a.bind(a, 68167))),
                meta: {
                  showMobileStickyBanner: !0,
                  noLayout: !0,
                  noRootManifest: !0,
                  noLazyHydration: !0,
                },
              },
              {
                path: "export/game/:game",
                name: $.V2.EXPORT_GAME_PAGE,
                component: t(() => a.e("3172").then(a.bind(a, 85632))),
                meta: {
                  noLocaleInRoute: !0,
                  manuallyHandledErrors: !0,
                  noLayout: !0,
                  noLazyHydration: !0,
                },
              },
              {
                path: "export/wl/2page/category/:categorySlug",
                name: $.V2.WHITE_LABEL_2PAGE_CATEGORY,
                component: t(() => Promise.all([a.e("9752"), a.e("9396")]).then(a.bind(a, 15090))),
                meta: {
                  noLocaleInRoute: !0,
                  noLayout: !0,
                  noLazyHydration: !0,
                  noAppInstallBanner: !0,
                },
              },
              {
                path: "export/wl/2page/:gameSlug/game.html",
                name: $.V2.WHITE_LABEL_2PAGE_LAUNCH,
                component: t(() => a.e("6526").then(a.bind(a, 12893))),
                meta: {
                  noLocaleInRoute: !0,
                  noLayout: !0,
                  noLazyHydration: !0,
                  noAppInstallBanner: !0,
                },
              },
              {
                path: "export/wl/2page/:gameSlug/index.html",
                name: $.V2.WHITE_LABEL_2PAGE_GAME,
                component: t(() => a.e("1208").then(a.bind(a, 2107))),
                meta: {
                  noLocaleInRoute: !0,
                  noLayout: !0,
                  noLazyHydration: !0,
                  noAppInstallBanner: !0,
                },
              },
              {
                path: "export/wl/2page",
                name: $.V2.WHITE_LABEL_2PAGE,
                component: t(() => Promise.all([a.e("9752"), a.e("2493")]).then(a.bind(a, 27677))),
                meta: {
                  noLocaleInRoute: !0,
                  noLayout: !0,
                  noLazyHydration: !0,
                  noAppInstallBanner: !0,
                },
              },
              {
                path: "export/wl/:partner",
                name: $.V2.WHITE_LABEL,
                component: t(() => a.e("8191").then(a.bind(a, 15760))),
                meta: {
                  noLocaleInRoute: !0,
                  noLayout: !0,
                  noLazyHydration: !0,
                  noAppInstallBanner: !0,
                },
              },
              {
                path: "widget/game/:game",
                name: $.V2.WIDGET_GAME_PAGE,
                component: t(() => a.e("9190").then(a.bind(a, 3397))),
                meta: { noLocaleInRoute: !0, manuallyHandledErrors: !0, noLayout: !0 },
              },
              {
                path: "random",
                name: $.V2.RANDOM_GAME,
                component: t(() => a.e("4871").then(a.bind(a, 23594))),
                meta: { noLocaleInRoute: !0 },
              },
              {
                path: n("category"),
                name: $.V2.CATEGORY,
                component: t(() => Promise.all([a.e("3231"), a.e("7515")]).then(a.bind(a, 39065))),
                beforeEnter: eg,
                meta: {
                  showDesktopStickyBanner: !0,
                  showMobileStickyBanner: !0,
                  noLayout: !0,
                  pageParameterIndexationAllowed: !0,
                },
              },
              {
                path: n("tag"),
                name: $.V2.TAG,
                component: t(() => Promise.all([a.e("3231"), a.e("7515")]).then(a.bind(a, 39065))),
                beforeEnter: eg,
                meta: {
                  showDesktopStickyBanner: !0,
                  showMobileStickyBanner: !0,
                  noLayout: !0,
                  pageParameterIndexationAllowed: !0,
                },
              },
              {
                path: n("series"),
                name: $.V2.SERIES,
                component: t(() => Promise.all([a.e("3231"), a.e("7515")]).then(a.bind(a, 39065))),
                beforeEnter: eg,
                meta: {
                  showDesktopStickyBanner: !0,
                  showMobileStickyBanner: !0,
                  noLayout: !0,
                  pageParameterIndexationAllowed: !0,
                },
              },
              {
                path: n("developer"),
                name: $.V2.DEVELOPER,
                component: t(() => Promise.all([a.e("3231"), a.e("7515")]).then(a.bind(a, 39065))),
                beforeEnter: eg,
                meta: {
                  showDesktopStickyBanner: !0,
                  showMobileStickyBanner: !0,
                  noLayout: !0,
                  pageParameterIndexationAllowed: !0,
                },
              },
              {
                path: n("contacts"),
                name: $.V2.CONTACTS,
                component: t(() => Promise.all([a.e("960"), a.e("2316")]).then(a.bind(a, 24818))),
              },
              {
                path: n("profile"),
                name: $.V2.PROFILE,
                component: t(() => a.e("2209").then(a.bind(a, 43628))),
              },
              {
                path: n("shop"),
                name: $.V2.SHOP,
                beforeEnter: (e, t, a) => {
                  a({
                    name: $.V2.PROFILE,
                    query: e.query,
                    hash: e.hash,
                    state: {
                      statusCode: 301,
                      headers: {
                        "X-BFF-Redirect-Reason": ep.Jo.SHOP_TO_PROFILE,
                        "X-BFF-Redirect-Mechanism": ep.Ct.FRONTEND_ROUTER,
                      },
                    },
                  })
                },
                component: {},
              },
              {
                path: n("allCategories"),
                name: $.V2.ALL_CATEGORIES,
                component: t(() => a.e("4666").then(a.bind(a, 99009))),
              },
              {
                path: n("allTags"),
                name: $.V2.ALL_TAGS,
                component: t(() => a.e("4666").then(a.bind(a, 99009))),
              },
              {
                path: n("allSeries"),
                name: $.V2.ALL_SERIES,
                component: t(() => a.e("4666").then(a.bind(a, 99009))),
              },
              {
                path: n("myGames"),
                name: $.V2.MY_GAMES,
                component: t(() => a.e("49").then(a.bind(a, 19956))),
              },
              {
                path: n("search"),
                name: $.V2.SEARCH,
                component: t(() => Promise.all([a.e("3231"), a.e("5947")]).then(a.bind(a, 67321))),
                meta: { showDesktopStickyBanner: !0, showMobileStickyBanner: !0, noLayout: !0 },
              },
              {
                path: n("confidential"),
                name: $.V2.CONFIDENTIAL,
                component: t(() => Promise.all([a.e("960"), a.e("7291")]).then(a.bind(a, 45250))),
              },
              {
                path: n("termsofuse"),
                name: $.V2.TERMS_OF_USE,
                component: t(() => Promise.all([a.e("960"), a.e("7291")]).then(a.bind(a, 45250))),
              },
              {
                path: n("termsofuse_mcm"),
                name: $.V2.TERMS_OF_USE_MCM,
                component: t(() => Promise.all([a.e("960"), a.e("7291")]).then(a.bind(a, 45250))),
              },
              {
                path: n("digitalServiceAct"),
                name: $.V2.DIGITAL_SERVICE_ACT,
                component: t(() => Promise.all([a.e("960"), a.e("7291")]).then(a.bind(a, 45250))),
              },
              {
                path: n("takedown_notice"),
                name: $.V2.TAKEDOWN_NOTICE,
                component: t(() => Promise.all([a.e("960"), a.e("7291")]).then(a.bind(a, 45250))),
              },
              {
                path: n("license"),
                name: $.V2.LICENSE,
                component: t(() => Promise.all([a.e("960"), a.e("7291")]).then(a.bind(a, 45250))),
              },
              {
                path: n("partners_api"),
                name: $.V2.PARTNERS_API,
                component: t(() => Promise.all([a.e("960"), a.e("7291")]).then(a.bind(a, 45250))),
              },
              {
                path: "about-us",
                name: $.V2.ABOUT_US,
                component: t(() => Promise.all([a.e("960"), a.e("7291")]).then(a.bind(a, 45250))),
                meta: { noLocaleInRoute: !0 },
              },
              { path: "error", component: {} },
              { path: ":catchAll(.*)", component: t(() => a.e("6908").then(a.bind(a, 23703))) },
            ]
          },
          eh = (e, t, a) => {
            let i = [
              {
                path: e === a.getDefaultLocale() ? "/" : `/${(0, c.GL)(e)}/`,
                name: $.V2.ROOT,
                component: {},
                children: ev(e, (e) => e),
              },
            ]
            return (0, o.aE)({ routes: i, history: t })
          }
        var ef = a(70443),
          e_ = a(31159)
        ;(a(88370),
          a(88626),
          a(30112),
          a(87197),
          a(40160),
          a(2946),
          a(80487),
          a(98955),
          a(19798),
          a(51612),
          a(93402),
          a(35740),
          a(3299),
          a(82913),
          a(61319),
          a(70482))
        let eb = (e) => {
          let t = new Map()
          ;(e.tags.forEach((e) => {
            ;("alternate" === e.props.rel && t.set(e.props.hreflang, e),
              "canonical" === e.props.rel && t.set("canonical", e))
          }),
            (e.tags = e.tags.filter((e) =>
              "alternate" === e.props.rel
                ? t.get(e.props.hreflang) === e
                : "canonical" !== e.props.rel || t.get("canonical") === e,
            )))
        }
        ;("u" > typeof crypto &&
          !crypto.randomUUID &&
          (crypto.randomUUID = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
              let t = (16 * (0, J.yT)()) | 0
              return ("x" === e ? t : (3 & t) | 8).toString(16)
            })
          }),
          a(49863))
        var ey = a(62323),
          ew = a(25547),
          ek = a(35556),
          eC = a(48523),
          eE = a(90548)
        function eA() {
          var e
          ;((e = { type: "custom-crash", url: location.href, body: null }),
            "sendBeacon" in navigator &&
              navigator.sendBeacon(
                "/reporting/tab-crash",
                new Blob([JSON.stringify([e])], { type: "application/reports+json" }),
              ))
        }
        var ex = a(47006)
        ;(a(31430), a(50589), a(34512))
        var eR = a(10603)
        class eT {
          request
          constructor({ request: e }) {
            this.request = e
          }
          submitContactForm = (e) =>
            this.request("/api/v1/email/report", {
              method: "POST",
              cache: "no-store",
              body: JSON.stringify(e),
            })
          getGamesByCategories = async ({
            categoriesIds: e,
            platform: t,
            pagination: a,
            locale: i,
            withDebugInfo: n,
            pageType: r,
            pinnedGame: l,
            rankingClusterId: o,
            rankingAudience: s,
            includeUnsupportedPlatforms: c,
            scope: u,
          }) => {
            let d = new URLSearchParams()
            ;(d.set("pagination", JSON.stringify(a)),
              d.set("platform", t),
              d.set("locale", i),
              d.set("categoriesIds", JSON.stringify(e)),
              o && d.set("cluster_id", o),
              s && d.set("audnc", s),
              l && d.set("pinned_game", l),
              n && d.set("debug", "true"),
              c && d.set("include_unsupported_platforms", "true"),
              r && d.set("type", r),
              u && d.set("scope", u))
            let { originalResponse: p, data: m } = await this.request(
              `/api/v1/categories/games?${d}`,
            )
            return p.ok && m
              ? {
                  categories: m.categories.map((e) => ({ ...e, games: e.games })),
                  pagination: m.pagination,
                }
              : Promise.reject(p.status)
          }
          getMainPageGamesByCategories = async ({
            platform: e,
            locale: t,
            rankingClusterId: a,
            rankingAudience: i,
            withDebugInfo: n,
            scope: r,
          }) => {
            let l = new URLSearchParams()
            ;(l.set("platform", e),
              l.set("pageSize", "desktop" === e ? "14" : "7"),
              l.set("locale", t),
              a && l.set("cluster_id", a),
              i && l.set("audnc", i),
              n && l.set("debug", "true"),
              r && l.set("scope", r))
            let { originalResponse: o, data: s } = await this.request(
              `/api/v1/categories/main-page?${l}`,
            )
            return o.ok && s
              ? {
                  categories: s.categories.map((e) => ({ ...e, games: e.games })),
                  pagination: s.pagination,
                }
              : Promise.reject(o.status)
          }
          getMainCategories = async (e) => {
            let t = new URLSearchParams()
            t.set("locale", e)
            let { originalResponse: a, data: i } = await this.request(`/api/v1/general/info?${t}`)
            return a.ok && i ? i : Promise.reject(a.status)
          }
          getCurrentUser = async () => {
            if ("u" < typeof window) throw Error("Cannot get current user on SSR")
            let e = new URLSearchParams()
            e.set("timezone", Intl.DateTimeFormat().resolvedOptions().timeZone)
            let { data: t, originalResponse: a } = await this.request(`/api/v1/user/current?${e}`)
            return (a.ok && t) || null
          }
          getPlaygamaConsent = async (e) => {
            let t = new URLSearchParams({ authorization_id: e }),
              {
                originalResponse: a,
                data: i,
                errors: n,
              } = await this.request(`/api/v1/auth/playgama-oauth/consent?${t}`)
            if (!a.ok || !i) throw Error(n[0] || "Unable to load Playgama authorization details")
            if (i.redirect_url) return { status: "resolved", redirectUrl: i.redirect_url }
            let r = i.client?.name,
              l = i.scopes ? i.scopes : i.scope?.split(/\s+/u).filter(Boolean)
            if (!r || !i.authorization_id || !l?.length)
              throw Error(n[0] || "Unable to load Playgama authorization details")
            return {
              status: "consent-required",
              consentDetails: {
                appName: r,
                authorizationId: i.authorization_id,
                redirectTo: i.redirect_uri,
                scopes: l,
              },
            }
          }
          submitPlaygamaConsentDecision = async ({ authorizationId: e, decision: t }) => {
            let {
                originalResponse: a,
                data: i,
                errors: n,
              } = await this.request("/api/v1/auth/playgama-oauth/consent", {
                method: "POST",
                body: JSON.stringify({ authorization_id: e, decision: t }),
              }),
              r = i?.redirect_to || i?.redirect_url
            if (!a.ok || !r) throw Error(n[0] || "Unable to submit Playgama authorization decision")
            return { redirectTo: r }
          }
          getGameByParam = async ({ hru: e, locale: t, context: a, showHidden: i }) => {
            let n = `/api/v1/games/info/${e}`,
              r = new URLSearchParams({ locale: t, context: a })
            i && r.append("show_hidden", "true")
            try {
              let { originalResponse: e, data: t } = await this.request(`${n}?${r}`)
              if (!e.ok || !t) return Promise.reject(e.status)
              return t
            } catch (e) {
              return (console.error({ URL, error: e }), Promise.reject(500))
            }
          }
          getRandomGameHRUs = async ({ platform: e, amount: t }) => {
            let a = new URLSearchParams()
            ;(a.set("platform", e), t && a.set("amount", t.toString()))
            try {
              let { originalResponse: e, data: t } = await this.request(
                `/api/v1/games/random-hrus?${a}`,
              )
              if (!e.ok || !t) return Promise.reject(e.status)
              return t
            } catch (e) {
              return (console.error({ URL, error: e }), Promise.reject(500))
            }
          }
          getGamesCategoriesShortInfo = async ({ type: e, locale: t }) => {
            let a = `/api/v1/categories/short-info/${e}`,
              i = new URLSearchParams()
            i.set("locale", t)
            try {
              let { originalResponse: e, data: t } = await this.request(`${a}?${i}`)
              if (!e.ok || !t) return Promise.reject(e.status)
              return t
            } catch (e) {
              return (console.error({ URL, error: e }), Promise.reject(500))
            }
          }
          getGamesCategoriesSeoById = async ({ id: e, locale: t, type: a }) => {
            let i = `/api/v1/categories/seo/${e}`,
              n = new URLSearchParams()
            ;(n.set("locale", t), n.set("type", a))
            try {
              let { originalResponse: e, data: t } = await this.request(`${i}?${n}`)
              if (!e.ok || !t) return Promise.reject(e.status)
              return t
            } catch (e) {
              return (console.error({ URL, error: e }), Promise.reject(500))
            }
          }
          signedRequest = async (e, t = {}) => {
            let a = await this.request(e, t)
            if (!a.data) return a
            let { data: i } = a
            return { ...a, data: { jwt: i, ...(0, eR.s)(i) } }
          }
          getGameRecommendations = async ({
            hru: e,
            types: t,
            platform: a,
            locale: i,
            rankingClusterId: n,
            rankingAudience: r,
            limit: l = 16,
          }) => {
            let o = new URLSearchParams()
            ;(o.set("rec_types", t.join(",")),
              o.set("limit", String(l)),
              o.set("platform", a),
              o.set("locale", i),
              n && o.set("cluster_id", n),
              r && o.set("audnc", r))
            let s = `/api/v1/games/recommendations/${e}?${o}`
            try {
              let { originalResponse: e, data: t } = await this.request(s)
              if (!e.ok || !t) return Promise.reject(e.status)
              return t
            } catch (e) {
              return (console.error({ URL: s, error: e }), Promise.reject(500))
            }
          }
          search = async (e) => {
            let t = new URLSearchParams(e),
              { data: a } = await this.request(`/api/v1/search/g?${t}`)
            if (a) return a
            throw Error("Search error")
          }
          confirmIgpDelivery = async ({ gameId: e, orderId: t, externalId: a }) => {
            let { originalResponse: i } = await this.request(
              "/api/v1/in-game-payments/confirm-delivery",
              { method: "POST", body: JSON.stringify({ gameId: e, orderId: t, externalId: a }) },
            )
            if (!i.ok) return Promise.reject(i.status)
          }
          getIgpPurchases = async (e) => {
            let t = new URLSearchParams({ gameId: e }),
              a = `/api/v1/in-game-payments/purchases?${t}`,
              { originalResponse: i, data: n } = await this.request(a)
            return i.ok && n ? n : Promise.reject(i.status)
          }
          consumeIgpPurchase = async ({ gameId: e, orderId: t, externalId: a }) => {
            let { originalResponse: i } = await this.request("/api/v1/in-game-payments/consume", {
              method: "POST",
              body: JSON.stringify({ gameId: e, orderId: t, externalId: a }),
            })
            if (!i.ok) return Promise.reject(i.status)
          }
          blockAccount = async () => {
            let { originalResponse: e } = await this.request("/api/v1/user/block-account", {
              method: "POST",
            })
            if (!e.ok) return Promise.reject(e.status)
          }
          getRankingClusterId = async ({
            auid: e,
            platform: t,
            audience: a = "",
            currentClusterId: i = "",
          }) => {
            let n = new URLSearchParams({ auid: e, platform: t, audnc: a, currentClusterId: i }),
              { data: r } = await this.request(`/api/v1/user-clustering/cluster-id?${n}`)
            if (!r) throw Error("Unexpected empty ranking info")
            return r
          }
        }
        var eS = a(77192)
        ;(async () => {
          var e
          let t,
            a,
            s,
            v,
            h = (0, o.LA)()
          ;((t = "tabCrashDetection"),
            (a = "started"),
            (s = "object" == typeof history.state ? history.state : {}),
            "wasDiscarded" in document ? document.wasDiscarded && eA() : s && s[t] === a && eA(),
            history.replaceState({ ...s, [t]: a }, ""),
            document.addEventListener("visibilitychange", () => {
              let e = "object" == typeof history.state ? history.state : {}
              "hidden" === document.visibilityState
                ? history.replaceState({ ...e, [t]: void 0 }, "")
                : history.replaceState({ ...e, [t]: a }, "")
            }),
            window.addEventListener("pagehide", () => {
              let e = "object" == typeof history.state ? history.state : {}
              history.replaceState({ ...e, [t]: a }, "")
            }))
          let f = window.additionalServerData?.config,
            _ = window.additionalServerData?.locale.detectedLocale
          if (!f) throw Error("No app config provided")
          let b = (0, l.m1)(d)
          ;((e = f.SENTRY_DSN) &&
            (0, eC.Ts)({
              dsn: e,
              initialScope: { tags: { source: "portal" } },
              sendClientReports: !1,
              sampleRate: 0.1,
              ignoreErrors: [
                /ResizeObserver loop/,
                /Network Error/,
                /Failed to fetch/,
                /Load failed/,
                /AbortError/,
                /TypeError: cancelled/,
              ],
              denyUrls: [
                /google-analytics\.com/i,
                /googletagmanager\.com/i,
                /doubleclick\.net/i,
                /facebook\.net/i,
                /hotjar\.com/i,
                /googleapis\.com/i,
              ],
            }),
            (b.config.errorHandler = (e, t, a) => {
              ;(0, eE.Cp)(e, { tags: { vue: !0, component: t?.$options.name }, extra: { info: a } })
            }),
            await (0, J.HD)())
          let y = (0, p.M)(f),
            w = (0, e_.Z)({ hooks: { "tags:resolve": eb } }),
            { i18nAddon: k } = (0, u.f$)({ enableI18n: f.VUE_APP_ENABLE_I18N, detectedLocale: _ }),
            C = () => {},
            { router: E, routersByLocale: x } = (function ({
              history: e,
              registerImport: t,
              i18nAddon: a,
              deferredInit: i = Promise.resolve(),
            }) {
              let n = (0, o.aE)({
                  routes: (({ i18nAddon: e, registerImport: t }) => {
                    let a = e.getSupportedLocales()
                    return [
                      {
                        path: `/:locale(${a.map(c.GL).join("|")})?/`,
                        name: $.V2.ROOT,
                        component: ed,
                        children: ev("en-US", t),
                      },
                    ]
                  })({ i18nAddon: a, registerImport: t }),
                  history: e,
                  scrollBehavior: async (e, t, a) =>
                    (await i, e.hash) ? { el: e.hash } : a || { top: 0 },
                  linkActiveClass: "",
                  linkExactActiveClass: "",
                }),
                r = a.getDefaultLocale()
              return (
                n.beforeEach(async (e, i, l) => {
                  let o,
                    s = e.params.locale || "",
                    u = (0, c.GL)(s) || r,
                    d = a.currentLocale.value,
                    p = a.getPreferredLocale(),
                    m = u
                  if (e.name && e.meta.noLocaleInRoute) {
                    if ("" !== s)
                      return l({
                        name: e.name,
                        params: { ...e.params, locale: "" },
                        query: e.query,
                        state: {
                          headers: {
                            "X-BFF-Redirect-Reason": ep.Jo.NO_LOCALE_IN_ROUTE,
                            "X-BFF-Redirect-Mechanism": ep.Ct.FRONTEND_ROUTER,
                          },
                        },
                      })
                    m = p || u
                  } else if ("" === s && p && p !== u && e.name) {
                    let t = p === r ? "" : (0, c.GL)(p)
                    return l({
                      name: e.name,
                      params: { ...e.params, locale: t },
                      query: e.query,
                      state: {
                        headers: {
                          "X-BFF-Redirect-Reason": ep.Jo.PREFERRED_LOCALE,
                          "X-BFF-Redirect-Mechanism": ep.Ct.FRONTEND_ROUTER,
                        },
                      },
                    })
                  } else if (s === (0, c.GL)(r))
                    return l({
                      name: e.name,
                      params: { ...e.params, locale: "" },
                      query: e.query,
                      state: {
                        statusCode: 301,
                        headers: {
                          "X-BFF-Redirect-Reason": ep.Jo.REMOVE_EN_LOCALE,
                          "X-BFF-Redirect-Mechanism": ep.Ct.FRONTEND_ROUTER,
                        },
                      },
                    })
                  if (m === d) return l()
                  let g = await a.loadLocale({ locale: m, registerImport: t })
                  return (
                    (o = n.getRoutes().find((e) => e.name === $.V2.ROOT)) &&
                      (o.children.forEach((e) => {
                        e.name && n.removeRoute(e.name)
                      }),
                      ev(g, t).forEach((e) => n.addRoute($.V2.ROOT, e))),
                    l(e)
                  )
                }),
                {
                  router: n,
                  routersByLocale: (function ({ history: e, i18nAddon: t }) {
                    let a = {}
                    for (let i of t.getSupportedLocales()) a[i] = eh(i, e, t)
                    return a
                  })({ history: e, i18nAddon: a }),
                }
              )
            })({
              history: h,
              i18nAddon: k,
              registerImport: (e) => () => e(),
              deferredInit: new Promise((e) => {
                C = () => e()
              }),
            }),
            R = (0, eS.A)(location.href),
            T = R?.searchParams?.get(ek.z5) ?? "",
            S = (0, ex.Y0)(
              new eT({
                request: (
                  ({ apiHost: e, backendFlags: t, headers: a }) =>
                  (i, n = {}) => {
                    if (void 0 === e) throw Error("No apiHost was defined for requests")
                    let [r, l] = i.split("?"),
                      o = new URLSearchParams(l)
                    return (
                      t && o.set("flags", t),
                      fetch(`${e}${r}?${o}`, {
                        headers: { "content-type": "application/json", ...a },
                        ...n,
                      }).then(async (e) => {
                        try {
                          if (
                            "application/json" === e.headers.get("content-type") ||
                            "application/json; charset=utf-8" === e.headers.get("content-type")
                          ) {
                            let t = await e.json()
                            if (e.ok) return { originalResponse: e, data: t, errors: [] }
                            return {
                              originalResponse: e,
                              data: null,
                              errors: t.errors || [t.message],
                            }
                          }
                          return { originalResponse: e, data: await e.text(), errors: [] }
                        } catch (t) {
                          return { originalResponse: e, data: null, errors: [t.toString()] }
                        }
                      })
                    )
                  }
                )({ apiHost: f.API_HOST, backendFlags: T }),
              }),
            ),
            L = (0, A.m)(x),
            P = ((v = (0, m.Ey)()), "u" > typeof window && v.use(g.A), v)
          P.state.value = window.__pinia || {}
          let M = new i.E({ defaultOptions: { queries: { ...ew.K, staleTime: 1 / 0 } } })
          ;(window.__query && (0, n.Qv)(M, window.__query), await (0, J.HD)())
          let I = (0, ey.$F)(void 0)
          ;(b
            .use(y)
            .use(S)
            .use(k)
            .use(E)
            .use(L)
            .use(P)
            .use(I)
            .use(r.O, { queryClient: M, enableDevtoolsV6Plugin: !0 })
            .use(w)
            .mixin(ef.V),
            (b.config.performance = !0),
            await E.isReady(),
            await (0, J.HD)(),
            b.mount("#app"),
            C())
        })()
      },
      99561: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          GL: function () {
            return o
          },
          YX: function () {
            return n
          },
          dI: function () {
            return i
          },
          vg: function () {
            return s
          },
          vi: function () {
            return r
          },
        }),
          a(17932),
          a(76429))
        let i = ["en-US", "es-ES", "de-DE", "fr-FR", "it-IT", "pt-BR", "tr-TR", "pl-PL", "id-ID"],
          n = {
            "en-US": () => a.e("7754").then(a.bind(a, 65553)),
            "es-ES": () => a.e("7725").then(a.bind(a, 85788)),
            "de-DE": () => a.e("4623").then(a.bind(a, 49714)),
            "fr-FR": () => a.e("257").then(a.bind(a, 98264)),
            "it-IT": () => a.e("3135").then(a.bind(a, 98130)),
            "pt-BR": () => a.e("2981").then(a.bind(a, 5812)),
            "tr-TR": () => a.e("5501").then(a.bind(a, 88908)),
            "pl-PL": () => a.e("5693").then(a.bind(a, 8652)),
            "id-ID": () => a.e("9039").then(a.bind(a, 70162)),
          },
          r = {
            "en-US": "English",
            "es-ES": "Espa\xf1ol",
            "de-DE": "Deutsch",
            "fr-FR": "Fran\xe7ais",
            "it-IT": "Italiano",
            "pt-BR": "Portugu\xeas",
            "tr-TR": "T\xfcrk\xe7e",
            "pl-PL": "Polski",
            "id-ID": "Indonesia",
          },
          l = {
            en: "en-US",
            es: "es-ES",
            de: "de-DE",
            fr: "fr-FR",
            it: "it-IT",
            br: "pt-BR",
            tr: "tr-TR",
            pl: "pl-PL",
            id: "id-ID",
            "en-US": "en",
            "es-ES": "es",
            "de-DE": "de",
            "fr-FR": "fr",
            "it-IT": "it",
            "pt-BR": "br",
            "tr-TR": "tr",
            "pl-PL": "pl",
            "id-ID": "id",
          },
          o = (e) => l[e],
          s = (e) =>
            ({
              "en-US": "en",
              "es-ES": "es",
              "de-DE": "de",
              "fr-FR": "fr",
              "it-IT": "it",
              "pt-BR": "pt",
              "tr-TR": "tr",
              "pl-PL": "pl",
              "id-ID": "id",
            })[e]
      },
      57550: function (e, t, a) {
        "use strict"
        a.d(t, {
          Cf: function () {
            return c
          },
          f$: function () {
            return s
          },
        })
        var i = a(3144),
          n = a(87311),
          r = a(99561)
        let l = "en-US",
          o = Symbol("i18nAddon"),
          s = ({ enableI18n: e, detectedLocale: t }) => {
            let a = (0, n.hU)({
                legacy: !1,
                locale: "",
                messages: {},
                pluralRules: {
                  "pl-PL": (e, t) => {
                    let a = Math.abs(Number(e))
                    if (1 === t) return 0
                    if (2 === t) return +(1 !== a)
                    if (!Number.isInteger(a)) return 2
                    let i = a % 10,
                      n = a % 100
                    return 1 === a ? 0 : i >= 2 && i <= 4 && !(n >= 12 && n <= 14) ? 1 : 2
                  },
                },
              }),
              i = t,
              s = {
                currentLocale: a.global.locale,
                getCurrentLanguage() {
                  return this.currentLocale.value.split("-")[0] || "en"
                },
                getSupportedLocales: () => (e ? r.dI : [l]),
                getDefaultLocale: () => l,
                getPreferredLocale() {
                  if (e) return i
                },
                setPreferredLocale(e) {
                  i = e
                },
                async loadLocale({ locale: e, registerImport: t }) {
                  let i = e in r.YX ? e : l,
                    n = r.YX[i],
                    o = (await t(n)()).default
                  return (a.global.setLocaleMessage(i, o), (a.global.locale.value = i), i)
                },
                install(e) {
                  ;(a.install(e),
                    e.provide(o, s),
                    e.mixin({
                      beforeCreate() {
                        this.$tr = this.$t
                      },
                      unmounted() {
                        delete this.$tr
                      },
                    }))
                },
              }
            return { vueI18n: a, i18nAddon: s }
          },
          c = () => {
            let e = (0, i.WQ)(o)
            if (!e) throw Error("i18nAddon not found")
            return e
          }
      },
      3155: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          I: function () {
            return o
          },
          W: function () {
            return s
          },
        }),
          a(86603),
          a(33384))
        var i,
          n = a(59176),
          r = a(22065)
        let l = new (a(11841).d)("consent")
        var o =
          (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"),
          (i[(i.EXTENSION_LEVEL_AD_BLOCKER = 1)] = "EXTENSION_LEVEL_AD_BLOCKER"),
          (i[(i.NETWORK_LEVEL_AD_BLOCKER = 2)] = "NETWORK_LEVEL_AD_BLOCKER"),
          (i[(i.NO_AD_BLOCKER = 3)] = "NO_AD_BLOCKER"),
          i)
        class s {
          PROBE_TIMEOUT = 1e3
          PROBE_CALL_ID = "pg-probe"
          resolveReady = () => {}
          ready
          uspString = "1YNN"
          usnatState = {
            Version: 1,
            SharingNotice: 1,
            SaleOptOutNotice: 1,
            SharingOptOutNotice: 1,
            TargetedAdvertisingOptOutNotice: 1,
            SensitiveDataProcessingOptOutNotice: 0,
            SensitiveDataLimitUseNotice: 0,
            SaleOptOut: 2,
            SharingOptOut: 2,
            TargetedAdvertisingOptOut: 2,
            SensitiveDataProcessing: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            KnownChildSensitiveDataConsents: [0, 0],
            PersonalDataConsents: 0,
            MspaCoveredTransaction: 2,
            MspaOptOutOptionMode: 0,
            MspaServiceProviderMode: 0,
          }
          gppState = {
            gppVersion: "1.1",
            cmpStatus: "loaded",
            cmpDisplayStatus: "hidden",
            signalStatus: "ready",
            supportedAPIs: ["7:usnat"],
            cmpId: 300,
            sectionList: [7],
            applicableSections: [7],
            gppString: "DBABL~BVQqAAAAAg",
            parsedSections: { usnat: [this.usnatState] },
          }
          options
          constructor(e) {
            ;((this.options = e),
              ({ promise: this.ready, resolve: this.resolveReady } = Promise.withResolvers()))
          }
          async install() {
            try {
              if (window.top === window || !this.options.handleConsentlessEnv)
                return void (await (0, r.k)({
                  src: `https://fundingchoicesmessages.google.com/i/${this.options.consentAccount}?ers=3`,
                  useExisting: !0,
                }))
              {
                let [e, t] = await Promise.all([
                  this.probeGppLocator(this.PROBE_TIMEOUT),
                  this.probeTcfLocator(this.PROBE_TIMEOUT),
                ])
                if (e || t) return
              }
              this.installMock()
            } catch (e) {
              return e instanceof Error ? e.message : void 0
            } finally {
              this.resolveReady()
            }
          }
          probeGppLocator(e) {
            return new Promise((t) => {
              let a = !1,
                i = (e) => {
                  let n = e.data
                  n &&
                    n.__gppReturn &&
                    n.__gppReturn.callId === this.PROBE_CALL_ID &&
                    ((a = !0), window.removeEventListener("message", i), t(!0))
                }
              window.addEventListener("message", i)
              try {
                window.parent.postMessage(
                  { __gppCall: { command: "ping", version: "1.1", callId: this.PROBE_CALL_ID } },
                  "*",
                )
              } catch {}
              setTimeout(() => {
                a || (window.removeEventListener("message", i), t(!1))
              }, e)
            })
          }
          probeTcfLocator(e) {
            return new Promise((t) => {
              let a = !1,
                i = (e) => {
                  let n = e.data
                  n &&
                    n.__tcfapiReturn &&
                    n.__tcfapiReturn.callId === this.PROBE_CALL_ID &&
                    ((a = !0), window.removeEventListener("message", i), t(!0))
                }
              window.addEventListener("message", i)
              try {
                window.parent.postMessage(
                  { __tcfapiCall: { command: "ping", version: 2, callId: this.PROBE_CALL_ID } },
                  "*",
                )
              } catch {}
              setTimeout(() => {
                a || (window.removeEventListener("message", i), t(!1))
              }, e)
            })
          }
          installMock() {
            ;(l.debug("No CMP detected, installing PG mock"),
              this.installLocator("__gppLocator"),
              this.installLocator("__uspapiLocator"),
              this.installLocator("__tcfapiLocator"),
              this.installGppApi(),
              window.addEventListener("message", this.messageHandler, !1),
              "function" == typeof window.dispatchEvent &&
                (window.dispatchEvent(new CustomEvent("gpploaded")),
                window.dispatchEvent(new CustomEvent("uspapiloaded"))))
          }
          installLocator(e) {
            if (!window.frames[e]) {
              let t = document.createElement("iframe")
              ;((t.name = e), (t.style.display = "none"), document.documentElement.appendChild(t))
            }
          }
          installGppApi() {
            ;((window.__gpp = (e, t, a) => {
              l.debug("__gpp", e)
              let i = null,
                r = !0
              switch (e) {
                case "ping":
                  i = {
                    gppVersion: this.gppState.gppVersion,
                    cmpStatus: this.gppState.cmpStatus,
                    cmpDisplayStatus: this.gppState.cmpDisplayStatus,
                    signalStatus: this.gppState.signalStatus,
                    supportedAPIs: this.gppState.supportedAPIs,
                    cmpId: this.gppState.cmpId,
                    gppString: this.gppState.gppString,
                    sectionList: this.gppState.sectionList,
                    applicableSections: this.gppState.applicableSections,
                  }
                  break
                case "getGPPData":
                  i = this.gppState
                  break
                case "hasSection":
                  i = "usnat" === a || 7 === a
                  break
                case "getSection":
                  i = "usnat" === a || 7 === a ? this.gppState.parsedSections.usnat : null
                  break
                case "getField":
                  if ("string" == typeof a && a.startsWith("usnat.")) {
                    let e = a.split(".")[1]
                    i = void 0 !== this.usnatState[e] ? this.usnatState[e] : null
                  } else i = null
                  break
                case "addEventListener":
                  i = {
                    eventName: "signalStatus",
                    listenerId: Math.floor(1e4 * (0, n.yT)()),
                    data: this.gppState.signalStatus,
                    pingData: {
                      gppVersion: this.gppState.gppVersion,
                      cmpStatus: this.gppState.cmpStatus,
                      cmpDisplayStatus: this.gppState.cmpDisplayStatus,
                      signalStatus: this.gppState.signalStatus,
                      supportedAPIs: this.gppState.supportedAPIs,
                      cmpId: this.gppState.cmpId,
                      gppString: this.gppState.gppString,
                      sectionList: this.gppState.sectionList,
                      applicableSections: this.gppState.applicableSections,
                    },
                  }
                  break
                case "removeEventListener":
                  i = !0
                  break
                default:
                  r = !1
              }
              ;(l.debug(`__gpp response ("${e}")`, { result: i, success: r }),
                "function" == typeof t && t(i, r))
            }),
              (window.__uspapi = (e, t, a) => {
                l.debug("__uspapi", { command: e, version: t })
                let i = null,
                  n = !1
                ;("getUSPData" === e && ((i = { version: 1, uspString: this.uspString }), (n = !0)),
                  l.debug(`__uspapi response ("${e}")`, { result: i, success: n }),
                  "function" == typeof a && a(i, n))
              }))
          }
          messageHandler(e) {
            let t
            try {
              t = "string" == typeof e.data ? JSON.parse(e.data) : e.data
            } catch (e) {
              return
            }
            if (t && t.__gppCall) {
              let a = t.__gppCall
              window.__gpp(
                a.command,
                (t, i) => {
                  let n = { __gppReturn: { returnValue: t, success: i, callId: a.callId } }
                  e.source &&
                    "function" == typeof e.source.postMessage &&
                    e.source.postMessage(n, { targetOrigin: "*" })
                },
                a.parameter,
                a.version,
              )
            }
            if (t && t.__uspapiCall) {
              let a = t.__uspapiCall
              window.__uspapi(a.command, a.version, (t, i) => {
                let n = { __uspapiReturn: { returnValue: t, success: i, callId: a.callId } }
                e.source &&
                  "function" == typeof e.source.postMessage &&
                  e.source.postMessage(n, { targetOrigin: "*" })
              })
            }
          }
        }
      },
      50370: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          Z: function () {
            return c
          },
          v: function () {
            return l
          },
        }),
          a(88370),
          a(88626),
          a(30112),
          a(87197),
          a(40160),
          a(2946),
          a(80487),
          a(98955),
          a(19798),
          a(51612),
          a(93402),
          a(35740),
          a(3299),
          a(82913),
          a(61319),
          a(70482))
        var i = a(11841)
        ;(a(31430), a(50589), a(34512))
        var n = a(84608),
          r = a(59176)
        let l = {
            nexverse: {
              bidder: "nexverse",
              params: { uid: "ad135c38176f14886c99a4ea2d436a8c", pubId: "24329", pubEpid: "35109" },
            },
            playgamaFallback: {
              banner: {
                bidder: "playgama",
                params: {
                  publisherId: "playgama-portal",
                  adUnitId: "sidebar",
                  env: "production",
                  apiKey: "portal-key-001",
                },
              },
              video: {
                bidder: "playgama",
                params: {
                  publisherId: "playgama-portal",
                  adUnitId: "video_interstitial",
                  env: "production",
                  apiKey: "portal-key-001",
                },
              },
            },
            playgama: {
              bidder: "playgama",
              params: {
                publisherId: "playgama-portal",
                adUnitId: "banner-in-game",
                env: "production",
                apiKey: "portal-key-001",
              },
            },
          },
          o = async (e) => {
            let t = {
              priceGranularity: "dense",
              debug: e.debug,
              bidderTimeout: 2e3,
              cache: { url: "", useLocal: !0 },
              enableSendAllBids: !1,
            }
            if (e.cmp) {
              let a = await Promise.race([(0, r.O1)(2e3), e.getUser().catch(() => {})]),
                i = {}
              if (a?.email) {
                let e = a.email.replaceAll(/\.\+/g, "")
                i[1] = await (0, n.L)(e)
              }
              let l = new URLSearchParams(i).toString()
              t = {
                ...t,
                consentManagement: {
                  strictStorageEnforcement: !0,
                  gdpr: {
                    cmpApi: "iab",
                    timeout: 8e3,
                    actionTimeout: 1e4,
                    defaultGdprScope: !0,
                    rules: [
                      {
                        purpose: "storage",
                        enforcePurpose: !0,
                        enforceVendor: !0,
                        vendorExceptions: ["utiqId", "playgama"],
                      },
                      {
                        purpose: "basicAds",
                        enforcePurpose: !0,
                        enforceVendor: !0,
                        vendorExceptions: ["playgama"],
                      },
                      {
                        purpose: "measurement",
                        enforcePurpose: !0,
                        enforceVendor: !0,
                        vendorExceptions: ["playgama"],
                      },
                      {
                        purpose: "personalizedAds",
                        enforcePurpose: !0,
                        enforceVendor: !0,
                        vendorExceptions: ["playgama"],
                      },
                    ],
                  },
                  gpp: { cmpApi: "iab", timeout: 8e3, actionTimeout: 1e4 },
                },
                userSync: {
                  userIds: [
                    {
                      name: "id5Id",
                      params: {
                        partner: 1920,
                        externalModuleUrl: "https://cdn.id5-sync.com/api/1.0/id5PrebidModule.js",
                        pd: l,
                        canCookieSync: !0,
                        gamTargetingPrefix: "id5",
                        exposeTargeting: !0,
                      },
                      storage: {
                        type: "html5",
                        name: "id5id",
                        expires: 90,
                        refreshInSeconds: 7200,
                      },
                    },
                    { name: "utiqId" },
                    { name: "sharedId", storage: { type: "html5", name: "_pubcid", expires: 365 } },
                  ],
                  encryptedSignalSources: {
                    sources: [
                      {
                        source: ["id5-sync.com", "utiq.com", "pubcid.org"],
                        encrypt: !1,
                        customFunc: () => {
                          throw Error("Should not be called")
                        },
                      },
                    ],
                    registerDelay: 0,
                  },
                  auctionDelay: 50,
                },
              }
            }
            return t
          },
          s = new i.d("hb")
        class c {
          options
          prebid
          auctions = new Map()
          currentTargeting = {}
          constructor(e) {
            this.options = e
          }
          async init() {
            let [{ prebid: e }, t] = await Promise.all([
              Promise.all([a.e("1897"), a.e("4799")]).then(a.bind(a, 16530)),
              o(this.options),
            ])
            ;((this.prebid = e),
              e.setConfig(t),
              this.applyTargeting(),
              e.onEvent("adRenderSucceeded", ({ bid: e }) => {
                let t = e?.auctionId
                if (!t) return
                let a = this.auctions.get(t)
                a && (a.renderedBid = e)
              }))
          }
          getUserSignals() {
            return this.prebid && this.options.cmp
              ? this.prebid.getUserIdsAsync()
              : (s.error("Prebid not available on getUserSignals()"), Promise.resolve())
          }
          updateTargeting(e = {}) {
            ;((this.currentTargeting = { ...e }), this.applyTargeting())
          }
          async runAuction(e, t) {
            if (!this.prebid) return
            let { auctionId: a } = await this.prebid.requestBids({ adUnits: [e], timeout: 2e3 }),
              i = this.prebid.getHighestCpmBids(e.code)?.[0],
              n = this.prebid.getAdserverTargetingForAdUnitCode(e.code),
              r = this.createAuctionResult({ auctionId: a, targeting: n, winningBid: i })
            return (
              s.debug("auction result", {
                adUnit: e.code,
                placement: t.type,
                bidder: r?.winningBid?.bidder ?? "no-bidder",
                cpm: r?.winningBid?.cpm,
                auctionId: a,
              }),
              this.options.logEvent({
                event: "custom_event",
                eventName: "ad_hb_auction",
                adPlacement: t.type,
                adUnit: e.code,
                adHbBidder: r?.winningBid?.bidder || "no-bidder",
                adHbAuctionId: r?.winningBid?.auctionId,
              }),
              r
            )
          }
          applyTargeting() {
            this.prebid &&
              this.prebid.setConfig({
                ortb2: { site: { ext: { data: { ...this.currentTargeting } } } },
              })
          }
          createAuctionResult({ auctionId: e, targeting: t, winningBid: a }) {
            let i = { auctionId: e, targeting: t, winningBid: a }
            return (e && this.auctions.set(e, i), i)
          }
          renderAd(e, t) {
            try {
              if (!e.ad) throw Error("No ad markup")
              t.innerHTML = ""
              let a = document.createElement("iframe")
              ;((a.width = String(e.width)),
                (a.height = String(e.height)),
                (a.style.border = "0"),
                (a.style.display = "block"),
                a.setAttribute("scrolling", "no"),
                t.appendChild(a))
              let i = a.contentWindow?.document
              if (!i) throw Error("Unable to access iframe document for direct render")
              return (
                i.open(),
                i.write('<!doctype html><html><head></head><body style="margin:0"></body></html>'),
                i.close(),
                pbjs.renderAd(i, e.adId),
                !0
              )
            } catch (e) {
              return (s.error("Failed to render ad:", e), !1)
            }
          }
        }
      },
      65940: function (e, t, a) {
        "use strict"
        a.d(t, {
          u: function () {
            return i
          },
        })
        let i = { AD_BLOCK_STATUS: "ab", IS_LOGGED_IN: "l" }
      },
      11841: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          d: function () {
            return n
          },
        }),
          a(31430),
          a(50589),
          a(34512))
        let i = {
          service: "#4A90E2",
          "public-banner": "#27AE60",
          "internal-banner": "#F39C12",
          provider: "#E67E22",
          sdk: "#E67E22",
          consent: "#9B59B6",
          hb: "#E74C3C",
          detector: "#16A085",
        }
        class n {
          tag
          style
          level
          constructor(e, t) {
            ;((this.tag = t ? `[PLAYGAMA ADV:${e}:${t}]` : `[ADV:${e}]`),
              (this.style = `color:${i[e]};font-weight:bold`))
            try {
              this.level = +!!new URLSearchParams(window.location.search).has("debug")
            } catch {
              this.level = 0
            }
          }
          debug(...e) {
            this.level >= 1 && console.info(`%c${this.tag}`, this.style, ...e)
          }
          log(...e) {
            this.level >= 0 && console.info(`%c${this.tag}`, this.style, ...e)
          }
          error(...e) {
            this.level >= 0 && console.error(`%c${this.tag}`, this.style, ...e)
          }
        }
      },
      71808: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          K: function () {
            return l
          },
          p: function () {
            return n
          },
        }),
          a(50616),
          a(26972),
          a(74133),
          a(41469),
          a(83630),
          a(73923),
          a(5316),
          a(73926),
          a(83137),
          a(14318),
          a(351),
          a(74310),
          a(61241),
          a(80718),
          a(14248),
          a(91906),
          a(33214),
          a(59800),
          a(58267),
          a(54965),
          a(69024),
          a(15381),
          a(30774),
          a(8109),
          a(56705),
          a(55156),
          a(55120),
          a(85866),
          a(92426),
          a(37539),
          a(14894),
          a(34420),
          a(35055),
          a(56596),
          a(48933),
          a(20329),
          a(60387),
          a(81623),
          a(77237),
          a(64632),
          a(71090),
          a(33384),
          a(17932),
          a(19329),
          a(86204),
          a(76429))
        var i = a(22065)
        let n = "p_a68073c6-abde-4a55-a494-5ddb9ec8baa0"
        async function r(e) {
          let t = atob(e),
            a = t.length,
            i = new Uint8Array(a)
          for (let e = 0; e < a; e++) i[e] = t.charCodeAt(e)
          let n = new DecompressionStream("gzip"),
            r = new Response(new Blob([i]).stream().pipeThrough(n))
          return await r.text()
        }
        class l {
          sdkPromise
          reportedStat = new Set()
          enabled
          gameHRU
          storageMessageHandler
          constructor({ queryParams: e, gameHRU: t, storageMessageHandler: a }) {
            ;((this.enabled = e.clid === n),
              (this.gameHRU = t),
              (this.storageMessageHandler = a),
              (this.sdkPromise = Promise.resolve(void 0)),
              this.enabled &&
                (this.sdkPromise = (0, i.k)({
                  src: "https://ssl.minijuegosgratis.com/lechuck/js/latest.js",
                  useExisting: !0,
                }).then(() => {
                  if (!window.LeChuckAPI) throw Error("Cannot instantiate Minijuego's LeChuckAPI")
                  return new window.LeChuckAPI({})
                })))
          }
          async listen(e) {
            if (this.enabled) {
              ;(e.addEventListener("storage", this.handleMessage),
                e.addEventListener("cloud-save", this.handleMessage))
              let t = await this.storageMessageHandler({ data: { action: "getState" } }),
                a = t?.payload
              a?.state &&
                this.handleMessage(
                  new CustomEvent("storage", { detail: { type: "storage", payload: a.state } }),
                )
            }
          }
          async reportStat(e, t) {
            let a = await this.sdkPromise,
              i = `${e}-${t}`
            this.reportedStat.has(i) ||
              (this.reportedStat.add(i),
              console.info(`[PG<->MINIPLAY] Reporting stat ${e}: ${t}`),
              a?.stat.put(
                (e) => {
                  console.info("window.lechuck.stat.put response", e)
                },
                e,
                t,
              ))
          }
          handleMessage = async (e) => {
            let t = e.detail
            if ("type" in t && "storage" === t.type) {
              let e = t.payload,
                a = {
                  "mr-racer-car-racing": this.handleMRRacer,
                  "geometry-arrow": this.handleGeometryArrow,
                  "geometry-arrow-2": this.handleGeometryArrow2,
                  "gangster-island-crime-city": this.handleGangstaIsland,
                  "rooftop-run": this.handleRooftopRun,
                  "zombie-space-episode-ii": this.handleZombieSpaceEpisodeII,
                  "crazy-bus-station": this.handleCrazyBusStation,
                  "archery-ragdoll": this.handleArcheryRagdoll,
                }
              if (this.gameHRU in a)
                try {
                  await a[this.gameHRU]?.(e)
                } catch (e) {
                  console.error("Error during message handle", t, e)
                }
            }
          }
          handleMRRacer = (e) => {
            let t = JSON.parse(e.mrr || "")
            ;(t.carsUnlocked.split("|").forEach((e, t) => {
              "0" === e && this.reportStat(`carsUnlocked${t + 1}`, 1)
            }),
              t.locationLockStatus.split("|").forEach((e, t) => {
                "0" === e && this.reportStat(`locationUnlocked${t + 1}`, 1)
              }),
              t.achievementsUnlocked.split("|").forEach((e, t) => {
                "1" === e && this.reportStat(`achievementUnlocked${t + 1}`, 1)
              }),
              this.reportStat("maxSpeed", Number(t.maxSpeed)))
          }
          handleGeometryArrow = (e) => {
            Object.entries(e).forEach(([e, t]) => {
              let a = e.match(/level(\d+)_progress/)
              a && "1" === t && this.reportStat(`lvl${a[1]}`, 1)
            })
          }
          handleGeometryArrow2 = (e) => {
            ;(Object.entries(e).forEach(([e, t]) => {
              let a = e.match(/level(\d+)_progress/)
              if (a && "1" === t) {
                let e = Number(a[1]) + 1
                this.reportStat(`lvl${e}`, 1)
              }
            }),
              e.global_score && this.reportStat("globalScore", Number(e.global_score)),
              e.total_deaths && this.reportStat("totalDeaths", Number(e.total_deaths)))
          }
          handleGangstaIsland = async (e) => {
            if ("product_chunks_pg" in e) {
              let t = ""
              for (let a = 0; a < Number(e.product_chunks_pg); a++) t += e[`product_chunk_pg_${a}`]
              JSON.parse(await r(t)).tileSaves.forEach((e, t) => {
                let a = e.values.filter((e) => e.unlocked).length
                a > 0 && this.reportStat(`level_${t + 1}_progress`, a)
              })
            }
          }
          handleRooftopRun = (e) => {
            ;(e.level && Number(e.level) > 0 && this.reportStat("level", Number(e.level)),
              e.coins && this.reportStat("coins", Number(e.coins)))
          }
          handleZombieSpaceEpisodeII = (e) => {
            if (!e.savesData) return
            let t = JSON.parse(e.savesData.replaceAll('{"Key":"","Value":0,"StrValue":""},', "")),
              a = t.keys.find((e) => "MONEY" === e.Key)?.Value
            a && this.reportStat("coins", Number(a))
            let i = t.keys.find((e) => "progress_level" === e.Key)?.Value
            i && i > 1 && this.reportStat("level", i - 1)
          }
          handleCrazyBusStation = (e) => {
            e.VIEW_LEVEL &&
              Number(e.VIEW_LEVEL) > 1 &&
              this.reportStat("level", Number(e.VIEW_LEVEL) - 1)
          }
          handleArcheryRagdoll = (e) => {
            if (!e.savedArcher) return
            let t = JSON.parse(e.savedArcher)
            ;(t?.level_player && t.level_player > 1 && this.reportStat("level", t.level_player - 1),
              t?.wave && t.wave > 1 && this.reportStat("waves", t.wave - 1))
          }
        }
      },
      63228: function (e, t, a) {
        "use strict"
        a.d(t, {
          I: function () {
            return i
          },
          c: function () {
            return n
          },
        })
        let i = "xiaomi_store"
        class n {
          enabled
          constructor({ queryParams: e }) {
            this.enabled = e.clid === i
          }
          listen(e) {
            this.enabled &&
              (this.handleLoadStart(), e.addEventListener("liveness", this.handleLoadReady))
          }
          handleLoadStart() {
            try {
              window.funmax?.loadStart?.()
            } catch (e) {
              console.error(e)
            }
          }
          handleLoadReady() {
            try {
              window.funmax?.loadReady?.()
            } catch (e) {
              console.error(e)
            }
          }
        }
      },
      17659: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          l: function () {
            return i
          },
        }),
          a(58267),
          a(54965),
          a(69024),
          a(15381),
          a(30774),
          a(8109),
          a(56705),
          a(55156),
          a(55120),
          a(85866),
          a(92426),
          a(37539),
          a(14894),
          a(34420),
          a(35055),
          a(56596),
          a(48933),
          a(20329),
          a(60387),
          a(81623),
          a(77237),
          a(64632),
          a(71090))
        class i {
          platform
          messageHandlers = new Set()
          initialized = !1
          constructor(e) {
            this.platform = e
          }
          get isAvailable() {
            return !!this.sdk
          }
          get sdk() {
            return "android" === this.platform
              ? window.top?.PlaygamaApp
              : "ios" === this.platform
                ? window.top?.webkit?.messageHandlers?.playgamaApp
                : void 0
          }
          init() {
            !this.initialized &&
              this.isAvailable &&
              ((this.initialized = !0),
              window.top?.addEventListener("message", (e) => {
                this.handleMessage(e.data)
              }))
          }
          handleMessage(e) {
            if (e && "object" == typeof e) for (let t of this.messageHandlers) t(e)
          }
          postMessage(e, t) {
            return this.sdk?.postMessage(JSON.stringify({ type: e, payload: t }))
          }
          addMessageHandler(e) {
            return (this.messageHandlers.add(e), () => this.removeMessageHandler(e))
          }
          removeMessageHandler(e) {
            this.messageHandlers.delete(e)
          }
          dispose() {
            this.messageHandlers.clear()
          }
        }
      },
      14410: function (e, t, a) {
        "use strict"
        a.d(t, {
          O: function () {
            return n
          },
          z: function () {
            return i
          },
        })
        let i = "https://discord.com/invite/r3mXe6kM8Z",
          n = "https://www.youtube.com/@playgama_games"
      },
      27990: function (e, t, a) {
        "use strict"
        function i(e) {
          try {
            let t = new URL(e || "")
            return (t.searchParams.set("utm_source", "share_link"), t.toString())
          } catch {
            return e || ""
          }
        }
        ;(a.d(t, {
          R: function () {
            return i
          },
        }),
          a(31430),
          a(50589),
          a(34512))
      },
      42316: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          e: function () {
            return o
          },
        }),
          a(31430),
          a(50589),
          a(34512))
        var i = a(3144),
          n = a(97178),
          r = a(8011),
          l = a(30232)
        function o(e) {
          let { VUE_APP_HOST_URL: t } = (0, n.U)(),
            a = (0, r.u)()
          return {
            exportUrl: (0, i.EW)(
              () => t + a({ name: l.V2.EXPORT_GAME_PAGE, params: { game: (0, i.BA)(e) } }),
            ),
            partnerUrl: (0, i.EW)(() => {
              try {
                let t = new URL("https://widgets.playgama.com/")
                return (
                  t.searchParams.set("gameSlug", (0, i.BA)(e)),
                  t.searchParams.set("utm_source", "partners_portal"),
                  t.toString()
                )
              } catch {
                return "https://widgets.playgama.com/"
              }
            }),
          }
        }
      },
      80217: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          f: function () {
            return f
          },
          h: function () {
            return h
          },
        }),
          a(17932),
          a(96466))
        var i = a(85692),
          n = a(3144),
          r = a(76915),
          l = a(8011),
          o = a(57550),
          s = a(62323),
          c = a(25547),
          u = a(30232),
          d = a(35556),
          p = a(87743),
          m = a(59176),
          g = a(47006),
          v = a(62237)
        let h = ({ hru: e, isExport: t }) => {
            let a = (0, p.C)(),
              m = (0, r.lq)(),
              h = (0, r.rd)(),
              { getCategoryRoute: f } = (0, l.j)(),
              { currentLocale: _ } = (0, o.Cf)(),
              { getGameByParam: b } = (0, g.M1)(),
              y = (0, n.EW)(() => "true" === m.query[d.nS]),
              w = (0, n.EW)(() => ["game-data", e.value, _.value, t, y.value]),
              k = (0, n.EW)(() => !!e.value),
              { data: C, suspense: E } = (0, i.I)({
                queryKey: w,
                enabled: k,
                queryFn: async () => {
                  let i = await b({
                    hru: e.value,
                    locale: _.value,
                    context: t ? "export" : "portal",
                    showHidden: y.value,
                  })
                  if ((0, v.ND)(i)) return { game: void 0, gameRedirect: i, gameCatInfo: void 0 }
                  i.game.gameUrlRedirectTarget &&
                    a.setHeaders({
                      "X-BFF-Redirect-Mechanism": i.game.gameUrlRedirectTarget.mechanism,
                      "X-BFF-Redirect-Reason": i.game.gameUrlRedirectTarget.reason,
                    })
                  let n = i.pathCategories.map((e) => ({
                      ...e,
                      href: f({ hru: e.hru, type: e.categoryType }),
                    })),
                    r = i.categoriesInfo.map((e) => ({
                      ...e,
                      href: f({ hru: e.hru, type: e.categoryType }),
                    }))
                  return {
                    game: i.game,
                    gameRedirect: null,
                    gameCatInfo: { pathCategories: n, categoriesInfo: r },
                  }
                },
                persister: (0, s.Vl)(c.N.HighCardinality),
              }),
              A = (0, n.EW)(() => C.value?.game),
              x = (0, n.EW)(() => C.value?.gameRedirect || null)
            return {
              game: A,
              gameRedirect: x,
              gameCatInfo: (0, n.EW)(() => C.value?.gameCatInfo),
              preloadGameData: E,
              processGameResponse: function () {
                if (x.value)
                  return (
                    !(function () {
                      if (!x.value) return
                      let { redirectTarget: e, status: i } = x.value,
                        n = ""
                      ;("game" === e.type
                        ? (n = h.resolve({
                            name: t ? u.V2.EXPORT_GAME_PAGE : u.V2.GAME_PAGE,
                            params: { game: e.game_hru },
                            query: m.query,
                          }).href)
                        : "category" === e.type
                          ? (n = h.resolve({
                              ...f({ hru: e.cat_hru, type: e.cat_type }),
                              query: m.query,
                            }).href)
                          : "main-page" === e.type &&
                            (n = h.resolve({ name: u.V2.MAIN, query: m.query }).href),
                        a.setHeaders({
                          "X-BFF-Redirect-Mechanism": e.mechanism,
                          "X-BFF-Redirect-Reason": e.reason,
                        }),
                        a.setPageStatus(i),
                        a.setTargetURL(n))
                    })(),
                    !1
                  )
                if (!A.value) throw 404
                return !0
              },
            }
          },
          f = ({ hru: e }) => {
            let t = (0, p.C)(),
              { currentLocale: a } = (0, o.Cf)(),
              { getGameRecommendations: r } = (0, g.M1)(),
              l = (0, n.EW)(() => [
                "game-recommendations",
                e.value,
                a.value,
                t.platform,
                t.rankingParams?.clusterId,
                t.rankingParams?.audience,
              ]),
              { data: u, suspense: d } = (0, i.I)({
                queryKey: l,
                queryFn: async () => {
                  try {
                    let i = await r({
                      hru: e.value,
                      types: [
                        "recommended",
                        "top_playgama",
                        "related",
                        "random",
                        "series",
                        "linked_categories",
                      ],
                      platform: t.platform,
                      rankingClusterId: t.rankingParams?.clusterId,
                      rankingAudience: t.rankingParams?.audience,
                      locale: a.value,
                    })
                    return {
                      recommendationsRaw: {
                        recommended: i.recommended?.slice(0, 12).map(m._v) || [],
                        top_playgama: i.top_playgama?.slice(0, 12).map(m._v) || [],
                        related: i.related?.slice(0, 12).map(m._v) || [],
                        random: i.random?.map(m._v) || [],
                        series: i.series?.slice(0, 12).map(m._v) || [],
                      },
                      linkedCategories: i.linked_categories?.map((e) => ({
                        hru: e.localizations[0].hru,
                        categoryType: e.category_type,
                        title: e.localizations[0].title,
                      })),
                    }
                  } catch {
                    return {
                      recommendationsRaw: {
                        recommended: [],
                        top_playgama: [],
                        related: [],
                        random: [],
                        series: [],
                      },
                      linkedCategories: void 0,
                    }
                  }
                },
                persister: (0, s.Vl)(c.N.HighCardinality),
              }),
              v = (0, n.EW)(() => u.value?.recommendationsRaw),
              h = (0, n.EW)(() => {
                if (v.value)
                  return {
                    recommended: v.value.recommended.map(m.fM),
                    top_playgama: v.value.top_playgama.map(m.fM),
                    related: v.value.related.map(m.fM),
                    random: v.value.random.map(m.fM),
                    series: v.value.series.map(m.fM),
                  }
              })
            return {
              recommendationsRaw: v,
              recommendations: h,
              linkedCategories: (0, n.EW)(() => u.value?.linkedCategories),
              preloadRecommendations: d,
            }
          }
      },
      98777: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          Cp: function () {
            return v
          },
          P$: function () {
            return _
          },
          L6: function () {
            return C
          },
          Dh: function () {
            return b
          },
          hi: function () {
            return k
          },
          WK: function () {
            return y
          },
          HM: function () {
            return g
          },
        }),
          a(17932),
          a(86204))
        var i = a(7620),
          n = a(59176)
        function r(e) {
          return 1 - Math.pow(1 - e, 3)
        }
        var l = a.p + "static/image/jogos-360-logo.6fc324cc.webp",
          o = a.p + "static/image/lagged-logo.17532524.webp",
          s = a.p + "static/image/play-games.3a754663.webp",
          c = a.p + "static/image/pockethaven.45b9e857.webp"
        a(96466)
        let u = "playgama-affiliate-progress-clip",
          d = "playgama-progress-clip",
          p = { pockethaven: c, "play-games": s, [i.eN]: s, [i.Ef]: o, [i.ci]: o, [i.dS]: l }
        class m {
          host
          progressBar
          clipRect
          logoSrc
          affiliate
          adTypes
          getTimeout
          durationMs
          hidden = !1
          animation
          constructor(e) {
            const {
              progressColor: t = "#aa76ff",
              logoId: a,
              affiliate: i = !1,
              adTypes: n = [],
              getTimeout: r,
            } = e || {}
            ;((this.affiliate = i),
              (this.adTypes = n),
              (this.getTimeout = r),
              (this.logoSrc = i && a ? p[a] : void 0),
              (this.host = document.createElement("div")))
            const l = this.host.attachShadow({ mode: "closed" }),
              o = document.createElement("style")
            o.textContent = `
            :host {
                position: fixed;
                inset: 0;
                z-index: 2147483647;
                display: none;
            }

            .overlay {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background: rgba(0, 0, 0, 0.9);
                padding: 20px;
                box-sizing: border-box;
            }

            .logo {
                margin-bottom: clamp(16px, 3vw, 32px);
                width: clamp(200px, 30vw, 400px);
                display: flex;
                justify-content: center;
            }

            .logo svg {
                width: 100%;
                height: auto;
            }

            .logo-img {
                width: 100%;
                height: auto;
                max-height: clamp(60px, 10vw, 120px);
                object-fit: contain;
            }

            .progress-track {
                width: clamp(200px, 30vw, 400px);
                height: clamp(3px, 0.5vw, 6px);
                background: rgba(255, 255, 255, 0.5);
                border-radius: 3px;
                overflow: hidden;
            }

            .progress-bar {
                height: 100%;
                width: 0%;
                background: ${t};
                border-radius: 3px;
                transition: none;
            }

            .powered-by {
                margin-top: clamp(12px, 2vw, 24px);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                font-size: clamp(10px, 1.5vw, 14px);
                color: rgba(255, 255, 255, 0.5);
                text-align: center;
            }
        `
            const s = document.createElement("div")
            s.className = "overlay"
            const c = document.createElement("div")
            ;((c.className = "logo"),
              (c.innerHTML = (function (e, t, a) {
                if (!a) {
                  let e
                  return (
                    (e = [
                      "M0 40.5238V7.66667H12.5415C19.4665 7.66667 25.0829 13.3071 25.0829 20.2619C25.0829 27.2167 19.4665 32.8571 12.5415 32.8571H8.17921V40.5238H0ZM11.7235 15.3333H8.17921V25.1905H11.7235C14.6681 25.1905 16.6311 23 16.6311 20.2619C16.6311 17.5238 14.6681 15.3333 11.7235 15.3333Z",
                      "M38.0602 32.8571H29.5538V0H38.0602V32.8571Z",
                      "M67.5991 32.8571H55.0576C48.1325 32.8571 42.5161 27.2167 42.5161 20.2619C42.5161 13.3071 48.1325 7.66667 55.0576 7.66667H67.5991V32.8571ZM55.8755 25.1905H59.4198V15.3333H55.8755C52.931 15.3333 50.968 17.5238 50.968 20.2619C50.968 23 52.931 25.1905 55.8755 25.1905Z",
                      "M84.7204 46H73.3786V38.3333H84.1752C87.0651 38.3333 89.1917 36.1976 89.1917 33.2952V32.8571H73.3786V7.66667H81.5578V25.1905H89.1917V7.66667H97.3709V33.8429C97.3709 40.8524 92.0272 46 84.7204 46Z",
                      "M114.487 7.66667H128.119V33.35C128.119 40.6881 122.83 46 115.523 46H104.672V37.7857H115.469C118.032 37.7857 119.94 35.869 119.94 33.2952V32.8571H114.487C107.562 32.8571 101.946 27.2167 101.946 20.2619C101.946 13.3071 107.562 7.66667 114.487 7.66667ZM110.398 20.2619C110.398 23 112.361 25.1905 115.305 25.1905H119.94V15.3333H115.305C112.361 15.3333 110.398 17.5238 110.398 20.2619Z",
                      "M157.538 32.8571H144.997C138.072 32.8571 132.456 27.2167 132.456 20.2619C132.456 13.3071 138.072 7.66667 144.997 7.66667H157.538V32.8571ZM145.815 25.1905H149.359V15.3333H145.815C142.87 15.3333 140.907 17.5238 140.907 20.2619C140.907 23 142.87 25.1905 145.815 25.1905Z",
                      "M171.497 32.8571H163.318V7.66667H188.674C194.835 7.66667 199.852 12.7048 199.852 18.8929V32.8571H191.673V18.3452C191.673 16.7024 190.309 15.3333 188.674 15.3333H185.674V32.8571H177.495V15.3333H171.497V32.8571Z",
                      "M229 32.8571H216.459C209.533 32.8571 203.917 27.2167 203.917 20.2619C203.917 13.3071 209.533 7.66667 216.459 7.66667H229V32.8571ZM217.276 25.1905H220.821V15.3333H217.276C214.332 15.3333 212.369 17.5238 212.369 20.2619C212.369 23 214.332 25.1905 217.276 25.1905Z",
                    ]
                      .map((e) => `<path d="${e}"/>`)
                      .join("")),
                    `<svg viewBox="0 0 229 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id="${d}">
                <rect x="0" y="0" width="0%" height="46"/>
            </clipPath>
        </defs>
        <g fill="rgba(255, 255, 255, 0.2)">${e}</g>
        <g fill="${t}" clip-path="url(#${d})">${e}</g>
    </svg>`
                  )
                }
                if (!e) {
                  let e, a
                  return (
                    (e = [
                      "M0 42.7052V14.1402H10.9619C17.0147 14.1402 21.9238 19.0438 21.9238 25.0901C21.9238 31.1364 17.0147 36.0401 10.9619 36.0401H7.14905V42.7052H0ZM10.247 20.8053H7.14905V29.3749H10.247C12.8206 29.3749 14.5364 27.4705 14.5364 25.0901C14.5364 22.7097 12.8206 20.8053 10.247 20.8053Z",
                      "M32.5197 36.0401H25.0847V7.47497H32.5197V36.0401Z",
                      "M57.5914 36.0401H46.6295C40.5766 36.0401 35.6676 31.1364 35.6676 25.0901C35.6676 19.0438 40.5766 14.1402 46.6295 14.1402H57.5914V36.0401ZM47.3444 29.3749H50.4423V20.8053H47.3444C44.7707 20.8053 43.055 22.7097 43.055 25.0901C43.055 27.4705 44.7707 29.3749 47.3444 29.3749Z",
                      "M71.8095 47.4661H61.8961V40.8009H71.3329C73.8589 40.8009 75.7176 38.9442 75.7176 36.4209V36.0401H61.8961V14.1402H69.0452V29.3749H75.7176V14.1402H82.8667V36.897C82.8667 42.9909 78.196 47.4661 71.8095 47.4661Z",
                      "M97.0803 14.1402H108.995V36.4685C108.995 42.8481 104.372 47.4661 97.9859 47.4661H88.5015V40.3248H97.9382C100.178 40.3248 101.846 38.6585 101.846 36.4209V36.0401H97.0803C91.0275 36.0401 86.1184 31.1364 86.1184 25.0901C86.1184 19.0438 91.0275 14.1402 97.0803 14.1402ZM93.5058 25.0901C93.5058 27.4705 95.2216 29.3749 97.7952 29.3749H101.846V20.8053H97.7952C95.2216 20.8053 93.5058 22.7097 93.5058 25.0901Z",
                      "M133.962 36.0401H123.001C116.948 36.0401 112.039 31.1364 112.039 25.0901C112.039 19.0438 116.948 14.1402 123.001 14.1402H133.962V36.0401ZM123.715 29.3749H126.813V20.8053H123.715C121.142 20.8053 119.426 22.7097 119.426 25.0901C119.426 27.4705 121.142 29.3749 123.715 29.3749Z",
                      "M145.416 36.0401H138.267V14.1402H160.429C165.815 14.1402 170.2 18.5201 170.2 23.8999V36.0401H163.051V23.4238C163.051 21.9956 161.859 20.8053 160.429 20.8053H157.808V36.0401H150.659V20.8053H145.416V36.0401Z",
                      "M194.93 36.0401H183.968C177.915 36.0401 173.006 31.1364 173.006 25.0901C173.006 19.0438 177.915 14.1402 183.968 14.1402H194.93V36.0401ZM184.683 29.3749H187.781V20.8053H184.683C182.109 20.8053 180.393 22.7097 180.393 25.0901C180.393 27.4705 182.109 29.3749 184.683 29.3749Z",
                      "M230.243 20.8053V29.3749H227.145C224.572 29.3748 222.856 27.4705 222.856 25.0901C222.856 22.7097 224.572 20.8053 227.145 20.8053H230.243Z",
                      "M255.901 20.8053V29.3749H252.803C250.23 29.3749 248.514 27.4705 248.514 25.0901C248.514 22.7097 250.23 20.8053 252.803 20.8053H255.901Z",
                    ]
                      .map((e) => `<path d="${e}"/>`)
                      .join("")),
                    (a =
                      '<path fill-rule="evenodd" clip-rule="evenodd" d="M275.03 48.0267H205.012V0H275.03V48.0267ZM226.43 14.1402C220.377 14.1402 215.468 19.0438 215.468 25.0901C215.468 31.1363 220.377 36.0401 226.43 36.0401H237.392V14.1402H226.43ZM255.901 7.47497V14.1402H252.088C246.036 14.1402 241.127 19.0438 241.127 25.0901C241.127 31.1363 246.036 36.0401 252.088 36.0401H263.05V7.47497H255.901Z"/>'),
                    `<svg viewBox="0 0 276 49" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id="${u}">
                <rect x="0" y="0" width="0%" height="49"/>
            </clipPath>
        </defs>
        <g fill="rgba(255, 255, 255, 0.2)">${e}${a}</g>
        <g fill="${t}" clip-path="url(#${u})">${e}${a}</g>
    </svg>`
                  )
                }
                return `<img src="${e}" alt="affiliate-progress-logo" class="logo-img" />`
              })(this.logoSrc, t, this.affiliate)))
            const m = document.createElement("div")
            if (
              ((m.className = "progress-track"),
              (this.progressBar = document.createElement("div")),
              (this.progressBar.className = "progress-bar"),
              m.appendChild(this.progressBar),
              s.appendChild(c),
              this.logoSrc)
            ) {
              s.appendChild(m)
              const e = document.createElement("div")
              ;((e.className = "powered-by"),
                (e.textContent = "Ads powered by Playgama"),
                s.appendChild(e))
            }
            ;(l.appendChild(o),
              l.appendChild(s),
              document.body.appendChild(this.host),
              this.affiliate
                ? this.logoSrc
                  ? (this.clipRect = null)
                  : (this.clipRect = l.querySelector(`#${u} rect`))
                : (this.clipRect = l.querySelector(`#${d} rect`)))
          }
          updateProgress(e) {
            let t = Math.min(e, 100)
            this.logoSrc
              ? (this.progressBar.style.width = `${t}%`)
              : this.clipRect && this.clipRect.setAttribute("width", `${t}%`)
          }
          setAnimation(e) {
            ;(this.durationMs !== e &&
              ((this.durationMs = e),
              this.animation && (this.animation.cancel(), (this.animation = void 0))),
              this.animation ||
                (this.animation = (function (e) {
                  let { slowDuration: t, onProgress: a, shouldStop: i } = e,
                    n = null,
                    l = 0
                  function o() {
                    null !== n && (cancelAnimationFrame(n), (n = null))
                  }
                  function s(e) {
                    ;((l = e), a(e))
                  }
                  return {
                    start: function () {
                      let e = Date.now(),
                        a = () => {
                          if (i?.()) return
                          let o = Date.now() - e
                          ;(o < 2e3 ? s(70 * r(o / 2e3)) : s(70 + 30 * Math.min((o - 2e3) / t, 1)),
                            l < 100 && (n = requestAnimationFrame(a)))
                        }
                      n = requestAnimationFrame(a)
                    },
                    finish: function (e) {
                      o()
                      let t = l,
                        a = Date.now(),
                        i = () => {
                          let l = Math.min((Date.now() - a) / 100, 1)
                          ;(s(t + (100 - t) * r(l)),
                            l < 1 ? (n = requestAnimationFrame(i)) : (s(100), e?.()))
                        }
                      n = requestAnimationFrame(i)
                    },
                    cancel: o,
                    getProgress: () => l,
                  }
                })({
                  slowDuration: this.durationMs,
                  onProgress: (e) => this.updateProgress(e),
                  shouldStop: () => this.hidden,
                })))
          }
          toggleVisibility(e) {
            ;((this.hidden = !e), (this.host.style.display = e ? "block" : "none"))
          }
          show(e) {
            ;(!this.adTypes.length || this.adTypes.includes(e)) &&
              (this.setAnimation(this.getTimeout?.(e) ?? 0),
              this.toggleVisibility(!0),
              this.animation?.start())
          }
          async destroy() {
            this.hidden ||
              (this.animation?.finish(), await (0, n.O1)(100), this.toggleVisibility(!1))
          }
        }
        function g(e, t) {
          return t.categoriesInfo.filter((t) => t.categoryType === e)
        }
        let v =
          "fullscreen;accelerometer;camera;clipboard-read;clipboard-write;screen-wake-lock;speaker-selection;web-share;geolocation;gyroscope;microphone;xr-spatial-tracking;autoplay;encrypted-media;picture-in-picture;payment;publickey-credentials-get;publickey-credentials-create;storage-access;attribution-reporting;browsing-topics"
        function h(e, t) {
          return e?.developer && e?.developer !== "Playgama"
            ? t("headMetaGame.developer", { developer: e?.developer })
            : ""
        }
        function f(e, t, a) {
          return e?.updatedAt
            ? t("headMetaGame.updateDate", {
                date: new Date(e.updatedAt).toLocaleDateString(a, {
                  month: "short",
                  year: "numeric",
                }),
              })
            : ""
        }
        function _(e, t) {
          return (
            e?.meta_description?.trim() ||
            `${t("headMetaGame.description", { title: e?.title ?? "" })} ${h(e, t)}`.trim()
          )
        }
        function b(e, t, a) {
          let i = e?.meta_title?.trim()
          return (
            i ||
            (a
              ? `${t("headMetaGame.titleBold", { title: e?.title ?? "" })} ${h(e, t)}`.trim()
              : `${t("headMetaGame.title", { title: e?.title ?? "" })} ${h(e, t)}`.trim())
          )
        }
        function y(e, t, a, i) {
          let n = e?.meta_title?.trim()
          return (
            n ||
            (a
              ? `${t("headMetaGame.titleBold", { title: e?.title ?? "" })} ${f(e, t, i)}`.trim()
              : `${t("headMetaGame.title", { title: e?.title ?? "" })} ${f(e, t, i)}`.trim())
          )
        }
        let w = { [i.dS]: "#1168e8", [i.eN]: "#38b646" }
        function k(e) {
          return new m({
            ...e,
            progressColor: w[e.clid],
            logoId: e.adConfig?.isCustomized ? e.clid : "",
          })
        }
        let C = 3e3
      },
      62323: function (e, t, a) {
        "use strict"
        a.d(t, {
          $F: function () {
            return r
          },
          Vl: function () {
            return l
          },
        })
        var i = a(3144)
        let n = Symbol("query-persister-map"),
          r = (e) => ({
            install(t) {
              t.provide(n, e)
            },
          }),
          l = (e) => {
            let t = (0, i.WQ)(n)
            return t?.[e]?.persister.persisterFn
          }
      },
      25547: function (e, t, a) {
        "use strict"
        a.d(t, {
          K: function () {
            return i
          },
          N: function () {
            return n
          },
        })
        let i = {
            shallow: !0,
            refetchOnWindowFocus: !1,
            refetchOnMount: !1,
            refetchOnReconnect: !1,
          },
          n = {
            LowCardinality: "LowCardinality",
            MediumCardinality: "MediumCardinality",
            HighCardinality: "HighCardinality",
          }
      },
      78811: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          G: function () {
            return h
          },
        }),
          a(17932),
          a(19329),
          a(52093))
        var i = a(85692),
          n = a(3144),
          r = a(8011),
          l = a(35584),
          o = a(57550),
          s = a(62323),
          c = a(25547),
          u = a(30232),
          d = a(73577),
          p = a(59176),
          m = a(47006)
        let g = {
            noAdsConfigInGam: {},
            promoCategoriesList: [],
            menuHighlightCategoriesList: [],
            contentCategoriesList: [],
            menuCategoriesList: [],
            totalGamesCount: null,
          },
          v = ["trending_now", "top_playgama", "new"],
          h = () => {
            let e = (0, l.q)(),
              { currentLocale: t } = (0, o.Cf)(),
              { getCategoryRoute: a } = (0, r.j)(),
              { getMainCategories: h } = (0, m.M1)(),
              f = (0, n.EW)(() => y.value || g),
              _ = (0, n.EW)(() => ["general-data", t.value]),
              b = (0, s.Vl)(c.N.LowCardinality),
              { data: y, suspense: w } = (0, i.I)({
                queryKey: _,
                queryFn: () =>
                  h(t.value).then((t) =>
                    (function (t) {
                      let i = [],
                        n = [],
                        { categories: r, noAdsConfigInGam: l } = t,
                        { totalGamesCount: o } = t
                      r.forEach(({ id: e, hru: t, title: r }) => {
                        d.bH.includes(e) &&
                          (v.includes(e)
                            ? i.push({ id: e, title: r, location: a({ hru: t, type: "category" }) })
                            : n.push({
                                id: e,
                                title: r,
                                location: a({ hru: t, type: "category" }),
                              }))
                      })
                      let s = [...i, ...n]
                      return {
                        promoCategoriesList: [
                          ...(0, p.k4)(n.slice()).slice(0, Math.min(20, n.length)),
                          {
                            id: "all_games",
                            title: e("navigation.all_games"),
                            location: { name: u.V2.ALL_CATEGORIES },
                          },
                        ],
                        menuHighlightCategoriesList: i,
                        contentCategoriesList: s,
                        menuCategoriesList: n,
                        totalGamesCount: o,
                        noAdsConfigInGam: l,
                      }
                    })(t),
                  ),
                persister: b,
                meta: { skipInCacheDetails: !0 },
              })
            return { mainData: f, suspense: w }
          }
      },
      78494: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          F: function () {
            return m
          },
        }),
          a(17932),
          a(96466))
        var i = a(85692),
          n = a(3144),
          r = a(8011)
        a(17637)
        var l = a(57550),
          o = a(87743),
          s = a(59176),
          c = a(47006),
          u = a(62323),
          d = a(25547)
        let p = { id: "", title: "", location: { name: "" }, games: [] },
          m = (e = {}) => {
            let { currentLocale: t } = (0, l.Cf)(),
              { getCategoryRoute: a } = (0, r.j)(),
              { getGamesByCategories: m } = (0, c.M1)(),
              g = (0, o.C)(),
              v = (0, n.EW)(() => [
                "trending_now",
                t.value,
                g.platform,
                g.isDebugMode,
                g.rankingParams?.clusterId,
                g.rankingParams?.audience,
                ...(e.additionalKeys?.value || []),
              ]),
              h = (0, u.Vl)(d.N.MediumCardinality),
              f = (0, n.EW)(() => b.value || p),
              _ = (0, n.EW)(() => f.value.games.map(s.fM)),
              { data: b, suspense: y } = (0, i.I)({
                queryKey: v,
                queryFn: () =>
                  m({
                    categoriesIds: ["trending_now"],
                    pagination: { page: 1, pageSize: 30 },
                    platform: g.platform,
                    withDebugInfo: g.isDebugMode,
                    rankingClusterId: g.rankingParams?.clusterId,
                    rankingAudience: g.rankingParams?.audience,
                    locale: t.value,
                  }).then((e) =>
                    (function (e) {
                      let [t] = e.categories.map(({ id: e, hru: t, title: i, games: n }) => ({
                        id: e,
                        title: i,
                        location: a({ hru: t, type: "category" }),
                        games: (0, s.k4)(n.map(s._v)).slice(0, 16),
                      }))
                      return t
                    })(e),
                  ),
                enabled: e.enabled,
                staleTime: 3e5,
                persister: h,
              })
            return { unzippedTrendingWithGames: _, currentTrending: f, preloadTrendingData: y }
          }
      },
      30232: function (e, t, a) {
        "use strict"
        a.d(t, {
          V2: function () {
            return i
          },
          nH: function () {
            return n
          },
        })
        let i = {
            ROOT: "root",
            MAIN: "main",
            GAME_PAGE: "game-page",
            EXPORT_GAME_PAGE: "export-game-page",
            WIDGET_GAME_PAGE: "widget-game-page",
            CATEGORY: "category",
            TAG: "tag",
            DEVELOPER: "developer",
            SERIES: "series",
            CONFIDENTIAL: "confidential",
            TERMS_OF_USE: "termsofuse",
            TERMS_OF_USE_MCM: "mcm-termsofuse",
            LICENSE: "license",
            PARTNERS_API: "partners-api",
            CONTACTS: "contacts",
            PROFILE: "profile",
            SHOP: "shop",
            ALL_CATEGORIES: "all-categories-page",
            ALL_TAGS: "all-tags-page",
            ALL_SERIES: "all-series-page",
            TAKEDOWN_NOTICE: "takedown-notice",
            RANDOM_GAME: "random-game",
            MY_GAMES: "my-games",
            DIGITAL_SERVICE_ACT: "digital-service-act",
            ABOUT_US: "about-us",
            WHITE_LABEL: "white-label",
            WHITE_LABEL_2PAGE: "white-label-2page",
            WHITE_LABEL_2PAGE_CATEGORY: "white-label-2page-category",
            WHITE_LABEL_2PAGE_GAME: "white-label-2page-game",
            WHITE_LABEL_2PAGE_LAUNCH: "white-label-2page-launch",
            SEARCH: "search",
            PLAYGAMA_AUTH_CONSENT: "playgama-auth-consent",
          },
          n = [i.GAME_PAGE, i.EXPORT_GAME_PAGE, i.WIDGET_GAME_PAGE]
        i.EXPORT_GAME_PAGE
      },
      29023: function (e, t, a) {
        "use strict"
        a.d(t, {
          F_: function () {
            return n
          },
          Tl: function () {
            return d
          },
          VA: function () {
            return o
          },
          l1: function () {
            return c
          },
          lw: function () {
            return p
          },
          qe: function () {
            return l
          },
          qg: function () {
            return s
          },
          w7: function () {
            return u
          },
          xo: function () {
            return r
          },
        })
        var i = a(30232)
        let n = "/developers",
          r = "/blog",
          l = "/business ",
          o = (e) => ({ title: e("navigation.privacy_policy"), to: { name: i.V2.CONFIDENTIAL } }),
          s = (e) => ({
            title: e("navigation.about_us"),
            to: { name: i.V2.ABOUT_US, params: { locale: "" } },
            target: "_blank",
          }),
          c = [
            "https://www.linkedin.com/company/playgama",
            "https://www.instagram.com/playgama/",
            "https://www.facebook.com/playgamagames",
            "https://x.com/PlaygamaCom",
            "https://bsky.app/profile/playgama.bsky.social",
            "https://www.youtube.com/@playgama_games",
            "https://www.trustpilot.com/review/playgama.com",
          ],
          u = (e) => [
            {
              title: e("socials.playgamaForDevs"),
              icon: "discord",
              externalTo: "https://discord.com/invite/pzqd2upxr8",
              target: "_blank",
            },
            {
              title: "Playgama Bridge",
              icon: "telegram",
              externalTo: "https://t.me/playgama_bridge",
              target: "_blank",
            },
            {
              title: "LinkedIn",
              icon: "linked-in",
              externalTo: "https://www.linkedin.com/company/playgama",
              target: "_blank",
            },
            {
              title: "Facebook",
              icon: "facebook",
              externalTo: "https://www.facebook.com/playgamagames",
              target: "_blank",
            },
            {
              title: "X.com (ex-Twitter)",
              icon: "twitter",
              externalTo: "https://x.com/PlaygamaCom",
              target: "_blank",
            },
            {
              title: "Bluesky",
              icon: "bluesky",
              externalTo: "https://bsky.app/profile/playgama.bsky.social",
              target: "_blank",
            },
            {
              title: "Github",
              icon: "github",
              externalTo: "https://github.com/playgama/bridge",
              target: "_blank",
            },
          ],
          d = (e) => [
            s(e),
            { title: e("navigation.for_developers"), externalTo: n, target: "_blank" },
            { title: e("navigation.for_business"), externalTo: l, target: "_blank" },
            o(e),
            { title: e("navigation.contact_us"), to: { name: i.V2.CONTACTS } },
            { title: e("navigation.takedown_notice"), to: { name: i.V2.TAKEDOWN_NOTICE } },
            { title: e("navigation.terms_of_use"), to: { name: i.V2.TERMS_OF_USE } },
            { title: e("navigation.digital_service_act"), to: { name: i.V2.DIGITAL_SERVICE_ACT } },
          ],
          p = (e) => ({
            allGames: {
              title: e("navigation.all_games"),
              icon: "all_games",
              to: { name: i.V2.ALL_CATEGORIES },
            },
            allSeries: {
              title: e("navigation.all_series"),
              icon: "all_series",
              to: { name: i.V2.ALL_SERIES },
            },
            allTags: {
              title: e("navigation.all_tags"),
              icon: "all_tags",
              to: { name: i.V2.ALL_TAGS },
            },
          })
      },
      35556: function (e, t, a) {
        "use strict"
        a.d(t, {
          Iz: function () {
            return c
          },
          K4: function () {
            return r
          },
          Ov: function () {
            return l
          },
          jj: function () {
            return i
          },
          nD: function () {
            return n
          },
          nS: function () {
            return s
          },
          s1: function () {
            return p
          },
          z5: function () {
            return o
          },
          zM: function () {
            return u
          },
        })
        let i = "widget_id",
          n = "export_mode",
          r = "use_gd_ads",
          l = "autoplay",
          o = "backend_flags",
          s = "show_hidden",
          c = "payload",
          u = "game_id",
          d = "redirCnt",
          p = (e) => {
            let t = parseInt(e.searchParams.get(d) || "0")
            if (!(t > 5)) return (e.searchParams.set(d, (t + 1).toString()), e)
          }
      },
      37361: function (e, t, a) {
        "use strict"
        a.d(t, {
          l: function () {
            return s
          },
        })
        var i = a(20211),
          n = a(3144)
        a(52093)
        var r = a(59176)
        a(3155)
        let l = new (a(11841).d)("detector")
        async function o(e) {
          return (
            await (0, r.HD)(),
            new Promise((t) => {
              let a = document.createElement("script")
              ;((a.type = "text/javascript"),
                (a.src = e),
                (a.async = !0),
                (a.onerror = () => t("enabled")),
                (a.onload = () => t("disabled")),
                document.head.appendChild(a))
            })
          )
        }
        let s = (0, i.nY)("adBlock", () => {
          let e = (0, n.KR)("unknown")
          async function t(t) {
            e.value = await (function ({ logger: e, host: t } = {}) {
              let a = Promise.race([
                  new Promise((e) => {
                    let t = window.googlefc ?? {}
                    ;((window.googlefc = t),
                      (t.callbackQueue = t.callbackQueue ?? []),
                      t.callbackQueue.push({
                        AD_BLOCK_DATA_READY: () => {
                          let t = window.googlefc?.getAdBlockerStatus?.() ?? 0
                          e(1 === t || 2 === t ? "enabled" : "disabled")
                        },
                      }))
                  }),
                  (0, r.O1)(5e3).then(() => "unknown"),
                ]),
                i = o(`${t || ""}/cms_ads.js`)
              return (
                Promise.all([a, i]).then(([t, a]) => {
                  let i,
                    n = "enabled" === t,
                    r = "enabled" === a
                  ;((i = n && r ? "both" : n ? "fc" : r ? "script" : "none"),
                    l.debug("adblock", { detector: i, fcTimedOut: "unknown" === t }),
                    e?.({ detector: i, fcTimedOut: "unknown" === t }))
                }),
                new Promise((e) => {
                  let t,
                    n,
                    r = () => {
                      "enabled" === t || "enabled" === n
                        ? e("enabled")
                        : void 0 !== t &&
                          void 0 !== n &&
                          ("disabled" === t && "disabled" === n ? e("disabled") : e("unknown"))
                    }
                  ;(a.then((e) => {
                    ;((t = e), r())
                  }),
                    i.then((e) => {
                      ;((n = e), r())
                    }))
                })
              )
            })({ logger: t })
          }
          return { adBlockStatus: e, detectAdBlockStatus: t }
        })
      },
      86037: function (e, t, a) {
        "use strict"
        a.d(t, {
          a: function () {
            return v
          },
        })
        var i = a(20211),
          n = a(3144),
          r = a(76915),
          l = a(7620),
          o = a(17637),
          s = a(78811),
          c = a(30232),
          u = a(26635),
          d = a(87743),
          p = a(59103),
          m = a(79316),
          g = a(92730)
        let v = (0, i.nY)("ad-disabled", () => {
          let e = (0, d.C)(),
            t = (0, u.N)(),
            a = (0, s.G)(),
            v = (0, g.k)(),
            h = (0, p.l)(),
            f = (0, m.G)(),
            _ = (0, n.EW)(() => a.mainData.value.noAdsConfigInGam),
            { user: b } = (0, i.bP)(v),
            {
              isPortalEnv: y,
              query: w,
              clid: k,
              isExportOnPortal: C,
              isExportOnWidget: E,
            } = (0, i.bP)(e),
            { clidConfig: A } = (0, l.ns)(),
            x = (0, r.lq)(),
            R = (0, n.EW)(() => !C.value && !E.value),
            T = (0, n.EW)(() => x.name === c.V2.EXPORT_GAME_PAGE),
            S = (0, n.EW)(
              () =>
                !!(T.value && w.value?.use_no_ads) ||
                k.value === o.Sx.twa ||
                (!!A.value.adDisabled && !!R.value && !!T.value) ||
                $.value,
            ),
            $ = (0, n.KR)(!1),
            L = (0, n.KR)(0)
          function P() {
            let e = b.value?.adsDisabledUntil,
              t = y && e ? new Date(e).getTime() - Date.now() : 0
            ;(($.value = t > 0), (L.value = $.value ? t : 0))
          }
          "u" > typeof window &&
            (P(),
            setInterval(P, 6e4),
            (0, n.wB)(() => b.value?.adsDisabledUntil, P),
            (0, n.wB)(
              () => S.value,
              () => t.adService?.shutdown(),
            ))
          let M = (0, n.KR)({ isOpened: !1, isTopUp: !1, adPlacement: void 0 }),
            I = (0, n.KR)(!1),
            O = (0, n.KR)(null)
          async function B(e) {
            f.logEvent({ event: "custom_event", eventName: "open_purchase_window", adPlacement: e })
            try {
              if (await v.authorizeUser("disable-ad-modal"))
                return (
                  (M.value = { isOpened: !0, isTopUp: $.value, adPlacement: e }),
                  new Promise((e) => {
                    O.value = e
                  })
                )
            } catch {}
            return null
          }
          return {
            isAdDisabled: S,
            isAdFreeActive: $,
            remainingMsWithoutAd: L,
            disableAd: async function (t) {
              M.value.isOpened = !1
              try {
                let a = await h.setPaymentModalOrder({
                  type: "disable-ad-order",
                  amount: _.value.basic[t],
                  durationInDays: t,
                  attributes: {
                    clid: e.clid,
                    widgetId: e.widgetId,
                    userAcquisitionParams: e.userAcquisitionParams30d,
                  },
                  externalId: `no-ads-${t}-days-${Date.now()}`,
                  adPlacement: M.value.adPlacement,
                  subscription: "basic-days",
                  isTopUp: M.value.isTopUp,
                })
                ;(O.value?.(a ?? null), (O.value = null), (I.value = !0))
              } catch {
                ;(O.value?.(null), (O.value = null))
              }
              M.value.adPlacement = void 0
            },
            adDisabledModalOptions: M,
            openDisabledAdModal: B,
            closeAdDisabledModal: function () {
              let e = $.value
                ? {
                    data: { status: "PAID", orderId: "", amount: 0 },
                    errors: [],
                    originalResponse: null,
                  }
                : null
              ;(O.value?.(e),
                (O.value = null),
                (M.value = { isOpened: !1, isTopUp: !1, adPlacement: void 0 }))
            },
            isAdFinalScreenVisible: I,
            closeNoAdFinalScreen: function () {
              I.value = !1
            },
            checkAdDisabled: P,
            pricesConfig: _,
          }
        })
      },
      26635: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          N: function () {
            return I
          },
        }),
          a(17932),
          a(39452),
          a(96466),
          a(19329))
        var i = a(20211),
          n = a(3144),
          r = a(76915),
          l = a(49384),
          o = a(97178),
          s = a(7620),
          c = a(17637)
        ;(a(58267),
          a(54965),
          a(69024),
          a(15381),
          a(30774),
          a(8109),
          a(56705),
          a(55156),
          a(55120),
          a(85866),
          a(92426),
          a(37539),
          a(14894),
          a(34420),
          a(35055),
          a(56596),
          a(48933),
          a(20329),
          a(60387),
          a(81623),
          a(77237),
          a(64632),
          a(71090),
          a(88370),
          a(88626),
          a(30112),
          a(87197),
          a(40160),
          a(2946),
          a(80487),
          a(98955),
          a(19798),
          a(51612),
          a(93402),
          a(35740),
          a(3299),
          a(82913),
          a(61319),
          a(70482),
          a(86603),
          a(76995),
          a(11546),
          a(86204),
          a(50616),
          a(58647))
        var u = a(59176)
        async function d(e) {
          if (document.hidden || "visible" !== document.visibilityState) return !1
          await (0, u.HD)()
          let t = document.getElementById(e)
          if (!t) return !1
          let a = t.getBoundingClientRect()
          if (0 === a.width || 0 === a.height) return !1
          let i = window.innerWidth,
            n = window.innerHeight,
            r = Math.max(0, a.left),
            l = Math.max(0, a.top)
          if (
            (Math.max(0, Math.min(i, a.right) - r) * Math.max(0, Math.min(n, a.bottom) - l)) /
              (a.width * a.height) <
            0.51
          )
            return !1
          let o = a.left + a.width / 2,
            s = a.top + a.height / 2,
            c = document.elementFromPoint(o, s)
          return c === t || t.contains(c)
        }
        var p = a(3155)
        a(33384)
        let m = "ad_daily_calls"
        function g() {
          let e = new Date(),
            t = e.getFullYear(),
            a = String(e.getMonth() + 1).padStart(2, "0"),
            i = String(e.getDate()).padStart(2, "0")
          return `${t}-${a}-${i}`
        }
        var v = a(50370),
          h = a(11841)
        class f extends EventTarget {
          type = "OUT_OF_PAGE"
          placement
          id
          state = "loading"
          #e
          #t
          #a
          #i
          constructor({ placement: e, onDestroy: t, loader: a, timeout: i }) {
            ;(super(),
              (this.placement = e),
              (this.id = crypto.randomUUID()),
              (this.#t = t),
              (this.#a = a),
              window.setTimeout(() => {
                "loading" === this.state &&
                  (this.#a
                    ? this.#a?.destroy().then(() => {
                        ;(this.triggerEmpty("loader-timeout"), this.destroy())
                      })
                    : (this.triggerEmpty("loader-timeout"), this.destroy()))
              }, i),
              this.#a?.show(e),
              (this.#i = new h.d("public-banner", e)))
          }
          dispatch(e, t) {
            this.dispatchEvent(new CustomEvent(e, { detail: t }))
          }
          addEventListener(...e) {
            super.addEventListener(...e)
          }
          removeEventListener(...e) {
            super.removeEventListener(...e)
          }
          setInternalBanner(e) {
            ;((this.#e = e),
              e.addEventListener("showing", () => this.triggerShowing()),
              e.addEventListener("closed", (e) => this.triggerClosed(e.detail)),
              e.addEventListener("rewarded", (e) => this.triggerRewarded(e.detail)),
              e.addEventListener("viewable", () => this.triggerViewable()),
              e.addEventListener("timer", (e) => this.triggerTimer(e.detail?.secondsLeft)),
              e.addEventListener("pod_counter", (e) =>
                this.triggerPodCounter(e.detail?.adPosition, e.detail?.totalAds),
              ),
              e.addEventListener("interaction_suspected", () => {
                this.gracefullyDestroy("tab_left")
              }),
              e.addEventListener("clicked", () => {
                ;(this.triggerClicked(),
                  "appProvider" !== e.provider && this.gracefullyDestroy("clicked"))
              }))
          }
          get adUnit() {
            return this.#e?.adUnit
          }
          get instreamDuration() {
            return this.#e?.instreamDuration
          }
          get watchedDuration() {
            return this.#e?.watchedDuration
          }
          get provider() {
            return this.#e?.provider
          }
          show() {
            this.#a
              ? this.#a.destroy().then(() => {
                  this.#e?.show()
                })
              : this.#e?.show()
          }
          destroy() {
            ;(this.#t(), this.#e?.destroy(), (this.#e = void 0))
          }
          gracefullyDestroy(e) {
            "showing" === this.state
              ? ("rewarded" === this.placement && this.triggerRewarded({}),
                this.triggerClosed({ reason: e }))
              : this.triggerEmpty()
          }
          setPlaybackState(e) {
            this.#e?.setPlaybackState(e)
          }
          triggerReady() {
            "ready" !== this.state &&
              (this.#i.debug(`${this.state} → ready`),
              (this.state = "ready"),
              this.dispatch("ready"))
          }
          triggerShowing() {
            "showing" !== this.state &&
              (this.#i.debug(`${this.state} → showing`),
              (this.state = "showing"),
              this.dispatch("rendered"))
          }
          triggerViewable() {
            ;(this.#i.debug("viewable"), this.dispatch("viewable"))
          }
          triggerClicked() {
            this.dispatch("clicked")
          }
          triggerTimer(e) {
            this.dispatch("timer", { secondsLeft: e })
          }
          triggerPodCounter(e, t) {
            this.dispatch("pod_counter", { adPosition: e, totalAds: t })
          }
          triggerRewarded(e) {
            ;(this.#i.debug("rewarded"), this.dispatch("rewarded", e))
          }
          triggerClosed(e) {
            "closed" !== this.state &&
              (this.#i.debug(`${this.state} → closed`, e),
              (this.state = "closed"),
              this.dispatch("closed", e),
              this.destroy())
          }
          triggerEmpty(e) {
            "empty" !== this.state &&
              (this.#i.debug(`${this.state} → empty`, { reason: e }),
              (this.state = "empty"),
              this.#a?.destroy().then(() => {
                ;(this.dispatch("empty", { reason: e }), this.destroy())
              }))
          }
        }
        class _ extends EventTarget {
          type = "IN_PAGE"
          placement
          id
          state = "loading"
          #e
          #n
          #r
          #t
          #i
          constructor({ placement: e, onDestroy: t, onRefresh: a }) {
            ;(super(),
              (this.placement = e),
              (this.id = crypto.randomUUID()),
              (this.#t = t),
              (this.#r = a),
              (this.#i = new h.d("public-banner", e)))
          }
          dispatch(e, t) {
            this.dispatchEvent(new CustomEvent(e, { detail: t }))
          }
          addEventListener(...e) {
            super.addEventListener(...e)
          }
          removeEventListener(...e) {
            super.removeEventListener(...e)
          }
          setInternalBanner(e, t) {
            ;(this.#e?.destroy(),
              (this.#e = e),
              t && (this.#n?.remove(), (this.#n = t)),
              e.addEventListener("viewable", () => this.triggerViewable()),
              e.addEventListener("request", () => this.triggerRequest()))
          }
          get containerElId() {
            return this.#n?.id
          }
          destroy() {
            ;(this.#t(),
              this.#e?.destroy(),
              (this.#e = void 0),
              this.#n?.remove(),
              (this.#n = void 0))
          }
          triggerEmpty(e) {
            "empty" !== this.state &&
              (this.#i.debug(`${this.state} → empty`, { reason: e }),
              (this.state = "empty"),
              this.dispatch("empty", { reason: e }))
          }
          triggerRequest() {
            this.dispatch("request")
          }
          triggerViewable() {
            ;(this.#i.debug("viewable"), this.dispatch("viewable"))
          }
          triggerRendered() {
            ;(this.#i.debug(`${this.state} → showing`),
              (this.state = "showing"),
              this.dispatch("rendered"))
          }
          refresh() {
            "loading" !== this.state && ((this.state = "loading"), this.#r?.())
          }
        }
        let b = (e, t) => {
            let a = t({ operationName: e })
            return {
              send: (i) => {
                a ? (a(i), (a = null)) : t({ operationName: e })(i)
              },
            }
          },
          y = new h.d("service")
        class w {
          options
          logEvent
          startRumEvent
          providers = {}
          currentTargeting = {}
          headerBidding = void 0
          depsReady = !1
          serviceReady = !1
          serviceReadyPromise
          serviceReadyResolve
          pageBanners = new Set()
          refreshTimers = new Map()
          outOfPageBanners = new Set()
          consentManager
          constructor(e) {
            for (const [t, a] of ((this.options = e),
            (this.consentManager = new p.W({
              handleConsentlessEnv: "United States" === this.options.countryNameEn,
              consentAccount: this.options.consentAccount,
            })),
            (this.logEvent = e.logEvent),
            (this.startRumEvent = e.startRumEvent),
            Object.entries(
              Array.isArray(e.providerTypes) ? { default: e.providerTypes } : e.providerTypes,
            )))
              this.providers[t] = a.map((e) => ({ loading: !0, type: e }))
            this.currentTargeting = e.targeting || {}
            const { promise: t, resolve: a } = Promise.withResolvers()
            ;((this.serviceReadyPromise = t),
              (this.serviceReadyResolve = a),
              (0, u.O1)(1e4).then(() => this.markServiceReady("timeout")),
              this.initDeps())
          }
          setProvider(e, t, a = "default") {
            let i = this.providers[a]
            ;(i && e < i.length && (i[e] = t),
              "failed" in t || this.setProviderTargeting(t, this.currentTargeting),
              this.checkServiceReady())
          }
          async initDeps() {
            let e = !1
            ;(await Promise.race([
              Promise.all([this.initHeaderBidding(), this.initConsentManager()]),
              (0, u.O1)(5e3).then(() => {
                e = !0
              }),
            ]),
              e && this.logEvent({ event: "custom_event", eventName: "ad_deps_ready_timeout" }),
              (this.depsReady = !0),
              this.checkServiceReady())
          }
          async initHeaderBidding() {
            this.options.headerBiddingConfig &&
              ((this.headerBidding = new v.Z(this.options.headerBiddingConfig)),
              await this.headerBidding.init(),
              this.headerBidding.updateTargeting(this.currentTargeting),
              await this.headerBidding.getUserSignals())
          }
          async initConsentManager() {
            let e = await this.consentManager.install()
            e &&
              this.logEvent({
                event: "custom_event",
                eventName: "consent_manager_init_failed",
                dimension3: e,
              })
          }
          checkServiceReady() {
            this.serviceReady ||
              (Object.values(this.providers).every((e) =>
                e.some((e) => !("loading" in e) && !("failed" in e)),
              ) &&
                this.depsReady &&
                this.markServiceReady())
          }
          markServiceReady(e) {
            this.serviceReady ||
              ("timeout" === e &&
                this.logEvent({ event: "custom_event", eventName: "ad_service_ready_timeout" }),
              (this.serviceReady = !0),
              y.debug(e ? `service ready (${e})` : "service ready"),
              this.serviceReadyResolve("online"))
          }
          getProvidersByType(e) {
            return this.providers[e] || this.providers.default || []
          }
          getActiveProvidersByType(e) {
            return this.getProvidersByType(e).filter((e) => !("loading" in e) && !("failed" in e))
          }
          async requestAd(e, t, { type: a, adSource: i }) {
            let n = b("request-ad", this.startRumEvent),
              r = this.getProvidersByType(a)
            for (let l = 0; l < r.length; l++) {
              let o,
                s = b("request-ad-step", this.startRumEvent),
                c = l + 1,
                u = r[l],
                d = this.options.registerPageHideFallbackEvent({
                  event: "custom_event",
                  eventName: "ad_request_attempt_failed",
                  adPlacement: a,
                  adProvider: u?.type,
                  waterfallIndex: c,
                  ...(i && { dimension2: i }),
                  dimension3: "page_hide_fallback",
                })
              if (
                (y.debug(`waterfall attempt [${c}/${r.length}]`, {
                  placement: a,
                  provider: u?.type || "unknown",
                }),
                this.logEvent({
                  event: "custom_event",
                  eventName: "ad_waterfall_attempt",
                  adPlacement: a,
                  adProvider: u?.type,
                  waterfallIndex: c,
                  ...(i && { dimension2: i }),
                  dimension3: `${r.length}`,
                }),
                !u || "failed" in u || "loading" in u)
              ) {
                let e = "Provider is not initialized: unexpected error"
                ;(u && "failed" in u && (e = `Failed to load provider: ${u.errorMessage}`),
                  u && "loading" in u && (e = "Provider is not initialized"),
                  s.send({ status: "error", dimension2: e, dimension4: a, dimension3: `${c}` }),
                  this.logEvent({
                    event: "custom_event",
                    eventName: "ad_request_attempt_failed",
                    adPlacement: a,
                    waterfallIndex: c,
                    errorMessage: e,
                    adProvider: u?.type,
                    dimension3: e,
                    ...(i && { dimension2: i }),
                  }),
                  d())
                continue
              }
              let p = (e, t) => {
                this.logEvent({
                  event: "custom_event",
                  eventName: e,
                  adPlacement: a,
                  adUnit: o?.adUnit,
                  adHbBidder: o?.headerBiddingAuctionResult?.renderedBid?.bidder,
                  adHbAuctionId: o?.headerBiddingAuctionResult?.renderedBid?.auctionId,
                  adProvider: u.type,
                  instreamDuration: o?.type === "OUT_OF_PAGE" ? o?.instreamDuration : void 0,
                  waterfallIndex: c,
                  ...(i && { dimension2: i }),
                  ...t,
                })
              }
              try {
                let t = u.getAdUnitByType(a) || a
                ;(u.updateTargeting({
                  daily_call: `${(function (e) {
                    let t = (function () {
                      try {
                        let e = localStorage.getItem(m)
                        if (e) {
                          let t = JSON.parse(e)
                          if (t.date === g()) return t
                        }
                      } catch {}
                      return { date: g(), counts: {} }
                    })()
                    t.counts[e] = (t.counts[e] || 0) + 1
                    try {
                      localStorage.setItem(m, JSON.stringify(t))
                    } catch {}
                    return t.counts[e]
                  })(t)}`,
                }),
                  (o = e(u, { headerBidding: this.headerBidding })))
              } catch (t) {
                let e = t instanceof Error ? t.message : `Cannot show the ad ${a}`
                ;(s.send({
                  status: "error",
                  dimension1: u.type,
                  dimension2: e,
                  dimension4: a,
                  dimension3: `${c}`,
                }),
                  p("ad_request_unexpected_error", { errorMessage: e, dimension3: e }),
                  d())
                continue
              }
              if (
                (o.addEventListener("validation_error", (e) => {
                  ;(p("ad_request_attempt_failed", { dimension3: e.detail?.reason }), d())
                }),
                o.addEventListener("request", () => {
                  ;(p("ad_request"), d())
                }),
                o.addEventListener("unexpected_behavior", (e) => {
                  p("ad_unexpected_behavior", { dimension3: e.detail?.reason })
                }),
                o.addEventListener("viewable", () => {
                  ;(0 === l && p("ad_show_high_value"),
                    s.send({
                      status: "success",
                      dimension4: a,
                      dimension1: u.type,
                      dimension2: o.adUnit,
                      dimension3: `${c}`,
                    }),
                    n.send({ status: "success", dimension4: a, dimension3: `${c}` }),
                    p("ad_show"))
                }),
                "IN_PAGE" === o.type &&
                  o.addEventListener("showing", () => {
                    p("ad_rendered")
                  }),
                await new Promise((e) => {
                  ;(o.addEventListener(
                    "OUT_OF_PAGE" === o.type ? "ready" : "showing",
                    () => {
                      e(!0)
                    },
                    { once: !0 },
                  ),
                    o.addEventListener(
                      "empty",
                      (t) => {
                        ;(p("ad_empty", { dimension3: t.detail?.reason }),
                          s.send({
                            status: "empty",
                            dimension4: a,
                            dimension1: u.type,
                            dimension2: o.adUnit,
                            dimension3: `${c}`,
                          }),
                          e(!1))
                      },
                      { once: !0 },
                    ))
                }))
              )
                return (t.setInternalBanner(o), !0)
            }
            return (
              y.debug("waterfall exhausted, no fill", { placement: a, attempts: r.length }),
              n.send({ status: "empty", dimension4: a }),
              this.logEvent({
                event: "custom_event",
                eventName: "ad_request_failed",
                waterfallIndex: r.length,
                adProvider: "unknown",
                adPlacement: a,
                ...(i && { dimension2: i }),
              }),
              t.triggerEmpty(),
              !1
            )
          }
          requestOutOfPageAd(e, t, a) {
            let i = new f({
              placement: e,
              onDestroy: () => {
                this.outOfPageBanners.delete(i)
              },
              loader: a,
              timeout: this.getAdMaxTimeout(e),
            })
            return (
              this.outOfPageBanners.add(i),
              this.yieldToListeners().then(async () => {
                ;(await this.serviceReadyPromise,
                  (await this.requestAd((t, a) => t.prepareOutOfPageAd(e, a), i, {
                    type: e,
                    adSource: t,
                  })) && i.triggerReady())
              }),
              i
            )
          }
          requestPageAd(e) {
            let t = new _({
              placement: e.type,
              onDestroy: () => {
                ;(this.pageBanners.delete(t),
                  window.clearTimeout(this.refreshTimers.get(t)),
                  this.refreshTimers.delete(t))
              },
              onRefresh: () => {
                this.loadPageAd(t, e)
              },
            })
            return (
              this.pageBanners.add(t),
              this.yieldToListeners().then(async () => {
                ;(await this.loadPageAd(t, e), e.refresh && this.scheduleRefresh(t, e.refresh))
              }),
              t
            )
          }
          async loadPageAd(e, t) {
            let a = this.createAdContainer(t.el)
            a
              ? (await this.serviceReadyPromise,
                this.pageBanners.has(e) &&
                  (await this.requestAd(
                    (e, i) => e.requestPageAd({ ...t, el: a.id }, i),
                    {
                      setInternalBanner: (t) => e.setInternalBanner(t, a),
                      triggerEmpty: () => e.triggerEmpty(),
                    },
                    { type: t.type },
                  )))
                ? e.triggerRendered()
                : a.remove()
              : e.triggerEmpty("no_container")
          }
          yieldToListeners() {
            return (0, u.O1)(10)
          }
          createAdContainer(e) {
            let t = document.getElementById(e)
            if (!t) return null
            let a = document.createElement("div")
            return ((a.id = crypto.randomUUID()), t.appendChild(a), a)
          }
          scheduleRefresh(e, t) {
            let a = window.setTimeout(async () => {
              ;(e.containerElId && (await d(e.containerElId)) && e.refresh(),
                this.scheduleRefresh(e, t))
            }, 1e3 * t)
            this.refreshTimers.set(e, a)
          }
          setOutOfPageAdPlaybackState(e) {
            for (let t of this.outOfPageBanners) t.setPlaybackState(e)
          }
          shutdown() {
            for (let e of this.pageBanners) e.destroy()
            for (let e of this.outOfPageBanners) e.gracefullyDestroy("ad_free_mode_enabled")
          }
          getTargeting() {
            return structuredClone(this.currentTargeting)
          }
          updateTargeting(e) {
            for (let t in e)
              e[t] ? (this.currentTargeting[t] = e[t]) : delete this.currentTargeting[t]
            for (let e in (this.headerBidding?.updateTargeting(this.currentTargeting),
            this.providers))
              this.getActiveProvidersByType(e).forEach((e) => {
                this.setProviderTargeting(e, this.currentTargeting)
              })
          }
          setProviderTargeting(e, t) {
            try {
              e.updateTargeting(t)
            } catch {}
          }
          getAdMaxTimeout(e) {
            return this.getActiveProvidersByType(e || "default")
              .map((e) => e.timeout || 0)
              .reduce((e, t) => e + t, 0)
          }
        }
        function k(e, t) {
          return { failed: !0, type: e, errorMessage: t }
        }
        function C(e, t) {
          let a = t instanceof Error ? t.message : String(t)
          return Error(`[${e}] module load failed: ${a}`)
        }
        async function E(e, t) {
          let i = { ...t.targeting, ...e?.options?.targeting },
            { type: n } = e
          switch (n) {
            case "gameDistribution": {
              let { GameDistributionConnector: e } = await a
                .e("7414")
                .then(a.bind(a, 20789))
                .catch((e) => {
                  throw C(n, e)
                })
              return new e()
            }
            case "emptyProvider": {
              let { EmptyAdsProvider: r } = await a
                .e("3515")
                .then(a.bind(a, 73734))
                .catch((e) => {
                  throw C(n, e)
                })
              return new r({ ...t, ...e.options, targeting: i })
            }
            case "googleBanner": {
              let { GoogleBannerProvider: r } = await a
                .e("8598")
                .then(a.bind(a, 38933))
                .catch((e) => {
                  throw C(n, e)
                })
              return new r({ ...t, ...e.options, targeting: i })
            }
            case "googleAdSense": {
              let { GoogleAdSenseAdProvider: r } = await a
                .e("3869")
                .then(a.bind(a, 19692))
                .catch((e) => {
                  throw C(n, e)
                })
              return new r({ ...t, ...e.options, targeting: i })
            }
            case "googleInstream": {
              let { GoogleInstreamAdsService: r } = await a
                .e("1098")
                .then(a.bind(a, 45644))
                .catch((e) => {
                  throw C(n, e)
                })
              return new r({ ...t, ...e.options, targeting: i })
            }
            case "googleAd": {
              let { GoogleAdProvider: r } = await a
                .e("839")
                .then(a.bind(a, 51834))
                .catch((e) => {
                  throw C(n, e)
                })
              return new r({ ...t, ...e.options, targeting: i })
            }
            case "directProvider": {
              let { DirectAdsProvider: r } = await a
                .e("7627")
                .then(a.bind(a, 47280))
                .catch((e) => {
                  throw C(n, e)
                })
              return new r({ ...t, ...e.options, targeting: i })
            }
            case "appProvider": {
              let { AppAdsService: r } = await a
                .e("5425")
                .then(a.bind(a, 59272))
                .catch((e) => {
                  throw C(n, e)
                })
              return new r({ ...t, ...e.options, targeting: i })
            }
            case "headerBiddingAd": {
              let { HeaderBiddingAdProvider: r } = await a
                .e("5839")
                .then(a.bind(a, 79186))
                .catch((e) => {
                  throw C(n, e)
                })
              return new r({ ...t, ...e.options, targeting: i })
            }
            default:
              throw Error(`Unsupported ad provider type: "${n}"`)
          }
        }
        async function A(e, t, a, i) {
          let n,
            r = t.type,
            l = `${e + 1}`,
            o = a.startRumEvent({ operationName: "init-ad-provider" })
          try {
            n = await E(t, a)
            let s = await n.serviceStatus
            "online" === s
              ? (i(e, n), o({ status: "success", dimension1: r, dimension2: l }))
              : (i(e, k(n.type, n.initErrorMessage ?? "Provider is offline")),
                o({
                  status: "error",
                  dimension1: r,
                  dimension2: l,
                  dimension3: n.initErrorMessage ?? "Provider is offline",
                }))
          } catch (a) {
            let t =
              n?.initErrorMessage ??
              (a instanceof Error
                ? a.message
                : `Failed to initialize provider: ${JSON.stringify(a)}`)
            ;(i(e, k(r, t)),
              o({
                status: "error",
                dimension1: r,
                dimension2: l,
                dimension3: n?.initErrorMessage ?? t,
              }))
          }
        }
        var x = a(65940),
          R = a(30232),
          T = a(37361),
          S = a(87743),
          $ = a(79316),
          L = a(92730),
          P = a(4911),
          M = a(84608)
        let I = (0, i.nY)("ads", () => {
          let { logEvent: e, startRumEvent: t, registerPageHideFallbackEvent: a } = (0, $.G)(),
            {
              auid: u,
              clid: d,
              widgetId: p,
              platform: m,
              isDebugMode: g,
              userAcquisitionParams30d: v,
              userAcquisitionParams1d: h,
              isGameDistribution: f,
              isPortalEnv: _,
              isExportOnWidget: b,
              isExportOnPortal: y,
              isNativeAppEnv: k,
              experiments: C,
            } = (0, i.bP)((0, S.C)()),
            { adBlockStatus: E } = (0, i.bP)((0, T.l)()),
            I = (0, L.k)(),
            O = (0, n.IJ)(),
            B = (0, l._)(),
            F = (0, r.lq)(),
            { clidConfig: D } = (0, s.ns)(),
            W = (0, n.EW)(() => F.name === R.V2.EXPORT_GAME_PAGE),
            N = {
              [c.Sx.directAndroidTest]: B.APP_NATIVE_ANDROID_TEST_PROVIDERS_SETTINGS,
              [c.Sx.directAndroid]: B.APP_NATIVE_ANDROID_PROVIDERS_SETTINGS,
              [c.Sx.directIosTest]: B.APP_NATIVE_IOS_TEST_PROVIDERS_SETTINGS,
              [c.Sx.directIos]: B.APP_NATIVE_IOS_PROVIDERS_SETTINGS,
            },
            { VUE_APP_AD_MANAGER_ACCOUNT: G, E2E: U } = (0, o.U)(),
            V = (0, n.EW)(() => {
              let e = (e, t = "") => {
                  let a = {},
                    i = e.content
                  for (let i of ["source", "medium", "campaign", "campaign_id", "assetgroup_id"])
                    e[i] && (a[`${t}utm_${i}`] = e[i])
                  return (
                    void 0 === a[`${t}utm_campaign_id`] &&
                      (a[`${t}utm_campaign_id`] = i?.match(/cid-([^|]+)/)?.[1] || "-"),
                    void 0 === a[`${t}utm_assetgroup_id`] &&
                      (a[`${t}utm_assetgroup_id`] = i?.match(/gid-([^|]+)/)?.[1] || "-"),
                    a
                  )
                },
                t = { ...e(v.value), ...e(h.value, "1d_") }
              return {
                playgama_clid: d.value,
                widget_id: p.value || "",
                [x.u.AD_BLOCK_STATUS]: E.value,
                [x.u.IS_LOGGED_IN]: "0",
                ...t,
              }
            })
          function z(e) {
            O.value?.updateTargeting(e)
          }
          return (
            (0, n.wB)(E, (e) => {
              z({ [x.u.AD_BLOCK_STATUS]: e })
            }),
            {
              adService: O,
              setAdServiceConfig: function (i) {
                let n,
                  r = { ...V.value, ...i.targeting },
                  l = _.value && C.value?.["quick-play-from-listing"]?.sample
                ;(l && (r.exp = l),
                  !1 === U &&
                    (n = {
                      debug: g.value,
                      platform: m.value,
                      pgAuid: u.value,
                      cmp: !0,
                      getUser: I.getUser,
                      logEvent: e,
                    }))
                let o = (function () {
                    if (f.value) return { default: [B.GAME_DISTRIBUTION_PROVIDER_SETTINGS] }
                    if (W.value) {
                      let e = [],
                        t = !y.value && !b.value
                      e =
                        D.value.inGameProviderSettings && t
                          ? D.value.inGameProviderSettings
                          : k.value && N[d.value]
                            ? N[d.value]
                            : b.value
                              ? B.AD_PROVIDER_SETTINGS_FOR_EXPORT_GAME_PAGE_ON_WIDGET
                              : B.AD_PROVIDER_SETTINGS_FOR_EXPORT_GAME_PAGE
                      let a = [],
                        i = []
                      return (
                        t
                          ? D.value.fallBackProviders
                            ? ((a = D.value.fallBackProviders), (i = D.value.fallBackProviders))
                            : ((a = B.FALLBACK_AD_PROVIDER_SETTINGS_PARTNER),
                              (i = B.FALLBACK_AD_PROVIDER_SETTINGS_PARTNER))
                          : k.value
                            ? ((a = []), (i = []))
                            : t ||
                              ((a = B.FALLBACK_AD_PROVIDER_SETTINGS_ON_PORTAL),
                              (i = B.FALLBACK_AD_PROVIDER_SETTINGS_ON_PORTAL)),
                        {
                          default: B.AD_STATIC_BANNERS_PROVIDER_SETTINGS_ON_GAME_PAGE,
                          interstitial: [...e, ...a],
                          interstitial_midroll: [...e, ...a],
                          interstitial_preroll: [...e, ...i],
                          rewarded: [...e, ...a],
                        }
                      )
                    }
                    return { default: B.AD_PROVIDER_SETTINGS_ON_PORTAL }
                  })(),
                  s = Object.entries(o).reduce(
                    (e, [t, a]) => ((e[t] = a.map((e) => e.type)), e),
                    {},
                  ),
                  c = { targeting: r, startRumEvent: t, auid: i.auid },
                  p = new w({
                    countryNameEn: window.additionalServerData?.locale.countryNameEn,
                    consentAccount: G,
                    targeting: r,
                    startRumEvent: t,
                    logEvent: e,
                    registerPageHideFallbackEvent: a,
                    auid: i.auid,
                    headerBiddingConfig: n,
                    providerTypes: s,
                  })
                ;(I.getUser().then(async () => {
                  if (I.user?.email && I.user?.email !== "") {
                    let e = await (0, M.L)(I.user.email)
                    ;(0, P.MO)(P.vb, e, 216e7)
                  }
                }),
                  (O.value = p),
                  p.consentManager.ready.then(() => {
                    Object.entries(o).forEach(([e, t]) => {
                      var a
                      let i, n, r
                      ;((a = (t, a) => {
                        p.setProvider(t, a, e)
                      }),
                        (i = new Map()),
                        t.forEach(({ type: e }) => i.set(e, (i.get(e) ?? 0) + 1)),
                        (n = new Map()),
                        (r = t.map(({ type: e }) => {
                          let t = (n.get(e) ?? 0) + 1
                          return (n.set(e, t), (i.get(e) ?? 1) > 1 ? `${e}-${t}` : e)
                        })),
                        t.forEach((e, t) => {
                          A(t, { ...e, options: { ...e.options, name: r[t] } }, c, a)
                        }))
                    })
                  }))
              },
              updateTargeting: z,
            }
          )
        })
      },
      87743: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          C: function () {
            return b
          },
        }),
          a(17932),
          a(96466))
        var i = a(20211),
          n = a(3144),
          r = a(76915),
          l = a(17637),
          o = a(30232),
          s = a(35556),
          c = a(4911)
        let u = [o.V2.GAME_PAGE, o.V2.MAIN]
        var d = a(22843),
          p = a(59176),
          m = a(47006),
          g = a(77192)
        a(86204)
        let v = "desktop",
          h = "PlaygamaIOSApp",
          f = "PlaygamaAndroidApp",
          _ = (e) => Object.values(l.hq).includes(e),
          b = (0, i.nY)("app", () => {
            let e = (0, n.KR)(200),
              t = (0, n.KR)(""),
              a = (0, n.KR)(v),
              i = (0, n.KR)(),
              b = (0, n.KR)(),
              y = (0, n.KR)(),
              w = (0, n.KR)(),
              k = (0, n.KR)(),
              C = (0, n.KR)(),
              E = (0, n.KR)(),
              A = (0, n.KR)({}),
              x = (0, n.KR)({}),
              R = (0, n.KR)(),
              T = (0, n.KR)(),
              S = (0, n.IJ)(),
              $ = (0, n.EW)(() =>
                S.value
                  ? Object.entries(S.value)
                      .map(([e, t]) => `${e}:${t.sample}`)
                      .join(", ")
                  : void 0,
              ),
              L = (0, n.EW)(() => T.value?.[s.K4]),
              P = (0, n.EW)(() => !!T.value?.debug),
              M = (0, n.EW)(() => y.value?.includes(h) ?? !1),
              I = (0, n.EW)(() => y.value?.includes(f) ?? !1),
              O = (0, n.EW)(() => M.value || I.value || Object.values(l.Sx).includes(Q.value)),
              B = (0, n.EW)(() => {
                if (!y.value) return
                let e = RegExp(`(?:${h}|${f})/([\\d.]+)`),
                  t = y.value.match(e)
                return t ? t[1] : void 0
              }),
              F = (0, n.EW)(() => Object.values(l.P).includes(Q.value)),
              D = (0, n.EW)(() => O.value || F.value),
              W = (0, n.EW)(() => !Object.values(l.B5).includes(Q.value)),
              N = (0, n.KR)({}),
              G = (0, m.M1)(),
              U = (0, r.lq)(),
              V = (0, n.EW)(() => T.value?.[s.nD] === "portal"),
              z = (0, n.EW)(() => T.value?.[s.nD] === "widget"),
              H = (0, n.EW)(() => T.value?.[s.nD] === "wl"),
              X = (0, n.EW)(() => U.name !== o.V2.EXPORT_GAME_PAGE || V.value),
              { landingClid: K, landingWidgetId: q } = ((e, t) => {
                let a = "",
                  i = ""
                if ("u" > typeof window) {
                  if (t((i = (a = (0, c.pp)(document.cookie) || "").split(":")[0] || "")))
                    return ((0, c.ox)(""), { landingClid: void 0, landingWidgetId: void 0 })
                  e.query.clid &&
                    u.includes(e.name) &&
                    i !== e.query.clid &&
                    ((a = `${e.query.clid}:${e.params.game || "Main_page"}`),
                    (i = e.query.clid),
                    (0, c.ox)(a))
                }
                return { landingClid: i, landingWidgetId: a }
              })(U, _),
              j = (0, n.EW)(() =>
                U.name === o.V2.WHITE_LABEL
                  ? U.params.partner
                  : U.name === o.V2.WHITE_LABEL_2PAGE ||
                      U.name === o.V2.WHITE_LABEL_2PAGE_CATEGORY ||
                      U.name === o.V2.WHITE_LABEL_2PAGE_GAME ||
                      U.name === o.V2.WHITE_LABEL_2PAGE_LAUNCH
                    ? "2page"
                    : void 0,
              ),
              Q = (0, n.EW)(() => {
                if (l.$p.includes(U.params.game)) return l.GV.directTest
                let e = (V.value && (0, g.A)(b.value || "")?.hostname) || i.value,
                  t = j.value && l.P2[j.value]
                if (t) return t
                let a = l.GV.unknown
                return (
                  "playgama.com" === e && (a = l.GV.direct),
                  e?.endsWith(".playgama.com") && (a = l.GV.directTest),
                  T.value?.clid || K || a
                )
              }),
              Y = (0, n.EW)(() => {
                if (D.value) return M.value ? "curated-app" : "curated"
              }),
              Z = (0, n.EW)(() => (Q.value === K ? T.value?.[s.jj] || q : T.value?.[s.jj])),
              J = (0, n.EW)(() => Object.entries(T.value || {})),
              ee = (0, n.KR)(!1)
            async function et() {
              if (k.value) {
                let { cluster_id: e, audnc: t } = await G.getRankingClusterId({
                  auid: k.value,
                  platform: a.value,
                  audience: E.value?.audience,
                  currentClusterId: E.value?.clusterId,
                })
                ;(0, c.xW)({ clusterId: e || void 0, audience: t || void 0 })
              }
            }
            let ea = (0, n.EW)(() => E.value),
              ei = (0, r.rd)()
            ;(0, n.wB)(
              () => [e.value, t.value],
              () => {
                "" !== t.value &&
                  e.value > 300 &&
                  e.value < 400 &&
                  (ei.replace(t.value), (e.value = 200), (t.value = ""))
              },
            )
            let en = (0, n.KR)(!1),
              er = !0
            return {
              setPageStatus: function (t) {
                e.value = t
              },
              setTargetURL: function (e) {
                t.value = e
              },
              setUrlDetails: function (e) {
                ;((i.value = e.host), (T.value = e.query), (b.value = e.referer))
              },
              setHeaders: function (e) {
                N.value = e
              },
              getWhiteLabelClid: function (e) {
                return l.P2[e] || l.GV.unknown
              },
              initPageLoadProgressTracking: function () {
                ;(ei.beforeEach(async () => {
                  ;((en.value = !0), await (0, p.HD)())
                }),
                  ei.afterEach(() => {
                    en.value = !1
                  }))
              },
              getSessionId: function () {
                var e
                let { timestamp: t, utmHash: a } = (function (e) {
                    if (!e) return { timestamp: void 0, utmHash: "" }
                    let [t, a] = e.split(":")
                    return { timestamp: t, utmHash: a }
                  })((0, c.rS)()),
                  i = (function (e) {
                    let t = Object.entries(e)
                        .filter(([e]) => e.startsWith("utm_"))
                        .map(([e, t]) => `${e}=${t}`)
                        .sort()
                        .join("&"),
                      a = 0
                    for (let e = 0; e < t.length; e += 1) a = ((a << 5) - a + t.charCodeAt(e)) | 0
                    return a ? Math.abs(a).toString(36) : ""
                  })(T.value || {}),
                  n = !document.hidden,
                  r = er && !document.referrer.startsWith(location.origin) && "" !== i && i !== a,
                  l = t || Date.now().toString()
                return (
                  r && (l = Date.now().toString()),
                  (r || n) && (0, c.$G)(((e = l), `${e}:${i}`)),
                  (er = !1),
                  `${l}.${k.value}`
                )
              },
              setEffectiveType: function () {
                C.value =
                  navigator.connection?.effectiveType ||
                  `not_applicable${(0, d.MN)() || (0, d.r0)() ? "_ios" : "_other"}`
              },
              headers: N,
              effectiveType: C,
              pageStatus: e,
              targetURL: t,
              cohort: w,
              userAcquisitionParams30d: A,
              userAcquisitionParams1d: x,
              contentScope: Y,
              clid: Q,
              host: i,
              referer: b,
              queryParams: J,
              query: T,
              widgetId: Z,
              platform: a,
              isAuthBannerOpen: ee,
              isGameDistribution: L,
              isDebugMode: P,
              isExportOnWidget: z,
              isExportOnPortal: V,
              isExportOnWhitelabel: H,
              auid: k,
              rawRankingParams: E,
              rankingParams: ea,
              userAgent: y,
              setAuidInfo: function (e) {
                k.value = e
                let [t, a] = (e || "").split("."),
                  i = Number(a)
                isNaN(i) || (w.value = (0, p.oo)(i))
              },
              setRankingParams: function (e) {
                E.value = e
              },
              fetchRankingParams: et,
              setPlatform: function (e) {
                a.value = e
              },
              setUserAgent: function (e) {
                y.value = e
              },
              setUserParams: function (e) {
                ;((A.value = e.userAcquisitionParams30d), (x.value = e.userAcquisitionParams1d))
              },
              setContentScopeCookie: function (e) {
                e ? (R.value = e) : (R.value = void 0)
              },
              rawContentScopeCookie: R,
              setExperiments: function (e) {
                S.value = e
              },
              $reset: function () {
                ;((e.value = 200), (t.value = ""), (a.value = v))
              },
              experiments: S,
              experimentsString: $,
              pageLoadProgress: en,
              isPWA: F,
              isPortalEnv: X,
              isNativeAppEnv: O,
              isNativeIosEnv: M,
              appVersion: B,
              isAppEnv: D,
              isPurchaseEnabled: W,
            }
          })
      },
      81865: function (e, t, a) {
        "use strict"
        a.d(t, {
          k: function () {
            return p
          },
        })
        var i = a(20211),
          n = a(3144),
          r = a(97178),
          l = a(79316),
          o = a(92730),
          s = a(84608),
          c = a(59176),
          u = a(87743),
          d = a(43719)
        let p = (0, i.nY)("googleAuth", () => {
          let { VUE_APP_GAUTH_REDIRECT: e, VUE_APP_GAUTH_CLID: t } = (0, r.U)(),
            a = (0, l.G)(),
            i = (0, o.k)(),
            p = (0, d.L)(),
            m = (0, u.C)(),
            g = (0, n.KR)(null),
            v = (0, n.KR)(!1),
            h = (0, n.KR)(!1)
          async function f({ select_by: t, credential: n }, r) {
            let l
            try {
              let t = await fetch(e, {
                method: "POST",
                headers: { "content-type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ credential: n, nonce: r }),
              })
              t.status > 399 && (l = (await t.json()).message)
            } catch (e) {
              ;(console.error("Google authentication error: ", e), (l = e?.message || String(e)))
            }
            ;(await i.fetchUserInfo(),
              ["btn", "btn_confirm", "btn_add_session", "btn_confirm_add_session"].includes(t) ||
                a.logEvent({
                  event: "custom_event",
                  eventName: i.isAuthorized ? "auth_success" : "auth_failed",
                  dimension1: t,
                  dimension2: "google",
                  dimension3: l?.substring(0, 100),
                }),
              a.logEvent({
                event: "custom_event",
                eventName: "login",
                action: i.isAuthorized ? "success" : "fail",
              }),
              h.value && i.isAuthorized && (h.value = !1),
              g.value?.(i.isAuthorized, l),
              (g.value = null))
          }
          return {
            initGlobalSignIn: async function () {
              if (!window.google || v.value) return
              let { hashedNonce: e, rawNonce: a } = await (0, s.n)()
              ;((0, c.d4)(),
                window.google.accounts.id.initialize({
                  client_id: t,
                  auto_select: !0,
                  cancel_on_tap_outside: !1,
                  use_fedcm_for_prompt: !0,
                  nonce: e,
                  ux_mode: "popup",
                  callback: (e) => {
                    f(e, a)
                  },
                }),
                (v.value = !0))
            },
            setPrompt: function () {
              !window.google ||
                m.isAppEnv ||
                i.isAuthorized ||
                p.request({
                  name: "auth-notification",
                  priority: 0,
                  onOpen: () => {
                    window.google?.accounts.id.prompt((e) => {
                      ;("function" == typeof e.isDisplayed
                        ? (h.value = e.isDisplayed())
                        : (h.value = "display" === e.getMomentType()),
                        h.value
                          ? a.logInterfaceEvents({
                              eventName: "interface_show",
                              interface_target: "google-sign-in-prompt",
                            })
                          : a.logInterfaceEvents({
                              eventName: "interface_hide",
                              interface_target: "google-sign-in-prompt",
                            }))
                    })
                  },
                  onClose: () => {
                    window.google?.accounts.id.cancel()
                  },
                })
            },
            cancelPrompt: function () {
              p.remove("auth-notification")
            },
            setOnFinishCallback: function (e) {
              g.value = e
            },
            initialized: v,
            promptDisplayed: h,
          }
        })
      },
      59103: function (e, t, a) {
        "use strict"
        a.d(t, {
          l: function () {
            return o
          },
        })
        var i = a(20211),
          n = a(3144),
          r = a(8254)
        let l = { order: null, resolve: null, reject: null },
          o = (0, i.nY)("layout", () => {
            let e = (0, n.KR)(!1),
              t = (0, n.KR)(!1),
              a = (0, n.KR)(!1),
              i = (0, n.KR)(),
              o = (0, n.KR)(!1),
              s = (0, n.KR)(!1),
              c = (0, n.KR)(l),
              u = (0, n.EW)(() => !!c.value.order),
              d = (0, n.KR)(!0),
              p = (0, n.KR)()
            return {
              setFullscreen: function (t) {
                e.value = t
              },
              fullScreen: e,
              setInviteModalOpened: function (e) {
                t.value = e
              },
              inviteModalOpenedReason: t,
              openSignInModal: function (e) {
                ;((a.value = !0), (i.value = e))
              },
              closeSignInModal: function () {
                ;((a.value = !1), (i.value = void 0))
              },
              signInModalOpened: a,
              signInModalOpenedSource: i,
              openInstallGooglePlayModal: function () {
                o.value = !0
              },
              closeInstallGooglePlayModal: function () {
                o.value = !1
              },
              installGooglePlayModalOpened: o,
              setIsReportBugModalOpen: function (e) {
                s.value = e
              },
              isReportBugModalOpen: s,
              isPaymentModalOpen: u,
              paymentModalOrder: c,
              setPaymentModalOrder: function (e) {
                if (!e) {
                  ;((c.value.order = null), (c.value.reject = null), (c.value.resolve = null))
                  return
                }
                return new Promise((t, a) => {
                  ;((c.value.order = e), (c.value.resolve = t), (c.value.reject = a))
                })
              },
              isTabFocused: d,
              setTabFocused: function (e) {
                d.value = e
              },
              screenOrientation: p,
              setOrientation: function (e) {
                p.value = (0, r.u)(e)
              },
            }
          })
      },
      79316: function (e, t, a) {
        "use strict"
        a.d(t, {
          n: function () {
            return r
          },
          G: function () {
            return i.n
          },
        })
        var i = a(76415),
          n = a(3144)
        function r() {
          let e = (0, i.n)(),
            t = (t) => {
              let a = t.target.closest("[data-interface-target]")
              if (!a) return
              let i = a.closest("[data-interface-section]"),
                n = {
                  interface_target: a.dataset.interfaceTarget,
                  interface_path: i?.dataset.interfaceSection,
                  eventName: "interface_click",
                }
              e.logInterfaceEvents(n)
            }
          ;((0, n.sV)(() => {
            document.body.addEventListener("click", t, !0)
          }),
            (0, n.hi)(() => {
              document.body.removeEventListener("click", t)
            }))
        }
      },
      76415: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          n: function () {
            return k
          },
        }),
          a(52093),
          a(17932),
          a(19329))
        var i = a(20211),
          n = a(3144),
          r = a(76915),
          l = a(97178),
          o = a(17637),
          s = a(57550)
        ;(a(88370),
          a(88626),
          a(30112),
          a(87197),
          a(40160),
          a(2946),
          a(80487),
          a(98955),
          a(19798),
          a(51612),
          a(93402),
          a(35740),
          a(3299),
          a(82913),
          a(61319),
          a(70482))
        var c = a(59176)
        class u {
          url
          config
          queue = []
          queueSizeBytes = 0
          flushTimer = null
          constructor(e, t) {
            ;((this.url = e), (this.config = t))
          }
          add(e) {
            let t = JSON.stringify(e),
              a = 2 * t.length
            this.config.enabled
              ? (this.queueSizeBytes + a > this.config.maxBatchSizeBytes && this.flush(),
                this.queue.length >= this.config.maxBatchSizeCount && this.flush(),
                this.queue.push(t),
                (this.queueSizeBytes += a),
                this.scheduleFlush())
              : this.sendBatch([t])
          }
          flush() {
            if (
              (this.flushTimer && (clearTimeout(this.flushTimer), (this.flushTimer = null)),
              0 === this.queue.length)
            )
              return
            let e = [...this.queue]
            ;((this.queue = []), (this.queueSizeBytes = 0), this.sendBatch(e))
          }
          destroy() {
            ;(this.flushTimer && (clearTimeout(this.flushTimer), (this.flushTimer = null)),
              this.queue.length > 0 && this.flush())
          }
          scheduleFlush() {
            null === this.flushTimer &&
              (this.flushTimer = setTimeout(async () => {
                ;((this.flushTimer = null), await (0, c.HD)(), this.flush())
              }, this.config.flushIntervalMs))
          }
          sendBatch(e) {
            try {
              let t = `{"events":[${e.join(",")}]}`,
                a = new Blob([t], { type: "application/json" })
              navigator.sendBeacon(this.url, a) ||
                console.warn("[Analytics] sendBeacon rejected batch", {
                  eventCount: e.length,
                  sizeBytes: t.length,
                  maxBytes: this.config.maxBatchSizeBytes,
                })
            } catch (t) {
              console.error("[Analytics] Failed to send batch", { eventCount: e.length, error: t })
            }
          }
        }
        let d = { flushIntervalMs: 5e3, maxBatchSizeBytes: 25e3, maxBatchSizeCount: 20 }
        class p {
          portalEventsQueue
          rumEventsQueue
          uiEventsQueue
          ctrEventsQueue
          surveyEventsQueue
          pendingUnloadEvents = new Map()
          constructor(e) {
            const t = { enabled: !0, ...d }
            ;((this.portalEventsQueue = new u(`${e}/portal/events`, t)),
              (this.rumEventsQueue = new u(`${e}/rum/events`, t)),
              (this.uiEventsQueue = new u(`${e}/portal/ui/events`, t)),
              (this.ctrEventsQueue = new u(`${e}/portal/ctr/events`, t)),
              (this.surveyEventsQueue = new u(`${e}/portal/survey`, t)),
              this.setupPageUnloadFlush())
          }
          log(e) {
            this.portalEventsQueue.add(e)
          }
          logUiEvent(e) {
            this.uiEventsQueue.add(e)
          }
          logCTREvent(e) {
            this.ctrEventsQueue.add(e)
          }
          logSurveyEvent(e) {
            this.surveyEventsQueue.add(e)
          }
          logRum(e) {
            this.rumEventsQueue.add(e)
          }
          startRumEvent(e) {
            let t = Date.now(),
              a = !1
            return (i) => {
              if (a) return void console.trace("Sending metric after its already sent")
              let n = Date.now()
              ;(this.logRum({ ...e, ...i, durationMs: n - t, finishTimestamp: n }), (a = !0))
            }
          }
          registerPageHideFallbackEvent(e) {
            let t = Symbol()
            return (this.pendingUnloadEvents.set(t, e), () => this.pendingUnloadEvents.delete(t))
          }
          setupPageUnloadFlush() {
            let e = () => {
              for (let e of this.pendingUnloadEvents.values()) this.portalEventsQueue.add(e)
              ;(this.pendingUnloadEvents.clear(),
                this.portalEventsQueue.flush(),
                this.rumEventsQueue.flush(),
                this.uiEventsQueue.flush(),
                this.surveyEventsQueue.flush())
            }
            ;(document.addEventListener("visibilitychange", () => {
              "hidden" === document.visibilityState && e()
            }),
              window.addEventListener("pagehide", e))
          }
        }
        var m = a(30232),
          g = a(37361),
          v = a(87743),
          h = a(92730),
          f = a(13344)
        let _ = null
        async function b(e) {
          ;(await (!_ && (_ = (0, c.O1)(5e3)), _), await (0, c.HD)(), window.dataLayer.push(e))
        }
        let y = ["game_opened", "ping", "navigation", "portal_session_end"],
          w = { game: "yr6hfz", game_30s: "f4nmqi", playgame_5min: "sesdsp" },
          k = (0, i.nY)("logger", () => {
            let { ANALYTICS_API_HOST: e } = (0, l.U)(),
              t = (0, f.p)(),
              a = (0, r.lq)(),
              i = (0, h.k)(),
              u = (0, v.C)(),
              d = (0, g.l)(),
              _ = (0, n.EW)(() => a.name || void 0),
              { currentLocale: k } = (0, s.Cf)(),
              C = (0, n.KR)(),
              { VUE_APP_CTR_SAMPLING_VALUE: E } = (0, l.U)(),
              A = null
            function x() {
              if ("u" < typeof window) throw Error("Analytics can only be used in browser context")
              return (A || (A = new p(`${e}/api/events/v2`)), A)
            }
            function R() {
              let e = { ...u.userAcquisitionParams30d }
              return (
                Object.entries(u.userAcquisitionParams1d).forEach(([t, a]) => {
                  e[`1d_${t}`] = a
                }),
                {
                  clid: u.clid,
                  widgetId: u.widgetId,
                  rankingClusterId: u.rawRankingParams?.clusterId,
                  rankingAudience: u.rawRankingParams?.audience,
                  pageName: _.value,
                  gameHru: m.nH.includes(_.value || "") ? a.params.game : void 0,
                  experiments: u.experimentsString,
                  locale: k.value,
                  referer: u.referer,
                  userAgent: u.userAgent,
                  userAcquisitionParams: e,
                  platform: u.platform,
                  contentScope: u.contentScope,
                  adBlockStatus: d.adBlockStatus,
                }
              )
            }
            async function T() {
              let e = u.getSessionId(),
                t = await i.getUser(),
                a = R()
              return { userId: t?._id, sessionId: e, ...a }
            }
            function S(e, t) {
              let {
                  clid: a,
                  userId: i,
                  sessionId: n,
                  widgetId: r,
                  rankingClusterId: l,
                  rankingAudience: o,
                  pageName: s,
                  gameHru: c,
                  experiments: u,
                  locale: d,
                  referer: p,
                  userAgent: m,
                  platform: g,
                  userAcquisitionParams: v,
                  contentScope: h,
                  adBlockStatus: f,
                } = t,
                { waterfallIndex: _, ...b } = e
              return {
                ...b,
                pageName: s,
                gameHru: c,
                userId: i,
                sessionId: n,
                clid: a,
                widgetId: r,
                rankingClusterId: l,
                rankingAudience: o,
                referer: p,
                locale: d,
                userAgent: m,
                platform: g,
                waterfallIndex: _?.toString(),
                experiments: u,
                utm: v,
                contentScope: h,
                adBlockStatus: f,
              }
            }
            return {
              logEvent: async function e(e) {
                let a
                await (0, c.HD)()
                let i = await T()
                if (((a = e.eventName), !y.includes(a))) {
                  var n
                  let a = {
                    event: e.event,
                    eventName: e.eventName,
                    action: e.action || "",
                    clid: i.clid,
                    experiments: i.experiments,
                    widget_id: i.widgetId || "",
                    game_provider: "",
                    game_categories: [],
                    ad_placement: e.adPlacement || "",
                    ad_unit: e.adUnit || "",
                    instream_duration: e.instreamDuration ?? null,
                    watched_duration: e.watchedDuration ?? null,
                    waterfall_index: e.waterfallIndex ?? null,
                    error_message: e.errorMessage || "",
                    amount_in_game_currency: e.amountInGameCurrency ?? null,
                  }
                  ;(b(a), (n = a), t.postMessage("analytics.event", { event: n }))
                }
                x().log(S(e, i))
                let r = w[e.eventName]
                r &&
                  (function (e) {
                    let { gameHru: a } = R()
                    t.postMessage("adjust.event", { eventToken: e, ...(a ? { game_hru: a } : {}) })
                  })(r)
              },
              logInterfaceEvents: async function e(e) {
                let {
                  clid: t,
                  userId: i,
                  widgetId: n,
                  pageName: r,
                  gameHru: l,
                  locale: o,
                  referer: s,
                  userAgent: c,
                  platform: u,
                } = await T()
                ;(b({
                  event: "interface_event",
                  route_name: a.name,
                  clid: t,
                  widget_id: n || "",
                  interface_path: e.interface_path || "unknown",
                  interface_target: e.interface_target || "unknown",
                  eventName: e.eventName,
                }),
                  x().logUiEvent({
                    eventName: e.eventName,
                    userTimestamp: new Date().toISOString(),
                    pageName: r,
                    gameHru: l,
                    userId: i,
                    clid: t,
                    widgetId: n || "",
                    referer: s,
                    locale: o,
                    userAgent: c,
                    platform: u,
                    interfacePath: e.interface_path || "unknown",
                    interfaceTarget: e.interface_target || "unknown",
                  }))
              },
              logSurveyEvent: async function e(e) {
                let { userId: t, locale: a } = await T()
                x().logSurveyEvent({ ...e, userId: t, locale: a })
              },
              logSearchEvent: function (e) {
                let { clid: t, widgetId: a } = R()
                b({
                  event: "view_search_results",
                  eventName: "view_search_results",
                  clid: t,
                  widget_id: a || "",
                  search_term: e.search_term,
                  search_result_count: e.search_result_count,
                })
              },
              startRumEvent: function (e) {
                let { experiments: t, platform: a, clid: i, pageName: n, adBlockStatus: r } = R()
                return x().startRumEvent({
                  ...e,
                  platform: a,
                  experiments: t,
                  clid: i,
                  pageName: n,
                  adBlockStatus: r,
                })
              },
              registerPageHideFallbackEvent: function (e) {
                return x().registerPageHideFallbackEvent(S(e, R()))
              },
              setCTRSampling: function () {
                C.value = (0, c.yT)() < E
              },
              logCTREvents: async function e(e) {
                let { clid: t, pageName: a, platform: i, experiments: n } = await T()
                "US" === window.additionalServerData?.locale?.countryCode &&
                  "desktop" === i &&
                  t === o.GV.direct &&
                  C.value &&
                  x().logCTREvent({ pageName: a, experiments: n, ...e })
              },
            }
          })
      },
      28152: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          Y: function () {
            return o
          },
        }),
          a(63165),
          a(58035),
          a(97302),
          a(29372),
          a(17932),
          a(19329))
        var i = a(20211),
          n = a(3144),
          r = a(76915),
          l = a(76415)
        let o = (0, i.nY)("ctr-observer", () => {
          let e = (0, n.KR)(),
            t = (0, r.lq)(),
            a = (0, l.n)(),
            i = new WeakMap(),
            o = (e) => {
              let n = e.currentTarget,
                r = i.get(n)
              r && a.logCTREvents({ ...r, eventName: "click", pageUrl: t.fullPath })
            },
            s = (n) => {
              n.forEach((n) => {
                if (n.isIntersecting) {
                  let r = n.target
                  if (0 === n.boundingClientRect.width || 0 === n.boundingClientRect.height) return
                  e.value?.unobserve(r)
                  let l = i.get(r)
                  l && a.logCTREvents({ ...l, eventName: "impression", pageUrl: t.fullPath })
                }
              })
            }
          function c(t) {
            ;(e.value?.unobserve(t), t.removeEventListener("click", o), i.delete(t))
          }
          return {
            add: function (t, a) {
              ;(e.value || (e.value = new IntersectionObserver(s, { threshold: 1 })),
                i.has(t) && c(t),
                i.set(t, a),
                e.value.observe(t),
                t.addEventListener("click", o))
            },
            remove: c,
            disconnect: function () {
              ;(e.value?.disconnect(), (e.value = void 0))
            },
          }
        })
      },
      10438: function (e, t, a) {
        "use strict"
        a.d(t, {
          B: function () {
            return r
          },
        })
        var i = a(20211),
          n = a(3144)
        let r = (0, i.nY)(
          "login_nudge",
          () => {
            let e = (0, n.KR)(0),
              t = (0, n.KR)(0)
            return {
              desktopGameTopBarSessionsShown: e,
              desktopFooterTooltipTimesShown: t,
              markGameDesktopTopBarShown: function () {
                e.value += 1
              },
              markFooterDesktopTooltipShown: function () {
                t.value += 1
              },
              reset: function () {
                ;((e.value = 0), (t.value = 0))
              },
            }
          },
          {
            persist: {
              key: "login_nudge",
              pick: ["desktopGameTopBarSessionsShown", "desktopFooterTooltipTimesShown"],
            },
          },
        )
      },
      12852: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          U: function () {
            return o
          },
        }),
          a(17932),
          a(96466),
          a(76429),
          a(86204))
        var i = a(20211),
          n = a(3144)
        a(17637)
        var r = a(92031),
          l = a(92730)
        let o = (0, i.nY)(
          "my-games",
          () => {
            let e = (0, n.KR)([]),
              t = (0, l.k)(),
              a = (0, n.EW)(() => e.value.map(r.t))
            return {
              myGames: e,
              myUnzippedGames: a,
              update: function (a) {
                let [i] = a
                t.updateUsersGame(i)
                let n = e.value.find(([e]) => e === i)
                e.value = n
                  ? [a, ...e.value.filter(([e]) => e !== i)]
                  : [a, ...e.value].slice(0, 135)
              },
            }
          },
          {
            persist: {
              pick: ["myGames"],
              afterHydrate: (e) => {
                e.store._storageListenerAdded ||
                  ((e.store._storageListenerAdded = !0),
                  window.addEventListener("storage", (t) => {
                    t.key === e.store.$id && e.store.$hydrate()
                  }))
              },
            },
          },
        )
      },
      92031: function (e, t, a) {
        "use strict"
        function i(e) {
          return [e.hru, e.title, e.preview, e.icon]
        }
        function n([e, t, a, i]) {
          return { hru: e, title: t, preview: a, icon: i, source: "unknown" }
        }
        a.d(t, {
          U: function () {
            return i
          },
          t: function () {
            return n
          },
        })
      },
      13344: function (e, t, a) {
        "use strict"
        a.d(t, {
          p: function () {
            return o
          },
        })
        var i = a(20211),
          n = a(3144),
          r = a(17659),
          l = a(87743)
        let o = (0, i.nY)(
          "native_app",
          () => {
            let e,
              { platform: t, isNativeAppEnv: a } = (0, i.bP)((0, l.C)()),
              o = (0, n.IJ)(),
              s = (0, n.KR)(0),
              c = (0, n.EW)(() => s.value >= 6e5),
              u = (0, n.EW)(() => o.value?.isAvailable ?? !1)
            function d() {
              void 0 !== e && (clearInterval(e), (e = void 0))
            }
            function p(e, t) {
              return o.value?.postMessage(e, t)
            }
            return {
              sdk: o,
              isAvailable: u,
              elapsedActiveTimeMs: s,
              init: function () {
                a.value &&
                  !o.value &&
                  ((o.value = new r.l(t.value)),
                  o.value.init(),
                  c.value ||
                    void 0 !== e ||
                    (e = setInterval(() => {
                      ;((s.value += 15e3),
                        c.value && (d(), p("adjust.event", { eventToken: "tcw2fl" })))
                    }, 15e3)))
              },
              postMessage: p,
              addMessageHandler: function (e) {
                return o.value?.addMessageHandler(e)
              },
              dispose: function () {
                ;(d(), o.value?.dispose())
              },
            }
          },
          { persist: { key: "native_app", pick: ["elapsedActiveTimeMs"] } },
        )
      },
      43719: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          L: function () {
            return r
          },
        }),
          a(17932),
          a(76429),
          a(86204),
          a(52093))
        var i = a(20211),
          n = a(3144)
        let r = (0, i.nY)("notification-queue", () => {
          let e = (0, n.KR)([]),
            t = (0, n.KR)(null),
            a = (0, n.KR)(!1),
            i = (0, n.EW)(() =>
              t.value ? (e.value.find((e) => e.name === t.value) ?? null) : null,
            )
          function r() {
            if (!a.value || t.value || !e.value.length) return
            e.value.sort((e, t) => t.priority - e.priority)
            let i = e.value[0],
              n = e.value[1]
            i &&
              ((t.value = i.name),
              n &&
                i.priority > n.priority &&
                (function () {
                  for (let a of e.value) a.name !== t.value && a.onClose()
                  e.value = e.value.filter((e) => e.name === t.value)
                })(),
              i.onOpen())
          }
          function l() {
            for (let t of e.value) t.onClose()
            ;((e.value = []), (t.value = null))
          }
          return {
            notificationsQueue: e,
            activeName: t,
            request: function (t) {
              if (!i.value || !(t.priority < i.value.priority)) {
                var a
                ;(i.value && t.priority > i.value.priority && l(),
                  (a = t.name),
                  e.value.find((e) => e.name === a) ||
                    e.value.push({
                      name: t.name,
                      priority: t.priority,
                      onOpen: t.onOpen,
                      onClose: t.onClose,
                    }),
                  r())
              }
            },
            dispose: function () {
              ;((a.value = !1), l())
            },
            remove: function (a) {
              let i = e.value.find((e) => e.name === a)
              ;(i?.onClose(),
                (e.value = e.value.filter((e) => e.name !== a)),
                t.value === a && ((t.value = null), r()))
            },
            init: function () {
              ;((a.value = !0), r())
            },
          }
        })
      },
      43438: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          c: function () {
            return v
          },
        }),
          a(52093))
        var i = a(20211),
          n = a(3144),
          r = a(3231),
          l = a(97178),
          o = a(35584),
          s = a(17637),
          c = a(87743),
          u = a(59103),
          d = a(79316),
          p = a.p + "static/image/image-1.8f2d4478.webp",
          m = a.p + "static/image/image-2.81164835.webp",
          g = a.p + "static/image/image-3.b84107d2.webp"
        let v = (0, i.nY)(
          "push_subscription",
          () => {
            let { VUE_APP_ONESIGNAL_APPID: e, VUE_APP_ONESIGNAL_SAFARI_WEB_ID: t } = (0, l.U)(),
              a = (0, o.q)(),
              i = (0, r.W)(),
              v = (0, u.l)(),
              h = (0, d.G)(),
              f = (0, c.C)(),
              _ = (0, n.EW)(() => "desktop" === f.platform && f.isPWA),
              b = (0, n.KR)(0),
              y = (0, n.KR)(0),
              w = (0, n.KR)(!1),
              k = (0, n.KR)(0),
              C = (0, n.EW)(
                () =>
                  !(
                    "u" < typeof window ||
                    !_.value ||
                    v.fullScreen ||
                    "default" !== Notification.permission ||
                    "serviceWorker" in navigator == !1 ||
                    b.value >= 100 ||
                    Date.now() - y.value < 6048e5
                  ),
              ),
              E = (0, n.EW)(
                () =>
                  [
                    {
                      image: p,
                      title: a("toast-push-subscription.title1"),
                      description: a("toast-push-subscription.description1"),
                      buttonText: a("toast-push-subscription.button1"),
                    },
                    {
                      image: m,
                      title: a("toast-push-subscription.title2"),
                      description: a("toast-push-subscription.description2"),
                      buttonText: a("toast-push-subscription.button2"),
                    },
                    {
                      image: g,
                      title: a("toast-push-subscription.title3"),
                      description: a("toast-push-subscription.description3"),
                      buttonText: a("toast-push-subscription.button3"),
                    },
                  ][b.value % 3],
              )
            return {
              init: () => {
                _.value &&
                  (window.OneSignalDeferred.push(async (a) => {
                    ;(await a.init({
                      appId: e,
                      safari_web_id: t,
                      notifyButton: { enable: !1 },
                      welcomeNotification: { disable: !0 },
                      autoResubscribe: !0,
                      allowLocalhostAsSecureOrigin: !0,
                      serviceWorkerPath: "OneSignalSDKWorker.js",
                      serviceWorkerParam: { scope: "/" },
                    }),
                      a.User.addTags({
                        url_scope: `${location.origin + location.pathname}?clid=${s.P.pwa}`,
                      }),
                      f.auid && (await a.login(f.auid)))
                  }),
                  (k.value += 1))
              },
              showSubscriptionPrompt: ({ considerMinVisits: e } = { considerMinVisits: !1 }) => {
                ;(e && k.value < 2) ||
                  (C.value &&
                    i.showToast({
                      type: "push-subscription-prompt",
                      title: E.value.title,
                      description: E.value.description,
                      image: E.value.image,
                      buttonText: E.value.buttonText,
                      priority: 1,
                      imageStyles: { height: "120rem" },
                      onAccept: () => {
                        window.OneSignalDeferred.push(async (e) => {
                          let t = await e.Notifications.requestPermission()
                          "granted" === t
                            ? h.logEvent({
                                event: "custom_event",
                                eventName: "push_notification_granted",
                              })
                            : "denied" === t &&
                              h.logEvent({
                                event: "custom_event",
                                eventName: "push_notification_denied",
                              })
                        })
                      },
                      onClose: () => {
                        w.value = !0
                      },
                      onShow: () => {
                        ;((b.value += 1),
                          (y.value = Date.now()),
                          h.logInterfaceEvents({
                            interface_target: "push-subscription-prompt-toast",
                            eventName: "interface_show",
                          }))
                      },
                      isFullScreenAllowed: !1,
                    }))
              },
              displayCount: b,
              lastDisplayTime: y,
              optedOut: w,
              sessions: k,
              properEnv: _,
            }
          },
          {
            persist: {
              key: "push_subscribe",
              pick: ["displayCount", "lastDisplayTime", "optedOut", "sessions"],
            },
          },
        )
      },
      53018: function (e, t, a) {
        "use strict"
        a.d(t, {
          w: function () {
            return v
          },
        })
        var i = a(20211),
          n = a(3144),
          r = a(76915),
          l = a(3231),
          o = a(35584),
          s = a(30232),
          c = a(87743),
          u = a(59103),
          d = a(79316),
          p = a(22843),
          m = a.p + "static/svg/chrome-desktop.a5cc9b1f.svg"
        let g = {
            "moto-x3m": "9pfc45g1xhp7",
            "hidden-object-clues-and-mysteries": "9ndwwpl265t4",
            "fashion-princess--dress-up-for-girls-e00c-1": "9mvfcjf74zfn",
            "age-of-tanks-warriors-td-war": "9nxv05zxpkq7",
            "home-design-decorate-house": "9n403rx37m6x",
            "sprunki-world-online-rp--play-with-friends": "9mx9nlhd6xmm",
            "speed-per-click-obby": "9pbp2j1pt8rd",
            "mr-racer-car-racing": "9n08dpggwvqh",
            "hazmob-fps-online-shooter": "9n7qs1kn0v8l",
            "motorcycle-racer-road-mayhem": "9mwr95hfg2zg",
            "playground-man-ragdoll-show": "9nj10wf288jp",
          },
          v = (0, i.nY)(
            "pwa_install",
            () => {
              let e = (0, n.KR)(null),
                t = (0, n.KR)(!1),
                i = (0, l.W)(),
                v = (0, u.l)(),
                h = (0, d.G)(),
                f = (0, o.q)(),
                _ = (0, n.KR)(0),
                b = (0, n.KR)(!1),
                y = (0, n.KR)(0),
                w = (0, n.KR)(!1),
                k = (0, n.KR)(!1),
                C = (0, n.KR)({}),
                E = (0, n.KR)(0),
                A = (0, n.KR)(!1),
                x = (0, n.KR)(!1),
                R = (0, n.KR)(!1),
                T = (0, r.lq)(),
                S = (0, n.EW)(() => T.name === s.V2.GAME_PAGE),
                $ = (0, c.C)(),
                L = (0, n.EW)(() => "desktop" === $.platform),
                P = (0, n.EW)(() => T.params.game),
                M = (0, n.EW)(() => (S.value && P.value ? !!C.value[P.value] : k.value)),
                I = () => {
                  S.value && P.value ? (C.value = { ...C.value, [P.value]: !0 }) : (k.value = !0)
                },
                O = (0, n.EW)(
                  () =>
                    !(
                      !L.value ||
                      M.value ||
                      v.fullScreen ||
                      (0, p.S_)() ||
                      E.value < 2 ||
                      _.value >= 100 ||
                      Date.now() - y.value < 6048e5
                    ),
                ),
                B = () => {
                  ;((y.value = Date.now()), (_.value += 1))
                },
                F = (e = !1) => {
                  ;((w.value = !0), (x.value = !1), e || B())
                },
                D = (e = !1) => {
                  ;(h.logInterfaceEvents({
                    interface_target: "pwa_portal_install_prompt_shown_toast",
                    eventName: "interface_show",
                  }),
                    e || B())
                },
                W = () => {
                  ;(h.logEvent({ event: "custom_event", eventName: "pwa_native_install_accepted" }),
                    I(),
                    (e.value = null),
                    B())
                  let t = document.querySelector("link[rel=manifest]")?.dataset.start_url,
                    a = window.matchMedia("(display-mode: standalone)").matches
                  t && a && (location.href = t)
                },
                N = () => {
                  ;(e.value && G(), (x.value = !1))
                },
                G = async () => {
                  if (e.value)
                    try {
                      ;((b.value = !0),
                        await e.value.prompt(),
                        h.logInterfaceEvents({
                          interface_target: "pwa_native_install_prompt_shown",
                          eventName: "interface_show",
                        }))
                      let { outcome: t } = await e.value.userChoice
                      ;("accepted" === t ? W() : F(), (b.value = !1), (R.value = !0))
                    } catch {
                      F()
                    }
                },
                U = async (e) => {
                  let n,
                    r,
                    { force: l, showTimeoutMs: o, isFullScreenAllowed: s } = e || {}
                  if (M.value || (0, p.S_)() || $.isAppEnv || (!l && !O.value)) return
                  ;(0, p.Ll)() || (0, p.AW)()
                    ? (r = m)
                    : (n =
                        (0, p.QZ)() || (0, p._X)()
                          ? await a
                              .e("5211")
                              .then(a.t.bind(a, 86598, 19))
                              .then((e) => e.default)
                          : (0, p.r0)()
                            ? await a
                                .e("3216")
                                .then(a.t.bind(a, 95587, 19))
                                .then((e) => e.default)
                            : await a
                                .e("7871")
                                .then(a.t.bind(a, 94578, 19))
                                .then((e) => e.default))
                  let c = (0, p.r0)()
                      ? f("toast-pwa.description-safari-desktop")
                      : f("toast-pwa.description"),
                    u = t.value ? f("toast-pwa.button_text") : void 0
                  ;((x.value = !0), (R.value = !0))
                  let d = {
                    type: "pwa-prompt",
                    title: f("toast-pwa.title"),
                    description: c,
                    animation: n,
                    image: r,
                    buttonText: u,
                    showTimeoutMs: o,
                    priority: 1,
                    imageStyles: { height: "120rem" },
                    onAccept: N,
                    onClose: () => F(l),
                    onShow: () => D(l),
                    isFullScreenAllowed: s ?? l,
                  }
                  i.showToast(d)
                },
                V = () => {
                  ;(i.toast?.type === "pwa-prompt" || i.toast?.type === "pwa-prompt-game") &&
                    i.closeToast()
                }
              async function z() {
                e.value ? await G() : await U({ force: !0 })
              }
              async function H() {
                t.value ? (V(), await G()) : await U({ force: !0 })
              }
              return {
                displayCount: _,
                lastDisplayTime: y,
                optedOut: w,
                installed: k,
                sessions: E,
                triggerNativePrompt: G,
                handleOptOut: F,
                handleAccepted: N,
                handleOnShow: D,
                handleInstalled: W,
                showPWAInstallPrompt: U,
                showPWAGameInstallPrompt: (e) => {
                  if (M.value || (0, p.S_)()) return
                  ;((x.value = !0), (R.value = !0))
                  let t = {
                    type: "pwa-prompt-game",
                    title: f("toast-pwa.game_title"),
                    description: f("toast-pwa.game_description"),
                    image: e || m,
                    showTimeoutMs: 4e4,
                    buttonText: f("toast-pwa.button_game_text"),
                    priority: 2,
                    onAccept: () => {
                      ;(G(), (x.value = !1))
                    },
                    onClose: () => {
                      ;((w.value = !0), (x.value = !1))
                    },
                    onShow: () => {
                      h.logInterfaceEvents({
                        interface_target: "pwa_portal_install_game_prompt_shown_toast",
                        eventName: "interface_show",
                      })
                    },
                  }
                  i.showToast(t)
                },
                forceHidePWAInstallPrompt: V,
                hasDeferredPrompt: t,
                shouldShowPrompt: O,
                init: function () {
                  if (!A.value) {
                    if (((A.value = !0), (E.value += 1), $.isAppEnv)) return void I()
                    ;(window.addEventListener("beforeinstallprompt", (a) => {
                      "android" === $.platform && $.isPortalEnv && !$.isAppEnv
                        ? h.logInterfaceEvents({
                            interface_target: "native_app_smart_install_shown_android",
                            eventName: "interface_show",
                          })
                        : (a.preventDefault(), (e.value = a), (t.value = !0))
                    }),
                      window.addEventListener("appinstalled", () => {
                        W()
                      }))
                  }
                },
                initialized: A,
                isDisplaying: x,
                install: z,
                showingNativePWA: b,
                pwaHasShowed: R,
                installedGames: C,
                setInstalled: I,
                checkInstalled: M,
                onInstallPWAorMSN: async function () {
                  let e = g[P.value]
                  navigator.userAgentData?.platform === "Windows" && e
                    ? (h.logEvent({ event: "custom_event", eventName: "ms_store_url_opened" }),
                      window.open(`https://apps.microsoft.com/detail/${e}?mode=full`, "_blank"))
                    : await H()
                },
              }
            },
            {
              persist: {
                key: "pwa_install",
                pick: [
                  "displayCount",
                  "lastDisplayTime",
                  "optedOut",
                  "installed",
                  "sessions",
                  "installedGames",
                ],
              },
            },
          )
      },
      26757: function (e, t, a) {
        "use strict"
        a.d(t, {
          S: function () {
            return l
          },
        })
        var i = a(20211),
          n = a(3144),
          r = a(87743)
        let l = (0, i.nY)("quickPlay", () => {
          let e = (0, r.C)(),
            t = (0, n.KR)(null)
          return {
            gameHru: t,
            isEnabled: (0, n.EW)(
              () =>
                "desktop" !== e.platform &&
                !e.isAppEnv &&
                e.experiments?.["quick-play-from-listing"]?.sample === "test",
            ),
            open: function (e) {
              t.value = e
            },
            close: function () {
              t.value = null
            },
          }
        })
      },
      92730: function (e, t, a) {
        "use strict"
        a.d(t, {
          k: function () {
            return c
          },
        })
        var i = a(21932),
          n = a(20211),
          r = a(3144),
          l = a(10438),
          o = a(47006),
          s = a(59103)
        let c = (0, n.nY)("user", () => {
          let e = (0, r.KR)(null),
            t = (0, o.M1)(),
            a = (0, r.KR)(null),
            n = (0, r.KR)(!0),
            c = (0, r.KR)(!1),
            u = (0, r.EW)(() => !!e.value),
            d = (0, r.EW)(() => !!e.value?.email?.endsWith("@playgama.com")),
            p = (0, s.l)(),
            m = (0, l.B)()
          function g() {
            return (
              (c.value = !1),
              (a.value = Promise.resolve().then(async () =>
                "u" < typeof window
                  ? ((c.value = !0), null)
                  : (await v(), (c.value = !0), e.value && m.reset(), e.value),
              )),
              a.value
            )
          }
          async function v() {
            e.value = await t.getCurrentUser()
          }
          function h() {
            return (
              a.value ||
                ("u" > typeof window && n.value
                  ? (a.value = g())
                  : ((a.value = Promise.resolve(null)), (c.value = !0))),
              a.value
            )
          }
          async function f(t) {
            if (
              (await h(),
              e.value ||
                (await new Promise((e) => {
                  ;(p.openSignInModal(t),
                    p.$subscribe((t, a) => {
                      "direct" !== t.type || a.signInModalOpened || g().then(() => e())
                    }))
                })),
              e.value)
            )
              return { ...e.value }
            throw Error("User didn't complete login")
          }
          async function _() {
            ;((a.value = Promise.resolve(null)),
              await t.request("/api/v1/auth/logout", { method: "post" }),
              (e.value = null))
          }
          async function b() {
            ;((a.value = Promise.resolve(null)), await t.blockAccount(), (e.value = null))
          }
          async function y({ key: a, account: i }) {
            let { originalResponse: n } = await t.request("/api/v1/user", {
              method: "post",
              body: JSON.stringify({ [a]: i }),
            })
            n.ok && (e.value[a] = i)
          }
          let w = (0, i.n)({
            mutationKey: ["user", "my-games", "update"],
            mutationFn: (e) =>
              t.request("/api/v1/user/my-games", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ hru: e }),
              }),
            onError: () => {
              console.error("Failed to update users game")
            },
          })
          return {
            user: e,
            isAuthorized: u,
            isCompanyEmployeeLoggedIn: d,
            hasAuthToken: n,
            _isUserInfoLoaded: c,
            getUser: h,
            logout: _,
            blockAccount: b,
            updateSocials: y,
            authorizeUser: f,
            fetchUserInfo: g,
            updateUserSilently: v,
            cancelCharge: function (e) {
              ;(p.paymentModalOrder?.reject?.(e), p.setPaymentModalOrder(null))
            },
            updateUsersGame: function (t) {
              e.value && w.mutateAsync(t)
            },
            chargeUser: p.setPaymentModalOrder,
            setUser: function (t) {
              ;((e.value = t), (c.value = !0))
            },
          }
        })
      },
      73577: function (e, t, a) {
        "use strict"
        a.d(t, {
          Ct: function () {
            return r
          },
          Jo: function () {
            return n
          },
          bH: function () {
            return i
          },
        })
        let i = [
            "top_playgama",
            "io",
            "action",
            "puzzle",
            "arcade",
            "sports",
            "strategy",
            "bubble-shooter",
            "girls",
            "boys",
            "car",
            "simulation",
            "shooting",
            "gun",
            "clicker",
            "funny",
            "snake",
            "skill",
            "drawing",
            "idle",
            "multiplayer",
            "solitaire",
            "horror",
            "two-player",
            "trending_now",
            "new",
            "random",
            "obby",
          ],
          n = {
            NO_LOCALE_IN_ROUTE: "no_locale_in_route",
            PREFERRED_LOCALE: "preferred_locale",
            REMOVE_EN_LOCALE: "remove_en_locale",
            CATEGORY_TYPE_MISMATCH: "category_type_mismatch",
            PAGE_OUT_OF_BOUNDS: "page_out_of_bounds",
            RANDOM_GAME_SET: "random_game_set",
            SHOP_TO_PROFILE: "shop_to_profile",
          },
          r = {
            FRONTEND_ROUTER: "frontend_router",
            FRONTEND_REDIRECT: "frontend_redirect",
            FRONTEND_CATEGORY_FALLBACK: "frontend_category_fallback",
          }
      },
      4911: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          $G: function () {
            return k
          },
          Ed: function () {
            return h
          },
          MO: function () {
            return c
          },
          SQ: function () {
            return f
          },
          _A: function () {
            return p
          },
          _X: function () {
            return d
          },
          n0: function () {
            return w
          },
          nE: function () {
            return y
          },
          ox: function () {
            return v
          },
          pp: function () {
            return m
          },
          rS: function () {
            return b
          },
          vb: function () {
            return o
          },
          wr: function () {
            return g
          },
          xW: function () {
            return _
          },
        }),
          a(17932),
          a(39452),
          a(33384),
          a(50616))
        let i = "landing_wid",
          n = "rcid",
          r = "audnc",
          l = "pgsession",
          o = "yahooId"
        function s(e) {
          return e.split("; ").reduce((e, t) => {
            let [a = "", i = ""] = t.split("=")
            return ((e[a] = decodeURIComponent(i)), e)
          }, {})
        }
        function c(e, t, a) {
          let i = new Date()
          ;(i.setTime(i.getTime() + a),
            (document.cookie = `${e}=${encodeURIComponent(t)}; expires=${i.toUTCString()}; path=/; Secure; SameSite=none`))
        }
        function u(e, t) {
          let a = s(e)
          if (a.pg_uac)
            try {
              return JSON.parse(atob(a[t] || ""))
            } catch {}
          return {}
        }
        function d(e) {
          return u(e, "pg_uac")
        }
        function p(e) {
          return u(e, "pg_uac_1d")
        }
        function m(e) {
          return s(e)[i]
        }
        function g(e) {
          c("selected_locale", e, 31536e6)
        }
        function v(e) {
          c(i, e, 2592e6)
        }
        function h(e) {
          return s(e).auid
        }
        function f(e) {
          let t = s(e)
          return { clusterId: t[n], audience: t[r] }
        }
        function _({ clusterId: e, audience: t }) {
          ;(e ? c(n, e, 36e5) : c(n, "", -1), t ? c(r, t, 864e5) : c(r, "", -1))
        }
        function b() {
          return s(document.cookie)[l]
        }
        function y(e) {
          return s(e).pgcntscp
        }
        function w(e) {
          return s(e).pg_plt
        }
        function k(e) {
          c(l, e, 18e5)
        }
      },
      84608: function (e, t, a) {
        "use strict"
        async function i(e) {
          return [
            ...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(e))),
          ]
            .map((e) => e.toString(16).padStart(2, "0"))
            .join("")
        }
        async function n() {
          let e = crypto.randomUUID().replace(/-/g, "")
          return { hashedNonce: await i(e), rawNonce: e }
        }
        ;(a.d(t, {
          L: function () {
            return i
          },
          n: function () {
            return n
          },
        }),
          a(26972),
          a(74133),
          a(41469),
          a(83630),
          a(73923),
          a(5316),
          a(73926),
          a(83137),
          a(14318),
          a(351),
          a(74310),
          a(61241),
          a(80718),
          a(14248),
          a(91906),
          a(33214),
          a(59800),
          a(17932),
          a(96466))
      },
      22843: function (e, t, a) {
        "use strict"
        function i(e) {
          return !!window.navigator.userAgent.match(e)
        }
        function n() {
          return l() && i(/CriOS/)
        }
        function r() {
          return i(/Firefox/)
        }
        function l() {
          return i(/iPhone|iPad|iPod/) || o()
        }
        function o() {
          return !!(
            i(/iPad/) ||
            (i(/Macintosh/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1)
          )
        }
        function s() {
          return l() && i(/Safari/) && !n() && !(l() && i(/FxiOS/))
        }
        function c() {
          return (
            window.navigator.userAgent.includes("Safari") &&
            !window.navigator.userAgent.includes("Chrome") &&
            !window.navigator.userAgent.includes("Edg")
          )
        }
        function u() {
          return c() && window.navigator.userAgent.includes("Macintosh")
        }
        function d() {
          let e =
              window.navigator.userAgent.includes("Chrome") &&
              !window.navigator.userAgent.includes("Edg"),
            t =
              window.navigator.userAgent.includes("Windows") ||
              window.navigator.userAgent.includes("Macintosh") ||
              window.navigator.userAgent.includes("Linux")
          return e && t
        }
        function p() {
          return window.navigator.userAgent.includes("Edg/")
        }
        a.d(t, {
          AW: function () {
            return p
          },
          Ll: function () {
            return d
          },
          MN: function () {
            return l
          },
          QZ: function () {
            return s
          },
          S_: function () {
            return r
          },
          Ul: function () {
            return o
          },
          _X: function () {
            return n
          },
          nr: function () {
            return c
          },
          r0: function () {
            return u
          },
        })
      },
      59176: function (e, t, a) {
        "use strict"
        function i(e) {
          return e.match(/(iPhone|iPad|iPod)/) ? "ios" : e.match(/Android/) ? "android" : "desktop"
        }
        a.d(t, {
          HD: function () {
            return c
          },
          O1: function () {
            return l
          },
          _v: function () {
            return o
          },
          b3: function () {
            return u
          },
          d4: function () {
            return m
          },
          fM: function () {
            return s
          },
          hy: function () {
            return d
          },
          k4: function () {
            return r
          },
          oo: function () {
            return p
          },
          tb: function () {
            return i
          },
          yT: function () {
            return n
          },
        })
        let n = "u" > typeof E2ERandomMock ? E2ERandomMock : Math.random
        function r(e) {
          let t = [...e]
          for (let e = t.length - 1; e > 0; e--) {
            let a = Math.floor(n() * (e + 1))
            ;[t[e], t[a]] = [t[a], t[e]]
          }
          return t
        }
        function l(e, { abortSignal: t, value: a } = {}) {
          return new Promise((i) => {
            let n = setTimeout(() => {
              i(a)
            }, e)
            t?.addEventListener("abort", () => {
              clearTimeout(n)
            })
          })
        }
        function o(e) {
          return [
            e.hru,
            e.title,
            e.preview,
            e.icon,
            e.video_metadata[0]?.external_url,
            e.video_metadata[0]?.playgama_id,
            e.hasInAppPurchases,
            e.rankingDebug?.data,
            e.badges,
            e.source,
            e.platforms,
          ]
        }
        function s([e, t, a, i, n, r, l, o, s, c, u]) {
          return {
            hru: e,
            title: t,
            preview: a,
            icon: i,
            videoUrl: n,
            videoId: r,
            hasInAppPurchases: l,
            debugInfo: o,
            badges: s,
            source: c,
            platforms: u,
          }
        }
        function c(e) {
          return new Promise((t) => {
            window.requestIdleCallback
              ? window.requestIdleCallback(
                  () => {
                    t()
                  },
                  { timeout: e },
                )
              : setTimeout(() => {
                  t()
                }, 1)
          })
        }
        function u(e) {
          return e?.includes("https://www.youtu.be/")
            ? e.split("https://www.youtu.be/")[1]?.split("?")[0]
            : e?.includes("https://www.youtube.com/watch?v=")
              ? e.split("https://www.youtube.com/watch?v=")[1]?.split("&")[0]
              : e?.includes("https://www.youtube.com/embed/")
                ? e.split("https://www.youtube.com/embed/")[1]?.split("?")[0]
                : ""
        }
        function d(e) {
          let t = u(e)
          if (t) return `https://www.youtube.com/embed/${t}`
        }
        function p(e) {
          let t = new Date(1e3 * e),
            a = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())),
            i = (a.getUTCDay() + 6) % 7
          a.setUTCDate(a.getUTCDate() - i + 3)
          let n = a.getUTCFullYear(),
            r = new Date(Date.UTC(n, 0, 4)),
            l = (r.getUTCDay() + 6) % 7
          r.setUTCDate(r.getUTCDate() - l + 3)
          let o = 1 + Math.round((a.getTime() - r.getTime()) / 6048e5)
          return `${n}_${String(o).padStart(2, "0")}`
        }
        function m() {
          return window.self !== window.top
        }
      },
      22065: function (e, t, a) {
        "use strict"
        ;(a.d(t, {
          k: function () {
            return n
          },
        }),
          a(17932),
          a(76429))
        var i = a(59176)
        let n = ({
          src: e,
          crossorigin: t = null,
          async: a = !0,
          timeoutMs: n,
          useExisting: r = !1,
          onBeforeFirstLoad: l,
        }) => {
          let o
          if (r) {
            let t = Array.from(document.scripts).find((t) => t.src === e)
            if (t)
              return "loaded" === t.scriptLoadingState
                ? Promise.resolve(t)
                : "error" === t.scriptLoadingState
                  ? Promise.reject(Error(`Script ${e} has failed state`))
                  : new Promise((a, i) => {
                      ;(t.addEventListener("load", () => {
                        ;(a(t), (t.scriptLoadingState = "loaded"))
                      }),
                        t.addEventListener("error", () => {
                          ;(i(Error(`Script ${e} has failed state`)),
                            (t.scriptLoadingState = "error"))
                        }))
                    })
          }
          let s = new AbortController()
          return (
            n &&
              (0, i.O1)(n).then(() => {
                s.abort()
              }),
            (function ({ src: e, document: t, abortSignal: a, onBeforeLoad: i }) {
              let n = !1
              return new Promise((r, l) => {
                let o = t.createElement("script")
                ;(a?.addEventListener("abort", () => {
                  n || (o.remove(), l(Error("Script aborted")))
                }),
                  (o.onload = () => {
                    ;((n = !0), r(o))
                  }),
                  (o.onerror = (e) => {
                    n || (o.remove(), l(Error("Failed to load script", { cause: e })))
                  }),
                  i?.(o),
                  (o.src = e),
                  t.body.appendChild(o))
              })
            })({
              document,
              src: e,
              abortSignal: s.signal,
              onBeforeLoad: (e) => {
                ;((o = e),
                  (e.async = a),
                  (e.scriptLoadingState = "loading"),
                  (e.crossOrigin = t),
                  l?.(e))
              },
            })
              .then((e) => ((e.scriptLoadingState = "loaded"), e))
              .catch((e) => {
                throw ((o.scriptLoadingState = "error"), e)
              })
          )
        }
      },
      26903: function (e, t, a) {
        "use strict"
        function i(e, t = { shorten: !1, decimals: 0 }) {
          if (void 0 === e) return ""
          let { shorten: a, decimals: n, minSeparated: r = 1e4 } = t,
            l = new Intl.NumberFormat("en", {
              useGrouping: !1,
              minimumFractionDigits: 0,
              maximumFractionDigits: n ?? 0,
            })
          if (a) {
            let t = Math.abs(e)
            for (let { threshold: a, suffix: i } of [
              { threshold: 1e9, suffix: "B" },
              { threshold: 1e6, suffix: "M" },
              { threshold: 1e3, suffix: "k" },
            ])
              if (t >= a) {
                let t = e / a
                return l.format(t) + i
              }
          }
          let o = l.format(e),
            s = "",
            c = o
          c.startsWith("-") && ((s = "-"), (c = c.slice(1)))
          let [u, d] = c.split("."),
            p = u
          return (
            Math.abs(Number(p)) >= r && (p = p?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")),
            s + (void 0 !== d ? `${p}.${d}` : p)
          )
        }
        ;(a.d(t, {
          F: function () {
            return i
          },
        }),
          a(17932),
          a(96466))
      },
      49863: function () {
        if ("u" > typeof screen && !screen.orientation) {
          let e = new EventTarget()
          ;(Object.defineProperty(e, "type", {
            get: () =>
              window.matchMedia("(orientation: landscape)").matches
                ? "landscape-primary"
                : "portrait-primary",
          }),
            Object.defineProperty(screen, "orientation", { value: e }))
        }
      },
      47006: function (e, t, a) {
        "use strict"
        a.d(t, {
          M1: function () {
            return l
          },
          Y0: function () {
            return r
          },
        })
        var i = a(3144)
        let n = Symbol("ApiRequests")
        function r(e) {
          return {
            install(t) {
              t.provide(n, e)
            },
          }
        }
        function l() {
          let e = (0, i.WQ)(n)
          if (!e) throw Error("No API class provided in Vue app.")
          return e
        }
      },
      62237: function (e, t, a) {
        "use strict"
        function i(e) {
          return null !== e && "object" == typeof e && "redirectTarget" in e && "status" in e
        }
        function n(e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "categoryType" in e &&
            "string" == typeof e.categoryType
          )
        }
        a.d(t, {
          ND: function () {
            return i
          },
          qu: function () {
            return n
          },
        })
      },
      77192: function (e, t, a) {
        "use strict"
        function i(e) {
          try {
            return new URL(e)
          } catch {
            return null
          }
        }
        ;(a.d(t, {
          A: function () {
            return i
          },
        }),
          a(31430),
          a(50589),
          a(34512))
      },
      8254: function (e, t, a) {
        "use strict"
        a.d(t, {
          u: function () {
            return i
          },
        })
        let i = (e) =>
          e.startsWith("portrait") ? "portrait" : e.startsWith("landscape") ? "landscape" : e
      },
      43088: function (e, t, a) {
        "use strict"
        a.d(t, {
          a: function () {
            return n
          },
        })
        var i = a(3144)
        let n = () => {
          let e = (0, i.KR)(!1)
          return (
            (0, i.sV)(() => {
              e.value = !0
            }),
            (0, i.hi)(() => {
              e.value = !1
            }),
            e
          )
        }
      },
      61780: function (e) {
        "use strict"
        e.exports = cheerio
      },
    },
    c = {}
  function u(e) {
    var t = c[e]
    if (void 0 !== t) return t.exports
    var a = (c[e] = { exports: {} })
    return (s[e].call(a.exports, a, a.exports, u), a.exports)
  }
  if (
    ((u.m = s),
    (u.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return (u.d(t, { a: t }), t)
    }),
    (t = Object.getPrototypeOf
      ? function (e) {
          return Object.getPrototypeOf(e)
        }
      : function (e) {
          return e.__proto__
        }),
    (u.t = function (a, i) {
      if (
        (1 & i && (a = this(a)),
        8 & i ||
          ("object" == typeof a &&
            a &&
            ((4 & i && a.__esModule) || (16 & i && "function" == typeof a.then))))
      )
        return a
      var n = Object.create(null)
      u.r(n)
      var r = {}
      e = e || [null, t({}), t([]), t(t)]
      for (
        var l = 2 & i && a;
        ("object" == typeof l || "function" == typeof l) && !~e.indexOf(l);
        l = t(l)
      )
        Object.getOwnPropertyNames(l).forEach(function (e) {
          r[e] = function () {
            return a[e]
          }
        })
      return (
        (r.default = function () {
          return a
        }),
        u.d(n, r),
        n
      )
    }),
    (u.d = function (e, t) {
      for (var a in t)
        u.o(t, a) && !u.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] })
    }),
    (u.f = {}),
    (u.e = function (e) {
      return Promise.all(
        Object.keys(u.f).reduce(function (t, a) {
          return (u.f[a](e, t), t)
        }, []),
      )
    }),
    (u.u = function (e) {
      return (
        "static/js/async/" +
        e +
        "." +
        {
          1098: "2b45de4f",
          1208: "03c90f84",
          1874: "0bd8dadb",
          1897: "0ec92f17",
          1988: "29a5e25e",
          2209: "a6447596",
          2316: "d05c63db",
          2338: "346ca591",
          2473: "9323d0c2",
          2493: "ce6daa80",
          257: "731c7aa1",
          2981: "65d6cfe3",
          3135: "f903057c",
          3172: "1cb5860c",
          3216: "99ad04cf",
          3231: "d664c008",
          3461: "b1a5b3ca",
          3515: "673acdf6",
          3869: "127232dd",
          4623: "aede2473",
          4666: "f3a460ae",
          4724: "b98a3ac1",
          4799: "e6a1e39a",
          4871: "f019c6ba",
          49: "0b9ffac1",
          5211: "a6a8d54a",
          5425: "83f6c8f2",
          5492: "4b132e5a",
          5501: "06a744b6",
          5637: "172ff9e3",
          5693: "ca035c5c",
          5839: "b6a97ee9",
          5947: "99675406",
          644: "fd088d9e",
          6526: "7e05aeac",
          6527: "ae3a18b9",
          6908: "516ee545",
          6985: "4323108c",
          7252: "f0435be3",
          7291: "386c5003",
          7414: "e98cd5b0",
          7515: "f635411a",
          7627: "16c255ac",
          7725: "818e4c8f",
          7754: "630fde1f",
          7871: "07a42b89",
          8191: "4d48cb05",
          839: "675806ea",
          8404: "9328780f",
          8437: "791a0883",
          8598: "7478379e",
          9039: "c103832f",
          9190: "1bb7cc7b",
          9396: "05ba4d7d",
          960: "967b7b9d",
          9752: "67e3c904",
        }[e] +
        ".js"
      )
    }),
    (u.miniCssF = function (e) {
      return (
        "static/css/async/" +
        e +
        "." +
        {
          1208: "245670ed",
          1874: "bc352913",
          2209: "b6edd30c",
          2316: "7a1a7b05",
          2338: "87e254b3",
          2473: "bf33695f",
          2493: "e3cfb037",
          3172: "6b277d50",
          4666: "746c3bef",
          4724: "b36bad0a",
          4871: "98f62233",
          49: "76758a4b",
          5637: "5cbce03d",
          5947: "0eceb072",
          644: "79a957fd",
          6526: "73a7cdc8",
          6527: "a82a1544",
          6985: "3efd888b",
          7252: "52525a29",
          7291: "b895c2e3",
          7515: "6e16a96f",
          8191: "03a90f72",
          8404: "5240aab3",
          8437: "3efd888b",
          9120: "4ad27c84",
          9190: "9763fedf",
          9396: "16826c3f",
        }[e] +
        ".css"
      )
    }),
    (u.g = (function () {
      if ("object" == typeof globalThis) return globalThis
      try {
        return this || Function("return this")()
      } catch (e) {
        if ("object" == typeof window) return window
      }
    })()),
    (u.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (a = {}),
    (i = "portal-frontend-vue:"),
    (u.l = function (e, t, n, r) {
      if (a[e]) return void a[e].push(t)
      if (void 0 !== n)
        for (var l, o, s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
          var d = s[c]
          if (d.getAttribute("src") == e || d.getAttribute("data-rspack") == i + n) {
            l = d
            break
          }
        }
      ;(l ||
        ((o = !0),
        ((l = document.createElement("script")).timeout = 120),
        u.nc && l.setAttribute("nonce", u.nc),
        l.setAttribute("data-rspack", i + n),
        (l.src = e)),
        (a[e] = [t]))
      var p = function (t, i) {
          ;((l.onerror = l.onload = null), clearTimeout(m))
          var n = a[e]
          if (
            (delete a[e],
            l.parentNode && l.parentNode.removeChild(l),
            n &&
              n.forEach(function (e) {
                return e(i)
              }),
            t)
          )
            return t(i)
        },
        m = setTimeout(p.bind(null, void 0, { type: "timeout", target: l }), 12e4)
      ;((l.onerror = p.bind(null, l.onerror)),
        (l.onload = p.bind(null, l.onload)),
        o && document.head.appendChild(l))
    }),
    (u.r = function (e) {
      ;("u" > typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }))
    }),
    (n = []),
    (u.O = function (e, t, a, i) {
      if (t) {
        i = i || 0
        for (var r = n.length; r > 0 && n[r - 1][2] > i; r--) n[r] = n[r - 1]
        n[r] = [t, a, i]
        return
      }
      for (var l = 1 / 0, r = 0; r < n.length; r++) {
        for (var t = n[r][0], a = n[r][1], i = n[r][2], o = !0, s = 0; s < t.length; s++)
          (!1 & i || l >= i) &&
          Object.keys(u.O).every(function (e) {
            return u.O[e](t[s])
          })
            ? t.splice(s--, 1)
            : ((o = !1), i < l && (l = i))
        if (o) {
          n.splice(r--, 1)
          var c = a()
          void 0 !== c && (e = c)
        }
      }
      return e
    }),
    (u.p = "/"),
    (u.svgSprite = function (e) {
      return u.p + "static/svg/sprite.602e4e87.svg#" + e
    }),
    "u" > typeof document)
  ) {
    var d = function (e, t, a, i, n) {
        var r = document.createElement("link")
        return (
          (r.rel = "stylesheet"),
          (r.type = "text/css"),
          u.nc && (r.nonce = u.nc),
          (r.href = t),
          (r.onerror = r.onload =
            function (a) {
              if (((r.onerror = r.onload = null), "load" === a.type)) i()
              else {
                var l = a && ("load" === a.type ? "missing" : a.type),
                  o = (a && a.target && a.target.href) || t,
                  s = Error("Loading CSS chunk " + e + " failed.\\n(" + o + ")")
                ;((s.code = "CSS_CHUNK_LOAD_FAILED"),
                  (s.type = l),
                  (s.request = o),
                  r.parentNode && r.parentNode.removeChild(r),
                  n(s))
              }
            }),
          a ? a.parentNode.insertBefore(r, a.nextSibling) : document.head.appendChild(r),
          r
        )
      },
      p = function (e, t) {
        for (var a = document.getElementsByTagName("link"), i = 0; i < a.length; i++) {
          var n = a[i],
            r = n.getAttribute("data-href") || n.getAttribute("href")
          if ((r && (r = r.split("?")[0]), "stylesheet" === n.rel && (r === e || r === t))) return n
        }
        for (var l = document.getElementsByTagName("style"), i = 0; i < l.length; i++) {
          var n = l[i],
            r = n.getAttribute("data-href")
          if (r === e || r === t) return n
        }
      },
      m = { 8410: 0 }
    u.f.miniCss = function (e, t) {
      if (m[e]) t.push(m[e])
      else
        0 !== m[e] &&
          {
            1208: 1,
            1874: 1,
            2209: 1,
            2316: 1,
            2338: 1,
            2473: 1,
            2493: 1,
            3172: 1,
            4666: 1,
            4724: 1,
            4871: 1,
            49: 1,
            5637: 1,
            5947: 1,
            644: 1,
            6526: 1,
            6527: 1,
            6985: 1,
            7252: 1,
            7291: 1,
            7515: 1,
            8191: 1,
            8404: 1,
            8437: 1,
            9120: 1,
            9190: 1,
            9396: 1,
          }[e] &&
          t.push(
            (m[e] = new Promise(function (t, a) {
              var i = u.miniCssF(e),
                n = u.p + i
              if (p(i, n)) return t()
              d(e, n, null, t, a)
            }).then(
              function () {
                m[e] = 0
              },
              function (t) {
                throw (delete m[e], t)
              },
            )),
          )
    }
  }
  ;((r = { 6357: 0, 8410: 0 }),
    (u.f.j = function (e, t) {
      var a = u.o(r, e) ? r[e] : void 0
      if (0 !== a)
        if (a) t.push(a[2])
        else if (/^(6357|9120)$/.test(e)) r[e] = 0
        else {
          var i = new Promise(function (t, i) {
            a = r[e] = [t, i]
          })
          t.push((a[2] = i))
          var n = u.p + u.u(e),
            l = Error()
          u.l(
            n,
            function (t) {
              if (u.o(r, e) && (0 !== (a = r[e]) && (r[e] = void 0), a)) {
                var i = t && ("load" === t.type ? "missing" : t.type),
                  n = t && t.target && t.target.src
                ;((l.message = "Loading chunk " + e + " failed.\n(" + i + ": " + n + ")"),
                  (l.name = "ChunkLoadError"),
                  (l.type = i),
                  (l.request = n),
                  a[1](l))
              }
            },
            "chunk-" + e,
            e,
          )
        }
    }),
    (u.O.j = function (e) {
      return 0 === r[e]
    }),
    (l = function (e, t) {
      var a,
        i,
        n = t[0],
        l = t[1],
        o = t[2],
        s = 0
      if (
        n.some(function (e) {
          return 0 !== r[e]
        })
      ) {
        for (a in l) u.o(l, a) && (u.m[a] = l[a])
        if (o) var c = o(u)
      }
      for (e && e(t); s < n.length; s++) ((i = n[s]), u.o(r, i) && r[i] && r[i][0](), (r[i] = 0))
      return u.O(c)
    }),
    (o = self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).forEach(
      l.bind(null, 0),
    ),
    (o.push = l.bind(null, o.push.bind(o))))
  var g = u.O(void 0, ["6357", "2967"], function () {
    return u(51310)
  })
  u.O(g)
})()
//# sourceMappingURL=index.af04da24.js.map
