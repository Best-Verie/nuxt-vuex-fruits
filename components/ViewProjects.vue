<template>
  <a-row>
    <a-col>
      <a-button
        color="primary"
        class="btn-add-project"
        @click="showAddProjectModal()"
      >
        <a-icon type="plus"></a-icon>
        <span>New Project</span>
      </a-button>

      <AddProject ref="modal" />
      <a-modal
        title="Edit project"
        :visible="isModalVisible"
        footer=""
        cancel-text="Cancel"
        ok-text="Save"
        @ok="handleSubmit"
        @cancel="hideAddProjectModal"
        width="60vw"
      >
        <EditProject />
      </a-modal>
    </a-col>
    <a-col v-if="projects">
      <a-table :data-source="projects" :columns="columns" class="projects-tbl">
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
        <template slot="action" slot-scope="text, record">
          <div class="action-icons">
            <span class="eye-icon">
              <a-icon
                type="eye"
                @click="navigateToViewProject(record)"
              ></a-icon>
            </span>
            <span class="edit-icon">
              <a-icon type="edit" @click="showEditProjectModal()"></a-icon>
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
import { mapGetters } from "vuex";

export default {
  name: "ViewProjects",
  data() {
    return {
      isModalVisible: false,
      isEditModalVisible: false,
      searchText: "",
      searchInput: null,
      searchedColumn: "",
      columns: [
        {
          title: "Name",
          dataIndex: "projectName",
          key: "projectName",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender",
          },
          onFilter: (value, record) =>
            record.projectName
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
          title: "startDate",
          dataIndex: "startDate",
          key: "startDate",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender",
          },
          onFilter: (value, record) =>
            record.startDate
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
          title: "targetInvestment",
          dataIndex: "targetInvestment",
          key: "targetInvestment",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender",
          },
          onFilter: (value, record) =>
            record.targetInvestment
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
          title: "investors",
          dataIndex: "investors.length",
          key: "investors",
          scopedSlots: {
            customRender: "customRender",
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
    showAddProjectModal() {
      this.$refs.modal.show();
    },

    hideAddProjectModal() {
      this.isModalVisible = false;
    },

    showEditProjectModal() {
      this.isModalVisible = true;
    },
    hideEditProjectModal() {
      this.isEditModalVisible = false;
    },

    navigateToViewProject(record) {
      console.log(record);
      this.$router.push(`/projects/${record.id}`);
    },

    handleSubmit() {},
  },
  computed: {
    ...mapGetters({
      projects: "projects/projects",
    }),
  },
};
</script>

<style scoped>
.btn-add-project {
  float: right;
  background-color: #001529;
  color: #f0f2f5;
  box-shadow: none;
  border: none;
}
.projects-tbl {
  margin-top: 4em;
}
#addProjectModal {
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
