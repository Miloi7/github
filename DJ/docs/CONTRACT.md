# DJI Osmo Action 4 — 3D Teardown

## 目标

纯 `Three.js + HTML + CSS + JavaScript`，全部几何体由代码生成，不引用外部 3D 模型、贴图或字体。最终 `index.html` 通过本地 `js/app.bundle.js` 离线打开即可使用。

## 文件所有权（避免并行写冲突）

| 文件 | Owner | 说明 |
| --- | --- | --- |
| `index.html` | Lead | 页面骨架、固定 DOM id |
| `src/parts-data.js` | Lead | 10 个部件的唯一数据源 |
| `src/main.js` | Lead | 渲染器、相机、Raycaster、动画、相机运镜、集成 |
| `src/environment.js` | Lead | 环境反射、灯光、星空、地面网格、HUD 光环 |
| `src/model.js` | model-builder | 程序化 Action 4 模型，只写此文件 |
| `src/ui.js` | ui-builder | 面板、标签、帮助、toast 等交互逻辑，只写此文件 |
| `css/style.css` | ui-builder | 全部样式，只写此文件 |
| `vendor/` | Lead | Three.js r180 与 addons，已配置相对导入 |
| `js/app.bundle.js` | build | esbuild 打包产物，不手改 |

## 坐标与尺寸约定

- 1 个世界单位 ≈ 10 mm；机身主体尺寸 `W=7.05, H=4.42, D=3.28`，中心在原点附近。
- 正面朝 `+Z`（镜头、前屏），背面朝 `-Z`（后屏），上是 `+Y`，右侧是 `+X`。
- 模型底部约在 `y = -2.36`，地面 HUD 在 `y = -2.9`。
- 拆解偏移由 `src/parts-data.js` 的 `explode` 提供，**模型只需构建静止状态**；`main.js` 负责组位移。

## 模型接口（`src/model.js`）

```js
import * as THREE from '../vendor/three.module.js';
import { RoundedBoxGeometry } from '../vendor/RoundedBoxGeometry.js';

export function createCameraModel() {
  const root = new THREE.Group();
  const parts = new Map();     // id -> THREE.Group
  const pickables = [];        // 可被 Raycaster 命中的 Mesh 列表

  // ... 程序化构建所有部件 ...

  return { root, parts, pickables };
}
```

### 必须满足

1. `parts` 必须包含且只包含以下 10 个 id，与 `src/parts-data.js` 完全一致：
   `front-shell, lens, front-screen, sensor, mainboard, rear-screen, battery, record-button, side-cover, mount`
2. 每个 group 的 `userData.partId = id`，并设置：
   - `group.userData.labelAnchor = new THREE.Vector3(x, y, z)`（group 局部坐标，用于 3D 标签引线定位）
   - group 的 `position` 是模型静止状态下的装配位置。`main.js` 会保存该 position 并叠加 `explode` 偏移。
3. 每个用于拾取的 mesh 设置 `mesh.userData.partId = id`，并加入 `pickables`。
4. **不要跨部件共享材质实例**。同一个部件内部可以共享；不同部件的材质必须独立，否则选中高亮会串色。可以直接 `mat.clone()`。
5. 材质尽量使用 `MeshStandardMaterial` / `MeshPhysicalMaterial` / `MeshBasicMaterial`，便于 main 调整 `emissive`。屏幕与发光件可使用 `emissiveMap`。
6. 相机初始视角是右前方 3/4 视角，镜头与前屏在 `+Z`；后屏朝向 `-Z`，不要装反。
7. 外观识别点：
   - 圆角矩形黑色机身，正面左侧大镜头（直径约 3.1），右侧 1.4" 方形前屏；
   - 背面 2.25" 横向高亮屏，几乎覆盖背部；
   - 顶部红色环录制键；底部磁吸快拆底座；
   - 右侧接口/电池仓盖，左侧电源键细节；镜头有蓝色镀膜反光与金属护圈。
8. 内部件在初始装配态可以被外壳遮挡，但拆解后要完整可见：主板（绿色 PCB、芯片、屏蔽罩、排线）、CMOS 传感器板、电池、屏幕排线等。
9. 细节优先，但控制性能：总 draw call 尽量 < 220，三角面 < 180k；小螺丝/栅格可用贴图或少量几何体表现。
10. 所有纹理用 `CanvasTexture` 运行时绘制（屏幕 UI、PCB 走线、电池标签、DJI 标识等），不要 `TextureLoader`。

### 建议的基础装配位置

这些只是定位参考，model-builder 可在保证前壳孔位与镜头对齐的前提下微调：

| part | position (x, y, z) |
| --- | --- |
| front-shell | `0, 0, 1.55` |
| lens | `-1.55, 0.5, 1.75` |
| front-screen | `2.0, 0.25, 1.7` |
| sensor | `-1.55, 0.5, 0.65` |
| mainboard | `0, -0.1, -0.45` |
| rear-screen | `0, 0, -1.72` |
| battery | `1.95, -0.35, -0.1` |
| record-button | `1.35, 2.28, 0.4` |
| side-cover | `3.58, 0, -0.2` |
| mount | `0, -2.36, 0` |

## UI 接口（`src/ui.js`）

```js
import { UI } from './ui.js';

const ui = new UI({
  camera: CAMERA,
  parts: PARTS,
  onSelectPart: (id) => {},
  onClosePart: () => {},
  onToggleExplodeAll: () => {},
  onResetView: () => {},
  onToggleAutoRotate: () => {},
  onToggleLabels: () => {}
});

ui.mount();
ui.setSelected(null);          // null = 整机概览
ui.setHovered(id|null, x, y);  // x/y 为指针屏幕坐标，用于 hover chip
ui.setAllExploded(bool);
ui.setAutoRotate(bool);
ui.setLabelsVisible(bool);
ui.updateLabels(labels);       // labels: [{ id, x, y, visible, exploded, selected }]
ui.updateTelemetry({ mode, exploded, total, fps, target, coord });
ui.showToast(text, duration = 2200);
ui.setLoaderProgress(progress01, text);
ui.hideLoader();
```

### UI 必须实现

- 根据 `PARTS` 动态生成 `#partsList` 列表项；点击触发 `onSelectPart(id)`。
- 点击列表/模型后详情面板展示：编号、分类、中文名、英文名、简介、参数网格、标签。
- 未选中时展示整机概览（`CAMERA`）。
- `#btnCloseDetail` 返回整机概览，调用 `onClosePart()`。
- 绑定 `#btnExplodeAll`、`#btnResetView`、`#btnAutoRotate`、`#btnLabels`、`#btnHelp`、帮助弹窗按钮与 `#btnDismissGuide`。
- 3D 标签层 `#labelLayer`：软件投影坐标由 main 提供；名称 + `keySpec` + 发光锚点 + 引线。标签不能挡住侧边面板，超出安全区时翻转方向。
- 操作引导卡可手动收起，`showToast` 用于操作反馈。
- 加载层通过 `setLoaderProgress` / `hideLoader` 控制；页面首帧后隐藏。
- 响应式：≥1200px 展示左右面板；900–1200 收窄；<900 隐藏左面板（模型点击仍可用），详情面板在选中时变为底部浮层；<640 精简 dock / 标签字号。
- 所有字号、间距、层次参照 `index.html` 现有 DOM；不要修改 DOM 结构。

## 视觉规范

- 背景：`#05070a` → `#091018` 径向渐变，深色科技感。
- 主色：青色 `#5BE7FF`；辅助：琥珀 `#FFB25E`、DJI 红 `#FF6B5E`；文本 `#EAF6FB`，弱文本 `#7D93A2`。
- 字体：`Bahnschrift, "Segoe UI", "Microsoft YaHei", sans-serif`；数字等宽 `Consolas, monospace`。不要引用外部字体。
- 面板：半透明深色、1px 冷色描边、细网格/角标、轻微 backdrop blur；避免大面积实色。
- 动画：CSS transition ≤ 350ms，标签更新要避免每帧触发 layout。尊重 `prefers-reduced-motion`。
- 不要引入任何外部网络资源（CDN / 图片 / 字体）。

## 构建与测试

```powershell
& 'D:\桌面\文件和文档\网页高铁沙盘\node_modules\@esbuild\win32-x64\esbuild.exe' `
  src\main.js --bundle --format=iife --target=chrome100 --outfile=js\app.bundle.js
```

Playwright Chromium 路径：`C:\Users\31009\AppData\Local\ms-playwright\chromium-1248\chrome-win\chrome.exe`。
