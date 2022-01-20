import Character from './Character';

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 10, 40);
    // this.attack = 10;
    // this.defence = 40;
  }
}

export default Daemon;
