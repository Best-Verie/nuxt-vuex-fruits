<template>
  <a-row>
    <a-col>
      <a-button
        color="primary"
        class="btn-add-investor"
        @click="showAddInvestorModal()"
      >
        <a-icon type="plus"></a-icon>
        <span>New Investor</span>
      </a-button>
      <AddInvestor ref="modal" />

      <a-modal
        title="Edit Investor"
        :visible="isEditModalVisible"
        footer=""
        cancel-text="Cancel"
        ok-text="Save"
        @ok="handleSubmit"
        @cancel="hideEditModal"
        width="50vw"
      >
        <EditInvestor />
      </a-modal>
    </a-col>
    <a-col>
      <a-table :columns="columns" :data-source="data" class="investors-tbl">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="tags" slot-scope="tags">
          <a-tag
            v-for="tag in tags"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
        <template slot="action" slot-scope="index, record">
          <div class="action-icons">
            <span class="eye-icon">
              <a-icon
                type="eye"
                @click="navigateToViewInvestor(record)"
              ></a-icon>
            </span>
            <span class="edit-icon">
              <a-icon type="edit" @click="showEditInvestorModal()"></a-icon>
            </span>
            <span class="delete-icon">
              <a-icon type="delete" ></a-icon>
            </span>
          </div>
        </template>
      </a-table>
    </a-col>
  </a-row>
</template>
<script>
const columns = [
  {
    dataIndex: "firstName",
    key: "firstName",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "firstName" },
  },
  {
    title: "lastName",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    id: "1",
    firstName: "John Brown",
    lastName: 32,
    email: "irabestverie2016@gmail.com",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    id: "2",
    firstName: "Jim Green",
    lastName: 42,
    email: "irabestverie2016@gmail.com",
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    id: "3",
    firstName: "Joe Black",
    lastName: 32,
    email: "irabestverie2016@gmail.com",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default {
  name: "ViewInvestors",
  data() {
    return {
      isModalVisible: false,
      isEditModalVisible: false,
      data,
      columns,
    };
  },
  methods: {
    showAddInvestorModal() {
      this.$refs.modal.show();
    },
    showEditInvestorModal() {
      this.isEditModalVisible = true;
    },

    navigateToViewInvestor(record) {
      this.$router.push(`/investors/${record.id}`);
    },
    hideEditModal() {
      this.isEditModalVisible = false;
    },
    handleSubmit() {
      console.log("hey");
    },
  },
};
</script>
<style scoped>
.btn-add-investor {
  float: right;
  background-color: #001529;
  color: #f0f2f5;
  box-shadow: none;
  border: none;
  margin-top: 3em;
}
.investors-tbl {
  margin-top: 6em;
}
#addinvestorModal {
  display: none;
}
.addModal {
  width: 40em;
}
.eye-icon {
  color: #001529;
  font-size: 1.3em;
}
.delete-icon {
  color: #a30202;
  font-size: 1.3em;
}
.edit-icon {
  color: #04583d;
  font-size: 1.3em;
}
.action-icons span {
  padding: 10px;
}
</style>