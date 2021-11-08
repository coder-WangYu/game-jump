/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 13:59:09
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 13:59:09
 * @Description: 游戏界面初始化
 */
import {
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry
} from "three";
import {useEvents} from "../events/useEvents";

export const useGamePageInit = function (scene, GAME_BOX) {
  const GAME_PAGE = new Mesh(
    new PlaneGeometry(GAME_BOX.clientWidth, GAME_BOX.clientHeight),
    new MeshBasicMaterial({
      color: 0xD5D5D5,
      transparent: true,
      opacity: .7
    })
  )
  GAME_PAGE.rotation.y = - Math.PI / 4
  GAME_PAGE.position.z = 2.2
  
  // 创建开始游戏按钮
  const start_btn = document.createElement("div")
  start_btn.innerHTML = "开 始 游 戏"
  start_btn.style.position = "absolute"
  start_btn.style.left = "calc(50% - 120px)"
  start_btn.style.top = "calc(50% - 50px)"
  start_btn.style.width = "240px"
  start_btn.style.height = "100px"
  start_btn.style.background = "#0a1f25FF"
  start_btn.style.borderRadius = "4px"
  start_btn.style.fontSize = "32px"
  start_btn.style.color = "#fff"
  start_btn.style.textAlign = "center"
  start_btn.style.lineHeight = "100px"
  start_btn.style.cursor = "pointer"
  GAME_BOX.appendChild(start_btn)
  
  start_btn.onclick = function () {
    scene.remove(GAME_PAGE)
    start_btn.style.display = "none"
    
    // 瓶子从视口顶部下落
    
    // 开启游戏事件监听
    useEvents(scene, start_btn, GAME_BOX, GAME_PAGE)
  }
  
  scene.add(GAME_PAGE)
}
