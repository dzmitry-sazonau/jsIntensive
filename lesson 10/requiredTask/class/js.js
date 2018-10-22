'use strict';
class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.obj = {
            getDiv() {
                let div = document.querySelector('.root');
                console.log(div);
                return div;
            }
        };
    }
    createDiv(text) {
        let item = document.createElement('div');
        item.textContent = text;
        item.classList.add('root');
        item.style.cssText = (`height: ${this.height}; width: ${this.width}; background:url(${this.bg}) no-repeat; font-size: ${this.fontSize}; text-align: ${this.textAlign};`);
        document.body.appendChild(item);
    }
}
let block = new Options('666px','355px','qwe.jpg','15px','center');
block.createDiv('Jopa');
block.obj.getDiv();
