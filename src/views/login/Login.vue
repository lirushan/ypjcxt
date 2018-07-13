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
      k: 0,
      y: 0,
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
    // let f = {k: null, y: null, max: 20000}
    this.u.id = c
    this.u.style.cssText = 'position:fixed;top:0;left:0;z-index:' + this.s.z + ';opacity:' + this.s.o
    // 在body标签里添加canvas动画
    this.j('body')[0].appendChild(this.u)
    this.k()
    window.onresize = this.k
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
    // 粒子参数2
    for (let p = 0; this.s.n > p; p++) {
      let h = Math.random() * this.r
      let g = Math.random() * this.n
      // 粒子移动速度
      let q = 2 * Math.random() - 1
      let d = 2 * Math.random() - 1
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
    // 粒子参数1
    l () {
      let i = this.j('script')
      let w = i.length
      let v = i[w - 1]
      return {
        l: w,
        z: this.o(v, 'zIndex', -1),
        o: this.o(v, 'opacity', 0.9),
        c: this.o(v, 'color', '0,0,255'),
        n: this.o(v, 'count', 199)
      }
    },
    // 颜色16进制转RGBA
    colorToRGB (color, alpha) {
      if (typeof color === 'string' && color[0] === '#') {
        color = window.parseInt(color.slice(1), 16)
      }
      alpha = (alpha === undefined) ? 1 : alpha
      // 解析
      let r = color >> 16 & 0xff
      let g = color >> 8 & 0xff
      let b = color >> 4 & 0xff
      let a = (alpha < 0) ? 0 : ((alpha > 1) ? 1 : alpha)
      if (a === 1) {
        return 'rgb(' + r + ',' + g + ',' + b + ')'
      } else {
        return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
      }
    },
    // 绘制粒子
    drawDot (i) {
      // let radiusStr = '1,2,3'
      // let radiusArr = radiusStr.split(',') // 粒子半径
      // let radius = radiusArr[Math.round(Math.random() * (radiusArr.length - 1))]
      let radius = 2
      let color = this.colorToRGB('#DDF', '0.5') // 粒子颜色
      this.ctx1.save()
      this.ctx1.translate(i.x - 0.5, i.y - 0.5)
      // 旋转
      this.ctx1.rotate(0)
      // 比例
      this.ctx1.scale(1, 1)
      this.ctx1.fillStyle = color
      this.ctx1.strokeStyle = color
      this.ctx1.beginPath()
      this.ctx1.arc(0, 0, radius, 0, Math.PI * 2, false)
      this.ctx1.closePath()
      this.ctx1.fill()
      this.ctx1.restore()
    },
    // 浏览器长宽
    k () {
      this.r = this.u.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      this.n = this.u.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    },
    // 业务逻辑
    b () {
      // 粒子每走一步就清空一次矩形, 如果不清空，粒子走的路线会变成线条型
      this.ctx1.clearRect(0, 0, this.r, this.n)
      // 粒子
      let w = [this.f].concat(this.t)
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
        // 绘制矩形
        // this.ctx1.fillRect(i.x - 0.5, i.y - 0.5, 10, 10)
        // 绘制圆形
        this.drawDot(i)
        for (v = 0; v < w.length; v++) {
          x = w[v]
          if (i !== x && x.x !== null && x.y !== null) {
            B = i.x - x.x
            z = i.y - x.y
            y = B * B + z * z
            // y < x.max && (x === this.f && y >= (x.max / 2) && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, this.ctx1.beginPath(), this.ctx1.lineWidth = A / 2, this.ctx1.strokeStyle = 'rgba(' + this.s.c + ',' + (A + 0.2) + ')', this.ctx1.moveTo(i.x, i.y), this.ctx1.lineTo(x.x, x.y), this.ctx1.stroke())
            // 上面注释掉的代码翻译后的逻辑
            if (y < x.max) {
              if (x === this.f && y > (x.max / 2)) {
                i.x -= 0.03 * B
                i.y -= 0.03 * z
              }
              A = (x.max - y) / x.max
              this.ctx1.beginPath()
              // 线宽
              this.ctx1.lineWidth = A / 2 + 1
              // 线条颜色
              this.ctx1.strokeStyle = 'rgba(' + this.s.c + ',' + (A + 0.2) + ')'
              this.ctx1.moveTo(i.x, i.y)
              this.ctx1.lineTo(x.x, x.y)
              this.ctx1.stroke()
            }
          }
        }
        w.splice(w.indexOf(i), 1)
      })
      let m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (b) {
        window.setTimeout(b, 1000 / 45)
      }
      m(this.b)
    }
  }
}
</script>

<style scoped>

</style>
