<template>
  <div class="app-container">
    <el-button size="mini"
               @click="handleAdd">添加</el-button>

    <el-table
      :data="list"
      border
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="180">
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市">
      </el-table-column>
      <el-table-column
        prop="telephone"
        label="电话号码">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <pagination v-show="total>0"
                :total="total"
                :page.sync="listQuery.page"
                :limit.sync="listQuery.limit"
                @pagination="fetchData"/>

    <el-dialog title="保存员工信息"
               :visible.sync="dialogVisible"
               width="30%"
               :before-close="handleClose">
      <p>用户名：<el-input v-model="input.username" placeholder="请输入内容"></el-input></p>
      <p>省份：<el-input v-model="input.province" placeholder="请输入内容"></el-input></p>
      <p>城市：<el-input v-model="input.city" placeholder="请输入内容"></el-input></p>
  <span slot="footer"
        class="dialog-footer">
    <el-button @click="handleClose">取消</el-button>
    <el-button type="primary" @click="handleSave">确定</el-button>
  </span>
    </el-dialog>

  </div>
</template>

<script>
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination



  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState('waiters', ['title', 'list','listQuery','total','input','dialogVisible'])

    },
    components: {Pagination},

    data() {
      return {
        listLoading: false,

      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      ...mapMutations('waiters', ['getName']),
      ...mapActions('waiters', ['fetchData','handleClose','handleAdd','handleSave','handleEdit','handleDelete']),


    }
  }
</script>
