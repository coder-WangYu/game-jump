/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-05 15:11:43
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-05 15:11:43
 * @Description: 瓶子初始化
 */
import {
  Mesh,
  MeshPhongMaterial,
  CylinderGeometry,
  SphereGeometry,
  Object3D,
} from "three";

export const useBottleInit = function (state) {
  const bottle = new Object3D()
  const head = new Mesh(
    new SphereGeometry(.04, 30, 30),
    new MeshPhongMaterial({
      color: 0x370767
    })
  )
  head.position.x = -1
  head.position.y = .405
  head.position.z = 0
  head.castShadow = true
  
  const neck = new Mesh(
    new SphereGeometry(.04, 30, 30),
    new MeshPhongMaterial({
      color: 0x370767
    })
  )
  neck.position.x = -1
  neck.position.y = .3
  neck.position.z = 0
  neck.castShadow = true

  const body = new Mesh(
    new CylinderGeometry(.04, .04, .1, 30),
    new MeshPhongMaterial({
      color: 0x370767
    })
  )
  body.position.x = -1
  body.position.y = .26
  body.position.z = 0
  body.castShadow = true
  
  const foot = new Mesh(
    new CylinderGeometry(.04, .07, .16, 30),
    new MeshPhongMaterial({
      color: 0x370767
    })
  )
  foot.position.x = -1
  foot.position.y = .16
  foot.position.z = 0
  foot.castShadow = true
  
  bottle.add(head)
  bottle.add(neck)
  bottle.add(body)
  bottle.add(foot)
  state.bottle = bottle
  state.scene.add(bottle)
}