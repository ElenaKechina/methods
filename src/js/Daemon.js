import Character from './Character';

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 100, 1, 10, 40);
  }
}

export default Daemon;
