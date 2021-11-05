/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-05 15:14:52
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-05 15:14:52
 * @Description: 圆柱初始化
 */
import {
  Mesh,
  MeshBasicMaterial,
  CylinderGeometry
} from "three";

export const useCylinderInit = function (scene) {
  const cylinder = new Mesh(
    new CylinderGeometry(.3, .3, .2, 30),
    new MeshBasicMaterial({
      color: 0xffffff
    })
  )
  cylinder.position.x = 0
  cylinder.position.y = 0
  cylinder.position.z = 0
  cylinder.castShadow = true
  
  scene.add(cylinder)
}