/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-11 16:55:36
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-11 16:55:36
 * @Description: 渲染器类：提供渲染器相关接口
 */
import {
  PCFSoftShadowMap,
  WebGLRenderer
} from "three";

class MyRender {
  // 设置渲染器
  init(wrapper) {
    this.renderer = new WebGLRenderer({
      antialias: true
    })
    this.renderer.setClearColor(0xe3e3e3, 1)
    this.renderer.setSize(wrapper.clientWidth, wrapper.clientHeight)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = PCFSoftShadowMap
    wrapper.appendChild(this.renderer.domElement)
    
    return this.renderer
  }
}

export default new MyRender()
