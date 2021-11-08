/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 13:38:05
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 13:38:05
 * @Description: 鼠标抬起事件
 */
export const useMouseupEvent = function (status) {
  document.addEventListener("mouseup", () => {
    // 飞行时间 --- 单位: s
    const flying_time = (new Date() - status.current_time) / 1000
    
    // 飞行 --- 瓶子斜上抛 + 自身旋转 + 形状还原
    console.log(flying_time, "瓶子斜上抛 + 自身旋转 + 形状还原")
  })
}
