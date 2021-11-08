/**
 * @Editor：WYDX
 * @CreateTime: 2021-11-08 17:26:04
 * @LastEditor: WYDX
 * @LastEditTime: 2021-11-08 17:26:04
 * @Description: 创建随机方块
 */
const RANDOM_BLOCK_CONFIG = {
  h: .2,
  w: (Math.random() + 0.1) * .6 // 宽度（0.06 - 0.66）
}

export default function () {
  console.log(RANDOM_BLOCK_CONFIG)
}
