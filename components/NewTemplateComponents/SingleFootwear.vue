<template>
<!-- Insert background image dynamically using the src prop passed in -->
  <div class="singlefootwear">
    <div class="singlefootwear__top" :style="{ backgroundImage: 'url(' + src + ')' }">
      <div v-if="exclusive" class="singlefootwear__exclusive">
        <!--Insert exclusive logo dynamically using exclusive file and computed property -->
        <img :src="exclusiveImg" alt="Only Available at JD" class="singlefootwear__exclusive-img">
      </div>
    </div>
    
    <div class="singlefootwear__bottom">
      <div class="singlefootwear__info">
      <div class="singlefootwear__info-brand">{{ brand }}</div>
      <div class="singlefootwear__info-description">{{ title }}</div>
      <!-- Only show old price if sale prop is true -->
      <div class="singlefootwear__info--price">
      <span v-if="sale" class="singlefootwear__info-oldprice">{{ currency.gb}}{{ was }}</span>
      <span :style="{color: compPriceColor}" class="singlefootwear__info-price">{{ currency.gb}}{{ price }}</span>
      </div>
    </div>
        <BaseButton
        :color="compBtnColor"
        :background="btnBackground"
        >Shop now</BaseButton>
    </div>
  </div>
</template>

<script>
import ExclusiveImage from '@/exclusive'
import Currency from '@/currency'

const stringRequired = { required: true, type: String },
booleanNotRequired = { required: false, default: () => false, type: Boolean },
stringNotRequired = {required: false, type: String},
numberRequired = {type: Number, required: true};

  export default {
    name: 'SingleFootwear',
    data() {
      return {
        currency: Currency
      }
    },
    props: {
      sale: booleanNotRequired, 
      women: booleanNotRequired, 
      src: stringRequired, 
      brand: stringRequired,
      title: stringRequired,
      url: stringRequired, 
      exclusive: booleanNotRequired, 
      price: numberRequired,
      priceColor: stringNotRequired, 
      was: numberRequired, 
      button: booleanNotRequired, 
      btnColor: stringNotRequired, 
      btnBackground: stringNotRequired
    }, 
    computed: {
      exclusiveImg(){
        return this.women ? ExclusiveImage.gb.women : ExclusiveImage.gb.men
      }, 
      compBtnColor(){
        return this.sale ? '#e72933' : this.btnColor
      }, 
      compPriceColor(){
        return this.sale ? '#e72933' : this.priceColor
      }
    }
  }
</script>

<style lang="scss" scoped>
  .singlefootwear {
    display: inline-block;
    text-transform: uppercase;
    &__top {
      position: relative;
      height: 40rem;
      width: 56rem;
      background-size: cover;
      background-position: center;
    }

    &__exclusive {
     @include exclusiveBig;

      &-img {
        display: block;
        width: 100%;
      }
    }
    &__bottom {
      @include flexCenterY;
      justify-content: space-between;
      padding: 3rem 0;
    }
    &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        color: #111;

      &-oldprice {
        text-decoration: line-through;
        margin-right: .2rem;
        color: #111;
      }
      &-brand, &-price, &-oldprice {
      font-weight: bold;
      }
    }
  }
  
</style>