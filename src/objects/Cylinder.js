/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-11 16:35:00
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-11 16:35:00
 * @Description: 圆柱类：提供圆柱相关的接口
 */
import {
  Mesh,
  MeshPhongMaterial,
  CylinderGeometry
} from "three";

class MyCylinder {
  // 默认圆柱：初始位置 & 尺寸固定
  init() {
    this.cylinder = new Mesh(
      new CylinderGeometry(1.5, 1.5, 1.5, 30),
      new MeshPhongMaterial({
        color: 0xffffff
      })
    )
    this.cylinder.position.x = 4
    this.cylinder.position.y = 0
    this.cylinder.position.z = 0
    this.cylinder.castShadow = true
    this.cylinder.receiveShadow = true
    
    return this.cylinder
  }
  
  // 创建随机圆柱：伴随跳跃创建随机位置 & 尺寸的圆柱
  createCylinderByRandom() {
  
  }
}

export default new MyCylinder()
