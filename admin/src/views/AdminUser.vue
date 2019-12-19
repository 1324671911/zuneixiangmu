<template>
    <avue-crud :data="data" :option="option"  :before-close="beforeOpen"></avue-crud>
</template>


<script>
export default {
 data() {
      return {
        obj:{},
        data: [],
        option:{
          title:'管理员管理',
          page:false,
          align:'center',
          menuAlign:'center',
          column:[
             {
              label:'Id',
              prop:'id'
            },
            {  
              label:'管理员',
              prop:'adminuser'
            },
            {
              label:'密码',
              prop:'adminpass'
            }
          ]
        }
      }
    }
  }
</script>