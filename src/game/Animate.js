/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-12 10:46:56
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-12 10:46:56
 * @Description: 动画类：提供动画相关接口
 */
import tweenOptions from "./Tween"

class Animate {
  to(
    from = {},
    to = {},
    duration = .5,
    type = "Linear",
    delay = 0,
    cb = () => {}
  ) {
    for (const prop in from) {
      if (typeof from[prop] === "number" && typeof to[prop] === "number") {
        this.tweenAnimate(from[prop], to[prop], duration, type, (delta, flag) => {
          from[prop] = delta
          cb(flag)
        })
      }
    }
  }
  
  tweenAnimate(from, to, duration, type, cb) {
    const frameCount = duration * 1000 / 17
    const tween = tweenOptions[type]
    let start = -1
    let lastTime = new Date()
    
    function animate() {
      const currentTime = new Date()
      const interval = currentTime - lastTime
      
      if (interval <= 17) {
        // 单帧
        start ++
      } else {
        // 跳帧
        start += Math.floor(interval / 17)
      }
      
      // 计算变化的值
      const delta = tween(start, from, to - from, frameCount)
      
      if (start <= frameCount) {
        cb(delta)
        requestAnimationFrame(animate)
      } else {
        cb(to, true)
        return
      }
      
      // 更新时间
      lastTime = new Date()
    }
    animate()
  }
}

export default new Animate()
