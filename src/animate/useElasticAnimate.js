/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-09 10:49:36
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-09 10:49:36
 * @Description: 瓶子下落弹性运动动画
 */

/**
 * 弹性运动：
 * @current_frame：当前帧
 * @from：起始位置
 * @range：位置变化范围（to - from）
 * @frame_count：总动画帧数
 */
function elastic(current_frame, from, range, frame_count) {
  return current_frame * range / frame_count + from
}

function useElastic(from, to, bottle) {
  const duration = 400 // 动画时间 ms
  const frame_count = duration / 17 // 动画帧数
  let last_time = new Date() // 当前时间
  let start = -1
  
  function animate() {
    const current_time = new Date() // 当前帧动画时间
    const interval = current_time - last_time // 时间间隔
    
    if (interval <= 17) {
      start ++
    } else {
      // 跳帧
      const _start = Math.floor(interval / 17)
      start = start + _start
    }
    const value = elastic(start, from, from - to, frame_count)
    
    if (start <= frame_count) {
      bottle.position.y = Math.abs(4 - value)
      requestAnimationFrame(animate)
    } else {
      return
    }
  
    // 更新时间
    last_time = new Date()
  }
  animate()
}

export const useElasticAnimate = function (from, bottle) {
  useElastic(from, bottle.position.y, bottle)
}
