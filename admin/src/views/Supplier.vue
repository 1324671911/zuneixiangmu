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
          title:'供货商列表',
          page:false,
          align:'center',
          menuAlign:'center',
          column:[
             {
              label:'Id',
              prop:'id'
            },
            {  
              label:'供货商姓名',
              prop:'Sname'
            },
            {
              label:'供货商地址',
              prop:'Saddress'
            },
            {
              label:'供货商电话',
              prop:'STelephone'
            }
          ]
        }
      }
    }
  }
</script>