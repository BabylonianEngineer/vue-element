import {get,post} from '../../utils/axios'

export default {
  namespaced:true,
  state:{
    title:"员工管理",
    list:null,
    total:0,
    listQuery:{
      page:1,
      limit:5,
    },
    dialogVisible:false,
    input:{
      username:null,
      province:null,
      city:null,
    }
  },
  mutations:{
    getName(state){
      console.log(state.title);
    },

  },
  actions:{
    fetchData(context){
      // get("/waiter/findAll").then((msg)=>{
      //   context.state.list=msg.data;
      //   // console.log(context.state.list);
      //   console.log(msg);
      // })
      post('/waiter/query',{
        page:context.state.listQuery.page-1,
        pageSize:context.state.listQuery.limit
      }).then((msg)=>{
        console.log(msg.data);
        context.state.total=msg.data.total
        // context.commit('SET_WAITER',msg.data.list)
        context.state.list=msg.data.list
      })
    },
    handleClose(context){
      context.state.dialogVisible=false

    },
    handleAdd(context){
      context.state.input={}
      context.state.dialogVisible=true

    },
    handleEdit(context,data){
      console.log("要修改的数据为"+{data});
      context.state.input=data
      context.state.dialogVisible=true
    },
    handleFindById(context,data){
      console.log("要查询的ID为"+{data});
      get('/waiter/findWaiterById?id='+id).then((msg)=>{
        console.log(msg.data);//输出查询到的数据

      })
    },
    handleSave(context,data){
      post('/waiter/saveOrUpdate',context.state.input).then((msg)=>{
        console.log(msg)
        context.state.dialogVisible=false;
        context.dispatch('fetchData');
      })
    },
    handleDelete(context,id){
      console.log("要删除的Id为"+id);
      if(confirm('是否删除？')){
        get('/waiter/deleteById?id='+id).then((msg)=>{
          console.log(msg);
          context,dispatch('fetchData');
        })

      }


    }

  }

}
