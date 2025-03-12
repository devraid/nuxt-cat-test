<script setup lang="ts">
import { ref, computed } from "vue";

interface Category {
  name: string;
  subcategories: Category[];
}

const categories: Category[] = [
  {
    name: "category1",
    subcategories: [
      { name: "category2", subcategories: [] },
      {
        name: "category3",
        subcategories: [{ name: "category4", subcategories: [] }],
      },
    ],
  },
  { name: "category5", subcategories: [] },
];

const getCategoryFinalPath = (
  categories: Category[],
  categoryName: string,
  path: string[] = []
): string | null => {
  for (const { name, subcategories } of categories) {
    const newPath = [...path, name];
    if (name === categoryName) return `/${newPath.join("/")}`;
    const subPath = getCategoryPath(subcategories, categoryName, newPath);
    if (subPath) return subPath;
  }
  return null;
};

const modelQuery = ref("");

const getResult = computed(() =>
  modelQuery.value
    ? getCategoryFinalPath(categories, modelQuery.value) || "Not found"
    : null
);
</script>

<template>
  <div class="wrapper">
    <h1>Find a category by typing a path</h1>
    <p>
      E.g, try these ones: category1, category2, category3, category4,
      category5.
    </p>
    <input v-model="modelQuery" placeholder="Enter a category name" />
    <p v-if="getResult">Result: {{ getResult }}</p>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 25px;
}
input {
  flex: 1;
  padding: 8px 15px;
  border: solid 2px blue;
  border-radius: 10px;
  font-size: 1rem;
  height: 40px;
}
h1 {
  font-weight: bold;
}
p {
  margin-bottom: 15px;
}
</style>
