<template>
  <div></div>
</template>

<script>
export default {
  name: 'login',
  created () {
    this.r = 0
    this.n = 0
    this.t = []
    this.ctx1 = ''
    this.f = {
      k: null,
      y: null,
      max: 2000
    }
    this.s = {}
  },
  mounted () {
    this.u = document.createElement('canvas')
    this.ctx1 = this.u.getContext('2d')
    this.s = this.l()
    let c = 'c_n' + this.s.l
    // 浏览器宽度和长度
    this.r = 0
    this.n = 0
    let a = Math.random()
    // let f = {k: null, y: null, max: 20000}
    this.u.id = c
    this.u.style.cssText = 'position:fixed;top:0;left:0;z-index:' + this.s.z + ';opacity:' + this.s.o
    // 在body标签里添加canvas动画
    this.j('body')[0].appendChild(this.u)
    this.k()
    window.onresize = this.k()
    // 鼠标事件
    window.onmousemove = function (i) {
      i = i || window.event
      this.f.x = i.clientX
      this.f.y = i.clientY
    }.bind(this)
    window.onmouseout = function () {
      this.f.x = null
      this.f.y = null
    }.bind(this)
    for (let p = 0; this.s.n > p; p++) {
      let h = a * this.r
      let g = a * this.n
      let q = 2 * a - 1
      let d = 2 * a - 1
      this.t.push({x: h, y: g, xa: q, ya: d, max: 6000})
    }
    setTimeout(() => { this.b() }, 100)
  },
  methods: {
    o (w, v, i) {
      return w.getAttribute(v) || i
    },
    j (i) {
      return document.getElementsByTagName(i)
    },
    l () {
      let i = this.j('script')
      let w = i.length
      let v = i[w - 1]
      return {
        l: w,
        z: this.o(v, 'zIndex', -1),
        o: this.o(v, 'opacity', 0.9),
        c: this.o(v, 'color', '0,0,255'),
        n: this.o(v, 'count', 99)
      }
    },
    k () {
      this.r = this.u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      this.n = this.u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    },
    b () {
      this.ctx1.clearRect(0, 0, this.r, this.n)
      let w = [this.f].concat(this.t)
      console.log('www')
      console.log(w)
      let x
      let v
      let A
      let B
      let z
      let y
      this.t.forEach((i) => {
        i.x += i.xa
        i.y += i.ya
        i.xa *= i.x > this.r || i.x < 0 ? -1 : 1
        i.ya *= i.y > this.n || i.y < 0 ? -1 : 1
        this.ctx1.fillRect(i.x - 0.5, i.y - 0.5, 1, 1)
        for (v = 0; v < w.length; v++) {
          x = w[v]
          if (i !== x && x.x !== null && x.y !== null) {
            B = i.x - x.x
            z = i.y - x.y
            y = B * B + z * z
            // y < x.max && (x === this.f && y >= x.max / 2 && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, this.e.beginPath(), this.e.lineWidth = A / 2, this.e.strokeStyle = 'rgba(' + this.s.c + ',' + (A + 0.2) + ')', this.e.moveTo(i.x, i.y), this.e.lineTo(x.x, x.y), this.e.stroke())
            // 上面注释掉的代码翻译后的逻辑
            if (y < x.max) {
              if (x === this.f) {
                let tempA = x.max / 2
                if (y > tempA) {
                  i.x -= 0.03 * B
                  i.y -= 0.03 * z
                  A = (x.max - y) / x.max
                  this.ctx1.beginPath()
                  this.ctx1.lineWidth = A / 2
                  this.ctx1.strokeStyle = 'rgba(' + this.s.c + ',' + (A + 0.2) + ')'
                  this.ctx1.moveTo(i.x, i.y)
                  this.ctx1.lineTo(x.x, x.y)
                  this.ctx1.stroke()
                }
              }
            }
          }
        }
        w.splice(w.indexOf(i), 1)
      })
      let m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (b) {
        window.setTimeout(b, 1000 / 45)
      }
      m(this.b)
      // this.m(this.b)
    }
  }
}
</script>

<style scoped>

</style>
