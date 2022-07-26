# javascript-language-switcher

after quite a bit of searching, I decided to create a naive one

you can just fork it to use it

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
