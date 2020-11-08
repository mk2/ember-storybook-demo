import { action } from "@ember/object";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

function generateHours(startHour, endHour) {
  return Array.from({ length: endHour - startHour + 1 }, (_, v) => v + startHour).map(
    (v) => `${v}:00`
  );
}

export default class ScheduleWeekInputComponent extends Component {
  @tracked
  hours = [];

  @action
  setupHours() {
    const startHour = this.args.schedule.startHour;
    const endHour = this.args.schedule.endHour;
    this.hours = generateHours(startHour, endHour);
  }

  @action
  updateName(e) {
    this.args.scheduleInput.name = e.target.value;
  }
}
