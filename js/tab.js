let that;
class Tab {
    constructor(id) {
            // 获取元素 
            that = this;
            this.main = document.querySelector(id);
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
            this.init();
        }
        // 初始化方法
    init() {
            for (let i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggleTab;
            }
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
            // (1)创建li元素和section元素
            // (2)把这两个元素追加到对应的父元素里面
        }
        // 3.删除功能
    removeTab() {}
        // 4.修改功能
    editTab() {}
}
new Tab('#tab');