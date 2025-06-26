PROJECTS :
---------

LOGIN PAGE URL    : http://127.0.0.1:5500/CSS/02_login_project/login.html

SIGN UP PAGE URL  : http://127.0.0.1:5500/CSS/03_signup_project/signup.html

REGISTER NOW URL  : http://127.0.0.1:5500/CSS/04_Register_project/register.html

# 📚 CSS Properties Quick Reference

This guide provides a **complete, categorized list of the most commonly used CSS properties** with clear explanations. For visuals, examples, or interactive content, just ask!

---

## 🧠 CSS Properties Explained (Grouped by Function)

---

### 📦 BOX MODEL PROPERTIES

Define **spacing and layout**:

| Property                                                            | Description                                                           |
| ------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `margin`                                                            | Space **outside** the element                                         |
| `margin-top` / `margin-bottom` / `margin-left` / `margin-right`     | Directional margin                                                    |
| `padding`                                                           | Space **inside**, around content                                      |
| `padding-top` / `padding-bottom` / `padding-left` / `padding-right` | Directional padding                                                   |
| `border`                                                            | Border style, width, and color                                        |
| `border-radius`                                                     | Rounded corners                                                       |
| `width` / `height`                                                  | Sets size of element                                                  |
| `min-width` / `max-width`                                           | Size limits                                                           |
| `box-sizing`                                                        | Includes padding/border in size (`border-box`) or not (`content-box`) |

---

### 🎨 TEXT & FONT PROPERTIES

| Property          | Description                                        |
| ----------------- | -------------------------------------------------- |
| `color`           | Text color                                         |
| `font-family`     | Font style                                         |
| `font-size`       | Font size                                          |
| `font-style`      | Normal, italic, oblique                            |
| `font-weight`     | Boldness (e.g., `normal`, `bold`, `500`)           |
| `line-height`     | Spacing between lines                              |
| `letter-spacing`  | Space between letters                              |
| `word-spacing`    | Space between words                                |
| `text-align`      | Aligns text (`left`, `center`, `right`, `justify`) |
| `text-transform`  | Uppercase, lowercase, capitalize                   |
| `text-decoration` | Underline, overline, line-through                  |
| `white-space`     | How whitespace is handled                          |
| `direction`       | Text direction (`ltr`, `rtl`)                      |

---

### 🧱 LAYOUT & POSITIONING

| Property                         | Description                                                 |
| -------------------------------- | ----------------------------------------------------------- |
| `display`                        | Layout behavior (`block`, `inline`, `flex`, `grid`, `none`) |
| `position`                       | `static`, `relative`, `absolute`, `fixed`, `sticky`         |
| `top`, `left`, `right`, `bottom` | Position offsets                                            |
| `z-index`                        | Layer order                                                 |
| `float`                          | Float element left or right                                 |
| `clear`                          | Controls float behavior                                     |
| `overflow`                       | Scroll, hide, or clip overflow content                      |
| `visibility`                     | Show or hide (`visible`, `hidden`)                          |

---

### 🧩 FLEXBOX & GRID

| Property                                       | Description                      |
| ---------------------------------------------- | -------------------------------- |
| `display: flex`                                | Enables flexbox layout           |
| `flex-direction`                               | Row, column direction            |
| `justify-content`                              | Horizontal alignment             |
| `align-items`                                  | Vertical alignment               |
| `flex-wrap`                                    | Wraps items if needed            |
| `align-self`                                   | Align one item in flexbox        |
| `flex`                                         | Flex grow/shrink/basis shorthand |
| `gap`                                          | Space between items              |
| `display: grid`                                | Enables grid layout              |
| `grid-template-columns` / `grid-template-rows` | Grid tracks                      |
| `grid-gap` or `gap`                            | Space between rows/columns       |
| `grid-column`, `grid-row`                      | Grid positioning                 |

---

### 🎨 BACKGROUND & BORDER

| Property              | Description                  |
| --------------------- | ---------------------------- |
| `background-color`    | Background color             |
| `background-image`    | Image background             |
| `background-size`     | Cover, contain               |
| `background-position` | Position of background image |
| `background-repeat`   | Repeat pattern               |
| `border-style`        | Solid, dashed, dotted        |
| `border-width`        | Thickness                    |
| `border-color`        | Border color                 |
| `box-shadow`          | Adds shadow around element   |

---

### 🧭 ANIMATION & TRANSITION

| Property                                                        | Description                                       |
| --------------------------------------------------------------- | ------------------------------------------------- |
| `transition`                                                    | Smooth change between property values             |
| `transition-property`                                           | What to animate                                   |
| `transition-duration`                                           | How long it lasts                                 |
| `transition-timing-function`                                    | Ease, linear, etc.                                |
| `animation`                                                     | Apply keyframe animation                          |
| `animation-name`, `animation-duration`, `animation-delay`, etc. | Animation details                                 |
| `transform`                                                     | 2D/3D transforms (`rotate`, `scale`, `translate`) |

---

### 🎯 INTERACTION & EFFECTS

| Property         | Description                                        |
| ---------------- | -------------------------------------------------- |
| `cursor`         | Cursor type (e.g., `pointer`, `default`)           |
| `opacity`        | Transparency level                                 |
| `visibility`     | `visible` or `hidden`                              |
| `pointer-events` | Control if element receives pointer (mouse) events |
| `user-select`    | Prevent text selection (`none`, `text`)            |

---

### 📱 RESPONSIVE DESIGN (Media & Units)

| Concept           | Description                    |
| ----------------- | ------------------------------ |
| `@media`          | Media query for responsiveness |
| `%` / `vw` / `vh` | Percentage and viewport units  |
| `em` / `rem`      | Relative units to font-size    |

---

### 🧪 PSEUDO-CLASSES & PSEUDO-ELEMENTS

| Syntax                 | Description                         |
| ---------------------- | ----------------------------------- |
| `:hover`               | When hovered                        |
| `:active`              | When clicked                        |
| `:focus`               | When focused (e.g., input)          |
| `:nth-child(n)`        | Select specific child               |
| `::before` / `::after` | Insert content before/after element |

---

