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
  PCFSoftShadowMap,
  DirectionalLight,
} from "three";
import { useBlockInit } from "./useBlockInit";
import { useBottleInit } from "./useBottleInit";
import { useCylinderInit } from "./useCylinderInit";
import {useGroundInit} from "./useGroundInit";
import {useGamePageInit} from "./useGamePageInit";
import {reactive} from "vue";

export const useInit = function (GAME_BOX) {
  const state = reactive({
    GAME_BOX: GAME_BOX,
    scene: null,
    bottle: null
  })
  
  // 设置环境
  const scene = new Scene()
  state.scene = scene
  const xyz_helper = new AxesHelper(1)
  scene.add(xyz_helper)
  
  // 设置相机
  const camera = new PerspectiveCamera(
    45,
    GAME_BOX.clientWidth / GAME_BOX.clientHeight,
    .1,
    1000
  )
  // camera.position.x = 0
  // camera.position.y = 0
  // camera.position.z = 2
  camera.position.x = -2
  camera.position.y = 2
  camera.position.z = 2
  camera.lookAt(scene.position)
  
  // 设置渲染器
  const renderer = new WebGLRenderer({
    antialias: true
  })
  renderer.setClearColor(0xffffff, 1)
  renderer.setSize(GAME_BOX.clientWidth, GAME_BOX.clientHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFSoftShadowMap
  GAME_BOX.appendChild(renderer.domElement)
  
  // 设置平行光
  const directionalLight = new DirectionalLight( 0xffffff, 1)
  directionalLight.position.x = 40
  directionalLight.position.y = 110
  directionalLight.position.z = 70
  directionalLight.position.normalize()
  directionalLight.castShadow = true
  scene.add(directionalLight)
  
  // 渲染
  function animate () {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()
  
  // 初始化瓶子、砖块、圆柱、地面
  useBlockInit(state)
  useCylinderInit(state)
  useBottleInit(state)
  useGroundInit(state)
  useGamePageInit(state)
}
