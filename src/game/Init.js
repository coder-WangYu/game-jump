/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-11 14:59:33
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-11 14:59:33
 * @Description: 游戏界面初始化
 */
import { onMounted } from "vue"
import MyScene from "../objects/Scene"
import MyBox from "../objects/Box"
import MyCylinder from "../objects/Cylinder"
import MyCamera from "../objects/Camera"
import MyRender from "../objects/Render"
import MyLight from "../objects/Light"
import MyGround from "../objects/Ground"
import Bottle from "../objects/Bottle"
import Game from "../objects/Game"

export const init = function () {
  const status = {
    wrapper: null,
    scene: null,
    camera: null,
    light: null,
    ground: null,
    bottle: null,
    renderer: null,
    defaultBox: null,
    defaultCylinder: null,
    startPage: null,
    endPage: null,
  }
  
  onMounted(() => {
    gamePageInit()
  })
  
  function gamePageInit() {
    addObjects()
    
    // 渲染
    function animate () {
      status.renderer.render(status.scene, status.camera)
      requestAnimationFrame(animate)
    }
    animate()
  }
  
  /**
   * 创建游戏默认场景
   */
  function addObjects() {
    // 初始化场景 & 物体 & 光照 & 相机
    status.wrapper = document.getElementById("game-box")
    status.scene = MyScene.init(status.wrapper)
    status.camera = MyCamera.init(status.wrapper, status.scene)
    status.light = MyLight.init()
    status.ground = MyGround.init(status.wrapper)
    status.bottle = Bottle.init()
    status.renderer = MyRender.init(status.wrapper)
    status.defaultBox = MyBox.init()
    status.defaultCylinder = MyCylinder.init()
  
    // 添加到场景中
    MyScene.addObject(status.camera)
    MyScene.addObject(status.light)
    MyScene.addObject(status.ground)
    MyScene.addObject(status.bottle)
    MyScene.addObject(status.defaultBox)
    MyScene.addObject(status.defaultCylinder)
    
    // 添加游戏开始页面
    status.startPage = Game.initStartPage(status.wrapper)
  }
}
