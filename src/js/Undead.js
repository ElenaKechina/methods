import Character from './Character';

class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 100, 1, 25, 25);
  }
}

export default Undead;
