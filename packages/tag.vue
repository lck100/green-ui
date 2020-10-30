<template>
  <span class="g-tag_content"
    :class="[`g-tag_type_${type}`]"
    :type="type"
    :style="{backgroundColor:bgColor, color:color}">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'GTag',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    bgColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
.g-tag_content {
  padding: 4px;
  margin: 2px;
  display: inline-block;
  padding: 4px;
  margin: 2px;
  font-size: 14px;
}
.g-tag_type_default, .g-tag_type_primary {
  color: #409EFF;
  background-color: #ECF5FF;
}
.g-tag_type_success {
  color: #67C23A;
  background-color: #F0F9EB;
}
.g-tag_type_info {
  color: #909399;
  background-color: #F4F4F5;
}
.g-tag_type_warning {
  color: #E6A23C;
  background-color: #FDF6EC;
}
.g-tag_type_danger {
  color: #F56C6C;
  background-color: #FEF0F0;
}
</style>
