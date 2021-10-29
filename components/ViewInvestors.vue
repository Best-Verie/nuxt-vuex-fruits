<template>
  <a-row>
    <a-col>
      <a-button
        color="primary"
        class="btn-add-Investor"
        @click="showAddInvestorModal()"
      >
        <a-icon type="plus"></a-icon>
        <span>New Investor</span>
      </a-button>

      <AddInvestor ref="modal" />

      <a-modal
        title="Edit a Investor"
        :visible="isEditModalVisible"
        footer=""
        @cancel="hideEditInvestorModal"
        width="50vw"
      >
        <EditInvestor />
      </a-modal>
    </a-col>
    <a-col>
      <a-table :data-source="data" :columns="columns" class="address-tbl">
        <div
          slot="filterDropdown"
          slot-scope="{
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            column,
          }"
          style="padding: 8px"
        >
          <a-input
            v-ant-ref="(c) => (searchInput = c)"
            :placeholder="`Search ${column.dataIndex}`"
            :value="selectedKeys[0]"
            style="width: 188px; margin-bottom: 8px; display: block"
            @change="
              (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
            "
            @pressEnter="
              () => handleSearch(selectedKeys, confirm, column.dataIndex)
            "
          />
          <span
            type="primary"
            icon="search"
            size="small"
            style="width: 90px; margin-right: 8px"
            @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
          >
            Search
          </span>
          <span
            size="small"
            style="width: 90px"
            @click="() => handleReset(clearFilters)"
          >
            Reset
          </span>
        </div>
        <a-icon
          slot="filterIcon"
          slot-scope="filtered"
          type="search"
          :style="{ color: filtered ? '#108ee9' : undefined }"
        />
        <template slot="customRender" slot-scope="text, record, index, column">
          <span v-if="searchText && searchedColumn === column.dataIndex">
            <template
              v-for="(fragment, i) in text
                .toString()
                .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
            >
              <mark
                v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                :key="i"
                class="highlight"
                >{{ fragment }}</mark
              >
              <template v-else>{{ fragment }}</template>
            </template>
          </span>
          <template v-else>
            {{ text }}
          </template>
        </template>
        <template slot="action" slot-scope="index, record">
          <div class="action-icons">
            <span class="eye-icon">
              <a-icon
                type="eye"
                @click="navigateToViewInvestor(record)"
              ></a-icon>
            </span>
            <span class="edit-icon">
              <a-icon
                type="edit"
                @click="showEditInvestorModal(record)"
              ></a-icon>
            </span>
            <span class="delete-icon">
              <a-icon type="delete"></a-icon>
            </span>
          </div>
        </template>
      </a-table>
    </a-col>
  </a-row>
</template>

<script>
const data = [
  {
    id: "1",
    firstName: "EcoKnow",
    lastName: "September 13, 2022",
    email: "knowbeeinc@gmail.com",
    address: "kigali - rwanda",
  },
  {
    id: "2",
    firstName: "Grow green",
    lastName: "September 13, 2022",
    email: "knowbeeinc@gmail.com",
    address: "kigali - rwanda",
  },
  {
    id: "3",
    firstName: "Without Waste",
    lastName: "September 13, 2022",
    email: "knowbeeinc@gmail.com",
    address: "kigali - rwanda",
  },
  {
    id: "4",
    firstName: "Green Life",
    lastName: "September 13, 2022",
    email: "knowbeeinc@gmail.com",
    address: "kigali - rwanda",
  },
  {
    id: "5",
    firstName: "EcoTopia",
    lastName: "September 13, 2022",
    email: "knowbeeinc@gmail.com",
    address: "kigali - rwanda",
  },
  {
    id: "6",
    firstName: "Vitals",
    lastName: "September 13, 2022",
    email: "knowbeeinc@gmail.com",
    address: "kigali - rwanda",
  },
  {
    id: "7",
    firstName: "GlobalMed",
    lastName: "September 13, 2022",
    email: "knowbeeinc@gmail.com",
    address: "kigali - rwanda",
  },
];
export default {
  name: "ViewInvestors",
  data() {
    return {
      isModalVisible: false,
      isEditModalVisible: false,
      data,
      searchText: "",
      searchInput: null,
      searchedColumn: "",
      columns: [
        {
          title: "First Name",
          dataIndex: "firstName",
          key: "firstName",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender",
          },
          onFilter: (value, record) =>
            record.firstName
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          },
        },
        {
          title: "lastName",
          dataIndex: "lastName",
          key: "lastName",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender",
          },
          onFilter: (value, record) =>
            record.lastName
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: "email",
          dataIndex: "email",
          key: "email",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender",
          },
          onFilter: (value, record) =>
            record.email.toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: "address",
          dataIndex: "address",
          key: "address",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender",
          },
          onFilter: (value, record) =>
            record.address
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          },
        },
        {
          title: "Action",
          key: "action",
          scopedSlots: { customRender: "action" },
        },
      ],
    };
  },
  methods: {
    handleSearch(selectedKeys, confirm, dataIndex) {
      confirm();
      this.searchText = selectedKeys[0];
      this.searchedColumn = dataIndex;
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = "";
    },
    showAddInvestorModal() {
      this.$refs.modal.show();
    },

    hideAddInvestorModal() {
      this.isModalVisible = false;
    },

    showEditInvestorModal(investor) {
      console.log(investor.id);
      this.isEditModalVisible = true;
    },

    navigateToViewInvestor(investor) {
      console.log(investor.id);
      this.$router.push(`/investors/${investor.id}`);
    },

    hideEditInvestorModal() {
      this.isEditModalVisible = false;
    },
  },
};
</script>

<style scoped>
.btn-add-Investor {
  float: right;
  background-color: #001529;
  color: #f0f2f5;
  box-shadow: none;
  border: none;
}
.address-tbl {
  margin-top: 4em;
}
#addInvestorModal {
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
