/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 13:37:24
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 13:37:24
 * @Description: 鼠标按下事件
 */
import {useExtrusionAnimate} from "../animate/useExtrusionAnimate";

export const useMousedownEvent = function (status) {
  document.addEventListener("mousedown", () => {
    // 记录开始蓄力的时刻
    status.current_time = new Date()
    
    // 蓄力 --- 瓶子形状压缩 + 砖块形状压缩 + 瓶子&砖块形状还原
    useExtrusionAnimate(status)
  })
}
