let that;
class Tab {
    constructor(id) {
            // 获取元素 
            that = this;
            this.main = document.querySelector(id);
            this.add = this.main.querySelector('.tabadd');
            this.ul = this.main.querySelector('.fisrstnav ul:first-child');
            this.tabscon = this.main.querySelector('.tabscon');
            this.ul
            this.init();
        }
        // 初始化方法
    init() {
            this.updated();
            this.add.onclick = this.addTab;
            for (let i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggleTab;
                this.remove[i].onclick = this.removeTab;
                this.spans[i].ondblclick = this.editTab;
                this.sections[i].ondblclick = this.editTab;
            }
        }
        // 获取所有的小li和section
    updated() {
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
            this.remove = this.main.querySelectorAll('.icon-guanbi');
            this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
        }
        // 1.切换功能
    toggleTab() {
            that.clearClass();
            this.className = "liactive";
            that.sections[this.index].className = 'conactive';
        }
        // 
    clearClass() {
            for (let i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';
            }
        }
        // 2.添加功能
    addTab() {
            let random = parseInt(Math.random() * 100);
            that.clearClass();
            // (1)创建li元素和section元素
            let li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
                // 创建新的选项卡
            let section = '<section class="conactive">新的选项卡' + random + '</section>';
            // (2)把这两个元素追加到对应的父元素里面
            that.ul.insertAdjacentHTML('beforeend', li)
            that.tabscon.insertAdjacentHTML('beforeend', section)
            that.init();
        }
        // 3.删除功能
    removeTab(e) {
            e.stopPropagation();
            let index = this.parentNode.index;
            that.lis[index].remove();
            that.sections[index].remove();
            that.init();
            if (document.querySelector('.liactive')) return;
            // 当我们删除了选中状态的这个li的时候,让他的前一个li处于选定状态
            index--;
            // 手动调用我们的点击事件 不需要鼠标触发
            that.lis[index] && that.lis[index].click();
        }
        // 4.修改功能
    editTab() {
        let str = this.innerHTML;
        this.innerHTML = '<input type="text"/>';
        let input = this.children[0];
        input.value = str;
        input.select(); //文本框里面的文字处于选定状态
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
        };
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                this.blur(); //手动调用
            }
        }
    }
}
new Tab('#tab');