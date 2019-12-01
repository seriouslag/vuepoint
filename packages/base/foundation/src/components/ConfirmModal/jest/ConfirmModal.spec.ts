import { shallowMount } from '@vue/test-utils';
import ConfirmModal from '../ConfirmModal.vue';

const textToTest = 'text';

describe('ConfirmModal', () => {
  it('renders and contents are shown', () => {
    const wrapper = shallowMount(ConfirmModal, {
      propsData: {
        value: true,
      },
      slots: {
        default: textToTest,
      },
    });
    // TODO add additional expects for other slots
    expect(wrapper.text()).toContain(textToTest);
  });
});
