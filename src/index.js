import G6 from '@antv/g6';

//数据
//数据
	var data = {
			nodes : [ {
				id : 'node1',
				x : 100,
				y : 800,
				label : '2011'
			}, {
				id : 'node4',
				shape : 'rect',
				size : [ 100, 50 ],
				x : 250,
				y : 30,
				label : 'task1',
				labelCfg : {
					position : 'center',
					offset : 5,
					style : {
						fill : 'white', // 节点标签文字颜色
					},
				},
				style : {
					fill : '#0066CC', // 节点填充色
					stroke : '#0066CC', // 节点描边色
					radius : 10,
				},
			}, {
				id : 'node6',
				shape : 'rect',
				size : [ 100, 30 ],
				x : 250,
				y : 80,
				label : '10/100 10%',
				labelCfg : {
					position : 'center',
					offset : 5,
					style : {
						fill : 'black', // 节点标签文字颜色
					},
				},
				style : {
					fill : 'yellow', // 节点填充色
					stroke : 'yellow', // 节点描边色
					radius : 10,
				},
			}, {
				id : 'node2',
				x : 400,
				y : 100,
				label : '2012'
			}, {
				id : 'node5',
				shape : 'rect',
				size : [ 100, 50 ],
				x : 550,
				y : 30,
				label : 'task2',
				labelCfg : {
					position : 'center',
					offset : 5,
					style : {
						fill : 'white', // 节点标签文字颜色
					},
				},
				style : {
					fill : '#0066CC', // 节点填充色
					stroke : '#0066CC', // 节点描边色
					radius : 10,
				},
			}, {
				id : 'node7',
				shape : 'rect',
				size : [ 100, 30 ],
				x : 550,
				y : 80,
				label : '10/100 10%',
				labelCfg : {
					position : 'center',
					offset : 5,
					style : {
						fill : 'black', // 节点标签文字颜色
					},
				},
				style : {
					fill : 'red', // 节点填充色
					stroke : 'red', // 节点描边色
					radius : 10,
				},
			}, {
				id : 'node3',
				x : 700,
				y : 100,
				label : '2013'
			} ],
			edges : [ {
				source : 'node1',
				target : 'node2',
				label : '',
				labelCfg : {
					refY : 10
				}
			}, {
				source : 'node2',
				target : 'node3',
				label : '',
				labelCfg : {
					refY : 10
				}
			} ]
		};
		const container = document.getElementById('container');
		const width = container.scrollWidth;
		const height = (container.scrollHeight || 500) - 100;
		
		const graph = new G6.Graph({
			container : 'container',
			width,
			height : height,
			defaultNode : {
				size : 5, // 节点大小
				// 节点样式配置
				style : {
					fill : 'orange', // 节点填充色
					stroke : 'orange', // 节点描边色
					lineWidth : 1, // 节点描边粗细
				},
				// 节点上的标签文本配置
				labelCfg : {
					// 节点上的标签文本样式配置
					position : 'bottom',
					offset : 10,
					style : {
						fill : 'black', // 节点标签文字颜色
					},
				},
			},
			//连接线设置
			defaultEdge : {
				color : '#bae7ff',
				lineAppendWidth : 3,
				size : 5
			},
		});
    
		graph.data(data);
		graph.render();
		
