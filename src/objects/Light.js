/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-11 17:03:40
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-11 17:03:40
 * @Description: 光照类：提供光照相关接口
 */
import {
  AmbientLight,
  DirectionalLight, DirectionalLightHelper, Mesh, MeshBasicMaterial, PlaneGeometry
} from "three";

class MyLight {
  init() {
    this.ambientLight = new AmbientLight(0xffffff, 0.8)
    this.shadowLight = new DirectionalLight(0xffffff, 0.3)
    this.shadowLightHelper = new DirectionalLightHelper(this.shadowLight, 5)
    this.shadowLight.position.set(10, 30, 20)
    this.shadowLight.castShadow = true
    this.shadowTarget = new Mesh(
      new PlaneGeometry(0.1, 0.1),
      new MeshBasicMaterial({ color: 0xF5F5F5 })
    )
    this.shadowTarget.visible = false
    this.shadowTarget.name = 'shadowTarget'
    this.shadowLight.target = this.shadowTarget
    this.shadowLight.shadow.camera.near = 0.5
    this.shadowLight.shadow.camera.far = 500
    this.shadowLight.shadow.camera.left = -100
    this.shadowLight.shadow.camera.right = 100
    this.shadowLight.shadow.camera.top = 100
    this.shadowLight.shadow.camera.bottom = -100
    this.shadowLight.shadow.mapSize.width = 1024
    this.shadowLight.shadow.mapSize.height = 1024
    
    return [this.ambientLight, this.shadowLight, this.shadowLightHelper]
  }
}

export default new MyLight()
