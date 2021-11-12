/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-11 18:04:05
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-11 18:04:05
 * @Description: 瓶子类：提供瓶子相关接口
 */
import {
  CylinderGeometry,
  Mesh,
  MeshPhongMaterial,
  Object3D,
  SphereGeometry
} from "three";
import Animate from "../game/Animate";

class Bottle {
  // 初始化瓶子
  init() {
    const foot = new Mesh(
      new CylinderGeometry(.3, .5, 1.2, 30),
      new MeshPhongMaterial({
        color: 0x370767
      })
    )
    foot.castShadow = true
    
    const body = new Mesh(
      new CylinderGeometry(.3, .3, .5, 30),
      new MeshPhongMaterial({
        color: 0x370767
      })
    )
    body.position.x = 0
    body.position.y = .8
    body.position.z = 0
    body.castShadow = true
    
    const neck = new Mesh(
      new SphereGeometry(.3, 30, 30),
      new MeshPhongMaterial({
        color: 0x370767
      })
    )
    
    neck.position.x = 0
    neck.position.y = 1
    neck.position.z = 0
    neck.castShadow =  true
    
    const head = new Mesh(
      new SphereGeometry(.3, 30, 30),
      new MeshPhongMaterial({
        color: 0x370767
      })
    )
  
    head.position.x = 0
    head.position.y = 2
    head.position.z = 0
    head.castShadow = true
    
    this.bottle = new Object3D()
    this.bottle.add(foot)
    this.bottle.add(body)
    this.bottle.add(neck)
    this.bottle.add(head)
    
    this.bottle.position.x = -6
    this.bottle.position.y = 1.3
    this.bottle.position.z = 0
    
    return this.bottle
  }
  // 瓶子从顶部降落
  fall(cb) {
    // 将瓶子置于顶部
    this.bottle.position.y += 15
    
    // 执行动画
    Animate.to(
      this.bottle.position,
      {x: -6, y: 1.3, z: 0},
      .7,
      "BounceEaseOut",
      0,
    )
  }
  // 瓶子蓄力
  accumulate() {
  }
  // 瓶子跳跃
  jump(duration) {
    // 1.固定斜上抛夹角45°  =>  vx0 = vy0 = v0 * cos45°（水平&竖直方向初速度相同）
    // 2.水平方向位移：v0 * cos45° * t
    // 3.竖直上抛位移：v0 * cos45° * t - 1/2gt²
    // 4.自由落体位移：1/2gt²
    // y
    //  |        ^
    //  |      /   \
    //  |     /     \
    //  |    /       \
    // x ---------------------
    
    // 计算终点
    const coordinate = {}
    
    Animate.to(
      this.bottle.position,
      {x: 0, y: this.bottle.position.y, z: 0},
      duration / 1000, // 单位：s
      "Linear",
      0
    )
  }
}

export default new Bottle()
