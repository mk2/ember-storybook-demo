import { action } from "@storybook/addon-actions";
import { hbs } from "ember-cli-htmlbars";

export default {
  title: "SampleForm",
  argTypes: {},
};

export const Template = () => ({
  template: hbs`<SampleForm />`,
  context: {
    submit: () => action("onSubmit")(),
  },
});
