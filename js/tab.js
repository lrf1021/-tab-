let that;
class Tab {
    constructor(id) {
            // 获取元素 
            that = this;
            this.main = document.querySelector(id);
            this.add = this.main.querySelector('.tabadd');
            this.ul = this.main.querySelector('.fisrstnav ul:first-child');
            this.tabscon = this.main.querySelector('.tabscon');
            this.init();
        }
        // 初始化方法
    init() {
            this.updated();
            this.add.onclick = this.addTab;
            for (let i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggleTab;
            }
        }
        // 获取所有的小li和section
    updated() {
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
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
    removeTab() {}
        // 4.修改功能
    editTab() {}
}
new Tab('#tab');