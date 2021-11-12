/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-11 16:23:30
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-11 16:23:30
 * @Description: 方块类：提供方块相关接口
 */
import {
  Mesh,
  MeshPhongMaterial,
  BoxGeometry
} from "three";

class MyBox {
  // 默认方块：初始位置 & 尺寸固定
  init() {
    this.box = new Mesh(
      new BoxGeometry(3, 1.5, 3),
      new MeshPhongMaterial({
        color: 0xffffff
      })
    )
    this.box.position.x = -6
    this.box.position.y = 0
    this.box.position.z = 0
    this.box.castShadow = true
    this.box.receiveShadow = true
    
    return this.box
  }
  
  // 创建随机方块：伴随跳跃创建随机位置 & 尺寸的方块
  createBoxByRandom() {
  
  }
}

export default new MyBox()
