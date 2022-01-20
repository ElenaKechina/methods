const TYPE_ALLOWED_VALUES = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

class Character {
  constructor(name, type, attack = 0, defence = 0) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }

    if (!TYPE_ALLOWED_VALUES.includes(type)) {
      throw new Error('Неверный тип героя');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Умершему персонажу нельзя повысить уровень');
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Нельзя бить умершего');
    }

    this.health -= points * (1 - this.defence / 100);
  }
}

export default Character;
