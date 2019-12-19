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
          title:'入库列表',
          page:false,
          align:'center',
          menuAlign:'center',
          column:[
             {
              label:'入库编号',
              prop:'id'
            },
            {  
              label:'入库时间',
              prop:'Sname'
            },
            {
              label:'送货人',
              prop:'Saddress'
            },
            {
              label:'核对人',
              prop:'STelephone'
            },
            {
              label:'货物编号',
              prop:'STelephone'
            },
            {
              label:'备注',
              prop:'STelephone'
            },
          ]
        }
      }
    }
  }
</script>