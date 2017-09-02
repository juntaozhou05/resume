$(document).ready(function() {
            $('#myContainer').multiscroll({
            	sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#4BBFC3'],
            	anchors: ['firstSection', 'second', 'third', 'four'],
            	menu: '#menu',
            	navigation: true,
            	navigationTooltips: ['个人简介', '专业技能', '工作经历', '项目经验'],
            	normalScrollElements: '#demo',
            	loopBottom: true,
            	loopTop: true,
            	onLeave: function(index, nextIndex, direction){
            		console.log("onLeave==> index: " + index +" nextIndex: " + nextIndex + " direction: " + direction );
            	},
            	afterLoad: function(anchorLink, index){
				console.log("afterLoad==> anchorLink: " + anchorLink +" index: " + index);
            	},
            	afterRender: function(){
            		console.log("finish rendering");
            	}
            });
            $('#pepe').click(function(){
            	$.fn.multiscroll.moveTo('third');
            });

        });