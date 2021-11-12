/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-11 16:06:05
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-11 16:06:05
 * @Description: 场景类：提供scene相关接口
 */
import {
  AxesHelper,
  Scene,
} from "three"

class MyScene {
  init () {
    this.scene = new Scene()
    
    // 设置辅助坐标系
    const helper = new AxesHelper(10)
    this.scene.add(helper)
    
    return this.scene
  }
  addObject (object) {
    if (Array.isArray(object)) {
      object.forEach(obj => {
        this.scene.add(obj)
      })
    } else {
      this.scene.add(object)
    }
  }
}

export default new MyScene()
