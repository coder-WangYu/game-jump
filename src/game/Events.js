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
}

export default new Events()
