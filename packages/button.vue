<template>
  <button class="g-button" :class="[`g-button-${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
  }]" @click="handleClick" :disabled="disabled">
    <!-- slot表示插槽，用于要用户自定义的内容 -->
    <!-- 传了icon才使用图标，没有传icon属性则不使用 -->
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'GButton',
  // 封装一个通用的组件，会对props做一个约束，即对props进行校验，校验方法参考官网
  props: {
    type: {
      // 数据类型：字符串
      type: String,
      default: 'default'// 不传type值，传默认值
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.g-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-apprearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.g-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}

.g-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}

.g-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}

.g-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}

.g-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}

// 朴素按钮样式
.g-button.is-plain {

  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}

.g-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;

  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}

.g-button-success.is-plain {
  color: #67c23a;
  background: #c2e7b0;

  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.g-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;

  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}

.g-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;

  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}

.g-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;

  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
.g-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}
.g-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// 意思是只要类名中包括g-icon就调用该样式
[class*='g-icon'] {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.g-button [class*=g-icon]+span {
  margin-left: 5px;
}
// disabled样式
.g-button.is-disabled{
   cursor: no-drop;
}
</style>
