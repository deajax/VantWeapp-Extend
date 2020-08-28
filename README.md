## Field vertical

###### 输入框垂直排列

<img src="http://resources.deajax.com/uPic/image-20200828101350201.png" alt="image-20200828101350201" style="zoom:50%;" />

Wxml:

```
<view class="van-field-vertical">
	<van-cell-group title="分组1">
		<van-field icon="info-o" label="单元格" placeholder="请输入" />
		<van-field icon="info-o" label="单元格" placeholder="请输入" is-link />
		<van-field label="单元格" placeholder="请输入" is-link readonly />
		<van-field icon="info-o" label="单元格" placeholder="请输入" is-link>
			<van-button slot="button" size="small" type="primary">发送验证码</van-button>
		</van-field>
		<van-field label="单元格" placeholder="请输入" border="{{ false }}" />
	</van-cell-group>
</view>
```

Less:

```
.van-field-vertical {

	.field-index--van-field {
		display  : flex;
		flex-flow: wrap;

		.van-cell__title {
			flex        : 1;
			max-width   : 100% !important;
			min-width   : 100% !important;
		}

		.van-cell__value {
			flex: 1;
		}

		.van-field__label {
			flex : 1;
			width: 100%;
		}

		.van-field__input {
			--cell-line-height: 32px;
			height            : var(--cell-line-height, 32px);
		}

		.van-cell__right-icon-wrap {
			align-self: center;
		}
	}
}
```

​       

## 卡片式列表

###### Block Cell

<img src="http://resources.deajax.com/uPic/image-20200828101330181.png" alt="image-20200828101330181" style="zoom:50%;" />

Wxml:

```
<!-- round为是否圆角 -->
<view class="van-cell-block round">
	<van-cell-group title="分组1">
		<van-cell title="单元格" value="内容" />
		<van-cell title="单元格" value="内容" label="描述信息" border="{{ false }}" />
	</van-cell-group>

	<van-cell-group title="分组1">
		<van-cell title="单元格" is-link />
		<van-cell title="单元格" is-link value="内容" />
		<van-cell title="单元格" is-link icon="location-o" />
	</van-cell-group>
	
	<!-- 不显示 group 的外边框 -->
	<van-cell-group title="分组1" border="{{ false }}">
		<van-cell title="单元格" is-link />
		<van-cell title="单元格" is-link value="内容" />
		<van-cell title="单元格" is-link icon="location-o" />
	</van-cell-group>
</view>
```

Less:

```
.van-cell-block {
	.van-cell-group {
		margin: 0 12px 0;

		&.van-hairline--top-bottom:after {
			border-width: 1px;
		}
	}

	&.round {
		.van-cell-group {
			@round: 4px;
			border-radius: @round;
			overflow     : hidden;

			&.van-hairline--top-bottom:after {
				border-radius: @round*2;
			}
		}
	}
}
```

​    

## 页头

###### Page header

<img src="http://resources.deajax.com/uPic/image-20200828101302773.png" alt="image-20200828101302773" style="zoom:50%;" />

Wxml:

```
<!-- 可以通过更改 van-page-header 的背景颜色、文字颜色来改变导航的颜色 -->
<view class="van-page-header">
	<van-nav-bar title="导航栏标题" safe-area-inset-top="{{ false }}">
		<view slot="right" class="van-navbar-extra">
			<navigator>按钮</navigator>
			<navigator style="margin-left: 16px">按钮</navigator>
		</view>
	</van-nav-bar>
</view>
```

Less:

```
.van-page-header {
	background: white;
	color     : #1f1f1f;

	.van-nav-bar {
		padding-bottom            : 4px;
		background                : inherit;
		--nav-bar-background-color: inherit;
	}

	.van-nav-bar__title {
		position    : relative;
		margin-left : 0;
		padding-left: 16px;
		text-align  : left;
		font-size   : 18px;
		box-sizing  : border-box;
		color       : inherit;
	}

	.van-nav-bar__right {
		line-height: 1.5715;
	}

	.van-navbar-extra {
		display    : flex;
		align-items: center;
	}
}
```

​    

## 统计数值

###### Statistic

<img src="http://resources.deajax.com/uPic/image-20200828101152235.png" alt="image-20200828101152235" style="zoom:50%;" />

Wxml:

```
<view class="van-statistic">
	<van-grid column-num="2" border="{{ false }}">
		<van-grid-item text="Active Users">
			<view slot="icon" class="van-statistic-content">
				<view class="van-statistic-value">112,893</view>
				<view class="van-statistic-suffix">kg</view>
			</view>
		</van-grid-item>
		<van-grid-item text="Unmerged">
			<view slot="icon" class="van-statistic-content">
				<view class="van-statistic-value">93</view>
				<view class="van-statistic-suffix">/ 100</view>
			</view>
		</van-grid-item>
	</van-grid>
</view>
```

Less:

```
@font-face {
	font-family: "Flama";
	font-weight: normal;
	font-style : normal;
	src        : url('https://cdn.jsdelivr.net/gh/deajax/FontFace-CDN/src/fonts/Flama/Flama-Basic.otf') format('opentype');
}

.van-statistic {
	.van-statistic-content {
		.van-statistic-value {
			display    : inline-block;
			font-family: 'Flama';
			font-size  : 18px;
			font-weight: bold;
		}

		.van-statistic-suffix {
			display    : inline-block;
			font-family: 'Flama';
			font-size  : 12px;
			color      : fade(black, 65%);
			margin-left: 2px;
		}
	}
}
```

​      

> 1、数值必须使用 slot="icon"
>
> 2、column-num 可以自定义
>
> 3、border 可以根据需要定义显示与否，默认显示

​    

## 状态标签 (组件)

###### Status

<img src="http://resources.deajax.com/uPic/image-20200828101131035.png" alt="image-20200828101131035" style="zoom:50%;" />

components Wxml:

```
<view class="van-status">
	<view class="van-status-icon {{ status }}"></view>
	<text>{{ text }}</text>
</view>
```

components Js:

```
Component({
	options: {
		addGlobalClass: true
	},
	properties: {
		status: {
			type: String,
			value: 'default'
		},
		text: String
	},
	data: {

	},
	methods: {

	}
})
```

components Less:

```
.van-status {

	line-height: 20px;

	.van-status-icon {
		display       : inline-block;
		width         : 6px;
		height        : 6px;
		border-radius : 50%;
		vertical-align: 2px;

		&.default {
			background: #d9d9d9;
		}

		&.success {
			background: #52c41a;
		}

		&.error {
			background: #f5222d;
		}

		&.processing {
			background: #1890ff;
			animation : processing 3s infinite ease-out;
		}

		&.warning {
			background: #faad14;
		}
	}

	text {
		font-size  : 14px;
		color      : fade(black, 75%);
		margin-left: 6px;
	}
}

@keyframes processing {
	0% {
		box-shadow: 0 0 0 0 fade(#1890ff, 45%);
	}

	80% {
		box-shadow: 0 0 0 4px fade(#1890ff, 0%);
	}

	100% {
		box-shadow: 0 0 0 4px fade(#1890ff, 0%);
	}
}
```

Wxml:

```
<van-status status="success" text="成功" />

<van-status status="error" text="错误" />

<van-status status="default" text="默认" />

<van-status status="processing" text="运行中" />

<van-status status="warning" text="警告" />
```

​    

> 共有5种状态颜色：success、error、default、processing、warning

​    

## 描述列表

###### Descriptions

<img src="http://resources.deajax.com/uPic/image-20200828101104940.png" alt="image-20200828101104940" style="zoom:50%;" />

Wxml:

```
<view class="van-descriptions">
	<van-cell-group title="User Info">
		<van-cell title="UserName" value="Zhou Maomao" />
		<van-cell title="Telephone" value="1810000000" />
		<van-cell title="Live" value="Hangzhou, Zhejiang" />
		<van-cell title="Remark" value="empty" />
		<van-cell title="Address" value="No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China" />
	</van-cell-group>
</view>
```

Less:

```
.van-descriptions {
	position  : relative;
	padding   : 8px 0;
	background: white;

	&::after {
		position                : absolute;
		box-sizing              : border-box;
		-webkit-transform-origin: center;
		transform-origin        : center;
		content                 : " ";
		pointer-events          : none;
		top                     : auto;
		right                   : 0;
		bottom                  : 0;
		left                    : 0;
		border-bottom           : 1px solid #ebedf0;
		-webkit-transform       : scaleY(.5);
		transform               : scaleY(.5);
	}

	.van-cell-group {
		&::after {
			content: none !important;
		}
	}

	.van-cell-group__title {
		font-size  : 15px;
		font-weight: 700;
		color      : fade(black, 85%);
		padding    : 8px 16px 12px;
	}

	.van-cell {
		padding: 6px 16px;

		&::after {
			content: none !important;
		}
	}

	.van-cell__title {
		flex: 0 0 96px;
	}

	.van-cell__value {
		text-align: left;
	}
}
```

