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
              label:'打卡编号',
              prop:'id'
            },
            {  
              label:'打卡日期',
              prop:'Sname'
            },
            {
              label:'打卡时间',
              prop:'Saddress'
            },
            {
              label:'下班时间',
              prop:'STelephone'
            },
            {
              label:'员工id',
              prop:'STelephone'
            }
          ]
        }
      }
    }
  }
</script>