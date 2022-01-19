import Undead from '../Undead';

describe('Undead class:', () => {
  test('should return object', () => {
    const hero = new Undead('Undead');

    const trueHero = {
      name: 'Undead',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    };

    expect(hero).toEqual(trueHero);
  });
});
