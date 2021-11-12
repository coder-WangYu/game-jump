/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-12 11:20:45
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-12 11:20:45
 * @Description: 数学模型：存储运动动画相关的数据模型
 */

/**
 * t: 当前帧 currentFrame
 * b: 起始量 from
 * c: 变化量 to - from
 * d: 总帧数 frameCount
 */
const Tween = {
  Linear: function (t, b, c, d) {
    return c * t / d + b
  },
  BounceEaseOut: function easeOut(t, b, c, d) {
    // console.log(t < 2 / 2.75)
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
    }
  },
}

export default Tween
