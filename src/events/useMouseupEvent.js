/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 13:38:05
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 13:38:05
 * @Description: 鼠标抬起事件
 */
import {useFlyAnimate} from "../animate/useFlyAnimate";

export const useMouseupEvent = function (status) {
  document.addEventListener("mouseup", () => {
    // 飞行 --- 瓶子斜上抛 + 自身旋转
    useFlyAnimate(status)
  })
}
