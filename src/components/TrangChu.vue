<script setup>
import { ref, reactive } from "vue";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const books = reactive([
  {
    id: "1",
    ten: "bruh",
    loai: "1",
    tacGia: "quak",
    gia: 10000,
  },
  {
    id: "2",
    ten: "quak",
    loai: "2",
    tacGia: "bruh",
    gia: 20000,
  },
]);
</script>

<template>
  <div class="container d-flex justify-content: center">
    <form>
      <h2 text-center>Quản lý sách</h2>
      <br />
      Tên: <input type="" /><br />
      Loại:
      <select>
        <option>Sách thiếu nhi</option>
        <option>Truyện tranh</option>
        <option>Sách văn học</option>
      </select>
      <br />
      Tác giả: <input type="" />
      <br />
      Giá: <input type="" />
      <br />
    </form>
    <button>Thêm</button>
    <button>Cập nhật</button>
  </div>
</template>

<style scoped></style>
