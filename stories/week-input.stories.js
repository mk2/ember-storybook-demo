import { action } from "@storybook/addon-actions";
import { hbs } from "ember-cli-htmlbars";

export default {
  title: "WeekInput",
  argTypes: {
    startHour: { control: { type: "range", min: 0, max: 24, step: 1 } },
    endHour: {
      control: { type: "range", min: 0, max: 24, step: 1 },
    },
  },
};

export const Template = ({ startHour, endHour, ...args }) => ({
  template: hbs`
  <WeekInput
    @schedule={{schedule}}
    @scheduleInput={{scheduleInput}}
    @onSave={{onSave}}
    onCancel={{onCancel}} />
  `,
  context: {
    onSave: () => action("onSave")(),
    onCancel: () => action("onCancel")(),
    scheduleInput: {
      monHours: [],
      tueHours: [],
      wedHours: [],
      thuHours: [],
      friHours: [],
      satHours: [],
      sunHours: [],
    },
    schedule: {
      startHour,
      endHour,
    },
    ...args,
  },
});

Template.args = {
  startHour: 9,
  endHour: 19,
};
