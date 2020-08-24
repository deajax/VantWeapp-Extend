# VantWeapp-Extend
VantWeapp小程序组件扩展样式


## Field vertical

###### 输入框垂直排列

<img src="/Users/hanbin/Library/Application Support/typora-user-images/image-20200824084047040.png" alt="image-20200824084047040" style="zoom: 33%;" />

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

<img src="/Users/hanbin/Library/Application Support/typora-user-images/image-20200824085143020.png" alt="image-20200824085143020" style="zoom: 33%;" />

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
			border-radius: 8px;
			overflow     : hidden;

			&.van-hairline--top-bottom:after {
				border-radius: 16px;
			}
		}
	}
}
```

​    

## 拓展式标题栏

###### Extend Navbar

<img src="/Users/hanbin/Library/Application Support/typora-user-images/image-20200824104727019.png" alt="image-20200824104727019" style="zoom:33%;" />

Wxml:

```
<!-- 可以通过更改 van-navbar-extend 的背景颜色、文字颜色来改变导航的颜色 -->
<view class="van-navbar-extend">
	<van-nav-bar title="导航栏标题" safe-area-inset-top="{{ false }}">
		<view slot="right" class="navbar-extra">
			<navigator>按钮</navigator>
			<navigator style="margin-left: 16px">按钮</navigator>
		</view>
	</van-nav-bar>
</view>
```

Less:

```
.van-navbar-extend {
	background: white;

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
		color       : black;
	}

	.van-nav-bar__right {
		line-height: 1.5715;
	}

	.navbar-extra {
		display    : flex;
		align-items: center;
	}
}
```

