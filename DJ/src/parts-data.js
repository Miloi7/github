/**
 * Shared data contract for the DJI Osmo Action 4 teardown scene.
 * This module is the single source of truth for the 3D scene, the part list
 * panel, the detail panel and the floating 3D labels.
 */

export const CAMERA = {
  brand: 'DJI',
  name: 'Osmo Action 4',
  nameZh: '大疆 Osmo Action 4',
  model: 'OA4-2023',
  edition: 'INTERACTIVE TEARDOWN / 01',
  tagline: '旗舰画质 · 磁吸快拆 · 裸机 18 m 防水',
  dimensions: '70.5 × 44.2 × 32.8 mm',
  weight: '145 g',
  sensor: '1/1.3" CMOS',
  video: '4K / 120 fps',
  waterproof: '18 m',
  battery: '1770 mAh',
  runtime: '160 min',
  screens: '1.4" + 2.25"',
  microphones: 3,
  overviewDesc:
    'Osmo Action 4 将 1/1.3 英寸大底影像、双触控屏和磁吸快拆结构压缩进 145 g 的机身。转动视角并点击任意部件，逐层查看它的外部结构与内部堆叠。',
  overviewSpecs: [
    { label: '尺寸', value: '70.5 × 44.2 × 32.8 mm' },
    { label: '整机重量', value: '145 g' },
    { label: '影像传感器', value: '1/1.3" CMOS' },
    { label: '最大视场角', value: '155°' },
    { label: '光圈', value: 'f/2.8' },
    { label: '视频规格', value: '4K / 120 fps' },
    { label: '防水能力', value: '裸机 18 m' },
    { label: '电池续航', value: '1770 mAh / 160 min' }
  ],
  quickStats: [
    { label: 'SENSOR', value: '1/1.3"' },
    { label: 'FOV', value: '155°' },
    { label: 'VIDEO', value: '4K/120' },
    { label: 'WATER', value: '18 m' }
  ]
};

/**
 * @typedef {Object} Part
 * @property {string} id             stable id, also used as group.userData.partId
 * @property {string} no             display index, e.g. "01"
 * @property {string} name           Chinese display name
 * @property {string} en             English display name
 * @property {string} category       Chinese category
 * @property {string} categoryEn     uppercase English category
 * @property {string} keySpec        short spec shown in the part list and label
 * @property {string} summary        one short sentence for the detail panel
 * @property {string} description    longer description
 * @property {Array<{label:string,value:string}>} specs
 * @property {string[]} tags
 * @property {string} accent         CSS color for UI / label accent
 * @property {[number,number,number]} explode  local explode offset in model units
 */

/** @type {Part[]} */
export const PARTS = [
  {
    id: 'front-shell',
    no: '01',
    name: '前壳组件',
    en: 'FRONT SHELL',
    category: '外部结构',
    categoryEn: 'EXTERIOR',
    keySpec: 'IP68 · 18 m',
    summary: '集成镜头护圈、前屏视窗与磁吸定位的一体化防护前壳。',
    description:
      '高强度复合材质前壳承担正面抗冲击与防水密封。镜头护圈采用金属质感处理，可快速拆换玻璃保护盖；四周的密封筋条与机身中框配合，形成裸机 18 m 防水的第一道屏障。',
    specs: [
      { label: '材质', value: '高强度复合材质 + 铝合金护圈' },
      { label: '防护等级', value: 'IP68 / 裸机 18 m' },
      { label: '可维护结构', value: '可换镜头玻璃护盖' },
      { label: '正面开孔', value: '镜头孔 + 1.4" 前屏视窗' }
    ],
    tags: ['IP68', 'GLASS COVER', 'MAGNETIC'],
    accent: '#5BE7FF',
    explode: [0, 0, 1.8]
  },
  {
    id: 'lens',
    no: '02',
    name: '镜头模组',
    en: 'LENS MODULE',
    category: '光学系统',
    categoryEn: 'OPTICS',
    keySpec: 'f/2.8 · 155°',
    summary: '超广角非球面镜组，为 1/1.3 英寸传感器提供 155° 视野。',
    description:
      '镜头模组由多层非球面镜片、光圈环与金属镜筒构成，最近对焦距离 0.4 m。多层增透镀膜抑制眩光与鬼影，在逆光和水面反射场景中保持通透，f/2.8 大光圈配合大像素传感器提升暗光表现。',
    specs: [
      { label: '光圈', value: 'f/2.8' },
      { label: '视场角', value: '155°' },
      { label: '最近对焦', value: '0.4 m 至无穷远' },
      { label: '镜片结构', value: '多层非球面镜片组' },
      { label: '镀膜', value: '多层增透镀膜' }
    ],
    tags: ['ULTRA WIDE', 'ASPHERICAL', 'F/2.8'],
    accent: '#66B5FF',
    explode: [-0.7, 1.9, 1.15]
  },
  {
    id: 'front-screen',
    no: '03',
    name: '前屏组件',
    en: 'FRONT DISPLAY',
    category: '显示系统',
    categoryEn: 'DISPLAY',
    keySpec: '1.4" · 320 × 320',
    summary: '方形前置取景屏，方便自拍与 vlog 时实时确认构图。',
    description:
      '1.4 英寸方形前置触控屏拥有 323 ppi 与 750 nit 峰值亮度。它与后屏同步显示取景画面和录制状态，让单人创作时无需翻转机身也能精准构图。',
    specs: [
      { label: '屏幕尺寸', value: '1.4 英寸' },
      { label: '分辨率', value: '320 × 320' },
      { label: '像素密度', value: '323 ppi' },
      { label: '峰值亮度', value: '750 ± 50 cd/m²' },
      { label: '触控', value: '支持触控' }
    ],
    tags: ['TOUCH', '750 NITS', 'SELFIE'],
    accent: '#B394FF',
    explode: [2.3, 1.7, 0.95]
  },
  {
    id: 'sensor',
    no: '04',
    name: 'CMOS 传感器',
    en: 'IMAGE SENSOR',
    category: '影像核心',
    categoryEn: 'IMAGING',
    keySpec: '1/1.3" · 10 MP',
    summary: '1/1.3 英寸大底传感器，是暗光画质与 10-bit 色彩的基础。',
    description:
      '传感器面积较上一代进一步提升，配合 2.4 μm 大像素与 10-bit D-Log M 色彩模式，带来更纯净的暗部、更高的动态范围与更自然的后期调色空间。传感器组件通过柔性排线与主板连接。',
    specs: [
      { label: '传感器', value: '1/1.3 英寸 CMOS' },
      { label: '有效像素', value: '约 10 MP' },
      { label: '像素尺寸', value: '2.4 μm' },
      { label: '色彩深度', value: '10-bit D-Log M' },
      { label: '照片分辨率', value: '3648 × 2736' }
    ],
    tags: ['1/1.3"', '10-BIT', 'D-LOG M'],
    accent: '#8AE4FF',
    explode: [-2.9, 2.5, 0.3]
  },
  {
    id: 'mainboard',
    no: '05',
    name: '主控板',
    en: 'MAINBOARD',
    category: '计算核心',
    categoryEn: 'COMPUTE',
    keySpec: '4K/120 · 10-bit',
    summary: '负责影像处理、编码、防抖算法与无线连接的运算中枢。',
    description:
      '主控板集成 DJI 定制影像处理平台、电源管理与无线模块。它实时处理 155° 超广角画面、RockSteady 3.0+ 防抖和 10-bit 色彩编码，并通过柔性排线连接传感器、双屏与按键。',
    specs: [
      { label: '处理平台', value: 'DJI 定制影像 SoC' },
      { label: '视频编码', value: 'H.264 / HEVC · 4K/120 fps' },
      { label: '防抖算法', value: 'RockSteady 3.0+ / HorizonSteady' },
      { label: '无线连接', value: 'Wi-Fi 802.11 a/b/g/n/ac' },
      { label: '存储', value: 'microSD · 最大 512 GB' }
    ],
    tags: ['SOC', 'HEVC', 'ROCKSTEADY'],
    accent: '#FFB25E',
    explode: [0, 2.9, -0.9]
  },
  {
    id: 'rear-screen',
    no: '06',
    name: '后屏组件',
    en: 'REAR DISPLAY',
    category: '显示系统',
    categoryEn: 'DISPLAY',
    keySpec: '2.25" · 360 × 640',
    summary: '2.25 英寸高亮触控主屏，覆盖参数、回放与图传操控。',
    description:
      '后置 2.25 英寸触控屏具有 326 ppi 与 750 nit 亮度，强光下依然清晰。屏幕总成包含保护玻璃、触控层、显示面板与金属支撑框，通过排线与主控板连接。',
    specs: [
      { label: '屏幕尺寸', value: '2.25 英寸' },
      { label: '分辨率', value: '360 × 640' },
      { label: '像素密度', value: '326 ppi' },
      { label: '峰值亮度', value: '750 ± 50 cd/m²' },
      { label: '交互', value: '全功能触控 / 回放' }
    ],
    tags: ['TOUCH', '360 × 640', '750 NITS'],
    accent: '#C59CFF',
    explode: [0.5, 0.3, -2.8]
  },
  {
    id: 'battery',
    no: '07',
    name: '电池模组',
    en: 'BATTERY',
    category: '能源系统',
    categoryEn: 'POWER',
    keySpec: '1770 mAh · 6.8 Wh',
    summary: '1770 mAh 耐低温电池，支持 30 W 快充与约 160 分钟续航。',
    description:
      '1S LiPo 电池模组容量 1770 mAh，能量 6.8 Wh。配合 30 W 快充可在约 18 分钟充至 80%，并支持 -20°C 至 45°C 的工作温度范围，为长时间户外拍摄提供稳定供电。',
    specs: [
      { label: '容量', value: '1770 mAh' },
      { label: '能量', value: '6.8 Wh' },
      { label: '化学体系', value: 'LiPo 1S / 3.85 V' },
      { label: '快充功率', value: '30 W · 18 min 充至 80%' },
      { label: '续航', value: '约 160 分钟' },
      { label: '工作温度', value: '-20°C ~ 45°C' }
    ],
    tags: ['30 W', '160 MIN', 'COLD RESISTANT'],
    accent: '#79FFB2',
    explode: [2.8, -1.5, 0.5]
  },
  {
    id: 'record-button',
    no: '08',
    name: '顶部录制键',
    en: 'RECORD BUTTON',
    category: '控制系统',
    categoryEn: 'CONTROL',
    keySpec: '录制 / 快门',
    summary: '带红色定位环的段落式按键，单手即可盲操作录制。',
    description:
      '顶部录制键采用红色装饰环与段落式按压结构，按压行程清晰，戴手套也能准确触发。按键座与机身之间设置防水密封圈，并通过排线连接主控板。',
    specs: [
      { label: '功能', value: '录制 / 快门 / 快捷操作' },
      { label: '结构', value: '段落式按压 + 密封圈' },
      { label: '材质', value: '硅胶按键 + 金属装饰环' },
      { label: '防护', value: 'IP68' }
    ],
    tags: ['TACTILE', 'IP68', 'RED RING'],
    accent: '#FF6B5E',
    explode: [0.2, 2.0, 0.2]
  },
  {
    id: 'side-cover',
    no: '09',
    name: '侧盖与接口',
    en: 'SIDE I/O COVER',
    category: '接口与防护',
    categoryEn: 'I/O',
    keySpec: 'USB-C · 30 W',
    summary: '集成 USB-C、microSD 与电池仓门的侧面密封总成。',
    description:
      '侧盖总成将 USB-C 充电/数据接口、microSD 卡槽与电池仓门整合在同一密封结构中。掀开锁扣即可充电或导出素材，关闭后由锁扣与密封圈共同保证防水性能。',
    specs: [
      { label: '接口', value: 'USB-C' },
      { label: '充电', value: '30 W 快充' },
      { label: '存储扩展', value: 'microSD · 最大 512 GB' },
      { label: '密封', value: '锁扣 + 防水胶圈' },
      { label: '防护', value: 'IP68 / 18 m' }
    ],
    tags: ['USB-C', 'MICROSD', '30 W'],
    accent: '#74D4FF',
    explode: [2.8, -0.2, -0.1]
  },
  {
    id: 'mount',
    no: '10',
    name: '磁吸快拆底座',
    en: 'MAGNETIC MOUNT',
    category: '快拆结构',
    categoryEn: 'MOUNT',
    keySpec: '磁吸快拆',
    summary: '磁吸 + 卡扣双重锁定，支持横拍与竖拍快速切换。',
    description:
      '底部磁吸快拆底座由铝合金底板、钕磁铁与折叠卡爪组成。靠近机身即可自动吸附，再通过卡扣锁紧；无需工具就能在横拍与竖拍之间切换，并兼容 DJI 磁吸快拆生态配件。',
    specs: [
      { label: '连接方式', value: '磁吸 + 卡扣锁止' },
      { label: '材质', value: '铝合金 + 钕磁铁' },
      { label: '拍摄方向', value: '横拍 / 竖拍快速切换' },
      { label: '兼容性', value: 'DJI 磁吸快拆生态' }
    ],
    tags: ['MAGNETIC', 'QUICK RELEASE', 'ALUMINUM'],
    accent: '#DDE9F2',
    explode: [0, -2.15, 0.2]
  }
];

export const PART_MAP = new Map(PARTS.map((part) => [part.id, part]));

export function getPart(id) {
  return PART_MAP.get(id) || null;
}
