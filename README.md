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
