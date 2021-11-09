/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 10:39:09
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 10:39:09
 * @Description: 地面初始化
 */
import {
  Mesh,
  MeshPhongMaterial,
  PlaneGeometry,
} from "three";

export const useGroundInit = function (state) {
  const ground = new Mesh(
    new PlaneGeometry(state.GAME_BOX.clientWidth, state.GAME_BOX.clientHeight),
    new MeshPhongMaterial({
      color: 0xBFEDFF
    })
  )
  ground.rotation.x = - Math.PI / 2
  ground.position.y = - 0.1
  ground.receiveShadow = true
  
  state.scene.add(ground)
}
