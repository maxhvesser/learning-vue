<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle favorite</button>
    <button @click="toggleDetailsVisibility">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="deleteFriend">Delete</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: {
    'toggle-favorite': function(id) {
      return !!id;
    },
    'delete-friend': function(id) {
      return !!id;
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetailsVisibility() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend() {
      this.$emit('delete-friend', this.id);
    },
  },
};
</script>