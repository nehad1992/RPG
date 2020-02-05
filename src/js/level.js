export class Level {
  constructor(id, experience) {
    this.id = id;
    this.experience = experience;
  }
  changeLevel() {
    let experience = this.experience * 2;
    let newLevel = new Level(this.id + 1, experience);
    return newLevel;
  }
}
