# javascript-language-switcher
![](https://img.shields.io/github/license/chienhsiang-hung/javascript-language-switcher)
![](https://img.shields.io/github/languages/count/chienhsiang-hung/javascript-language-switcher)
![](https://img.shields.io/github/languages/top/chienhsiang-hung/javascript-language-switcher)
![](https://img.shields.io/website?url=https%3A%2F%2Fchienhsiang-hung.github.io%2Fjavascript-language-switcher%2F)
![](https://img.shields.io/github/deployments/chienhsiang-hung/javascript-language-switcher/github-pages)
![](https://img.shields.io/github/languages/code-size/chienhsiang-hung/javascript-language-switcher)
![](https://img.shields.io/github/repo-size/chienhsiang-hung/javascript-language-switcher)
![](https://img.shields.io/github/v/release/chienhsiang-hung/javascript-language-switcher?include_prereleases)
![](https://img.shields.io/github/discussions/chienhsiang-hung/javascript-language-switcher)
![](https://img.shields.io/github/checks-status/chienhsiang-hung/javascript-language-switcher/main)

after quite a bit of searching, I decided to create a naive one

you can just [fork](https://github.com/chienhsiang-hung/javascript-language-switcher/fork) it to use it

simple [demo](https://chienhsiang-hung.github.io/javascript-language-switcher/)

## jQuery Hide & Show
At the first I thought I can use jQuery's `.hide()` and `.show()` to achieve the result I want.

### First Naive Version
**HTML**
```python
    <h1 class="en">JavaScript Language Switcher</h1>
    <h1 class="tw">JS語言切換</h1>
    <span class='en' onclick="switch_lang('.en', '.tw')">中文</span><span class='tw' onclick="switch_lang('.tw', '.en')">EN</span>
```
**JS**
```javascript
window.onload = switch_lang('.tw', '.en');

function switch_lang(hide_lan, show_lan){
  $(hide_lan).hide();
  $(show_lan).show();
}
```
Then I quickly found that the user with javascript disabled or slow load in would result in seeing the [original HTML](https://chienhsiang-hung.github.io/javascript-language-switcher/) w/ multiple langs not being hidden.
So I've tried to initialize the hidden lang by set CSS `visible` to `hidden`.
### CSS Visibility
```css
.tw {visibility: hidden;}
.en {visibility: visible;}
```
But it resulted in a [disordered layout](https://chienhsiang-hung.github.io/javascript-language-switcher/css-visible.html).(You can regard it as what when we set the `colour: white;` to cover something up)  
Finally with the help of another style attribution, `display`, I am able to achieve what I want - to set up a multilingual site and handle the error when users have a **low load-in speed** or **JS disabled**.

### CSS Display
```css
.tw {display: none;}
```
Result: [Simple JavaScript Language Switcher w/ css display (chienhsiang-hung.github.io)](https://chienhsiang-hung.github.io/javascript-language-switcher/css-display.html)
