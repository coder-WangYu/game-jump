/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 17:26:04
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 17:26:04
 * @Description: 创建随机方块
 */
import {
  Mesh,
  BoxGeometry,
  MeshPhongMaterial
} from "three";

const RANDOM_BLOCK_CONFIG = {
  h: .2,
  w: (Math.random() + 0.1).toFixed(2) * .6 // 宽度（0.06 - 0.66）
}

export default function (axis, position, scene) {
  const random_block = new Mesh(
    new BoxGeometry(
      RANDOM_BLOCK_CONFIG.w ,
      RANDOM_BLOCK_CONFIG.w ,
      RANDOM_BLOCK_CONFIG.h
    ),
    new MeshPhongMaterial({
      color: 0xffffff
    })
  )
  
  if (axis === 'x') {
    // 落到x轴 偏移（0.09 - 0.99）
    random_block.position.x = position.x + (Math.random() + 0.1) * 0.9
    random_block.position.z = 0
  } else if (axis === 'z') {
    // 落到z轴 偏移（0.09 - 0.99）
    random_block.position.x = 0
    random_block.position.z = position.z + (Mesh.random() + 0.1) * 0.9
  } else {
    return
  }
  random_block.position.y = 0
  random_block.castShadow = true
  random_block.receiveShadow = true
  
  scene.add(random_block)
}
