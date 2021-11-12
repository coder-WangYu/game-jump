/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-12 10:35:34
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-12 10:35:34
 * @Description: 事件类：提供事件相关接口
 */
class Events {
  // 点击事件：开始游戏、重新开始
  click(element, type, cb) {
    element.addEventListener("click", () => {
      if (type === "start") {
        cb(true)
      } else if (type === "restart") {
        console.log("重新开始...")
      } else {
        return
      }
    })
  }
  // 鼠标按下事件：蓄力
  mouseDown(element, cb) {
    element.addEventListener("mousedown", () => {
      cb(new Date())
    })
  }
  // 鼠标抬起事件：蓄力结束（开始跳跃）
  mouseUp(element, cb) {
    element.addEventListener("mouseup", () => {
      cb(new Date())
    })
  }
}

export default new Events()
