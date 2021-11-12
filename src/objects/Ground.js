/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-11 17:42:52
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-11 17:42:52
 * @Description: 平面类：提供平面相关接口
 */
import {
  Mesh,
  ShadowMaterial,
  PlaneGeometry
} from "three";

class MyGround {
  init(wrapper) {
    this.ground = new Mesh(
      new PlaneGeometry(wrapper.clientWidth, wrapper.clientHeight),
      new ShadowMaterial()
    )
    this.ground.receiveShadow = true
    this.ground.rotation.x = -Math.PI / 2
    this.ground.position.y = -1
    
    return this.ground
  }
}

export default new MyGround()
