/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-05 15:11:43
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-05 15:11:43
 * @Description: 瓶子初始化
 */
import {
  Mesh,
  MeshBasicMaterial,
  CylinderGeometry,
  SphereGeometry,
} from "three";

export const useBottleInit = function (scene) {
  const head = new Mesh(
    new SphereGeometry(.04, 30, 30),
    new MeshBasicMaterial({
      color: 0x370767
    })
  )
  head.position.x = -1
  head.position.y = .5
  head.position.z = 0
  head.castShadow = true
  
  const neck = new Mesh(
    new SphereGeometry(.04, 30, 30),
    new MeshBasicMaterial({
      color: 0x370767
    })
  )
  neck.position.x = -1
  neck.position.y = .39
  neck.position.z = 0
  neck.castShadow = true

  const body = new Mesh(
    new CylinderGeometry(.04, .04, .1, 30),
    new MeshBasicMaterial({
      color: 0x370767
    })
  )
  body.position.x = -1
  body.position.y = .32
  body.position.z = 0
  body.castShadow = true
  
  const foot = new Mesh(
    new CylinderGeometry(.04, .07, .16, 30),
    new MeshBasicMaterial({
      color: 0x370767
    })
  )
  foot.position.x = -1
  foot.position.y = .2
  foot.position.z = 0
  foot.castShadow = true
  
  scene.add(head)
  scene.add(neck)
  scene.add(body)
  scene.add(foot)
}