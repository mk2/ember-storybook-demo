import Component from "@ember/component";
import { buildValidations, validator } from "ember-cp-validations";

const Validations = buildValidations({
  title: validator("presence", { presence: true, message: "入力が必要です" }),
});

export default Component.extend(Validations, {
  title: null,
  description: null,
  actions: {
    submit() {
      this.onSubmit(this.title, this.description);
    },
  },
});
