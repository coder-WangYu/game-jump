/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-12 13:36:59
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-12 13:36:59
 * @Description: 游戏类：提供游戏开始界面、游戏结束界面等相关接口
 */
import Events from "../game/Events";
import Bottle from "./Bottle";

class Game {
  // 创建游戏界面遮罩层
  createMask() {
    this.pageMask = document.createElement("div")
    this.pageMask.style.position = "absolute"
    this.pageMask.style.left = "0px"
    this.pageMask.style.top = "0px"
    this.pageMask.style.width = "100%"
    this.pageMask.style.height = "100%"
    this.pageMask.style.background = "rgba(0, 0, 0, .4)"
  }
  initStartPage(wrapper, cb) {
    this.createMask()
    
    // 创建游戏开始按钮
    this.startBtn = document.createElement("div")
    this.startBtn.style.position = "absolute"
    this.startBtn.style.left = "calc(50% - 120px)"
    this.startBtn.style.top = "calc(50% - 50px)"
    this.startBtn.style.width = "240px"
    this.startBtn.style.height = "100px"
    this.startBtn.style.borderRadius = "4px"
    this.startBtn.style.background = "#11343e"
    this.startBtn.style.cursor = "pointer"
    this.startBtn.style.color = "#fff"
    this.startBtn.style.fontSize = "32px"
    this.startBtn.style.lineHeight = "100px"
    this.startBtn.style.textAlign = "center"
    this.startBtn.innerHTML = "游 戏 开 始"
    
    // 绑定游戏开始事件
    this.startBtn.addEventListener("click", () => {
      this.pageMask.style.display = "none"
      Bottle.fall()
      
      setTimeout(() => {
        cb(true)
      }, 700)
    })
  
    // 添加遮罩层、开始按钮到页面中
    this.pageMask.appendChild(this.startBtn)
    wrapper.appendChild(this.pageMask)
  }
  initEndPage(wrapper) {
    this.createMask()
    
    // 创建背景
    this.bgDOM = document.createElement("div")
    this.bgDOM.style.position = "absolute"
    this.bgDOM.style.left = "calc(50% - 220px)"
    this.bgDOM.style.top = "calc(50% - 100px)"
    this.bgDOM.style.width = "440px"
    this.bgDOM.style.height = "260px"
    this.bgDOM.style.borderRadius = "4px"
    this.bgDOM.style.background = "#ffffff"
    
    // 创建重新开始按钮
    this.restartBtn = document.createElement("div")
    this.restartBtn.style.position = "absolute"
    this.restartBtn.style.left = "calc(50% - 120px)"
    this.restartBtn.style.top = "calc(50% - 10px)"
    this.restartBtn.style.width = "240px"
    this.restartBtn.style.height = "100px"
    this.restartBtn.style.borderRadius = "4px"
    this.restartBtn.style.background = "#11343e"
    this.restartBtn.style.cursor = "pointer"
    this.restartBtn.style.color = "#fff"
    this.restartBtn.style.fontSize = "32px"
    this.restartBtn.style.lineHeight = "100px"
    this.restartBtn.style.textAlign = "center"
    this.restartBtn.innerHTML = "重 新 开 始"
    
    // 创建得分文本
    this.scoreInfo = document.createElement("div")
    this.scoreInfo.style.position = "absolute"
    this.scoreInfo.style.left = "0px"
    this.scoreInfo.style.top = "20px"
    this.scoreInfo.style.width = "100%"
    this.scoreInfo.style.height = "100px"
    this.scoreInfo.style.borderRadius = "4px"
    this.scoreInfo.style.color = "#000"
    this.scoreInfo.style.fontSize = "32px"
    this.scoreInfo.style.lineHeight = "100px"
    this.scoreInfo.style.textAlign = "center"
    this.scoreInfo.innerHTML = "您 的 得 分 是：" + 0 + " 分"
    
    // 添加到页面中
    this.bgDOM.appendChild(this.restartBtn)
    this.bgDOM.appendChild(this.scoreInfo)
    this.pageMask.appendChild(this.bgDOM)
    wrapper.appendChild(this.pageMask)
  }
}

export default new Game()
