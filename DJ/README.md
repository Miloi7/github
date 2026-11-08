# DJI Osmo Action 4 · 3D Teardown

一个完全由代码生成的 DJI Osmo Action 4 交互式 3D 拆解页面。没有外部 3D 模型、图片、字体或网络请求，Three.js 已内联打包到 `js/app.bundle.js`。

## 打开方式

直接双击 `index.html` 即可，无需安装依赖或启动服务器，也不需要联网。

建议使用支持 WebGL 2 的现代浏览器（Chrome / Edge / Firefox / Safari 的较新版本）。页面效果可先查看 `preview/` 中的整机、聚焦、全部拆解、帮助弹窗与移动端截图。

## 功能

- **精准程序化模型**：7.05 × 4.42 × 3.16 机身、左侧大镜头、1.4" 前屏、2.25" 后屏、红环录制键、侧面 I/O、底部磁吸快拆，以及主控板、CMOS、1770 mAh 电池、双屏 FPC 等内部结构。
- **点击拆解**：点击 3D 部件或左侧清单中的任意部件，触发带缓动的爆炸位移；同时显示青色发光包围框、环形光晕、地面聚焦环与部件标注。
- **自由视角**：拖拽旋转、滚轮缩放；`R` 重置视角，`A` 自动旋转，`L` 切换部件标注，`E` 全部拆解/归位，`Esc` 返回整机概览。
- **部件详情**：右侧面板显示 10 个部件的编号、分类、中英文名、结构说明、技术规格、关键标签和三维拆解向量。
- **3D 标注**：每条引线把部件实体与名称/关键参数标签连接起来；标签会自动避让侧面板与彼此。
- **全部拆解**：一键展开 10 个部件，并从更远机位查看内部堆叠。
- **操作引导 / 帮助弹窗 / 加载动画 / 响应式布局**：桌面、宽屏与手机端均有适配。

## 文件结构

```text
index.html              页面骨架与 HUD 容器
css/style.css           全部界面视觉与响应式样式
src/parts-data.js       10 个部件的唯一数据源
src/model.js            程序化 Three.js 模型（124 个 mesh、16 张 CanvasTexture）
src/environment.js      环境反射、灯光、地面网格、星空与 HUD 光环
src/main.js             渲染器、相机、Raycaster、拆解动画与集成
src/ui.js               部件清单、详情、3D 标签、弹窗与交互
js/app.bundle.js        可直接在浏览器中使用的打包产物（含 Three.js）
vendor/                 Three.js r180 与 addons 源码
tools/build.ps1         esbuild 重新打包脚本
docs/CONTRACT.md        并行开发时的模块接口约定
```

## 重新构建

如果修改了 `src/` 下的源码，用本地 esbuild 重新打包：

```powershell
powershell -ExecutionPolicy Bypass -File tools/build.ps1 -Minify
```

脚本使用的 esbuild 路径见 `tools/build.ps1`，也可以替换成任意可用的 `esbuild`。

## 说明

- 规格参数来自 DJI Osmo Action 4 公开资料，仅用于产品展示与拆解演示；内部结构为可视化重建，不对应真实维修手册。
- 页面所需的屏幕 UI、PCB 走线、电池标签、DJI/OSMO 丝印等全部由 Canvas API 在运行时绘制。
