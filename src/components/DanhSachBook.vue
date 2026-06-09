<script setup>
import { ref, reactive } from "vue";

defineProps({
  msg: {
    listBooks: Array,
  },
});
</script>

<template>
  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Tên</th>
        <th>Loại</th>
        <th>Tác giả</th>
        <th>Giá</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="b in listBooks" :key="b.listBooks">
        <td>{{ b.id }}</td>
        <td>{{ b.ten }}</td>
        <td>{{ b.loai }}</td>
        <td>{{ b.tacGia }}</td>
        <td>{{ b.gia }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
