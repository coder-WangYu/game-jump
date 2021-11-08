/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 17:31:11
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 17:31:11
 * @Description: 创建随机圆柱
 */
const RANDOM_CYLINDER_CONFIG = {
  h: .2,
  w: (Math.random() + 0.1) * .6 // 宽度（0.06 - 0.66）
}

export default function () {
  console.log(RANDOM_CYLINDER_CONFIG)
}
