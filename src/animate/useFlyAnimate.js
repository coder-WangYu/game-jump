/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 15:23:35
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 15:23:35
 * @Description: 瓶子飞行动画
 */
export const useFlyAnimate = function (status) {
  const flying_time = new Date() - status.current_time
  const frame_count = flying_time / 17 // 总动画帧数
  const bottle = status.bottle
  let last_time = new Date()
  let start = -1
  
  function animate() {
    const current_time = new Date()
    const interval = current_time - last_time
    
    if (interval <= 17) {
      start ++
    } else {
      // 跳帧
      const _start = Math.floor(interval / 17)
      start = start + _start
    }
    // TODO 飞行动画
    
    if (start <= frame_count) {
      requestAnimationFrame(animate)
    } else {
      return
    }
    
    // 更新时间
    last_time = new Date()
  }
  animate()
}
