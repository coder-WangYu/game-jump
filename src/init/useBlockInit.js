/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-05 15:13:52
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-05 15:13:52
 * @Description: 方块初始化
 */
import {
  Mesh,
  MeshPhongMaterial,
  BoxGeometry
} from "three";

export const useBlockInit = function (scene) {
  const block = new Mesh(
    new BoxGeometry(.4 ,.2 ,.4),
    new MeshPhongMaterial({
      color: 0xffffff
    })
  )
  block.position.x = -1
  block.position.y = 0
  block.position.z = 0
  block.castShadow = true
  block.receiveShadow = true
  
  scene.add(block)
}