/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 17:31:11
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 17:31:11
 * @Description: 创建随机圆柱
 */
import {
  Mesh,
  MeshLambertMaterial,
  CylinderGeometry
} from "three";

const RANDOM_CYLINDER_CONFIG = {
  h: .2,
  w: (Math.random() + 0.1).toFixed(2) * .6 // 宽度（0.06 - 0.66）
}

export default function (axis, position, scene) {
  const random_cylinder = new Mesh(
    new CylinderGeometry(
      RANDOM_CYLINDER_CONFIG.w,
      RANDOM_CYLINDER_CONFIG.w,
      RANDOM_CYLINDER_CONFIG.h,
      30
    ),
    new MeshLambertMaterial({
      color: 0xffffff
    })
  )
  
  if (axis === 'x') {
    // 落到x轴 偏移（0.09 - 0.99）
    random_cylinder.position.x = position.x + (Math.random() + 0.1) * 0.9
    random_cylinder.position.z = 0
  } else if (axis === 'z') {
    // 落到z轴 偏移（0.09 - 0.99）
    random_cylinder.position.x = 0
    random_cylinder.position.z = position.z + (Mesh.random() + 0.1) * 0.9
  } else {
    return
  }
  random_cylinder.position.y = 0
  random_cylinder.castShadow = true
  random_cylinder.receiveShadow = true
  
  scene.add(random_cylinder)
}
