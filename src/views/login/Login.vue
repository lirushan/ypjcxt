<template>
  <div id="login">
    <div
      style="width: 27em; height: 21em; left:0; top:0; right:0; bottom: 0; margin: auto;position: absolute; background-color: #FFF;border-radius: 5px; opacity: 0.95 ">
      <header
        style="text-align: center; font-weight: bold; font-size: 18px; letter-spacing: 1px; padding: 5% 0; border-bottom: 1px solid gainsboro;">
        XXXXXXXXXXX项目管理平台
      </header>
      <section>
        <el-form style="padding: 20px 20px;" class="test" :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="ename">
            <el-input placeholder="请输入用户名" v-model="ruleForm.ename">
              <template slot="prepend"><i class="fa fa-user-circle-o"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input placeholder="请输入密码" v-model="ruleForm.pwd">
              <template slot="prepend"><i class="fa fa-keyboard-o"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="valicode">
            <el-input placeholder="请输入验证码" v-model="ruleForm.valicode">
              <template slot="prepend"><i class="fa fa-key"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%;" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    // 自定义校验规则
    let checkEname = (rule, value, callback) => {
      setTimeout(() => {
        if (value.length > 15) {
          callback(new Error('用户名字符长度过长'))
        } else {
          callback()
        }
      }, 100)
    }
    return {
      ruleForm: {ename: '', pwd: '', valicode: ''},
      rules: {
        ename: [{required: true, message: '请输入用户名', trigger: 'blur'}, {validator: checkEname, trigger: 'blur'}]
      }
    }
  },
  created () {
    this.r = 0
    this.n = 0
    this.t = []
    this.ctx1 = ''
    // 鼠标连线参数
    this.f = {
      k: 0,
      y: 0,
      max: 20000
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
    this.j('body')[0].style.backgroundColor = '#2D58E3'
    this.k()
    // window.onresize = this.k()
    window.onresize = () => {
      return (() => {
        this.k()
      })()
    }
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
      this.t.push({x: h, y: g, xa: q, ya: d, max: 10000})
    }
    setTimeout(() => { this.b() }, 100)
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push({
            name: 'win_server'
          })
          this.j('canvas')[0].remove()
          this.j('body')[0].style.backgroundColor = 'white'
          // alert('submit')
        } else {
          console.log('error commit!')
          return false
        }
      })
    },
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
        c: this.o(v, 'color', '192,192,192'),
        n: this.o(v, 'count', 200)
      }
    },
    // 绘制粒子
    drawDot (i) {
      let radius = 2
      this.ctx1.save()
      this.ctx1.translate(i.x - 0.5, i.y - 0.5)
      // 旋转
      this.ctx1.rotate(0)
      // 比例
      this.ctx1.scale(1, 1)
      this.ctx1.fillStyle = 'rgba(255,255,255)'
      this.ctx1.strokeStyle = 'rgba(255,255,255)'
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
            // 两粒子x轴的距离
            B = i.x - x.x
            // 两粒子y轴的距离
            z = i.y - x.y
            // 计算两个粒子之间的最短距离 y
            y = B * B + z * z
            // y < x.max && (x === this.f && y >= (x.max / 2) && (i.x -= 0.03 * B, i.y -= 0.03 * z), A = (x.max - y) / x.max, this.ctx1.beginPath(), this.ctx1.lineWidth = A / 2, this.ctx1.strokeStyle = 'rgba(' + this.s.c + ',' + (A + 0.2) + ')', this.ctx1.moveTo(i.x, i.y), this.ctx1.lineTo(x.x, x.y), this.ctx1.stroke())
            // 上面注释掉的代码翻译后的逻辑
            // 如果两粒子的距离小于6000就连线
            if (y < x.max) {
              // 鼠标控制粒子的引力大小
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

<style>
  /* 样式修改 */
  .test .el-input-group__prepend {
    padding: 0 14px
  }
</style>
