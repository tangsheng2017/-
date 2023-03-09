class Tab{
	constructor(id) {
		this.main = document.querySelector(id)
		this.lis = this.main.querySelectorAll('li')
		this.sections = this.main.querySelectorAll('section')
		console.log(this.main)
		console.log(this.lis)
		console.log(this.sections)
		this.init()
	}
	init(){
		// 初始化项目，让所有元素绑定事件
		this.lis.forEach((item,index)=>{
			item.onclick = () =>{
				console.log(index)
			}
		})
	}

	// 1、切换功能
	toggleTab(){

	}

	// 2、添加功能
	addTab(){

	}

	// 3、删除功能
	removeTab(){

	}

	// 4、修改功能
	editTab(){

	}
}
new Tab('#tab')
