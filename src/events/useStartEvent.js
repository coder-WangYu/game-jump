/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 13:33:32
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 13:33:32
 * @Description: 游戏开始事件
 */
import {useElasticAnimate} from "../animate/useElasticAnimate";

export const useStartEvent = function (status) {
  // 瓶子从视口顶部下落
  if (status.start_btn.innerHTML !== "继 续 游 戏") {
    useElasticAnimate(2, status.bottle)
  }
  
  // 创建积分信息
  const score_info = document.createElement("div")
  score_info.innerHTML = status.score
  score_info.style.position = "absolute"
  score_info.style.right = "20px"
  score_info.style.top = "26px"
  score_info.style.fontSize = "52px"
  score_info.style.fontWeight = "bold"
  score_info.style.color = "#370767"
  status.GAME_BOX.appendChild(score_info)
  
  status.score_info = score_info
}
