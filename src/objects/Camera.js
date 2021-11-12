/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-11 16:40:19
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-11 16:40:19
 * @Description: 相机类：提供相机相关接口
 */
import { OrthographicCamera } from "three";

class MyCamera {
  init(wrapper, scene) {
    const aspect = wrapper.clientHeight / wrapper.clientWidth
    
    this.camera = new OrthographicCamera(
      -10,
      10,
      10 * aspect,
      - 10 * aspect,
      -100,
      85
    )
    // this.camera.position.x = 0
    // this.camera.position.y = 0
    // this.camera.position.z = 10
    this.camera.position.x = -10
    this.camera.position.y = 10
    this.camera.position.z = 10
    this.camera.lookAt(scene.position)
    
    return this.camera
  }
}

export default new MyCamera()
