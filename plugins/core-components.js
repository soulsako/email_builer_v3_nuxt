// Register Global Components
import Vue from 'vue';

import BaseButton from '@/components/NewTemplateComponents/SubComponents/BaseButton.vue'
import BaseColumn from '@/components/NewTemplateComponents/SubComponents/BaseColumn.vue'
import HeaderImage from '@/components/NewTemplateComponents/HeaderImage.vue'
import SingleApparel from '@/components/NewTemplateComponents/SingleApparel.vue'
import SingleFootwear from '@/components/NewTemplateComponents/SingleFootwear.vue'
import TwoColumn from '@/components/NewTemplateComponents/TwoColumn.vue'
import TextAndCta from '@/components/NewTemplateComponents/TextAndCta.vue'
import ProductDetails from '@/components/FormInputs/ProductEditor/ProductDetails.vue'
import ProductStyles from '@/components/FormInputs/ProductEditor/ProductStyles.vue'
import ProductEditor from '@/components/FormInputs/ProductEditor/ProductEditor.vue'
import ProductModal from '@/components/Modal/ProductModal.vue'
import ImageGrid from '@/components/UI/ImageGrid.vue'
import AlertMessage from '@/components/UI/AlertMessage.vue'
import { Sketch } from 'vue-color';


Vue.component('BaseButton', BaseButton);
Vue.component('BaseColumn', BaseColumn);
Vue.component('HeaderImage', HeaderImage);
Vue.component('SingleApparel', SingleApparel);
Vue.component('SingleFootwear', SingleFootwear);
Vue.component('TwoColumn', TwoColumn);
Vue.component('TextAndCta', TextAndCta);
Vue.component('ProductDetails', ProductDetails);
Vue.component('ProductStyles', ProductStyles);
Vue.component('ProductEditor', ProductEditor);
Vue.component('ProductModal', ProductModal);
Vue.component('ImageGrid', ImageGrid);
Vue.component('AlertMessage', AlertMessage);
Vue.component('sketch-picker', Sketch);


