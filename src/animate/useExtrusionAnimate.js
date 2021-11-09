/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 15:22:46
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 15:22:46
 * @Description: 瓶子 / 砖块 挤压动画
 */
export const useExtrusionAnimate = function (status) {
  const start_time = status.current_time
  const bottle = status.bottle
  let flag = true
  let current_brick // 当前所在的砖块
  status.scene.children.forEach(child => {
    if (child.type === "Mesh" && child.position.x === -1) {
      current_brick = child
    }
  })
  
  function animate() {
    const current_time = new Date()
    const frame_count = (current_time - start_time) / 17 // 随时间变化的总动画帧数
  
    document.addEventListener("mouseup", () => {
      flag = false
      bottle.scale.y = 1
      current_brick.scale.y = 1
    })
    
    const value = Math.abs(frame_count / 100 - 1)
    
    if (flag) {
      if (value >= .6 && value <= 1) {
        bottle.scale.y = value
        current_brick.scale.y = value + .1
        requestAnimationFrame(animate)
      }
    } else {
      return
    }
  }
  animate()
}
