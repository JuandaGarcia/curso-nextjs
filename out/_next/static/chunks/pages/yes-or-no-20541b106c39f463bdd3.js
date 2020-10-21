_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [13],
  {
    'HaE+': function (e, t, a) {
      'use strict'
      function n(e, t, a, n, c, r, i) {
        try {
          var o = e[r](i),
            s = o.value
        } catch (l) {
          return void a(l)
        }
        o.done ? t(s) : Promise.resolve(s).then(n, c)
      }
      function c(e) {
        return function () {
          var t = this,
            a = arguments
          return new Promise(function (c, r) {
            var i = e.apply(t, a)
            function o(e) {
              n(i, c, r, o, s, 'next', e)
            }
            function s(e) {
              n(i, c, r, o, s, 'throw', e)
            }
            o(void 0)
          })
        }
      }
      a.d(t, 'a', function () {
        return c
      })
    },
    QetY: function (e, t, a) {
      'use strict'
      a('RIqP')
      var n = a('pVnL'),
        c = a.n(n),
        r = a('lwsE'),
        i = a.n(r),
        o = a('W8MJ'),
        s = a.n(o),
        l = a('a1gu'),
        u = a.n(l),
        d = a('Nsbk'),
        b = a.n(d),
        p = a('PJYZ'),
        f = a.n(p),
        v = a('7W2i'),
        h = a.n(v),
        m = a('lSNA'),
        j = a.n(m),
        O = a('Og4/'),
        g = a.n(O),
        y = a('J2iB'),
        N = a.n(y),
        x = a('85CM'),
        E = a('TSYQ'),
        w = a.n(E),
        k = (a('17x9'), a('q1tI')),
        P = a.n(k),
        C = a('H+2d'),
        _ = a('ZeOK'),
        I = a('ICNK'),
        T = a('Y53p'),
        Q = a('MZgk'),
        R = a('D1pA'),
        S = a('MqQV')
      function z(e) {
        var t = e.children,
          a = e.className,
          n = e.content,
          r = e.hidden,
          i = e.visible,
          o = w()(
            Object(_.a)(i, 'visible'),
            Object(_.a)(r, 'hidden'),
            'content',
            a
          ),
          s = Object(I.a)(z, e),
          l = Object(T.a)(z, e)
        return P.a.createElement(
          l,
          c()({}, s, { className: o }),
          C.b.isNil(t) ? n : t
        )
      }
      ;(z.handledProps = [
        'as',
        'children',
        'className',
        'content',
        'hidden',
        'visible',
      ]),
        (z.propTypes = {})
      var Y = z,
        q = a('3WF5'),
        A = a.n(q)
      function J(e) {
        var t = e.attached,
          a = e.basic,
          n = e.buttons,
          r = e.children,
          i = e.className,
          o = e.color,
          s = e.compact,
          l = e.content,
          u = e.floated,
          d = e.fluid,
          b = e.icon,
          p = e.inverted,
          f = e.labeled,
          v = e.negative,
          h = e.positive,
          m = e.primary,
          j = e.secondary,
          O = e.size,
          g = e.toggle,
          y = e.vertical,
          x = e.widths,
          E = w()(
            'ui',
            o,
            O,
            Object(_.a)(a, 'basic'),
            Object(_.a)(s, 'compact'),
            Object(_.a)(d, 'fluid'),
            Object(_.a)(b, 'icon'),
            Object(_.a)(p, 'inverted'),
            Object(_.a)(f, 'labeled'),
            Object(_.a)(v, 'negative'),
            Object(_.a)(h, 'positive'),
            Object(_.a)(m, 'primary'),
            Object(_.a)(j, 'secondary'),
            Object(_.a)(g, 'toggle'),
            Object(_.a)(y, 'vertical'),
            Object(_.b)(t, 'attached'),
            Object(_.e)(u, 'floated'),
            Object(_.g)(x),
            'buttons',
            i
          ),
          k = Object(I.a)(J, e),
          Q = Object(T.a)(J, e)
        return N()(n)
          ? P.a.createElement(
              Q,
              c()({}, k, { className: E }),
              C.b.isNil(r) ? l : r
            )
          : P.a.createElement(
              Q,
              c()({}, k, { className: E }),
              A()(n, function (e) {
                return D.create(e)
              })
            )
      }
      ;(J.handledProps = [
        'as',
        'attached',
        'basic',
        'buttons',
        'children',
        'className',
        'color',
        'compact',
        'content',
        'floated',
        'fluid',
        'icon',
        'inverted',
        'labeled',
        'negative',
        'positive',
        'primary',
        'secondary',
        'size',
        'toggle',
        'vertical',
        'widths',
      ]),
        (J.propTypes = {})
      var K = J
      function M(e) {
        var t = e.className,
          a = e.text,
          n = w()('or', t),
          r = Object(I.a)(M, e),
          i = Object(T.a)(M, e)
        return P.a.createElement(
          i,
          c()({}, r, { className: n, 'data-text': a })
        )
      }
      ;(M.handledProps = ['as', 'className', 'text']), (M.propTypes = {})
      var W = M,
        X = (function (e) {
          function t() {
            var e, a
            i()(this, t)
            for (var n = arguments.length, c = new Array(n), r = 0; r < n; r++)
              c[r] = arguments[r]
            return (
              (a = u()(this, (e = b()(t)).call.apply(e, [this].concat(c)))),
              j()(f()(a), 'ref', Object(k.createRef)()),
              j()(f()(a), 'computeElementType', function () {
                var e = a.props,
                  t = e.attached,
                  n = e.label
                if (!N()(t) || !N()(n)) return 'div'
              }),
              j()(f()(a), 'computeTabIndex', function (e) {
                var t = a.props,
                  n = t.disabled,
                  c = t.tabIndex
                return N()(c) ? (n ? -1 : 'div' === e ? 0 : void 0) : c
              }),
              j()(f()(a), 'focus', function () {
                return g()(a.ref.current, 'focus')
              }),
              j()(f()(a), 'handleClick', function (e) {
                a.props.disabled
                  ? e.preventDefault()
                  : g()(a.props, 'onClick', e, a.props)
              }),
              j()(f()(a), 'hasIconClass', function () {
                var e = a.props,
                  t = e.labelPosition,
                  n = e.children,
                  c = e.content,
                  r = e.icon
                return !0 === r || (r && (t || (C.b.isNil(n) && N()(c))))
              }),
              a
            )
          }
          return (
            h()(t, e),
            s()(t, [
              {
                key: 'computeButtonAriaRole',
                value: function (e) {
                  var t = this.props.role
                  return N()(t) ? ('button' !== e ? 'button' : void 0) : t
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    a = e.active,
                    n = e.animated,
                    r = e.attached,
                    i = e.basic,
                    o = e.children,
                    s = e.circular,
                    l = e.className,
                    u = e.color,
                    d = e.compact,
                    b = e.content,
                    p = e.disabled,
                    f = e.floated,
                    v = e.fluid,
                    h = e.icon,
                    m = e.inverted,
                    j = e.label,
                    O = e.labelPosition,
                    g = e.loading,
                    y = e.negative,
                    E = e.positive,
                    k = e.primary,
                    Q = e.secondary,
                    z = e.size,
                    Y = e.toggle,
                    q = w()(
                      u,
                      z,
                      Object(_.a)(a, 'active'),
                      Object(_.a)(i, 'basic'),
                      Object(_.a)(s, 'circular'),
                      Object(_.a)(d, 'compact'),
                      Object(_.a)(v, 'fluid'),
                      Object(_.a)(this.hasIconClass(), 'icon'),
                      Object(_.a)(m, 'inverted'),
                      Object(_.a)(g, 'loading'),
                      Object(_.a)(y, 'negative'),
                      Object(_.a)(E, 'positive'),
                      Object(_.a)(k, 'primary'),
                      Object(_.a)(Q, 'secondary'),
                      Object(_.a)(Y, 'toggle'),
                      Object(_.b)(n, 'animated'),
                      Object(_.b)(r, 'attached')
                    ),
                    A = w()(Object(_.b)(O || !!j, 'labeled')),
                    J = w()(
                      Object(_.a)(p, 'disabled'),
                      Object(_.e)(f, 'floated')
                    ),
                    K = Object(I.a)(t, this.props),
                    M = Object(T.a)(t, this.props, this.computeElementType),
                    W = this.computeTabIndex(M)
                  if (!N()(j)) {
                    var X = w()('ui', q, 'button', l),
                      D = w()('ui', A, 'button', l, J),
                      G = S.a.create(j, {
                        defaultProps: {
                          basic: !0,
                          pointing: 'left' === O ? 'right' : 'left',
                        },
                        autoGenerateKey: !1,
                      })
                    return P.a.createElement(
                      M,
                      c()({}, K, { className: D, onClick: this.handleClick }),
                      'left' === O && G,
                      P.a.createElement(
                        x.a,
                        { innerRef: this.ref },
                        P.a.createElement(
                          'button',
                          {
                            className: X,
                            'aria-pressed': Y ? !!a : void 0,
                            disabled: p,
                            tabIndex: W,
                          },
                          R.a.create(h, { autoGenerateKey: !1 }),
                          ' ',
                          b
                        )
                      ),
                      ('right' === O || !O) && G
                    )
                  }
                  var B = w()('ui', q, J, A, 'button', l),
                    H = !C.b.isNil(o),
                    L = this.computeButtonAriaRole(M)
                  return P.a.createElement(
                    x.a,
                    { innerRef: this.ref },
                    P.a.createElement(
                      M,
                      c()({}, K, {
                        className: B,
                        'aria-pressed': Y ? !!a : void 0,
                        disabled: (p && 'button' === M) || void 0,
                        onClick: this.handleClick,
                        role: L,
                        tabIndex: W,
                      }),
                      H && o,
                      !H && R.a.create(h, { autoGenerateKey: !1 }),
                      !H && b
                    )
                  )
                },
              },
            ]),
            t
          )
        })(k.Component)
      j()(X, 'defaultProps', { as: 'button' }),
        j()(X, 'Content', Y),
        j()(X, 'Group', K),
        j()(X, 'Or', W),
        j()(X, 'handledProps', [
          'active',
          'animated',
          'as',
          'attached',
          'basic',
          'children',
          'circular',
          'className',
          'color',
          'compact',
          'content',
          'disabled',
          'floated',
          'fluid',
          'icon',
          'inverted',
          'label',
          'labelPosition',
          'loading',
          'negative',
          'onClick',
          'positive',
          'primary',
          'role',
          'secondary',
          'size',
          'tabIndex',
          'toggle',
        ]),
        (X.propTypes = {}),
        (X.create = Object(Q.d)(X, function (e) {
          return { content: e }
        }))
      var D = (t.a = X)
    },
    QyOW: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, '__N_SSP', function () {
          return O
        })
      var n = a('o0o1'),
        c = a.n(n),
        r = a('HaE+'),
        i = a('MX0m'),
        o = a.n(i),
        s = a('q1tI'),
        l = a.n(s),
        u = a('vcXL'),
        d = a.n(u),
        b = a('YFqc'),
        p = a.n(b),
        f = a('aQu0'),
        v = a('QetY'),
        h = a('pdCo'),
        m = l.a.createElement,
        j = (function () {
          var e = Object(r.a)(
            c.a.mark(function e() {
              var t, a, n
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        d()('https://platzi-avo.vercel.app/api/yes-or-no')
                      )
                    case 2:
                      return (t = e.sent), (e.next = 5), t.json()
                    case 5:
                      return (a = e.sent), (n = a.data), e.abrupt('return', n)
                    case 8:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        O = !0
      t.default = function (e) {
        var t = e.initialResult,
          a = Object(s.useState)(!1),
          n = a[0],
          i = a[1],
          l = Object(s.useState)(t),
          u = l[0],
          d = l[1],
          b = Object(s.useState)(0),
          O = b[0],
          g = b[1]
        Object(s.useEffect)(
          function () {
            i(!0),
              j().then(function (e) {
                d(e), i(!1)
              })
          },
          [O]
        )
        var y = (function () {
          var e = Object(r.a)(
            c.a.mark(function e() {
              return c.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      g(O + 1)
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })()
        return m(
          h.a,
          null,
          m(
            'div',
            { className: 'jsx-3588775597' },
            m(f.a, { as: 'h1', color: n ? 'grey' : 'green' }, u),
            m(
              'p',
              { className: 'jsx-3588775597' },
              m(
                v.a,
                { color: 'green', onClick: y, loading: n, disabled: n },
                'Intentar de nuevo'
              )
            ),
            m(
              'p',
              { className: 'jsx-3588775597' },
              m(
                p.a,
                { href: '/' },
                m(
                  'a',
                  { className: 'jsx-3588775597 ui black button basic' },
                  'Volver al inicio'
                )
              )
            )
          ),
          m(o.a, { id: '3588775597' }, [
            'div.jsx-3588775597{text-align:center;}',
            'div.jsx-3588775597 h1.header{font-size:7rem;text-transform:uppercase;}',
          ])
        )
      }
    },
    p2Ds: function (e, t, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/yes-or-no',
        function () {
          return a('QyOW')
        },
      ])
    },
    vcXL: function (e, t, a) {
      'use strict'
      var n = self.fetch.bind(self)
      ;(e.exports = n), (e.exports.default = e.exports)
    },
  },
  [['p2Ds', 0, 2, 1, 3]],
])
