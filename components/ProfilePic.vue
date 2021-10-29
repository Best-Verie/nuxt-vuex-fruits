<template>
  <div class="clearfix">
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      :file-list="fileList"
      @preview="handlePreview"
      @change="handleChange"
      class="photo"
    >
      <div v-if="fileList.length < 1">
        <a-icon type="plus" />
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
export default {
  data() {
    return {
      previewVisible: false,
      previewImage: "",
      fileList: [],
    };
  },
  methods: {
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
  },
};
</script>
<style>
.photo {
  margin-top: 25%;
  margin-left: 15%;
  border: 1px solid gainsboro;
  border-radius: 50%;
  margin-left: 4em;
  width: 35%;
  max-width: 230px;
  max-height: 230px;
  display: block;
}
.ant-upload.ant-upload-select-picture-card {
  display: table;
  float: left;
  width: 150px;
  height: 150px;
  margin-right: 8px;
  margin-bottom: 8px;
  text-align: center;
  vertical-align: top;
  background-color: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s ease;
}
.ant-upload-list-picture-card .ant-upload-list-item {
  float: left;
  width: 200px;
  height: 200px;
  box-sizing: 50%;
}
element.style {
  width: 75%;
  max-height: 75%;
}
.ant-modal-body {
  padding: 24px;
  font-size: 10px;
  line-height: 0;
  width: 350px;
  height: 550px;
  word-wrap: break-word;
}
</style>
