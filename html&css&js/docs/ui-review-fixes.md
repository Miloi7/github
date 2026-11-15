# 前端速查大全 · UI 验收修复闭环（B1 / H1–H6 / M1–M7 / L1–L3）

**输入基准**：`docs/ui-review.md`（结论 `needs_revision`）
**本轮范围**：B1、H1–H6、M1–M7、L1–L3；严格保留 `docs/ui-review.md` §5「无需修改」的 11 条。
**数据层**：`data/` 未修改（最后写入时间仍为 2026-11-13 20:41:08；`docs/ui-review.md` 亦未改）。
**复拍**：`node tools\shoot.mjs`，15 张重拍 + 4 个补充态，共 19 张；`errors: []`。
**结论**：报告 §6 的最小条件逐项闭环，状态契约、数据 fallback、搜索可解释性、色彩/筛选轴、交互与详情均已落地。

---

## 0. 本轮统一口径

| 裁决 | 落地 |
|---|---|
| `standard` 沉默 | 列表 / 卡片 / 详情标签行都不渲染「标准」；详情状态进抽屉头中列 |
| HTML「已废弃标签」32 条 | 数据已归一为 `obsolete`；运行时按 `status` 归轴，`已废弃` 筛选 = 47 + 1 = **48** |
| 门户读数 | **566 标准条目**（不再写「规范状态 598」） |
| 标签只保留正交项 | 筛选只出 `meta.tags` 的 6 项；另设独立「热度」组（高频 91 / 少见 151） |
| 排序「推荐」 | 改名「默认」，实际行为仍是分类/插入顺序，不再暗示策展 |
| 抽屉头 | 面包屑左 + 状态中 + 动作右；✕ 距右缘 16px；桌面/移动同一结构 |
| 数据 fallback | JS `zh` 为空 → 摘要列跨列；HTML `summary === zh` → 用 `desc` 首句；空字段不占列 |

---

## 1. Blocker

### B1 · 32 条「已废弃标签」被标成「标准」，已废弃筛选漏数

- **修复**：数据层 `status` 已为 `obsolete`；渲染层继续按 `_norm` 生成 `is-obsolete`，名称删除线；状态筛选用 `obsolete + deprecated` 合并计数；详情标题也补删除线。
- **代码**：
  - `js/data.js:31-44`（`normOf` / `heatOf` 只认 status，不臆造 standard）
  - `js/render.js:102-116`（异常态才出徽章；`obsolete` → 「已废弃」）
  - `js/render.js:382-405`（行 `is-obsolete` 类）
  - `js/render.js:964-1026`（抽屉标题 `is-obsolete` 与头部状态）
  - `js/render.js:577-611`（状态筛选计数：`obsolete + deprecated`）
  - `css/components.css:671`（行名删除线）、`css/components.css:867`（卡名删除线）
  - `css/layout.css:800-803`（抽屉标题删除线）
- **复验**：
  - `#/html/center`：面包屑 `首页 › HTML › 已废弃标签`，头部状态 `已废弃`，标签行仅 `标签`；标题与行名 `text-decoration-line: line-through`。
  - `#/all` 状态筛选点「已废弃」→ `48` 行；`#/all` 中 `.rb-status-plain` = `0`。
  - 证据：`screenshots/09-search-1440.png`、`16-html-index-1440.png`；measure 输出 `obsoleteFilter.rows = 48`。

---

## 2. High

### H1 · 598 条「标准」被逐行渲染，状态列时有时无

- **修复**：`normBadge` 对 `standard` 与 `none` 均返回空；列表/卡片只保留异常态徽章（实验性/非标准/已废弃），热度另用「高频」徽章。详情状态移到抽屉头中列，标签行不再出现「标准」。
- **代码**：`js/render.js:102-116`；`js/render.js:382-426`；`js/render.js:1000`；`css/components.css:429-432`。
- **复验**：`#/all` 的 `.rb-status-plain` = `0`；`#/html` 首屏不再出现孤立的 `base 标准`；卡片视图 0 个「标准」；`#/css/display` 标签行仅 `可动画 标签`。
- **证据**：`screenshots/03-browse-all-dark-1440.png`、`05-detail-css-display-1440.png`、`14-cards-view-1440.png`。

### H2 · 602 条条目把同一句话放进两列（JS 459 + HTML 143）

- **修复**：新增统一 `displayFields()`：
  - `zh === name` 或 `zh` 为空 → 不渲染中文列；
  - `summary === zh` → 取 `desc` 首句；仍相同则隐藏摘要；
  - 行在 `zh` 为空时让摘要跨 `zh + sum` 两列；卡片/建议面板共用同一 fallback。
- **代码**：`js/render.js:59-69`（displayFields）、`js/render.js:382-426`（行/卡）、`js/render.js:515-569`（建议）、`js/render.js:964-1026`（抽屉副标题）、`css/components.css:745-778`。
- **复验**：`#/js/dom` 前 10 行 `name ≠ zh`（实际无中文列，摘要占两列）；`#/html` 前 10 行 `zh ≠ summary`；`#/search?q=居中` 的 `center` 行不再重复「内容居中」；建议面板 JS 行只出现一次名称。
- **证据**：`screenshots/16-html-index-1440.png`、`17-js-dom-cards-1440.png`、`09-search-1440.png`；measure 输出 HTML 前 10 行 `zh/sum` 已分离。

### H3 · 热度轴在列表/卡片几乎不可读：91 高频没有「高频」徽章/图例，卡片 0 标记

- **修复**：行与卡片均渲染 `.rb-badge--hot`「高频」；保留 6px 实心点/4px 空心点；热度筛选面板加入图例「■ 高频 · □ 少见」；「推荐」改「默认」。
- **代码**：`js/render.js:113-115`（heatBadge）、`js/render.js:382-426`（行/卡）、`js/render.js:600-606`（热度图例）、`css/components.css:428`、`css/components.css:899-905`（卡片徽章容器）。
- **复验**：`#/all` 有 `91` 个 `.rb-row.is-hot` 与 `91` 个 `.rb-badge--hot`；`#/js` 同样 91 行有徽章；`#/js/dom` 卡片 45 张中 10 张 `is-hot`、10 个「高频」；排序标签为「默认」。
- **证据**：`screenshots/17-js-dom-cards-1440.png`、`03-browse-all-dark-1440.png`；measure 输出 `hotBadges = 91`、`hotCards = 10`。

### H4 · 搜索 41 条结果中 40 条没有任何命中标记，建议面板被弱匹配挤占

- **修复**：
  - 新增 `matchReason()`：按取值/属性/关键词/标签/分类/描述/语法/名称近似/相关度给出理由，理由内的命中词再包 `<mark>`；
  - 行、卡、建议面板在名称/中文无可见 mark 时显示「匹配：…」；
  - 建议面板使用 `searchDetailed()` 分数，阈值 = `max(50, 头部分数 × 0.8)`，并保留可见字段命中；弱匹配只进完整结果页；
  - 热门 chip 全部换成真实条目/可解释搜索词。
- **代码**：`js/search.js:203-231`（searchDetailed）、`js/search.js:234-330`（hasFieldMatch/matchReason）、`js/render.js:83-90`（matchHTML）、`js/render.js:382-426`（行/卡）、`js/render.js:515-569`（建议）、`js/app.js:694-707`（阈值）、`js/render.js:15-27`（热门 chip）。
- **复验**：
  - `#/search?q=居中`：41 行，`noReason = 0`；前 10 行均有「匹配：取值/关键词」+ `<mark>`。
  - 建议面板 `disp`：仅 `display`、`dispatchEvent / CustomEvent` 两行，弱匹配 = 0。
  - 热门 chip：`#map`、`#Array.from`、`#display`、`#flex`、`#居中` 均可落地；不再出现 `Array.map`。
- **证据**：`screenshots/09-search-1440.png`、`01-portal-dark-1440.png`、`18-search-empty-1440.png`；measure 输出 `search.noReason = 0`、`suggest.weak = 0`。

### H5 · 色彩语义被滥用：取值名用强调绿，HTML 属性名用 JS 黄

- **修复**：`.rb-value__k` 与 `.rb-attrs .rb-value__k` 统一改为 `--fg-1`（mono 12/500），不再使用 `--acc` / `--c-js`；取值/属性保持不可点 `<span>`。
- **代码**：`css/components.css:1052-1065`。
- **复验**：`#/css/display` 计算色 `rgb(233,231,227)`（`--fg-1`）；`#/html/div` 属性计算色 `rgb(233,231,227)`，不再是 `--c-js`。
- **证据**：`screenshots/05-detail-css-display-1440.png`、`06-detail-css-display-light-1440.png`、`07-detail-html-div-1440.png`。

### H6 · 「标签」筛选把规范状态和热度又抄了一遍

- **修复**：`CSData.tags` 只取 `META.tags`（6 个正交标签）；筛选面板/移动 sheet 的标签组只出这 6 项；新增独立「热度」筛选（全部/高频 91/少见 151）与图例；详情标签 chip 也只显示 6 个正交标签。
- **代码**：`js/data.js:152-156`；`js/render.js:96-100`（orthogonalTags）、`js/render.js:577-634`（popover）、`js/render.js:654-714`（sheet）、`js/app.js:167-190`（heat 过滤）、`js/app.js:245-252`（工具栏热态）；搜索索引也只把 6 个正交标签计入标签命中（`js/search.js:89-121`、`js/search.js:260-330`）。
- **复验**：标签 popover 精确为 `可动画 / 可继承 / 浏览器前缀 / 简写 / 逻辑属性 / SVG`；热度项为 `全部 1274 / 高频 91 / 少见 151`；状态组「实验性」只出现一次；`#/html/div` 标签行不再出现「常用标签」。
- **证据**：`screenshots/15-mobile-sheet-390.png`；measure 输出 `filters.tags.length = 6`、`heats = [全部 1274, 高频 91, 少见 151]`。

---

## 3. Medium

### M1 · 移动筛选面板的 IA 与多选状态

- **修复**：sheet 分组改为 `分类 → 规范状态 → 热度 → 标签 → 排序`；分类/状态/热度用 3 列、44px 触控；状态补计数；标签与热度补 16px 勾选位/✓；分类置顶后首屏可见「分类 + 规范状态」。
- **代码**：`js/render.js:654-714`；`js/app.js:974-1110`（pending/open/apply/reset/toggle）；`css/components.css:1642-1668`（3 列、勾选位）、`css/components.css:1771`（44px）。
- **复验**：390×844 `#/css`：分组顺序精确；36 个选项；首屏包含 `分类 / 规范状态`；状态计数 `全部 1274 / 标准 566 / 实验性 40 / 非标准 119 / 已废弃 48`；标签勾选位 6 个；选项高度 44。
- **证据**：`screenshots/15-mobile-sheet-390.png`；measure 输出 `sheet.groups`、`statusCounts`、`firstOptHeight = 44`。

### M2 · 抽屉头动作组既不在左端也不在右端，状态也没进头部

- **修复**：抽屉头改为三列：面包屑左、状态中、动作右；✕ 贴右缘 16px；桌面/移动同结构；状态从标签行移除；移动端补 44×44 ← 返回按钮。
- **代码**：`js/render.js:964-1026`；`css/layout.css:706-777`（grid/状态/返回）、`css/components.css:1893-1896`（返回按钮尺寸）。
- **复验**：`#/css/display`：`.rb-drawer__state` 文本「标准」；`closeRightGap = 16`；`navRight = 16`；移动端状态中心 `196` vs 抽屉中心 `195`；返回按钮 `44×44`；标签行仅 `可动画 标签`。
- **证据**：`screenshots/05-detail-css-display-1440.png`、`12-mobile-detail-390.png`；measure 输出 `closeRightGap = 16`、`backSize = [44,44]`。

### M3 · 帮助面板：键位列不对齐，数据事实混入，最后一行被裁

- **修复**：快捷键行改 `grid-template-columns: 1fr auto`，kbd 统一右对齐；移除「数据」组；面板底部留 20px padding；数据事实移到顶栏 `...` 的数据说明 popover。
- **代码**：`js/render.js:728-764`（移除数据组）、`js/render.js:628-637`（数据 popover）、`js/app.js:921-929`（popover 角色/标签）、`index.html:119`（`data-pop="data"`）、`css/components.css:1693-1712`（grid 行）、`css/components.css:1682`（底部 padding）。
- **复验**：帮助面板 19 行，`scrollHeight = clientHeight = 763`；所有 kbd 右缘 spread = `0`；最后一行在面板底边之上；组标题只有 `全局 / 列表 / 搜索框 / 详情抽屉`；顶栏 `...` 打开「数据说明」popover。
- **证据**：`screenshots/13-help-dialog-1440.png`；measure 输出 `help.panel = [763,763]`、`kbdRightSpread = 0`。

### M4 · 长语法/长代码在触屏上没有横滚提示

- **修复**：渲染后 `syncCodeOverflow()` 检测 `scrollWidth > clientWidth`，给 `.rb-code` 加 `has-overflow`；右侧 28px 渐变遮罩（到右端自动淡出）；bar 显示「↔ 可横滚」；滚动条 thumb 提到 `--fg-4`/hover `--fg-2`；保留 `white-space: pre` 与 `tabindex=0`。
- **代码**：`js/render.js:766-781`（hint/fade 节点）、`js/app.js:404-423`（sync/fade）、`js/app.js:504-505`（打开后同步）、`js/app.js:1774`（resize 同步）、`css/components.css:950-974`（hint/fade）、`css/components.css:988-995`（滚动条）。
- **复验**：`#/css/display` 语法 `scrollWidth 880 / clientWidth 499`，`.rb-code--syntax.has-overflow`；fade opacity = `1`；bar 可见「↔ 可横滚」；390 宽详情同样可见；滚动到右端 fade 淡出。
- **证据**：`screenshots/05-detail-css-display-1440.png`、`12-mobile-detail-390.png`；measure 输出 `synOverflowClass = "rb-code rb-code--syntax has-overflow"`。

### M5 · 移动端章节/返回导航：chip 被裁、当前项不出现在视口、触控 <44

- **修复**：章节 chip 高度 44；章节条右侧 24px mask 渐隐；`setActiveSection()` 在 active 变化时把当前 chip 水平居中（尊重 reduced-motion）；抽屉头加 44×44 ← 返回。
- **代码**：`js/app.js:59`（lastSectionTarget）、`js/app.js:415-434`（centerChapter/setActiveSection）、`js/app.js:436-456`（observeSections）、`js/app.js:471-506`（openDrawer）、`css/components.css:1271-1296`（44px + mask）；`css/components.css:1893-1896`（返回）。
- **复验**：390 宽 `#/css/display`：chip 高度集合 `[44]`；`chipScroll 673 / clientWidth 389`；滚动到 `#sec-4` 时 active `04 示例` 在视口内且 `scrollLeft = 57`；返回按钮 44×44。
- **证据**：`screenshots/12-mobile-detail-390.png`；measure 输出 `chipHeights = [44]`、`mobileChapter.activeVisible = true`。

### M6 · JS 详情没有把示例当主视觉，型号行悬在内容末尾

- **修复**：JS 示例独有 `rb-code--js`：`font-size:13`、`min-height:160`；型号行移出滚动内容，成为抽屉底部固定 40px footer；CSS/HTML/JS 一致。
- **代码**：`js/render.js:895`（JS 示例类）、`js/render.js:1023-1026`（model 移出 scroll）、`css/components.css:1026-1027`（13/160）、`css/components.css:1320-1339`（40px footer）。
- **复验**：`#/js/let` 示例块高 `194`（bar 32 + body 160 + 边框），`.rb-code__pre` 字号 `13px`；型号行高 `40`，距抽屉底 `0`，不在 `.rb-drawer__scroll` 内；`#/css/display` 同样底部 0。
- **证据**：`screenshots/08-detail-js-let-1440.png`、`05-detail-css-display-1440.png`；measure 输出 `exampleHeight = 194`、`fontSize = 13px`。

### M7 · 首页热门入口 `#Array.map` 指向不存在的条目

- **修复**：热门 chip 与建议面板热门入口改为数据中存在的 `display / flex / grid-template-columns / map / Array.from / addEventListener / let`，保留可解释的 `居中` 搜索词并加「搜索：」title。
- **代码**：`js/render.js:15-27`（HOT_CHIPS）、`js/render.js:499-511`（HOT_SUGGEST）、`js/render.js:170-173`（chip title）。
- **复验**：`#/` 热门 chip 的搜索结果首条分别为 `display / flex / grid-template-columns / map / Array.from / addEventListener / let`；不再出现 `Array.map`。
- **证据**：`screenshots/01-portal-dark-1440.png`；measure 输出 `chipTargets`。

---

## 4. Low

### L1 · 空状态次按钮「清除筛选」实际是 clear-all

- **修复**：搜索空状态次按钮改为「清空搜索」，绑定 `data-act="clear-search"`（只清 q，不动筛选）；筛选空状态仍保留「清除全部筛选」。
- **代码**：`js/render.js:428-453`（空状态分支）；`js/app.js:1193-1212`（clearFilters/clearAll/clearSearchOnly）。
- **复验**：`#/search?q=gridddd` 两按钮为 `查看全部 1274 条 | clear-all` 与 `清空搜索 | clear-search`，行为不同。
- **证据**：`screenshots/18-search-empty-1440.png`；measure 输出 `empty.buttons`。

### L2 · HTML/JS 的「相关 / 参考」混入兼容缺失说明和两个 MDN 入口

- **修复**：删除 `neutral` 兼容缺失说明；「相关 / 参考」只保留规范、相关条目、一个 MDN 入口；CSS 支持章节不变。
- **代码**：`js/render.js:953-957`（相关/参考 body）。
- **复验**：`#/js/let` 与 `#/html/div` 的相关区块不再出现「未收录浏览器兼容数据」，MDN 入口只有一个。
- **证据**：`screenshots/08-detail-js-let-1440.png`、`07-detail-html-div-1440.png`；measure 输出 `relatedText` 不含兼容缺失说明。

### L3 · 微文案/读数标签的 3 处口径

- **修复**：
  - 门户读数条：`566` + 「标准条目」；
  - 列表头/结果头加 `·`（`全部条目 · 1274 条`、`搜索结果 · 41 条`）；
  - 排序「推荐」改名「默认」，搜索时仍显示「相关度」。
- **代码**：`js/render.js:163-200`（门户读数）、`js/render.js:363-376`（listHead dot）、`js/render.js:26`（SORT_LABEL）、`css/layout.css:604-610`（dot 样式）。
- **复验**：门户读数 `566 标准条目`；`#/all` 列表头 `全部条目 · 1274 条`；`#/search?q=居中` 列表头 `搜索结果 · 41 条`；排序 popover 首项为「默认」。
- **证据**：`screenshots/01-portal-dark-1440.png`、`16-html-index-1440.png`、`09-search-1440.png`。

---

## 5. §5「无需修改」的 11 条：确认未动

1. 移动端行视图仍不显示摘要（`css/components.css:688-696`、`770-772`；只在 `no-zh` 时按 fallback 用摘要列，不新增第三行）。
2. 语种三重编码（2px 轨 + H/C/J + 4px 点）未删。
3. 列表零阴影、卡片 8px 圆角 + 40% 顶条未改。
4. 浅色主题代码块仍深底。
5. 支持条 `✗`/`preview`/`—` 字符双编码未改，未加警报色。
6. 移动筛选 sheet 选项保持 44px，未压到 32/28。
7. 移动门户 53 分类单列展开未改。
8. 抽屉 720/640、预览 240/200、代码 12.5 未整体放大；仅 JS 示例按 4.4 例外改 13/160。
9. 列表头「排序」「1 项筛选」读数摘要保留，只改「推荐→默认」语义。
10. 移动端行尾用状态代替 `▸` 未加 `▸`。
11. 搜索建议 8 行上限、主题切换不重建列表、空状态 480×220 未改。

---

## 6. 全量复验记录

> 以下命令均在 `D:\桌面\HTML、css、JS速查` 执行（`tools\` 与 `前端速查大全\` 同级）。

### 6.1 语法

```powershell
# 30 个产品 JS（js/ 7 + data/ 23）
node --check <每个文件>
# 结果：checked 30 files, failures 0
```

### 6.2 截图

```powershell
node tools\shoot.mjs
# 19 张：01–15 重拍；16 #/html；17 #/js/dom 卡片；18 #/search?q=gridddd；19 #/css/max-lines
# errors: []
```

### 6.3 量测（`tools/measure.mjs`）

| 项 | 实测 |
|---|---|
| `#/all` 标准纯文本 / 高频行 / 高频徽章 / 徽章总数 | `0 / 91 / 91 / 298` |
| 状态筛选「已废弃」 | `48` 行 |
| 热度筛选「高频」 | `91` 行，91 个徽章 |
| `#/html` 已废弃行 | `32` |
| `#/search?q=居中` | `41` 行，`noReason = 0` |
| 建议 `disp` | 2 行（display、dispatchEvent），弱匹配 `0` |
| 抽屉 ✕ 距右缘 / 返回按钮 | `16px` / `44×44` |
| 移动端状态中心 vs 抽屉中心 | `196 / 195` |
| 移动章节 chip 高度 / 滚动 | `44` / `673 / 389` |
| JS 示例块 / 字号 / 型号行 | `194px` / `13px` / `40px，距底 0` |
| 帮助面板 | `763 / 763`，kbd 右缘 spread `0` |
| 移动 sheet | 36 选项，分组 `分类/规范状态/热度/标签/排序`，首屏含分类+状态，选项 `44px` |
| `max-lines` 支持条 | `0/4`：Chrome/Edge/Firefox ✗、Safari preview |
| 控制台错误 | `0` |

### 6.4 数据层边界

- `data/**` 未改动；`meta.normAxis` / `heatAxis` / 6 个 tags 原样读取。
- `docs/ui-review.md` 未改动。
- 验收报告的问题编号与 §5 保留项逐条对应，无「顺手重做视觉系统」的变更。
