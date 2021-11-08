/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 13:34:33
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 13:34:35
 * @Description: 游戏暂停事件
 */
export const usePauseEvent = function (status) {
  // 创建暂停按钮
  const pause_btn = document.createElement("div")
  pause_btn.innerHTML = "暂 停 游 戏"
  pause_btn.style.position = "absolute"
  pause_btn.style.left = "10px"
  pause_btn.style.top = "10px"
  pause_btn.style.width = "240px"
  pause_btn.style.height = "100px"
  pause_btn.style.background = "#0a1f25FF"
  pause_btn.style.borderRadius = "4px"
  pause_btn.style.fontSize = "32px"
  pause_btn.style.color = "#fff"
  pause_btn.style.textAlign = "center"
  pause_btn.style.lineHeight = "100px"
  pause_btn.style.cursor = "pointer"
  status.GAME_BOX.appendChild(pause_btn)
  
  status.pause_btn = pause_btn
  
  pause_btn.onclick = function () {
    pause_btn.style.display = "none"
    status.start_btn.style.display = "block"
    status.start_btn.innerHTML = "继 续 游 戏"
    status.scene.add(status.GAME_PAGE)
  }
}
