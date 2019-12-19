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
          title:'员工列表',
          page:false,
          align:'center',
          menuAlign:'center',
          column:[
             {
              label:'员工编号',
              prop:'id'
            },
            {  
              label:'员工名称',
              prop:'Sname'
            },
            {
              label:'员工入职日期',
              prop:'Saddress'
            },
            {
              label:'员工工资',
              prop:'STelephone'
            },
            {
              label:'状态',
              prop:'STelephone'
            },
            {
              label:'备注',
              prop:'STelephone'
            },
            {
              label:'员工电话',
              prop:'STelephone'
            },
            {
              label:'员工身份证',
              prop:'STelephone'
            },
          ]
        }
      }
    }
  }
</script>