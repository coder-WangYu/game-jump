/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 13:20:26
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 13:20:26
 * @Description: 开启事件监听
 */
import {reactive} from "vue";
import { useStopEvent } from "./useStopEvent";
import { useStartEvent } from "./useStartEvent";
import { usePauseEvent } from "./usePauseEvent";
import { useMouseupEvent } from "./useMouseupEvent";
import { useMousedownEvent } from "./useMousedownEvent";

export const useEvents = function (scene, start_btn, GAME_BOX, GAME_PAGE) {
  const status = reactive({
    GAME_BOX: GAME_BOX, // 游戏盒子
    GAME_PAGE: GAME_PAGE, // 游戏开始 / 继续页面
    start_btn: start_btn, // 游戏开始按钮
    pause_btn: null, // 游戏暂停按钮
    score_info: null, // 游戏积分控件
    scene: scene, // THREE场景
    current_time: null, // 当前时间
    score: 0 // 游戏积分
  })
  
  // 游戏开始事件
  useStartEvent(status)
  // 游戏暂停事件
  usePauseEvent(status)
  // 游戏结束事件
  useStopEvent(status)
  // 鼠标按下事件
  useMousedownEvent(status)
  // 鼠标抬起事件
  useMouseupEvent(status)
}
