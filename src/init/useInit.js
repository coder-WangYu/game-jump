/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-05 15:07:17
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-05 15:07:17
 * @Description: 场景初始化
 */
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AxesHelper,
  PointLight,
  PCFSoftShadowMap,
} from "three";
import { useBlockInit } from "./useBlockInit";
import { useBottleInit } from "./useBottleInit";
import { useCylinderInit } from "./useCylinderInit";

export const useInit = function (GAME_BOX) {
  // 设置环境
  const scene = new Scene()
  const xyz_helper = new AxesHelper(1)
  scene.add(xyz_helper)
  
  // 设置点光源
  const light = new PointLight(0xff0000, 1, 100)
  light.position.set(1, 1, 0)
  light.castShadow = true
  scene.add(light)
  
  // 设置相机
  const camera = new PerspectiveCamera(
    45,
    GAME_BOX.clientWidth / GAME_BOX.clientHeight,
    .1,
    1000
  )
  camera.position.x = -2
  camera.position.y = 2
  camera.position.z = 2
  camera.lookAt(scene.position)
  
  // 设置渲染器
  const renderer = new WebGLRenderer({
    antialias: true
  })
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFSoftShadowMap
  renderer.setClearColor(0xA9CDDC, 1)
  renderer.setSize(GAME_BOX.clientWidth, GAME_BOX.clientHeight)
  GAME_BOX.appendChild(renderer.domElement)
  
  // 渲染
  function animate () {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }
  animate()
  
  useBlockInit(scene)
  useCylinderInit(scene)
  useBottleInit(scene)
}
