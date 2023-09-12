<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary offset-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
    new Post
  </button>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">Tag</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Gift Tag">
            </div>
            <div class="mb-3">
              <label name="{{ gift.url }}" for="{{gift.url}}" class="form-label">URL</label>
              <input type="url" class="form-control" id="url" placeholder="URL link">
            </div>

          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button @click="createGift()" type="button" class="btn btn-primary">Send Gift</button>
        </div>
      </div>
    </div>
  </div>

  <section class="row bg-secondary">

    <GiftCard class="col-3 m-2 d-flex" v-for="gift in gifts" :key="gift.id" :gift="gift" />

  </section>
</template>

<script>
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js'
import { giftService } from '../services/GiftService.js';
import { computed, onMounted } from 'vue';







export default {
  setup() {
    onMounted(getGifts);

    async function getGifts() {
      try {
        logger.log(' getting gifts!');
        await giftService.getGifts(FormData);
      }
      catch (error) {
        Pop.error(error);
      }
    }

    async function createGift() {
      try {

        await giftService.createGift()
      } catch (error) {
        Pop.error(error)
      }
    }


    return {
      getGifts,
      createGift,
      gifts: computed(() => AppState.gifts),

    };
  },

}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
