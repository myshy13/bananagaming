"use strict"
;(self.webpackChunkportal_frontend_vue = self.webpackChunkportal_frontend_vue || []).push([
  ["4871"],
  {
    23594: function (e, a, t) {
      ;(t.r(a),
        t.d(a, {
          default: function () {
            return f
          },
        }))
      var n = t(3144),
        s = t(93911),
        l = t(76915),
        r = t(30232),
        u = t(87743),
        o = t(73577),
        c = t(47006),
        m = (0, n.pM)({
          __name: "RandomGame",
          setup(e) {
            let a = (0, l.rd)(),
              t = (0, u.C)(),
              { getRandomGameHRUs: m } = (0, c.M1)()
            async function i() {
              let [e] = (await m({ platform: t.platform })) || []
              return e
            }
            return (
              (0, s.u)({ meta: [{ name: "robots", content: "noindex, nofollow" }] }),
              (0, n.KC)(async () => {
                let e = await i()
                a.replace({ name: r.V2.GAME_PAGE, params: { game: e } })
              }),
              (0, n.SS)(async () => {
                let e = await i()
                e
                  ? (t.setPageStatus(302),
                    t.setTargetURL(
                      a.resolve({ name: r.V2.GAME_PAGE, params: { game: e } }).fullPath,
                    ),
                    t.setHeaders({
                      "X-BFF-Redirect-Mechanism": o.Ct.FRONTEND_REDIRECT,
                      "X-BFF-Redirect-Reason": o.Jo.RANDOM_GAME_SET,
                    }))
                  : t.setPageStatus(404)
              }),
              (e, a) => (
                (0, n.uX)(),
                (0, n.CE)("div", { class: (0, n.C4)(e.$style.main) }, null, 2)
              )
            )
          },
        }),
        i = t(97939)
      let d = {}
      d.$style = { main: "lk3GH" }
      var f = (0, i.default)(m, [["__cssModules", d]])
    },
  },
])
//# sourceMappingURL=4871.f019c6ba.js.map
