import { shallowMount } from '@vue/test-utils';
import Modal from '../Modal.vue';

const textToTest = 'text';

describe('Modal', () => {
  it('renders and contents are shown', () => {
    const wrapper = shallowMount(Modal, {
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
