# 前端速查大全 · REFBENCH

把 HTML、CSS、JavaScript 三套速查合并成的**单文件站外纯静态站点**：双击即用，完全离线，零外部请求。

**打开方式**：双击 `index.html`（Chrome / Edge 现代版本）。无需服务器、无需构建、无需联网。

---

## 1. 数据规模

| 语种 | 条目 | 分类 | 说明 |
|---|---:|---:|---|
| CSS | 672 | 17 | 属性、取值逐项解释、初始值/继承/动画、浏览器支持、实时预览 |
| HTML | 143 | 11 | 标签、属性说明、语义、代码示例，含 32 个已废弃标签 |
| JavaScript | 459 | 25 | 语法、内置对象、DOM/BOM、ES6+、异步、原理 |
| **合计** | **1274** | **53** | 规范状态：标准 566 / 实验性 40 / 非标准 119 / 已废弃 47；高频 91 |

数据由 `tools/extract.mjs` 从三套原始站点抽取、归一化为统一 schema，再按 60–70 条分片输出到 `data/`。

## 2. 功能

- **门户**：1274 读数条、三语种入口卡、53 个分类索引、热门检索词。搜索框只出现一次——桌面端用常驻顶栏搜索（`/` 或 `Ctrl/⌘ + K`），移动端用封面的大搜索框（顶栏退化为图标）。
- **四视图**：全部 / HTML / CSS / JS；侧栏分类导航带实时计数与折叠。
- **全局搜索**：名称、中文名、摘要、关键词、别名、语法、取值、属性多字段；支持子序列缩写（`bgc` → `background-color`）、拼写容错（`dispaly`）、多词 AND；每条结果都给出命中理由（`匹配：关键词 / 取值 / 描述` + `<mark>` 高亮）。
- **筛选**：规范状态、热度（高频/少见）、6 个正交标签（可动画/可继承/浏览器前缀/简写/逻辑属性/SVG）、4 种排序。
- **条目详情（右抽屉）**：按语种自适应章节（CSS 8 节 / HTML 6 节 / JS 4 节）；**示例可直接编辑并实时预览**——CSS/HTML 点「编辑示例」进入编辑态，边改边看，`运行` / `恢复原示例`，未改动时不显示状态；CSS 还会按数据里的取值生成「示例变体」chip（如 `display` 的 block / flex / grid），一键切换片段并高亮当前变体；JS 保持只读。预览走 Shadow DOM；代码块带行号、字符数、复制、长行横滚提示；浏览器支持 4 列（版本号 / `✗` / `preview` / `—`）；MDN 链接；上一条 / 下一条。
- **双主题**：跟随系统 / 浅色 / 深色，持久化，切换不重建列表、不丢焦点。
- **路由**：`#/`、`#/all`、`#/css`、`#/css/layout`、`#/css/display`、`#/search?q=居中`，支持刷新与前进后退。
- **移动端**：全屏搜索层、筛选底部 sheet、全屏详情、章节 chip 自动居中、44px 触控。
- **无障碍**：焦点陷阱与还原、`aria-live`、`inert` 背景、跳过链接、`focus-visible`、`prefers-reduced-motion` / `prefers-contrast`。

## 3. 键盘快捷键

| 键 | 作用 |
|---|---|
| `/` 或 `Ctrl/⌘ + K` | 聚焦搜索 |
| `1` / `2` / `3` / `0` | HTML / CSS / JS / 全部 |
| `↑ ↓` 或 `j k` | 移动光标 |
| `Enter` | 打开详情 / 打开高亮项 |
| `[` / `]` | 上一条 / 下一条 |
| `c` | 复制示例代码 |
| `m` | 打开 MDN |
| `Tab` / `Ctrl+Enter` | 示例编辑态：缩进两空格 / 运行并预览 |
| `t` | 循环主题 |
| `?` | 键盘与数据说明 |
| `g h` | 一秒内回首页 |
| `Esc` | 逐层关闭面板 / 抽屉 / 搜索 |

## 4. 目录结构

```text
前端速查大全/
├── index.html            # 页面骨架 + 内联 SVG 图标精灵
├── css/
│   ├── tokens.css        # 设计变量与双主题
│   ├── base.css          # reset、排版、焦点、减少动效
│   ├── layout.css        # 断点、门户、浏览页、抽屉、sheet
│   └── components.css    # 行/卡、搜索建议、代码、预览、支持条、toast
├── js/
│   ├── data.js           # 聚合、运行时分类计数、索引与排序
│   ├── search.js         # 评分、子序列、容错、命中理由
│   ├── highlight.js      # CSS / HTML / JS 词法高亮
│   ├── preview.js        # Shadow DOM 预览与消毒
│   ├── render.js         # 全部字符串模板
│   ├── router.js         # hash 路由
│   └── app.js            # 状态机、筛选、主题、抽屉、键盘、复制
├── data/                 # meta.js + 21 个数据分片（禁止手改，由脚本生成）
├── docs/
│   ├── design-spec.md    # UI 设计规范（视觉唯一基准）
│   ├── ui-review.md      # 第一轮视觉验收报告
│   └── ui-review-fixes.md# 逐条闭环记录
└── screenshots/          # 19 张实景截图（桌面 / 移动 / 深浅 / 各状态）
```

## 5. 数据口径

- **规范状态轴**（`standard` / `experimental` / `nonstandard` / `obsolete` / `deprecated`）与**热度轴**（`hot` / `rare` / `common`）严格分开统计，互不复用。
- 「标准」默认沉默不渲染；只有异常态（实验性 / 非标准 / 已废弃）出现徽章，已废弃条目名称加删除线。
- HTML 的 32 个废弃标签已归入 `obsolete`，「已废弃」筛选共 48 条（47 + 1 deprecated）。
- 浏览器支持数据仅 CSS 收录（555/672），HTML / JS 详情不伪造支持条。
- 数据来源：MDN `mdn-data` 与 Browser Compat Data，中文说明与示例为人工整理。

## 6. 生成与校验

```powershell
node tools\extract.mjs      # 重新生成 data/（改数据源后执行）
node tools\shoot.mjs        # Chrome CDP 实景截图 → screenshots/
node tools\measure.mjs      # 关键指标实测（计数、徽章、搜索理由、触控尺寸）
node tools\probe-example.mjs # 示例编辑 / 变体 / 实时预览 的端到端断言
```

`tools/` 为构建与验收工具，站点运行时不依赖。
