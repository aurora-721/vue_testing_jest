import { mount } from "@vue/test-utils";
import Message from "@/components/MessageComp.vue";

describe("Message.vue", () => {
    it("renders props.msg when passed", () => {
        const wrapper = mount(Message, {
            props: {
                msg: "Hello"
            }
        });
        expect(wrapper.text()).toContain("Hello");
    })
})