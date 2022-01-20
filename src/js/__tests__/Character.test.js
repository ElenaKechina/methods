import Character from '../Character';

describe('Character class:', () => {
  test('should return Error', () => {
    expect(() => {
      const hero = new Character('12345678');
      delete hero.name;
    }).toThrow();

    expect(() => {
      const hero = new Character('l', 'Magician');
      delete hero.name;
    }).toThrow();

    expect(() => {
      const hero = new Character('longStringggggg', 'Magician');
      delete hero.name;
    }).toThrow();

    expect(() => {
      const hero = new Character('Elena', 'Magicia');
      delete hero.name;
    }).toThrow();
  });

  test('should return object', () => {
    const hero = new Character('Merlin', 'Magician');

    const Merlin = {
      name: 'Merlin',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
    };

    expect(hero).toEqual(Merlin);
  });

  test('should return an error when the method is called', () => {
    const hero = new Character('Merlin', 'Magician');
    hero.health = 0;

    expect(() => {
      hero.levelUp();
    }).toThrow();

    expect(() => {
      hero.damage(20);
    }).toThrow();
  });

  test('should return the correct object on the method "levelUp"', () => {
    const hero = new Character('Merlin', 'Magician');
    hero.attack = 100;
    hero.defence = 200;

    const trueMerlin = {
      name: 'Merlin',
      type: 'Magician',
      health: 100,
      level: 2,
      attack: 120,
      defence: 240,
    };

    hero.levelUp();

    expect(hero).toEqual(trueMerlin);
  });

  test('should return the correct object on the method "damage"', () => {
    const hero = new Character('Merlin', 'Magician');
    hero.attack = 10;
    hero.defence = 10;

    const trueMerlin = {
      name: 'Merlin',
      type: 'Magician',
      health: 91,
      level: 1,
      attack: 10,
      defence: 10,
    };

    hero.damage(10);

    expect(hero).toEqual(trueMerlin);
  });
});
