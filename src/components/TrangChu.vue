<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
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
  </div>
</template>

<style scoped></style>
